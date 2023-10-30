/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import * as path from "path";
import { strict as assert } from "assert";
import {
	AcceptanceCondition,
	combineReducersAsync as combineReducers,
	AsyncReducer as Reducer,
} from "@fluid-internal/stochastic-test-utils";
import {
	DDSFuzzModel,
	DDSFuzzSuiteOptions,
	DDSFuzzTestState,
} from "@fluid-internal/test-dds-utils";
import {
	IChannelAttributes,
	IChannelServices,
	IFluidDataStoreRuntime,
} from "@fluidframework/datastore-definitions";
import { PropertySet } from "@fluidframework/merge-tree";
import { revertSharedStringRevertibles, SharedStringRevertible } from "../../revertibles";
import { SharedStringFactory } from "../../sequenceFactory";
import { SharedString } from "../../sharedString";
import { Side } from "../../intervalCollection";
import { assertEquivalentSharedStrings } from "../intervalUtils";

export type RevertibleSharedString = SharedString & {
	revertibles: SharedStringRevertible[];
	// This field prevents change events that are emitted while in the process of a revert from
	// being added into the revertibles stack.
	isCurrentRevert: boolean;
};
export function isRevertibleSharedString(s: SharedString): s is RevertibleSharedString {
	return (s as RevertibleSharedString).revertibles !== undefined;
}

export interface RangeSpec {
	start: number;
	end: number;
}

export interface IntervalCollectionSpec {
	collectionName: string;
}

export interface AddText {
	type: "addText";
	index: number;
	content: string;
}

export interface RemoveRange extends RangeSpec {
	type: "removeRange";
}

export interface ObliterateRange extends RangeSpec {
	type: "obliterateRange";
}

// For non-interval collection fuzzing, annotating text would also be useful.
export interface AddInterval extends IntervalCollectionSpec, RangeSpec {
	type: "addInterval";
	// Normally interval ids get autogenerated, but including it here allows tracking
	// what happened to an interval over the course of its lifetime based on the history
	// file, which is useful for debugging test failures.
	id: string;
	startSide: Side;
	endSide: Side;
}

export interface ChangeInterval extends IntervalCollectionSpec, RangeSpec {
	type: "changeInterval";
	id: string;
	startSide: Side;
	endSide: Side;
}

export interface DeleteInterval extends IntervalCollectionSpec {
	type: "deleteInterval";
	id: string;
}

export interface ChangeProperties extends IntervalCollectionSpec {
	type: "changeProperties";
	id: string;
	properties: PropertySet;
}

export interface RevertSharedStringRevertibles {
	type: "revertSharedStringRevertibles";
	editsToRevert: number;
}

export interface RevertibleWeights {
	revertWeight: number;
	addText: number;
	removeRange: number;
	obliterateRange: number;
	addInterval: number;
	deleteInterval: number;
	changeInterval: number;
	changeProperties: number;
}

export type IntervalOperation = AddInterval | ChangeInterval | DeleteInterval | ChangeProperties;
export type OperationWithRevert = IntervalOperation | RevertSharedStringRevertibles;
export type TextOperation = AddText | RemoveRange | ObliterateRange;

export type ClientOperation = IntervalOperation | TextOperation;

export type RevertOperation = OperationWithRevert | TextOperation;
export type Operation = RevertOperation;

export type FuzzTestState = DDSFuzzTestState<SharedStringFactory>;

export interface SharedStringOperationGenerationConfig {
	/**
	 * Maximum length of the SharedString (locally) before no further AddText operations are generated.
	 * Note due to concurrency, during test execution the actual length of the string may exceed this.
	 */
	maxStringLength?: number;
	maxInsertLength?: number;
	weights?: {
		addText: number;
		removeRange: number;
		obliterateRange: number;
	};
}

export interface IntervalOperationGenerationConfig extends SharedStringOperationGenerationConfig {
	/**
	 * Maximum number of intervals (locally) before no further AddInterval operations are generated.
	 * Note due to concurrency, during test execution the actual number of intervals may exceed this.
	 */
	maxIntervals?: number;
	intervalCollectionNamePool?: string[];
	propertyNamePool?: string[];
	validateInterval?: number;
	weights?: RevertibleWeights & SharedStringOperationGenerationConfig["weights"];
}

export const defaultSharedStringOperationGenerationConfig: Required<SharedStringOperationGenerationConfig> =
	{
		maxStringLength: 1000,
		maxInsertLength: 10,
		weights: {
			addText: 2,
			removeRange: 1,
			obliterateRange: 1,
		},
	};
