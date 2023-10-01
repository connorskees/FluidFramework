/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-test-generator in @fluidframework/build-tools.
 */
import type * as old from "@fluidframework/driver-definitions-previous";
import type * as current from "../../index";


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
* "TypeAliasDeclaration_DriverError": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_DriverError():
    TypeOnly<old.DriverError>;
declare function use_current_TypeAliasDeclaration_DriverError(
    use: TypeOnly<current.DriverError>);
use_current_TypeAliasDeclaration_DriverError(
    get_old_TypeAliasDeclaration_DriverError());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_DriverError": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_DriverError():
    TypeOnly<current.DriverError>;
declare function use_old_TypeAliasDeclaration_DriverError(
    use: TypeOnly<old.DriverError>);
use_old_TypeAliasDeclaration_DriverError(
    get_current_TypeAliasDeclaration_DriverError());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "EnumDeclaration_DriverErrorType": {"forwardCompat": false}
*/
declare function get_old_EnumDeclaration_DriverErrorType():
    TypeOnly<old.DriverErrorType>;
declare function use_current_EnumDeclaration_DriverErrorType(
    use: TypeOnly<current.DriverErrorType>);
use_current_EnumDeclaration_DriverErrorType(
    get_old_EnumDeclaration_DriverErrorType());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "EnumDeclaration_DriverErrorType": {"backCompat": false}
*/
declare function get_current_EnumDeclaration_DriverErrorType():
    TypeOnly<current.DriverErrorType>;
declare function use_old_EnumDeclaration_DriverErrorType(
    use: TypeOnly<old.DriverErrorType>);
use_old_EnumDeclaration_DriverErrorType(
    get_current_EnumDeclaration_DriverErrorType());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_DriverErrorTypes": {"forwardCompat": false}
*/
declare function get_old_VariableDeclaration_DriverErrorTypes():
    TypeOnly<typeof old.DriverErrorTypes>;
declare function use_current_VariableDeclaration_DriverErrorTypes(
    use: TypeOnly<typeof current.DriverErrorTypes>);
use_current_VariableDeclaration_DriverErrorTypes(
    get_old_VariableDeclaration_DriverErrorTypes());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "VariableDeclaration_DriverErrorTypes": {"backCompat": false}
*/
declare function get_current_VariableDeclaration_DriverErrorTypes():
    TypeOnly<typeof current.DriverErrorTypes>;
declare function use_old_VariableDeclaration_DriverErrorTypes(
    use: TypeOnly<typeof old.DriverErrorTypes>);
use_old_VariableDeclaration_DriverErrorTypes(
    get_current_VariableDeclaration_DriverErrorTypes());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_DriverErrorTypes": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_DriverErrorTypes():
    TypeOnly<old.DriverErrorTypes>;
declare function use_current_TypeAliasDeclaration_DriverErrorTypes(
    use: TypeOnly<current.DriverErrorTypes>);
use_current_TypeAliasDeclaration_DriverErrorTypes(
    get_old_TypeAliasDeclaration_DriverErrorTypes());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_DriverErrorTypes": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_DriverErrorTypes():
    TypeOnly<current.DriverErrorTypes>;
declare function use_old_TypeAliasDeclaration_DriverErrorTypes(
    use: TypeOnly<old.DriverErrorTypes>);
use_old_TypeAliasDeclaration_DriverErrorTypes(
    get_current_TypeAliasDeclaration_DriverErrorTypes());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "EnumDeclaration_DriverHeader": {"forwardCompat": false}
*/
declare function get_old_EnumDeclaration_DriverHeader():
    TypeOnly<old.DriverHeader>;
declare function use_current_EnumDeclaration_DriverHeader(
    use: TypeOnly<current.DriverHeader>);
use_current_EnumDeclaration_DriverHeader(
    get_old_EnumDeclaration_DriverHeader());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "EnumDeclaration_DriverHeader": {"backCompat": false}
*/
declare function get_current_EnumDeclaration_DriverHeader():
    TypeOnly<current.DriverHeader>;
declare function use_old_EnumDeclaration_DriverHeader(
    use: TypeOnly<old.DriverHeader>);
use_old_EnumDeclaration_DriverHeader(
    get_current_EnumDeclaration_DriverHeader());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_DriverPreCheckInfo": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_DriverPreCheckInfo():
    TypeOnly<old.DriverPreCheckInfo>;
