# Fylgja - utilpack

[![NPM version](https://img.shields.io/npm/v/@fylgja/utilpack)](https://www.npmjs.org/package/@fylgja/utilpack)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Build and use your own CSS utility classes with Sass using the Fylgja utilpack.

## Installation

```bash
npm install @fylgja/utilpack
```

Then include the component in to your code via;

```scss
@use "@fylgja/utilpack";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/utilpack/utilpack.css";
```

## How to use

The util pack comes out of the box  with some commonly used utility classes,
that can be used directly.

Read the docs to see what is available and [see the default utilities classes here](https://fylgja.dev/components/utilpack/default-utilities).

## Config

If you want to add or configure the utility classes to your own taste, look no further, its down here.

### Adding util classes

Change the SCSS variable `$utilpack()`, and use one of the following sample use cases in this map.

> By default the key will be used with the value for the class name.
> If you want to change this behavior, use the key value.
> See example `Sample with number/key values`.

**Simple Sample**

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "text-align": (
        "values": right left
    )
));
// Output =
// .text-align-right{ text-align:right; }
// .text-align-left{ text-align:left; }
```

**Sample with number/key values**

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "font-weight": (
        "values": (
            "normal": 400,
            "bold": 700
        )
    )
));
// Output =
// .font-weight-normal{ font-weight:400; }
// .font-weight-bold{ font-weight:700; }
```

**Sample with class**

If you want to use a different value for the class, 
then what the util key name is.

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "text-align": (
        "class": "text",
        "values": right left
    )
));
// Output =
// .text-right{ text-align:right; }
// .text-left{ text-align:left; }
```

**Sample with property**

If you want to use a different value for the class,
then what the util key name is.

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "flex-fill": (
        "property": "flex",
        "class": "flex",
        "values": (
            "fill": 1 1 auto
        )
    )
));
// Output = .flex-fill{ flex:1 1 auto; }
```

**Sample responsive**

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "text-align": (
        "values": right,
        "responsive": true
    )
));
// Output =
// .text-align-right{ text-align:right; }
// @media(min-width: 768px){.md-text-align-right{ text-align:right; }}
```

**Sample print**

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "text-align": (
        "values": right,
        "print": true
    )
));
// Output =
// .text-align-right{ text-align:right; }
// @media print{.md-text-align-right{ text-align:right; }}
```

**Sample important**

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "text-align": (
        "values": right,
        "important": true
    )
));
// Output = .text-align-right{ text-align:right !important; }
```

**Sample with states (e.g. focus, hover, etc)**

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "text-align": (
        "values": right,
        "states": hover focus
    )
));
// Output =
// .focus-text-right:focus,
// .hover-text-right:hover,
// .text-right{ text-align: right; }
```

### Changing the default util classes

You can start fresh by setting the `$utilpack-defaults` map to false or to a empty map.

```scss
@use "@fylgja/utilpack" with (
    $utilpack-defaults: false
);
```

Or unset a specific default, like the typography.

```scss
@use "@fylgja/utilpack" with (
    $utilpack-defaults-typography: false
);
```

You can also quickly edit various default settings without changing the config,
this can be done via;

```scss
$enable-utilpack-UTIL-responsive: false;
$enable-utilpack-UTIL-print: false;
$enable-utilpack-UTIL-important: false;
// Sample:
$enable-utilpack-typography-responsive: true;
```

<details class="faq-panel"><summary>Options for UTIL</summary>

- border
- divider
- box-alignment
- color
- flex
- display
- float
- object
- overflow
- visibility
- index
- position
- width
- height
- margin
- padding
- space
- typography

</details>

### Breakpoints

The responsive mode will use the breakpoint values set in the map `$utilpack-breakpoints`,
these are the defaults from the component `@fylgja/mq`;

```scss
// $utilpack-breakpoints: $mq-breakpoints !default;
$mq-breakpoints: (
    "xs": 420px,   // Mobile larger
    "sm": 640px,   // Tablet
    "md": 768px,   // Tablet large
    "lg": 1024px,  // Laptop
    "xl": 1440px,  // Desktop
    "xxl": 2200px, // Large Desktop / TV
) !default;
```

The key will be used as the prefix name for the utility,
and the value is always the min-width media query.

```css
@media (min-width: 420px) {
    .xs-text-bolder {
        font-weight: bolder;
    }
}
```

It will use the hyphen as default separator,
but if you prefer the same separator as seen in TailwindCSS,
you can use `$utilpack-separator: "\:"`. 

_The Tailwind separator can conflict with specific tools and linters,_
_since it uses specific characters that are normally marked as unsafe and needs escaping._

## FAQ

<details class="faq-panel" open><summary>Do I need CSS Purge?</summary>

If you are using the CSS version instead of the SCSS version,
then yes for sure.

If you are using the SCSS version, use the map remove function instead,
keeping your dependencies small.

If you plan to use this for all of your CSS needs, similar to TailwindCSS,
then yes use it.

We do advice against a utility only approach, always combine it with CSS components
for a better HTML and CSS.

</details>

<details class="faq-panel"><summary>Why are there no colors utils?</summary>

We advice to use CSS variables for color management.

If you want to use utils for almost everything,
consider adding the following utilpack config, instead using static colors.

```scss
@use "@fylgja/utilpack" with ($utilpack: (
    "color": (
        "values": (
            "theme": "var(--color-theme)",
            "accent": "var(--color-accent)"
        )
    )
));
```

</details>

<details class="faq-panel"><summary>Why are there no grid utils?</summary>

Most grid solutions still rely on the older grid solution, like 12 columns,
but now via the CSS grid spec instead.<br>
Its is considered a bad solution for handling layouts,
and creates a lot of 1 time uses, even with utilities.

If you really must rely on a utility class, we would advise to build your own.
Or even better use the `@fylgja/autogrid`,
that uses the power of CSS variables and the grid spec.

</details>
