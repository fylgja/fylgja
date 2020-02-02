# Aspect Ratio component

[![NPM version](https://img.shields.io/npm/v/@fylgja/aspect-ratio.svg)](https://www.npmjs.org/package/@fylgja/aspect-ratio)

The aspect ratio component allows you to make not just videos,
but anything you want to a certain responsive aspect ratio.

- [Installation](#installation)
- [How to use](#how-to-use)
- [Config](#config)

## Installation

```bash
npm install @fylgja/aspect-ratio
```

And include the component in to your code via;

```scss 
@import "@fylgja/aspect-ratio"; // DartSass or LibSass >= 3.6
@import "@fylgja/aspect-ratio/index"; // LibSass <= 3.5
@import "@fylgja/aspect-ratio/aspect-ratio.css"; // CSS or PostCSS
```

## How to use

To use the aspect-ratio create element with the class `.aspect-ratio`.
The any child of the aspect-ratio will now always be the ratio set by the class.

_16/9 is the default ratio_

To edit the ratio use the css variable with the same name.

```html
<div class="aspect-ratio" style="--aspect-ratio: 21*9;">..</div>
```

## Config

Want more control on the base styles, than the css variable.
Down here are the following scss variables you can modify.

```scss
$aspect-ratio: "16*9" !default;
$load-aspect-ratios: () !default;
```

If your project needs more ratio's and it is not for one use case.
You can load more via the `$load-aspect-ratios`.

```scss
$load-aspect-ratios: (
    "-r1x1": "1*1",
    "-r4x3": "4*3",
    "-r21x9": "21*9"
);
```

The `$load-aspect-ratio` also value can alsobe a list value.
Which has a aspect ratio and media query value.

```scss
$load-aspect-ratios: (
    "-md-r1x1": ("1*1", "min-width: 768px")
) !default;
```
