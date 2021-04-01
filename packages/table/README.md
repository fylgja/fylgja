# Fylgja - Table

[![NPM version](https://img.shields.io/npm/v/@fylgja/table.svg)](https://www.npmjs.org/package/@fylgja/table)

The table component is super easy to use.
Since it is a zero config module that styles the table directly.
Allowing you to focus on the table it self.

- [Installation](#installation)
- [How to use](#how-to-use)
  - [Single level styled by default](#single-level-styled-by-default)
  - [Overflow](#overflow)
- [Config](#config)

## Installation

```bash
npm install @fylgja/table
```

And include the component in to your code via;

```scss
@use "@fylgja/table";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/table/table.css";
```

## How to use

No instruction are really needed.
The table styles are automatically added when loaded.

That said no site is the same.
And if you need more than this basis.
Then consider adding you own styles to improve on this basis.

For example,
A simple stripped style can be made with just this bit of code;

```scss
.table-striped {
    tr:nth-child(even) {
        --table-bg: rgba(0 0 0 / 10%);
    }
}
```

### Single level styled by default

The table styles are unlike other frameworks set on a single level basis.
Making overriding the behavior or adding anything super easy.
Since there is no styles set to deep, to block your styles.

### Overflow

Tables are as responsive as the content.
So it is hard to make a responsive behavior that fits all table data types.

So use the `@fylgja/utilpack` overflow util class.
That at least allows your table not the break the page.
And be scrolled instead.
Giving basic user experience.

```html
<div class="overflow-x-auto">
    <table>..</table>
</div>
```

If you really want your table to shine on mobile.
Use a custom css for collpasing the expected data in the layout you want.

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following scss variables can you modify.

```scss
$table-margin: 1rem 0 !default;
$table-padding: 5px 8px !default;

$table-border-collapse: collapse !default;
$table-border-gap: 2px !default;
$table-border-width: 0 0 1px !default;
$table-border-style: solid !default;
$table-border-color: #ccc !default;

$table-bg: transparent !default;
$table-color: inherit !default;

$table-head-border: 2px $table-border-style !default;
$table-head-border-color: $table-color !default;
```