declare function use_current_InterfaceDeclaration_DriverPreCheckInfo(
    use: TypeOnly<current.DriverPreCheckInfo>);
use_current_InterfaceDeclaration_DriverPreCheckInfo(
    get_old_InterfaceDeclaration_DriverPreCheckInfo());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_DriverPreCheckInfo": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_DriverPreCheckInfo():
    TypeOnly<current.DriverPreCheckInfo>;
declare function use_old_InterfaceDeclaration_DriverPreCheckInfo(
    use: TypeOnly<old.DriverPreCheckInfo>);
use_old_InterfaceDeclaration_DriverPreCheckInfo(
    get_current_InterfaceDeclaration_DriverPreCheckInfo());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "EnumDeclaration_FetchSource": {"forwardCompat": false}
*/
declare function get_old_EnumDeclaration_FetchSource():
    TypeOnly<old.FetchSource>;
declare function use_current_EnumDeclaration_FetchSource(
    use: TypeOnly<current.FetchSource>);
use_current_EnumDeclaration_FetchSource(
    get_old_EnumDeclaration_FetchSource());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "EnumDeclaration_FetchSource": {"backCompat": false}
*/
declare function get_current_EnumDeclaration_FetchSource():
    TypeOnly<current.FetchSource>;
declare function use_old_EnumDeclaration_FetchSource(
    use: TypeOnly<old.FetchSource>);
use_old_EnumDeclaration_FetchSource(
    get_current_EnumDeclaration_FetchSource());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_FiveDaysMs": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_FiveDaysMs():
    TypeOnly<old.FiveDaysMs>;
declare function use_current_TypeAliasDeclaration_FiveDaysMs(
    use: TypeOnly<current.FiveDaysMs>);
use_current_TypeAliasDeclaration_FiveDaysMs(
    get_old_TypeAliasDeclaration_FiveDaysMs());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_FiveDaysMs": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_FiveDaysMs():
    TypeOnly<current.FiveDaysMs>;
declare function use_old_TypeAliasDeclaration_FiveDaysMs(
    use: TypeOnly<old.FiveDaysMs>);
use_old_TypeAliasDeclaration_FiveDaysMs(
    get_current_TypeAliasDeclaration_FiveDaysMs());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IAnyDriverError": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IAnyDriverError():
    TypeOnly<old.IAnyDriverError>;
declare function use_current_InterfaceDeclaration_IAnyDriverError(
    use: TypeOnly<current.IAnyDriverError>);
use_current_InterfaceDeclaration_IAnyDriverError(
    get_old_InterfaceDeclaration_IAnyDriverError());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IAnyDriverError": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IAnyDriverError():
    TypeOnly<current.IAnyDriverError>;
declare function use_old_InterfaceDeclaration_IAnyDriverError(
    use: TypeOnly<old.IAnyDriverError>);
use_old_InterfaceDeclaration_IAnyDriverError(
    get_current_InterfaceDeclaration_IAnyDriverError());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IAuthorizationError": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IAuthorizationError():
    TypeOnly<old.IAuthorizationError>;
declare function use_current_InterfaceDeclaration_IAuthorizationError(
    use: TypeOnly<current.IAuthorizationError>);
use_current_InterfaceDeclaration_IAuthorizationError(
    get_old_InterfaceDeclaration_IAuthorizationError());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IAuthorizationError": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IAuthorizationError():
    TypeOnly<current.IAuthorizationError>;
declare function use_old_InterfaceDeclaration_IAuthorizationError(
    use: TypeOnly<old.IAuthorizationError>);
use_old_InterfaceDeclaration_IAuthorizationError(
    get_current_InterfaceDeclaration_IAuthorizationError());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IContainerPackageInfo": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IContainerPackageInfo():
    TypeOnly<old.IContainerPackageInfo>;
declare function use_current_InterfaceDeclaration_IContainerPackageInfo(
    use: TypeOnly<current.IContainerPackageInfo>);
use_current_InterfaceDeclaration_IContainerPackageInfo(
    get_old_InterfaceDeclaration_IContainerPackageInfo());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IContainerPackageInfo": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IContainerPackageInfo():
    TypeOnly<current.IContainerPackageInfo>;
declare function use_old_InterfaceDeclaration_IContainerPackageInfo(
    use: TypeOnly<old.IContainerPackageInfo>);
