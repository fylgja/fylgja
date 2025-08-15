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
