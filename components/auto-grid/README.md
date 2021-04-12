# Fylgja - autoGrid

[![NPM version](https://img.shields.io/npm/v/@fylgja/grid)](https://www.npmjs.org/package/@fylgja/grid)
![license](https://img.shields.io/github/license/fylgja/fylgja)

A super small grid with auto flowing behavior based on the container size.
Using a similar method to container queries.

This grid uses a minmax method.
That fills the grid items based on the space available.
Where the min value is static value and the max value is `1fr`.

This creates a grid without needing to setup any columns and rows.
Since the grid items will do this for you.
Following the **content first** approach!

## Installation

```bash
npm install @fylgja/auto-grid
```

And include the component in to your code via;

```scss
@use "@fylgja/auto-grid";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/auto-grid/auto-grid.css";
```

## How to use

The grid can be added by just adding the class `.auto-grid`.

```html
<div class="auto-grid">
    <div>..</div>
    <div>..</div>
</div>
```

In the first example the grid is 2 cols.
If the container size something like `625px`.
Since the grid tries to fill the space.
Until there is not enough space for a `250px` col.
Which is the default col size.

If the container size was something like `750px`.
It would be 3 cols even if there are 2 child's to fill the space.
The third one is an empty placeholder.
Making the grid truly auto.

You can change the min value and the gap via the CSS variables.
Taking control of each grid on each specific page or section.
Or take complete control via the CSS variable `--cols`.
Changing the complete `grid-template-columns` value.

Which allows you to build a static grid based on the viewport,
on desktop and fallback to the auto-grid.

### Using a static grid

Do you want to use grid columns based on the viewport width instead.
Simple add the var `--cols` to take complete control of the grid cols.


```html
<style>
    #cool-products {
        --cols: repeat(2, 1fr);
    }

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

Want more control on the base styles, than the CSS variable.
Down here are the following SCSS variables you can modify.

```scss
$auto-grid-cols: 250px !default;
$auto-grid-gap: 1em !default;
```
