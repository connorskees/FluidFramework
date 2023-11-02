/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

import { strict as assert } from "node:assert";

import {
	createSummarizerFromFactory,
	summarizeNow,
	type ITestObjectProvider,
} from "@fluidframework/test-utils";
import { describeNoCompat } from "@fluid-internal/test-version-utils";
import {
	ContainerRuntimeFactoryWithDefaultDataStore,
	DataObject,
	DataObjectFactory,
} from "@fluidframework/aqueduct";
import { type IChannel } from "@fluidframework/datastore-definitions";
import {
	type BuildNode,
	Change,
	SharedTree as LegacySharedTree,
	StablePlace,
	type TraitLabel,
	type NodeId,
} from "@fluid-experimental/tree";
import {
	AllowedUpdateType,
	type ISharedTree,
	type ISharedTreeView2,
	SchemaBuilder,
	SharedTreeFactory,
	type ProxyNode,
} from "@fluid-experimental/tree2";
import { type IFluidHandle } from "@fluidframework/core-interfaces";
import { type IContainerRuntimeOptions } from "@fluidframework/container-runtime";
import { LoaderHeader } from "@fluidframework/container-definitions";
import { type MigrationShim } from "../migrationShim.js";
import { MigrationShimFactory } from "../migrationShimFactory.js";
import { type IShim } from "../types.js";
import { SharedTreeShimFactory } from "../sharedTreeShimFactory.js";

const treeKey = "treeKey";

class TestDataObject extends DataObject {
	// Allows us to get the SharedObject with whatever type we want
	public async getShim(): Promise<IShim> {
		const handle: IFluidHandle<IChannel> | undefined =
			this.root.get<IFluidHandle<IChannel>>(treeKey);
		assert(handle !== undefined, "No handle found");
		return (await handle.get()) as IShim;
	}

	public createTree(type: string): void {
		const channel = this.runtime.createChannel(treeKey, type);
		this.root.set(treeKey, channel.handle);
	}
}

// New tree schema
const builder = new SchemaBuilder({ scope: "test" });
const rootType = builder.object("abc", {
	quantity: builder.number,
});
const schema = builder.intoSchema(rootType);
function getNewTreeView(tree: ISharedTree): ISharedTreeView2<typeof schema.rootFieldSchema> {
	return tree.schematize({
		initialTree: {
			quantity: 0,
		},
		allowedSchemaModifications: AllowedUpdateType.None,
		schema,
	});
}
const migrate = (legacyTree: LegacySharedTree, newTree: ISharedTree): void => {
	const quantity = getQuantity(legacyTree);
	newTree.schematize({
		initialTree: {
			quantity,
		},
		allowedSchemaModifications: AllowedUpdateType.None,
		schema,
	});
};

// Useful for modifying the legacy tree
const someNodeId = "someNodeId" as TraitLabel;
function getQuantityNodeId(tree: LegacySharedTree): NodeId {
	const rootNode = tree.currentView.getViewNode(tree.currentView.root);
	const nodeId = rootNode.traits.get(someNodeId)?.[0];
	assert(nodeId !== undefined, "should have someNodeId trait");
	const someNode = tree.currentView.getViewNode(nodeId);
	const quantityNodeId = someNode.traits.get("quantity" as TraitLabel)?.[0];
	assert(quantityNodeId !== undefined, "should have quantityNodeId trait");
	return quantityNodeId;
}

// Useful for just getting the values from the legacy tree
function getQuantity(tree: LegacySharedTree): number {
	const nodeId = getQuantityNodeId(tree);
	const quantityNode = tree.currentView.getViewNode(nodeId);
	const quantity = quantityNode.payload as number | undefined;
	assert(quantity !== undefined, "should have retrieved quantity");
	return quantity;
}

const testValue = 5;

