# Fylgja - Easing

[![NPM version](https://img.shields.io/npm/v/@fylgja/easing)](https://www.npmjs.org/package/@fylgja/easing)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Add easing with ease to any project using Fylgja ease props.

This Fylgja component is a design tokens and CSS props system.

You can use it in its simplest form with CSS.

But this package also ships with a Javascript version,
if you want to use it with anther front-end Javascript framework.

## Installation

```bash
npm install @fylgja/easing
```

To use it with CSS or SCSS use;

```scss
@use "@fylgja/dialog";
// Or via PostCSS import
@import "@fylgja/dialog";
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
@use "@fylgja/easing" as *;

.style {
    transition-timing-function: $layer-1;
}

// CSS Syntax
@use "@fylgja/easing/props";

.style {
    transition-timing-function: var(--layer-1);
}
```

### CSS version

```css
@import "@fylgja/easing";

.style {
    transition-timing-function: var(--layer-1);
}
```

### Javascript

```js
import props from "@fylgja/easing"

const style = {
    transitionTimingFunction: props.layer[1]
}
```

## Config

The following variables are available.

With the CSS variables you can use the same name, only with `--` as prefix,
instead of `$`.

<details class="faq-panel"><summary>View SCSS variables</summary>

```scss
$ease-1: cubic-bezier(0.25, 0.1, 0.1, 1);
$ease-2: cubic-bezier(0.25, 0.1, 0.2, 1);
$ease-3: cubic-bezier(0.25, 0.1, 0.3, 1);
$ease-4: cubic-bezier(0.25, 0.1, 0.4, 1);
$ease-5: cubic-bezier(0.25, 0.1, 0.5, 1);
$ease-in-1: cubic-bezier(0.3, 0, 1, 1);
$ease-in-2: cubic-bezier(0.5, 0, 1, 1);
$ease-in-3: cubic-bezier(0.7, 0, 1, 1);
$ease-in-4: cubic-bezier(0.9, 0, 1, 1);
$ease-in-5: cubic-bezier(1, 0, 1, 1);
$ease-out-1: cubic-bezier(0, 0, 0.7, 1);
$ease-out-2: cubic-bezier(0, 0, 0.5, 1);
$ease-out-3: cubic-bezier(0, 0, 0.3, 1);
$ease-out-4: cubic-bezier(0, 0, 0.1, 1);
$ease-out-5: cubic-bezier(0, 0, 0, 1);
$ease-in-out-1: cubic-bezier(0.1, 0, 0.9, 1);
$ease-in-out-2: cubic-bezier(0.3, 0, 0.7, 1);
$ease-in-out-3: cubic-bezier(0.5, 0, 0.5, 1);
$ease-in-out-4: cubic-bezier(0.7, 0, 0.3, 1);
$ease-in-out-5: cubic-bezier(0.9, 0, 0.1, 1);
$ease-elastic-1: cubic-bezier(0.5, 0.75, 0.75, 1.25);
$ease-elastic-2: cubic-bezier(0.5, 1, 0.75, 1.25);
$ease-elastic-3: cubic-bezier(0.5, 1.25, 0.75, 1.25);
$ease-elastic-4: cubic-bezier(0.5, 1.5, 0.75, 1.25);
$ease-elastic-5: cubic-bezier(0.5, 1.75, 0.75, 1.25);
$ease-squish-1: cubic-bezier(0.5, -0.1, 0.1, 1.5);
$ease-squish-2: cubic-bezier(0.5, -0.3, 0.1, 1.5);
$ease-squish-3: cubic-bezier(0.5, -0.5, 0.1, 1.5);
$ease-squish-4: cubic-bezier(0.5, -0.7, 0.1, 1.5);
$ease-squish-5: cubic-bezier(0.5, -0.9, 0.1, 1.5);
```

</details>


### How to use with other ease prop systems like, Open Props

The Fylgja ease and the [Open Props ease](https://open-props.style/#easing) are very similar to each other,

We did create our own version, before Open Props released.
But did also have token some notes of Open Props,
to see what we can also use to improve the Fylgja ease.

So if you're already are using the Open Props version,
and are planing to replace it with the Fylgja version,
you can almost replace it without any change,
but there a few things to take note of.

The Fylgja `ease-1` is almost the same as the Open Props `ease-5`.
but Fylgja instead counts upward, to that matches the strength system,
which is also used with other systems, like with a color pallet.

The Fylgja ease has no count (steps) props option.
We don't feel this needs a design system.

Besides that the package is very similar,
and for most props you don't need to do anything.

If your using another prop system like [Pollen](https://www.pollen.style/modules/ui#easing)
Then you can use both systems, since both don't share any props.
