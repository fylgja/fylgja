/**
 * Convert a string to kebab case.
 *
 * @param {string} string
 * @returns {string} kebab case string
 */
function kebabCase(string) {
    return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

export default kebabCase;
