import fs from "fs";

/**
 * Builds a CSS or SCSS variable file from a javascript object with CSS props.
 *
 * @param {Object} options
 * @param {string} options.filename
 * @param {Object.<string, string | number>} options.props
 * @param {string} options.selector
 * @param {string} options.prefix
 * @param {boolean} options.varOnly
 * @param {string} options.varSyntax
 * @param {boolean} options.frameOnly
 */
export const propsBuilder = ({
    filename,
    props,
    selector = ":where(html)",
    prefix = "",
    varOnly = false,
    varSyntax = "--",
    frameOnly = false,
}) => {
    let appendedMeta = "";
    let hasSelector = selector ? true : false;
    let lineBr = ";\n";
    let selectorSpace = " ";
    let str = "";
    let tabSize = "    ";

    // Type specific settings
    if (varOnly) {
        hasSelector = false;
        tabSize = "";
        varSyntax = varSyntax === "--" ? "$" : varSyntax;
    }

    if (frameOnly) {
        hasSelector = false;
        tabSize = "";
    }

    // Language specific settings
    if (selector === "json") {
        hasSelector = true;
        lineBr = ",\n";
        selector = "";
        selectorSpace = "";
        str = '"';
        tabSize = "  ";
        varSyntax = "";
        varOnly = true;
        frameOnly = false;
    }

    // Create token file
    const file = fs.createWriteStream(filename);

    if (hasSelector) file.write(`${selector}${selectorSpace}{\n`);

    Object.entries(props).forEach(([name, value], index) => {
        if (hasSelector && index === Object.keys(props).length - 1)
            lineBr = "\n";

        // The ending -@ is to keep the same syntax as postcss-jit-props
        if (name.endsWith("-@")) {
            if (varOnly && !frameOnly) return;

            appendedMeta += value + "\n";
            return;
        }

        if (frameOnly && !varOnly) return;
        const varName = prefix
            ? `${varSyntax}${prefix}${name}`
            : `${varSyntax}${name}`;

        file.write(
            `${tabSize}${str}${varName}${str}: ${str}${value}${str}${lineBr}`
        );
    });

    if (hasSelector) file.write("}\n");
    file.end(appendedMeta);
};
