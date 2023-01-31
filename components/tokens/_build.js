// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import fs from "fs";
import { propsBuilder } from "@fylgja/props-builder";

import colors from "@fylgja/colors";
import easing from "@fylgja/easing";
import mq from "@fylgja/mq";
import ratio from "@fylgja/aspect-ratio";
import { staticShadows as shadow } from "@fylgja/shadow";
import sizes from "@fylgja/sizes";
import zLayer from "@fylgja/z-layer";

const props = {
    ...colors,
    ...easing,
    ...ratio,
    ...shadow,
    ...sizes,
    ...zLayer,
};

// Base full props
propsBuilder({ props, filename: "props.js", varPrefix: "" });
propsBuilder({ props, filename: "props.cjs", varPrefix: "" });

// Support for jit-props, e.g. the open-props syntax
propsBuilder({ props, filename: "jit-props.js" });
propsBuilder({ props, filename: "jit-props.cjs" });

// Default design tokens e.g. Sketch
propsBuilder({ props, filename: "design-tokens.json" });

// Figma specific design tokens
propsBuilder({ props, filename: "figma-tokens.json" });
propsBuilder({
    props,
    filename: "figma-tokens.sync.json",
    wrapperName: "fylgja",
});

// Tailwind specific tokens for easily replacing the Tailwind tokens with Fylgja
const renameKeys = (keysMap, obj) =>
    Object.keys(obj).reduce(
        (acc, key) => ({
            ...acc,
            ...{ [keysMap[key] || key]: obj[key] },
        }),
        {}
    );

const newColorKeys = {
    0: 50,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
    7: 700,
    8: 800,
    9: 900,
};

const twColors = {
    gray: renameKeys(newColorKeys, colors.gray),
    blueGray: renameKeys(newColorKeys, colors.blueGray),
    red: renameKeys(newColorKeys, colors.red),
    pink: renameKeys(newColorKeys, colors.pink),
    purple: renameKeys(newColorKeys, colors.purple),
    violet: renameKeys(newColorKeys, colors.violet),
    indigo: renameKeys(newColorKeys, colors.indigo),
    blue: renameKeys(newColorKeys, colors.blue),
    cyan: renameKeys(newColorKeys, colors.cyan),
    teal: renameKeys(newColorKeys, colors.teal),
    green: renameKeys(newColorKeys, colors.green),
    lime: renameKeys(newColorKeys, colors.lime),
    yellow: renameKeys(newColorKeys, colors.yellow),
    orange: renameKeys(newColorKeys, colors.orange),
};

const tailwindProps = {
    aspectRatio: {
        auto: "auto",
        square: props.ratio.box,
        video: props.ratio.widescreen,
        ...props.ratio,
    },
    boxShadow: { ...props.shadow, inset: { ...props.insetShadow } },
    colors: twColors,
    screens: mq,
    spacing: { ...sizes },
    transitionTimingFunction: { ...easing },
    zIndex: props.layer,
};
delete tailwindProps.aspectRatio.box;

// Support for the props in the Tailwind-config
fs.createWriteStream("tailwind-props.js").write(
    "export default " + JSON.stringify(tailwindProps, null, 2) + "\n"
);
fs.createWriteStream("tailwind-props.cjs").write(
    "module.exports = " + JSON.stringify(tailwindProps, null, 2) + "\n"
);
