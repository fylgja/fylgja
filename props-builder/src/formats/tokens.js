// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

/**
 * Adds the right type to the design token value
 *
 * @source https://www.designtokens.org/tr/drafts/format/#types
 * @param {string} key
 * @param {string[]} colorKeys - Possible color keys
 * @returns {Object}
 */
function formatTokens(key, colorKeys = []) {
	if (!key) return;

	if (key.includes("size")) return { $type: "dimension" };
	if (key.includes("family")) return { $type: "font-family" };
	if (key.includes("weight")) return { $type: "font-weight" };
	if (key.includes("duration")) return { $type: "duration" };
	if (key.includes("ease")) return { $type: "cubic-bezier" };

	if (colorKeys.some((color) => key.includes(color))) {
		return { $type: "color" };
	}

	const numberKeys = ["layer", "lineHeight", "line-height"];
	if (numberKeys.some((num) => key.includes(num))) return { $type: "number" };

	return {};
}

export default formatTokens;
