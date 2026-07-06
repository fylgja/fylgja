// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { propsBuilder } from "../index.js";
import { props, propsKeys, designTokens } from "./fixtures.js";

const build = (input, filename, options) =>
	propsBuilder(input, filename, { ...options, writeToFile: false });

describe("CSS output", () => {
	const css = build(props, "tokens.css");

	test("wraps custom properties in the default :where(:root) selector", () => {
		assert.ok(css.startsWith(":where(:root) {\n"), "should open with the default selector");
	});

	test("renders top-level and nested props as kebab-cased custom properties", () => {
		assert.ok(css.includes("\t--layer-1: 1;"));
		assert.ok(css.includes("\t--size-2: 0.5em;"));
		assert.ok(css.includes("\t--color-red-0: #fff5f5;"));
		assert.ok(css.includes("\t--color-green: #0f0;"));
		assert.ok(css.includes("\t--border-size-2: 0.5em;"));
	});

	test("joins array values with a comma", () => {
		assert.ok(
			css.includes(
				"\t--shadow-1: 0 2px 1px -1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%)), " +
					"0 1px 1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%)), " +
					"0 1px 3px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%));"
			)
		);
	});

	test("renders camelCase keys as kebab-case custom properties", () => {
		assert.ok(css.includes("\t--animate-spin: spin 1s linear infinite;"));
		assert.ok(css.includes("\t--animate-rotate: rotate 1s linear infinite;"));
	});

	test("wraps `-@media:dark` props in the dark mode media query", () => {
		assert.ok(
			css.includes(
				"@media (prefers-color-scheme: dark) {\n\t:where(:root) {\n\t\t--shadow-color: hsl(220 40% 2%);\n\t\t--shadow-weight: 25%;\n\t}\n}"
			)
		);
	});

	test("appends `-@` keyframe props as raw CSS after the custom properties", () => {
		assert.ok(css.includes("@keyframes spin { to { rotate: 360deg }}"));
		assert.ok(css.includes("@keyframes rotate { to { rotate: 360deg }}"));
	});
});

describe("SCSS output", () => {
	const scss = build(props, "tokens.scss");

	test("renders SCSS variables instead of CSS custom properties", () => {
		assert.ok(scss.startsWith("$layer-1: 1;\n"));
		assert.ok(scss.includes("$color-red-0: #fff5f5;"));
		assert.ok(scss.includes("$border-size-2: 0.5em;"));
	});

	test("interpolates CSS variable references as SCSS variables", () => {
		assert.ok(
			scss.includes(
				'$shadow-1: "0 2px 1px -1px hsl(#{$shadow-color} / calc(#{$shadow-weight} + 18%)), ' +
					"0 1px 1px hsl(#{$shadow-color} / calc(#{$shadow-weight} + 12%)), " +
					'0 1px 3px hsl(#{$shadow-color} / calc(#{$shadow-weight} + 10%))";'
			)
		);
	});

	test("suffixes dark mode props with -dark instead of nesting a media query", () => {
		assert.ok(scss.includes("$shadow-dark-color: hsl(220 40% 2%);"));
		assert.ok(scss.includes("$shadow-dark-weight: 25%;"));
	});

	test("appends `-@` keyframe props as raw CSS", () => {
		assert.ok(scss.includes("@keyframes spin { to { rotate: 360deg }}"));
		assert.ok(scss.includes("@keyframes rotate { to { rotate: 360deg }}"));
	});
});

describe("Design Tokens JSON output", () => {
	const tokens = JSON.parse(build(props, "tokens.tokens.json"));

	test("wraps each token in a $value/$type pair, grouped by flattened key", () => {
		assert.deepEqual(tokens, {
			"layer-1": { $value: 1, $type: "number" },
			"size-2": { $value: "0.5em", $type: "dimension" },
			"size-4": { $value: "4em", $type: "dimension" },
			"color-red-0": { $value: "#fff5f5", $type: "color" },
			"color-red-1": { $value: "#ffe3e3", $type: "color" },
			"color-red-2": { $value: "#ffc9c9", $type: "color" },
			"color-red-3": { $value: "#ffa8a8", $type: "color" },
			"color-red-4": { $value: "#ff8787", $type: "color" },
			"color-red-5": { $value: "#ff6b6b", $type: "color" },
			"color-red-6": { $value: "#fa5252", $type: "color" },
			"color-red-7": { $value: "#f03e3e", $type: "color" },
			"color-red-8": { $value: "#e03131", $type: "color" },
			"color-red-9": { $value: "#f00", $type: "color" },
			"color-green": { $value: "#0f0", $type: "color" },
			"color-blue": { $value: "#00f", $type: "color" },
			"border-size-2": { $value: "0.5em", $type: "dimension" },
			"border-size-4": { $value: "4em", $type: "dimension" },
			"shadow-1": {
				$value: [
					"0 2px 1px -1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%))",
					"0 1px 1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%))",
					"0 1px 3px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))",
				],
			},
			"shadow-color": { $value: "gray", $type: "color" },
			"shadow-weight": { $value: "1%", $type: "font-weight" },
			"shadow-@media:dark-color": { $value: "hsl(220 40% 2%)", $type: "color" },
			"shadow-@media:dark-weight": { $value: "25%", $type: "font-weight" },
			"spin-@": { $value: "@keyframes spin { to { rotate: 360deg }}" },
			animateSpin: { $value: "spin 1s linear infinite" },
			"rotate-@": { $value: "@keyframes rotate { to { rotate: 360deg }}" },
			animateRotate: { $value: "rotate 1s linear infinite" },
		});
	});
});

