// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

const shadows = {
	"shadow-color": {
		umbra: "color-mix(in srgb, var(--shadow-color, gray) calc(var(--shadow-strength, 1%) + 20%), #0000)",
		penumbra:
			"color-mix(in srgb, var(--shadow-color, gray) calc(var(--shadow-strength, 1%) + 14%), #0000)",
		ambient:
			"color-mix(in srgb, var(--shadow-color, gray) calc(var(--shadow-strength, 1%) + 12%), #0000)",
	},
	shadow: {
		1: [
			"0 2px 1px -1px var(--shadow-color-umbra)",
			"0 1px 1px var(--shadow-color-penumbra)",
			"0 1px 3px var(--shadow-color-ambient)",
		],
		2: [
			"0 3px 3px -2px var(--shadow-color-umbra)",
			"0 3px 4px var(--shadow-color-penumbra)",
			"0 1px 8px var(--shadow-color-ambient)",
		],
		3: [
			"0 3px 5px -1px var(--shadow-color-umbra)",
			"0 6px 10px var(--shadow-color-penumbra)",
			"0 1px 18px var(--shadow-color-ambient)",
		],
		4: [
			"0 5px 5px -3px var(--shadow-color-umbra)",
			"0 8px 10px 1px var(--shadow-color-penumbra)",
			"0 3px 14px 2px var(--shadow-color-ambient)",
		],
		5: [
			"0 7px 8px -4px var(--shadow-color-umbra)",
			"0 12px 17px 2px var(--shadow-color-penumbra)",
			"0 5px 22px 4px var(--shadow-color-ambient)",
		],
		6: [
			"0 8px 10px -5px var(--shadow-color-umbra)",
			"0 16px 24px 2px var(--shadow-color-penumbra)",
			"0 6px 30px 5px var(--shadow-color-ambient)",
		],
	},
};

const darkModeShadows = {
	"shadow-color-@media:dark": "hsl(220 40% 2%)",
	"shadow-strength-@media:dark": "25%",
};

export { shadows as default, shadows, darkModeShadows };
