// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { propsBuilder } from "@fylgja/props-builder";
import colors from "@fylgja/colors";
import borders from "@fylgja/borders";
import easing from "@fylgja/easing";
import fonts from "@fylgja/fonts";
import mq from "@fylgja/mq";
import ratio from "@fylgja/aspect-ratio";
import { staticShadows as shadow } from "@fylgja/shadow";
import sizes from "@fylgja/sizes";
import zLayer from "@fylgja/z-layer";

import {
    buildJsFile,
    renameKeys,
    twColorKeysMap,
    flattenObj,
    kebabCase,
} from "./src/helper.js";

const wrapperName = "fylgja";
const propsBundle = {
    ...borders,
    ...easing,
    ...fonts,
    ...ratio,
    ...shadow,
    ...sizes,
    ...zLayer,
};
const allProps = { ...propsBundle, colors, mq };
const props = { ...propsBundle, ...colors };

// All props
buildJsFile("index.js", allProps);
buildJsFile("index.cjs", allProps);

// Support for jit-props, e.g. the open-props syntax
propsBuilder({ props, filename: "jit-props.js" });
propsBuilder({ props, filename: "jit-props.cjs" });

// Default design tokens e.g. Sketch
propsBuilder({ props, filename: "tokens.json" });

// Figma specific design tokens
propsBuilder({ props, filename: "figma-tokens.json" });
propsBuilder({ props, filename: "figma-tokens.sync.json", wrapperName });

// CSS Utillty specific tokens,
// for easily replacing the Tailwind/UnoCSS tokens with Fylgja tokens
// This version is made with TailwindCSS in mind, so is easy to replace all config options with Fylgja Tokens
// TODO: split Tailwind logic, to be used in the preset instead
const flatEasing = flattenObj(easing, { formating: kebabCase });
const utilityProps = {
    screens: {
        xs: mq.xs,
        sm: mq.sm,
        md: mq.md,
        lg: mq.lg,
        xl: mq.xl,
        "2xl": mq.xxl,
        touch: { raw: mq.touch },
        stylus: { raw: mq.stylus },
        pointer: { raw: mq.pointer },
        mouse: { raw: mq.mouse },
    },
    aspectRatio: {
        auto: "auto",
        square: props.ratio.box,
        video: props.ratio.widescreen,
        ...props.ratio,
    },
    borderWidth: {
        0: "0",
        DEFAULT: "1px",
        2: props.border.size[1],
        4: props.border.size[2],
        6: props.border.size[3],
        8: props.border.size[4],
        10: props.border.size[5],
        12: props.border.size[6],
    },
    borderRadius: {
        none: 0,
        sm: props.radius[1],
        DEFAULT: props.radius[2],
        md: props.radius[3],
        lg: props.radius[4],
        xl: props.radius[5],
        "2xl": props.radius[6],
        full: props.radius.full,
        "fluid-sm": props.radius.fluid[1],
        fluid: props.radius.fluid[2],
        "fluid-md": props.radius.fluid[3],
        "fluid-lg": props.radius.fluid[4],
        "fluid-xl": props.radius.fluid[5],
        "fluid-2xl": props.radius.fluid[6],
        "blob-1": props.radius.blob[1],
        "blob-2": props.radius.blob[2],
        "blob-3": props.radius.blob[3],
        "blob-4": props.radius.blob[4],
        "blob-5": props.radius.blob[5],
        "conditional-sm": props.radius.conditional[1],
        conditional: props.radius.conditional[2],
        "conditional-md": props.radius.conditional[3],
        "conditional-lg": props.radius.conditional[4],
        "conditional-xl": props.radius.conditional[5],
        "conditional-2xl": props.radius.conditional[6],
    },
    boxShadow: {
        none: "0",
        sm: props.shadow[1],
        DEFAULT: props.shadow[2],
        md: props.shadow[3],
        lg: props.shadow[4],
        xl: props.shadow[5],
        "2xl": props.shadow[6],
        inset: props.insetShadow[0],
        "inset-1": props.insetShadow[1],
        "inset-2": props.insetShadow[2],
        "inset-3": props.insetShadow[3],
        "inset-4": props.insetShadow[4],
    },
    colors: {
        gray: renameKeys(twColorKeysMap, colors.gray),
        slate: renameKeys(twColorKeysMap, colors.blueGray),
        red: renameKeys(twColorKeysMap, colors.red),
        pink: renameKeys(twColorKeysMap, colors.pink),
        purple: renameKeys(twColorKeysMap, colors.purple),
        violet: renameKeys(twColorKeysMap, colors.violet),
        indigo: renameKeys(twColorKeysMap, colors.indigo),
        blue: renameKeys(twColorKeysMap, colors.blue),
        cyan: renameKeys(twColorKeysMap, colors.cyan),
        teal: renameKeys(twColorKeysMap, colors.teal),
        green: renameKeys(twColorKeysMap, colors.green),
        lime: renameKeys(twColorKeysMap, colors.lime),
        yellow: renameKeys(twColorKeysMap, colors.yellow),
        orange: renameKeys(twColorKeysMap, colors.orange),
    },
    spacing: {
        ...sizes.size,
        "prose-xs": sizes.sizeContent[1],
        "prose-sm": sizes.sizeContent[2],
        prose: sizes.sizeContent[3],
        "heading-xs": sizes.sizeHeading[1],
        "heading-sm": sizes.sizeHeading[2],
        heading: sizes.sizeHeading[3],
    },
    fontSize: {
        sm: [props.fontSize[1], props.lineHeight[2]],
        base: [props.fontSize[2], props.lineHeight[2]],
        md: [props.fontSize[3], props.lineHeight[2]],
        lg: [props.fontSize[4], props.lineHeight[2]],
        xl: [props.fontSize[5], props.lineHeight[2]],
        "2xl": [props.fontSize[6], props.lineHeight[1]],
        "3xl": [props.fontSize[7], props.lineHeight[1]],
        "4xl": [props.fontSize[8], props.lineHeight[1]],
        "5xl": [props.fontSize[9], props.lineHeight[1]],
        "fluid-sm": [props.fontSize.fluid[1], props.lineHeight[2]],
        "fluid-base": [props.fontSize.fluid[2], props.lineHeight[2]],
        "fluid-md": [props.fontSize.fluid[3], props.lineHeight[2]],
        "fluid-lg": [props.fontSize.fluid[4], props.lineHeight[2]],
        "fluid-xl": [props.fontSize.fluid[5], props.lineHeight[2]],
    },
    lineHeight: {
        none: props.lineHeight[1],
        tight: props.lineHeight[2],
        snug: props.lineHeight[3],
        normal: props.lineHeight[4],
        relaxed: props.lineHeight[5],
    },
    transitionTimingFunction: {
        "ease-linear": "linear",
        "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        ...flatEasing,
    },
    zIndex: {
        0: 0,
        10: props.layer[1],
        20: props.layer[2],
        30: props.layer[3],
        40: props.layer[4],
        50: props.layer[5],
    },
};
delete utilityProps.aspectRatio.box; // we only need square

buildJsFile("utility-props.js", utilityProps);
buildJsFile("utility-props.cjs", utilityProps);
