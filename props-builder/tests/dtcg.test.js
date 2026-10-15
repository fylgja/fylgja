// Fylgja (https://fylgja.dev)
// Licensed under MIT Open Source

import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { propsBuilder } from "../index.js";
import { parseCssColor } from "../src/formats/color.js";
import { isFileType } from "../src/utils.js";

const build = (input, filename, options) =>
	propsBuilder(input, filename, { ...options, writeToFile: false });

const importTokens = (tokens) =>
	JSON.parse(build(tokens, "props.json", { inputTypeTokens: true }));

const silenceWarnings = (t) => t.mock.method(console, "warn", () => {});

describe("importing Design Tokens 2025.10 values", () => {
	test("converts every color space to its CSS color function", () => {
		const color = (colorSpace, components, extra = {}) => ({
			$type: "color",
			$value: { colorSpace, components, ...extra },
		});

		assert.deepEqual(
			importTokens({
				hex: color("srgb", [1, 0, 1], { hex: "#ff00ff" }),
				srgb: color("srgb", [1, 0, 0.5], { alpha: 0.5, hex: "#ff0080" }),
				hsl: color("hsl", ["none", 0, 100]),
				hwb: color("hwb", [330, 0, 0]),
				oklch: color("oklch", [0.7, 0.1, 200]),
				p3: color("display-p3", [1, 0, 0]),
			}),
			{
				hex: "#ff00ff",
				srgb: "color(srgb 1 0 0.5 / 0.5)",
				hsl: "hsl(none 0% 100%)",
				hwb: "hwb(330 0% 0%)",
				oklch: "oklch(0.7 0.1 200)",
				p3: "color(display-p3 1 0 0)",
			},
		);
	});

	test("converts dimensions, durations, cubic béziers, font families and weights", () => {
		assert.deepEqual(
			importTokens({
				size: { $type: "dimension", $value: { value: 0.5, unit: "rem" } },
				duration: { $type: "duration", $value: { value: 200, unit: "ms" } },
				ease: { $type: "cubicBezier", $value: [0.5, 0, 1, 1] },
				family: { $type: "fontFamily", $value: ["Helvetica Neue", "sans-serif"] },
				familySingle: { $type: "fontFamily", $value: "Roboto Slab" },
				weight: { $type: "fontWeight", $value: "semi-bold" },
			}),
			{
				size: "0.5rem",
				duration: "200ms",
				ease: "cubic-bezier(0.5, 0, 1, 1)",
				family: '"Helvetica Neue", sans-serif',
				familySingle: '"Roboto Slab"',
				weight: 600,
			},
		);
	});

	test("converts composite tokens into CSS shorthands", () => {
		const px = (value) => ({ value, unit: "px" });
		const black = { colorSpace: "srgb", components: [0, 0, 0], hex: "#000000" };

		assert.deepEqual(
			importTokens({
				border: {
					$type: "border",
					$value: { color: "{color.brand}", width: px(1), style: "solid" },
				},
				transition: {
					$type: "transition",
					$value: {
						duration: { value: 200, unit: "ms" },
						delay: { value: 0, unit: "ms" },
						timingFunction: [0.5, 0, 1, 1],
					},
				},
				shadow: {
					$type: "shadow",
					$value: [
						{ color: black, offsetX: px(0), offsetY: px(1), blur: px(2), spread: px(0) },
						{ color: black, offsetX: px(0), offsetY: px(1), blur: px(0), spread: px(0), inset: true },
					],
				},
				gradient: {
					$type: "gradient",
					$value: [
						{ color: black, position: 0 },
						{ color: "{color.brand}", position: "{position.end}" },
					],
				},
			}),
			{
				border: "1px solid var(--color-brand)",
				transition: "200ms cubic-bezier(0.5, 0, 1, 1) 0ms",
				shadow: "0px 1px 2px 0px #000000, inset 0px 1px 0px 0px #000000",
				gradient: "#000000 0%, var(--color-brand) calc(var(--position-end) * 100%)",
			},
		);
	});

	test("splits typography tokens into a custom property per part", () => {
		const css = build(
			{
				heading: {
					$type: "typography",
					$value: {
						fontFamily: "{font.serif}",
						fontSize: { value: 42, unit: "px" },
						fontWeight: 700,
						letterSpacing: { value: 0.1, unit: "px" },
						lineHeight: 1.2,
					},
				},
			},
			"tokens.css",
			{ inputTypeTokens: true },
		);

		assert.equal(
			css,
			":where(:root) {\n" +
				"\t--heading-font-family: var(--font-serif);\n" +
				"\t--heading-font-size: 42px;\n" +
				"\t--heading-font-weight: 700;\n" +
				"\t--heading-letter-spacing: 0.1px;\n" +
				"\t--heading-line-height: 1.2;\n" +
				"}\n",
		);
	});

	test("infers the type from the value shape when there is no $type", () => {
		assert.deepEqual(
			importTokens({
				color: { $value: { colorSpace: "srgb", components: [0, 0, 0], hex: "#000000" } },
				size: { $value: { value: 4, unit: "px" } },
			}),
			{ color: "#000000", size: "4px" },
		);
	});

	test("keeps legacy string values as is", () => {
		assert.deepEqual(
			importTokens({ size: { $type: "dimension", $value: "calc({spacing} * 2)" } }),
			{ size: "calc(var(--spacing) * 2)" },
		);
	});
});

