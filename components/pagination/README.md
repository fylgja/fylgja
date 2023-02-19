# Fylgja - Pagination

[![NPM version](https://img.shields.io/npm/v/@fylgja/pagination)](https://www.npmjs.org/package/@fylgja/pagination)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The pagination component makes it easy to build many pagination patterns,
like button only next previous nav or dots nav.

## Installation

```bash
npm install @fylgja/pagination
```

Then include the component in to your code via;

```scss
@use "@fylgja/pagination";
// Or via PostCSS import
@import "@fylgja/pagination";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/pagination" with ($pagination-layer: "components");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/pagination" layer("components");
```

## How to use

For more information see the [pagination docs on the Fylgja.dev](https://fylgja.dev/components/pagination/).
