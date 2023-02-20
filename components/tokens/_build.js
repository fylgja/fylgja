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

import { buildJsFile, renameKeys, twColorKeysMap } from "./src/helper.js";

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

// Tailwind specific tokens,
// for easily replacing the Tailwind tokens with Fylgja tokens
const tailwindProps = {
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
        fluid: {
            sm: props.radius.fluid[1],
            DEFAULT: props.radius.fluid[2],
            md: props.radius.fluid[3],
            lg: props.radius.fluid[4],
            xl: props.radius.fluid[5],
            "2xl": props.radius.fluid[6],
        },
        blob: props.radius.blob,
        conditional: {
            sm: props.radius.conditional[1],
            DEFAULT: props.radius.conditional[2],
            md: props.radius.conditional[3],
            lg: props.radius.conditional[4],
            xl: props.radius.conditional[5],
            "2xl": props.radius.conditional[6],
        },
    },
    boxShadow: { ...props.shadow, inset: { ...props.insetShadow } },
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
    spacing: { ...sizes },
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
        fluid: {
            sm: [props.fontSize.fluid[1], props.lineHeight[2]],
            base: [props.fontSize.fluid[2], props.lineHeight[2]],
            md: [props.fontSize.fluid[3], props.lineHeight[2]],
            lg: [props.fontSize.fluid[4], props.lineHeight[2]],
            xl: [props.fontSize.fluid[5], props.lineHeight[2]],
        },
    },
    lineHeight: {
        none: props.lineHeight[1],
        tight: props.lineHeight[2],
        snug: props.lineHeight[3],
        normal: props.lineHeight[4],
        relaxed: props.lineHeight[5],
    },
    transitionTimingFunction: { ...easing },
    zIndex: props.layer,
};
delete tailwindProps.aspectRatio.box; // we only need square

buildJsFile("tailwind-props.js", tailwindProps);
buildJsFile("tailwind-props.cjs", tailwindProps);
