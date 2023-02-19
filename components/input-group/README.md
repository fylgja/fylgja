# Fylgja - Input-group

[![NPM version](https://img.shields.io/npm/v/@fylgja/input-group)](https://www.npmjs.org/package/@fylgja/input-group)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The input group extends upon the `@fylgja/form`,

by providing a wrapper that allows for more complex form field styles,

like a search bar with button in the same form field.

## Installation

```bash
npm install @fylgja/input-group
```

Then include the component in to your code via;

```scss
@use "@fylgja/input-group";
// Or via PostCSS import
@import "@fylgja/input-group";
```

### Styles

By default the form style is set to our default style.

To use the **field** or **box** style.
Change the variable `$input-group-style`.
To one of the options, via;

```scss
@use "index" with ($input-group-style: box);
```

Or if you are a importing this as plain CSS in PostCSS or any other option.
Import the style directly via;

```css
@import "@fylgja/input-group/field.css";
/* Or */
@import "@fylgja/input-group/box.css";
```

_For versions older than v1.2 use `style-{field|box}.css`_

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/input-group" with ($input-group-layer: "components");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/input-group" layer("components");
```

## How to use

For more information see the [input-group docs on the Fylgja.dev](https://fylgja.dev/components/input-group/).
