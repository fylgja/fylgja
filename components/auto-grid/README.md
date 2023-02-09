# Fylgja - Auto Grid

[![NPM version](https://img.shields.io/npm/v/@fylgja/auto-grid)](https://www.npmjs.org/package/@fylgja/auto-grid)
![license](https://img.shields.io/github/license/fylgja/fylgja)

A super small grid with auto flowing behavior, based on the container size.

Using a similar method to container queries.

This grid uses a minmax method,
it fills the grid items based on the space available.

Where the min value is static value and the max value is `1fr`.

It creates a grid without needing to setup any columns and rows,

since the grid items will do this for you, following the **content first** approach!

## Installation

```bash
npm install @fylgja/auto-grid
```

Then include the component in to your code via;

```scss
@use "@fylgja/auto-grid";
// Or via PostCSS import
@import "@fylgja/auto-grid";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/auto-grid" with ($enable-auto-grid-layer: true);
// Or via PostCSS import
@import "@fylgja/auto-grid/layer";
```

## How to use

For more information see the [auto-grid docs on the Fylgja.dev](https://fylgja.dev/components/auto-grid/).