describeNoCompat("MigrationShim", (getTestObjectProvider) => {
	// Allow us to control summaries
	const runtimeOptions: IContainerRuntimeOptions = {
		summaryOptions: {
			summaryConfigOverrides: {
				state: "disabled",
			},
		},
	};

	// V2 of the registry (the migration registry) -----------------------------------------
	// V2 of the code: Registry setup to migrate the document
	const legacyTreeFactory = LegacySharedTree.getFactory();
	const newSharedTreeFactory = new SharedTreeFactory();
	const migrationShimFactory = new MigrationShimFactory(
		legacyTreeFactory,
		newSharedTreeFactory,
		migrate,
	);
	const sharedTreeShimFactory = new SharedTreeShimFactory(newSharedTreeFactory);

	const dataObjectFactory = new DataObjectFactory(
		"TestDataObject",
		TestDataObject,
		[migrationShimFactory, sharedTreeShimFactory],
		{},
	);

	// The 2nd runtime factory, V2 of the code
	const runtimeFactory = new ContainerRuntimeFactoryWithDefaultDataStore({
		defaultFactory: dataObjectFactory,
		registryEntries: [dataObjectFactory.registryEntry],
		runtimeOptions,
	});

	let provider: ITestObjectProvider;

	beforeEach(async () => {
		provider = getTestObjectProvider();
	});

	it("Can create and retrieve tree without migration", async () => {
		// Setup containers and get Migration Shims instead of LegacySharedTrees
		const container1 = await provider.createContainer(runtimeFactory);
		const testObj1 = (await container1.getEntryPoint()) as TestDataObject;
		// This is a silent action to create the tree and store the its handle.
		testObj1.createTree(migrationShimFactory.type);
		await provider.ensureSynchronized();
		const shim1 = (await testObj1.getShim()) as MigrationShim;

		const container2 = await provider.loadContainer(runtimeFactory);
		const testObj2 = (await container2.getEntryPoint()) as TestDataObject;
		// This is a silent check that we can get the tree after storing the handle
		const shim2 = (await testObj2.getShim()) as MigrationShim;

		// Get the tree from the shim
		const tree1 = shim1.currentTree as LegacySharedTree;
		const tree2 = shim2.currentTree as LegacySharedTree;

		// Test that we can modify/send ops with the LegacySharedTree
		const inventoryNode: BuildNode = {
			definition: someNodeId,
			traits: {
				quantity: {
					definition: "quantity",
					payload: testValue,
				},
			},
		};
		tree1.applyEdit(
			Change.insertTree(
				inventoryNode,
				StablePlace.atStartOf({
					parent: tree1.currentView.root,
					label: someNodeId,
				}),
			),
		);
		await provider.ensureSynchronized();
		assert(getQuantity(tree2) === getQuantity(tree1), "Failed to update legacy tree via op");

		// Summarize
		const { summarizer } = await createSummarizerFromFactory(
			provider,
			container1,
			dataObjectFactory,
		);
		await provider.ensureSynchronized();
		const { summaryVersion } = await summarizeNow(summarizer);

		// Load a new container
		const container3 = await provider.loadContainer(runtimeFactory, undefined, {
			[LoaderHeader.version]: summaryVersion,
		});

		const testObj3 = (await container3.getEntryPoint()) as TestDataObject;
		const shim3 = await testObj3.getShim();
		const tree3 = shim3.currentTree as LegacySharedTree;

		// Verify that the value loaded from the summary matches the one loaded from a different summary
		await provider.ensureSynchronized();
		assert(getQuantity(tree3) === getQuantity(tree1), `Failed to load from summary`);
		assert(getQuantity(tree3) === testValue, "Failed to update the tree at all");

		// Modify the quantity value and verify that it syncs
		const quantityNodeId = getQuantityNodeId(tree3);
		tree3.applyEdit(Change.setPayload(quantityNodeId, 4));
		await provider.ensureSynchronized();
		assert(getQuantity(tree1) === 4, `Failed to modify new shared tree`);
		assert(getQuantity(tree1) === getQuantity(tree3), `Failed to sync new shared trees`);
	});

	it("Can create and retrieve tree with migration", async () => {
		// Setup containers and get Migration Shims instead of LegacySharedTrees
		const container1 = await provider.createContainer(runtimeFactory);
		const testObj1 = (await container1.getEntryPoint()) as TestDataObject;
		// This is a silent action to create the tree and store the its handle.
		testObj1.createTree(migrationShimFactory.type);
		await provider.ensureSynchronized();
		const shim1 = (await testObj1.getShim()) as MigrationShim;

		const container2 = await provider.loadContainer(runtimeFactory);
		const testObj2 = (await container2.getEntryPoint()) as TestDataObject;
		// This is a silent check that we can get the tree after storing the handle
		const shim2 = await testObj2.getShim();

		// Get the tree from the shim
		const tree1 = shim1.currentTree as LegacySharedTree;
		const tree2 = shim2.currentTree as LegacySharedTree;

		// Test that we can modify/send ops with the LegacySharedTree
		const inventoryNode: BuildNode = {
			definition: someNodeId,
			traits: {
				quantity: {
					definition: "quantity",
					payload: testValue,
				},
			},
		};
		tree1.applyEdit(
			Change.insertTree(
				inventoryNode,
				StablePlace.atStartOf({
					parent: tree1.currentView.root,
					label: someNodeId,
				}),
			),
		);
		await provider.ensureSynchronized();
		assert(getQuantity(tree2) === getQuantity(tree1), "Failed to update legacy tree via op");

		shim1.submitMigrateOp();
		const promise = new Promise<void>((resolve) => shim1.on("migrated", () => resolve()));
		await provider.ensureSynchronized();
		await promise;

		const newTree1 = shim1.currentTree as ISharedTree;
		const view1 = getNewTreeView(newTree1);
		const rootNode1: ProxyNode<typeof rootType> = view1.root;

		// Summarize
		const { summarizer } = await createSummarizerFromFactory(
			provider,
			container1,
			dataObjectFactory,
		);
		await provider.ensureSynchronized();
		const { summaryVersion } = await summarizeNow(summarizer);

		// Load a new container
		const container3 = await provider.loadContainer(runtimeFactory, undefined, {
			[LoaderHeader.version]: summaryVersion,
		});

		const testObj3 = (await container3.getEntryPoint()) as TestDataObject;
		const shim3 = await testObj3.getShim();
		const tree3 = shim3.currentTree as ISharedTree;
		const view3 = getNewTreeView(tree3);
		const rootNode3: ProxyNode<typeof rootType> = view3.root;

		// Verify that the value loaded from the summary matches the one loaded from a different summary
		await provider.ensureSynchronized();
		assert(rootNode3.quantity === rootNode1.quantity, `Failed to load from summary`);
		assert(rootNode3.quantity === testValue, "Failed to update the tree at all");

		// Modify the root node and verify that it syncs
		rootNode3.quantity = 4;
		await provider.ensureSynchronized();
		assert(rootNode1.quantity === 4, `Failed to modify new shared tree`);
		assert(rootNode1.quantity === rootNode3.quantity, `Failed to sync new shared trees`);
	});
});
