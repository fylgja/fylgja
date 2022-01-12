# Fylgja - Easing

[![NPM version](https://img.shields.io/npm/v/@fylgja/easing)](https://www.npmjs.org/package/@fylgja/easing)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Add easing with ease to any project using Fylgja ease props.

This Fylgja component is a design token and props system.

You can use it in its simplest form with CSS.

But this package also ships with a Javascript and JSON token version,
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
