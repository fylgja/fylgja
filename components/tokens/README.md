# Fylgja - Tokens

[![NPM version](https://img.shields.io/npm/v/@fylgja/tokens)](https://www.npmjs.org/package/@fylgja/tokens)
![license](https://img.shields.io/github/license/fylgja/fylgja)

A collection of all Fylgja tokens offered for specific design tools or frameworks.

## Installation

You can add Fylgja Tokens in a variety of ways.
However, the two choices are typically through a CDN or with NPM.

### Design tools (e.g. Sketch or Figma)

For design tools use the CDN link as entry,
or download the tokens trough the github repo.

These tokens can be used with any design tool that follows the new [design tokens specification](https://design-tokens.github.io/community-group/format/).

```
https://unpkg.com/@fylgja/tokens/tokens.json
```

These tokens are specific for [Figma compatibility](https://github.com/six7/figma-tokens);

```
https://unpkg.com/@fylgja/tokens/figma-tokens.json
https://unpkg.com/@fylgja/tokens/figma-tokens.sync.json
```

### Javascript token based systems like Tailwind

```bash
npm install @fylgja/tokens
```

Afterward, include the tokens into your code using;

```js
const props = require("@fylgja/tokens/tokens.json"); // cjs
// Or
import props from "@fylgja/tokens/tokens.json"; // mjs
```

These tokens are specific for Tailwind compatibility:

```js
const props = require("@fylgja/tokens/tailwind"); // cjs
// Or
import props from "@fylgja/tokens/tailwind"; // mjs
```

## How to use

This depends on your tool of choice.

But each token that is offered by Fylgja can be found here as 1 file.

See the [Fylgja Components](https://fylgja.dev/components/) for all CSS Props (Design Tokens),
to see what is includes here.
