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
 * @param {boolean} options.keyOnly
 */
export const propsBuilder = ({
    filename,
    props,
    selector = ":where(html)",
    prefix = "",
    varOnly = false,
    varSyntax = "--",
    keyOnly = false,
}) => {
    if (varOnly) {
        selector = "";
        varSyntax = varSyntax === "--" ? "$" : varSyntax;
    }

    if (keyOnly) {
        selector = "";
    }

    const file = fs.createWriteStream(filename);
    const tabSize = selector ? "    " : "";

    let appendedMeta = "";

    if (selector) file.write(`${selector} {\n`);

    Object.entries(props).forEach(([name, value]) => {
        // The ending -@ is to keep the same syntax as postcss-jit-props
        if (name.endsWith("-@")) {
            if (varOnly && !keyOnly) return;

            appendedMeta += value + "\n";
            return;
        }

        if (keyOnly && !varOnly) return;
        const varName = prefix
            ? `${varSyntax}${prefix}${name}`
            : `${varSyntax}${name}`;

        file.write(`${tabSize}${varName}: ${value};\n`);
    });

    if (selector) file.write("}\n");
    file.end(appendedMeta);
};