describe("Figma Tokens JSON output", () => {
	const expectedFigmaTokens = {
		other: {
			"layer-1": { value: 1, type: "other" },
			"spin-@": { value: "@keyframes spin { to { rotate: 360deg }}", type: "other" },
			animateSpin: { value: "spin 1s linear infinite", type: "other" },
			"rotate-@": { value: "@keyframes rotate { to { rotate: 360deg }}", type: "other" },
			animateRotate: { value: "rotate 1s linear infinite", type: "other" },
		},
		sizing: {
			"size-2": { value: "0.5em", type: "sizing" },
			"size-4": { value: "4em", type: "sizing" },
		},
		color: {
			"color-red-0": { value: "#fff5f5", type: "color" },
			"color-red-1": { value: "#ffe3e3", type: "color" },
			"color-red-2": { value: "#ffc9c9", type: "color" },
			"color-red-3": { value: "#ffa8a8", type: "color" },
			"color-red-4": { value: "#ff8787", type: "color" },
			"color-red-5": { value: "#ff6b6b", type: "color" },
			"color-red-6": { value: "#fa5252", type: "color" },
			"color-red-7": { value: "#f03e3e", type: "color" },
			"color-red-8": { value: "#e03131", type: "color" },
			"color-red-9": { value: "#f00", type: "color" },
			"color-green": { value: "#0f0", type: "color" },
			"color-blue": { value: "#00f", type: "color" },
		},
		borderWidth: {
			"border-size-2": { value: "0.5em", type: "borderWidth" },
			"border-size-4": { value: "4em", type: "borderWidth" },
		},
		boxShadow: {
			"shadow-1": {
				value:
					"0 2px 1px -1px hsl({shadow.color.value} / calc({shadow.weight.value} + 18%))," +
					"0 1px 1px hsl({shadow.color.value} / calc({shadow.weight.value} + 12%))," +
					"0 1px 3px hsl({shadow.color.value} / calc({shadow.weight.value} + 10%))",
				type: "boxShadow",
			},
			"shadow-color": { value: "gray", type: "boxShadow" },
			"shadow-weight": { value: "1%", type: "boxShadow" },
			"shadow-@media:dark-color": { value: "hsl(220 40% 2%)", type: "boxShadow" },
			"shadow-@media:dark-weight": { value: "25%", type: "boxShadow" },
		},
	};

	test("groups tokens by Figma type and tokenizes CSS variable references", () => {
		const tokens = JSON.parse(build(props, "tokens.figma-tokens.json"));
		assert.deepEqual(tokens, expectedFigmaTokens);
	});

	test("nests the output under `wrapper` when given", () => {
		const tokens = JSON.parse(
			build(props, "tokens.figma-tokens.sync.json", { wrapper: "fylgja" })
		);
		assert.deepEqual(tokens, { fylgja: expectedFigmaTokens });
	});
});

