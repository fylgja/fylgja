// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

function formatTokens(key, colorKeys = []) {
	if (!key) return;

	if (key.includes("size")) return { $type: "dimension" };

	if (key.includes("ease")) return { $type: "cubic-bezier" };

	if (colorKeys.some((color) => key.includes(color)))
		return { $type: "color" };

	return {};
}

export default formatTokens;
