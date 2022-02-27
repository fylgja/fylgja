// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import fs from "fs";

function kababCase(string) {
    return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

// *1: until Safari supports :where(html) better, we stick using :root
// TODO: set default selector to :where(html) when safari 16 is released

/**
 * Builds a token CSS, SCSS or JSON file,
 * from a javascript object with CSS props.
 *
 * @param {Object} options
 * @param {string} options.filename
 * @param {Object.<string, string | number>} options.props
 * @param {string} options.selector - default: :root
 * @param {string} options.prefix - default: ""
 * @param {boolean} options.varOnly - default: false
 * @param {string} options.varSyntax - default: "--"
 * @param {boolean} options.frameOnly - default: false
 * @param {boolean} options.keepCamelCase - default: false
 */
export const propsBuilder = ({
    filename,
    props,
    selector = ":root", // *1
    prefix = "",
    varOnly = false,
    varSyntax = "--",
    frameOnly = false,
    keepCamelCase = false,
}) => {
    const jsonMode = filename.endsWith(".json");
    let appendedMeta = "";
    let el = `${selector} `;
    let hasSelector = selector ? true : false;
    let lineBr = ";\n";
    let str = "";
    let tabSize = selector ? "    " : "";

    // Type specific settings
    if (frameOnly || varOnly) {
        hasSelector = false;
        tabSize = "";
    }

    if (varOnly) {
        varSyntax = varSyntax === "--" ? "$" : varSyntax;
    }

    // Language specific settings
    if (jsonMode) {
        el = "";
        hasSelector = true;
        lineBr = ",\n";
        str = '"';
        tabSize = "  ";
        varSyntax = "";
        varOnly = true;
        frameOnly = false;
    }

    // Create token file
    const file = fs.createWriteStream(filename);

    if (hasSelector) file.write(`${el}{\n`);

    Object.entries(props).forEach(([name, value], index) => {
        if (jsonMode && index === Object.keys(props).length - 1) {
            lineBr = "\n";
        }

        // The ending -@ is to keep the same syntax as postcss-jit-props
        if (name.endsWith("-@")) {
            if (varOnly && !frameOnly) return;

            appendedMeta += value + "\n";
            return;
        }

        if (frameOnly && !varOnly) return;

        if (!keepCamelCase) {
            name = kababCase(name);
        }

        const varName = prefix
            ? `${varSyntax}${prefix}${name}`
            : `${varSyntax}${name}`;

        // TEMP save mode for SCSS / values that need to be quoted,
        // until SCSS version 2.0, which drops native / calc support
        if (filename.endsWith(".scss") && varSyntax === "$") {
            if (typeof value === "string") {
                value.includes("/") && (value = `"${value}"`);
            }
        }

        file.write(
            `${tabSize}${str}${varName}${str}: ${str}${value}${str}${lineBr}`
        );
    });

    if (hasSelector) file.write("}\n");
    file.end(appendedMeta);
};