describe("importing Design Tokens 2025.10 groups and references", () => {
	test("inherits $type from parent groups", () => {
		assert.deepEqual(
			importTokens({
				ease: {
					$type: "cubicBezier",
					in: { $value: [0.5, 0, 1, 1] },
				},
			}),
			{ ease: { in: "cubic-bezier(0.5, 0, 1, 1)" } },
		);
	});

	test("writes $root tokens without a suffix", () => {
		const tokens = {
			spacing: {
				$type: "dimension",
				$root: { $value: { value: 4, unit: "px" } },
				lg: { $value: { value: 8, unit: "px" } },
			},
			gap: { $value: "{spacing.$root}" },
		};

		assert.equal(
			build(tokens, "tokens.css", { inputTypeTokens: true }),
			":where(:root) {\n\t--spacing: 4px;\n\t--spacing-lg: 8px;\n\t--gap: var(--spacing);\n}\n",
		);
	});

	test("deep merges $extends groups, with local tokens overriding the extended ones", () => {
		assert.deepEqual(
			importTokens({
				button: {
					$type: "dimension",
					padding: { $value: { value: 4, unit: "px" } },
					radius: { $value: { value: 2, unit: "px" } },
				},
				"button-lg": {
					$extends: "{button}",
					padding: { $value: { value: 8, unit: "px" } },
				},
			}),
			{
				button: { padding: "4px", radius: "2px" },
				"button-lg": { padding: "8px", radius: "2px" },
			},
		);
	});

	test("throws on a circular $extends", () => {
		assert.throws(
			() => importTokens({ a: { $extends: "{b}" }, b: { $extends: "#/a" } }),
			/Circular "\$extends"/,
		);
	});

	test("turns a $ref to a token into a CSS variable, and resolves a $ref into a value", () => {
		assert.deepEqual(
			importTokens({
				blue: {
					$type: "color",
					$value: { colorSpace: "oklch", components: [0.5, 0.2, 260] },
				},
				link: { $type: "color", $value: { $ref: "#/blue/$value" } },
				sky: {
					$type: "color",
					$value: {
						colorSpace: "oklch",
						components: [0.8, 0.1, { $ref: "#/blue/$value/components/2" }],
					},
				},
			}),
			{
				blue: "oklch(0.5 0.2 260)",
				link: "var(--blue)",
				sky: "oklch(0.8 0.1 260)",
			},
		);
	});

	test("throws a clear error for a $ref to another file", () => {
		assert.throws(
			() => importTokens({ link: { $value: { $ref: "colors.json#/blue" } } }),
			/only references within the same document are supported/,
		);
	});
});

describe("importing a Design Tokens 2025.10 Resolver document", () => {
	const dimension = (value) => ({ $type: "dimension", $value: { value, unit: "px" } });
	const color = (hex) => ({ $type: "color", $value: { colorSpace: "srgb", components: [0, 0, 0], hex } });

	const resolver = {
		version: "2025.10",
		name: "Test",
		sets: {
			base: { sources: [{ size: { 1: dimension(4) } }] },
		},
		modifiers: {
			theme: {
				contexts: {
					light: [{ surface: color("#ffffff") }],
					dark: [{ surface: color("#000000") }],
				},
				default: "light",
			},
		},
		resolutionOrder: [
			{ $ref: "#/sets/base" },
			{ type: "set", name: "overrides", sources: [{ size: { 2: dimension(8) } }] },
			{ $ref: "#/modifiers/theme" },
		],
	};

	test("merges all sets and only the default modifier context", () => {
		assert.equal(
			build(resolver, "tokens.css", { inputTypeTokens: true }),
			":where(:root) {\n" +
				"\t--size-1: 4px;\n" +
				"\t--size-2: 8px;\n" +
				"\t--surface: #ffffff;\n" +
				"}\n",
		);
	});
});

