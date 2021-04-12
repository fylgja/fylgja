# Fylgja - Input-group

[![NPM version](https://img.shields.io/npm/v/@fylgja/input-group.svg)](https://www.npmjs.org/package/@fylgja/input-group)

The input group extends upon the `@fylgja/form`.
By providing a wrapper that allows for more complex form field styles.
Like a search bar with button in the same form field.

## Installation

```bash
npm install @fylgja/input-group
```

And include the component in to your code via;

```scss
@use "@fylgja/input-group";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/input-group/input-group.css";
```

### Styles

By default the form style is set to our default style.

To use the **field** or **box** style.
Change the variable `$input-group-style`.
To one of the options, via;

```scss
@use "index" with ($input-group-style: box);
```

Or if you are a importing this as plain CSS in PostCSS or any other option.
Import the style directly via;

```css
@import "@fylgja/input-group/input-group-style-field.css";
/* Or */
@import "@fylgja/input-group/input-group-style-box.css";
```

## How to use

The input group allows you to build simple things.
Like a search form with a submit button in the same form field.

```html
<form id="search-form">
    <label for="search">Search</label>
    <div class="input-group">
        <input type="search" name="search" />
        <button class="btn -icon" style="--btn-radius: 0;">
            <svg>..</svg>
        </button>
    </div>
</form>
```

To more complex things.

The main focus is that you have the freedom to add anything.
So down here are all the classes that you have to your disposal.

### Input group

The main component and required for this component to do anything.
Simply create a wrapper element with this class and everything is a input child.

### Input extra & Input icon

The child components for just rendering child form elements, text or an icon.

The `.input-extra` can act as many things.
But its main focus is the flex-shrink style.
So this element will fit nicely next to the main form element.

The `.input-extra` can also be used for custom elements,
like Checkboxes.

The `.input-icon` is the same.
Except one thing.
It will also receive the focus color when any form element has focus.

## Config

The `@fylgja/input-group` inherits all of its variable values,
from the `@fylgja/form` component.

So for what each variable you can do.
See the the doc from the `@fylgja/form` component.

Or override it directly.
Via the variables found down here;

```scss
$input-group-style: default !default;

$input-group-border-width: input.$form-border-width !default;
$input-group-border-style: input.$form-border-style !default;
$input-group-border-color: var(
    --form-stroke,
    #{input.$form-border-color}
) !default;
$input-group-radius: var(--form-radius, #{input.$form-radius}) !default;
$input-group-bg: var(--form-bg, #{input.$form-bg}) !default;
$input-group-color: var(--form-color, #{input.$form-color}) !default;
$input-group-focus-color: input.$form-focus-color !default;
$input-group-focus-style: input.$form-focus-style !default;
```
