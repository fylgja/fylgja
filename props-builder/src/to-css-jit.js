// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { flattenObj } from "./utils.js";

/**
 * Creates array of tokens from a javascript object with CSS props.
 *
 * @param {Object} props - The input object with CSS properties.
 * @returns {string} The generated CSS styles as a string.
 */
const toCssJitTokens = (props) => {
	const flatProps = flattenObj(props);
	const cssPrefixedTokens = Object.fromEntries(
		Object.entries(flatProps).map(([key, value]) => [`--${key}`, value])
	);

	return JSON.stringify(cssPrefixedTokens, null, 2);
};

export default toCssJitTokens;
