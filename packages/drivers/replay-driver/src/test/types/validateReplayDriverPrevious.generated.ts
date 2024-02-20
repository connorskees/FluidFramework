/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by fluid-type-test-generator in @fluidframework/build-tools.
 */
import type * as old from "@fluidframework/replay-driver-previous";
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
* "ClassDeclaration_FileSnapshotReader": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_FileSnapshotReader():
    TypeOnly<old.FileSnapshotReader>;
declare function use_current_ClassDeclaration_FileSnapshotReader(
    use: TypeOnly<current.FileSnapshotReader>): void;
use_current_ClassDeclaration_FileSnapshotReader(
    get_old_ClassDeclaration_FileSnapshotReader());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_FileSnapshotReader": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_FileSnapshotReader():
    TypeOnly<current.FileSnapshotReader>;
declare function use_old_ClassDeclaration_FileSnapshotReader(
    use: TypeOnly<old.FileSnapshotReader>): void;
use_old_ClassDeclaration_FileSnapshotReader(
    // @ts-expect-error compatibility expected to be broken
    get_current_ClassDeclaration_FileSnapshotReader());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFileSnapshot": {"forwardCompat": false}
*/
declare function get_old_InterfaceDeclaration_IFileSnapshot():
    TypeOnly<old.IFileSnapshot>;
declare function use_current_InterfaceDeclaration_IFileSnapshot(
    use: TypeOnly<current.IFileSnapshot>): void;
use_current_InterfaceDeclaration_IFileSnapshot(
    get_old_InterfaceDeclaration_IFileSnapshot());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "InterfaceDeclaration_IFileSnapshot": {"backCompat": false}
*/
declare function get_current_InterfaceDeclaration_IFileSnapshot():
    TypeOnly<current.IFileSnapshot>;
declare function use_old_InterfaceDeclaration_IFileSnapshot(
    use: TypeOnly<old.IFileSnapshot>): void;
use_old_InterfaceDeclaration_IFileSnapshot(
    get_current_InterfaceDeclaration_IFileSnapshot());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "RemovedClassDeclaration_OpStorage": {"forwardCompat": false}
*/

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "RemovedClassDeclaration_OpStorage": {"backCompat": false}
*/

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReadDocumentStorageServiceBase": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_ReadDocumentStorageServiceBase():
    TypeOnly<old.ReadDocumentStorageServiceBase>;
declare function use_current_ClassDeclaration_ReadDocumentStorageServiceBase(
    use: TypeOnly<current.ReadDocumentStorageServiceBase>): void;
use_current_ClassDeclaration_ReadDocumentStorageServiceBase(
    get_old_ClassDeclaration_ReadDocumentStorageServiceBase());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReadDocumentStorageServiceBase": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_ReadDocumentStorageServiceBase():
    TypeOnly<current.ReadDocumentStorageServiceBase>;
declare function use_old_ClassDeclaration_ReadDocumentStorageServiceBase(
    use: TypeOnly<old.ReadDocumentStorageServiceBase>): void;
use_old_ClassDeclaration_ReadDocumentStorageServiceBase(
    // @ts-expect-error compatibility expected to be broken
    get_current_ClassDeclaration_ReadDocumentStorageServiceBase());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReplayController": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_ReplayController():
    TypeOnly<old.ReplayController>;
declare function use_current_ClassDeclaration_ReplayController(
    use: TypeOnly<current.ReplayController>): void;
use_current_ClassDeclaration_ReplayController(
    get_old_ClassDeclaration_ReplayController());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReplayController": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_ReplayController():
    TypeOnly<current.ReplayController>;
declare function use_old_ClassDeclaration_ReplayController(
    use: TypeOnly<old.ReplayController>): void;
use_old_ClassDeclaration_ReplayController(
    // @ts-expect-error compatibility expected to be broken
    get_current_ClassDeclaration_ReplayController());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReplayDocumentService": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_ReplayDocumentService():
    TypeOnly<old.ReplayDocumentService>;
declare function use_current_ClassDeclaration_ReplayDocumentService(
    use: TypeOnly<current.ReplayDocumentService>): void;
use_current_ClassDeclaration_ReplayDocumentService(
    // @ts-expect-error compatibility expected to be broken
    get_old_ClassDeclaration_ReplayDocumentService());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReplayDocumentService": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_ReplayDocumentService():
    TypeOnly<current.ReplayDocumentService>;
declare function use_old_ClassDeclaration_ReplayDocumentService(
    use: TypeOnly<old.ReplayDocumentService>): void;
use_old_ClassDeclaration_ReplayDocumentService(
    get_current_ClassDeclaration_ReplayDocumentService());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReplayDocumentServiceFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_ReplayDocumentServiceFactory():
    TypeOnly<old.ReplayDocumentServiceFactory>;
declare function use_current_ClassDeclaration_ReplayDocumentServiceFactory(
    use: TypeOnly<current.ReplayDocumentServiceFactory>): void;
use_current_ClassDeclaration_ReplayDocumentServiceFactory(
    get_old_ClassDeclaration_ReplayDocumentServiceFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_ReplayDocumentServiceFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_ReplayDocumentServiceFactory():
    TypeOnly<current.ReplayDocumentServiceFactory>;
declare function use_old_ClassDeclaration_ReplayDocumentServiceFactory(
    use: TypeOnly<old.ReplayDocumentServiceFactory>): void;
use_old_ClassDeclaration_ReplayDocumentServiceFactory(
    get_current_ClassDeclaration_ReplayDocumentServiceFactory());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_SnapshotStorage": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_SnapshotStorage():
    TypeOnly<old.SnapshotStorage>;
declare function use_current_ClassDeclaration_SnapshotStorage(
    use: TypeOnly<current.SnapshotStorage>): void;
use_current_ClassDeclaration_SnapshotStorage(
    get_old_ClassDeclaration_SnapshotStorage());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_SnapshotStorage": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_SnapshotStorage():
    TypeOnly<current.SnapshotStorage>;
declare function use_old_ClassDeclaration_SnapshotStorage(
    use: TypeOnly<old.SnapshotStorage>): void;
use_old_ClassDeclaration_SnapshotStorage(
    // @ts-expect-error compatibility expected to be broken
    get_current_ClassDeclaration_SnapshotStorage());

/*
* Validate forward compat by using old type in place of current type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_StaticStorageDocumentServiceFactory": {"forwardCompat": false}
*/
declare function get_old_ClassDeclaration_StaticStorageDocumentServiceFactory():
    TypeOnly<old.StaticStorageDocumentServiceFactory>;
declare function use_current_ClassDeclaration_StaticStorageDocumentServiceFactory(
    use: TypeOnly<current.StaticStorageDocumentServiceFactory>): void;
use_current_ClassDeclaration_StaticStorageDocumentServiceFactory(
    get_old_ClassDeclaration_StaticStorageDocumentServiceFactory());

/*
* Validate back compat by using current type in place of old type
* If breaking change required, add in package.json under typeValidation.broken:
* "ClassDeclaration_StaticStorageDocumentServiceFactory": {"backCompat": false}
*/
declare function get_current_ClassDeclaration_StaticStorageDocumentServiceFactory():
    TypeOnly<current.StaticStorageDocumentServiceFactory>;
declare function use_old_ClassDeclaration_StaticStorageDocumentServiceFactory(
    use: TypeOnly<old.StaticStorageDocumentServiceFactory>): void;
use_old_ClassDeclaration_StaticStorageDocumentServiceFactory(
    get_current_ClassDeclaration_StaticStorageDocumentServiceFactory());
