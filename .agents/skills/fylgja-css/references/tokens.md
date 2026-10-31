# Fylgja Tokens

Design tokens as plain CSS variables.

## Imports

`@fylgja/tokens/css` imports everything. Each group also has its own file, such as `@fylgja/tokens/css/colors.css`.

Other formats live next to the CSS, such as `@fylgja/tokens/scss/colors.scss`, `@fylgja/tokens/js/colors.js`, `@fylgja/tokens/tailwind`, and the JSON design tokens like `@fylgja/tokens/tokens/fylgja.tokens.json`. Do not write `@import "@fylgja/tokens";` in CSS, since the package root is the JS entry.

## Groups

| File | Tokens |
| --- | --- |
| `aspect-ratio` | `--ratio-box`, `--ratio-landscape`, `--ratio-portrait`, `--ratio-widescreen`, `--ratio-superwide`, `--ratio-ultrawide`, `--ratio-golden` |
| `borders` | `--border-size-1` to `--border-size-5`, `--radius-1` to `--radius-6`, `--radius-full` |
| `colors` | `--color-0` to `--color-14` |
| `easing` | `--ease-1` to `--ease-5`, `--ease-in-1`, and the other `--ease-*` families |
| `fonts` | `--font-size-1` to `--font-size-9`, `--font-size-fluid-1` and up, `--line-height-1` to `--line-height-5` |
| `hues` | `--hue-pink`, `--hue-purple`, `--hue-violet`, `--hue-indigo`, `--hue-blue`, `--hue-cyan`, `--hue-teal`, `--hue-green`, `--hue-lime`, `--hue-yellow`, `--hue-orange`, `--hue-red` |
| `mq` | See media queries below |
| `shadows` | `--shadow-1` to `--shadow-6`, tinted by `--shadow-color` |
| `sizes` | `--spacing`, `--size-1` and up, `--size-05`, `--size-heading`, `--size-content` |
| `z-layer` | `--layer-1` to `--layer-5` |

## Dynamic colors

Colors are generated, not fixed. Set `--hue` or `--chroma` on any element and its whole `--color-*` scale follows, including for its children:

```html
<section style="--hue: var(--hue-green)">
  <p style="color: var(--color-7)">Green text</p>
</section>
```

`--shadow-color` works the same way for the shadow scale. Use `colors.static.css` when a fixed palette is needed instead.

## Media queries

`--sm` (480px), `--md` (768px), `--lg` (1024px), `--xl` (1440px), and `--xxl` (1920px) are `width >=` queries, each with a `-max` version such as `--md-max`.

Preferences include `--scheme-dark`, `--scheme-light`, `--motion-safe`, `--motion-reduce`, `--touch`, `--mouse`, `--stylus`, and `--pointer`.

These are custom properties holding the query text, so `@media (--md)` needs a build step for custom media. Without one, write the real query, such as `@media (width >= 768px)`.

## Generating tokens

Use `@fylgja/props-builder` to generate a token set in the same formats.
