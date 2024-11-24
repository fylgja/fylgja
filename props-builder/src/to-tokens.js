// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { cssVarRegex, flattenObj, unflattenObj } from "./utils.js";
import { formatTokens } from "./formats/index.js";

const defaultColorKeys = [
	"color",
	"white",
	"black",
	"gray",
	"red",
	"pink",
	"purple",
	"violet",
	"indigo",
	"blue",
	"cyan",
	"teal",
	"green",
	"lime",
	"yellow",
	"orange",
];

/**
 * Tokenizes CSS variable strings by converting them into a standardized token format.
 *
 * @param {string} token - The token string potentially containing CSS variable references.
 * @param {string} metaValueKey - The key for the meta value (e.g. "$value" or "value").
 * @returns {string} - Tokenized string replacing CSS variable references.
 */
const tokenizeCSSVar = (token, metaValueKey) => {
	if (Array.isArray(token)) {
		token = token.toString();
	}

	if (typeof token !== "string") {
		return token;
	}

	return token.replace(cssVarRegex, (match, tokenVal) => {
		return `{${tokenVal.replace(/-/g, ".")}.${metaValueKey}}`;
	});
};

/**
 * Creates a JSON token file from a JavaScript object with CSS props.
 *
 * @param {Object} props - The object containing CSS properties.
 * @param {function(string, string[]): Object} [metaExtend=formatTokens] - Function that extends meta information for a token key.
 * @param {Object} options - Configuration options.
 * @param {string[]} options.colorKeys - List of keys to be treated as color properties.
 * @param {boolean} options.cssVarToToken - Whether to replace CSS variables with tokenized values.
 * @returns {string} - JSON formatted string matching the Design Token file format.
 */
const toTokens = (
	props,
	metaExtend = formatTokens,
	{ colorKeys = defaultColorKeys, cssVarToToken = false } = {}
) => {
	const flatProps = flattenObj(props);
	const isUsingDefaultFormat = metaExtend === formatTokens;
	const metaValueKey = isUsingDefaultFormat ? "$value" : "value";
	const shouldUseMinified = isUsingDefaultFormat;

	const tokens = Object.entries(flatProps).reduce((acc, [key, token]) => {
		const meta = metaExtend(key, colorKeys);
		const value = cssVarToToken
			? tokenizeCSSVar(token, metaValueKey)
			: token;

		acc[key] = { [metaValueKey]: value, ...meta };
		return acc;
	}, {});

	const output = shouldUseMinified
		? JSON.stringify(tokens, null, 2)
		: JSON.stringify(unflattenObj(tokens), null, 2);

	return output;
};

export { toTokens as default, defaultColorKeys, toTokens };
