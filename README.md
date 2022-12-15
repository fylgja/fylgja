<div align="center">
<h1>
  <a href="https://fylgja.dev/">
    <img src="https://github.com/fylgja/fylgja/blob/main/assets/logo.svg" alt="Fylgja" width="300" height="130">
  </a>
</h1>

[![NPM version](https://img.shields.io/npm/v/fylgja?logo=npm&style=flat-square)](https://www.npmjs.com/package/fylgja)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/fylgja/fylgja/test.yml?branch=main&color=%2343a047&style=flat-square)
![License](https://img.shields.io/github/license/fylgja/fylgja?color=%23234&style=flat-square)

</div>

Fylgja is a component based CSS framework.
Allowing you to use only what you need.

Each component is build as foundation for a specific component.
So you can style it to your own look.
Without having to build the base styles every time.

Fylgja is powered via SCSS.
But can also be used via PostCSS or just as plain CSS.
Making it easy to include it in your exciting project,
or in your preferred setup.

Want to learn more?
Check out our site, [https://fylgja.dev](https://fylgja.dev/)

## Installation

See each component on how to install them separately.

Or download Fylgja as one package.

```bash
npm install fylgja
```

Include fylgja as one package in to your code via;

```scss
@use "fylgja";
// Or via PostCSS import
@import "fylgja";
```

For on how to configure each component via this one import,
[See our Guides](https://fylgja.dev/guides/), or each component.

## Support

Do you want to support Fylgja?

You can that in many ways.

Start with starring the repro.
Or share us on your favorite social network with the hashtag #FylgjaCode.
Making it easier for others to find Fylgja.

But you also contribute directly to fylgja by;

- Adding a issue or feature.
- Adding a pull request to our github repo.
- Helping out with the Site doc and guides, via the github repo.

We appreciate any contribution, no matter if it is small or big.

## Testing/Playground

We have a very simple testing ground for a our CSS Components.

The entry file is found in the root (`index.html`) and all sub pages are found in `_playground`,
and each file is a basis html file.

We have a option to start the playground with a localhost port,
run `npm run dev:playground` or `npm run dev`
