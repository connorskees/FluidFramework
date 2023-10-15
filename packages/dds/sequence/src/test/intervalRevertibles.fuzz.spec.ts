/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import * as path from "path";
import { strict as assert } from "assert";
import {
	createWeightedAsyncGenerator as createWeightedGenerator,
	AsyncGenerator as Generator,
	takeAsync as take,
} from "@fluid-internal/stochastic-test-utils";
import {
	createDDSFuzzSuite,
	DDSFuzzModel,
	DDSFuzzHarnessEvents,
	DDSFuzzSuiteOptions,
} from "@fluid-internal/test-dds-utils";
import { TypedEventEmitter } from "@fluid-internal/client-utils";
import { FlushMode } from "@fluidframework/runtime-definitions";
import {
	appendAddIntervalToRevertibles,
	appendChangeIntervalToRevertibles,
	appendDeleteIntervalToRevertibles,
	appendIntervalPropertyChangedToRevertibles,
	appendSharedStringDeltaToRevertibles,
} from "../revertibles";
import { assertEquivalentSharedStrings } from "./intervalUtils";
import {
	Operation,
	FuzzTestState,
	RevertOperation,
	makeReducer,
	RevertibleSharedString,
	isRevertibleSharedString,
	IntervalOperationGenerationConfig,
	RevertSharedStringRevertibles,
	SharedStringFuzzFactory,
} from "./intervalCollection.fuzzUtils";
import { makeOperationGenerator } from "./intervalCollection.fuzz.spec";

const emitter = new TypedEventEmitter<DDSFuzzHarnessEvents>();

emitter.on("clientCreate", (client) => {
	const channel = client.channel as RevertibleSharedString;
	channel.revertibles = [];
	channel.isCurrentRevert = false;

	channel.on("createIntervalCollection", (label) => {
		const collection = channel.getIntervalCollection(label);

		assert(isRevertibleSharedString(channel));
		collection.on("addInterval", (interval, local, op) => {
			if (local && !channel.isCurrentRevert) {
				appendAddIntervalToRevertibles(interval, channel.revertibles);
			}
		});
		collection.on("deleteInterval", (interval, local, op) => {
			if (local && !channel.isCurrentRevert) {
				appendDeleteIntervalToRevertibles(channel, interval, channel.revertibles);
			}
		});
		collection.on("changeInterval", (interval, previousInterval, local, op, slide) => {
			if (local && !channel.isCurrentRevert && !slide) {
				appendChangeIntervalToRevertibles(
					channel,
					interval,
					previousInterval,
					channel.revertibles,
				);
			}
		});
		collection.on("propertyChanged", (interval, propertyDeltas, local, op) => {
			if (local && !channel.isCurrentRevert) {
				appendIntervalPropertyChangedToRevertibles(
					interval,
					propertyDeltas,
					channel.revertibles,
				);
			}
		});
		channel.on("sequenceDelta", (op) => {
			if (op.isLocal && !channel.isCurrentRevert) {
				appendSharedStringDeltaToRevertibles(channel, op, channel.revertibles);
			}
		});
	});
});

const intervalTestOptions: Partial<DDSFuzzSuiteOptions> = {
	validationStrategy: { type: "fixedInterval", interval: 10 },
	reconnectProbability: 0,
	numberOfClients: 3,
	clientJoinOptions: {
		maxNumberOfClients: 6,
		clientAddProbability: 0,
	},
	// Once the bugs are resolved, the test count will go back to being set at 100.
	defaultTestCount: 100,
	// Uncomment this line to replay a specific seed from its failure file:
	// replay: 0,
	saveFailures: { directory: path.join(__dirname, "../../src/test/results") },
	parseOperations: (serialized: string) => {
		const operations: Operation[] = JSON.parse(serialized);
		// Replace this value with some other interval ID and uncomment to filter replay of the test
		// suite to only include interval operations with this ID.
		// const filterIntervalId = "00000000-0000-0000-0000-000000000000";
		// if (filterIntervalId) {
		// 	return operations.filter((entry) =>
		// 		[undefined, filterIntervalId].includes((entry as any).id),
		// 	);
		// }
		return operations;
	},
};

