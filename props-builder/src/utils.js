// Fylgja (fylgja.dev)
// Licensed under MIT Open Source

export const cssVarRegex = /var\(--([a-zA-Z0-9-]+)\)/g;
export const tokenVarRegex = /\{([a-zA-Z0-9.-]+)\}/g;

/**
 * Convert a string to kebab case.
 *
 * @param {string} string
 * @returns {string} kebab case string
 */
export function kebabCase(string) {
	return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Check if the value is a string and does not contain special characters
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isValidString(value) {
	const regex = /^[a-zA-Z0-9\s]+$/;
	return typeof value === "string" && regex.test(value);
}

/**
 * get the file type based on the file name.
 *
 * @param {string} filename
 * @returns {string} - file base type to work with
 */
export function isFileType(filename) {
	if (
		filename.endsWith("figma-tokens.json") ||
		filename.endsWith("figma-tokens.sync.json")
	) {
		return "figma";
	}

	if (filename.endsWith("style-dictionary-tokens.json")) {
		return "style-dictionary";
	}

	if (filename.endsWith("tokens.json")) {
		return "tokens";
	}

	if (filename.endsWith(".cjs")) {
		return "cjs";
	}

	if (filename.endsWith(".js") || filename.endsWith(".mjs")) {
		return "mjs";
	}

	return filename.split(/[.;+_]/).pop();
}

/**
 * Flatten Object into a flat Object
 *
 * @param {Object} obj - object to flatten
 * @param {string} separator - separator to use for the combined keys
 * @returns {Object} - flattened object
 */
export const flattenObj = (obj, separator = "-") => {
	let result = {};

	for (const i in obj) {
		if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
			const temp = flattenObj(obj[i]);
			for (const j in temp) {
				result[i + separator + j] = temp[j];
			}
		} else {
			result[i] = obj[i];
		}
	}

	return result;
};

/**
 * Unwrap a nested Object by following a path of keys, dropping everything
 * above it. Useful for tokens files that wrap the actual tokens in
 * structural keys (e.g. `tokens.values`) that shouldn't end up in the
 * generated CSS variable names.
 *
 * @param {Object} obj - object to unwrap
 * @param {string|string[]} keyPath - dot/dash separated path, or array of keys, to unwrap
 * @returns {Object} - the object found at `keyPath`, or the original object if the path doesn't exist
 */
export const stripPrefixPath = (obj, keyPath) => {
	if (!keyPath) return obj;

	const keys = Array.isArray(keyPath) ? keyPath : keyPath.split(/[.-]/);
	let current = obj;

	for (const key of keys) {
		if (
			current &&
			typeof current === "object" &&
			!Array.isArray(current) &&
			Object.prototype.hasOwnProperty.call(current, key)
		) {
			current = current[key];
		} else {
			return obj;
		}
	}

	return current;
};

/**
 * Recursively renames Object keys based on a lookup map.
 * Useful to align generated token names with a naming convention
 * (e.g. renaming a `colors` group to `color`).
 *
 * @param {Object} obj - object to rename keys in
 * @param {Object} renameMap - map of `{ [currentKey]: newKey }`
 * @returns {Object} - object with renamed keys
 */
export const renameKeys = (obj, renameMap) => {
	if (!renameMap || typeof obj !== "object" || obj === null || Array.isArray(obj)) {
		return obj;
	}

	return Object.fromEntries(
		Object.entries(obj).map(([key, value]) => {
			const newKey = Object.prototype.hasOwnProperty.call(renameMap, key)
				? renameMap[key]
				: key;

			return [newKey, renameKeys(value, renameMap)];
		}),
	);
};

/**
 * Turns a flat Object in to a deep nested Object,
 * based on the keys
 *
 * @param {Object} obj - object to unflatten
 * @param {string} separator - separator to use to detect the nested keys
 * @returns {Object} - nested object based on the separator
 */
export const unflattenObj = (obj, separator = "-") => {
	let result = {};

	for (const i in obj) {
		const keys = i.split(separator);
		let current = result;

		keys.forEach((key, index) => {
			if (index === keys.length - 1) {
				current[key] = obj[i];
			} else {
				if (!current[key]) {
					current[key] = {};
				}
				current = current[key];
			}
		});
	}

	return result;
};
