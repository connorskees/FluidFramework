/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-test-generator in @fluidframework/build-tools.
 */

import type * as old from "@fluidframework/server-memory-orderer-previous";
import type * as current from "../../index.js";


// See 'build-tools/src/type-test-generator/compatibility.ts' for more information.
type TypeOnly<T> = T extends number
	? number
	: T extends string
	? string
	: T extends boolean | bigint | symbol
	? T
	: {
			[P in keyof T]: TypeOnly<T[P]>;
	  };

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IConcreteNode": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IConcreteNode():
    TypeOnly<old.IConcreteNode>;
declare function use_current_InterfaceDeclaration_IConcreteNode(
    use: TypeOnly<current.IConcreteNode>): void;
use_current_InterfaceDeclaration_IConcreteNode(
    get_old_InterfaceDeclaration_IConcreteNode());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IConcreteNode": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IConcreteNode():
    TypeOnly<current.IConcreteNode>;
declare function use_old_InterfaceDeclaration_IConcreteNode(
    use: TypeOnly<old.IConcreteNode>): void;
use_old_InterfaceDeclaration_IConcreteNode(
    get_current_InterfaceDeclaration_IConcreteNode());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IConcreteNodeFactory": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IConcreteNodeFactory():
    TypeOnly<old.IConcreteNodeFactory>;
declare function use_current_InterfaceDeclaration_IConcreteNodeFactory(
    use: TypeOnly<current.IConcreteNodeFactory>): void;
