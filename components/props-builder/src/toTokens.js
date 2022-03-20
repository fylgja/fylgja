const defaultColorKeys = [
    "gray",
    "red",
    "pink",
    "grape",
    "violet",
    "indigo",
    "blue",
    "cyan",
    "teal",
    "green",
    "lime",
    "yellow",
    "orange",
];

// TODO: make keys for token check configurable

/**
 * Creates a JSON token file from a javascript object with CSS props.
 *
 * Inspired by:
 * - https://github.com/argyleink/open-props/blob/main/build/to-tokens.js
 * - https://github.com/argyleink/open-props/blob/main/build/to-figmatokens.js
 *
 * @param {Object} props
 * @param {string[]} colorKeys {defaultColorKeys}
 * @param {boolean} figmaSyntax false
 * @returns {Object} Object formatted to match the JSON/Figma token file format
 */
const toTokens = (props, colorKeys, figmaSyntax = false) => {
    let tokens = {};

    if (figmaSyntax) {
        props.map(([key, token]) => {
            let meta = {};
            let isLength = key.includes("size") && !key.includes("border-size");
            let isBorder = key.includes("border-size");
            let isRadius = key.includes("radius");
            let isShadow = key.includes("shadow");
            let colors = colorKeys || defaultColorKeys;
            let isColor = colors.some((color) => key.includes(color));

            if (isLength) meta.type = "sizing";
            else if (isBorder) meta.type = "borderWidth";
            else if (isRadius) meta.type = "borderRadius";
            else if (isShadow) meta.type = "boxShadow";
            else if (isColor) meta.type = "color";
            else meta.type = "other";

            if (!(meta.type in tokens)) tokens[meta.type] = {};

            tokens[meta.type][key] = {
                value: token,
                ...meta,
            };
        });
    } else {
        tokens = props.map(([key, token]) => {
            let meta = {};
            let isLength = key.includes("size");
            let isEasing = key.includes("ease");
            let colors = colorKeys || defaultColorKeys;
            let isColor = colors.some((color) => key.includes(color));

            if (isLength) meta.type = "dimension";
            else if (isEasing) meta.type = "cubic-bezier";
            else if (isColor) meta.type = "color";

            return [key, { value: token, ...meta }];
        });
    }

    return tokens;
};

export default toTokens;
