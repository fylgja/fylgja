// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import fs from "fs";
import fileType from "./src/fileType.js";
import flattenObj from "./src/flattenObj.js";
import jsonObj from "./src/jsonObj.js";
import toJsStyleTokens from "./src/toJsStyle.js";
import toStyleTokens from "./src/toStyle.js";
import toTokens from "./src/toTokens.js";

/**
 * Builds a token CSS, SCSS or JSON file,
 * from a javascript object with CSS props.
 *
 * @param {Object} options
 * @param {Object} options.props
 * @param {string} options.filename
 * @param {string} options.selector default: `:where(:root)`
 * @param {string} options.prefix
 * @param {string} options.suffix
 * @param {string} options.generationSyntax default: if empty the default is based on the file extension
 * @param {string} options.varPrefix the variable syntax prefix, e.g `--`, `$` or other
 * @param {string[]} options.jsonColorKeys default: {defaultColorKeys}
 * @param {boolean} options.safeMode - if true it will keep scss values in quotes for `/`
 * @param {string} options.wrapperName - if set it will be used as wrapper for json tokens
 * @param {boolean} options.removeDefaultFromName - if set the default key name will be removed
 */
export const propsBuilder = ({
    props,
    filename = "tokens.css",
    selector = ":where(:root)",
    prefix = "",
    suffix = "",
    generationSyntax,
    varPrefix = "--",
    jsonColorKeys,
    safeMode = true,
    wrapperName = "",
    removeDefaultFromName = true,
}) => {
    const mode = generationSyntax || fileType(filename);
    const file = fs.createWriteStream(filename);
    const flatProps = flattenObj(props);
    let jsonProps = jsonObj(flatProps);

    switch (mode) {
        case "figma":
            const figmaMode = true;
            const figmaSrc = toTokens(jsonProps, jsonColorKeys, figmaMode);
            const figmaTokens = wrapperName
                ? { [wrapperName]: figmaSrc }
                : figmaSrc;
            file.write(JSON.stringify(figmaTokens, null, 2));
            file.write("\n");
            break;

        case "tokens":
            const jsonTokens = toTokens(jsonProps, jsonColorKeys);
            file.write(JSON.stringify(Object.fromEntries(jsonTokens), null, 2));
            file.write("\n");
            break;

        case "json":
            const jsonStyles = toJsStyleTokens(
                flatProps,
                prefix,
                suffix,
                varPrefix
            );
            file.write(jsonStyles);
            file.write("\n");
            break;

        case "cjs":
        case "mjs":
            const exportSyntax =
                mode === "mjs" ? "export default " : "module.exports = ";
            const jsStyles = toJsStyleTokens(flatProps, {
                prefix,
                suffix,
                varPrefix,
                removeDefaultFromName,
            });
            file.write(exportSyntax + jsStyles);
            file.write("\n");
            break;

        case "scss":
        case "css":
            const styleOptions = {
                prefix,
                suffix,
                varSyntax: mode === "scss" ? "$" : varPrefix,
                safeMode: mode === "scss" ? true : safeMode,
                removeDefaultFromName,
            };
            const { styles, stylesDark, appendedMeta } = toStyleTokens(
                flatProps,
                styleOptions
            );
            const hasCssValues = styles.length;
            const hasCssDarkValues = stylesDark.length;
            const hasCssFrames = appendedMeta.length;

            if (mode === "scss") {
                if (hasCssValues) {
                    styles.map((style) => file.write(style));
                }
                if (hasCssValues && hasCssFrames) {
                    file.write("\n");
                }
                if (hasCssFrames) {
                    file.write(appendedMeta);
                    file.write("\n");
                }
            } else {
                if (hasCssValues) {
                    file.write(`${selector} {\n`);
                    styles.map((style) => file.write(style));
                    file.write("}\n");
                }
                if (hasCssValues && hasCssDarkValues) {
                    file.write("\n");
                }
                if (hasCssDarkValues) {
                    file.write(
                        `@media (prefers-color-scheme: dark) {\n    ${selector} {\n`
                    );
                    stylesDark.map((style) => file.write(`    ${style}`));
                    file.write("    }\n}\n");
                }
                if (hasCssValues && hasCssFrames) {
                    file.write("\n");
                }
                if (hasCssFrames) {
                    file.write(appendedMeta);
                    file.write("\n");
                }
            }
            break;

        default:
            console.warn("Filetype is is not supported");
            break;
    }
    file.end();
};
