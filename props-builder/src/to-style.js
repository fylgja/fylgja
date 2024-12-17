// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { cssVarRegex, kebabCase, flattenObj } from "./utils.js";

const toScssVar = (token) => {
	if (typeof token !== "string") return token;

	return token.replace(cssVarRegex, (match, tokenVal) => {
		return `#{$${tokenVal}}`;
	});
};

/**
 * Creates array of tokens from a javascript object with CSS props.
 *
 * @param {Object} props - The input object with CSS properties.
 * @param {Object} options - The options for generating tokens.
 * @param {string} options.selector - The CSS selector (default: ":root").
 * @param {string} options.mediaDark - Media query for dark mode (default: "@media (prefers-color-scheme: dark)").
 * @param {string} options.varSyntax - The syntax for variables, e.g. "--" for CSS variables or "$" for SCSS (default: "--").
 * @returns {string} The generated CSS/SCSS styles as a string.
 */
const toStyleTokens = (
	props,
	{
		selector = ":root",
		mediaDark = "@media (prefers-color-scheme: dark)",
		varSyntax = "--",
	} = {}
) => {
	const indent = varSyntax === "--" ? "\t" : "";
	const flatProps = flattenObj(props);
	const isScss = varSyntax === "$";

	let styles = "";
	let stylesDark = "";
	let appendedMeta = "";
	let result = "";

	Object.entries(flatProps).forEach(([name, value]) => {
		const isKeyFrame = name.endsWith("-@");
		const isDarkMode = name.includes("-@media:dark");

		if (Array.isArray(value)) value = value.join(", ");

		if (isKeyFrame) {
			appendedMeta += `${appendedMeta ? "\n\n" : ""}${value}`;
			return;
		}

		name = kebabCase(name);

		if (name.endsWith("-default")) {
			name = name.replace("-default", "");
		}

		let varName = `${varSyntax}${name}`;

		if (isDarkMode) {
			varName = varName.replace("-@media:dark", isScss ? "-dark" : "");
		}

		// Handle SCSS specific syntax for division and special quoting
		if (typeof value === "string" && isScss && value.includes("/")) {
			value = `"${value}"`;
		}

		if (isScss) {
			value = toScssVar(value);
		}

		if (isDarkMode) {
			stylesDark += `${indent}${indent}${varName}: ${value};\n`;
		} else {
			styles += `${indent}${varName}: ${value};\n`;
		}
	});

	if (isScss) {
		result = styles;
		result += stylesDark;
	} else {
		result = styles ? `${selector} {\n${styles}}\n` : "";

		if (stylesDark) {
			result += `\n${mediaDark} {\n\t${selector} {\n${stylesDark}\t}\n}`;
		}
	}

	// Append keyframes/meta data if present
	if (appendedMeta) {
		result += `\n${appendedMeta}`;
	}

	return result.trim();
};

export default toStyleTokens;
