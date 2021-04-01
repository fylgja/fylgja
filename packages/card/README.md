# Fylgja - Card

[![NPM version](https://img.shields.io/npm/v/@fylgja/card.svg)](https://www.npmjs.org/package/@fylgja/card)

The card component is a wrapper component.
Which allow you to make visual sectioned content,
that is not part of the main flow.

## Installation

```bash
npm install @fylgja/card
```

And include the component in to your code via;

```scss
@use "@fylgja/card";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/card/card.css";
```

## How to use

The card is one of the few css components that requires a little bit more
classes or/and elements.

A simple card can be just be 1 element.
And so you can collapse the child card classes to the parent.

```html
<div class="card card-content">..</div>
```

And a more complex card requires nesting.

```html
<div class="card">
    <img class="card-media" src="">
    <div class="card-content">..</div>
</div>
```

We kept the card child classes to 3 use cases;

| Class           | Description                     |
| --------------- | ------------------------------- |
| `.card-content` | For content, that may also grow |
| `.card-media`   | For media (e.g. img or video)   |
| `.card-action`  | For links and buttons           |

Besides that the card is also extremely flexable in style, via css variables.

The card style is by default elevated.
But can also make a flat one via 2 variables.

```html
<div
    class="card"
    style="--card-border: 1px solid #aaa; --card-elevation: none;">
    <div class="card-content">..</div>
</div>
```

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following scss variables can you modify.

```scss
$enable-card-link: true !default;

$card-padding: 1rem !default;
$card-radius: 6px !default;
$card-border: 0 !default;
$card-elevation: var(
    --elevation-z2,
    0 3px 1px -2px rgba(black, 0.2),
    0 2px 2px rgba(black, 0.14),
    0 1px 5px rgba(black, 0.12)
) !default;
$card-bg: adjust-color($root-bg, $lightness: 10%) !default;
$card-color: $color-text !default;

// Only with enable-card-link
$card-focus-bg: adjust-color($root-bg, $lightness: -5%) !default;
$card-focus-color: $color-text !default;
```
