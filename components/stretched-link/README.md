# Fylgja - Stretched-link

[![NPM version](https://img.shields.io/npm/v/@fylgja/stretched-link)](https://www.npmjs.org/package/@fylgja/stretched-link)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Make any component fully clickable via a nested link.

## Installation

```bash
npm install @fylgja/stretched-link
```

Then include the component in to your code via;

```scss
@use "@fylgja/stretched-link";
// Or via PostCSS import
@import "@fylgja/stretched-link";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/stretched-link" with ($enable-stretched-link-layer: true);
// Or via PostCSS import
@import "@fylgja/stretched-link/layer";
```

## How to use

To use the stretched-link make sure you component is relative positioned,
like a the `@fylgja/card`.

This sample is made with the card component with a nested link
and to make the card completely clickable,

we also added the stretched-link on the nested link.

```html
<div class="card">
    <img src=".." class="card-media">
    <div class="card-content">
        <p>..</p>
        <a href="#" class="stretched-link">Read more about this cool link</a>
    </div>
</div>
```

Since the `.card` class has the style `position: relative;`

The card becomes clickable with the href from the nested link.

## Why use this

Why do this, you might ask, well for accessibility.

If you use a link on the card, the complete content becomes part of the link description,

that causes a bad description for the link, instead the link should only describe where the link will go to.

Example:

```html
<!-- Bad accessibility but clickable completely -->
<a href="#" class="card">
    <img src=".." class="card-media">
    <div class="card-content">
        <p>..</p>
    </div>
</a>

<!-- Good accessibility but only clickable on the link -->
<div class="card">
    <img src=".." class="card-media">
    <div class="card-content">
        <p>..</p>
        <a href="#">Read more about this cool link</a>
    </div>
</div>

<!-- Both accessible and completely clickable -->
<div class="card">
    <img src=".." class="card-media">
    <div class="card-content">
        <p>..</p>
        <a href="#" class="stretched-link">Read more about this cool link</a>
    </div>
</div>
```

## Config

```scss
$enable-stretched-link-layer: false !default;

$stretched-link-layer-name: utilities !default;
```