export const defaultIntervalOperationGenerationConfig: Required<IntervalOperationGenerationConfig> =
	{
		...defaultSharedStringOperationGenerationConfig,
		maxIntervals: 100,
		intervalCollectionNamePool: ["comments"],
		propertyNamePool: ["prop1", "prop2", "prop3"],
		validateInterval: 100,
		weights: {
			...defaultSharedStringOperationGenerationConfig.weights,
			revertWeight: 2,
			addInterval: 2,
			deleteInterval: 2,
			changeInterval: 2,
			changeProperties: 2,
			obliterateRange: 0,
		},
	};

export interface LoggingInfo {
	/** id of the interval to track over time */
	intervalId: string;
	/** Clients to print */
	clientIds: string[];
}

function logCurrentState(state: FuzzTestState, loggingInfo: LoggingInfo): void {
	for (const id of loggingInfo.clientIds) {
		const { channel } = state.clients.find((s) => s.containerRuntime.clientId === id) ?? {};
		assert(channel);
		const labels = channel.getIntervalCollectionLabels();
		const interval = Array.from(labels)
			.map((label) =>
				channel.getIntervalCollection(label).getIntervalById(loggingInfo.intervalId),
			)
			.find((result) => result !== undefined);

		console.log(`Client ${id}:`);
		if (interval !== undefined) {
			const start = channel.localReferencePositionToPosition(interval.start);
			const end = channel.localReferencePositionToPosition(interval.end);
			if (end === start) {
				console.log(`${" ".repeat(start)}x`);
			} else {
				console.log(`${" ".repeat(start)}[${" ".repeat(end - start - 1)}]`);
			}
		}
		console.log(channel.getText());
		console.log("\n");
	}
}

type ClientOpState = FuzzTestState;

export function makeReducer(
	loggingInfo?: LoggingInfo,
): Reducer<Operation | RevertOperation, ClientOpState> {
	const withLogging =
		<T>(baseReducer: Reducer<T, ClientOpState>): Reducer<T, ClientOpState> =>
		async (state, operation) => {
			if (loggingInfo !== undefined) {
				logCurrentState(state, loggingInfo);
				console.log("-".repeat(20));
				console.log("Next operation:", JSON.stringify(operation, undefined, 4));
			}
			await baseReducer(state, operation);
		};

	const reducer = combineReducers<Operation | RevertOperation, ClientOpState>({
		addText: async ({ client }, { index, content }) => {
			client.channel.insertText(index, content);
		},
		removeRange: async ({ client }, { start, end }) => {
			client.channel.removeRange(start, end);
		},
		obliterateRange: async ({ client }, { start, end }) => {
			client.channel.obliterateRange(start, end);
		},
		addInterval: async ({ client }, { start, end, collectionName, id, startSide, endSide }) => {
			const collection = client.channel.getIntervalCollection(collectionName);
			collection.add({
				start: { pos: start, side: startSide },
				end: { pos: end, side: endSide },
				props: { intervalId: id },
			});
		},
		deleteInterval: async ({ client }, { id, collectionName }) => {
			const collection = client.channel.getIntervalCollection(collectionName);
			collection.removeIntervalById(id);
		},
		changeInterval: async (
			{ client },
			{ id, start, end, collectionName, startSide, endSide },
		) => {
			const collection = client.channel.getIntervalCollection(collectionName);
			collection.change(id, { pos: start, side: startSide }, { pos: end, side: endSide });
		},
		changeProperties: async ({ client }, { id, properties, collectionName }) => {
			const collection = client.channel.getIntervalCollection(collectionName);
			collection.changeProperties(id, { ...properties });
		},
		revertSharedStringRevertibles: async ({ client }, { editsToRevert }) => {
			assert(isRevertibleSharedString(client.channel));
			client.channel.isCurrentRevert = true;
			const few = client.channel.revertibles.splice(-editsToRevert, editsToRevert);
			revertSharedStringRevertibles(client.channel, few);
			client.channel.isCurrentRevert = false;
		},
	});

	return withLogging(reducer);
}

