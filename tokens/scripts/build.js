// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { propsBuilder } from "@fylgja/props-builder";
import aspectRatio from "../js/aspect-ratio.js";
import borders from "../js/borders.js";
// import colors from "../src/colors/borders.js";
const colors = {};
import easing from "../js/easing.js";
import fonts from "../js/fonts.js";
import gradients from "../js/colors/gradients.js";
import { shadows, darkModeShadows } from "../js/shadows.js";
import sizes from "../js/sizes.js";
import transforms from "../js/transforms.js";
import transitions from "../js/transitions.js";
import zLayer from "../js/z-layer.js";

// All props, except extra's and mq's
const props = {
	...aspectRatio,
	...borders,
	...colors,
	...easing,
	...fonts,
	...sizes,
	...zLayer,
	...shadows,
};

const buildMap = {
	"aspect-ratio": aspectRatio,
	"z-layer": zLayer,
	borders,
	colors,
	easing,
	fonts,
	gradients,
	sizes,
	transforms,
	transitions,
	shadows,
};

Object.entries(buildMap).forEach(([tokenName, tokens]) => {
	propsBuilder({ props: tokens, filename: `css/${tokenName}.css` });
	propsBuilder({ props: tokens, filename: `scss/${tokenName}.scss` });
	propsBuilder({
		props: tokens,
		filename: `css/${tokenName}.host.css`,
		selector: ":host",
	});
});

// Extras
propsBuilder({
	props: darkModeShadows,
	filename: "css/darkmode/shadows.css",
	selector: "*",
});

propsBuilder({
	props: { ...props, ...darkModeShadows },
	filename: "index.js",
	varPrefix: "",
});
propsBuilder({
	props: { ...props, ...darkModeShadows },
	filename: "index.cjs",
	varPrefix: "",
});

// Support for jit-props, e.g. the open-props syntax
propsBuilder({ props, filename: "jit-props.js" });
propsBuilder({ props, filename: "jit-props.cjs" });

// Design Tokens
propsBuilder({ props, filename: "json/tokens.json" }); // For e.g. Sketch or Style Dictionary
propsBuilder({ props, filename: "json/figma-tokens.json" });
propsBuilder({
	props,
	filename: "json/figma-tokens.sync.json",
	wrapperName: "fylgja",
});
