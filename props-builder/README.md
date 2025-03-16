# Fylgja - Props Builder

[![NPM version](https://img.shields.io/npm/v/@fylgja/props-builder)](https://www.npmjs.com/package/@fylgja/props-builder)
[![NPM Downloads](https://img.shields.io/npm/dt/%40fylgja%2Fprops-builder)](https://www.npmjs.com/package/@fylgja/props-builder)
[![License](https://img.shields.io/github/license/fylgja/fylgja?color=%23234)](/LICENSE)

The Fylgja Props Builder simplifies the creation of Design Tokens (CSS custom properties)
by converting JavaScript objects into CSS variables or JSON-based token systems.

This tool empowers you to construct comprehensive Design Token sets with ease.

> [!Note]
> Originally developed for the [Fylgja Tokens](https://fylgja.dev/library/tokens) package,
> this utility is also adaptable for use with other design systems.

## Installation

You can install Fylgja Props Builder via npm or other Node-based package managers like pnpm or bun:

```bash
npm install @fylgja/props-builder
```

## Usage

Import the propsBuilder function into your Node.js scripts:

```js
import { propsBuilder } from "../index.js";
```

Then, use it to generate output files based on your configuration:

```js
import { propsBuilder } from "../index.js";

propsBuilder(
	props, // Required: JavaScript object containing your design tokens.
    filename, // Required: Name of the output file.
    {
        parseAs: "auto", // Optional: Specifies the output format ("auto", "css", "json"). Defaults to "auto" (determined by file extension).
        writeToFile: true, // Optional: If false, outputs the generated content to the console. Defaults to true.
        selector: ":where(:root)", // Optional: CSS selector for custom property declarations (CSS output only).
        wrapper: "", // Optional: Wrapper for design system-specific formatting (e.g., Figma).
    }
)
```

For basic usage, only the `props` and `filename` arguments are necessary.

The optional parameters provide flexibility for advanced scenarios.

```js
import { propsBuilder } from "../index.js";

propsBuilder(
	{
		color: {
			red: "#f00",
			green: "#0f0",
			blue: "#00f",
		}
	},
	"output.css"
);
```

This will generate output.css with the following content:

```css
:where(:root) {
	--color-red: #f00;
	--color-green: #0f0;
	--color-blue: #00f;
}
```

This example demonstrates a simple use case,
but the Props Builder can handle complex and nested design token structures,
facilitating the creation of robust and scalable design systems.
