// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { kebabCase } from "./utils.js";
import { cssToToken, dtcgVersion, isPlainObject, isToken } from "./formats/dtcg.js";

const referenceRegex = /\{([\w$.-]+)\}/g;

/**
 * @typedef {Object} Leaf
 * @property {string[]} path - token path, `DEFAULT` keys become `$root`
 * @property {string} name - CSS variable name, without `--`
 * @property {*} value - CSS value
 */

/**
 * Builds the CSS variable name the same way `toStyleTokens` does.
 *
 * @param {string[]} path
 * @returns {string}
 */
const pathToCssName = (path) =>
	kebabCase(path.filter((segment) => segment !== "$root").join("-"));

/**
 * @param {Object} props
 * @param {string[]} path
 * @param {Leaf[]} leaves
 * @returns {Leaf[]}
 */
function collectLeaves(props, path = [], leaves = []) {
	for (const [key, value] of Object.entries(props)) {
		// `-@` props are raw CSS (e.g. `@keyframes`) and `@media` props are not part of the token set
		if (key.endsWith("-@") || key.includes("@media")) continue;

		const leafPath = [...path, key === "DEFAULT" ? "$root" : key.replaceAll(".", "")];

		if (isPlainObject(value)) {
			collectLeaves(value, leafPath, leaves);
		} else {
			leaves.push({ path: leafPath, name: pathToCssName(leafPath), value });
		}
	}

	return leaves;
}

/**
 * @param {Object} tree
 * @param {string[]} path
 * @param {Object} token
 * @returns {boolean} - `false` when the path collides with an existing token or group
 */
function setToken(tree, path, token) {
	let node = tree;

	for (const key of path.slice(0, -1)) {
		node[key] ??= {};
		if (isToken(node[key])) return false;
		node = node[key];
	}

	const key = path.at(-1);
	if (node[key] !== undefined) return false;

	node[key] = token;
	return true;
}

/**
 * Converts a JavaScript object with CSS props into a Design Tokens 2025.10 token tree.
 *
 * Values the format can't express (e.g. `calc()`, `clamp()` or `em` units) are skipped,
 * and so are references to skipped tokens.
 *
 * @param {Object} props
 * @returns {{tokens: Object, skipped: string[]}}
 */
export function toDtcgTokens(props) {
	const leaves = collectLeaves(props);
	const paths = new Map(leaves.map((leaf) => [leaf.name, leaf.path]));
	const skipped = [];
	const skip = ({ name }) => skipped.push(name);

	let entries = leaves.flatMap((leaf) => {
		const token = cssToToken(leaf.value, leaf.name, (name) => {
			const path = paths.get(name);
			return path && `{${path.join(".")}}`;
		});

		if (!token) skip(leaf);
		return token ? [{ ...leaf, token }] : [];
	});

	// Drop tokens that reference a skipped token, until no dangling references are left
	let hasDanglingReferences = true;
	while (hasDanglingReferences) {
		const available = new Set(entries.map((entry) => entry.path.join(".")));
		const resolvable = entries.filter((entry) =>
			[...JSON.stringify(entry.token.$value).matchAll(referenceRegex)].every(
				([, reference]) => available.has(reference),
			),
		);

		hasDanglingReferences = resolvable.length !== entries.length;
		entries
			.filter((entry) => !resolvable.includes(entry))
			.forEach(skip);
		entries = resolvable;
	}

	const tokens = {};

	for (const entry of entries) {
		if (!setToken(tokens, entry.path, entry.token)) skip(entry);
	}

	return { tokens, skipped };
}

/**
 * @param {string[]} skipped
 */
const warnSkipped = (skipped) => {
	if (!skipped.length) return;

	console.warn(
		`Skipped ${skipped.length} token(s) that the Design Tokens ${dtcgVersion} format can't express: ${skipped.map((name) => `--${name}`).join(", ")}`,
	);
};

/**
 * Creates a Design Tokens Resolver 2025.10 JSON file from a JavaScript object with CSS props.
 * All tokens go in a single set.
 *
 * @source https://www.designtokens.org/tr/2025.10/resolver/
 * @param {Object} props
 * @param {Object} options
 * @param {string} options.name - Name of the resolver and its token set
 * @param {string} options.description
 * @returns {string}
 */
export function toDtcg(props, { name = "Design Tokens", description = "" } = {}) {
	const { tokens, skipped } = toDtcgTokens(props);

	warnSkipped(skipped);

	return JSON.stringify(
		{
			version: dtcgVersion,
			name,
			...(description && { description }),
			resolutionOrder: [{ type: "set", name, sources: [tokens] }],
		},
		null,
		2,
	);
}
