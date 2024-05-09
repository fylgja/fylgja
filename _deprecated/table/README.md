# Fylgja - Table

[![NPM version](https://img.shields.io/npm/v/@fylgja/table)](https://www.npmjs.org/package/@fylgja/table)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The table component is super easy to use,
since it is a zero config module that styles the table directly.

Allowing you to focus on the table it self.

## Installation

```bash
npm install @fylgja/table
```

Then include the component in to your code via;

```scss
@use "@fylgja/table";
// Or via PostCSS import
@import "@fylgja/table";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/table" with ($table-layer: "base");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/table" layer("base");
```

## How to use

For more information see the [table docs on the Fylgja.dev](https://fylgja.dev/components/table/).
