# Fylgja - Shadow

[![NPM version](https://img.shields.io/npm/v/@fylgja/shadow)](https://www.npmjs.org/package/@fylgja/shadow)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The Fylgja Shadow offers Design Tokens (CSS props) for consistent and semantic shadows.

## Installation

```bash
npm install @fylgja/shadow
```

Then include the component in to your code via;

```scss
@use "@fylgja/shadow/base"; // *Note
@use "@fylgja/shadow";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/shadow"; // *
```

> **Note** The sass version has the color and weight as SCSS variables,
> but it is by default not set as CSS variable any where,
> for this you need to include the base package as well, or build it your self

## How to use

This component comes in 3 syntaxes.

- SCSS is offered in both the SCSS and CSS variable syntax
- CSS is offered as CSS variables
- Javascript Style Tokens,
  if you want to use it in a Javascript based environment, like React or Vue.

### SCSS version

```scss
@use "@fylgja/shadow/base";
@use "@fylgja/shadow" as *;

.style {
    box-shadow: $shadow-1;
}

// CSS variable syntax
@use "@fylgja/shadow/props";

.style {
    box-shadow: var(--shadow-1);
}
```

### CSS version

```css
@import "@fylgja/shadow";

.style {
    box-shadow: var(--inset-shadow-1);
}
```

### Javascript

```js
import { staticShadows } from "@fylgja/shadow"

const style = {
    boxShadow: staticShadows.insetShadow[1],
}
```

With Javascript (similar to the SCSS case) you want to use the static shadows,
this include the values directly on the shadow values.

If you want to add the color base and weight base your self import the default map using `import props from "@fylgja/shadow"`.

### Using safe import options

If for some reason you can not use the CSS version with the `--shadow-color` and `--shadow-weight` variables,
there is a import option that has these values merged in to the shadow it self.

```css
@import "@fylgja/shadow/safe";
```

## Config

The following variables are available.

With the CSS variables you can use the same name, only with `--` as prefix,
instead of `$`.

```scss
$shadow-color: 0 0% 50%;
$shadow-weight: 1%;
$shadow-1: "0 2px 1px -1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%)), 0 1px 1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%)), 0 1px 3px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))";
$shadow-2: "0 3px 1px -2px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%)), 0 2px 2px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%)), 0 1px 5px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))";
$shadow-3: "0 2px 4px -1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%)), 0 4px 5px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%)), 0 1px 10px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))";
$shadow-4: "0 3px 5px -1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%)), 0 6px 10px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%)), 0 1px 18px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))";
$shadow-5: "0 5px 5px -3px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%)), 0 8px 10px 1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%)), 0 3px 14px 2px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))";
$shadow-6: "0 7px 8px -4px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%)), 0 12px 17px 2px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 12%)), 0 5px 22px 4px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 10%))";
$inset-shadow-0: "inset 0 0 0 1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 9%))";
$inset-shadow-1: "inset 0 1px 2px 0 hsl(var(--shadow-color) / calc(var(--shadow-weight) + 9%))";
$inset-shadow-2: "inset 0 1px 4px 0 hsl(var(--shadow-color) / calc(var(--shadow-weight) + 9%))";
$inset-shadow-3: "inset 0 2px 8px 0 hsl(var(--shadow-color) / calc(var(--shadow-weight) + 9%))";
$inset-shadow-4: "inset 0 2px 14px 0 hsl(var(--shadow-color) / calc(var(--shadow-weight) + 9%))";
```
