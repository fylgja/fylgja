# Fylgja - Menu

[![NPM version](https://img.shields.io/npm/v/@fylgja/menu)](https://www.npmjs.org/package/@fylgja/menu)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The menu component makes it easy to build common navigation patterns,
like a navbar or menu in a dropdown.

## Installation

```bash
npm install @fylgja/menu
```

Then include the component in to your code via;

```scss
@use "@fylgja/menu";
// Or via PostCSS import
@import "@fylgja/menu";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/menu" with ($enable-menu-layer: true);
// Or via PostCSS import
@import "@fylgja/menu/layer";
```

## How to use

The most simple usecase is just using the `.menu` class as wrapper, around a set of links.

```html
<nav class="menu">
    <a href="#">..<a>
    <a href="#">..<a>
</nav>
```

Or as a list.

```html
<nav>
    <ul class="menu">
        <li><a href="#">..<a></li>
        <li><a href="#">..<a></li>
    </ul>
</nav>
```

By default the menu is column based, like a normal list.

Using the modifier `-row` the menu items can be placed in a row layout.

### Menu items

The menu class will style all links automatically,

but only if links are a child of the menu class or a direct child of list item.

If you want to use a wrapper, then use the class `.menu-item`,
to add the same logic and styles as the auto menu item version.

```html
<nav>
    <div class="menu">
        <a href="#">..<a> <!-- Menu item -->
        <div><a href="#">..<a></div> <!-- Not a Menu item -->
        <div><a class="menu-item" href="#">..<a></div> <!-- Menu item -->
    </div>
    <ul class="menu">
        <li><a href="#">..<a></li> <!-- Menu item -->
        <li><div><a href="#">..<a></div</li> <!-- Not a Menu item -->
    </ul>
</nav>
```

### Menu label

If you want a heading for your menu items you can use the `.menu-label` class.

To add an item styled as the `.menu-item` class, without all the hover, focus and active states.

```html
<nav>
    <ul class="menu">
        <li><div class="menu-label">Topic</div></li>
        <ul>
            <li><a href="#">..<a></li>
            <li><a href="#">..<a></li>
        </ul>
    </ul>
</nav>
```

### Menu divider

The menu divider is not part of this component, since it is not specifically for the menu.

You need the use `.hr` class from the component `@fylgja/base`,

combine it with the correct markup and you have a menu divider.

```html
<nav>
    <ul class="menu">
        <li><a href="#">..<a></li>
        <li class="hr" role="separator"></li>
        <li><a href="#">..<a></li>
    </ul>
</nav>
```

## Config

As with almost all of our components, CSS variables can be configured to add your own look/style.

Want direct control on the base styles, here are the following SCSS variables can you modify.

```scss
$enable-menu-row: true !default;
$enable-menu-nested: true !default;
$enable-menu-layer: false !default;

$menu-layer-name: components !default;

$menu-nested-indent: 1em !default;

$menu-item-active-selector: ".is-active" !default;
$menu-item-auto-selector: "a:not([class*=btn])" !default;

$menu-label-weight: bolder !default;

$menu-item-padding: 0.4375rem 1em !default;
$menu-item-radius: 4px !default;
$menu-item-border: 0 !default;
$menu-item-bg: transparent !default;
$menu-item-color: inherit !default;

$menu-item-outline: 0 !default;

$menu-item-focus-stroke: 0 !default;
$menu-item-focus-bg: change-color($root-fg, $alpha: 0.05) !default;
$menu-item-focus-color: inherit !default;

$menu-item-active-stroke: 0 !default;
$menu-item-active-bg: var(--color-theme-fade, #{$color-theme-fade}) !default;
$menu-item-active-color: inherit !default;
```
