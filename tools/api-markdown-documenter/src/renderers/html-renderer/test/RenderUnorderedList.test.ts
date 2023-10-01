/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */
import { expect } from "chai";

import { UnorderedListNode } from "../../../documentation-domain";
import { testRender } from "./Utilities";

describe("UnorderedListNode HTML rendering tests", () => {
	it("Empty list", () => {
		expect(testRender(UnorderedListNode.Empty)).to.equal("<ul>\n</ul>\n");
	});

	it("Simple list", () => {
		const text1 = "Item 1";
		const text2 = "Item 2";
		const text3 = "Item 3";

		const input = UnorderedListNode.createFromPlainTextEntries([text1, text2, text3]);
		const result = testRender(input);

		const expected = [
			"<ul>",
			"  <li>",
			`    ${text1}`,
			"  </li>",
			"  <li>",
			`    ${text2}`,
			"  </li>",
			"  <li>",
			`    ${text3}`,
			"  </li>",
			"</ul>",
			"",
		].join("\n");

		expect(result).to.equal(expected);
	});
});
