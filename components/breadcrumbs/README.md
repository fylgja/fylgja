# Fylgja - Breadcrumbs

[![NPM version](https://img.shields.io/npm/v/@fylgja/breadcrumbs)](https://www.npmjs.org/package/@fylgja/breadcrumbs)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The breadcrumbs component is a navigational aid,
it allows users to maintain awareness of their location in an app or a website.

## Installation

```bash
npm install @fylgja/breadcrumbs
```

Then include the component in to your code via;

```scss
@use "@fylgja/breadcrumbs";
// Or via PostCSS import
@import "@fylgja/breadcrumbs";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/breadcrumbs" with ($breadcrumbs-layer: "components");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/breadcrumbs" layer("components");
```

## How to use

For more information see the [breadcrumbs docs on the Fylgja.dev](https://fylgja.dev/components/breadcrumbs/).
