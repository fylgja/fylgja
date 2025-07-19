// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

/**
 * Adds the right type to the design token value
 *
 * @param {string} key
 * @param {string[]} colorKeys - Possible color keys
 * @returns {Object}
 */
function formatFigma(key, colorKeys = [], numberKeys = []) {
	if (!key) return;

	if (key.includes("size") && !key.includes("border-size")) {
		return { type: "sizing" };
	}

	if (key.includes("border-size")) {
		return { type: "borderWidth" };
	}

	if (key.includes("border-radius") || key.includes("radius")) {
		return { type: "borderRadius" };
	}

	if (key.includes("shadow")) {
		return { type: "boxShadow" };
	}

	if (colorKeys.some((color) => key.includes(color))) {
		return { type: "color" };
	}

	return { type: "other" };
}

export default formatFigma;
