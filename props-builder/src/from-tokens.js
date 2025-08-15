import { tokenVarRegex } from "./utils.js";
import { groupKeysFigma } from "./formats/figma.js";

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
 * @param {object} props The design token object to convert.
 * @param {string} [syntax="default"] The syntax of the design token object.
 *  Supported values are "default", "figma", and "style-dictionary".
 * @returns {object} A simplified object with the token values.
 */
const fromTokens = (props, syntax = "default") => {
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
		Object.entries(props).map(([key, value]) => [
			key,
			fromTokens(value, syntax),
		]),
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
