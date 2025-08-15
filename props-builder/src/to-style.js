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
	} = {},
) => {
	const indent = varSyntax === "--" ? "\t" : "";
	const flatProps = flattenObj(props);
	const isScss = varSyntax === "$";
	const isTw4 = selector === "@theme";

	let styles = "";
	let stylesDark = "";
	let appendedMeta = "";
	let result = "";

	Object.entries(flatProps).forEach(([name, value]) => {
		const isProperty = name.endsWith("-@");
		const isDarkMode = name.includes("-@media:dark");

		if (Array.isArray(value)) value = value.join(", ");

		if (isProperty) {
			appendedMeta += isTw4
				? `${appendedMeta ? "\n\n" : ""}${indent}${value}`
				: `${appendedMeta ? "\n\n" : ""}${value}`;
			return;
		}

		if (name.includes(".")) {
			name = name.replaceAll(".", "");
		}

		name = kebabCase(name);

		if (name.endsWith("-default")) {
			name = name.replace("-default", "");
		}

		let varName = `${varSyntax}${name}`;

		if (isDarkMode) {
			varName = varName.replace("-@media:dark", isScss ? "-dark" : "");
		}

		// Handle SCSS specific escaped values
		if (typeof value === "string" && isScss) {
			const regex = /[\/><=]|^\(.*\)$/;

			// If the value contains any of the characters /, >, <, >=, <=
			// or is wrapped in parentheses, wrap it in quotes
			if (regex.test(value)) {
				value = `"${value}"`;
			}
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
		result += appendedMeta ? `\n${appendedMeta}` : "";
	} else if (isTw4) {
		if (styles || appendedMeta) {
			result = `${selector} {\n`;
			result += styles ? styles : "";
			result += appendedMeta ? `\n${appendedMeta}` : "";
			result += `\n}\n`;
		}

		result += stylesDark
			? `\n${mediaDark} {\n\t:root {\n${stylesDark}\t}\n}`
			: "";
	} else {
		result = styles ? `${selector} {\n${styles}}\n` : "";
		result += stylesDark
			? `\n${mediaDark} {\n\t${selector} {\n${stylesDark}\t}\n}`
			: "";
		result += appendedMeta ? `\n${appendedMeta}` : "";
	}

	return result.trim();
};

export default toStyleTokens;
