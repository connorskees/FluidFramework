/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

export interface MapLike<T> {
	[index: string]: T;
}

// We use any because when you include custom methods
// such as toJSON(), JSON.stringify accepts most types other
// than functions
export type PropertySet = MapLike<any>;

// Assume these are created with Object.create(null)

/**
 * @internal
 */
export function matchProperties(a: PropertySet | undefined, b: PropertySet | undefined) {
	if (!a && !b) {
		return true;
	}

	const keysA = a ? Object.keys(a) : [];
	const keysB = b ? Object.keys(b) : [];

	if (keysA.length !== keysB.length) {
		return false;
	}

	for (const key of keysA) {
		if (b?.[key] === undefined) {
			return false;
		} else if (typeof b[key] === "object") {
			if (!matchProperties(a?.[key], b[key])) {
				return false;
			}
		} else if (b[key] !== a?.[key]) {
			return false;
		}
	}

	return true;
}

export function extend<T>(base: MapLike<T>, extension: MapLike<T> | undefined) {
	if (extension !== undefined) {
		// eslint-disable-next-line guard-for-in, no-restricted-syntax
		for (const key in extension) {
			const v = extension[key];
			if (v === null) {
				// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
				delete base[key];
			} else {
				base[key] = v;
			}
		}
	}
	return base;
}

export function clone<T>(extension: MapLike<T> | undefined) {
	if (extension === undefined) {
		return undefined;
	}
	const cloneMap = createMap<T>();
	// eslint-disable-next-line guard-for-in, no-restricted-syntax
	for (const key in extension) {
		const v = extension[key];
		if (v !== null) {
			cloneMap[key] = v;
		}
	}
	return cloneMap;
}

/**
 * @internal
 */
export function addProperties(oldProps: PropertySet | undefined, newProps: PropertySet) {
	const _oldProps = oldProps ?? createMap<any>();
	extend(_oldProps, newProps);
	return _oldProps;
}

export function extendIfUndefined<T>(base: MapLike<T>, extension: MapLike<T> | undefined) {
	if (extension !== undefined) {
		// eslint-disable-next-line no-restricted-syntax
		for (const key in extension) {
			if (base[key] === undefined) {
				base[key] = extension[key];
			}
		}
	}
	return base;
}

/**
 * @internal
 */
// Create a MapLike with good performance.
export function createMap<T>(): MapLike<T> {
	return Object.create(null) as MapLike<T>;
}