const optionsWithEmitter: Partial<DDSFuzzSuiteOptions> = {
	...intervalTestOptions,
	emitter,
};

type ClientOpState = FuzzTestState;
function operationGenerator(
	optionsParam: IntervalOperationGenerationConfig,
): Generator<RevertOperation, ClientOpState> {
	async function revertSharedStringRevertibles(
		state: ClientOpState,
	): Promise<RevertSharedStringRevertibles> {
		assert(isRevertibleSharedString(state.client.channel));
		return {
			type: "revertSharedStringRevertibles",
			// grab a random number of edits to revert
			editsToRevert: state.random.integer(1, state.client.channel.revertibles.length),
		};
	}

	const hasRevertibles = ({ client }: ClientOpState): boolean => {
		assert(isRevertibleSharedString(client.channel));
		return client.channel.revertibles.length > 0;
	};

	assert(optionsParam.weights !== undefined);
	const baseGenerator = makeOperationGenerator(optionsParam, true);
	return createWeightedGenerator<RevertOperation, ClientOpState>([
		[revertSharedStringRevertibles, optionsParam.weights.revertWeight, hasRevertibles],
		[baseGenerator, 1],
	]);
}

describe("IntervalCollection fuzz testing", () => {
	const model: DDSFuzzModel<SharedStringFuzzFactory, RevertOperation, FuzzTestState> = {
		workloadName: "interval collection with revertibles",
		generatorFactory: () =>
			take(
				100,
				// Weights are explicitly defined here while bugs are being resolved. Once resolved,
				// the weights in the defaultOptions parameter will be used.
				operationGenerator({
					weights: {
						revertWeight: 2,
						addText: 2,
						removeRange: 1,
						addInterval: 2,
						deleteInterval: 2,
						changeInterval: 2,
						changeProperties: 2,
					},
				}),
			),
		reducer:
			// makeReducer supports a param for logging output which tracks the provided intervalId over time:
			// { intervalId: "00000000-0000-0000-0000-000000000000", clientIds: ["A", "B", "C"] }
			makeReducer(),
		validateConsistency: assertEquivalentSharedStrings,
		factory: new SharedStringFuzzFactory(),
	};

	createDDSFuzzSuite(model, optionsWithEmitter);
});

describe("IntervalCollection fuzz testing with rebasing", () => {
	const model: DDSFuzzModel<SharedStringFuzzFactory, RevertOperation, FuzzTestState> = {
		workloadName: "interval collection with revertibles and rebasing",
		generatorFactory: () =>
			take(
				100,
				// Weights are explicitly defined here while bugs are being resolved. Once resolved,
				// the weights in the defaultOptions parameter will be used.
				operationGenerator({
					weights: {
						revertWeight: 2,
						addText: 2,
						removeRange: 1,
						addInterval: 2,
						deleteInterval: 2,
						changeInterval: 2,
						changeProperties: 2,
					},
				}),
			),
		reducer:
			// makeReducer supports a param for logging output which tracks the provided intervalId over time:
			// { intervalId: "00000000-0000-0000-0000-000000000000", clientIds: ["A", "B", "C"] }
			makeReducer(),
		validateConsistency: assertEquivalentSharedStrings,
		factory: new SharedStringFuzzFactory(),
	};

	createDDSFuzzSuite(model, {
		...optionsWithEmitter,
		rebaseProbability: 0.15,
		containerRuntimeOptions: {
			flushMode: FlushMode.TurnBased,
			enableGroupedBatching: true,
		},
		// Skipped due to 0x54e, see AB#5337 or comment on "default interval collection" fuzz suite.
		skip: [13, 16, 17, 20, 21, 23, 30, 37, 41, 43, 44, 49, 51, 55, 62, 69, 70, 73, 84, 91, 95],
	});
});
