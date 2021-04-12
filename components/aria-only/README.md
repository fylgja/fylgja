# Fylgja - Aria-only

[![NPM version](https://img.shields.io/npm/v/@fylgja/aria-only)](https://www.npmjs.org/package/@fylgja/aria-only)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The aria-only (a.k.a. sr-only) visually hides elements.
But keeps it accessible to screen-readers and other aria tools.

## Installation

```bash
npm install @fylgja/aria-only
```

And include the component in to your code via;

```scss
@use "@fylgja/aria-only";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/aria-only/aria-only.css";
```

## How to use

Add the class aria-only to any element to visually hide it.

```html
<div class="aria-only">Text that is visually hidden</div>
```

### Use as Skip link

The aria-only component also support the skip navigation option.

This can be used via the class `.aria-only-focusable`.
Since this class will still show the content when receiving focus.

_If you want to extent this behavior,_
_to make a true skip link [see the tips](#tips)._

### Use as !important styled

The aria-only component is by default not set to render it's styles as important.

If you do prefer this.
You can enable this via the variable `$enable-aria-only-important`.
And set the value to `true`.

### Mixin (SCSS only)

You can also use it as a mixin with your own styles, via;

```scss
.new-class {
    // Set $enforce to true to set the values to !important
    @include aria-only($enforce: false);
    // If you want it to still show on focus
    @include aria-only-focusable($enforce: false);
}
```

## Tips

**How to make a skip-link without layout jumps**

The `.aria-only-focusable` will unset its own styles when receiving focus.

To prevent this, for some styles.
You must set some styles to always take effect, even when the skip link has focus.

You only need this sample to prevent layout jank.

```scss
.skip-link {
    @include aria-only-focusable;
    position: absolute;
}
```

But we need some extra styles so the text is also usable to visual users.

```scss
.skip-link {
    @include aria-only-focusable;
    z-index: 5;
    position: absolute;
    background-color: var(--color-bg);
    padding: 1em;

    &:focus,
    &:hover {
        --link-color-state: var(--color-text);
    }
}
```

