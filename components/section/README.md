# Fylgja - Section

[![NPM version](https://img.shields.io/npm/v/@fylgja/section)](https://www.npmjs.org/package/@fylgja/section)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The Section component is a wrapper component to show content in a sectioned area.

Like a Hero, Banner or just simple section with a different color in the page.

## Installation

```bash
npm install @fylgja/section
```

Then include the component in to your code via;

```scss
@use "@fylgja/section";
// Or via PostCSS import
@import "@fylgja/section";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/section" with ($section-layer: "components");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/section" layer("components");
```

## How to use

For more information see the [section docs on the Fylgja.dev](https://fylgja.dev/components/section/).
