import fromStitch from "./formats/stitch.js";
import {
	isPlainObject,
	isToken,
	mergeTokenTrees,
	pathToCssVar,
	referencesToCssVars,
	tokenValueToCss,
} from "./formats/dtcg.js";
import {
	fromResolver,
	getPath,
	isResolverDocument,
	parsePointer,
} from "./formats/resolver.js";

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
 * Converts a Design Tokens (2025.10) tree into a simplified, nested object with CSS values.
 *
 * - `$root` tokens are written as `DEFAULT`, which is dropped from the CSS variable name
 * - `$extends` groups are deep merged with the group they extend
 * - `$type` is inherited from parent groups
 * - Curly brace references and `$ref` JSON Pointers to a token become CSS variables,
 *   pointers into a value (e.g. `#/color/blue/$value/components/0`) are resolved to that value
 *
 * @param {Object} root - the whole token tree, used to resolve references
 * @returns {Object}
 */
const fromDtcgTokens = (root) => {
	/**
	 * @param {string} pointer
	 * @returns {*}
	 */
	const resolvePointer = (pointer) => {
		const path = parsePointer(pointer);
		const valueIndex = path.indexOf("$value");

		if (valueIndex === -1 || valueIndex === path.length - 1) {
			return pathToCssVar(path);
		}

		return tokenValueToCss(getPath(root, path, pointer), undefined, resolvePointer);
	};

	/**
	 * @param {Object} group
	 * @param {string[]} trail - `$extends` targets seen so far, to detect circular references
	 * @returns {Object}
	 */
	const applyExtends = (group, trail = []) => {
		const { $extends, ...rest } = group;
		if (typeof $extends !== "string") return group;

		const path = $extends.startsWith("{")
			? $extends.slice(1, -1).split(".")
			: parsePointer($extends);
		const key = path.join("/");

		if (trail.includes(key)) {
			throw new Error(`Circular "$extends" reference: "${$extends}"`);
		}

		const target = applyExtends(getPath(root, path, $extends), [...trail, key]);
		return mergeTokenTrees(target, rest);
	};

	/**
	 * @param {*} node
	 * @param {string|undefined} inheritedType
	 * @returns {*}
	 */
	const convert = (node, inheritedType) => {
		if (isToken(node)) {
			return tokenValueToCss(node.$value, node.$type ?? inheritedType, resolvePointer);
		}

		if (!isPlainObject(node)) return node;

		const group = applyExtends(node);
		const type = group.$type ?? inheritedType;

		return Object.fromEntries(
			Object.entries(group)
				// Metadata keys (e.g. `$description`, `$type`) are not tokens
				// and should never be turned into a CSS custom property.
				.filter(([key]) => key === "$root" || !key.startsWith("$"))
				.map(([key, value]) => [key === "$root" ? "DEFAULT" : key, convert(value, type)]),
		);
	};

	return convert(root, undefined);
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
 * For the default syntax, the Design Tokens 2025.10 format is supported,
 * including Resolver documents (see `fromDtcgTokens` and `fromResolver`).
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

	if (syntax === "style-dictionary") {
		console.log("Using default convert syntax");
		console.log(
			"To use the style-dictionary convert, please use the converter from https://styledictionary.com/",
		);
	}

	if (syntax !== "figma") {
		return fromDtcgTokens(isResolverDocument(props) ? fromResolver(props) : props);
	}

	if (Object.prototype.hasOwnProperty.call(props, "value")) {
		const value = props.value;
		if (typeof value === "string") {
			return referencesToCssVars(value);
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

	const collapsed = Object.fromEntries(
		Object.entries(newProps).map(([key, value]) => [
			key,
			collapseRedundantColorGroup(key, value),
		]),
	);

	return isTopLevel ? unwrapTopLevelOtherGroup(collapsed) : collapsed;
};

export default fromTokens;
