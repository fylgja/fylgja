// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

const shadows = {
	shadow: {
		strength: "1%",
		color: {
			DEFAULT: "gray",
			umbra: "color-mix(in srgb, var(--shadow-color) calc(var(--shadow-strength) + 18%), transparent)",
			penumbra:
				"color-mix(in srgb, var(--shadow-color) calc(var(--shadow-strength) + 12%), transparent)",
			ambient:
				"color-mix(in srgb, var(--shadow-color) calc(var(--shadow-strength) + 10%), transparent)",
		},
		1: [
			"0 2px 1px -1px var(--shadow-color-umbra)",
			"0 1px 1px var(--shadow-color-penumbra)",
			"0 1px 3px var(--shadow-color-ambient)",
		],
		2: [
			"0 3px 1px -2px var(--shadow-color-umbra)",
			"0 2px 2px var(--shadow-color-penumbra)",
			"0 1px 5px var(--shadow-color-ambient)",
		],
		3: [
			"0 2px 4px -1px var(--shadow-color-umbra)",
			"0 4px 5px var(--shadow-color-penumbra)",
			"0 1px 10px var(--shadow-color-ambient)",
		],
		4: [
			"0 3px 5px -1px var(--shadow-color-umbra)",
			"0 6px 10px var(--shadow-color-penumbra)",
			"0 1px 18px var(--shadow-color-ambient)",
		],
		5: [
			"0 5px 5px -3px var(--shadow-color-umbra)",
			"0 8px 10px 1px var(--shadow-color-penumbra)",
			"0 3px 14px 2px var(--shadow-color-ambient)",
		],
		6: [
			"0 7px 8px -4px var(--shadow-color-umbra)",
			"0 12px 17px 2px var(--shadow-color-penumbra)",
			"0 5px 22px 4px var(--shadow-color-ambient)",
		],
	},
};

const darkModeShadows = {
	"shadow-color-@media:dark": "hsl(220 40% 2%)",
	"shadow-strength-@media:dark": "25%",
};

export { shadows as default, shadows, darkModeShadows };
