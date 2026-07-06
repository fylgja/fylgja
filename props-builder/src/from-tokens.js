import { tokenVarRegex } from "./utils.js";
import { groupKeysFigma } from "./formats/figma.js";
import fromStitch from "./formats/stitch.js";

/**
 * Converts a design token object from a specific syntax (e.g., Design Tokens or Figma Tokens)
 * to a simplified, nested object structure.
 *
 * This function recursively traverses the input object and extracts the value of each token,
 * effectively removing the metadata associated with the token syntax.
 *
 * It also converts token references (e.g., "{color.brand.primary}")
 * into CSS variables (e.g., "var(--color-brand-primary)").
 *
 * For Figma tokens, it also unnest values from groups defined in `groupKeysFigma`.
 *
 * For Google Stitch tokens, `props` is the raw Markdown file content (a string),
 * which gets reduced to its known token groups before the usual conversion runs.
 *
 * @param {object|string} props The design token object to convert, or (for "stitch") the raw Markdown content.
 * @param {string} [syntax="default"] The syntax of the design token object.
 *  Supported values are "default", "figma", "style-dictionary", and "stitch".
 * @returns {object} A simplified object with the token values.
 */
const fromTokens = (props, syntax = "default") => {
	if (syntax === "stitch") {
		return fromTokens(fromStitch(props), "default");
	}

	const isFigma = syntax === "figma";
	const keyValueName = isFigma ? "value" : "$value";

	if (syntax === "style-dictionary") {
		console.log("Using default convert syntax");
		console.log(
			"To use the style-dictionary convert, please use the converter from https://styledictionary.com/",
		);
	}

	if (Object.prototype.hasOwnProperty.call(props, keyValueName)) {
		const value = props[keyValueName];
		if (typeof value === "string") {
			// Use regex to grab all values with the following example `{color.blue.7}`
			return value.replace(tokenVarRegex, (_match, group) => {
				const newGroup = group.replace(/\.value$/, "");
				const newVar = newGroup.replace(/\./g, "-");
				return `var(--${newVar})`;
			});
		}
		return value;
	}

	if (typeof props !== "object" || props === null || Array.isArray(props)) {
		return props;
	}

	const newProps = Object.fromEntries(
		Object.entries(props)
			// Metadata keys (e.g. `$description`, `$type`) are not tokens
			// and should never be turned into a CSS custom property.
			.filter(([key]) => !key.startsWith("$"))
			.map(([key, value]) => [key, fromTokens(value, syntax)]),
	);

	if (isFigma) {
		return Object.entries(newProps).reduce((acc, [key, value]) => {
			if (groupKeysFigma.includes(key)) {
				Object.assign(acc, value);
			} else {
				acc[key] = value;
			}
			return acc;
		}, {});
	}

	return newProps;
};

export default fromTokens;
