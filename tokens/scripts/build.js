// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { propsBuilder } from "../../props-builder/index.js";

import aspectRatios from "../js/aspect-ratios.js";
import borderRadius from "../js/border-radius.js";
import borderSizes from "../js/border-sizes.js";
import { colors, hues, staticColors } from "../js/colors.js";
import easing from "../js/easing.js";
import fonts from "../js/fonts.js";
import mq from "../js/mq.js";
import { shadows, darkModeShadows } from "../js/shadows.js";
import sizes from "../js/sizes.js";
import zLayer from "../js/z-layer.js";

Object.entries({
	"aspect-ratios": aspectRatios,
	"z-layer": zLayer,
	"border-radius": borderRadius,
	"border-sizes": borderSizes,
	hues,
	easing,
	fonts,
	sizes,
}).forEach(([tokenName, tokens]) => {
	propsBuilder(tokens, `css/${tokenName}.css`);
	propsBuilder(tokens, `scss/${tokenName}.scss`);
	propsBuilder(tokens, `css/${tokenName}.host.css`, { selector: ":host" });
});

Object.entries({ shadows, colors }).forEach(([tokenName, tokens]) => {
	propsBuilder(tokens, `css/${tokenName}.css`, { selector: "*" });
});

propsBuilder(darkModeShadows, "css/shadows.dark.css");

// Additional SCSS builds
propsBuilder(shadows, "scss/shadows.scss");
propsBuilder(colors, "scss/colors.scss");
propsBuilder(staticColors, "scss/colors.static.scss");
propsBuilder(mq, "scss/mq.scss");

// Full Bundles
// All props, except mq's
const props = {
	...aspectRatios,
	...borderRadius,
	...borderSizes,
	...colors,
	...hues,
	...easing,
	...fonts,
	...shadows,
	...sizes,
	...zLayer,
};

["js", "cjs"].forEach((ext) => {
	propsBuilder({ ...props, ...darkModeShadows }, `index.${ext}`);
});

propsBuilder({ ...props, ...darkModeShadows }, "css/index.css");

// Support for jit-props, e.g. the open-props syntax
propsBuilder(props, "jit-props.js", { parseAs: "css-jit" });
propsBuilder(props, "jit-props.cjs", { parseAs: "css-jit" });

// Design Tokens
propsBuilder(props, "json/tokens.json"); // For e.g. Sketch or Style Dictionary
propsBuilder(props, "json/figma-tokens.json");
propsBuilder({ fylgja: props }, "json/figma-tokens.sync.json");
propsBuilder(props, "json/style-dictionary-tokens.json");
