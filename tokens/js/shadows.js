// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

const umbra = "calc(var(--shadow-strength) + 18%)";
const penumbra = "calc(var(--shadow-strength) + 12%)";
const ambient = "calc(var(--shadow-strength) + 10%)";
const shadowInset = "calc(var(--shadow-strength) + $9%)";

const shadows = {
	"shadow-color": "0 0% 50%",
	"shadow-strength": "1%",
	shadow: {
		1: [
			`0 2px 1px -1px hsl(var(--shadow-color) / ${umbra})`,
			`0 1px 1px hsl(var(--shadow-color) / ${penumbra})`,
			`0 1px 3px hsl(var(--shadow-color) / ${ambient})`,
		],
		2: [
			`0 3px 1px -2px hsl(var(--shadow-color) / ${umbra})`,
			`0 2px 2px hsl(var(--shadow-color) / ${penumbra})`,
			`0 1px 5px hsl(var(--shadow-color) / ${ambient})`,
		],
		3: [
			`0 2px 4px -1px hsl(var(--shadow-color) / ${umbra})`,
			`0 4px 5px hsl(var(--shadow-color) / ${penumbra})`,
			`0 1px 10px hsl(var(--shadow-color) / ${ambient})`,
		],
		4: [
			`0 3px 5px -1px hsl(var(--shadow-color) / ${umbra})`,
			`0 6px 10px hsl(var(--shadow-color) / ${penumbra})`,
			`0 1px 18px hsl(var(--shadow-color) / ${ambient})`,
		],
		5: [
			`0 5px 5px -3px hsl(var(--shadow-color) / ${umbra})`,
			`0 8px 10px 1px hsl(var(--shadow-color) / ${penumbra})`,
			`0 3px 14px 2px hsl(var(--shadow-color) / ${ambient})`,
		],
		6: [
			`0 7px 8px -4px hsl(var(--shadow-color) / ${umbra})`,
			`0 12px 17px 2px hsl(var(--shadow-color) / ${penumbra})`,
			`0 5px 22px 4px hsl(var(--shadow-color) / ${ambient})`,
		],
	},
	insetShadow: {
		1: `inset 0 0 0 1px hsl(var(--shadow-color) / ${shadowInset})`,
		2: `inset 0 1px 2px 0 hsl(var(--shadow-color) / ${shadowInset})`,
		3: `inset 0 1px 4px 0 hsl(var(--shadow-color) / ${shadowInset})`,
		4: `inset 0 2px 8px 0 hsl(var(--shadow-color) / ${shadowInset})`,
		5: `inset 0 2px 14px 0 hsl(var(--shadow-color) / ${shadowInset})`,
	},
};

const darkModeShadows = {
	"shadow-color-@media:dark": "220 40% 2%",
	"shadow-strength-@media:dark": "25%",
};

export { shadows, darkModeShadows };
export default shadows;
