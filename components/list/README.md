# Fylgja - List

[![NPM version](https://img.shields.io/npm/v/@fylgja/list)](https://www.npmjs.org/package/@fylgja/list)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The list component add more control on how you can style lists.
By adding a custom marker option with full flexibility to style and animate.

## Installation

```bash
npm install @fylgja/list
```

And include the component in to your code via;

```scss
@use "@fylgja/list";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/list/list.css";
```


## How to use

Out of the box this will work by just adding the class `.list-style`
to any `ul` or `ol` tag.

The `.list-style` will replace the default list style
with a `::before` with editable content inside.
This way you have the same list but now can edit the style of the marker.

Down here is a sample with a custom check mark style.

```html
<style>
.list-style.-checkmark {
    --marker-icon: "✓";
    --marker-gap: 1ch;
    --marker-color: #4caf50;
}
</style>
<ul class="list-style -checkmark">..</ul>
```

### Unset list style

The list style also comes with a CSS variable class, none.
This will unset the list style.

```html
<ul class="list-style -none">..</ul>
```

### Build new lists (SCSS only)

The list component also comes packing with a build in mixin.
That will create the marker style.

Call the mixin `list-style()` and pass the props as seen down here.
This allows creation of a custom lists in CSS,
without writing any sub classes that are needed.

```scss
.list-style.-custom {
    // Prop names with defaults
    @include list-style(
        $symbol, // list marker to use
        $style: string, // list style to generate (string, image, counter)
        $gap: false, // extra space after the list marker
        $color: false,
        $prefix: false, // only works for the counter style
        $suffix: false // only works for the counter style
    );
    // Just an icon
    @include list-style("✓");
    // Icon with a custom gap
    @include list-style("✓", $gap: 2ch);
    // Icon as numbered list (<ol> style)
    @include list-style(decimal, counter);
    @include list-style(decimal, counter, $suffix: "."); // with suffix
    // Icon as image, via background-image
    @include list-style(url("data:image/svg+xml,..."), image);
}
```

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following SCSS variables can you modify.

```scss
$enable-list-style-none: true !default;

$list-marker-gap: 1ch !default;
$list-marker-icon: "•" !default;
$list-marker-color: null !default;

// Only for the image style
$list-marker-icon-width: 1em !default;
$list-marker-icon-height: 1.5em !default; // Same as line-height default
```

## FAQ

<details class="faq-panel" open><summary><span>Do I still needs this with the pseudo <code>:marker</code></span></summary>

No.
If you plan to just set an icon and the color.
The native solution via the `:marker` pseudo selector, is all you need.

But if you plan to do more like animation or need better browser support.
You should use this.

We are planing to update the logic for the list-style to the pseudo `:marker`.
When support is better and more stable.

</details>
