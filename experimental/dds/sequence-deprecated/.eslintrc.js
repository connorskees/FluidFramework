/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = {
	extends: [require.resolve("@fluidframework/eslint-config-fluid/minimal"), "prettier"],
	parserOptions: {
		project: ["./tsconfig.json", "./src/test/tsconfig.json"],
	},
	rules: {
		"import/no-deprecated": "off", // This package uses deprecated APIs by design.
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/strict-boolean-expressions": "off",
	},
};
