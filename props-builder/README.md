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
    name: "Design Tokens", // Optional: Name of the Design Tokens Resolver (dtcg output only).
    description: "", // Optional: Description of the Design Tokens Resolver (dtcg output only).
    inputTypeTokens: false, // Optional: Set to true if the input `props` are in a design token format. Defaults to false.
    inputTypeSyntax: "default", // Optional: Specifies the syntax of the input tokens if `inputTypeTokens` is true.
    stripPrefix: "", // Optional: Dot/dash separated key path (or array of keys) to unwrap, dropping wrapping keys (e.g. "tokens.values").
    rename: null, // Optional: Map of `{ [currentKey]: newKey }` applied recursively, to align naming (e.g. `{ colors: "color" }`).
  },
);
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
    },
  },
  "output.css",
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

### Output formats

The output format is picked from the filename, unless `parseAs` is set.

| Filename                          | `parseAs`          | Output                                          |
| --------------------------------- | ------------------ | ----------------------------------------------- |
| `*.css`                           | `css`              | CSS custom properties                           |
| `*.scss`                          | `scss`             | SCSS variables                                  |
| `*.js`, `*.mjs`, `*.cjs`, `*.json` | `mjs`, `cjs`, `json` | The props as is                               |
| `*.resolver.json`                 | `dtcg`             | Design Tokens Resolver (2025.10)                |
| `*tokens.json`                    | `tokens`           | Design Tokens (legacy draft syntax)             |
| `*figma-tokens.json`              | `figma`            | Figma Tokens                                    |
| `*style-dictionary-tokens.json`   | `style-dictionary` | Style Dictionary tokens                         |
|                                   | `css-jit`          | A flat object for JIT tools, like jit-props     |

### To Design Tokens 2025.10

The `dtcg` output follows the [Design Tokens 2025.10 specification](https://www.designtokens.org/tr/2025.10/).
Values are converted to typed token values, e.g. `0.5rem` becomes a `dimension` token with `{ "value": 0.5, "unit": "rem" }`,
and `var(--shadow-color)` becomes a `{shadow-color.$root}` reference.

```js
propsBuilder(props, "tokens/fylgja.resolver.json", { name: "Fylgja" });
```

All tokens go in a single set of a Resolver document. Dark mode values (`@media:dark`) are left out.

The specification has no way to express some CSS values, such as `calc()`, `clamp()`, `var()` inside a color, or units other than `px` and `rem` (or `ms` and `s` for durations).
These tokens are skipped with a warning, together with any token referencing them.

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

- **For a simple, key-value JSON file:**
  You don't need any special options. The builder handles it by default.

  ```js
  const options = {};
  ```

- **For a W3C Design Tokens spec file (including 2025.10 and Resolver files):**
  Set `inputTypeTokens` to `true`.

  ```js
  const options = { inputTypeTokens: true };
  ```

  Design Tokens 2025.10 values, such as color objects or dimensions, are converted to CSS values.
  Composite tokens become CSS shorthands (`border`, `shadow`, `transition`, and gradient color stops),
  except for `typography`, which becomes a custom property per part (e.g. `--heading-font-size`).
  Groups support `$type` inheritance, `$root` tokens, and `$extends`.
  Both `{token.path}` references and `$ref` JSON Pointers within the same file are supported.

  For a Resolver file, all sets are merged in the resolution order, and each modifier uses its `default` context.
  A `$ref` to another file is not supported, merge those files into a single document first.

- **For a Figma Tokens file:**
  Set `inputTypeTokens` to `true` and `inputTypeSyntax` to `'figma'`.

  ```js
  const options = {
    inputTypeTokens: true,
    inputTypeSyntax: "figma",
  };
  ```

- **For a Google Stitch Markdown export:**
  Set `inputTypeTokens` to `true` and `inputTypeSyntax` to `'stitch'`.
  Pass the raw Markdown file content (a string) as `props`, not a parsed object.
  Only the YAML frontmatter is used, and every key in it is converted to tokens, except for known metadata keys (`name`, `description`).
  The `colors` group is automatically renamed to the singular `color` (unless a `color` group already exists).
  ```js
  const options = {
    inputTypeTokens: true,
    inputTypeSyntax: "stitch",
  };
  ```

#### 4. Run the build script

Finally, run your script from the terminal:

```sh
node build.js
```

This will generate a `tokens.css` file with your design tokens converted to CSS Custom Properties.
