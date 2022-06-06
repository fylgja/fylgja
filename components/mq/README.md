# Fylgja - MQ

[![NPM version](https://img.shields.io/npm/v/@fylgja/mq)](https://www.npmjs.org/package/@fylgja/mq)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The Fylgja MQ offers Design Tokens (CSS props) for consistent use of media queries.

## Installation

```bash
npm install @fylgja/mq
```

Then include the component in to your code via;

```scss
@use "@fylgja/mq";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/mq"; // *
```

> \* The PostCSS version is using the newer spec with `@custom-media`,
> and also requires the [PostCSS Custom Media](https://github.com/postcss/postcss-custom-media) plugin to work,
> until Custom Media queries are better supported

## How to use

This component comes in 2 versions.

The SCSS version comes with just SCSS variables and creates no css when imported.

The CSS version comes packing CSS variables, and while this version does ship some CSS.
This does offer you more flexibilities with other tools and languages.

### SCSS version

You can use this component to quickly adjust the Fylgja component media queries used across all of the Fylgja CSS components,
with 1 map variable trough the mq component;

```scss
@use "@fylgja/mq" with ($breakpoints: (..));
```

or you can use it in your own SCSS components;

```scss
@use "@fylgja/mq" as *;

@media ($md) {..}
```

### CSS version

As for the CSS variables,
this only allows you to use the variables in your CSS,
and it can not adjust the Fylgja CSS components directly.

To use it, simply use at media with the Fylgja CSS media variable.

```css
@media (--md) {..}
```

## Config

The following variables are available.

With the CSS variables you can use the same name, only with `--` as prefix,
instead of `$`.

```scss
$scheme-dark: "prefers-color-scheme: dark";
$scheme-light: "prefers-color-scheme: light";

$motion-safe: "prefers-reduced-motion: no-preference";
$motion-reduce: "prefers-reduced-motion: reduce";

$opacity-safe: "prefers-reduced-transparency: no-preference";
$opacity-reduce: "prefers-reduced-transparency: reduce";

$data-safe: "prefers-reduced-data: no-preference";
$data-reduce: "prefers-reduced-data: reduce";

$contrast-more: "prefers-contrast: more";
$contrast-less: "prefers-contrast: less";

$hd-color: "dynamic-range: high";
$portrait: "orientation: portrait";
$landscape: "orientation: landscape";

// Sizing mq's
$breakpoints: (
    "xs": 420px,
    "sm": 640px,
    "md": 768px,
    "lg": 1024px,
    "xl": 1440px,
    "xxl": 2200px,
) !default;
$mq-breakpoints: $breakpoints; // fallback alias

$xs: "min-width: #{getMq(xs)}" !default;
$sm: "min-width: #{getMq(sm)}" !default;
$md: "min-width: #{getMq(md)}" !default;
$lg: "min-width: #{getMq(lg)}" !default;
$xl: "min-width: #{getMq(xl)}" !default;
$xxl: "min-width: #{getMq(xxl)}" !default;

$xs-max: "max-width: #{(getMq(xs) - 1px)}" !default;
$sm-max: "max-width: #{(getMq(sm) - 1px)}" !default;
$md-max: "max-width: #{(getMq(md) - 1px)}" !default;
$lg-max: "max-width: #{(getMq(lg) - 1px)}" !default;
$xl-max: "max-width: #{(getMq(xl) - 1px)}" !default;
$xxl-max: "max-width: #{(getMq(xxl) - 1px)}" !default;
```

> **Note** Some prefers media queries have bad support at them moment of writing,
> so always check what is usable.

> **Note** `getMq()` is a sass function that gets a value from the `$breakpoints` map,
> with a fail save if the value is missing
