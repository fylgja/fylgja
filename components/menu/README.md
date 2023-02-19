# Fylgja - Menu

[![NPM version](https://img.shields.io/npm/v/@fylgja/menu)](https://www.npmjs.org/package/@fylgja/menu)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The menu component makes it easy to build common navigation patterns,
like a navbar or menu in a dropdown.

## Installation

```bash
npm install @fylgja/menu
```

Then include the component in to your code via;

```scss
@use "@fylgja/menu";
// Or via PostCSS import
@import "@fylgja/menu";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/menu" with ($menu-layer: "components");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/menu" layer("components");
```

## How to use

For more information see the [menu docs on the Fylgja.dev](https://fylgja.dev/components/menu/).