use_current_InterfaceDeclaration_IConcreteNodeFactory(
    get_old_InterfaceDeclaration_IConcreteNodeFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IConcreteNodeFactory": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IConcreteNodeFactory():
    TypeOnly<current.IConcreteNodeFactory>;
declare function use_old_InterfaceDeclaration_IConcreteNodeFactory(
    use: TypeOnly<old.IConcreteNodeFactory>): void;
use_old_InterfaceDeclaration_IConcreteNodeFactory(
    get_current_InterfaceDeclaration_IConcreteNodeFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IConnectMessage": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IConnectMessage():
    TypeOnly<old.IConnectMessage>;
declare function use_current_InterfaceDeclaration_IConnectMessage(
    use: TypeOnly<current.IConnectMessage>): void;
use_current_InterfaceDeclaration_IConnectMessage(
    get_old_InterfaceDeclaration_IConnectMessage());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IConnectMessage": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IConnectMessage():
    TypeOnly<current.IConnectMessage>;
declare function use_old_InterfaceDeclaration_IConnectMessage(
    use: TypeOnly<old.IConnectMessage>): void;
use_old_InterfaceDeclaration_IConnectMessage(
    get_current_InterfaceDeclaration_IConnectMessage());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IConnectedMessage": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IConnectedMessage():
    TypeOnly<old.IConnectedMessage>;
declare function use_current_InterfaceDeclaration_IConnectedMessage(
    use: TypeOnly<current.IConnectedMessage>): void;
use_current_InterfaceDeclaration_IConnectedMessage(
    get_old_InterfaceDeclaration_IConnectedMessage());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IConnectedMessage": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IConnectedMessage():
    TypeOnly<current.IConnectedMessage>;
declare function use_old_InterfaceDeclaration_IConnectedMessage(
    use: TypeOnly<old.IConnectedMessage>): void;
use_old_InterfaceDeclaration_IConnectedMessage(
    get_current_InterfaceDeclaration_IConnectedMessage());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IKafkaSubscriber": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IKafkaSubscriber():
    TypeOnly<old.IKafkaSubscriber>;
declare function use_current_InterfaceDeclaration_IKafkaSubscriber(
    use: TypeOnly<current.IKafkaSubscriber>): void;
use_current_InterfaceDeclaration_IKafkaSubscriber(
    get_old_InterfaceDeclaration_IKafkaSubscriber());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IKafkaSubscriber": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IKafkaSubscriber():
    TypeOnly<current.IKafkaSubscriber>;
declare function use_old_InterfaceDeclaration_IKafkaSubscriber(
    use: TypeOnly<old.IKafkaSubscriber>): void;
use_old_InterfaceDeclaration_IKafkaSubscriber(
    get_current_InterfaceDeclaration_IKafkaSubscriber());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ILocalOrdererSetup": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ILocalOrdererSetup():
    TypeOnly<old.ILocalOrdererSetup>;
declare function use_current_InterfaceDeclaration_ILocalOrdererSetup(
    use: TypeOnly<current.ILocalOrdererSetup>): void;
use_current_InterfaceDeclaration_ILocalOrdererSetup(
    get_old_InterfaceDeclaration_ILocalOrdererSetup());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ILocalOrdererSetup": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ILocalOrdererSetup():
    TypeOnly<current.ILocalOrdererSetup>;
declare function use_old_InterfaceDeclaration_ILocalOrdererSetup(
    use: TypeOnly<old.ILocalOrdererSetup>): void;
use_old_InterfaceDeclaration_ILocalOrdererSetup(
    get_current_InterfaceDeclaration_ILocalOrdererSetup());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_INodeMessage": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_INodeMessage():
    TypeOnly<old.INodeMessage>;
declare function use_current_InterfaceDeclaration_INodeMessage(
    use: TypeOnly<current.INodeMessage>): void;
use_current_InterfaceDeclaration_INodeMessage(
    get_old_InterfaceDeclaration_INodeMessage());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_INodeMessage": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_INodeMessage():
    TypeOnly<current.INodeMessage>;
declare function use_old_InterfaceDeclaration_INodeMessage(
    use: TypeOnly<old.INodeMessage>): void;
use_old_InterfaceDeclaration_INodeMessage(
    get_current_InterfaceDeclaration_INodeMessage());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IOpMessage": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IOpMessage():
    TypeOnly<old.IOpMessage>;
declare function use_current_InterfaceDeclaration_IOpMessage(
    use: TypeOnly<current.IOpMessage>): void;
use_current_InterfaceDeclaration_IOpMessage(
    get_old_InterfaceDeclaration_IOpMessage());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IOpMessage": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IOpMessage():
    TypeOnly<current.IOpMessage>;
declare function use_old_InterfaceDeclaration_IOpMessage(
    use: TypeOnly<old.IOpMessage>): void;
use_old_InterfaceDeclaration_IOpMessage(
    get_current_InterfaceDeclaration_IOpMessage());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IPubSub": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IPubSub():
    TypeOnly<old.IPubSub>;
declare function use_current_InterfaceDeclaration_IPubSub(
    use: TypeOnly<current.IPubSub>): void;
use_current_InterfaceDeclaration_IPubSub(
    get_old_InterfaceDeclaration_IPubSub());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IPubSub": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IPubSub():
    TypeOnly<current.IPubSub>;
declare function use_old_InterfaceDeclaration_IPubSub(
    use: TypeOnly<old.IPubSub>): void;
use_old_InterfaceDeclaration_IPubSub(
    get_current_InterfaceDeclaration_IPubSub());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IReservation": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IReservation():
    TypeOnly<old.IReservation>;
declare function use_current_InterfaceDeclaration_IReservation(
    use: TypeOnly<current.IReservation>): void;
use_current_InterfaceDeclaration_IReservation(
    get_old_InterfaceDeclaration_IReservation());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IReservation": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IReservation():
    TypeOnly<current.IReservation>;
declare function use_old_InterfaceDeclaration_IReservation(
    use: TypeOnly<old.IReservation>): void;
use_old_InterfaceDeclaration_IReservation(
    get_current_InterfaceDeclaration_IReservation());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IReservationManager": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IReservationManager():
    TypeOnly<old.IReservationManager>;
declare function use_current_InterfaceDeclaration_IReservationManager(
    use: TypeOnly<current.IReservationManager>): void;
use_current_InterfaceDeclaration_IReservationManager(
    get_old_InterfaceDeclaration_IReservationManager());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IReservationManager": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IReservationManager():
    TypeOnly<current.IReservationManager>;
declare function use_old_InterfaceDeclaration_IReservationManager(
    use: TypeOnly<old.IReservationManager>): void;
use_old_InterfaceDeclaration_IReservationManager(
    get_current_InterfaceDeclaration_IReservationManager());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ISubscriber": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ISubscriber():
    TypeOnly<old.ISubscriber>;
declare function use_current_InterfaceDeclaration_ISubscriber(
    use: TypeOnly<current.ISubscriber>): void;
use_current_InterfaceDeclaration_ISubscriber(
    get_old_InterfaceDeclaration_ISubscriber());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ISubscriber": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ISubscriber():
    TypeOnly<current.ISubscriber>;
declare function use_old_InterfaceDeclaration_ISubscriber(
    use: TypeOnly<old.ISubscriber>): void;
use_old_InterfaceDeclaration_ISubscriber(
    get_current_InterfaceDeclaration_ISubscriber());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalContext": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_LocalContext():
    TypeOnly<old.LocalContext>;
declare function use_current_ClassDeclaration_LocalContext(
    use: TypeOnly<current.LocalContext>): void;
use_current_ClassDeclaration_LocalContext(
    get_old_ClassDeclaration_LocalContext());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalContext": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_LocalContext():
    TypeOnly<current.LocalContext>;
declare function use_old_ClassDeclaration_LocalContext(
    use: TypeOnly<old.LocalContext>): void;
use_old_ClassDeclaration_LocalContext(
    get_current_ClassDeclaration_LocalContext());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalKafka": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_LocalKafka():
    TypeOnly<old.LocalKafka>;
declare function use_current_ClassDeclaration_LocalKafka(
    use: TypeOnly<current.LocalKafka>): void;
use_current_ClassDeclaration_LocalKafka(
    get_old_ClassDeclaration_LocalKafka());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalKafka": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_LocalKafka():
    TypeOnly<current.LocalKafka>;
declare function use_old_ClassDeclaration_LocalKafka(
    use: TypeOnly<old.LocalKafka>): void;
use_old_ClassDeclaration_LocalKafka(
    get_current_ClassDeclaration_LocalKafka());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalLambdaController": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_LocalLambdaController():
    TypeOnly<old.LocalLambdaController>;
declare function use_current_ClassDeclaration_LocalLambdaController(
    use: TypeOnly<current.LocalLambdaController>): void;
use_current_ClassDeclaration_LocalLambdaController(
    get_old_ClassDeclaration_LocalLambdaController());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalLambdaController": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_LocalLambdaController():
    TypeOnly<current.LocalLambdaController>;
declare function use_old_ClassDeclaration_LocalLambdaController(
    use: TypeOnly<old.LocalLambdaController>): void;
use_old_ClassDeclaration_LocalLambdaController(
    get_current_ClassDeclaration_LocalLambdaController());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_LocalLambdaControllerState": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_LocalLambdaControllerState():
    TypeOnly<old.LocalLambdaControllerState>;
declare function use_current_TypeAliasDeclaration_LocalLambdaControllerState(
    use: TypeOnly<current.LocalLambdaControllerState>): void;
use_current_TypeAliasDeclaration_LocalLambdaControllerState(
    get_old_TypeAliasDeclaration_LocalLambdaControllerState());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_LocalLambdaControllerState": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_LocalLambdaControllerState():
    TypeOnly<current.LocalLambdaControllerState>;
declare function use_old_TypeAliasDeclaration_LocalLambdaControllerState(
    use: TypeOnly<old.LocalLambdaControllerState>): void;
use_old_TypeAliasDeclaration_LocalLambdaControllerState(
    get_current_TypeAliasDeclaration_LocalLambdaControllerState());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalNodeFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_LocalNodeFactory():
    TypeOnly<old.LocalNodeFactory>;
declare function use_current_ClassDeclaration_LocalNodeFactory(
    use: TypeOnly<current.LocalNodeFactory>): void;
use_current_ClassDeclaration_LocalNodeFactory(
    get_old_ClassDeclaration_LocalNodeFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalNodeFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_LocalNodeFactory():
    TypeOnly<current.LocalNodeFactory>;
declare function use_old_ClassDeclaration_LocalNodeFactory(
    use: TypeOnly<old.LocalNodeFactory>): void;
use_old_ClassDeclaration_LocalNodeFactory(
    get_current_ClassDeclaration_LocalNodeFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalOrderManager": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_LocalOrderManager():
    TypeOnly<old.LocalOrderManager>;
declare function use_current_ClassDeclaration_LocalOrderManager(
    use: TypeOnly<current.LocalOrderManager>): void;
use_current_ClassDeclaration_LocalOrderManager(
    get_old_ClassDeclaration_LocalOrderManager());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalOrderManager": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_LocalOrderManager():
    TypeOnly<current.LocalOrderManager>;
declare function use_old_ClassDeclaration_LocalOrderManager(
    use: TypeOnly<old.LocalOrderManager>): void;
use_old_ClassDeclaration_LocalOrderManager(
    get_current_ClassDeclaration_LocalOrderManager());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalOrderer": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_LocalOrderer():
    TypeOnly<old.LocalOrderer>;
declare function use_current_ClassDeclaration_LocalOrderer(
    use: TypeOnly<current.LocalOrderer>): void;
use_current_ClassDeclaration_LocalOrderer(
    get_old_ClassDeclaration_LocalOrderer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_LocalOrderer": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_LocalOrderer():
    TypeOnly<current.LocalOrderer>;
declare function use_old_ClassDeclaration_LocalOrderer(
    use: TypeOnly<old.LocalOrderer>): void;
use_old_ClassDeclaration_LocalOrderer(
    get_current_ClassDeclaration_LocalOrderer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_NodeManager": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_NodeManager():
    TypeOnly<old.NodeManager>;
declare function use_current_ClassDeclaration_NodeManager(
    use: TypeOnly<current.NodeManager>): void;
use_current_ClassDeclaration_NodeManager(
    get_old_ClassDeclaration_NodeManager());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_NodeManager": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_NodeManager():
    TypeOnly<current.NodeManager>;
declare function use_old_ClassDeclaration_NodeManager(
    use: TypeOnly<old.NodeManager>): void;
use_old_ClassDeclaration_NodeManager(
    get_current_ClassDeclaration_NodeManager());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_PubSub": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_PubSub():
    TypeOnly<old.PubSub>;
declare function use_current_ClassDeclaration_PubSub(
    use: TypeOnly<current.PubSub>): void;
use_current_ClassDeclaration_PubSub(
    get_old_ClassDeclaration_PubSub());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_PubSub": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_PubSub():
    TypeOnly<current.PubSub>;
declare function use_old_ClassDeclaration_PubSub(
    use: TypeOnly<old.PubSub>): void;
use_old_ClassDeclaration_PubSub(
    get_current_ClassDeclaration_PubSub());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReservationManager": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_ReservationManager():
    TypeOnly<old.ReservationManager>;
declare function use_current_ClassDeclaration_ReservationManager(
    use: TypeOnly<current.ReservationManager>): void;
use_current_ClassDeclaration_ReservationManager(
    get_old_ClassDeclaration_ReservationManager());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReservationManager": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_ReservationManager():
    TypeOnly<current.ReservationManager>;
declare function use_old_ClassDeclaration_ReservationManager(
    use: TypeOnly<old.ReservationManager>): void;
use_old_ClassDeclaration_ReservationManager(
    get_current_ClassDeclaration_ReservationManager());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_WebSocketSubscriber": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_WebSocketSubscriber():
    TypeOnly<old.WebSocketSubscriber>;
declare function use_current_ClassDeclaration_WebSocketSubscriber(
    use: TypeOnly<current.WebSocketSubscriber>): void;
use_current_ClassDeclaration_WebSocketSubscriber(
    get_old_ClassDeclaration_WebSocketSubscriber());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_WebSocketSubscriber": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_WebSocketSubscriber():
    TypeOnly<current.WebSocketSubscriber>;
declare function use_old_ClassDeclaration_WebSocketSubscriber(
    use: TypeOnly<old.WebSocketSubscriber>): void;
use_old_ClassDeclaration_WebSocketSubscriber(
    get_current_ClassDeclaration_WebSocketSubscriber());
