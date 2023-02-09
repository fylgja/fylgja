# Fylgja - Badge

[![NPM version](https://img.shields.io/npm/v/@fylgja/badge)](https://www.npmjs.org/package/@fylgja/badge)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The badges component serves as a small blocks to indicate notifications, or to highlight an item.

## Installation

```bash
npm install @fylgja/badge
```

Then include the component in to your code via;

```scss
@use "@fylgja/badge";
// Or via PostCSS import
@import "@fylgja/badge";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/badge" with ($enable-badge-layer: true);
// Or via PostCSS import
@import "@fylgja/badge/layer";
```

## How to use

For more information see the [badge docs on the Fylgja.dev](https://fylgja.dev/components/badge/).