export function createSharedStringGeneratorOperations(
	optionsParam?: SharedStringOperationGenerationConfig,
) {
	const options = { ...defaultSharedStringOperationGenerationConfig, ...(optionsParam ?? {}) };

	// All subsequent helper functions are generators; note that they don't actually apply any operations.
	function startPosition({ random, client }: ClientOpState): number {
		return random.integer(0, Math.max(0, client.channel.getLength() - 1));
	}

	function exclusiveRange(state: ClientOpState): RangeSpec {
		const start = startPosition(state);
		const end = state.random.integer(start + 1, state.client.channel.getLength());
		return { start, end };
	}

	function exclusiveRangeLeaveChar(state: ClientOpState): RangeSpec {
		const start = state.random.integer(0, state.client.channel.getLength() - 2);
		const end = state.random.integer(start + 1, state.client.channel.getLength() - 1);
		return { start, end };
	}

	async function addText(state: ClientOpState): Promise<AddText> {
		const { random, client } = state;
		return {
			type: "addText",
			index: random.integer(0, client.channel.getLength()),
			content: random.string(random.integer(0, options.maxInsertLength)),
		};
	}

	async function obliterateRange(state: ClientOpState): Promise<ObliterateRange> {
		return {
			type: "obliterateRange",
			...exclusiveRange(state),
		};
	}

	async function removeRange(state: ClientOpState): Promise<RemoveRange> {
		return { type: "removeRange", ...exclusiveRange(state) };
	}

	async function removeRangeLeaveChar(state: ClientOpState): Promise<RemoveRange> {
		return { type: "removeRange", ...exclusiveRangeLeaveChar(state) };
	}

	const lengthSatisfies =
		(criteria: (length: number) => boolean): AcceptanceCondition<ClientOpState> =>
		({ client }) =>
			criteria(client.channel.getLength());
	const hasNonzeroLength = lengthSatisfies((length) => length > 0);
	const isShorterThanMaxLength = lengthSatisfies((length) => length < options.maxStringLength);

	return {
		startPosition,
		exclusiveRange,
		exclusiveRangeLeaveChar,
		addText,
		obliterateRange,
		removeRange,
		removeRangeLeaveChar,
		lengthSatisfies,
		hasNonzeroLength,
		isShorterThanMaxLength,
	};
}

export class SharedStringFuzzFactory extends SharedStringFactory {
	public async load(
		runtime: IFluidDataStoreRuntime,
		id: string,
		services: IChannelServices,
		attributes: IChannelAttributes,
	): Promise<SharedString> {
		runtime.options.intervalStickinessEnabled = true;
		runtime.options.mergeTreeEnableObliterate = true;
		return super.load(runtime, id, services, attributes);
	}

	public create(document: IFluidDataStoreRuntime, id: string): SharedString {
		document.options.intervalStickinessEnabled = true;
		document.options.mergeTreeEnableObliterate = true;
		return super.create(document, id);
	}
}

export const baseModel: Omit<
	DDSFuzzModel<SharedStringFactory, Operation, FuzzTestState>,
	"workloadName" | "generatorFactory"
> = {
	reducer:
		// makeReducer supports a param for logging output which tracks the provided intervalId over time:
		// { intervalId: "00000000-0000-0000-0000-000000000000", clientIds: ["A", "B", "C"] }
		makeReducer(),
	validateConsistency: assertEquivalentSharedStrings,
	factory: new SharedStringFuzzFactory(),
	minimizationTransforms: [
		(op) => {
			if (op.type !== "addText") {
				return;
			}
			op.content = op.content.slice(1);
		},
		(op) => {
			switch (op.type) {
				case "addText":
					if (op.index > 0) {
						op.index -= 1;
					}
					break;
				case "removeRange":
				case "addInterval":
				case "changeInterval":
					if (op.start > 0) {
						op.start -= 1;
					}
					if (op.end > 0) {
						op.end -= 1;
					}
					break;
				default:
					break;
			}
		},
		(op) => {
			if (
				op.type !== "removeRange" &&
				op.type !== "addInterval" &&
				op.type !== "changeInterval"
			) {
				return;
			}
			if (op.end > 0) {
				op.end -= 1;
			}
		},
	],
};

export const defaultFuzzOptions: Partial<DDSFuzzSuiteOptions> = {
	validationStrategy: { type: "fixedInterval", interval: 10 },
	reconnectProbability: 0.1,
	numberOfClients: 3,
	clientJoinOptions: {
		maxNumberOfClients: 6,
		clientAddProbability: 0.1,
	},
	defaultTestCount: 100,
	saveFailures: { directory: path.join(__dirname, "../../../src/test/fuzz/results") },
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
