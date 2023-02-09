# Container component

[![NPM version](https://img.shields.io/npm/v/@fylgja/container)](https://www.npmjs.org/package/@fylgja/container)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The container component is wrapper component,
to make all child elements fit better in the page.

## Installation

```bash
npm install @fylgja/container
```

Then include the component in to your code via;

```scss
@use "@fylgja/container";
// Or via PostCSS import
@import "@fylgja/container";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/container" with ($enable-container-layer: true);
// Or via PostCSS import
@import "@fylgja/container/layer";
```

## How to use

For more information see the [container docs on the Fylgja.dev](https://fylgja.dev/components/container/).
