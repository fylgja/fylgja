# Fylgja - Stretched-link

[![NPM version](https://img.shields.io/npm/v/@fylgja/stretched-link)](https://www.npmjs.org/package/@fylgja/stretched-link)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Make any component fully clickable via a nested link.

## Installation

```bash
npm install @fylgja/stretched-link
```

And include the component in to your code via;

```scss
@use "@fylgja/stretched-link";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/stretched-link/stretched-link.css";
```

## How to use

To use the stretched-link make sure you component is relative positioned.
Like a the `@fylgja/card`.

This sample is made with the card component with a nested link
and to make the card completely clickable.
We also added the stretched-link on the nested link.

```html
<div class="card">
    <img src=".." class="card-media">
    <div class="card-content">
        <p>..</p>
        <a href="#" class="stretched-link">Read more about this cool link</a>
    </div>
</div>
```

Since the `.card` class has the style `position: relative;`.
The card becomes clickable with the href from the nested link.

## Why use this

Why do this.
You might ask.
Well for accessibility.

If you use a link on the card.
The complete content becomes part of the link description,
which causes a bad description for the link.

Instead the link should only describe where the link will go to.

So:

```html
<!-- Bad accessibility but clickable completely -->
<a href="#" class="card">
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
