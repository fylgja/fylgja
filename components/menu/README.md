# Fylgja - Menu

[![NPM version](https://img.shields.io/npm/v/@fylgja/menu.svg)](https://www.npmjs.org/package/@fylgja/menu)

The menu component makes it easy to build many common navigation patterns.
Like a navbar or menu in a dropdown.

## Installation

```bash
npm install @fylgja/menu
```

And include the component in to your code via;

```scss
@use "@fylgja/menu";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/menu/menu.css";
```

## How to use

The most simple use case is just using the `.menu` class as wrapper,
around a set of links.

```html
<nav class="menu">
    <a href="#">..<a>
    <a href="#">..<a>
</nav>
```

Or as list.

```html
<nav class="menu">
    <ul>
        <li><a href="#">..<a></li>
        <li><a href="#">..<a></li>
    </ul>
</nav>
```

By default the menu is column based, like a normal list.
By using the modifier `.-row` the menu items can be placed in a row layout.

### Menu items

The menu class will style all links automatically,
But only if the are a child of the menu class or if a direct child of list item.

If you want to use a wrapper.
Then use the class `.menu-item`.
To add the same logic and styles as the auto menu item version.

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
To add an item styled as the `.menu-item` class,
without all the hover, focus and active states.

```html
<nav class="menu">
    <ul>
        <li><div class="menu-label">Topic</div></li>
        <ul>
            <li><a href="#">..<a></li>
            <li><a href="#">..<a></li>
        </ul>
    </ul>
</nav>
```

### Menu divider

The menu divider is not part of this component.
Since it is not specifically for the menu.

You need the use `.hr` class from the component `@fylgja/base`.
Combine it with the correct markup and you have a menu divider.

```html
<nav class="menu">
    <ul>
        <li><a href="#">..<a></li>
        <li class="hr" role="separator"></li>
        <li><a href="#">..<a></li>
    </ul>
</nav>
```

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following SCSS variables can you modify.

```scss
$enable-menu-row: true !default;
$enable-menu-nested: true !default;

$menu-nested-indent: 1em !default;

$menu-item-active-selector: ".is-active" !default;
$menu-item-auto-selector: "a:not(.btn)" !default;

$menu-label-weight: bolder !default;

$menu-item-padding: 0.4375rem 1em !default;
$menu-item-radius: 4px !default;
$menu-item-border: 0 !default;
$menu-item-bg: transparent !default;
$menu-item-color: inherit !default;

$menu-item-focus-stroke: 0 !default;
$menu-item-focus-bg: change-color($root-fg, $alpha: 0.05) !default;
$menu-item-focus-color: inherit !default;

$menu-item-active-stroke: 0 !default;
$menu-item-active-bg: var(--color-theme-fade, #{$color-theme-fade}) !default;
$menu-item-active-color: inherit !default;
```
