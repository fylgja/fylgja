# Fylgja - MQ

[![NPM version](https://img.shields.io/npm/v/@fylgja/mq)](https://www.npmjs.org/package/@fylgja/mq)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Helper component for adding media query specific variables to multiple components.

## Installation

```bash
npm install @fylgja/mq
```

Then include the component in to your code via;

```scss
@use "@fylgja/mq";
```

## How to use

This component does not create any CSS.

And only contains some SCSS variable for Fylgja components, that have media query specific styles.

You can use this component to quickly adjust the Fylgja component media queries.

```scss
@use "@fylgja/mq" with (
    $mq-breakpoints: (
        "xs": 420px,
        "sm": 640px,
        "md": 768px,
        "lg": 1024px,
        "xl": 1440px,
        "xxl": 2200px,
    )
);
```

Or you can use it in your own CSS components.

```scss
@use "@fylgja/mq";

@media (mq.$motion-reduce) {
    // Your motion reduced based styles here
}

@media (mq.$md) {
    // Your viewport size based styles here
}
```

_You can also use it without the prefix if you want via * selector_

## Config

The following variables are available.

```scss
$scheme-dark: "prefers-color-scheme: dark" !default;
$scheme-light: "prefers-color-scheme: light" !default;

$motion-safe: "prefers-reduced-motion: no-preference" !default;
$motion-reduce: "prefers-reduced-motion" !default;

$mq-breakpoints: (
    "xs": 420px,
    "sm": 640px,
    "md": 768px,
    "lg": 1024px,
    "xl": 1440px,
    "xxl": 2200px,
) !default;

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
