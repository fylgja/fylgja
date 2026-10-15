// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { kebabCase } from "../utils.js";
import { colorToCss, parseCssColor } from "./color.js";

/**
 * Converts between CSS values and the Design Tokens Format Module 2025.10 values.
 *
 * @source https://www.designtokens.org/tr/2025.10/format/
 */

export const dtcgVersion = "2025.10";

/** @source https://www.designtokens.org/tr/2025.10/format/#font-weight */
const fontWeightAliases = {
	thin: 100,
	hairline: 100,
	"extra-light": 200,
	"ultra-light": 200,
	light: 300,
	normal: 400,
	regular: 400,
	book: 400,
	medium: 500,
	"semi-bold": 600,
	"demi-bold": 600,
	bold: 700,
	"extra-bold": 800,
	"ultra-bold": 800,
	black: 900,
	heavy: 900,
	"extra-black": 950,
	"ultra-black": 950,
};

const typographyTypes = {
	fontFamily: "fontFamily",
	fontSize: "dimension",
	fontWeight: "fontWeight",
	letterSpacing: "dimension",
	lineHeight: "number",
};

const referenceRegex = /\{([\w$.-]+)\}/g;
const numberPattern = "-?(?:\\d+\\.?\\d*|\\.\\d+)(?:e[+-]?\\d+)?";
const dimensionRegex = new RegExp(`^(${numberPattern})(px|rem)$`, "i");
const durationRegex = new RegExp(`^(${numberPattern})(ms|s)$`, "i");
const ratioRegex = new RegExp(`^(${numberPattern})\\s*\\/\\s*(${numberPattern})$`);
const cubicBezierRegex = new RegExp(
	`^cubic-bezier\\(\\s*(${numberPattern})\\s*,\\s*(${numberPattern})\\s*,\\s*(${numberPattern})\\s*,\\s*(${numberPattern})\\s*\\)$`,
	"i",
);
const cssVarRegex = /^var\(--([\w-]+)\)$/;

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isPlainObject = (value) =>
	typeof value === "object" && value !== null && !Array.isArray(value);

/**
 * @param {*} node
 * @returns {boolean}
 */
export const isToken = (node) =>
	isPlainObject(node) && Object.prototype.hasOwnProperty.call(node, "$value");

/**
 * Deep merges two token trees, where a token in `override` replaces the token in `base` as a whole.
 *
 * @param {Object} base
 * @param {Object} override
 * @returns {Object}
 */
export const mergeTokenTrees = (base, override) => {
	const result = { ...base };

	for (const [key, value] of Object.entries(override ?? {})) {
		const current = result[key];
		const canMerge =
			isPlainObject(current) && !isToken(current) &&
			isPlainObject(value) && !isToken(value);

		result[key] = canMerge ? mergeTokenTrees(current, value) : value;
	}

	return result;
};

/**
 * Turns a token path into a CSS variable, dropping the `$root` segment,
 * the same way `DEFAULT` keys are dropped from the CSS output.
 *
 * @param {string[]} path - e.g. `["color", "brand", "$root"]`
 * @returns {string} - e.g. `var(--color-brand)`
 */
export const pathToCssVar = (path) => {
	const segments = path.filter((segment) => segment !== "$root" && segment !== "$value");
	return `var(--${kebabCase(segments.join("-"))})`;
};

/**
 * Replaces all curly brace references (e.g. `{color.brand.primary}`) with CSS variables.
 *
 * @param {string} value
 * @returns {string}
 */
export const referencesToCssVars = (value) =>
	value.replace(referenceRegex, (_match, reference) =>
		// `.value` is the legacy (Figma) way to point at a token value
		pathToCssVar(reference.replace(/\.value$/, "").split(".")),
	);

/**
 * Guesses the token type from the shape of a value, for tokens without a (inherited) `$type`.
 *
 * @param {*} value
 * @returns {string|undefined}
 */
function inferType(value) {
	if (Array.isArray(value)) {
		if (value.length === 4 && value.every((item) => typeof item === "number")) {
			return "cubicBezier";
		}
		if (value.some((item) => isPlainObject(item) && "position" in item)) return "gradient";
		if (value.some((item) => isPlainObject(item) && "offsetX" in item)) return "shadow";
		return;
	}

	if (!isPlainObject(value)) return;
	if ("colorSpace" in value) return "color";
	if ("value" in value && "unit" in value) {
		return ["ms", "s"].includes(value.unit) ? "duration" : "dimension";
	}
	if ("offsetX" in value) return "shadow";
	if ("timingFunction" in value) return "transition";
	if ("fontFamily" in value || "fontSize" in value) return "typography";
	if ("width" in value && "style" in value) return "border";
	if ("dashArray" in value) return "strokeStyle";
}

