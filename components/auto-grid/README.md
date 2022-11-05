# Fylgja - Auto Grid

[![NPM version](https://img.shields.io/npm/v/@fylgja/auto-grid)](https://www.npmjs.org/package/@fylgja/auto-grid)
![license](https://img.shields.io/github/license/fylgja/fylgja)

A super small grid with auto flowing behavior, based on the container size.

Using a similar method to container queries.

This grid uses a minmax method,
it fills the grid items based on the space available.

Where the min value is static value and the max value is `1fr`.

It creates a grid without needing to setup any columns and rows,

since the grid items will do this for you, following the **content first** approach!

## Installation

```bash
npm install @fylgja/auto-grid
```

Then include the component in to your code via;

```scss
@use "@fylgja/auto-grid";
// Or via PostCSS import
@import "@fylgja/auto-grid";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/auto-grid" with ($enable-auto-grid-layer: true);
// Or via PostCSS import
@import "@fylgja/auto-grid/layer";
```

## How to use

The grid can be added by just adding the class `.auto-grid`.

```html
<div class="auto-grid" style="max-width: 880px;">
    <img width="500" height="400" src="https://placeimg.com/500/400/nature?img=1" loading="lazy">
    <img width="500" height="400" src="https://placeimg.com/500/400/nature?img=2" loading="lazy">
</div>
```

In this example we have a container thats `880px` width,
using a default col size of `250px` this wil result in 3 equal columns,
even if there are only 2 child's to fill the space.
The third one is an empty placeholder, making the grid truly auto.

You can change the behavior by adjusting the min value and the gap via the CSS variables.

### Using a static grid

Do you want to use grid columns based on the viewport width instead?<br>
Then add the var `--cols` to take complete control of the grid cols.

Which allows you to build a static grid based on the viewport,
on desktop and fallback to the auto-grid on mobile.


```html
<style>
    @media (min-width: 640px) {
        #cool-products {
            --cols: repeat(3, 1fr);
        }
    }
</style>
<div id="cool-products" class="auto-grid">
    <div>..</div>
    <div>..</div>
</div>
```

## Config

Do you want more control over the Auto Grid CSS variables,
modify the following SCSS variables.

```scss
$enable-auto-grid-layer: false !default;

$auto-grid-layer-name: components !default;

$auto-grid-cols: 250px !default;
$auto-grid-gap: 1em !default;
```