use_old_InterfaceDeclaration_IContainerPackageInfo(
    get_current_InterfaceDeclaration_IContainerPackageInfo());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDeltaStorageService": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDeltaStorageService():
    TypeOnly<old.IDeltaStorageService>;
declare function use_current_InterfaceDeclaration_IDeltaStorageService(
    use: TypeOnly<current.IDeltaStorageService>);
use_current_InterfaceDeclaration_IDeltaStorageService(
    get_old_InterfaceDeclaration_IDeltaStorageService());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDeltaStorageService": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDeltaStorageService():
    TypeOnly<current.IDeltaStorageService>;
declare function use_old_InterfaceDeclaration_IDeltaStorageService(
    use: TypeOnly<old.IDeltaStorageService>);
use_old_InterfaceDeclaration_IDeltaStorageService(
    get_current_InterfaceDeclaration_IDeltaStorageService());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDeltasFetchResult": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDeltasFetchResult():
    TypeOnly<old.IDeltasFetchResult>;
declare function use_current_InterfaceDeclaration_IDeltasFetchResult(
    use: TypeOnly<current.IDeltasFetchResult>);
use_current_InterfaceDeclaration_IDeltasFetchResult(
    get_old_InterfaceDeclaration_IDeltasFetchResult());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDeltasFetchResult": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDeltasFetchResult():
    TypeOnly<current.IDeltasFetchResult>;
declare function use_old_InterfaceDeclaration_IDeltasFetchResult(
    use: TypeOnly<old.IDeltasFetchResult>);
use_old_InterfaceDeclaration_IDeltasFetchResult(
    get_current_InterfaceDeclaration_IDeltasFetchResult());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentDeltaConnection": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDocumentDeltaConnection():
    TypeOnly<old.IDocumentDeltaConnection>;
declare function use_current_InterfaceDeclaration_IDocumentDeltaConnection(
    use: TypeOnly<current.IDocumentDeltaConnection>);
use_current_InterfaceDeclaration_IDocumentDeltaConnection(
    get_old_InterfaceDeclaration_IDocumentDeltaConnection());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentDeltaConnection": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDocumentDeltaConnection():
    TypeOnly<current.IDocumentDeltaConnection>;
declare function use_old_InterfaceDeclaration_IDocumentDeltaConnection(
    use: TypeOnly<old.IDocumentDeltaConnection>);
use_old_InterfaceDeclaration_IDocumentDeltaConnection(
    get_current_InterfaceDeclaration_IDocumentDeltaConnection());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentDeltaConnectionEvents": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDocumentDeltaConnectionEvents():
    TypeOnly<old.IDocumentDeltaConnectionEvents>;
declare function use_current_InterfaceDeclaration_IDocumentDeltaConnectionEvents(
    use: TypeOnly<current.IDocumentDeltaConnectionEvents>);
use_current_InterfaceDeclaration_IDocumentDeltaConnectionEvents(
    get_old_InterfaceDeclaration_IDocumentDeltaConnectionEvents());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentDeltaConnectionEvents": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDocumentDeltaConnectionEvents():
    TypeOnly<current.IDocumentDeltaConnectionEvents>;
declare function use_old_InterfaceDeclaration_IDocumentDeltaConnectionEvents(
    use: TypeOnly<old.IDocumentDeltaConnectionEvents>);
use_old_InterfaceDeclaration_IDocumentDeltaConnectionEvents(
    get_current_InterfaceDeclaration_IDocumentDeltaConnectionEvents());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentDeltaStorageService": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDocumentDeltaStorageService():
    TypeOnly<old.IDocumentDeltaStorageService>;
declare function use_current_InterfaceDeclaration_IDocumentDeltaStorageService(
    use: TypeOnly<current.IDocumentDeltaStorageService>);
use_current_InterfaceDeclaration_IDocumentDeltaStorageService(
    get_old_InterfaceDeclaration_IDocumentDeltaStorageService());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentDeltaStorageService": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDocumentDeltaStorageService():
    TypeOnly<current.IDocumentDeltaStorageService>;
declare function use_old_InterfaceDeclaration_IDocumentDeltaStorageService(
    use: TypeOnly<old.IDocumentDeltaStorageService>);
