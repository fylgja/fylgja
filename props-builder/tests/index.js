import { propsBuilder } from "../index.js";

const shadowUmbra =
	"hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%))";
const shadowPenumbra =
	"hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%))";
const shadowAmbient =
	"hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))";

const red = {
	0: "#fff5f5",
	1: "#ffe3e3",
	2: "#ffc9c9",
	3: "#ffa8a8",
	4: "#ff8787",
	5: "#ff6b6b",
	6: "#fa5252",
	7: "#f03e3e",
	8: "#e03131",
	9: "#c92a2a",
};
const green = "#0f0";
const blue = "#00f";

const propsKeys = {
	"spin-@": "@keyframes spin { to { rotate: 360deg }}",
	animateSpin: "spin 1s linear infinite",
};

const props = {
	"layer-1": 1,
	"size-2": "0.5em",
	"size-4": "4em",
	color: {
		red,
		green,
		blue,
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

// File types for just props
propsBuilder(props, "tests/_fylgja.json");
propsBuilder(props, "tests/_fylgja.tokens.json");
propsBuilder(props, "tests/_fylgja.figma-tokens.json");
propsBuilder(props, "tests/_fylgja.figma-tokens.sync.json");
propsBuilder(props, "tests/_fylgja.style-dictionary-tokens.json");
propsBuilder(props, "tests/_tokens.scss");
propsBuilder(props, "tests/_tokens.css");
propsBuilder(props, "tests/_jit-tokens.js", { parseAs: "css-jit" });

// With custom selector
propsBuilder(props, "tests/_tokens-selector.css", {
	selector: ".fylgja-test-zone",
});

// Only render keyframes
propsBuilder(propsKeys, "tests/_tokens-key.css");
propsBuilder(propsKeys, "tests/_tokens-key.scss");
propsBuilder(propsKeys, "tests/_tokens-key.json");
