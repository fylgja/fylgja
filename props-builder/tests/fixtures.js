// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { readFile } from "fs/promises";

// Used by both the manual playground script (index.js) and the automated
// regression suite (props-builder.test.js), so they stay in sync.

export const designTokens = JSON.parse(
	await readFile(new URL("./test.tokens.json", import.meta.url)),
);
// Or `import designTokens from './test.tokens.json' with { type: 'json' };` in Node 22+

export const stitchMarkdown = await readFile(
	new URL("./test.stitch.md", import.meta.url),
	"utf8",
);

export const shadowUmbra =
	"hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%))";
export const shadowPenumbra =
	"hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%))";
export const shadowAmbient =
	"hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))";

export const red = {
	0: "#fff5f5",
	1: "#ffe3e3",
	2: "#ffc9c9",
	3: "#ffa8a8",
	4: "#ff8787",
	5: "#ff6b6b",
	6: "#fa5252",
	7: "#f03e3e",
	8: "#e03131",
	9: "#f00",
};
export const green = "#0f0";
export const blue = "#00f";

export const propsKeys = {
	"spin-@": "@keyframes spin { to { rotate: 360deg }}",
	animateSpin: "spin 1s linear infinite",
	"rotate-@": "@keyframes rotate { to { rotate: 360deg }}",
	animateRotate: "rotate 1s linear infinite",
};

export const props = {
	"layer-1": 1,
	"size-2": "0.5em",
	"size-4": "4em",
	color: {
		red,
		green,
		blue,
	},
	border: {
		"size-2": "0.5em",
		"size-4": "4em",
	},
	shadow: {
		color: "gray",
		weight: "1%",
		1: [
			`0 2px 1px -1px ${shadowUmbra}`,
			`0 1px 1px ${shadowPenumbra}`,
			`0 1px 3px ${shadowAmbient}`,
		],
	},
	"shadow-@media:dark": {
		color: "hsl(220 40% 2%)",
		weight: "25%",
	},
	...propsKeys,
};
