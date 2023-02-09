# Fylgja - Aspect Ratio

[![NPM version](https://img.shields.io/npm/v/@fylgja/aspect-ratio)](https://www.npmjs.org/package/@fylgja/aspect-ratio)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The aspect ratio component is used to set videos to a certain responsive aspect ratio,

but can also be used for images and other content.

## Installation

```bash
npm install @fylgja/aspect-ratio
```

Then include the component in to your code via;

```scss
@use "@fylgja/aspect-ratio";
// Or via PostCSS import
@import "@fylgja/aspect-ratio";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/aspect-ratio" with ($enable-aspect-ratio-layer: true);
// Or via PostCSS import
@import "@fylgja/aspect-ratio/layer";
```

## How to use

For more information see the [aspect-ratio docs on the Fylgja.dev](https://fylgja.dev/components/aspect-ratio/).
