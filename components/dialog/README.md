# Fylgja - Dialog

[![NPM version](https://img.shields.io/npm/v/@fylgja/dialog)](https://www.npmjs.org/package/@fylgja/dialog)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The dialog combines 3 components in 1, it a modal by default,
and with a small change it's a offcanvas,
notification popup aka the snackbar.

This code is super tiny compared to other solutions,
and it's super flexible.
Use it to have a modal on desktop and offcanvas on mobile,
simply by changing a few CSS variables.

## Installation

```bash
npm install @fylgja/dialog
```

Then include the component in to your code via;

```scss
@use "@fylgja/dialog";
// Or via PostCSS import
@import "@fylgja/dialog";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/dialog" with ($enable-dialog-layer: true);
// Or via PostCSS import
@import "@fylgja/dialog/layer";
```

## How to use

For more information see the [dialog docs on the Fylgja.dev](https://fylgja.dev/components/dialog/).
