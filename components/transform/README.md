# Fylgja - Transform

[![NPM version](https://img.shields.io/npm/v/@fylgja/transform)](https://www.npmjs.org/package/@fylgja/transform)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Add transforms with ease, with the power of CSS variables.

## Installation

```bash
npm install @fylgja/transform
```

Then include the component in to your code via;

```scss
@use "@fylgja/transform";
// Or via PostCSS import
@import "@fylgja/transform";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/transform" with ($transform-layer: "utilities");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/transform" layer("utilities");
```

## How to use

For more information see the [transform docs on the Fylgja.dev](https://fylgja.dev/components/transform/).
