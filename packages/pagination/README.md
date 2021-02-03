# Fylgja - Pagination

[![NPM version](https://img.shields.io/npm/v/@fylgja/pagination.svg)](https://www.npmjs.org/package/@fylgja/pagination)

Pagination component makes it easy to build many pagination patterns.
Like button only next previous nav or dots nav.

- [Installation](#installation)
- [How to use](#how-to-use)
  - [With pagination buttons and ellipsis.](#with-pagination-buttons-and-ellipsis)
  - [Other use cases](#other-use-cases)
- [Config](#config)

## Installation

```bash
npm install @fylgja/pagination
```

And include the component in to your code via;

```scss
@import "@fylgja/pagination";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/pagination/pagination.css";
```

## How to use

In your html you need besides the pagination class also some html for the items.

We advice you to use of an ordered list.
As this tells the user the structure of the list of links.

```html
<nav aria-label="pagination">
    <ol class="pagination">
        <li><a href="#item" aria-label="Page 1">1</a></li>
        <li><a href="#item" aria-label="Page 2" aria-current="page">2</a></li>
        <li><a href="#item" aria-label="Page 3">3</a></li>
    </ol>
</nav>
```

Using the `aria-current="page"`
will tell the user that this is the current page.
And it is also used to give it the active item style.

### With pagination buttons and ellipsis.

If you need a more complex pagination with buttons and ellipsis.
You can nest the pagination with buttons.
And there is a class `.pagination-ellipsis`,
for adding a gap in you pagination items.

```html
<nav aria-label="pagination" class="pagination justify-center">
    <button class="pagination-item flex-grow-1 md-flex-grow-0">Previous</button>
    <button class="pagination-item flex-grow-1 md-flex-grow-0 md-order-last">Next</button>
    <ol class="pagination">
        <li><a href="#item" aria-label="Page 1">1</a></li>
        <li><a href="#item" aria-label="Page 2" aria-current="page">2</a></li>
        <li><a href="#item" aria-label="Page 3">3</a></li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li><a href="#item" aria-label="Page 50">50</a></li>
    </ol>
</nav>
```

### Other use cases

Need the pagination for any other use case.
You can with the Fylgja Pagination

Need a sample pagination with just buttons for previous next.
Using the `.btn` style instead the `.pagination-item`;

```html
<nav aria-label="pagination" class="pagination mb-2">
    <button class="btn -theme">Previous</button>
    <button class="btn -theme is-active">Next</button>
</nav>
```

Need a pagination for show slider dots;

```html
<nav aria-label="pagination" class="pagination -dots">
    <a href="#item" aria-label="Slide 1"></a>
    <a href="#item" aria-label="Slide 2" class="is-active"></a>
    <a href="#item" aria-label="Slide 3"></a>
    <a href="#item" aria-label="Slide 4"></a>
</nav>
```

Or more.
E.g. pagination slider thumbs with images as content.

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following scss variables can you modify.

```scss
$enable-pagination-old-gap: true !default;
$enable-pagination-dots-style: true !default;

$pagination-size: 2em !default;
$pagination-gap: 2px !default;
$pagination-padding: 0.25em 0.5em !default;
$pagination-border-size: 1px !default;
$pagination-border-style: solid !default;
$pagination-radius: 4px !default;
$pagination-transition: 0.2s linear;
$pagination-transition-property: (
    color,
    background-color,
    border-color,
    box-shadow
) !default;

$pagination-stroke: transparent !default;
$pagination-bg: transparent !default;
$pagination-color: inherit !default;

$pagination-focus-stroke: currentColor !default;
$pagination-focus-bg: transparent !default;
$pagination-focus-color: inherit !default;

$pagination-active-stroke: var(--color-theme, #{$color-theme}) !default;
$pagination-active-bg: var(--color-theme, #{$color-theme}) !default;
$pagination-active-color: var(--color-on-theme, #{$color-on-theme}) !default;

$pagination-disabled-opacity: 0.8 !default;

$pagination-dots-size: 0.625em !default;
$pagination-dots-gap: 0.35em !default;
```
