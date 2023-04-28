import kebabCase from "./kebabCase.js";

/**
 * Creates array of tokens from a javascript object with CSS props.
 *
 * @param {Object} props
 * @param {string} prefix
 * @param {string} suffix
 * @param {string} varSyntax
 * @param {boolean} safeMode - if true it will keep scss values in quotes for `/`
 * @returns {{ styles: string[], appendedMeta: string[] }}
 */
const toStyleTokens = (
    props,
    prefix = "",
    suffix = "",
    varSyntax = "--",
    safeMode = true
) => {
    const styles = [];
    const indent = varSyntax !== "--" ? "" : "    ";
    let appendedMeta = "";
    let stylesDark = [];

    Object.entries(props).forEach(([name, value]) => {
        if (typeof value === "string" || typeof value === "number") {
        } else if (Array.isArray(value)) {
            value = value.toString();
        } else {
            return console.warn(`Value of ${name} is not a string or number.`);
        }

        if (name.endsWith("-@")) {
            const appendedMetaBr = appendedMeta.length > 0 ? "\n\n" : "";

            appendedMeta += appendedMetaBr + value;
            return;
        }

        name = kebabCase(name);
        let varName = `${varSyntax}${prefix}${name}${suffix}`;

        if (name.includes("-@media:dark")) {
            varName = varName.replace(
                "-@media:dark",
                varSyntax === "$" ? "-dark" : ""
            );
        }

        // * TEMP: save mode for SCSS / values that need to be quoted,
        // * until SCSS version 2.0, which drops native / calc support
        if (varSyntax === "$" && safeMode) {
            if (typeof value === "string") {
                value.includes("/") && (value = `"${value}"`);
            }
        }

        if (name.includes("-@media:dark") && varSyntax !== "$") {
            stylesDark.push(`${indent}${varName}: ${value};\n`);
            return;
        }

        styles.push(`${indent}${varName}: ${value};\n`);
    });

    return {
        styles,
        stylesDark,
        appendedMeta,
    };
};

export default toStyleTokens;
