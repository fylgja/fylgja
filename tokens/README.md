# Fylgja Tokens

Establish a consistent design language across your projects with Fylgja Design Tokens.

This predefined set of tokens eliminates redundant variations in spacing, colors, and other design elements,
ensuring a unified structure throughout your codebase.

For projects with specific requirements,
Fylgja offers granular imports.

Select only the necessary token categories, such as spacing, and define your own custom color palettes.

Furthermore, Fylgja seamlessly integrates with [PostCSS Jit Props],
mirroring the functionality of [Open Props](https://open-props.style/) and other design token systems, for optimized CSS output.

## Installation

You can install Fylgja Tokens via npm or other Node-based package managers like pnpm or bun:

```bash
npm install @fylgja/tokens
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/tokens/css/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```js
import tokens from "@fylgja/tokens";
```

or as CSS with:

```css
@import "@fylgja/tokens/css";
```

Next to this we also offers imports for SCSS, JS and for design systems in a json format.

Each option can be import for all tokens or just the part you need.

<div class="scroll-x">

| Import Path                                 | Description                                     |
| ------------------------------------------- | ----------------------------------------------- |
| `@fylgja/tokens/{css/scss}`                 | All tokens                                      |
| `@fylgja/tokens/{css/scss/js}/aspect-ratio` | Aspect Ratios                                   |
| `@fylgja/tokens/{css/scss/js}/borders`      | Border Widths and Radii                         |
| `@fylgja/tokens/{css/scss/js}/colors`       | List of 14 colors in oklch format               |
| `@fylgja/tokens/{css/scss}/hues`            | JS version is part of the colors import         |
| `@fylgja/tokens/scss/colors-static`         | Combination of colors and hues as a static list |
| `@fylgja/tokens/{css/scss/js}/easing`       | Easing Functions                                |
| `@fylgja/tokens/{css/scss/js}/fonts`        | Font Size and Line Height                       |
| `@fylgja/tokens/{css/scss/js}/mq`           | CSS Breakpoints and User preferences            |
| `@fylgja/tokens/{css/scss/js}/shadows`      | Shadows                                         |
| `@fylgja/tokens/{css/scss/js}/sizes`        | Sizes                                           |
| `@fylgja/tokens/{css/scss/js}/z-layer`      | Z-Index's                                       |

> [!Note]
> Not all tokens can be represented in a design system format.

| Import Path for design system     | Description                                      |
| --------------------------------- | ------------------------------------------------ |
| `@fylgja/tokens/tokens`           | Follows the [(draft) Design Tokens Spec]         |
| `@fylgja/tokens/figma`            | Can be used with the Figma Plugin [Token Studio] |
| `@fylgja/tokens/style-dictionary` | Follow the [Style Dictionary] format             |

[(draft) Design Tokens Spec]: https://design-tokens.github.io/community-group/format/
[Token Studio]: https://tokens.studio/
[Style Dictionary]: https://styledictionary.com/

</div>

### Shadow DOM Support

For web components utilizing Shadow DOM,
import the `.host` variants to apply tokens within the host scope:

```css
@import "@fylgja/tokens/aspect-ratio.host";
```

This enables seamless integration of Fylgja Design Tokens within your custom web components.

### PostCSS Jit Props Integration

Leverage [PostCSS Jit Props] to optimize CSS output by including only the tokens used in your project.

While Fylgja tokens are designed for minimal size,
this integration further reduces file sizes,
especially when combined with custom tokens.

[PostCSS Jit Props]: https://github.com/GoogleChromeLabs/postcss-jit-props
