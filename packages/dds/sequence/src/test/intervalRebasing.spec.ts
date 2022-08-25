import { IChannelServices } from "@fluidframework/datastore-definitions";
import {
    MockContainerRuntimeFactoryForReconnection,
    MockFluidDataStoreRuntime,
    MockStorage,
} from "@fluidframework/test-runtime-utils";
import { IntervalType } from "../intervalCollection";
import { SharedStringFactory } from "../sequenceFactory";
import { SharedString } from "../sharedString";
import { assertConsistent, Client } from "./intervalUtils";

function constructClients(
    containerRuntimeFactory: MockContainerRuntimeFactoryForReconnection,
): [Client, Client, Client] {
    const numClients = 3;
    return Array.from({ length: numClients }, (_, index) => {
        const dataStoreRuntime = new MockFluidDataStoreRuntime();
        const sharedString = new SharedString(
            dataStoreRuntime,
            String.fromCharCode(index + 65),
            SharedStringFactory.Attributes,
        );
        const containerRuntime = containerRuntimeFactory.createContainerRuntime(dataStoreRuntime);
        const services: IChannelServices = {
            deltaConnection: containerRuntime.createDeltaConnection(),
            objectStorage: new MockStorage(),
        };

        sharedString.initializeLocal();
        sharedString.connect(services);
        return { containerRuntime, sharedString };
    }) as [Client, Client, Client];
}

describe("interval rebasing", () => {
    it("does not crash for an interval that lies on segment that has been removed locally", () => {
        const containerRuntimeFactory = new MockContainerRuntimeFactoryForReconnection();
        const clients = constructClients(containerRuntimeFactory);

        clients[0].sharedString.insertText(0, "6fB26FcY");
        clients[1].containerRuntime.connected = false;
        clients[1].sharedString.insertText(0, "1jgvmr1qV");
        clients[0].sharedString.removeRange(5, 7);
        containerRuntimeFactory.processAllMessages();
        assertConsistent(clients);
        clients[1].containerRuntime.connected = true;
        clients[0].sharedString.insertText(0, "oZPByBiGfC8AVVep");
        clients[0].containerRuntime.connected = false;
        containerRuntimeFactory.processAllMessages();
        assertConsistent(clients);
        const collection_0 = clients[0].sharedString.getIntervalCollection("comments");
        collection_0.add(17, 20, IntervalType.SlideOnRemove, { intervalId: "id" });
        clients[2].sharedString.removeRange(14, 15);
        clients[2].sharedString.removeRange(13, 15);
        clients[0].sharedString.removeRange(14, 21);
        containerRuntimeFactory.processAllMessages();
        assertConsistent(clients);
        clients[0].sharedString.insertText(13, "mlrc");
        clients[0].containerRuntime.connected = true;
        containerRuntimeFactory.processAllMessages();
        assertConsistent(clients);
    });

    it("does not crash when entire string on which interval lies is concurrently removed", () => {
        const containerRuntimeFactory = new MockContainerRuntimeFactoryForReconnection();
        const clients = constructClients(containerRuntimeFactory);

        clients[1].sharedString.insertText(0, "J");
        clients[0].sharedString.insertText(0, "a");
        clients[0].containerRuntime.connected = false;
        containerRuntimeFactory.processAllMessages();
        assertConsistent(clients);
        clients[1].sharedString.insertText(0, "WAj");
        clients[0].sharedString.insertText(1, "HUvPz");
        clients[2].sharedString.removeRange(0, 1);
        clients[1].containerRuntime.connected = false;
        clients[1].sharedString.insertText(0, "p21nY82");
        const collection_0 = clients[1].sharedString.getIntervalCollection("comments");
        collection_0.add(4, 10, IntervalType.SlideOnRemove, { intervalId: "id" });
        containerRuntimeFactory.processAllMessages();
        assertConsistent(clients);
        clients[1].containerRuntime.connected = true;
    });

    it("does not crash when interval slides off end of string", () => {
        const containerRuntimeFactory = new MockContainerRuntimeFactoryForReconnection();
        const clients = constructClients(containerRuntimeFactory);

        clients[0].sharedString.insertText(0, "012Z45");
        clients[2].sharedString.insertText(0, "X");
        containerRuntimeFactory.processAllMessages();
        assertConsistent(clients);
        clients[1].sharedString.insertText(0, "01234567");
        clients[0].containerRuntime.connected = false;
        containerRuntimeFactory.processAllMessages();
        assertConsistent(clients);
        clients[0].sharedString.insertText(0, "ABCDEFGHIJKLMN");
        const collection_0 = clients[0].sharedString.getIntervalCollection("comments");
        collection_0.add(20, 20, IntervalType.SlideOnRemove, { intervalId: "414e09e9-54bf-43ea-9809-9fc5724c43fe" });
        clients[2].sharedString.removeRange(13, 15);
        containerRuntimeFactory.processAllMessages();
        assertConsistent(clients);
        clients[0].containerRuntime.connected = true;
        containerRuntimeFactory.processAllMessages();
        assertConsistent(clients);
    });
});
