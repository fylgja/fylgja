# Fylgja - Stretched-link

[![NPM version](https://img.shields.io/npm/v/@fylgja/stretched-link)](https://www.npmjs.org/package/@fylgja/stretched-link)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Make any component fully clickable via a nested link.

## Installation

```bash
npm install @fylgja/stretched-link
```

Then include the component in to your code via;

```scss
@use "@fylgja/stretched-link";
// Or via PostCSS import
@import "@fylgja/stretched-link";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/stretched-link" with ($stretched-link-layer: "utilities");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/stretched-link" layer("utilities");
```

## How to use

For more information see the [stretched-link docs on the Fylgja.dev](https://fylgja.dev/components/stretched-link/).