/**
 * @param {string} family
 * @returns {string}
 */
const quoteFontFamily = (family) => {
	const needsQuotes = /\s/.test(family) && !/^["']|^var\(|,/.test(family);
	return needsQuotes ? `"${family}"` : family;
};

/**
 * Converts a 2025.10 token value into a CSS value.
 * Legacy string values are kept as is, only their references are converted.
 *
 * @param {*} value - the `$value` of a token, or a part of it
 * @param {string|undefined} type - the (inherited) `$type` of the token
 * @param {function(string): *} resolvePointer - resolves a `$ref` JSON Pointer into a CSS value
 * @returns {*} - a CSS value, or an object of CSS values for typography tokens
 */
export function tokenValueToCss(value, type, resolvePointer) {
	/** @type {function(*, string=): *} */
	const toCss = (subValue, subType) => tokenValueToCss(subValue, subType, resolvePointer);

	if (isPlainObject(value) && typeof value.$ref === "string") {
		return resolvePointer(value.$ref);
	}

	if (typeof value === "string") {
		if (type === "fontWeight" && fontWeightAliases[value]) {
			return fontWeightAliases[value];
		}

		const css = referencesToCssVars(value);
		return type === "fontFamily" ? quoteFontFamily(css) : css;
	}

	switch (type ?? inferType(value)) {
		case "color":
			return isPlainObject(value) ? colorToCss(value, toCss) : value;

		case "dimension":
		case "duration":
			return isPlainObject(value) ? `${toCss(value.value)}${value.unit}` : value;

		case "cubicBezier":
			return Array.isArray(value)
				? `cubic-bezier(${value.map((point) => toCss(point)).join(", ")})`
				: value;

		case "fontFamily":
			return Array.isArray(value)
				? value.map((family) => toCss(family, "fontFamily")).join(", ")
				: value;

		case "strokeStyle":
			// A dash array has no CSS equivalent, `dashed` is the closest fallback
			return isPlainObject(value) ? "dashed" : value;

		case "border":
			return isPlainObject(value)
				? [
						toCss(value.width, "dimension"),
						toCss(value.style, "strokeStyle"),
						toCss(value.color, "color"),
					].join(" ")
				: value;

		case "transition":
			return isPlainObject(value)
				? [
						toCss(value.duration, "duration"),
						toCss(value.timingFunction, "cubicBezier"),
						toCss(value.delay, "duration"),
					].join(" ")
				: value;

		case "shadow":
			return [value]
				.flat()
				.map((shadow) => {
					if (!isPlainObject(shadow) || shadow.$ref) return toCss(shadow, "shadow");

					return [
						shadow.inset ? "inset" : "",
						toCss(shadow.offsetX, "dimension"),
						toCss(shadow.offsetY, "dimension"),
						toCss(shadow.blur, "dimension"),
						toCss(shadow.spread, "dimension"),
						toCss(shadow.color, "color"),
					]
						.filter((part) => part !== "")
						.join(" ");
				})
				.join(", ");

		case "gradient":
			return Array.isArray(value)
				? value
						.map((stop) => {
							if (!isPlainObject(stop) || stop.$ref) return toCss(stop, "gradient");

							const position = toCss(stop.position, "number");
							const percentage =
								typeof position === "number"
									? `${Math.min(Math.max(position, 0), 1) * 100}%`
									: `calc(${position} * 100%)`;

							return `${toCss(stop.color, "color")} ${percentage}`;
						})
						.join(", ")
				: value;

		case "typography":
			return isPlainObject(value)
				? Object.fromEntries(
						Object.entries(value).map(([key, part]) => [
							key,
							toCss(part, typographyTypes[key]),
						]),
					)
				: value;
	}

	return Array.isArray(value) ? value.map((item) => toCss(item)) : value;
}

/**
 * Splits a value on a separator, ignoring separators inside functions.
 *
 * @param {string} value
 * @param {string} separator - a single character, or `" "` for any whitespace
 * @returns {string[]}
 */
function splitTopLevel(value, separator) {
	const parts = [""];
	let depth = 0;

	for (const character of value) {
		if (character === "(") depth++;
		if (character === ")") depth--;

		const isSeparator =
			separator === " " ? /\s/.test(character) : character === separator;

		if (depth === 0 && isSeparator) {
			parts.push("");
		} else {
			parts[parts.length - 1] += character;
		}
	}

	return parts.map((part) => part.trim()).filter(Boolean);
}

/**
 * @param {string} value
 * @returns {{value: number, unit: string}|undefined}
 */
function parseDimension(value) {
	if (value === "0") return { value: 0, unit: "px" };

	const match = value.match(dimensionRegex);
	return match ? { value: Number.parseFloat(match[1]), unit: match[2].toLowerCase() } : undefined;
}

/**
 * @param {string} value
 * @param {function(string): string|undefined} lookupReference
 * @returns {Object|string|undefined}
 */
function parseColorOrReference(value, lookupReference) {
	const variable = value.match(cssVarRegex);
	return variable ? lookupReference(variable[1]) : parseCssColor(value);
}

/**
 * @param {string} value - e.g. `0 2px 1px -1px var(--shadow-color), inset 0 1px #000`
 * @param {function(string): string|undefined} lookupReference
 * @returns {Object|Object[]|undefined}
 */
function parseShadow(value, lookupReference) {
	const shadows = splitTopLevel(value, ",").map((item) => {
		const parts = splitTopLevel(item, " ");
		const dimensions = [];
		let color;

		for (const part of parts.filter((part) => part !== "inset")) {
			const dimension = parseDimension(part);

			if (dimension) {
				dimensions.push(dimension);
			} else if (color === undefined) {
				color = parseColorOrReference(part, lookupReference);
				if (color === undefined) return;
			} else {
				return;
			}
		}

		if (dimensions.length < 2 || dimensions.length > 4) return;

		const zero = { value: 0, unit: "px" };
		const [offsetX, offsetY, blur = zero, spread = zero] = dimensions;
		const shadow = {
			color: color ?? { colorSpace: "srgb", components: [0, 0, 0], hex: "#000000" },
			offsetX,
			offsetY,
			blur,
			spread,
		};

		if (parts.includes("inset")) shadow.inset = true;

		return shadow;
	});

	if (!shadows.length || shadows.includes(undefined)) return;

	return shadows.length === 1 ? shadows[0] : shadows;
}

/**
 * Converts a CSS value into a 2025.10 token.
 *
 * @param {*} input - the CSS value
 * @param {string} name - the CSS variable name (without `--`), used as type hint
 * @param {function(string): string|undefined} lookupReference - turns a CSS variable name into a `{token.path}` reference
 * @returns {{$type?: string, $value: *, $description?: string}|undefined} - `undefined` when the value can't be expressed as a token
 */
export function cssToToken(input, name, lookupReference) {
	if (typeof input === "number") {
		const isFontWeight = /weight/i.test(name) && input >= 1 && input <= 1000;
		return { $type: isFontWeight ? "fontWeight" : "number", $value: input };
	}

	if (Array.isArray(input)) input = input.join(", ");
	if (typeof input !== "string") return;

	const value = input.trim();

	const variable = value.match(cssVarRegex);
	if (variable) {
		const reference = lookupReference(variable[1]);
		return reference ? { $value: reference } : undefined;
	}

	if (/family/i.test(name)) {
		const families = splitTopLevel(value, ",").map((family) =>
			family.replace(/^["'](.*)["']$/, "$1"),
		);
		return { $type: "fontFamily", $value: families.length === 1 ? families[0] : families };
	}

	if (/weight/i.test(name) && Object.hasOwn(fontWeightAliases, value)) {
		return { $type: "fontWeight", $value: value };
	}

	if (value !== "" && !Number.isNaN(Number(value))) {
		return cssToToken(Number(value), name, lookupReference);
	}

	const ratio = value.match(ratioRegex);
	if (ratio) {
		return {
			$type: "number",
			$value: Number.parseFloat(ratio[1]) / Number.parseFloat(ratio[2]),
			$description: value,
		};
	}

	const color = parseCssColor(value);
	if (color) return { $type: "color", $value: color };

	const dimension = parseDimension(value);
	if (dimension) return { $type: "dimension", $value: dimension };

	const duration = value.match(durationRegex);
	if (duration) {
		return {
			$type: "duration",
			$value: { value: Number.parseFloat(duration[1]), unit: duration[2].toLowerCase() },
		};
	}

	const cubicBezier = value.match(cubicBezierRegex);
	if (cubicBezier) {
		return { $type: "cubicBezier", $value: cubicBezier.slice(1).map(Number.parseFloat) };
	}

	const shadow = parseShadow(value, lookupReference);
	if (shadow) return { $type: "shadow", $value: shadow };
}
