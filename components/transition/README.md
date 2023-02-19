# Fylgja - Transition

[![NPM version](https://img.shields.io/npm/v/@fylgja/transition)](https://www.npmjs.org/package/@fylgja/transition)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Add transitions with ease, with the power of CSS variables.

## Installation

```bash
npm install @fylgja/transition
```

Then include the component in to your code via;

```scss
@use "@fylgja/transition";
// Or via PostCSS import
@import "@fylgja/transition";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/transition" with ($transition-layer: "utilities");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/transition" layer("utilities");
```

## How to use

For more information see the [transition docs on the Fylgja.dev](https://fylgja.dev/components/transition/).
