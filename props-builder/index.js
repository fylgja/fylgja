// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import fs from "node:fs";
import { isFileType } from "./src/utils.js";
import {
	formatTokens,
	formatFigma,
	formatStyleDictionary,
} from "./src/formats/index.js";
import toTokens from "./src/to-tokens.js";
import toStyleTokens from "./src/to-style.js";
import toCssJitTokens from "./src/to-css-jit.js";

/**
 * Builds a tokens in any syntax from a Javascript object,
 * this can be done in to a style syntax such as CSS or a desing tokens syntax
 *
 * @param {Object} props
 * @param {string} filename
 * @param {Object} options
 * @param {'auto'|'tokens'|'figma'|'style-dictionary'|'scss'|'css'|'css-jit'|'cjs'|'mjs'|'json'} options.parseAs
 * @param {Boolean} options.writeToFile
 * @param {string} options.selector
 * @param {string} options.wrapper - Wrapper for Design Tokens
 */
export const propsBuilder = (
	props,
	filename,
	{
		parseAs = "auto",
		writeToFile = true,
		selector = ":where(:root)",
		wrapper = "",
	} = {},
) => {
	let data = "";
	const fileType = isFileType(filename);
	const parseSyntax = parseAs !== "auto" ? parseAs : fileType;
	const jsPrefix =
		fileType === "mjs"
			? "export default "
			: fileType === "cjs"
				? "module.exports = "
				: "";

	switch (parseSyntax) {
		case "tokens":
			data = toTokens(props, formatTokens, {
				wrapper,
				groupTypes: false,
			});
			break;

		case "figma":
			data = toTokens(props, formatFigma, {
				cssVarToToken: true,
				wrapper,
			});
			break;

		case "style-dictionary":
			data = toTokens(props, formatStyleDictionary, {
				cssVarToToken: true,
				wrapper,
			});
			break;

		case "scss":
			data = toStyleTokens(props, { varSyntax: "$" });
			data += "\n";
			break;

		case "css":
			data = toStyleTokens(props, { selector });
			data += "\n";
			break;

		case "css-jit":
			data = props && jsPrefix;
			data += toCssJitTokens(props);
			data += "\n";
			break;

		case "cjs":
		case "mjs":
		case "json":
			data = props && jsPrefix;
			data += JSON.stringify(props, null, 2);
			data += "\n";
			break;
	}

	if (writeToFile) {
		fs.createWriteStream(filename).end(data);
	} else {
		return data;
	}
};
