# Fylgja - Shadow

[![NPM version](https://img.shields.io/npm/v/@fylgja/shadow)](https://www.npmjs.org/package/@fylgja/shadow)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The Fylgja shadow offers Design Tokens (CSS props) for consistent and semantic shadows.

## Installation

```bash
npm install @fylgja/shadow
```

Then include the component in to your code via;

```scss
@use "@fylgja/shadow";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/shadow"; // *
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
@use "@fylgja/shadow" as *;

.style {
    box-shadow: $shadow-1;
}

// CSS variable syntax
@use "@fylgja/shadow/shadow";

.style {
    box-shadow: var(--shadow-1);
}
```

### CSS version

```css
.style {
    box-shadow: var(--shadow-1);
}
```

### Javascript

```js
import props from "@fylgja/shadow"

const style = {
    "--shadow-color": props.shadow.color,
    "--shadow-weight": props.shadow.weight,
    boxShadow: props.shadow[1],
}
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

_If your using only the SCSS helper,_
_then you need to create your own CSS variable for shadow-color and shadow-weight_