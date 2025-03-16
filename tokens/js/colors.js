// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

function replaceChromaHue(colors, hue) {
	return Object.fromEntries(
		Object.entries(colors).map(([key, value]) => {
			value = value.toString();
			value = value.replace(/calc\(([^*]+)\s\*\svar\(.*?\)\)/, "$1");
			value = value.replace("var(--hue, 0)", hue);
			return [key, value];
		}),
	);
}

const colors = {
	color: {
		0: "oklch(99% calc(.03 * var(--chroma, 1)) var(--hue, 0))",
		1: "oklch(95% calc(.06 * var(--chroma, 1)) var(--hue, 0))",
		2: "oklch(90% calc(.12 * var(--chroma, 1)) var(--hue, 0))",
		3: "oklch(88% calc(.14 * var(--chroma, 1)) var(--hue, 0))",
		4: "oklch(82% calc(.16 * var(--chroma, 1)) var(--hue, 0))",
		5: "oklch(78% calc(.17 * var(--chroma, 1)) var(--hue, 0))",
		6: "oklch(68% calc(.19 * var(--chroma, 1)) var(--hue, 0))",
		7: "oklch(58% calc(.21 * var(--chroma, 1)) var(--hue, 0))",
		8: "oklch(52% calc(.20 * var(--chroma, 1)) var(--hue, 0))",
		9: "oklch(44% calc(.18 * var(--chroma, 1)) var(--hue, 0))",
		10: "oklch(35% calc(.15 * var(--chroma, 1)) var(--hue, 0))",
		11: "oklch(28% calc(.12 * var(--chroma, 1)) var(--hue, 0))",
		12: "oklch(20% calc(.10 * var(--chroma, 1)) var(--hue, 0))",
		13: "oklch(15% calc(.07 * var(--chroma, 1)) var(--hue, 0))",
		14: "oklch(11% calc(.05 * var(--chroma, 1)) var(--hue, 0))",
	},
};

const hues = {
	hue: {
		pink: 350,
		purple: 330,
		violet: 310,
		indigo: 290,
		blue: 260,
		cyan: 220,
		teal: 170,
		green: 140,
		lime: 125,
		yellow: 96,
		orange: 70,
		red: 25,
	},
};

const staticColors = {
	pink: replaceChromaHue(colors.color, hues.hue.pink),
	purple: replaceChromaHue(colors.color, hues.hue.purple),
	violet: replaceChromaHue(colors.color, hues.hue.violet),
	indigo: replaceChromaHue(colors.color, hues.hue.indigo),
	blue: replaceChromaHue(colors.color, hues.hue.blue),
	cyan: replaceChromaHue(colors.color, hues.hue.cyan),
	teal: replaceChromaHue(colors.color, hues.hue.teal),
	green: replaceChromaHue(colors.color, hues.hue.green),
	lime: replaceChromaHue(colors.color, hues.hue.lime),
	yellow: replaceChromaHue(colors.color, hues.hue.yellow),
	orange: replaceChromaHue(colors.color, hues.hue.orange),
	red: replaceChromaHue(colors.color, hues.hue.red),
};

export { colors as default, colors, hues, staticColors };
