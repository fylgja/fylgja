// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

const shadows = {
	"shadow-color": {
		DEFAULT: "hsl(0 0 0 / 10%)",
		"-@": '@property --shadow-color { syntax: "<color>"; inherits: true; initial-value: hsl(0 0 0 / 10%); }',
	},
	shadow: {
		1: "0 2px 1px -1px var(--shadow-color), 0 1px 1px var(--shadow-color), 0 1px 3px var(--shadow-color)",
		2: "0 3px 3px -2px var(--shadow-color), 0 3px 4px var(--shadow-color), 0 1px 8px var(--shadow-color)",
		3: "0 3px 5px -1px var(--shadow-color), 0 6px 10px var(--shadow-color), 0 1px 18px var(--shadow-color)",
		4: "0 5px 5px -3px var(--shadow-color), 0 8px 10px 1px var(--shadow-color), 0 3px 14px 2px var(--shadow-color)",
		5: "0 7px 8px -4px var(--shadow-color), 0 12px 17px 2px var(--shadow-color), 0 5px 22px 4px var(--shadow-color)",
		6: "0 8px 10px -5px var(--shadow-color), 0 16px 24px 2px var(--shadow-color), 0 6px 30px 5px var(--shadow-color)",
	},
};

const darkModeShadows = {
	"shadow-color-@media:dark": "hsl(220 40% 2% / 25%)",
};

export { shadows as default, shadows, darkModeShadows };
