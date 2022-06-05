# Fylgja - Z Layer

[![NPM version](https://img.shields.io/npm/v/@fylgja/z-layer)](https://www.npmjs.org/package/@fylgja/z-layer)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The Fylgja z-layer offers Design Tokens (CSS props) for consistent and semantic z-indexing.

## Installation

```bash
npm install @fylgja/z-layer
```

Then include the component in to your code via;

```scss
@use "@fylgja/z-layer";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/z-layer"; // *
```

## How to use

This component comes in 3 syntaxes.

- SCSS, offered in both:
  - the SCSS variable syntax
  - the CSS variable syntax
- CSS variables
- Javascript Style Tokens,
  if you want to use it in a Javascript based environment, like React or Vue.

### SCSS version

```scss
@use "@fylgja/z-layer" as *;

.style {
    z-index: $layer-1;
}

// CSS Syntax
@use "@fylgja/z-layer/props";

.style {
    z-index: var(--layer-1);
}
```

### CSS version

```css
@import "@fylgja/z-layer";

.style {
    z-index: var(--layer-1);
}
```

### Javascript

```js
import props from "@fylgja/z-layer"

const style = {
    zIndex: props.layer[1]
}
```

## Config

The following variables are available.

With the CSS variables you can use the same name, only with `--` as prefix,
instead of `$`.

```scss
$layer1: 1;
$layer2: 2;
$layer3: 4;
$layer4: 6;
$layer5: 8;
```

## Tips

### Index values

You don't need high z-index values structure!

If you keep the index layer to a specific structure,
you can prevent index override issues.

For example, Something that is layered;

- and comes after the another element, then it does not need any z-index values.
- and comes before the another element, then always try to keep the z-index value maxed to 1 or 2.
- and is something like a sticky or fixed header, keep the z-index around 4 or 6
- and is something like modal or dialog, keep the z-index around 8

### 3de party z-indexes

Now this one of those things that will always causes issues in your project.

Best is to override the z-index,
to something that matches the same value in you project.

```scss
.3de-party-component {
    z-index: $layer2 !important;
}
```

This better then changing your own styles,
to match there ridicules z-index value.

Lets hope 3de party vendors will start to support CSS variables in there CSS 🤞

### CSS grid can be layered

If you need a component to be layered, and also to be content aware,
its probably better to use CSS grid instead.

You can still use this package with `position: relative`,
if the order of the DOM is mixed.
