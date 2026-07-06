import { propsBuilder } from "../index.js";
import { props, propsKeys, designTokens, stitchMarkdown } from "./fixtures.js";

// File types for just props
propsBuilder(props, "tests/_fylgja.json");
propsBuilder(props, "tests/_fylgja.tokens.json");
propsBuilder(props, "tests/_fylgja.figma-tokens.json");
propsBuilder(props, "tests/_fylgja.figma-tokens.sync.json", {
	wrapper: "fylgja",
});
propsBuilder(props, "tests/_fylgja.style-dictionary-tokens.json");
propsBuilder(props, "tests/_tokens.scss");
propsBuilder(props, "tests/_tokens.css");
propsBuilder(props, "tests/_jit-tokens.js", { parseAs: "css-jit" });

// With custom selector
propsBuilder(props, "tests/_tokens-selector.css", {
	selector: ".fylgja-test-zone",
});

// For Tailwind v4
propsBuilder(props, "tests/_tokens-tw4.css", {
	selector: "@theme",
});

// Only render keyframes
propsBuilder(propsKeys, "tests/_tokens-key.css");
propsBuilder(propsKeys, "tests/_tokens-key.scss");
propsBuilder(propsKeys, "tests/_tokens-key.json");

// From design token file
propsBuilder(designTokens, "tests/_design.tokens.css", {
	inputTypeTokens: true,
	inputTypeSyntax: "figma",
});

// From a Google Stitch Markdown export
propsBuilder(stitchMarkdown, "tests/_stitch-tokens.css", {
	inputTypeTokens: true,
	inputTypeSyntax: "stitch",
});