describe("Style Dictionary JSON output", () => {
	const tokens = JSON.parse(build(props, "tokens.style-dictionary-tokens.json"));

	test("nests tokens by their Style Dictionary category/type path", () => {
		assert.deepEqual(tokens, {
			layer: { 1: { value: 1 } },
			size: {
				"size-2": { value: "0.5em", type: "size" },
				"size-4": { value: "4em", type: "size" },
			},
			color: {
				"color-red-0": { value: "#fff5f5", type: "color" },
				"color-red-1": { value: "#ffe3e3", type: "color" },
				"color-red-2": { value: "#ffc9c9", type: "color" },
				"color-red-3": { value: "#ffa8a8", type: "color" },
				"color-red-4": { value: "#ff8787", type: "color" },
				"color-red-5": { value: "#ff6b6b", type: "color" },
				"color-red-6": { value: "#fa5252", type: "color" },
				"color-red-7": { value: "#f03e3e", type: "color" },
				"color-red-8": { value: "#e03131", type: "color" },
				"color-red-9": { value: "#f00", type: "color" },
				"color-green": { value: "#0f0", type: "color" },
				"color-blue": { value: "#00f", type: "color" },
			},
			border: {
				width: {
					"border-size-2": { value: "0.5em", type: "border-width" },
					"border-size-4": { value: "4em", type: "border-width" },
				},
			},
			box: {
				shadow: {
					"shadow-1": {
						value:
							"0 2px 1px -1px hsl({shadow.color.value} / calc({shadow.weight.value} + 18%))," +
							"0 1px 1px hsl({shadow.color.value} / calc({shadow.weight.value} + 12%))," +
							"0 1px 3px hsl({shadow.color.value} / calc({shadow.weight.value} + 10%))",
						type: "box-shadow",
					},
					"shadow-color": { value: "gray", type: "box-shadow" },
					"shadow-weight": { value: "1%", type: "box-shadow" },
					"shadow-@media:dark-color": { value: "hsl(220 40% 2%)", type: "box-shadow" },
					"shadow-@media:dark-weight": { value: "25%", type: "box-shadow" },
				},
			},
			spin: { "@": { value: "@keyframes spin { to { rotate: 360deg }}" } },
			animateSpin: { value: "spin 1s linear infinite" },
			rotate: { "@": { value: "@keyframes rotate { to { rotate: 360deg }}" } },
			animateRotate: { value: "rotate 1s linear infinite" },
		});
	});
});

describe("Plain JSON output", () => {
	test("dumps props as-is for a plain .json filename, without flattening", () => {
		const dumped = JSON.parse(build(props, "props.json"));
		assert.deepEqual(dumped, props);
	});
});

describe("css-jit output", () => {
	test("exports a flat, --prefixed object for build-time JIT consumption", () => {
		const module = build(props, "tokens.js", { parseAs: "css-jit" });
		assert.ok(module.startsWith("export default "));

		const jit = JSON.parse(module.slice("export default ".length));
		assert.deepEqual(jit, {
			"--layer-1": 1,
			"--size-2": "0.5em",
			"--size-4": "4em",
			"--color-red-0": "#fff5f5",
			"--color-red-1": "#ffe3e3",
			"--color-red-2": "#ffc9c9",
			"--color-red-3": "#ffa8a8",
			"--color-red-4": "#ff8787",
			"--color-red-5": "#ff6b6b",
			"--color-red-6": "#fa5252",
			"--color-red-7": "#f03e3e",
			"--color-red-8": "#e03131",
			"--color-red-9": "#f00",
			"--color-green": "#0f0",
			"--color-blue": "#00f",
			"--border-size-2": "0.5em",
			"--border-size-4": "4em",
			"--shadow-1": [
				"0 2px 1px -1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%))",
				"0 1px 1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%))",
				"0 1px 3px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))",
			],
			"--shadow-color": "gray",
			"--shadow-weight": "1%",
			"--shadow-@media:dark-color": "hsl(220 40% 2%)",
			"--shadow-@media:dark-weight": "25%",
			"--spin-@": "@keyframes spin { to { rotate: 360deg }}",
			"--animateSpin": "spin 1s linear infinite",
			"--rotate-@": "@keyframes rotate { to { rotate: 360deg }}",
			"--animateRotate": "rotate 1s linear infinite",
		});
	});
});

describe("custom CSS selectors", () => {
	test("supports an arbitrary selector", () => {
		const css = build(props, "tokens.css", { selector: ".fylgja-test-zone" });
		assert.ok(css.startsWith(".fylgja-test-zone {\n"));
		assert.ok(
			css.includes(
				"@media (prefers-color-scheme: dark) {\n\t.fylgja-test-zone {\n\t\t--shadow-color: hsl(220 40% 2%);"
			)
		);
	});

	test("nests keyframes inside the Tailwind v4 @theme block and keeps dark props under :root", () => {
		const css = build(props, "tokens.css", { selector: "@theme" });
		assert.ok(css.startsWith("@theme {\n"));
		assert.ok(
			css.includes("@keyframes spin { to { rotate: 360deg }}\n\n\t@keyframes rotate { to { rotate: 360deg }}\n}"),
			"keyframes should be nested inside the @theme block, before its closing brace"
		);
		assert.ok(
			css.includes("@media (prefers-color-scheme: dark) {\n\t:root {\n\t\t--shadow-color: hsl(220 40% 2%);"),
			"dark mode props should stay scoped to :root, not the @theme selector"
		);
	});
});

