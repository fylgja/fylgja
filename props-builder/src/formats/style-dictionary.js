// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

/**
 * Adds the right type to the design token value
 *
 * @source https://styledictionary.com/info/tokens/
 * @param {string} key
 * @param {string[]} colorKeys - Possible color keys
 * @returns {Object}
 */
function formatStyleDictionary(key, colorKeys = [], numberKeys = []) {
	if (!key) return;

	if (key.includes("size") && !key.includes("border-size")) {
		return { type: "size" };
	}

	if (key.includes("border-size")) {
		return { type: "border-width" };
	}

	if (key.includes("border-radius") || key.includes("radius")) {
		return { type: "border-radius" };
	}

	if (key.includes("shadow")) {
		return { type: "box-shadow" };
	}

	if (colorKeys.some((color) => key.includes(color))) {
		return { type: "color" };
	}

	return {};
}

export default formatStyleDictionary;
