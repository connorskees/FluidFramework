/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { strict as assert } from "assert";
import {
	MockFluidDataStoreRuntime,
	MockStorage,
	MockDeltaConnection,
	MockHandle,
} from "@fluidframework/test-runtime-utils";
import { CellFactory } from "@fluidframework/cell";
import { DirectoryFactory, IDirectory, MapFactory } from "@fluidframework/map";
import { SharedMatrixFactory, SharedMatrix } from "@fluidframework/matrix";
import { TreeFactory, SchemaFactory, ITree, TreeConfiguration } from "@fluidframework/tree";
import { ConsensusQueueFactory } from "@fluidframework/ordered-collection";
import { ReferenceType, SharedStringFactory } from "@fluidframework/sequence";
import { IChannel, IChannelFactory } from "@fluidframework/datastore-definitions";
import { ConsensusRegisterCollectionFactory } from "@fluidframework/register-collection";
import { detectOutboundReferences } from "@fluidframework/container-runtime";
import { SessionId, createIdCompressor } from "@fluidframework/id-compressor";

/**
 * The purpose of these tests is to demonstrate that DDSes do not do opaque encoding of handles
 * when preparing the op payload (e.g. prematurely serializing).
 * This is important because the runtime needs to inspect the full op payload for handles.
 */
describe("DDS Handle Encoding", () => {
	const handle = new MockHandle("whatever");
	const messages: any[] = [];

	beforeEach(() => {
		messages.length = 0;
	});

	/**
	 * This uses the same logic that the ContainerRuntime does when processing incoming messages
	 * to detect handles in the op's object graph, for notifying GC of new references between objects.
	 *
	 * @returns The list of handles found in the given contents object
	 */
	function findAllHandles(contents: unknown) {
		const envelope = { contents, address: "envelope" };
		const handlesFound: string[] = [];
		detectOutboundReferences(envelope, (from, to) => {
			handlesFound.push(to);
		});
		return handlesFound;
	}

	/** A "Mask" over IChannelFactory that specifies the return type of create */
	interface IChannelFactoryWithCreatedType<T extends IChannel>
		extends Omit<IChannelFactory, "create"> {
		create: (...args: Parameters<IChannelFactory["create"]>) => T;
	}

	/** Each test case runs some code then declares the handles (if any) it expects to be included in the op payload */
	interface ITestCase {
		name: string;
		addHandleToDDS(): void;
		expectedHandles: string[];
	}

	/** This takes care of creating the DDS behind the scenes so the ITestCase's code is ready to invoke */
	function createTestCase<T extends IChannel>(
		factory: IChannelFactoryWithCreatedType<T>,
		addHandleToDDS: (dds: T) => void,
		expectedHandles: string[],
	): ITestCase {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const name = factory.type.split("/").pop()!;

		const dataStoreRuntime = new MockFluidDataStoreRuntime({
			idCompressor: createIdCompressor("173cb232-53a2-4327-b690-afa954397989" as SessionId),
		});
		const deltaConnection = new MockDeltaConnection(
			/* submitFn: */ (message) => {
				messages.push(message);
				return 0; // unused
			},
			/* dirtyFn: */ () => {},
		);
		const services = {
			deltaConnection,
			objectStorage: new MockStorage(),
		};
		const dds = factory.create(dataStoreRuntime, name);
		dds.connect(services);

		return {
			name,
			addHandleToDDS: () => addHandleToDDS(dds),
			expectedHandles,
		};
	}

	const testCases: ITestCase[] = [
		createTestCase(
			new MapFactory(),
			(dds) => {
				dds.set("whatever", handle);
			},
			[handle.absolutePath] /* expectedHandles */,
		),
		createTestCase(
			new DirectoryFactory(),
			(dds: IDirectory) => {
				dds.set("whatever", handle);
			},
			[handle.absolutePath] /* expectedHandles */,
		),
		createTestCase(
			new SharedStringFactory(),
			(dds) => {
				dds.insertMarker(0, ReferenceType.Simple, { marker: handle });
			},
			[handle.absolutePath] /* expectedHandles */,
		),
		createTestCase(
			new SharedMatrixFactory(),
			(dds: SharedMatrix) => {
				dds.insertRows(0, 1);
				dds.insertCols(0, 1);

				dds.setCell(0, 0, handle);
			},
			[handle.absolutePath] /* expectedHandles */,
		),
		createTestCase(
			new TreeFactory({}),
			(dds: ITree) => {
				const builder = new SchemaFactory("test");
				class Bar extends builder.object("bar", {
					h: builder.optional(builder.handle),
				}) {}

				const config = new TreeConfiguration(Bar, () => ({
					h: undefined,
				}));

				const treeView = dds.schematize(config);

				treeView.root.h = handle;
			},
			[handle.absolutePath] /* expectedHandles */,
		),
		createTestCase(
			new ConsensusRegisterCollectionFactory(),
			(dds) => {
				dds.write("whatever", handle).catch(() => {});
			},
			[handle.absolutePath] /* expectedHandles */,
		),
		createTestCase(
			new ConsensusQueueFactory(),
			(dds) => {
				dds.add(handle).catch(() => {});
			},
			// todo: AB#7149 this DDS does not currently support storing handles
			[] /* expectedHandles */,
		),
		createTestCase(
			new CellFactory(),
			(dds) => {
				dds.set(handle);
			},
			[handle.absolutePath] /* expectedHandles */,
		),
	];

	testCases.forEach((testCase) => {
		const shouldOrShouldNot = testCase.expectedHandles.length > 0 ? "should" : "should not";
		it(`${shouldOrShouldNot} obscure handles in ${testCase.name} message contents`, async () => {
			testCase.addHandleToDDS();

			assert.deepEqual(
				messages.flatMap((m) => findAllHandles(m)),
				testCase.expectedHandles,
				`The handle ${shouldOrShouldNot} be detected`,
			);
		});
	});
});
