/**
 * Convert Object to JSON safe Array of Objects,
 * to parse in the toTokens function
 *
 * Inspired by:
 * - https://github.com/argyleink/open-props/blob/main/build/to-json.js
 *
 * @param {Object} props
 * @returns Array
 */
const jsonObj = (props) =>
    Object.entries(props).reduce((bundle_entries, [key, val]) => {
        bundle_entries.unshift([key, val]);
        return bundle_entries;
    }, []);

export default jsonObj;
