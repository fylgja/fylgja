# Fylgja - Section

[![NPM version](https://img.shields.io/npm/v/@fylgja/section)](https://www.npmjs.org/package/@fylgja/section)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The Section component is a wrapper component to show content in a sectioned area.

Like a Hero, Banner or just simple section with a different color in the page.

## Installation

```bash
npm install @fylgja/section
```

Then include the component in to your code via;

```scss
@use "@fylgja/section";
// Or via PostCSS import
@import "@fylgja/section";
```

## How to use

To use the section component create element with the class `.section`,
or use the native html element `<section>`

```html
<div class="section"></div>
```

This will create a element with CSS variables, easily customizable, the min-height, background and colors.

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

Example: make a hero component that is realy easily build.

```html
<style>
    #page-hero {
        --height: 500px;
        --img: url(https://placeimg.com/1024/500/nature);
        --bg: var(--color-theme);
        --color: var(--color-on-theme);
    }
</style>
<section id="page-hero" class="flex iteme-center justify-center py-8">
    <div class="container">
        <h1 class="mb-0">Heading</h1>
        <p class="h5 mt-0">Slogan text</p>
    </div>
</section>
```

## Config

Unlike other components, this component fully runs on the power of CSS.
And has no mayor config options, except for the theme default version.

```scss
$enable-section-theme: true !default;
```

When enabled it allows you to use the section with the theme color variable class.

```html
<div class="section -theme"></div>
```

It sets the background color to the `$color-theme` value,
and sets the color to the `$color-on-theme` value.
