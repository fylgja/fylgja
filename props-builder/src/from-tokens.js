import { tokenVarRegex } from "./utils.js";
import fromStitch from "./formats/stitch.js";

/**
 * Some Figma exports wrap the color group in a redundant nested
 * `color`/`colors` key (e.g. `colors.color` or `colors.colors`).
 * Left alone, this produces a redundant CSS variable name (e.g.
 * `--colors-color-primary`), so it's collapsed away here.
 *
 * Unwrapping other groups (e.g. `sizing`, `borderWidth`, `boxShadow`)
 * is intentionally not handled automatically anymore — use the
 * `stripPrefix`/`rename` options for that, since auto-unwrapping every
 * group at every nesting level ended up removing too much in some
 * token files.
 *
 * @param {string} key
 * @param {*} value
 * @returns {*}
 */
const collapseRedundantColorGroup = (key, value) => {
	const isColorGroup = key === "color" || key === "colors";
	if (!isColorGroup || typeof value !== "object" || value === null || Array.isArray(value)) {
		return value;
	}

	const nestedColorKey = ["color", "colors"].find((nestedKey) =>
		Object.prototype.hasOwnProperty.call(value, nestedKey),
	);

	return nestedColorKey ? value[nestedColorKey] : value;
};

/**
 * Figma commonly wraps ungrouped/miscellaneous tokens in a top-level
 * `other` key. Unlike the other structural groups, this one is safe to
 * unwrap automatically since it's only ever meaningful at the root of
 * the token tree — a nested `other` key deeper in the tree is just a
 * regular token group with that name, and must be left alone.
 *
 * @param {Object} props - already-converted top-level token object
 * @returns {Object}
 */
const unwrapTopLevelOtherGroup = (props) => {
	const { other, ...rest } = props;

	if (typeof other !== "object" || other === null || Array.isArray(other)) {
		return props;
	}

	return { ...rest, ...other };
};

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
 * For Figma tokens, it also collapses a redundant nested `color`/`colors`
 * group (see `collapseRedundantColorGroup`) and unwraps a top-level
 * `other` group (see `unwrapTopLevelOtherGroup`).
 *
 * For Google Stitch tokens, `props` is the raw Markdown file content (a string),
 * which gets reduced to its known token groups before the usual conversion runs.
 *
 * @param {object|string} props The design token object to convert, or (for "stitch") the raw Markdown content.
 * @param {string} [syntax="default"] The syntax of the design token object.
 *  Supported values are "default", "figma", "style-dictionary", and "stitch".
 * @param {boolean} [isTopLevel=true] Internal flag tracking recursion depth — do not pass this in manually.
 * @returns {object} A simplified object with the token values.
 */
const fromTokens = (props, syntax = "default", isTopLevel = true) => {
	if (syntax === "stitch") {
		return fromTokens(fromStitch(props), "default", isTopLevel);
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
			.map(([key, value]) => [key, fromTokens(value, syntax, false)]),
	);

	if (isFigma) {
		const collapsed = Object.fromEntries(
			Object.entries(newProps).map(([key, value]) => [
				key,
				collapseRedundantColorGroup(key, value),
			]),
		);

		return isTopLevel ? unwrapTopLevelOtherGroup(collapsed) : collapsed;
	}

	return newProps;
};

export default fromTokens;