describe("parsing CSS colors", () => {
	test("parses hex, legacy and modern color functions", () => {
		assert.deepEqual(parseCssColor("#f008"), {
			colorSpace: "srgb",
			components: [1, 0, 0],
			alpha: 0.533333333333,
			hex: "#ff0000",
		});
		assert.deepEqual(parseCssColor("rgba(255, 0, 0, 0.5)"), {
			colorSpace: "srgb",
			components: [1, 0, 0],
			alpha: 0.5,
			hex: "#ff0000",
		});
		assert.deepEqual(parseCssColor("hsl(220 40% 2% / 25%)"), {
			colorSpace: "hsl",
			components: [220, 40, 2],
			alpha: 0.25,
		});
		assert.deepEqual(parseCssColor("oklch(70% 50% 200deg)"), {
			colorSpace: "oklch",
			components: [0.7, 0.2, 200],
		});
		assert.deepEqual(parseCssColor("color(display-p3 1 0 none)"), {
			colorSpace: "display-p3",
			components: [1, 0, "none"],
		});
	});

	test("does not parse colors with var() or calc()", () => {
		assert.equal(parseCssColor("oklch(99% calc(.03 * var(--chroma, 1)) var(--hue, 0))"), undefined);
		assert.equal(parseCssColor("red"), undefined);
	});
});

describe("Design Tokens 2025.10 output", () => {
	const props = {
		spacing: "0.25rem",
		size: { 1: "calc(var(--spacing) * 1)", heading: "36ch" },
		gap: "var(--size-1)",
		layer: { 1: 1 },
		ratio: { widescreen: "16/9" },
		duration: { fast: "150ms" },
		ease: { 1: "cubic-bezier(0.25, 0.1, 0.1, 1)" },
		font: { family: "'Inter', system-ui, sans-serif", weight: 700 },
		"shadow-color": {
			DEFAULT: "hsl(0 0 0 / 10%)",
			"-@": "@property --shadow-color { syntax: '<color>'; inherits: true; initial-value: black; }",
		},
		shadow: { 1: "0 2px 1px -1px var(--shadow-color), inset 0 1px #000" },
		"shadow-color-@media:dark": "hsl(220 40% 2% / 25%)",
	};

	const expectedTokens = {
		spacing: { $type: "dimension", $value: { value: 0.25, unit: "rem" } },
		layer: { 1: { $type: "number", $value: 1 } },
		ratio: { widescreen: { $type: "number", $value: 16 / 9, $description: "16/9" } },
		duration: { fast: { $type: "duration", $value: { value: 150, unit: "ms" } } },
		ease: { 1: { $type: "cubicBezier", $value: [0.25, 0.1, 0.1, 1] } },
		font: {
			family: { $type: "fontFamily", $value: ["Inter", "system-ui", "sans-serif"] },
			weight: { $type: "fontWeight", $value: 700 },
		},
		"shadow-color": {
			$root: { $type: "color", $value: { colorSpace: "hsl", components: [0, 0, 0], alpha: 0.1 } },
		},
		shadow: {
			1: {
				$type: "shadow",
				$value: [
					{
						color: "{shadow-color.$root}",
						offsetX: { value: 0, unit: "px" },
						offsetY: { value: 2, unit: "px" },
						blur: { value: 1, unit: "px" },
						spread: { value: -1, unit: "px" },
					},
					{
						color: { colorSpace: "srgb", components: [0, 0, 0], hex: "#000000" },
						offsetX: { value: 0, unit: "px" },
						offsetY: { value: 1, unit: "px" },
						blur: { value: 0, unit: "px" },
						spread: { value: 0, unit: "px" },
						inset: true,
					},
				],
			},
		},
	};

	test("writes a Resolver document with a single set of typed tokens, skipping what the format can't express", (t) => {
		const warn = silenceWarnings(t);
		const resolver = JSON.parse(
			build(props, "fylgja.resolver.json", { name: "Fylgja", description: "Fylgja tokens" }),
		);

		assert.deepEqual(resolver, {
			version: "2025.10",
			name: "Fylgja",
			description: "Fylgja tokens",
			resolutionOrder: [{ type: "set", name: "Fylgja", sources: [expectedTokens] }],
		});
		assert.match(
			warn.mock.calls[0].arguments[0],
			/Skipped 3 token\(s\).*--size-1, --size-heading, --gap$/,
		);
	});

	test("round trips a Resolver document back to the same CSS", (t) => {
		silenceWarnings(t);
		const { size, gap, ...supported } = props;
		const resolver = JSON.parse(build(supported, "tokens.resolver.json"));
		const css = build(resolver, "tokens.css", { inputTypeTokens: true });

		assert.ok(css.includes("\t--spacing: 0.25rem;"));
		assert.ok(css.includes("\t--shadow-color: hsl(0 0% 0% / 0.1);"));
		assert.ok(css.includes("\t--shadow-1: 0px 2px 1px -1px var(--shadow-color), inset 0px 1px 0px 0px #000000;"));
		assert.ok(css.includes("\t--font-family: Inter, system-ui, sans-serif;"));
		assert.ok(!css.includes("prefers-color-scheme"));
	});

	test("detects the dtcg output from the .resolver.json extension", () => {
		assert.equal(isFileType("fylgja.resolver.json"), "dtcg");
		assert.equal(isFileType("fylgja.tokens.json"), "tokens");
	});
});
