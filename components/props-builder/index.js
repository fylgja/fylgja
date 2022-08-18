// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import fs from "fs";
import fileType from "./src/fileType.js";
import flattenObj from "./src/flattenObj.js";
import jsonObj from "./src/jsonObj.js";
import toStyleTokens from "./src/toStyle.js";
import toTokens from "./src/toTokens.js";

/**
 * Builds a token CSS, SCSS or JSON file,
 * from a javascript object with CSS props.
 *
 * @param {Object} options
 * @param {Object} options.props
 * @param {string} options.filename
 * @param {string} options.selector default: `:root`
 * @param {string} options.prefix
 * @param {string} options.suffix
 * @param {string} options.generationSyntax default: if empty the default is based on the file extension
 * @param {string[]} options.jsonColorKeys default: {defaultColorKeys}
 * @param {boolean} options.safeMode - if true it will keep scss values in quotes for `/`
 */
export const propsBuilder = ({
    props,
    filename = "tokens.css",
    selector = ":root",
    prefix = "",
    suffix = "",
    generationSyntax,
    jsonColorKeys,
    safeMode = true,
}) => {
    const mode = generationSyntax || fileType(filename);
    const file = fs.createWriteStream(filename);
    const flatProps = flattenObj(props);
    let jsonProps = jsonObj(flatProps);

    switch (mode) {
        case "figma":
            const figmaMode = true;
            const figmaTokens = toTokens(jsonProps, jsonColorKeys, figmaMode);
            file.write(JSON.stringify(figmaTokens, null, 2));
            file.write("\n");
            break;

        case "json":
            const jsonTokens = toTokens(jsonProps, jsonColorKeys);
            file.write(JSON.stringify(Object.fromEntries(jsonTokens), null, 2));
            file.write("\n");
            break;

        case "scss":
            const { styles: scss, appendedMeta: scssKey } = toStyleTokens(
                flatProps,
                prefix,
                suffix,
                "$",
                safeMode
            );
            const hasScssValues = scss.length;
            const hasScssFrames = scssKey.length;
            if (hasScssValues) {
                scss.map((style) => file.write(style));
            }
            if (hasScssValues && hasScssFrames) {
                file.write("\n");
            }
            if (hasScssFrames) {
                file.write(scssKey);
                file.write("\n");
            }
            break;

        case "css":
            const { styles: css, appendedMeta: cssKey } = toStyleTokens(
                flatProps,
                prefix,
                suffix
            );
            const hasCssValues = css.length;
            const hasCssFrames = cssKey.length;
            if (hasCssValues) {
                file.write(`${selector} {\n`);
                css.map((style) => file.write(style));
                file.write("}\n");
            }
            if (hasCssValues && hasCssFrames) {
                file.write("\n");
            }
            if (hasCssFrames) {
                file.write(cssKey);
                file.write("\n");
            }
            break;

        default:
            console.warn("Filetype is is not supported");
            break;
    }
    file.end();
};
