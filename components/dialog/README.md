# Fylgja - Dialog

[![NPM version](https://img.shields.io/npm/v/@fylgja/dialog)](https://www.npmjs.org/package/@fylgja/dialog)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The dialog is 3 components in 1.
It is by default a modal.
But with 1 small change can be a offcanvas,
notification popup or as it also know as, the snackbar.

With this, the code is super tiny compared to other solutions.
And is super flexible.
Since you can show it as modal on desktop and a offcanvas on mobile.
by changing a few CSS variables.

## Installation

```bash
npm install @fylgja/dialog
```

And include the component in to your code via;

```scss
@use "@fylgja/dialog";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/dialog/dialog.css";
```

## How to use

To use the dialog simply create a html dialog element and a button,
that can open the dialog.

```html
<!-- Modal -->
<button onclick="document.querySelector('#dialog-modal').showModal()">Open</button>
<dialog id="dialog-modal">..</dialog>

<!-- Snackbar -->
<button onclick="document.querySelector('#dialog-snackbar').show()">Open</button>
<dialog id="dialog-snackbar" class="snackbar">..</dialog>

<!-- Offcanvas -->
<button onclick="document.querySelector('#dialog-offcanvas').showModal()">Open</button>
<dialog id="dialog-offcanvas" class="offcanvas">..</dialog>
<!-- Or use 'offcanvas.-from-end' -->
```

Use the `.dialog-inner`.
If your content can be to big for specific screen sizes.
This will allow scrolling inside the dialog-inner.

You can combine this with a header and/or footer.
That will always show, when you are scrolling.

```html
<dialog id="dialog-modal">
    <header>Modal Title</header>
    <div class="dialog-inner"></div>
    <footer><button>Sumbit</button></footer>
</dialog>
```

### Support

You will need the polyfill until the html dialog is supported fully
-> [github.com/GoogleChrome/dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill).

[![Data on support for the dialog feature across the major browsers from caniuse.com](https://caniuse.bitsofco.de/image/dialog.jpg)](https://caniuse.com/dialog)

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following scss variables can you modify.

```scss
$enable-dialog-polyfill: true !default;

// Modal (default)
$dialog-offset: 2em !default;
$dialog-max-width: calc(100% - #{$dialog-offset}) !default;
$dialog-max-height: $dialog-max-width !default;
$dialog-radius: 0.3em !default;
$dialog-padding: 2em !default;

$dialog-elevation: var(--elevation-z6) !default;
$dialog-bg: var(--color-bg, #{$root-bg}) !default;
$dialog-color: inherit !default;

$dialog-backdrop: rgba(black, 0.2) !default;

// Snackbar
$dialog-snackbar-from: end !default;
$dialog-snackbar-offset: 1em !default;

// Offcanvas
$dialog-offcanvas-radius: 0 !default;
```
