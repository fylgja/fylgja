# Fylgja - Props Builder

[![NPM version](https://img.shields.io/npm/v/@fylgja/props-builder)](https://www.npmjs.org/package/@fylgja/props-builder)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Build your own CSS props a.k.a Design Tokens, with ease.

> This package is mainly used for our own CSS props components,
> but also available to any one that wants to build there own CSS props.

## Installation

```bash
npm install @fylgja/props-builder
```

## How to use

This is a Javascript function and is used in combination with your own Javascript build file.

First create an javascript file, for example `build.js`

import the props builder in your build js;

```js
import { propsBuilder } from "@fylgja/props-builder";
```

and call it with at least a filename and some props;

```js
const spacers = {
    "size-1": "0.5em",
    "size-2": "1em",
    "size-3": "1.5em",
};

propsBuilder({
    filename: "spacers.css",
    props: spacers
});
```

Now you have a css file with your own spacers;

```css
/* File: spacers.css */
:root {
    --size-1: 0.5em;
    --size-2: 1em;
    --size-3: 1.5em;
}
```

### Tweak the build options

Lets say you want a different parent class, or you want a prefix,
you can do so, by using the available options.

Each option is visible if your using an IDE that supports JSDoc or/and Typescript.

But here are the options,
just in case if you don't have an editor with those super powers.

| Option           | Type                                      | default    |
| ---------------- | ----------------------------------------- | ---------- |
| props            | { [key: string\|number]: string\|number } | ...        |
| filename         | string                                    | ...        |
| selector         | string                                    | `":root"`  |
| prefix           | string                                    | `""`       |
| generationSyntax | string                                    | **Note** 1 |
| jsonColorKeys    | string[]                                  | **Note** 2 |

> **Note** 1 If empty the default is based on the file extension

> **Note** 2 If empty default color map is used

### Jit-props syntax support

Our tokens files are one way that Fylgja differs from [Open Props](https://open-props.style/).

Because the props in Fylgja are not hard coded in a specific variable syntax,
they are compatible with other CSS preprocessor like Sass or Javascript frameworks like TailwindCSS and WindiCSS.

Because of this, the Fylgja Props-builder also offers additional export options for CommonJS and ECMAScript.

This enables you to use not just the JSON version from [@fylgja/tokens](https://fylgja.dev/components/tokens/),
but also each individual Fylgja component with a javascript export in the Open Props syntax,
which is supported by [PostCSS JIT Props](https://github.com/GoogleChromeLabs/postcss-jit-props).
