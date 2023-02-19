# Fylgja - Avatar

[![NPM version](https://img.shields.io/npm/v/@fylgja/avatar)](https://www.npmjs.org/package/@fylgja/avatar)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The avatar component allows you to make an avatar style with ease.

## Installation

```bash
npm install @fylgja/avatar
```

Then include the component in to your code via;

```scss
@use "@fylgja/avatar";
// Or via PostCSS import
@import "@fylgja/avatar";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/avatar" with ($avatar-layer: "components");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/avatar" layer("components");
```

## How to use

For more information see the [avatar docs on the Fylgja.dev](https://fylgja.dev/components/avatar/).
