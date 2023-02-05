# Fylgja - Scrollbar

[![NPM version](https://img.shields.io/npm/v/@fylgja/scrollbar)](https://www.npmjs.org/package/@fylgja/scrollbar)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Customize or hide the scrollbar with ease.

## Installation

```bash
npm install @fylgja/scrollbar
```

Then include the component in to your code via;

```scss
@use "@fylgja/scrollbar";
// Or via PostCSS import
@import "@fylgja/scrollbar";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/scrollbar" with ($enable-scrollbar-layer: true);
// Or via PostCSS import
@import "@fylgja/scrollbar/layer";
```

## How to use

By default `@fylgja/scrollbar` offers 2 scrollbar styles.

- `.hide-scrollbar`
- `.thin-scrollbar`

Both are based on the browser default styles thats is supported by Firefox.

Giving a close cross browser support to the scrollbar style.

Apply the scrollbar style to any element that has overflow and so has a scrollbar.

```html
<div class="thin-scrollbar">
    ...overflowing content here
</div>
```

### Cross browser support

Currently the scrollbar styles are split in the newer specification that is only supported by Firefox.

And the webkit version that is supported by all moderne browsers except Firefox.

This CSS component mimics the newer spec with the webkit version.

And so limits the possibilities found in the webkit version.

Making this CSS component as safe solution for a near cross browser style, with minor OS differences.

### Mixin (SCSS only)

This CSS component also ships with a handy SCSS mixin that you can use via;

```scss
@use "@fylgja/scrollbar/helper" as *;

@include scrollbar(
    $thumb, // thumb color
    $track, // track color
    $width: null, // width of the scrollbar
    $radius: 0.5rem // border radius of the scrollbar, webkit only
    $width-size: if($width, ..) // $width setters for the older spec
    $width-name: if($width, ..) // $width setters for the newer spec
);
```

This mixin will create a near cross browser scrollbar.

> `0.5rem` is the radius found in most OS scrollbars

## Config

Want more control on the base styles, than the CSS variables,
Here are the following SCSS variables you can modify.

```scss
$enable-scrollbar-layer: false !default;

$scrollbar-layer-name: utilities !default;

$scrollbar-thumb-color: rgba($root-fg, 25%) !default;
$scrollbar-track-color: rgba($root-fg, 0%) !default;
```
