# Fylgja - List

[![NPM version](https://img.shields.io/npm/v/@fylgja/list)](https://www.npmjs.org/package/@fylgja/list)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The list component adds more control on how you can style lists.

By adding a custom marker option with full flexibility to style and animate.

## Installation

```bash
npm install @fylgja/list
```

Then include the component in to your code via;

```scss
@use "@fylgja/list";
// Or via PostCSS import
@import "@fylgja/list";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/list" with ($list-layer: "components");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/list" layer("components");
```

## How to use

For more information see the [list docs on the Fylgja.dev](https://fylgja.dev/components/list/).
