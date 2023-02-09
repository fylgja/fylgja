# Fylgja - Aria-only

[![NPM version](https://img.shields.io/npm/v/@fylgja/aria-only)](https://www.npmjs.org/package/@fylgja/aria-only)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The aria-only (a.k.a. **sr-only**) visually hides elements.

But keeps them accessible to screen-readers and other aria tools.

## Installation

```bash
npm install @fylgja/aria-only
```

Then include the component in to your code via;

```scss
@use "@fylgja/aria-only";
// Or via PostCSS import
@import "@fylgja/aria-only";
```

### Media Query support

If you need support for media queries,
use the following import;

```scss
@use "@fylgja/aria-only" with ($enable-aria-only-mq: true);
// Or via PostCSS import
@import "@fylgja/aria-only/mq";
```

When enabled/used, the aria-only style can be used with the mq prefix,
for example: `md-aria-only`.

The `not-aria-only` option is exclusive to the mq option and unsets the aria-only styles.

For what mq options are available [see the mq package](https://fylgja.dev/components/mq/).

All mq values used by the `$aria-only-breakpoints` variable
take the values directly from the Fylgja Mq component.

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/aria-only" with ($enable-aria-only-layer: true);
// Or via PostCSS import
@import "@fylgja/aria-only/layer";
```

## How to use

For more information see the [aria-only docs on the Fylgja.dev](https://fylgja.dev/components/aria-only/).
