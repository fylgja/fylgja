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
// Or via PostCSS and other options as plain CSS
@import "@fylgja/aspect-ratio/aspect-ratio.css";
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
$aspect-ratio: "16/9" !default;
```

## PostCSS Calc & CSSNano issue

At the moment PostCSS Calc, which is also part of CSSNano,
has an open issue where is removes the parentheses around a nested calc,
this breaks the CSS aspect ratio calc.

You can at the moment work around this issue by;

- Wrapping the value from the CSS variable in parentheses.
- Using a multiplier instead
- CSSNano: disabling the calc minification

```js
cssnano: {
    preset: ['default', { calc: false }]
}
```

[Find more about the postcss/postcss-calc issue on the github issue#91](https://github.com/postcss/postcss-calc/issues/91)
