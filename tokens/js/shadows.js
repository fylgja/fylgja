// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

const umbra = "calc(var(--shadow-strength, 1%) + 18%)";
const penumbra = "calc(var(--shadow-strength, 1%) + 12%)";
const ambient = "calc(var(--shadow-strength, 1%) + 10%)";
const insetStrength = "calc(var(--shadow-strength, 1%) + 9%)";

const shadows = {
	shadow: {
		1: [
			`0 2px 1px -1px color-mix(in srgb, var(--shadow-color, gray) ${umbra}, transparent)`,
			`0 1px 1px color-mix(in srgb, var(--shadow-color, gray) ${penumbra}, transparent)`,
			`0 1px 3px color-mix(in srgb, var(--shadow-color, gray) ${ambient}, transparent)`,
		],
		2: [
			`0 3px 1px -2px color-mix(in srgb, var(--shadow-color, gray) ${umbra}, transparent)`,
			`0 2px 2px color-mix(in srgb, var(--shadow-color, gray) ${penumbra}, transparent)`,
			`0 1px 5px color-mix(in srgb, var(--shadow-color, gray) ${ambient}, transparent)`,
		],
		3: [
			`0 2px 4px -1px color-mix(in srgb, var(--shadow-color, gray) ${umbra}, transparent)`,
			`0 4px 5px color-mix(in srgb, var(--shadow-color, gray) ${penumbra}, transparent)`,
			`0 1px 10px color-mix(in srgb, var(--shadow-color, gray) ${ambient}, transparent)`,
		],
		4: [
			`0 3px 5px -1px color-mix(in srgb, var(--shadow-color, gray) ${umbra}, transparent)`,
			`0 6px 10px color-mix(in srgb, var(--shadow-color, gray) ${penumbra}, transparent)`,
			`0 1px 18px color-mix(in srgb, var(--shadow-color, gray) ${ambient}, transparent)`,
		],
		5: [
			`0 5px 5px -3px color-mix(in srgb, var(--shadow-color, gray) ${umbra}, transparent)`,
			`0 8px 10px 1px color-mix(in srgb, var(--shadow-color, gray) ${penumbra}, transparent)`,
			`0 3px 14px 2px color-mix(in srgb, var(--shadow-color, gray) ${ambient}, transparent)`,
		],
		6: [
			`0 7px 8px -4px color-mix(in srgb, var(--shadow-color, gray) ${umbra}, transparent)`,
			`0 12px 17px 2px color-mix(in srgb, var(--shadow-color, gray) ${penumbra}, transparent)`,
			`0 5px 22px 4px color-mix(in srgb, var(--shadow-color, gray) ${ambient}, transparent)`,
		],
	},
	insetShadow: {
		1: `inset 0 0 0 1px color-mix(in srgb, var(--shadow-color, gray) ${insetStrength}, transparent)`,
		2: `inset 0 1px 2px 0 color-mix(in srgb, var(--shadow-color, gray) ${insetStrength}, transparent)`,
		3: `inset 0 1px 4px 0 color-mix(in srgb, var(--shadow-color, gray) ${insetStrength}, transparent)`,
		4: `inset 0 2px 8px 0 color-mix(in srgb, var(--shadow-color, gray) ${insetStrength}, transparent)`,
		5: `inset 0 2px 14px 0 color-mix(in srgb, var(--shadow-color, gray) ${insetStrength}, transparent)`,
	},
};

const darkModeShadows = {
	"shadow-color-@media:dark": "hsl(220 40% 2%)",
	"shadow-strength-@media:dark": "25%",
};

export { shadows, darkModeShadows };
export default shadows;
