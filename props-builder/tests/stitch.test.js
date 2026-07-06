// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { fromStitch } from "../src/formats/stitch.js";

describe("fromStitch", () => {
	test("parses the known frontmatter groups into a plain token object", () => {
		const markdown = [
			"---",
			"colors:",
			"  primary: '#a7000c'",
			"typography:",
			"  headline-lg:",
			"    fontFamily: Titillium Web",
			"    fontSize: 24px",
			"spacing:",
			"  gutter: 16px",
			"---",
			"",
			"## Brand & Style",
			"",
			"Prose describing the design system, not a token.",
		].join("\n");

		assert.deepEqual(fromStitch(markdown), {
			color: { primary: "#a7000c" },
			typography: {
				"headline-lg": { fontFamily: "Titillium Web", fontSize: "24px" },
			},
			spacing: { gutter: "16px" },
		});
	});

	test("drops the known metadata keys (name, description)", () => {
		const markdown = [
			"---",
			"name: Technical Precision",
			"description: A design system export",
			"colors:",
			"  primary: red",
			"---",
		].join("\n");

		assert.deepEqual(fromStitch(markdown), { color: { primary: "red" } });
	});

	test("passes through any other frontmatter group unchanged", () => {
		const markdown = [
			"---",
			"name: Hyvä Default System",
			"form:",
			"  bg: '#ffffff'",
			"  radius: var(--radius-lg)",
			"fontFamily:",
			"  sans: Inter",
			"rounded:",
			"  sm: 0.25rem",
			"  DEFAULT: 0.5rem",
			"spacing: 0.25rem",
			"---",
		].join("\n");

		assert.deepEqual(fromStitch(markdown), {
			form: { bg: "#ffffff", radius: "var(--radius-lg)" },
			fontFamily: { sans: "Inter" },
			rounded: { sm: "0.25rem", DEFAULT: "0.5rem" },
			spacing: "0.25rem",
		});
	});

	test("ignores the Markdown body outside the frontmatter fences", () => {
		const markdown = ["---", "colors:", "  primary: red", "---", "", "colors: this is prose, not YAML"].join("\n");

		assert.deepEqual(fromStitch(markdown), { color: { primary: "red" } });
	});

	test("returns an empty object when there is no frontmatter", () => {
		assert.deepEqual(fromStitch("# Just a heading\n\nNo frontmatter here."), {});
	});

	test("renames the colors group to color, without a manual rename option", () => {
		assert.deepEqual(fromStitch("---\ncolors:\n  primary: red\n---"), {
			color: { primary: "red" },
		});
	});

	test("leaves an already-singular color group untouched", () => {
		assert.deepEqual(fromStitch("---\ncolor:\n  primary: red\n---"), {
			color: { primary: "red" },
		});
	});

	test("never overwrites an existing color group with colors", () => {
		assert.deepEqual(
			fromStitch("---\ncolors:\n  primary: red\ncolor:\n  primary: blue\n---"),
			{ color: { primary: "blue" } },
		);
	});
});
