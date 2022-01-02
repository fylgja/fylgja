# Fylgja - Transform

[![NPM version](https://img.shields.io/npm/v/@fylgja/transform)](https://www.npmjs.org/package/@fylgja/transform)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Add transforms with ease, with the power of CSS variables.

## Installation

```bash
npm install @fylgja/transform
```

Then include the component in to your code via;

```scss
@use "@fylgja/transform";
// Or via PostCSS import
@import "@fylgja/transform";
```

## How to use

The transform component is a helper and it can be used 2 ways.

The first option is the CSS only way,
where you use the class provided by this Component.

```html
<div class="transform">..</div>
```

By default this will do nothing, you need some CSS Variables to use its magic.

You can move anything on the X axis by calling the variable `--tx`

```html
<div class="transform" style="--tx: 50%;">..</div>
```

The CSS Variables are set in the component, and not used as fallback value,
so each variables is scoped and does not inherit.

This way you can transform something to what you want to realise.

Don't you like inline styles? then use a class instead.

Add a inline style tag in the head of your page or via your CSS file.

```html
<style>
    .transition.-move-down-right {
        --tx: 50%;
        --ty: 50%;
    }
</style>
<div class="transform -move-down-right">..</div>
```

As you can see there are several options by using this basis.

The second option is to use our helper mixin directly, it is Sass only option.

First call the helper and then use the mixin `transform`;

```scss
@use "@fylgja/transform/helper" as *;

.custom {
    @include transform(
        $tx: 0, // TranslateX
        $ty: 0, // TranslateY
        $tz: 0, // TranslateZ
        $ta: 0, // Rotate
        $sx: 1, // ScaleX
        $sy: 1, // ScaleY
        $sz: 1, // ScaleZ
        $ax: 0, // SkewX
        $ay: 0, // SkewY
        $enable-3d: false // force enable 3D mode
    );
}
```

_Using `$tz` or `$sz` will also enable 3D mode._

After you have set this.
You will get your custom class that is just as customizable as the default class.

A good example is using the mixin
and calling the CSS variables for the specific state.


```scss
@use "@fylgja/transform/helper" as *;

.custom {
    @include transform;

    &:hover {
        --tx: 50%;
    }
}
```

### 3D mode

This the same as the options mentioned above but also allows you to use the Z axis.

```html
<div class="transform3d" style="--tz: 50%;">..</div>
```

Or via the SCSS mixin.

```scss
@use "@fylgja/transform/helper" as *;

.custom {
    @include transform($tz: 50%);
}

.customVar {
    @include transform($enable-3d: true);

    &:hover {
        --tx: 50%;
    }
}
```

If don't need 3D mode.
You unset this option by setting it to false

```scss
@use "@fylgja/transform" with (
    $enable-3d-transform: false
);
```

### Class Variables

The `@fylgja/transform` component also ships with some util classes
to extend the transform class.

You can change what is loaded via the `$transform-utils` variable.

It works similar to the `@fylgja/utilpack`,
with the exception that is is part of the transform class.

```html
<div class="transform -tx-50">..</div>
```

This syntax looks very similar to the CSS Variable version,
and is nice readable.

By default we load the following options;

| Class  | Value               |
| ------ | ------------------- |
| `t-$`  | `--tx: $; --ty: $;` |
| `tx-$` | `--tx: $;`          |
| `ty-$` | `--ty: $;`          |

**Value ($);**

- 1: 1em
- n1: -1em
- half: 50%
- full: 100%
- nhalf: -50%
- nfull: -100%

| Class  | Value               |
| ------ | ------------------- |
| `s-$`  | `--sx: $; --sy: $;` |
| `sx-$` | `--sx: $;`          |
| `sy-$` | `--sy: $;`          |

**Value ($);**

- 50: 0.5
- 90: 0.9
- 100: 1
- 120: 1.2

| Class      | Value          |
| ---------- | -------------- |
| `origin-$` | `--origin: $;` |

**Value ($);**

- center: center
- top: top
- top-right: top right
- right: right
- bottom-right: bottom right
- bottom: bottom
- bottom-left: bottom left
- left: left
- top-left: top left

Each util also has an media query version just as with the `@fylgja/utilpack`.
It uses the same prefix syntax.

```html
<div class="transform -md-tx-50">..</div>
```

You can also change it with the following variables;

```scss
$transform-utils-separator: "-" !default;
$transform-utils-breakpoints: $mq-breakpoints !default;
```

_`$mq-breakpoints` is a variable from the `@fylgja/mq` component._

#### Config options

The map that is loaded is very simple to use.
The only  requirement is that the key is also used in the CSS variable options.

You can extend the defautls via the variable `$transform-utils`.
Or directly change the the defaults or unset theme via the `$transform-utils-defaults`.

To unset any Class Variables;

```scss
@use "@fylgja/transform" with (
    $transform-utils-defaults: false
);
```

To change or edit any value;

```scss
@use "@fylgja/transform" with (
    $transform-utils: (
        "t": (
            "50": 50%,
            "full": 100%,
            "n50": -50%,
            "nfull": -100%
        )
    )
);
```

If the key already exists in the defaults it will override any value in there.
So make sure to re-add the defaults, if you need them.

Or override the default values directly;

```scss
$transform-translates: (
    "1": 1em,
    "n1": -1em,
    "25": 25%,
    "50": 50%,
    "75": 75%,
    "full": 100%,
    "n25": -25%,
    "n50": -50%,
    "n75": -75%,
    "nfull": -100%,
) !default;

$transform-scales: (
    "50": 0.5,
    "90": 0.9,
    "100": 1,
    "120": 1.2,
) !default;
```
