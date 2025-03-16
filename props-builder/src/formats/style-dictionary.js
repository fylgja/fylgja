// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

function formatStyleDictionary(key, colorKeys = []) {
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

	return { type: "other" };
}

export default formatStyleDictionary;
