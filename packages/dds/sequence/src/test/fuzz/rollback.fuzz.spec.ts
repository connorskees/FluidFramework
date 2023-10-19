/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import {
	createWeightedAsyncGenerator as createWeightedGenerator,
	AsyncGenerator as Generator,
	takeAsync as take,
} from "@fluid-internal/stochastic-test-utils";
import { createDDSFuzzSuite, DDSFuzzModel } from "@fluid-internal/test-dds-utils";
import {
	FuzzTestState,
	RevertOperation,
	baseModel,
	defaultFuzzOptions,
	defaultIntervalOperationGenerationConfig,
	SharedStringFuzzFactory,
	SharedStringOperationGenerationConfig,
	Operation,
	createSharedStringGeneratorOperations,
} from "./fuzzUtils";

type ClientOpState = FuzzTestState;
function makeSharedStringOperationGenerator(
	optionsParam?: SharedStringOperationGenerationConfig,
	alwaysLeaveChar: boolean = false,
): Generator<Operation, ClientOpState> {
	const {
		addText,
		removeRange,
		removeRangeLeaveChar,
		lengthSatisfies,
		hasNonzeroLength,
		isShorterThanMaxLength,
	} = createSharedStringGeneratorOperations(optionsParam);

	const usableWeights = optionsParam?.weights ?? defaultIntervalOperationGenerationConfig.weights;
	return createWeightedGenerator<Operation, ClientOpState>([
		[addText, usableWeights.addText, isShorterThanMaxLength],
		[
			alwaysLeaveChar ? removeRangeLeaveChar : removeRange,
			usableWeights.removeRange,
			alwaysLeaveChar
				? lengthSatisfies((length) => {
						return length > 1;
				  })
				: hasNonzeroLength,
		],
	]);
}

describe("rollback fuzz testing", () => {
	const baseSharedStringModel: DDSFuzzModel<
		SharedStringFuzzFactory,
		RevertOperation,
		FuzzTestState
	> = {
		...baseModel,
		workloadName: "rollback",
		generatorFactory: () =>
			take(
				10,
				makeSharedStringOperationGenerator({
					...defaultIntervalOperationGenerationConfig,
					rollbackProbability: 0.2,
				}),
			),
	};

	createDDSFuzzSuite(baseSharedStringModel, {
		...defaultFuzzOptions,
		defaultTestCount: 10,
		reconnectProbability: 0.0,
		clientJoinOptions: {
			maxNumberOfClients: 3,
			clientAddProbability: 0.0,
		},
		// skipMinimization: true,
		// Uncomment this line to replay a specific seed from its failure file:
		// replay: 0,
	});
});
