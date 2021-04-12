# Fylgja - Section

[![NPM version](https://img.shields.io/npm/v/@fylgja/section)](https://www.npmjs.org/package/@fylgja/section)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The Section component is a wrapper component to show content in a sectioned area.
Like a Hero, Banner or just simple section with a different color in the page.

## Installation

```bash
npm install @fylgja/section
```

And include the component in to your code via;

```scss
@use "@fylgja/section";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/section/section.css";
```

## How to use

To use the section component create element with the class `.section`.
Or use the native html element `<section>`

```html
<div class="section"></div>
```

This will create element with CSS variables.
For easy customization for the min-height, background and colors.
So the real power lies in its strength to be customized via CSS variables.

So if you want to build something like a hero,
you only need something like this;

```html
<style>
    #page-hero {
        --height: 500px;
        --img: url(https://placeimg.com/1024/500/nature);
        --bg: var(--color-theme);
        --color: var(--color-on-theme);
        padding: 2em 1em;
    }
</style>
<section id="page-hero">
    <h1>Heading</h1>
    <p>Slogan text</p>
</section>
```

Or make it more fancy via some extra fylgja components.
Like the `@fylgja/base`, `@fylgja/container` and `@fylgja/utilpack`.
To make a hero component that is truly easily build.

```html
<style>
    #page-hero {
        --height: 500px;
        --img: url(https://placeimg.com/1024/500/nature);
        --bg: var(--color-theme);
        --color: var(--color-on-theme);
    }
</style>
<section id="page-hero" class="flex items-center justify-center py-8">
    <div class="container">
        <h1 class="mb-0">Heading</h1>
        <p class="h5 mt-0">Slogan text</p>
    </div>
</section>
```

## Config

Unlike other components.
This component fully runs on the power of CSS.
And so has no mayor config options.
Except for the theme default version.

```scss
$enable-section-theme: true !default;
```

Which when enabled.
Allows you to use the section with the theme color variable class.

```html
<div class="section -theme"></div>
```

Which sets the background color to the `$color-theme` value.
And sets the color to the `$color-on-theme` value.