use_old_InterfaceDeclaration_IDocumentDeltaStorageService(
    get_current_InterfaceDeclaration_IDocumentDeltaStorageService());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentService": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDocumentService():
    TypeOnly<old.IDocumentService>;
declare function use_current_InterfaceDeclaration_IDocumentService(
    use: TypeOnly<current.IDocumentService>);
use_current_InterfaceDeclaration_IDocumentService(
    get_old_InterfaceDeclaration_IDocumentService());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentService": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDocumentService():
    TypeOnly<current.IDocumentService>;
declare function use_old_InterfaceDeclaration_IDocumentService(
    use: TypeOnly<old.IDocumentService>);
use_old_InterfaceDeclaration_IDocumentService(
    get_current_InterfaceDeclaration_IDocumentService());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentServiceFactory": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDocumentServiceFactory():
    TypeOnly<old.IDocumentServiceFactory>;
declare function use_current_InterfaceDeclaration_IDocumentServiceFactory(
    use: TypeOnly<current.IDocumentServiceFactory>);
use_current_InterfaceDeclaration_IDocumentServiceFactory(
    get_old_InterfaceDeclaration_IDocumentServiceFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentServiceFactory": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDocumentServiceFactory():
    TypeOnly<current.IDocumentServiceFactory>;
declare function use_old_InterfaceDeclaration_IDocumentServiceFactory(
    use: TypeOnly<old.IDocumentServiceFactory>);
use_old_InterfaceDeclaration_IDocumentServiceFactory(
    get_current_InterfaceDeclaration_IDocumentServiceFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentServicePolicies": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDocumentServicePolicies():
    TypeOnly<old.IDocumentServicePolicies>;
declare function use_current_InterfaceDeclaration_IDocumentServicePolicies(
    use: TypeOnly<current.IDocumentServicePolicies>);
use_current_InterfaceDeclaration_IDocumentServicePolicies(
    get_old_InterfaceDeclaration_IDocumentServicePolicies());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentServicePolicies": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDocumentServicePolicies():
    TypeOnly<current.IDocumentServicePolicies>;
declare function use_old_InterfaceDeclaration_IDocumentServicePolicies(
    use: TypeOnly<old.IDocumentServicePolicies>);
use_old_InterfaceDeclaration_IDocumentServicePolicies(
    get_current_InterfaceDeclaration_IDocumentServicePolicies());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentStorageService": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDocumentStorageService():
    TypeOnly<old.IDocumentStorageService>;
declare function use_current_InterfaceDeclaration_IDocumentStorageService(
    use: TypeOnly<current.IDocumentStorageService>);
use_current_InterfaceDeclaration_IDocumentStorageService(
    get_old_InterfaceDeclaration_IDocumentStorageService());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentStorageService": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDocumentStorageService():
    TypeOnly<current.IDocumentStorageService>;
declare function use_old_InterfaceDeclaration_IDocumentStorageService(
    use: TypeOnly<old.IDocumentStorageService>);
use_old_InterfaceDeclaration_IDocumentStorageService(
    get_current_InterfaceDeclaration_IDocumentStorageService());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentStorageServicePolicies": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDocumentStorageServicePolicies():
    TypeOnly<old.IDocumentStorageServicePolicies>;
declare function use_current_InterfaceDeclaration_IDocumentStorageServicePolicies(
    use: TypeOnly<current.IDocumentStorageServicePolicies>);
use_current_InterfaceDeclaration_IDocumentStorageServicePolicies(
    get_old_InterfaceDeclaration_IDocumentStorageServicePolicies());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDocumentStorageServicePolicies": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDocumentStorageServicePolicies():
    TypeOnly<current.IDocumentStorageServicePolicies>;
declare function use_old_InterfaceDeclaration_IDocumentStorageServicePolicies(
    use: TypeOnly<old.IDocumentStorageServicePolicies>);
use_old_InterfaceDeclaration_IDocumentStorageServicePolicies(
    get_current_InterfaceDeclaration_IDocumentStorageServicePolicies());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDriverBasicError": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDriverBasicError():
    TypeOnly<old.IDriverBasicError>;
declare function use_current_InterfaceDeclaration_IDriverBasicError(
    use: TypeOnly<current.IDriverBasicError>);
use_current_InterfaceDeclaration_IDriverBasicError(
    get_old_InterfaceDeclaration_IDriverBasicError());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDriverBasicError": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDriverBasicError():
    TypeOnly<current.IDriverBasicError>;
declare function use_old_InterfaceDeclaration_IDriverBasicError(
    use: TypeOnly<old.IDriverBasicError>);
use_old_InterfaceDeclaration_IDriverBasicError(
    get_current_InterfaceDeclaration_IDriverBasicError());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDriverErrorBase": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDriverErrorBase():
    TypeOnly<old.IDriverErrorBase>;
declare function use_current_InterfaceDeclaration_IDriverErrorBase(
    use: TypeOnly<current.IDriverErrorBase>);
use_current_InterfaceDeclaration_IDriverErrorBase(
    get_old_InterfaceDeclaration_IDriverErrorBase());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDriverErrorBase": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDriverErrorBase():
    TypeOnly<current.IDriverErrorBase>;
declare function use_old_InterfaceDeclaration_IDriverErrorBase(
    use: TypeOnly<old.IDriverErrorBase>);
use_old_InterfaceDeclaration_IDriverErrorBase(
    get_current_InterfaceDeclaration_IDriverErrorBase());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDriverHeader": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IDriverHeader():
    TypeOnly<old.IDriverHeader>;
declare function use_current_InterfaceDeclaration_IDriverHeader(
    use: TypeOnly<current.IDriverHeader>);
use_current_InterfaceDeclaration_IDriverHeader(
    get_old_InterfaceDeclaration_IDriverHeader());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IDriverHeader": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IDriverHeader():
    TypeOnly<current.IDriverHeader>;
declare function use_old_InterfaceDeclaration_IDriverHeader(
    use: TypeOnly<old.IDriverHeader>);
use_old_InterfaceDeclaration_IDriverHeader(
    get_current_InterfaceDeclaration_IDriverHeader());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IGenericNetworkError": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IGenericNetworkError():
    TypeOnly<old.IGenericNetworkError>;
declare function use_current_InterfaceDeclaration_IGenericNetworkError(
    use: TypeOnly<current.IGenericNetworkError>);
use_current_InterfaceDeclaration_IGenericNetworkError(
    get_old_InterfaceDeclaration_IGenericNetworkError());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IGenericNetworkError": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IGenericNetworkError():
    TypeOnly<current.IGenericNetworkError>;
declare function use_old_InterfaceDeclaration_IGenericNetworkError(
    use: TypeOnly<old.IGenericNetworkError>);
use_old_InterfaceDeclaration_IGenericNetworkError(
    get_current_InterfaceDeclaration_IGenericNetworkError());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ILocationRedirectionError": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ILocationRedirectionError():
    TypeOnly<old.ILocationRedirectionError>;
declare function use_current_InterfaceDeclaration_ILocationRedirectionError(
    use: TypeOnly<current.ILocationRedirectionError>);
use_current_InterfaceDeclaration_ILocationRedirectionError(
    get_old_InterfaceDeclaration_ILocationRedirectionError());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ILocationRedirectionError": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ILocationRedirectionError():
    TypeOnly<current.ILocationRedirectionError>;
declare function use_old_InterfaceDeclaration_ILocationRedirectionError(
    use: TypeOnly<old.ILocationRedirectionError>);
use_old_InterfaceDeclaration_ILocationRedirectionError(
    get_current_InterfaceDeclaration_ILocationRedirectionError());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IResolvedUrl": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IResolvedUrl():
    TypeOnly<old.IResolvedUrl>;
declare function use_current_InterfaceDeclaration_IResolvedUrl(
    use: TypeOnly<current.IResolvedUrl>);
use_current_InterfaceDeclaration_IResolvedUrl(
    get_old_InterfaceDeclaration_IResolvedUrl());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IResolvedUrl": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IResolvedUrl():
    TypeOnly<current.IResolvedUrl>;
declare function use_old_InterfaceDeclaration_IResolvedUrl(
    use: TypeOnly<old.IResolvedUrl>);
use_old_InterfaceDeclaration_IResolvedUrl(
    get_current_InterfaceDeclaration_IResolvedUrl());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IStream": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IStream():
    TypeOnly<old.IStream<any>>;
declare function use_current_InterfaceDeclaration_IStream(
    use: TypeOnly<current.IStream<any>>);
use_current_InterfaceDeclaration_IStream(
    get_old_InterfaceDeclaration_IStream());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IStream": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IStream():
    TypeOnly<current.IStream<any>>;
declare function use_old_InterfaceDeclaration_IStream(
    use: TypeOnly<old.IStream<any>>);
use_old_InterfaceDeclaration_IStream(
    get_current_InterfaceDeclaration_IStream());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_IStreamResult": {"forwardCompat": false}
*/
declare function get_old_TypeAliasDeclaration_IStreamResult():
    TypeOnly<old.IStreamResult<any>>;
declare function use_current_TypeAliasDeclaration_IStreamResult(
    use: TypeOnly<current.IStreamResult<any>>);
use_current_TypeAliasDeclaration_IStreamResult(
    get_old_TypeAliasDeclaration_IStreamResult());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "TypeAliasDeclaration_IStreamResult": {"backCompat": false}
*/
declare function get_current_TypeAliasDeclaration_IStreamResult():
    TypeOnly<current.IStreamResult<any>>;
declare function use_old_TypeAliasDeclaration_IStreamResult(
    use: TypeOnly<old.IStreamResult<any>>);
use_old_TypeAliasDeclaration_IStreamResult(
    get_current_TypeAliasDeclaration_IStreamResult());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ISummaryContext": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_ISummaryContext():
    TypeOnly<old.ISummaryContext>;
declare function use_current_InterfaceDeclaration_ISummaryContext(
    use: TypeOnly<current.ISummaryContext>);
use_current_InterfaceDeclaration_ISummaryContext(
    get_old_InterfaceDeclaration_ISummaryContext());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_ISummaryContext": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_ISummaryContext():
    TypeOnly<current.ISummaryContext>;
declare function use_old_InterfaceDeclaration_ISummaryContext(
    use: TypeOnly<old.ISummaryContext>);
use_old_InterfaceDeclaration_ISummaryContext(
    get_current_InterfaceDeclaration_ISummaryContext());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IThrottlingWarning": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IThrottlingWarning():
    TypeOnly<old.IThrottlingWarning>;
declare function use_current_InterfaceDeclaration_IThrottlingWarning(
    use: TypeOnly<current.IThrottlingWarning>);
use_current_InterfaceDeclaration_IThrottlingWarning(
    get_old_InterfaceDeclaration_IThrottlingWarning());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IThrottlingWarning": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IThrottlingWarning():
    TypeOnly<current.IThrottlingWarning>;
declare function use_old_InterfaceDeclaration_IThrottlingWarning(
    use: TypeOnly<old.IThrottlingWarning>);
use_old_InterfaceDeclaration_IThrottlingWarning(
    get_current_InterfaceDeclaration_IThrottlingWarning());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IUrlResolver": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IUrlResolver():
    TypeOnly<old.IUrlResolver>;
declare function use_current_InterfaceDeclaration_IUrlResolver(
    use: TypeOnly<current.IUrlResolver>);
use_current_InterfaceDeclaration_IUrlResolver(
    get_old_InterfaceDeclaration_IUrlResolver());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IUrlResolver": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IUrlResolver():
    TypeOnly<current.IUrlResolver>;
declare function use_old_InterfaceDeclaration_IUrlResolver(
    use: TypeOnly<old.IUrlResolver>);
use_old_InterfaceDeclaration_IUrlResolver(
    get_current_InterfaceDeclaration_IUrlResolver());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "EnumDeclaration_LoaderCachingPolicy": {"forwardCompat": false}
*/
declare function get_old_EnumDeclaration_LoaderCachingPolicy():
    TypeOnly<old.LoaderCachingPolicy>;
declare function use_current_EnumDeclaration_LoaderCachingPolicy(
    use: TypeOnly<current.LoaderCachingPolicy>);
use_current_EnumDeclaration_LoaderCachingPolicy(
    get_old_EnumDeclaration_LoaderCachingPolicy());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "EnumDeclaration_LoaderCachingPolicy": {"backCompat": false}
*/
declare function get_current_EnumDeclaration_LoaderCachingPolicy():
    TypeOnly<current.LoaderCachingPolicy>;
declare function use_old_EnumDeclaration_LoaderCachingPolicy(
    use: TypeOnly<old.LoaderCachingPolicy>);
use_old_EnumDeclaration_LoaderCachingPolicy(
    get_current_EnumDeclaration_LoaderCachingPolicy());
