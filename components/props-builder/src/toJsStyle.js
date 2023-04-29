import kebabCase from "./kebabCase.js";

/**
 * Creates json object from a javascript object with CSS props.
 * This used to create new javascript objects
 *
 * @param {Object} props
 * @param {Object} options
 * @param {string} options.prefix
 * @param {string} options.suffix
 * @param {string} options.varSyntax
 * @param {boolean} options.removeDefaultFromName
 * @returns {string}
 */
const toJsStyleTokens = (
    props,
    {
        prefix = "",
        suffix = "",
        varSyntax = "--",
        removeDefaultFromName = true,
    } = {}
) => {
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

        if (removeDefaultFromName && name.endsWith("-default")) {
            name = name.replace("-default", "");
        }

        const varName = `${varSyntax}${prefix}${name}${suffix}`;

        styles = { ...styles, [varName]: value };
    });

    return JSON.stringify(styles, null, 2);
};

export default toJsStyleTokens;
