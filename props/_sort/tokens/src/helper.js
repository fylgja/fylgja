// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import fs from "fs";

const twColorKeysMap = {
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

/**
 * Renames keys in an object based on a given mapping.
 *
 * @param {Object} keysMap - A mapping of old keys to new keys.
 * @param {Object} obj - The object whose keys are to be renamed.
 * @returns {Object} - A new object with the renamed keys.
 */
function renameKeys(keysMap, obj) {
    return Object.keys(obj).reduce(
        (acc, key) => ({
            ...acc,
            ...{ [keysMap[key] || key]: obj[key] },
        }),
        {}
    );
}

/**
 * Builjs JS file base in the Design Tokens with the Fylgaj Copyright
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

/**
 * Flatten Object into a flat Object
 *
 * @param {Object} obj
 * @param {{ separator: string, formating: (i: string) => i }} options
 * @returns {{ [x: string]: any }} flat object
 */
function flattenObj(obj, { separator = "-", formating = (i) => i } = {}) {
    let result = {};

    for (const i in obj) {
        if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
            const temp = flattenObj(obj[i]);
            for (const j in temp) {
                result[formating(i + separator + j)] = temp[j];
            }
        } else {
            result[formating(i)] = obj[i];
        }
    }

    return result;
}

/**
 * Convert a string to kebab case.
 *
 * @param {string} string
 * @returns {string} kebab case string
 */
function kebabCase(string) {
    return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

export { twColorKeysMap, renameKeys, buildJsFile, flattenObj, kebabCase };
