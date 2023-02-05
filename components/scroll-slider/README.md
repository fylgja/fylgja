# Fylgja - Scroll-slider

[![NPM version](https://img.shields.io/npm/v/@fylgja/scroll-slider)](https://www.npmjs.org/package/@fylgja/scroll-slider)
![license](https://img.shields.io/github/license/fylgja/fylgja)

This CSS slider component allows you to make sliders with ease,
and has no requirements to any Javascript.

The only reason to add some additional Javascript,
would be to add extra supporting functions.

Like a navigation and a active state.

## Installation

```bash
npm install @fylgja/scroll-slider
```

Then include the component in to your code via;

```scss
@use "@fylgja/scroll-slider";
// Or via PostCSS import
@import "@fylgja/scroll-slider";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/range" with ($enable-range-layer: true);
// Or via PostCSS import
@import "@fylgja/range/layer";
```

## How to use

To create a slider, you will need a wrapper element with the class `.scroll-slider`.

Any direct children of the slider will become scroll items.

```html
<div class="scroll-slider">
    <div>..</div>
    <img src="">
</div>
```

The scroll items will by default have the size from the content.

If you want your slides to have a specific size,
you can use the CSS variables provided by this CSS component.

A full width slider can be made by setting the scroll-size to 100%
and setting the inline gap to 0.

If you also want to reserve the scroll gap, set the block gap to whatever your want.

```html
<style>
    .scroll-slider.-full-slide {
        --scroll-size: 100%;
        --gap-inline: 0;
    }
</style>
<div class="scroll-slider -full-slide">
    <div>..</div>
    <img src="">
</div>
```

## Config

Want more control on the base styles, then the CSS variables,
here are the following SCSS variables you can modify.

```scss
$enable-scroll-overflow-fix: true !default;
$enable-scroll-layer: false !default;

$scroll-layer-name: components !default;

$scroll-gap: 0.5em !default;
$scroll-padding-y: 1rem !default;
$scroll-padding-x: 1.25rem !default;

// Item
$scroll-align: center !default;
$scroll-stop: always !default;
$scroll-stop-fine: normal !default;
```

## Tips

Down here some useful tips to enhance your slider.

### Adding a navigation

You can create a navigation for the slider,
by using an anchor hash link pagination,

and using the `@fylgja/pagination` as CSS component for the style.

If don't like the hash to appear in your url,
you can add a little javascript to enhance this behavior,

and remove the hash from your url.

<details class="faq-panel"><summary>Example of the HTML and Javascript pagination</summary>

```html
<div class="scroll-slider">
    <div id="scroll-item-1">..</div>
    <div id="scroll-item-2">..</div>
</div>
<div class="pagination my-1" aria-label="pagination">
    <a href="#scroll-item-1" class="pagination-link" onclick="scrollToElement()">
        <span><span class="aria-hidden">Go to slide </span>1</span>
    </a>
    <a href="#scroll-item-2" class="pagination-link" onclick="scrollToElement()">
        <span><span class="aria-hidden">Go to slide </span>2</span>
    </a>
</div>
<script>
    const scrollToElement = () => {
        const id = event.target.attributes.href.value.split("#")[1];
        event.preventDefault();
        document.getElementById(id).scrollIntoView();
    }
</script>
```

_An event listener would have been better. But this is just sample 😉_

</details>

### Hiding or Changing the scrollbar

By default we don't hide or change the scrollbar.

If you slider requires a more custom style use the `@fylgja/scrollbar` component,
adding the thin or hide class.
