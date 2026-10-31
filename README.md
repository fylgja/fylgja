<h1 align="center">
  <a href="https://fylgja.dev/">
    <img src="https://raw.githubusercontent.com/fylgja/.github/main/assets/readme-banner.webp" alt="Fylgja CSS: your modular CSS companion, take only what you need. Library, UI and docs at fylgja.dev" width="1280" height="320">
  </a>
</h1>

<div align="center">

[![Fylgja](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Ffylgja%2F.github%2Frefs%2Fheads%2Fmain%2Fassets%2Fbadge%2Fv1.0.0.json)](https://fylgja.dev/)
[![CI](https://img.shields.io/github/actions/workflow/status/fylgja/fylgja/test.yml?color=%230969da&label=&branch=main&logo=github&labelColor=%232b1c2c)](https://github.com/fylgja/fylgja/actions)
[![Version](https://img.shields.io/npm/v/fylgja?color=%230969da&label=&logo=npm&labelColor=%232b1c2c)](https://www.npmjs.com/package/fylgja)
[![License](https://img.shields.io/github/license/fylgja/fylgja?color=%23ffb900&labelColor=%232b1c2c)](https://github.com/fylgja/fylgja/blob/main/LICENSE)

</div>

Fylgja CSS is a modular CSS library built around plain HTML. Pick exactly the parts you need, combine them with the tools you already use, and override anything without fighting specificity.

## Why Fylgja?

- **Modular:** every package works on its own. Use Fylgja Base only for its form styles, or add Tokens without anything else.
- **Lightweight:** you only ship the CSS you import, and the classless preflight is just a few kilobytes minified.
- **Easy to customize:** Fylgja Base keeps its element styles at zero specificity with `:where`, and CSS variables drive the rest, so your own styles win without a fight.
- **Plays well with others:** works alongside Tailwind CSS, UnoCSS and your existing CSS.

## Packages

This repository is a monorepo. Each package is published to npm on its own.

### [Fylgja Base](https://fylgja.dev/library/base/)

Classless defaults that make plain HTML look good: typography, forms, buttons and dialogs, without a single class. Element styles are wrapped in `:where`, so they don't outweigh your own.

### [Fylgja Tokens](https://fylgja.dev/library/tokens/)

One design language as plain CSS variables, for colors, sizes, shadows, easing and more. Available as CSS or SCSS, and you can generate your own set with [props-builder](https://fylgja.dev/library/extensions/props-builder/).

### [Fylgja Utilities](https://fylgja.dev/library/utilities/)

A curated set of utilities you tune with a CSS variable instead of a new class. They complement utility first frameworks rather than replace them.

### [Fylgja Components](https://fylgja.dev/library/components/)

Small, single class components such as `@fylgja/card`, `@fylgja/callout` and `@fylgja/toast`, each installable on its own.

### [Fylgja UI](https://fylgja.dev/ui/)

Not a package but a gallery: components you copy, not dependencies you install. Plain, accessible HTML that works with any framework.

## Getting started

Install Base, Tokens and Utilities in one go with the `fylgja` meta package:

```bash
npm install fylgja
```

Then import what you need in your CSS:

```css
@import "@fylgja/base";
@import "@fylgja/tokens/css";
@import "@fylgja/utilities";
```

Prefer individual packages? Install only those, for example `npm install @fylgja/base`.

### Without a build step

Copy a file straight into your project with the CLI, no install needed:

```bash
npx fylgja@latest add base
```

Run `npx fylgja@latest help` to see every file you can add. Or link the packages from a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/base/index.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fylgja/tokens/css/index.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fylgja/utilities/index.min.css" rel="stylesheet">
```

## Documentation

Read the full documentation, package guides and the UI gallery at [fylgja.dev](https://fylgja.dev/). Working with an AI assistant? The [Fylgja skills](https://github.com/fylgja/skills) teach it how Fylgja is put together. In Claude Code, install them with:

```text
/plugin marketplace add fylgja/skills
/plugin install fylgja@fylgja
```

## Contributing

Issues and pull requests are welcome. See the [contributing guide](https://github.com/fylgja/fylgja/blob/main/CONTRIBUTING.md) to get set up, and the [security policy](https://github.com/fylgja/fylgja/blob/main/SECURITY.md) for reporting vulnerabilities.

## License

Fylgja CSS is licensed under the [MIT License](https://github.com/fylgja/fylgja/blob/main/LICENSE).
