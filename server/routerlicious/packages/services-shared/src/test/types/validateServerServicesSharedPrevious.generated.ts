/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-test-generator in @fluidframework/build-tools.
 */
import * as old from "@fluidframework/server-services-shared-previous";
import * as current from "../../index";

type TypeOnly<T> = {
    [P in keyof T]: TypeOnly<T[P]>;
};

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_BasicWebServerFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_BasicWebServerFactory():
    TypeOnly<old.BasicWebServerFactory>;
declare function use_current_ClassDeclaration_BasicWebServerFactory(
    use: TypeOnly<current.BasicWebServerFactory>);
use_current_ClassDeclaration_BasicWebServerFactory(
    get_old_ClassDeclaration_BasicWebServerFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_BasicWebServerFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_BasicWebServerFactory():
    TypeOnly<current.BasicWebServerFactory>;
declare function use_old_ClassDeclaration_BasicWebServerFactory(
    use: TypeOnly<old.BasicWebServerFactory>);
use_old_ClassDeclaration_BasicWebServerFactory(
    get_current_ClassDeclaration_BasicWebServerFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_DocumentStorage": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_DocumentStorage():
    TypeOnly<old.DocumentStorage>;
declare function use_current_ClassDeclaration_DocumentStorage(
    use: TypeOnly<current.DocumentStorage>);
use_current_ClassDeclaration_DocumentStorage(
    get_old_ClassDeclaration_DocumentStorage());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_DocumentStorage": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_DocumentStorage():
    TypeOnly<current.DocumentStorage>;
declare function use_old_ClassDeclaration_DocumentStorage(
    use: TypeOnly<old.DocumentStorage>);
use_old_ClassDeclaration_DocumentStorage(
    get_current_ClassDeclaration_DocumentStorage());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_HttpServer": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_HttpServer():
    TypeOnly<old.HttpServer>;
declare function use_current_ClassDeclaration_HttpServer(
    use: TypeOnly<current.HttpServer>);
use_current_ClassDeclaration_HttpServer(
    get_old_ClassDeclaration_HttpServer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_HttpServer": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_HttpServer():
    TypeOnly<current.HttpServer>;
declare function use_old_ClassDeclaration_HttpServer(
    use: TypeOnly<old.HttpServer>);
use_old_ClassDeclaration_HttpServer(
    get_current_ClassDeclaration_HttpServer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IHttpServerConfig": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IHttpServerConfig():
    TypeOnly<old.IHttpServerConfig>;
declare function use_current_InterfaceDeclaration_IHttpServerConfig(
    use: TypeOnly<current.IHttpServerConfig>);
use_current_InterfaceDeclaration_IHttpServerConfig(
    get_old_InterfaceDeclaration_IHttpServerConfig());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IHttpServerConfig": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IHttpServerConfig():
    TypeOnly<current.IHttpServerConfig>;
declare function use_old_InterfaceDeclaration_IHttpServerConfig(
    use: TypeOnly<old.IHttpServerConfig>);
use_old_InterfaceDeclaration_IHttpServerConfig(
    get_current_InterfaceDeclaration_IHttpServerConfig());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ISocketIoRedisConnection": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ISocketIoRedisConnection():
    TypeOnly<old.ISocketIoRedisConnection>;
declare function use_current_InterfaceDeclaration_ISocketIoRedisConnection(
    use: TypeOnly<current.ISocketIoRedisConnection>);
use_current_InterfaceDeclaration_ISocketIoRedisConnection(
    get_old_InterfaceDeclaration_ISocketIoRedisConnection());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ISocketIoRedisConnection": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ISocketIoRedisConnection():
    TypeOnly<current.ISocketIoRedisConnection>;
declare function use_old_InterfaceDeclaration_ISocketIoRedisConnection(
    use: TypeOnly<old.ISocketIoRedisConnection>);
use_old_InterfaceDeclaration_ISocketIoRedisConnection(
    get_current_InterfaceDeclaration_ISocketIoRedisConnection());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ISocketIoRedisOptions": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ISocketIoRedisOptions():
    TypeOnly<old.ISocketIoRedisOptions>;
declare function use_current_InterfaceDeclaration_ISocketIoRedisOptions(
    use: TypeOnly<current.ISocketIoRedisOptions>);
use_current_InterfaceDeclaration_ISocketIoRedisOptions(
    get_old_InterfaceDeclaration_ISocketIoRedisOptions());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ISocketIoRedisOptions": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ISocketIoRedisOptions():
    TypeOnly<current.ISocketIoRedisOptions>;
declare function use_old_InterfaceDeclaration_ISocketIoRedisOptions(
    use: TypeOnly<old.ISocketIoRedisOptions>);
use_old_InterfaceDeclaration_ISocketIoRedisOptions(
    get_current_InterfaceDeclaration_ISocketIoRedisOptions());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ISocketIoRedisSubscriptionConnection": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ISocketIoRedisSubscriptionConnection():
    TypeOnly<old.ISocketIoRedisSubscriptionConnection>;
declare function use_current_InterfaceDeclaration_ISocketIoRedisSubscriptionConnection(
    use: TypeOnly<current.ISocketIoRedisSubscriptionConnection>);
use_current_InterfaceDeclaration_ISocketIoRedisSubscriptionConnection(
    get_old_InterfaceDeclaration_ISocketIoRedisSubscriptionConnection());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ISocketIoRedisSubscriptionConnection": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ISocketIoRedisSubscriptionConnection():
    TypeOnly<current.ISocketIoRedisSubscriptionConnection>;
declare function use_old_InterfaceDeclaration_ISocketIoRedisSubscriptionConnection(
    use: TypeOnly<old.ISocketIoRedisSubscriptionConnection>);
use_old_InterfaceDeclaration_ISocketIoRedisSubscriptionConnection(
    get_current_InterfaceDeclaration_ISocketIoRedisSubscriptionConnection());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_RedisSocketIoAdapter": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_RedisSocketIoAdapter():
    TypeOnly<old.RedisSocketIoAdapter>;
declare function use_current_ClassDeclaration_RedisSocketIoAdapter(
    use: TypeOnly<current.RedisSocketIoAdapter>);
use_current_ClassDeclaration_RedisSocketIoAdapter(
    get_old_ClassDeclaration_RedisSocketIoAdapter());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_RedisSocketIoAdapter": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_RedisSocketIoAdapter():
    TypeOnly<current.RedisSocketIoAdapter>;
declare function use_old_ClassDeclaration_RedisSocketIoAdapter(
    use: TypeOnly<old.RedisSocketIoAdapter>);
use_old_ClassDeclaration_RedisSocketIoAdapter(
    get_current_ClassDeclaration_RedisSocketIoAdapter());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_RequestListener": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_RequestListener():
    TypeOnly<old.RequestListener>;
declare function use_current_TypeAliasDeclaration_RequestListener(
    use: TypeOnly<current.RequestListener>);
use_current_TypeAliasDeclaration_RequestListener(
    get_old_TypeAliasDeclaration_RequestListener());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_RequestListener": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_RequestListener():
    TypeOnly<current.RequestListener>;
declare function use_old_TypeAliasDeclaration_RequestListener(
    use: TypeOnly<old.RequestListener>);
use_old_TypeAliasDeclaration_RequestListener(
    get_current_TypeAliasDeclaration_RequestListener());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_RestLessServer": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_RestLessServer():
    TypeOnly<old.RestLessServer>;
declare function use_current_ClassDeclaration_RestLessServer(
    use: TypeOnly<current.RestLessServer>);
use_current_ClassDeclaration_RestLessServer(
    get_old_ClassDeclaration_RestLessServer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_RestLessServer": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_RestLessServer():
    TypeOnly<current.RestLessServer>;
declare function use_old_ClassDeclaration_RestLessServer(
    use: TypeOnly<old.RestLessServer>);
use_old_ClassDeclaration_RestLessServer(
    get_current_ClassDeclaration_RestLessServer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_SocketIoWebServerFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_SocketIoWebServerFactory():
    TypeOnly<old.SocketIoWebServerFactory>;
declare function use_current_ClassDeclaration_SocketIoWebServerFactory(
    use: TypeOnly<current.SocketIoWebServerFactory>);
use_current_ClassDeclaration_SocketIoWebServerFactory(
    get_old_ClassDeclaration_SocketIoWebServerFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_SocketIoWebServerFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_SocketIoWebServerFactory():
    TypeOnly<current.SocketIoWebServerFactory>;
declare function use_old_ClassDeclaration_SocketIoWebServerFactory(
    use: TypeOnly<old.SocketIoWebServerFactory>);
use_old_ClassDeclaration_SocketIoWebServerFactory(
    get_current_ClassDeclaration_SocketIoWebServerFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_WebServer": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_WebServer():
    TypeOnly<old.WebServer>;
declare function use_current_ClassDeclaration_WebServer(
    use: TypeOnly<current.WebServer>);
use_current_ClassDeclaration_WebServer(
    get_old_ClassDeclaration_WebServer());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_WebServer": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_WebServer():
    TypeOnly<current.WebServer>;
declare function use_old_ClassDeclaration_WebServer(
    use: TypeOnly<old.WebServer>);
use_old_ClassDeclaration_WebServer(
    get_current_ClassDeclaration_WebServer());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_WholeSummaryReadGitManager": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_WholeSummaryReadGitManager():
    TypeOnly<old.WholeSummaryReadGitManager>;
declare function use_current_ClassDeclaration_WholeSummaryReadGitManager(
    use: TypeOnly<current.WholeSummaryReadGitManager>);
use_current_ClassDeclaration_WholeSummaryReadGitManager(
    get_old_ClassDeclaration_WholeSummaryReadGitManager());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_WholeSummaryReadGitManager": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_WholeSummaryReadGitManager():
    TypeOnly<current.WholeSummaryReadGitManager>;
declare function use_old_ClassDeclaration_WholeSummaryReadGitManager(
    use: TypeOnly<old.WholeSummaryReadGitManager>);
use_old_ClassDeclaration_WholeSummaryReadGitManager(
    get_current_ClassDeclaration_WholeSummaryReadGitManager());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_WholeSummaryWriteGitManager": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_WholeSummaryWriteGitManager():
    TypeOnly<old.WholeSummaryWriteGitManager>;
declare function use_current_ClassDeclaration_WholeSummaryWriteGitManager(
    use: TypeOnly<current.WholeSummaryWriteGitManager>);
use_current_ClassDeclaration_WholeSummaryWriteGitManager(
    get_old_ClassDeclaration_WholeSummaryWriteGitManager());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_WholeSummaryWriteGitManager": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_WholeSummaryWriteGitManager():
    TypeOnly<current.WholeSummaryWriteGitManager>;
declare function use_old_ClassDeclaration_WholeSummaryWriteGitManager(
    use: TypeOnly<old.WholeSummaryWriteGitManager>);
use_old_ClassDeclaration_WholeSummaryWriteGitManager(
    get_current_ClassDeclaration_WholeSummaryWriteGitManager());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_containsPathTraversal": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_containsPathTraversal():
    TypeOnly<typeof old.containsPathTraversal>;
declare function use_current_FunctionDeclaration_containsPathTraversal(
    use: TypeOnly<typeof current.containsPathTraversal>);
use_current_FunctionDeclaration_containsPathTraversal(
    get_old_FunctionDeclaration_containsPathTraversal());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_containsPathTraversal": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_containsPathTraversal():
    TypeOnly<typeof current.containsPathTraversal>;
declare function use_old_FunctionDeclaration_containsPathTraversal(
    use: TypeOnly<typeof old.containsPathTraversal>);
use_old_FunctionDeclaration_containsPathTraversal(
    get_current_FunctionDeclaration_containsPathTraversal());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_decodeHeader": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_decodeHeader():
    TypeOnly<typeof old.decodeHeader>;
declare function use_current_VariableDeclaration_decodeHeader(
    use: TypeOnly<typeof current.decodeHeader>);
use_current_VariableDeclaration_decodeHeader(
    get_old_VariableDeclaration_decodeHeader());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_decodeHeader": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_decodeHeader():
    TypeOnly<typeof current.decodeHeader>;
declare function use_old_VariableDeclaration_decodeHeader(
    use: TypeOnly<typeof old.decodeHeader>);
use_old_VariableDeclaration_decodeHeader(
    get_current_VariableDeclaration_decodeHeader());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_defaultErrorMessage": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_defaultErrorMessage():
    TypeOnly<typeof old.defaultErrorMessage>;
declare function use_current_VariableDeclaration_defaultErrorMessage(
    use: TypeOnly<typeof current.defaultErrorMessage>);
use_current_VariableDeclaration_defaultErrorMessage(
    get_old_VariableDeclaration_defaultErrorMessage());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_defaultErrorMessage": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_defaultErrorMessage():
    TypeOnly<typeof current.defaultErrorMessage>;
declare function use_old_VariableDeclaration_defaultErrorMessage(
    use: TypeOnly<typeof old.defaultErrorMessage>);
use_old_VariableDeclaration_defaultErrorMessage(
    get_current_VariableDeclaration_defaultErrorMessage());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_handleResponse": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_handleResponse():
    TypeOnly<typeof old.handleResponse>;
declare function use_current_FunctionDeclaration_handleResponse(
    use: TypeOnly<typeof current.handleResponse>);
use_current_FunctionDeclaration_handleResponse(
    get_old_FunctionDeclaration_handleResponse());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_handleResponse": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_handleResponse():
    TypeOnly<typeof current.handleResponse>;
declare function use_old_FunctionDeclaration_handleResponse(
    use: TypeOnly<typeof old.handleResponse>);
use_old_FunctionDeclaration_handleResponse(
    get_current_FunctionDeclaration_handleResponse());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_run": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_run():
    TypeOnly<typeof old.run>;
declare function use_current_FunctionDeclaration_run(
    use: TypeOnly<typeof current.run>);
use_current_FunctionDeclaration_run(
    get_old_FunctionDeclaration_run());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_run": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_run():
    TypeOnly<typeof current.run>;
declare function use_old_FunctionDeclaration_run(
    use: TypeOnly<typeof old.run>);
use_old_FunctionDeclaration_run(
    get_current_FunctionDeclaration_run());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_runService": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_runService():
    TypeOnly<typeof old.runService>;
declare function use_current_FunctionDeclaration_runService(
    use: TypeOnly<typeof current.runService>);
use_current_FunctionDeclaration_runService(
    get_old_FunctionDeclaration_runService());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_runService": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_runService():
    TypeOnly<typeof current.runService>;
declare function use_old_FunctionDeclaration_runService(
    use: TypeOnly<typeof old.runService>);
use_old_FunctionDeclaration_runService(
    get_current_FunctionDeclaration_runService());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_validateRequestParams": {"forwardCompat": false}
*/
declare function get_old_FunctionDeclaration_validateRequestParams():
    TypeOnly<typeof old.validateRequestParams>;
declare function use_current_FunctionDeclaration_validateRequestParams(
    use: TypeOnly<typeof current.validateRequestParams>);
use_current_FunctionDeclaration_validateRequestParams(
    get_old_FunctionDeclaration_validateRequestParams());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "FunctionDeclaration_validateRequestParams": {"backCompat": false}
*/
declare function get_current_FunctionDeclaration_validateRequestParams():
    TypeOnly<typeof current.validateRequestParams>;
declare function use_old_FunctionDeclaration_validateRequestParams(
    use: TypeOnly<typeof old.validateRequestParams>);
use_old_FunctionDeclaration_validateRequestParams(
    get_current_FunctionDeclaration_validateRequestParams());
