// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { propsBuilder } from "@fylgja/props-builder";
import colors from "@fylgja/colors";
import easing from "@fylgja/easing";
import mq from "@fylgja/mq";
import ratio from "@fylgja/aspect-ratio";
import { staticShadows as shadow } from "@fylgja/shadow";
import sizes from "@fylgja/sizes";
import zLayer from "@fylgja/z-layer";

import { buildJsFile, renameKeys, twColorKeysMap } from "./src/helper.js";

const wrapperName = "fylgja";
const propsBundle = {
    ...easing,
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
    transitionTimingFunction: { ...easing },
    zIndex: props.layer,
};
delete tailwindProps.aspectRatio.box; // we only need square

buildJsFile("tailwind-props.js", tailwindProps);
buildJsFile("tailwind-props.cjs", tailwindProps);
