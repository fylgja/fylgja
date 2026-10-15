// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { isPlainObject, mergeTokenTrees } from "./dtcg.js";

/**
 * Reads a Design Tokens Resolver Module 2025.10 document.
 *
 * @source https://www.designtokens.org/tr/2025.10/resolver/
 */

/**
 * @param {*} doc
 * @returns {boolean}
 */
export const isResolverDocument = (doc) =>
	isPlainObject(doc) &&
	typeof doc.version === "string" &&
	Array.isArray(doc.resolutionOrder);

/**
 * Splits a JSON Pointer (RFC 6901) into its unescaped keys.
 *
 * @param {string} pointer - e.g. `#/sets/base`
 * @returns {string[]}
 * @throws {Error} when the pointer is not local to the document, e.g. a file reference
 */
export const parsePointer = (pointer) => {
	if (pointer !== "#" && !pointer.startsWith("#/")) {
		throw new Error(
			`Cannot resolve "$ref": "${pointer}", only references within the same document are supported. Inline or merge the referenced file first.`,
		);
	}

	return pointer
		.slice(2)
		.split("/")
		.filter(Boolean)
		.map((key) => key.replaceAll("~1", "/").replaceAll("~0", "~"));
};

/**
 * @param {Object} doc
 * @param {string[]} path
 * @param {string} pointer - only used for the error message
 * @returns {*}
 * @throws {Error} when the path does not exist
 */
export const getPath = (doc, path, pointer = path.join("/")) => {
	const target = path.reduce(
		(node, key) => (isPlainObject(node) || Array.isArray(node) ? node[key] : undefined),
		doc,
	);

	if (target === undefined) {
		throw new Error(`Cannot resolve "$ref": "${pointer}", the target does not exist`);
	}

	return target;
};

/**
 * Merges a list of sources (inline token trees or `$ref`s) on top of `tokens`.
 *
 * @param {Object} doc
 * @param {Object} tokens
 * @param {Object[]} sources
 * @returns {Object}
 */
function mergeSources(doc, tokens, sources = []) {
	return sources.reduce((merged, source) => {
		if (typeof source?.$ref !== "string") return mergeTokenTrees(merged, source);

		const target = getPath(doc, parsePointer(source.$ref), source.$ref);
		return Array.isArray(target?.sources)
			? mergeSources(doc, merged, target.sources)
			: mergeTokenTrees(merged, target);
	}, tokens);
}

/**
 * Flattens a resolver document into a single token tree.
 *
 * Every modifier resolves to its `default` context (or its first context).
 *
 * @param {Object} doc
 * @returns {Object}
 */
export function fromResolver(doc) {
	let tokens = {};

	for (const entry of doc.resolutionOrder) {
		const isReference = typeof entry?.$ref === "string";
		const path = isReference ? parsePointer(entry.$ref) : [];
		const node = isReference ? getPath(doc, path, entry.$ref) : entry;
		const type = isReference
			? path[0] === "modifiers" ? "modifier" : "set"
			: entry.type;

		if (type === "modifier") {
			const contexts = node.contexts ?? {};
			const context = node.default ?? Object.keys(contexts)[0];

			tokens = mergeSources(doc, tokens, contexts[context]);
		} else {
			tokens = mergeSources(doc, tokens, node.sources);
		}
	}

	return tokens;
}
