# Fylgja - Elevation

[![NPM version](https://img.shields.io/npm/v/@fylgja/elevation)](https://www.npmjs.org/package/@fylgja/elevation)
![license](https://img.shields.io/github/license/fylgja/fylgja)

> The `@fylgja/elevation` component has been replaced by [`@fylgja/shadow`](https://fylgja.dev/components/shadow/).
>
> The shadow component offers better shadow defaults,
> and fully embraces the Design Token (CSS Props) system.
>
> This package will be deprecated in in the next release.

The Elevation component is a util package for shadows, where it offers shadows as CSS variables.

It follows the same principals as Google's material design.

But stay's more small and practical, by focusing only on elevation indexes that are commonly used.

## Installation

```bash
npm install @fylgja/elevation
```

Then include the component in to your code via;

```scss
@use "@fylgja/elevation";
// Or via PostCSS import
@import "@fylgja/elevation";
```

## How to use

The variables can be used on any shadow property that accepts 4 values.
For example the `box-shadow` property.

The elevation component offers 6 layers based on the material design layers.

```css
.example {
    box-shadow: var(--elevation-z2);
}
```

If you plan to just use the SCSS version and don't want the CSS variables.
You can disable them via the `$enable-elevation` boolean.

The SCSS values are available via the map `$elevation`.
Or the SCSS function `elevation()`.

```scss
.feeling-sassy {
    box-shadow: elevation(2);
}
```

## Config

As with almost all of our components, CSS variables can be configured to add your own look/style.

Want direct control on the base styles, here are the following SCSS variables can you modify.

```scss
$enable-elevation: true !default;

$elevation-color: black !default;
$elevation-umbra: rgba($elevation-color, 0.2) !default;
$elevation-penumbra: rgba($elevation-color, 0.14) !default;
$elevation-ambient: rgba($elevation-color, 0.12) !default;
$elevation: (
    z1: (
        0 2px 1px -1px $elevation-umbra,
        0 1px 1px $elevation-penumbra,
        0 1px 3px $elevation-ambient
    ),
    z2: (
        0 3px 1px -2px $elevation-umbra,
        0 2px 2px $elevation-penumbra,
        0 1px 5px $elevation-ambient
    ),
    z3: (
        0 2px 4px -1px $elevation-umbra,
        0 4px 5px $elevation-penumbra,
        0 1px 10px $elevation-ambient
    ),
    z4: (
        0 3px 5px -1px $elevation-umbra,
        0 6px 10px $elevation-penumbra,
        0 1px 18px $elevation-ambient
    ),
    z5: (
        0 5px 5px -3px $elevation-umbra,
        0 8px 10px 1px $elevation-penumbra,
        0 3px 14px 2px $elevation-ambient
    ),
    z6: (
        0 7px 8px -4px $elevation-umbra,
        0 12px 17px 2px $elevation-penumbra,
        0 5px 22px 4px $elevation-ambient
    )
) !default;
```

## Dept map

This is based on the material design version.
[See there docs here at material.io](https://material.io/design/environment/elevation.html)

| Material | Fylgja | Description, For example                    |
| :------: | :----: | ------------------------------------------- |
|   dp0    |   z0   | _same as none_                              |
|   dp1    |   z1   | Cards, Searchbars                           |
|   dp2    |   z2   | Floating Btn's                              |
|   dp4    |   z3   | Navbar, Fixed header                        |
|   dp6    |   z4   | Popup, FAB                                  |
|   dp8    |   z5   | Bottom Navbar, Floating/picked up Component |
|   dp12   |   z6   | Offcanvas, Modal                            |

_There are other frameworks that use this same pattern._
_E.g. [materialize](https://materializecss.com/shadow.html)_
