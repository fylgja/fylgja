# Fylgja - Gradient

[![NPM version](https://img.shields.io/npm/v/@fylgja/gradient)](https://www.npmjs.org/package/@fylgja/gradient)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Add gradient's with ease via the gradient utility class.

This component offers both the background and border versions,
which you can modify to your needs.

## Installation

```bash
npm install @fylgja/gradient
```

Then include the component in to your code via;

```scss
@import "@fylgja/gradient";
// Or via PostCSS import
@import "@fylgja/gradient";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/gradient" with ($gradient-layer: "components");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/gradient" layer("components");
```

## How to use

For more information see the [gradient docs on the Fylgja.dev](https://fylgja.dev/components/gradient/).
