# Fylgja - Easing

[![NPM version](https://img.shields.io/npm/v/@fylgja/easing)](https://www.npmjs.org/package/@fylgja/easing)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The Fylgja easing offers Design Tokens (CSS props) for consistent and semantic transitions.

## Installation

```bash
npm install @fylgja/easing
```

Then include the component in to your code via;

```scss
@use "@fylgja/easing";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/easing"; // *
```

## How to use

This component comes in 3 syntaxes.

- SCSS is offered in both the SCSS and CSS variable syntax
- CSS is offered as CSS variables
- Javascript Style Tokens,
  if you want to use it in a Javascript based environment, like React or Vue.

### SCSS version

```scss
@use "@fylgja/easing" as *;

.style {
    z-index: $layer-1;
}

// CSS Syntax
@use "@fylgja/easing/props";

.style {
    z-index: var(--layer-1);
}
```

### CSS version

```css
@import "@fylgja/easing";

.style {
    z-index: var(--layer-1);
}
```

### Javascript

```js
import props from "@fylgja/easing"

const style = {
    zIndex: props.layer[1]
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
$ease-elastic-in-1: cubic-bezier(0.5, 0.25, 0.75, -0.25);
$ease-elastic-in-2: cubic-bezier(0.5, 0, 0.75, -0.25);
$ease-elastic-in-3: cubic-bezier(0.5, -0.25, 0.75, -0.25);
$ease-elastic-in-4: cubic-bezier(0.5, -0.5, 0.75, -0.25);
$ease-elastic-in-5: cubic-bezier(0.5, -0.75, 0.75, -0.25);
$ease-elastic-out-1: cubic-bezier(0.5, 0.75, 0.75, 1.25);
$ease-elastic-out-2: cubic-bezier(0.5, 1, 0.75, 1.25);
$ease-elastic-out-3: cubic-bezier(0.5, 1.25, 0.75, 1.25);
$ease-elastic-out-4: cubic-bezier(0.5, 1.5, 0.75, 1.25);
$ease-elastic-out-5: cubic-bezier(0.5, 1.75, 0.75, 1.25);
$ease-elastic-in-out-1: cubic-bezier(0.5, -0.1, 0.1, 1.5);
$ease-elastic-in-out-2: cubic-bezier(0.5, -0.3, 0.1, 1.5);
$ease-elastic-in-out-3: cubic-bezier(0.5, -0.5, 0.1, 1.5);
$ease-elastic-in-out-4: cubic-bezier(0.5, -0.7, 0.1, 1.5);
$ease-elastic-in-out-5: cubic-bezier(0.5, -0.9, 0.1, 1.5);
```

</details>

### How to use with other ease prop systems like, Open Props

The Fylgja easing and the [Open Props Easing](https://open-props.style/#easing) are very similar to each other.

Before Open Props was released,
we did create our own version,
but we also took some inspiration from Open Props,
to improve Fylgja.

Therefore,
if you currently use the Open Props and want to switch to the Fylgja version,
you can do so by making a few adjustments.

- ease count is swapped,
  in Fylgja `ease-1` is the same as `ease-5` from Open Props,
  Fylgja counts upward,
  to that matches the strength system.
- Fylgja has no elastic or squish instead,
  it offers use elasticIn, elasticOut (similar as elastic) and elasticInOut (similar as squish).
- Fylgja easing has no count (steps) props option,
  we don't feel this needs a design system.

If your using another prop system,
like [Pollen](https://www.pollen.style/modules/ui#easing),
because they don't share any prop names,
you can use both systems at that point.
