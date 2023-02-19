# Fylgja - Hashlink

[![NPM version](https://img.shields.io/npm/v/@fylgja/hashlink)](https://www.npmjs.org/fylgja/hashlink)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The Hashlink is a small utility component,
which adds smooth scrolling to the page via CSS

and a scroll offset to any element with a id.

Making it perfect for hashlinks.
But also works with Javascript scrollto actions.

## Installation

```bash
npm install @fylgja/hashlink
```

Then include the component in to your code via;

```scss
@use "@fylgja/hashlink";
// Or via PostCSS import
@import "@fylgja/hashlink";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/hashlink" with ($hashlink-layer: "utilities");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/hashlink" layer("utilities");
```

## How to use

For more information see the [hashlink docs on the Fylgja.dev](https://fylgja.dev/components/hashlink/).
