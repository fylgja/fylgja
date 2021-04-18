# Fylgja - Gradient

[![NPM version](https://img.shields.io/npm/v/@fylgja/gradient)](https://www.npmjs.org/package/@fylgja/gradient)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Add gradient's with easy via the gradient utility class.

This component offers both the background and border versions.
Which you can modify to your needs.

## Installation

```bash
npm install @fylgja/gradient
```

And include the component in to your code via;

```scss
@import "@fylgja/gradient";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/gradient/gradient.css";
```

## How to use

To use the `.bg-gradient` or `.border-gradient` simply add them to any element.
`.bg-gradient` will work out of the box.
`.border-gradient` requires that the element already has a border-width.

This can be done via the border class from the `@fylgja/utilpack`;

```html
<div class="border border-gradient"></div>
```

Or just via CSS 😉

```html
<style>
    .my-class {
        border-width: 1px;
        border-style: solid;
    }
</style>
<div class="my-class border-gradient"></div>
```

### Modifying the angle

Both gradients offer CSS variables and class variables for the gradient angle.

```html
<!-- Class variables -->
<div class="bg-gradient -angle-left"></div>
<!-- CSS variables -->
<div class="bg-gradient" style="--gradient-angle: 360deg;"></div>
```

Default angles:

- `top-right`
- `top-left`
- `right`
- `left`
- `bottom`
- `bottom-right`
- `bottom-left`

_Top the the default value_

### Modifying the color

Both gradients offer CSS variables and class variables for the gradient angle.

```html
<!-- Class variables -->
<div class="bg-gradient -from-theme"></div>
<div class="bg-gradient -to-theme"></div>
<div class="bg-gradient -stop-theme"></div>
<!-- CSS variables -->
<div class="bg-gradient" style="--gradient-from: var(--color-theme);"></div>
<div class="bg-gradient" style="--gradient-to: var(--color-theme);"></div>
<div class="bg-gradient" style="--gradient-stops: chocolate, var(--color-theme), rebeccapurple;"></div>
```

| Class            | Value                                             |
| ---------------- | ------------------------------------------------- |
| `-from-<COLOR>`  | Gradient starting color                           |
| `-stops-<COLOR>` | Gradient color, _Overrides the colors completely_ |
| `-to-<COLOR>`    | Gradient ending color                             |

Default colors:

- `var(--color-theme)`
- `var(--color-bg)`
- `currentColor`

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following scss variables can you modify.

```scss
$enable-gradient-border: true !default;
$enable-gradient-bg: true !default;

$gradient-colors: (
    "theme": var(--color-theme),
    "bg": var(--color-bg),
    "color": currentColor
) !default;

$gradient-angles: (
    "top-right": "to top right",
    "top-left": "to top left",
    "right": "90deg", // Same as `to right`
    "left": "270deg", // Same as `to left`
    "bottom": "180deg", // Same as `to bottom`
    "bottom-right": "to bottom right",
    "bottom-left": "to bottom left"
) !default;
```
