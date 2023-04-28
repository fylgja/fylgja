import kebabCase from "./kebabCase.js";

/**
 * Creates json object from a javascript object with CSS props.
 * This used to create new javascript objects
 *
 * @param {Object} props
 * @param {string} prefix
 * @param {string} suffix
 * @param {string} varSyntax
 * @param {boolean} safeMode - if true it will keep scss values in quotes for `/`
 * @returns {string}
 */
const toJsStyleTokens = (props, prefix = "", suffix = "", varSyntax = "--") => {
    let styles = {};

    Object.entries(props).forEach(([name, value]) => {
        if (typeof value === "string" || typeof value === "number") {
        } else if (Array.isArray(value)) {
            value = value.toString();
        } else {
            return console.warn(`Value of ${name} is not a string or number.`);
        }

        if (name.endsWith("-@")) {
            value = value.replaceAll("\n", " ").replace(/\s+/g, " ");
        }

        name = kebabCase(name);
        const varName = `${varSyntax}${prefix}${name}${suffix}`;

        styles = { ...styles, [varName]: value };
    });

    return JSON.stringify(styles, null, 2);
};

export default toJsStyleTokens;
