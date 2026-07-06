// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

/**
 * Google Stitch exports a design system as a Markdown file with a YAML
 * frontmatter block. The Markdown body is prose (brand voice, component
 * notes, ...) and is not part of the Design Tokens, so it's ignored.
 *
 * Every top-level frontmatter key is treated as a Design Token group,
 * except for these known metadata keys, which are dropped.
 * Extend this list as more Stitch exports are seen in the wild.
 */
const stitchMetadataKeys = ["name", "description"];

/**
 * Strips the quotes off a scalar YAML value, if present.
 *
 * @param {string} raw
 * @returns {string}
 */
function parseYamlScalar(raw) {
	const value = raw.trim();
	const isSingleQuoted = value.startsWith("'") && value.endsWith("'");
	const isDoubleQuoted = value.startsWith('"') && value.endsWith('"');

	if ((isSingleQuoted || isDoubleQuoted) && value.length > 1) {
		return value.slice(1, -1);
	}

	return value;
}

/**
 * Parses a minimal, indentation-based subset of YAML: nested maps of
 * `key: value` pairs. Lists, anchors, multi-line strings, and other
 * advanced YAML features are not supported.
 *
 * @param {string} yaml
 * @returns {Object}
 */
function parseYaml(yaml) {
	const root = {};
	const stack = [{ indent: -1, node: root }];

	for (const line of yaml.split("\n")) {
		if (!line.trim() || line.trim().startsWith("#")) continue;

		const indent = line.length - line.trimStart().length;
		const separatorIndex = line.indexOf(":");
		if (separatorIndex === -1) continue;

		const key = line.slice(0, separatorIndex).trim();
		const rawValue = line.slice(separatorIndex + 1).trim();

		while (stack.length > 1 && indent <= stack[stack.length - 1].indent) {
			stack.pop();
		}

		const parent = stack[stack.length - 1].node;

		if (rawValue === "") {
			const child = {};
			parent[key] = child;
			stack.push({ indent, node: child });
		} else {
			parent[key] = parseYamlScalar(rawValue);
		}
	}

	return root;
}

/**
 * Extracts and parses the YAML frontmatter block (between the leading
 * `---` fences) from a Markdown document.
 *
 * @param {string} markdown
 * @returns {Object}
 */
function parseFrontmatter(markdown) {
	const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	if (!match) return {};

	return parseYaml(match[1]);
}

/**
 * Converts a Google Stitch Markdown export into a plain token object.
 *
 * Stitch exports the color group as `colors`, but Hyvä's naming convention
 * is the singular `color`. It's renamed here so `--colors-primary` becomes
 * `--color-primary` without requiring a manual `rename` config. If the
 * frontmatter already uses `color`, it's left as-is.
 *
 * @param {string} markdown - The raw Markdown file content.
 * @returns {Object}
 */
function fromStitch(markdown) {
	const frontmatter = parseFrontmatter(markdown);

	const tokens = Object.fromEntries(
		Object.entries(frontmatter).filter(([key]) => !stitchMetadataKeys.includes(key)),
	);

	if (Object.prototype.hasOwnProperty.call(tokens, "colors")) {
		if (!Object.prototype.hasOwnProperty.call(tokens, "color")) {
			tokens.color = tokens.colors;
		}
		delete tokens.colors;
	}

	return tokens;
}

export { stitchMetadataKeys, fromStitch, fromStitch as default };
