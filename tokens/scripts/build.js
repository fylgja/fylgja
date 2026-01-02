// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { propsBuilder } from "../../props-builder/index.js";

import aspectRatios from "../js/aspect-ratio.js";
import borders from "../js/borders.js";
import { colors, hues, staticColors, shadeColors } from "../js/colors.js";
import { easing, easingNamed } from "../js/easing.js";
import fonts from "../js/fonts.js";
import { mq, breakpoints } from "../js/mq.js";
import { shadows, darkModeShadows } from "../js/shadows.js";
import sizes from "../js/sizes.js";
import zLayer from "../js/z-layer.js";

Object.entries({
	"aspect-ratio": aspectRatios,
	"z-layer": zLayer,
	borders,
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
propsBuilder(mq, "css/mq.css");

// Additional SCSS builds
propsBuilder(shadows, "scss/shadows.scss");
propsBuilder(colors, "scss/colors.scss");
propsBuilder(staticColors, "scss/colors.static.scss");
propsBuilder(mq, "scss/mq.scss");

// Full Bundles
// All props, except mq's
const props = {
	...aspectRatios,
	...borders,
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

// Support for Tailwind v4 Syntax
const twProps = {
	aspect: { ...aspectRatios.ratio },
	color: shadeColors,
	ease: {
		...easingNamed.ease,
		in: { ...easingNamed.easeIn },
		out: { ...easingNamed.easeOut },
		inOut: { ...easingNamed.easeInOut },
		elasticIn: { ...easingNamed.easeElasticIn },
		elasticOut: { ...easingNamed.easeElasticOut },
		elasticInOut: { ...easingNamed.easeElasticInOut },
	},
	shadow: {
		xs: shadows.shadow[1].replaceAll("var(--shadow-color)", "#0001"),
		sm: shadows.shadow[2].replaceAll("var(--shadow-color)", "#0001"),
		md: shadows.shadow[3].replaceAll("var(--shadow-color)", "#0001"),
		lg: shadows.shadow[4].replaceAll("var(--shadow-color)", "#0001"),
		xl: shadows.shadow[5].replaceAll("var(--shadow-color)", "#0001"),
		"2xl": shadows.shadow[6].replaceAll("var(--shadow-color)", "#0001"),
	},
	spacing: {
		content: sizes["size-content"],
		heading: sizes["size-heading"],
	},
	breakpoint: breakpoints,
};

propsBuilder(twProps, "tailwind/index.css", { selector: "@theme" });
Object.entries(twProps).forEach(([tokenName, tokens]) => {
	let twFileName = tokenName;

	if (tokenName === "aspect") {
		twFileName = `aspect-ratio`;
	}

	if (["breakpoint", "color", "shadow"].includes(tokenName)) {
		twFileName = `${tokenName}s`;
	}

	propsBuilder({ [tokenName]: tokens }, `tailwind/${twFileName}.css`, {
		selector: "@theme",
	});
});

// Design Tokens
const tokens = {
	...aspectRatios,
	...borders,
	...staticColors,
	...easing,
	...fonts,
	...shadows,
	...sizes,
	...zLayer,
};

propsBuilder(tokens, "tokens/tokens.json");
propsBuilder(tokens, "tokens/fylgja.tokens.json");

propsBuilder(tokens, "tokens/figma-tokens.json");
propsBuilder(tokens, "tokens/figma-tokens.sync.json", { wrapper: "fylgja" });

/**
 * @deprecated
 *
 * style-dictionary-tokens can now be used by using the normal design tokens syntax
 */
propsBuilder(tokens, "tokens/style-dictionary-tokens.json");
