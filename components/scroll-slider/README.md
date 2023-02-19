# Fylgja - Scroll-slider

[![NPM version](https://img.shields.io/npm/v/@fylgja/scroll-slider)](https://www.npmjs.org/package/@fylgja/scroll-slider)
![license](https://img.shields.io/github/license/fylgja/fylgja)

This CSS slider component allows you to make sliders with ease,
and has no requirements to any Javascript.

The only reason to add some additional Javascript,
would be to add extra supporting functions.

Like a navigation and a active state.

## Installation

```bash
npm install @fylgja/scroll-slider
```

Then include the component in to your code via;

```scss
@use "@fylgja/scroll-slider";
// Or via PostCSS import
@import "@fylgja/scroll-slider";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/scroll-slider" with ($scroll-layer: "components");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/scroll-slider" layer("components");
```

## How to use

For more information see the [scroll-slider docs on the Fylgja.dev](https://fylgja.dev/components/scroll-slider/).
