# Fylgja - Marquee

[![NPM version](https://img.shields.io/npm/v/@fylgja/marquee)](https://www.npmjs.org/package/@fylgja/marquee)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The marquee component lets you make infinite CSS sliders without any JavaScript.

This feature provides an efficient and lightweight way to create dynamic and engaging sliders that loop infinitely,
without the need for additional code.

## Installation

```bash
npm install @fylgja/marquee
```

Then include the component in to your code via;

```scss
@use "@fylgja/marquee";
// Or via PostCSS import
@import "@fylgja/marquee";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/marquee" with ($marquee-layer: "components");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/marquee" layer("components");
```

## How to use

For more information see the [marquee docs on the Fylgja.dev](https://fylgja.dev/components/marquee/).
