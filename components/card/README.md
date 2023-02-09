# Fylgja - Card

[![NPM version](https://img.shields.io/npm/v/@fylgja/card)](https://www.npmjs.org/package/@fylgja/card)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The card component is a wrapper component.

It allows you to make visual sectioned content,
that is not part of the main flow.

## Installation

```bash
npm install @fylgja/card
```

Then include the component in to your code via;

```scss
@use "@fylgja/card";
// Or via PostCSS import
@import "@fylgja/card";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/card" with ($enable-card-layer: true);
// Or via PostCSS import
@import "@fylgja/card/layer";
```

## How to use

For more information see the [card docs on the Fylgja.dev](https://fylgja.dev/components/card/).
