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

To use the aspect-ratio, create element with the class `.aspect-ratio`,
any child of the aspect-ratio will now always be show in the ratio set by the class.

_16/9 is the default ratio._

To edit the ratio use the css variable with the same name.

```html
<div class="aspect-ratio" style="--aspect-ratio: 21/9;">..</div>
```

## Config

As with almost all of our components, CSS variables can be configured to add your own look/style.

Want direct control on the base styles, here are the following SCSS variables can you modify.

```scss
$enable-aspect-ratio-layer: false !default;

$aspect-ratio-layer-name: components !default;

$aspect-ratio: "16/9" !default;
```
