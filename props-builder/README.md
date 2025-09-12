# Fylgja - Props Builder

[![NPM version](https://img.shields.io/npm/v/@fylgja/props-builder)](https://www.npmjs.com/package/@fylgja/props-builder)
[![NPM Downloads](https://img.shields.io/npm/dt/%40fylgja%2Fprops-builder)](https://www.npmjs.com/package/@fylgja/props-builder)
[![License](https://img.shields.io/github/license/fylgja/fylgja?color=%23234)](https://github.com/fylgja/fylgja/blob/main/LICENSE)

The Fylgja Props Builder simplifies the creation of Design Tokens (CSS custom properties)
by converting JavaScript objects or JSON files into CSS variables or other token formats.

This tool empowers you to construct comprehensive Design Token sets with ease.

## Installation

You can install Fylgja Props Builder via npm or other Node-based package managers like pnpm or bun:

```sh
npm install @fylgja/props-builder
```

## Usage

### Basic Usage with JavaScript

Import the propsBuilder function into your Node.js scripts:

```js
import { propsBuilder } from "@fylgja/props-builder";
```

Then, use it to generate output files based on your configuration:

```js
import { propsBuilder } from "@fylgja/props-builder";

propsBuilder(
	props, // Required: JavaScript object containing your design tokens.
    filename, // Required: Name of the output file.
    {
        parseAs: "auto", // Optional: Specifies the output format. Defaults to "auto".
        writeToFile: true, // Optional: If false, outputs the generated content to the console. Defaults to true.
        selector: ":where(:root)", // Optional: CSS selector for custom property declarations (CSS output only).
        wrapper: "", // Optional: Wrapper for design system-specific formatting (e.g., Figma).
        inputTypeTokens: false, // Optional: Set to true if the input `props` are in a design token format. Defaults to false.
        inputTypeSyntax: "default", // Optional: Specifies the syntax of the input tokens if `inputTypeTokens` is true.
    }
)
```

For basic usage, only the `props` and `filename` arguments are necessary.

The optional parameters provide flexibility for advanced scenarios.

```js
import { propsBuilder } from "@fylgja/props-builder";

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

This example demonstrates a simple use case with a plain JavaScript object.

For more advanced scenarios, including how to use different JSON file formats, see the "From Design Tokens to CSS" section below.

### From Design Tokens to CSS

Using the Props Builder with a JSON file is a common use case. The process is straightforward, with a small adjustment depending on the format of your JSON file.

#### 1. Create your Design Tokens file

Your JSON file can be a simple key-value object, or it can follow a standard format like the W3C Design Tokens spec or the format exported by the Figma Tokens plugin.

#### 2. Create a build script

Create a Node.js script (e.g., `build.js`) to read your tokens file and run the builder.

```js
import { readFileSync } from "node:fs";
import { propsBuilder } from "@fylgja/props-builder";

// Read and parse the JSON file
const tokens = JSON.parse(readFileSync("path/to/your/tokens.json", "utf-8"));

// 👇 Configure the builder based on your token format
const options = {
    // inputTypeTokens: ...,
    // inputTypeSyntax: ...,
};

// Build the CSS file
propsBuilder(tokens, "tokens.css", options);

console.log("Successfully built tokens.css!");
```

#### 3. Configure the builder

The key step is to configure the `options` object based on your JSON file's format.

* **For a simple, key-value JSON file:**
    You don't need any special options. The builder handles it by default.
    ```js
    const options = {};
    ```

* **For a W3C Design Tokens spec file:**
    Set `inputTypeTokens` to `true`.
    ```js
    const options = { inputTypeTokens: true };
    ```

* **For a Figma Tokens file:**
    Set `inputTypeTokens` to `true` and `inputTypeSyntax` to `'figma'`.
    ```js
    const options = {
        inputTypeTokens: true,
        inputTypeSyntax: "figma"
    };
    ```

#### 4. Run the build script

Finally, run your script from the terminal:

```sh
node build.js
```

This will generate a `tokens.css` file with your design tokens converted to CSS Custom Properties.
