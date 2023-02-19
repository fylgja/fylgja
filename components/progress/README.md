# Fylgja - Progress

[![NPM version](https://img.shields.io/npm/v/@fylgja/progress)](https://www.npmjs.org/package/@fylgja/progress)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The progress component is used to show progress indication in a form or somethings else.

Fylgja supports both the native HTML progress element and the class based option.

## Installation

```bash
npm install @fylgja/progress
```

Then include the component in to your code via;

```scss
@use "@fylgja/progress";
// Or via PostCSS import
@import "@fylgja/progress";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/progress" with ($progress-layer: "components");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/progress" layer("components");
```

## How to use

For more information see the [progress docs on the Fylgja.dev](https://fylgja.dev/components/progress/).
