# Fylgja - Theme

[![NPM version](https://img.shields.io/npm/v/@fylgja/theme)](https://www.npmjs.org/package/@fylgja/theme)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Helper component for adding theme specific variables to multiple components.

## Installation

```bash
npm install @fylgja/theme
```

Then include the component in to your code via;

```scss
@use "@fylgja/theme";
```

## How to use

This component does not create any CSS.

And only contains some SCSS variable for Fylgja components, that have theme specific styles.

You can use this component to quickly override the specific styles,
set to a button, links and more, via;

```scss
@use "@fylgja/theme" with (
    $color-theme: #00897b,
    $color-on-theme: #fff
);
```

Instead of the default the theme is now a teal color.

And you can also reuse this in your own components,

by importing the `@fylgja/theme` or use it directly in your styles via;

```scss
@use "@fylgja/theme" as ft with (
    $color-theme: #00897b,
    $color-on-theme: #fff
);

.label {
    background-color: ft.$color-theme;
    color: ft.$color-on-theme;
}
```

_You can also use it without the prefix if you want via * selector_

### atLayer

This mixin is specific for Fylgja's build progress,
and is used to create the layer variant for each component

You can use this if you need something with the same logic,
or for a Fylgja Add-On component.

```scss
@use "@fylgja/theme/layer";

@include atLayer(
  $use, // if to use `@layer`
  $name // The `@layer` name, e.g. base, components, utilities
) {
  // Your CSS here
}
```

## Config

The following variables are available.

```scss
$color-scheme: light !default;
$root-font-size: null !default;
$root-bg: if($color-scheme == dark, #000, #fff) !default;
$root-fg: if($color-scheme == dark, #fff, #000) !default;

$color-text: color.change($root-fg, $alpha: 0.87) !default;
$color-text-alt: color.change($root-fg, $alpha: 0.68) !default;
$color-text-muted: color.change($root-fg, $alpha: 0.56) !default;

// Color pallet
$color-theme: #1565c1 !default;
$color-theme-fade: color.change($color-theme, $alpha: 0.2) !default;
$color-on-theme: #fff !default;

$color-error: #b00020 !default;
$color-warning: #ffab40 !default;
$color-success: #00e676 !default;

$base-spacing: 1em !default; // For v2
$item-spacer: 0 0 $base-spacing !default;

// For any thing like forms and buttons, for v2
$action-padding-block: 0.375em !default;
$action-padding-inline: 0.625em !default;
$action-padding: $action-padding-block $action-padding-inline;
$action-border-width: 1px !default;
```
