# Fylgja - Scroll-slider

[![NPM version](https://img.shields.io/npm/v/@fylgja/scroll-slider)](https://www.npmjs.org/package/@fylgja/scroll-slider)
![license](https://img.shields.io/github/license/fylgja/fylgja)

This CSS slider component allows you to make sliders with eas.
And no requirements to any Javascript.

The only reason to add some additional Javascript,
Would be to add extra supporting functions.
Like a navigation and a active state.

## Installation

```bash
npm install @fylgja/scroll-slider
```

And include the component in to your code via;

```scss
@use "@fylgja/scroll-slider";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/scroll-slider/scroll-slider.css";
```

## How to use

To create a slider.
You will need a wrapper element with the class `.scroll-slider`.
Any direct children of the slider will become scroll items.

```html
<div class="scroll-slider">
    <div>..</div>
    <img src="">
</div>
```

The scroll items will by default will the space they have in size.

If you want your slides to a specific size.
Add the `@fylgja/utilkit` width classes.

## Config

Want more control on the base styles, than the CSS variables.
Down here are the following SCSS variables you can modify.

```scss
$enable-scroll-overflow-fix: true !default;

$scroll-gap: 0.5em !default;
$scroll-padding-y: 1rem !default;
$scroll-padding-x: 1.25rem !default;

// Item
$scroll-align: center !default;
$scroll-stop: always !default;
$scroll-stop-fine: normal !default;
```

## Tips

Down here some usefull tips to enhance your slider.

### Adding a navigation

You can create a navigation for the slider.
By using an anchor hash link pagination.
And using the `@fylgja/pagination` as CSS component for the style.

If don't like the hash to appear in your url.
You can add a little javascript to enhance this behavior.
And remove the hash from your url.

<details class="faq-panel"><summary>Example of the Html and Javascript pagination</summary>

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

> An event listener would have been better. But this is just sample 😉

</details>

### Hiding the scrollbar

By default we don't hide the scrollbar.
This should by default left to the choice of the Dev and the OS.

But if you want to hide the scrollbar.
You can add the `@fylgja/scrollbar` component.
And use the `.hide-scrollbar` class.
