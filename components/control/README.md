# Fylgja - Control

[![NPM version](https://img.shields.io/npm/v/@fylgja/control)](https://www.npmjs.org/package/@fylgja/control)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The control component styles the default `input[radio]` and `input[checkbox]`,
allowing an easier control on the style of both these elements.

## Installation

```bash
npm install @fylgja/control
```

Then include the component in to your code via;

```scss
@use "@fylgja/control";
// Or via PostCSS import
@import "@fylgja/control";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/control" with ($control-layer: "components");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/control" layer("components");
```

## How to use

For more information see the [control docs on the Fylgja.dev](https://fylgja.dev/components/control/).
