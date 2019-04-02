import { ISharedObject, ISharedObjectExtension } from "@prague/api-definitions";
import { ITree } from "@prague/container-definitions";
import { IDistributedObjectServices, IObjectStorageService, IRuntime } from "@prague/runtime-definitions";

/**
 * Consensus Ordered Collection channel extension interface
 *
 * Extends the base ISharedObjectExtension to return a more definite type of IConsensusOrderedCollection
 * Use for the runtime to create and load distributed data structure by type name of each channel
 */
export interface IConsensusOrderedCollectionExtension extends ISharedObjectExtension {
    load(
        document: IRuntime,
        id: string,
        minimumSequenceNumber: number,
        services: IDistributedObjectServices,
        headerOrigin: string): Promise<IConsensusOrderedCollection>;

    create(document: IRuntime, id: string): IConsensusOrderedCollection;
}

/**
 * Consensus Ordered Collection interface
 *
 * An consensus ordered collection is a distributed data structure, which
 * holds a collection of JSON-able or distributed objects, and have a
 * deterministic add/remove order.
 *
 * @remarks
 * The order the server receive the add/remove operation determines the
 * order those operation are applied to the collection. Different clients
 * issuing `add` or `remove` operations at the same time will be sequenced.
 * The order dictates which `add` is done first, thus determining the order
 * in which it appears in the collection.  It also determines which client
 * will get the first removed item, etc. All operations are asynchronous.
 * A function `wait` is provided to wait for and remove an entry in the collection.
 *
 * All non-distributed object added to the collection will be cloned (via JSON).
 * They will not be references to the original input object.  Thus changed to
 * the input object will not reflect the object in the collection.
 */
export interface IConsensusOrderedCollection<T = any> extends ISharedObject {
    /**
     * Adds a value to the collection
     */
    add(value: T): Promise<void>;

    /**
     * Retrieves a value from the collection.
     */
    remove(): Promise<T>;

    /**
     * Wait for a value to be available and remove it from the consensus collection
     */
    waitAndRemove(): Promise<T>;
}

/**
 * Interface for object that can be snapshoted
 *
 * TODO: move this to be use in other place
 * TODO: currently input and output is not symmetrical, can they become symmetrical?
 */
export interface ISnapshotable {
    /**
     * Load from snapshot in the storage
     */
    load(runtime: IRuntime, storage: IObjectStorageService): Promise<void>;

    /**
     * Generate a snapshot
     */
    snapshot(): ITree;
}

/**
 * Ordered Collection interface
 *
 * Collection of objects that has deterministic add and remove ordering.
 * Object implementing this interface can be used as the data backing
 * for the ConsensusOrderedCollection
 */
export interface IOrderedCollection<T = any> extends ISnapshotable {
    /**
     * Adds a value to the collection
     */
    add(value: T);

    /**
     * Retrieves a value from the collection.
     */
    remove(): T;

    /**
     * Return the size of the collection
     */
    size(): number;
}