describe("keyframe-only props", () => {
	test("renders as CSS with only the keyframe custom properties and @keyframes rules", () => {
		assert.equal(
			build(propsKeys, "tokens.css"),
			":where(:root) {\n" +
				"\t--animate-spin: spin 1s linear infinite;\n" +
				"\t--animate-rotate: rotate 1s linear infinite;\n" +
				"}\n" +
				"\n@keyframes spin { to { rotate: 360deg }}" +
				"\n\n@keyframes rotate { to { rotate: 360deg }}\n"
		);
	});

	test("renders as SCSS with only the keyframe variables and @keyframes rules", () => {
		assert.equal(
			build(propsKeys, "tokens.scss"),
			"$animate-spin: spin 1s linear infinite;\n" +
				"$animate-rotate: rotate 1s linear infinite;\n" +
				"\n@keyframes spin { to { rotate: 360deg }}" +
				"\n\n@keyframes rotate { to { rotate: 360deg }}\n"
		);
	});

	test("dumps as plain JSON, unflattened", () => {
		assert.deepEqual(JSON.parse(build(propsKeys, "keys.json")), propsKeys);
	});
});

describe("converting a Figma-syntax design tokens file", () => {
	test("resolves token references and reassembles it as CSS custom properties", () => {
		const css = build(designTokens, "tokens.css", {
			inputTypeTokens: true,
			inputTypeSyntax: "figma",
		});

		assert.ok(css.includes("--layer-1: 1;"));
		assert.ok(css.includes("--animate-spin: spin 1s linear infinite;"));
		assert.ok(css.includes("--sizing-size-2: 0.5em;"));
		assert.ok(css.includes("--color-color-red-0: #fff5f5;"));
		assert.ok(css.includes("--border-width-border-size-2: 0.5em;"));
		assert.ok(
			css.includes(
				"--box-shadow-shadow-1: 0 2px 1px -1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%))," +
					"0 1px 1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%))," +
					"0 1px 3px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%));"
			),
			"a shadow value that was already a joined string (not an array) keeps its original comma spacing"
		);
		assert.ok(
			css.includes(
				"@media (prefers-color-scheme: dark) {\n\t:where(:root) {\n\t\t--box-shadow-shadow-color: hsl(220 40% 2%);\n\t\t--box-shadow-shadow-weight: 25%;\n\t}\n}"
			)
		);
		assert.ok(css.includes("@keyframes spin { to { rotate: 360deg }}"));
		assert.ok(!css.includes("@keyframes rotate"), "this fixture has no rotate keyframe");
	});

	test("no longer auto-unwraps Figma structural groups other than the top-level `other` group", () => {
		const css = build(designTokens, "tokens.css", {
			inputTypeTokens: true,
			inputTypeSyntax: "figma",
		});

		assert.ok(!css.includes("--size-2:"), "the `sizing` group must not be stripped away");
		assert.ok(!css.includes("--border-size-2:"), "the `borderWidth` group must not be stripped away");
		assert.ok(!css.includes("--shadow-1:"), "the `boxShadow` group must not be stripped away");
	});

	test("still unwraps a top-level `other` group, since it's only ever meaningful at the root", () => {
		const css = build(designTokens, "tokens.css", {
			inputTypeTokens: true,
			inputTypeSyntax: "figma",
		});

		assert.ok(css.includes("--layer-1: 1;"), "a top-level `other` group should be unwrapped");
	});

	test("does not unwrap an `other` key nested deeper in the tree", () => {
		const figmaExport = {
			sizing: {
				other: {
					"gap-1": { value: "4px" },
				},
			},
		};

		const css = build(figmaExport, "tokens.css", {
			inputTypeTokens: true,
			inputTypeSyntax: "figma",
		});

		assert.ok(
			css.includes("--sizing-other-gap-1: 4px;"),
			"a nested `other` key is just a regular token group with that name, and must be left alone"
		);
	});

	test("collapses a redundant nested colors.color group instead of keeping both levels", () => {
		const figmaExport = {
			colors: {
				color: {
					primary: { value: "#1d4ed8" },
				},
			},
		};

		const css = build(figmaExport, "tokens.css", {
			inputTypeTokens: true,
			inputTypeSyntax: "figma",
		});

		assert.ok(css.includes("--colors-primary: #1d4ed8;"));
		assert.ok(!css.includes("--colors-color-primary"), "the redundant inner `color` key should be collapsed away");
	});

	test("collapses a redundant nested colors.colors group the same way", () => {
		const figmaExport = {
			colors: {
				colors: {
					primary: { value: "#1d4ed8" },
				},
			},
		};

		const css = build(figmaExport, "tokens.css", {
			inputTypeTokens: true,
			inputTypeSyntax: "figma",
		});

		assert.ok(css.includes("--colors-primary: #1d4ed8;"));
		assert.ok(!css.includes("--colors-colors-primary"), "the redundant inner `colors` key should be collapsed away");
	});
});
