/**
 * Flatten Object into a flat Object
 *
 * @param {Object} obj - object to flatten
 * @returns Object - flattened object
 */
const flattenObj = (obj, separator = "-") => {
    let result = {};

    for (const i in obj) {
        if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
            const temp = flattenObj(obj[i]);
            for (const j in temp) {
                result[i + separator + j] = temp[j];
            }
        } else {
            result[i] = obj[i];
        }
    }

    return result;
};

export default flattenObj;
