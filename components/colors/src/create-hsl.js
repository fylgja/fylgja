// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import fs from "fs";
import hexToHsl from "./hexToHsl.js";
import props from "../index.js";

// Loop trough each color from props and convert it to hsl and add it to propsHsl
const propsHsl = {};
Object.keys(props).forEach((color) => {
    propsHsl[color] = {};

    Object.keys(props[color]).forEach((key) => {
        propsHsl[color][key] = hexToHsl(props[color][key]);
    });
});

/**
 * Builjs JS file base in the Design Tokens with the Fylgja Copyright
 *
 * @param {string} file - name of output file
 * @param {Object} props
 * @returns {void}
 */
function buildJsFile(file, props) {
    const syntax = file.endsWith(".cjs")
        ? "module.exports = "
        : "export default ";
    const copyright =
        "// Fylgja (https://fylgja.dev)\n// Licensed under MIT Open Source\n";

    fs.createWriteStream(file).write(
        `${copyright}\n${syntax}${JSON.stringify(props, null, 2)};\n`
    );
}

buildJsFile("hsl.js", propsHsl);
buildJsFile("hsl.cjs", propsHsl);
