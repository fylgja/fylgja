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

This component comes in 4 syntax versions.

The SCSS offers both the default import, same as the CSS version,
and offers the helper with just SCSS variables.

The CSS version is the same as the SCSS version.

The Javascript and JSON tokens are also available,
if you want to combine it a with anther design token systems,
or use it in a React or Vue based project.

### SCSS version

```scss
@use "@fylgja/z-layer" as *;

.layer {
    z-index: $layer1;
}
```

### CSS version

```css
.layer {
    z-index: var(--layer1);
}
```

### Javascript

```js
import zLayer from "@fylgja/z-layer"
import zLayer from "@fylgja/z-layer/tokens.json"; // Or as JSON
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
you can prevent index override issue.

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

Let hope 3de party vendors start to support CSS variables 

### CSS grid can be layered

If you need a component to be layered, and also to be content aware,
its probably better to use CSS grid instead.

You can still use this package with `position: relative`,
but it better avoided.
