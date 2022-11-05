# Fylgja - Button

[![NPM version](https://img.shields.io/npm/v/@fylgja/button)](https://www.npmjs.org/package/@fylgja/button)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The Button component serves as an interactive element.
To call your users to an action.

Since not all buttons need to be an Call To Action.

The base button is as simple as possible
and many styles can be build on top of this foundation.

## Installation

```bash
npm install @fylgja/button
```

Then include the component in to your code via;

```scss
@use "@fylgja/button";
// Or via PostCSS import
@import "@fylgja/button";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/button" with ($enable-aria-only-layer: true);
// Or via PostCSS import
@import "@fylgja/button/layer";
```

## How to use

In your html you only need the `.btn` class to use the button style.

```html
<a href="#link" class="btn">..</a>
<button class="btn">..</button>
```

The buttons component is by default is blank with a soft hover and active color.

Based on the `root-fg` color, which is black by default.

Besides that, the buttons component also comes with a lot of CSS variables,

which allow easier construction of specific button styles via a modifier class.

### Variable classes

By default we also offer some base default variable class, that can be disabled via de SCSS variables if needed.

| Class      | Description                                               |
| ---------- | --------------------------------------------------------- |
| `-outline` | Paints the btn with an border color, using the text color |
| `-theme`   | Paints the btn with the filled `$color-theme` color       |
| `-icon`    | Creates a icon btn's with equal width and height          |

Besides these variable classes, we try to keep away from adding more variable classes.

As this will create to much extra CSS you will most likely never use.

### State classes

The button states can be used with javascript state, through css class modifiers.

So it also ships with a class for disabled and active state;

- Disable = `.is-disabled`
- Active = `.is-active`

## Config

As with almost all of our components, CSS variables can be configured to add your own look/style.

Want direct control on the base styles, here are the following SCSS variables can you modify.

<details class="faq-panel"><summary>View SCSS variables</summary>

```scss
$enable-btn-theme: true !default;
$enable-btn-outline: true !default;
$enable-btn-icon: true !default;

$btn-icon-size: 2.125em !default;

$btn-padding: 0.375rem 0.8rem !default;
$btn-border-size: 1px !default;
$btn-border-style: solid !default;
$btn-radius: 4px !default;
$btn-font-size: inherit !default;
$btn-line-height: inherit !default;
$btn-font-weight: 500 !default;
$btn-transition: 0.2s linear;
$btn-transition-property: (
    color,
    background-color,
    border-color,
    box-shadow
) !default;

$btn-stroke: transparent !default;
$btn-bg: transparent !default;
$btn-color: inherit !default;

$btn-focus-stroke: transparent !default;
$btn-focus-bg: color.change($root-fg, $alpha: 0.05) !default;
$btn-focus-color: inherit !default;

$btn-active-stroke: transparent !default;
$btn-active-bg: color.change($root-fg, $alpha: 0.2) !default;
$btn-active-color: inherit !default;

$btn-disabled-opacity: 0.7 !default;
```

</details>
