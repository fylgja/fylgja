---
name: create-fylgja-offcanvas
description: Use when building an offcanvas, drawer, slide-in panel, side sheet, or mobile nav panel in a Fylgja project. Ensures it is a native <dialog> styled with the small .offcanvas rule on top of Fylgja's base dialog styles, opened via invoker commands, never a bespoke div plus overlay and never redeclaring base defaults.
---

An offcanvas is a panel that slides in from a screen edge over a dimmed page. In
Fylgja it is a native `<dialog>` with an `.offcanvas` class. The base `dialog`
styles do the heavy lifting; the `.offcanvas` rule just retargets a few of their
variables to make a drawer. For classes and variables see [fylgja-css]. For
centered dialogs and confirmations use [create-fylgja-modal].

## Markup

Add `class="offcanvas"` to a `<dialog>` and open/close it with invoker commands
(no JavaScript). Use `closedby="any"` so the backdrop and Escape both dismiss it,
which is expected for a drawer.

```html
<button type="button" commandfor="menu" command="show-modal">Open menu</button>

<dialog id="menu" class="offcanvas" closedby="any" aria-labelledby="menu-title">
  <h2 id="menu-title">Menu</h2>
  <nav class="flex-col gap">
    <a href="/">Home</a>
    <a href="/library/">Library</a>
    <a href="/ui/">UI</a>
  </nav>
  <button type="button" commandfor="menu" command="close">Close</button>
</dialog>
```

## The `.offcanvas` rule

The base `dialog` styles already provide the backdrop, the slide in/out (via
`--tx`/`--ty` translate with `@starting-style` and a reduced-motion-aware
transition), and the background scroll-lock. Those are always present, so never
redeclare them. All a drawer needs on top is this small rule, which only
retargets base variables and pins the panel to the edge:

```css
:where(dialog).offcanvas {
  --ty: 0;
  --tx: 100%;
  --screen-y: 0;
  --mx: auto 0;
  block-size: 100%;
  inline-size: min(100%, 25rem);
  border-start-end-radius: 0;
  border-end-end-radius: 0;
}
```

Ship this rule with the component. Fylgja's own `theme.css` already includes it,
but `theme.css` is one of the files Fylgja lets you copy into a project and
customize, so you cannot assume a given project loads it. Only the Fylgja base
styles are safe to rely on. When in doubt, include the rule above rather than
depend on `theme.css` being there.

## Customizing

Adjust only what this rule already exposes; do not restate base defaults:

- `inline-size`: the panel width, e.g. `min(100%, 30rem)`.
- `--mx` (`margin-inline`): which edge it pins to; `auto 0` is the inline-end.
- `--tx` / `--ty`: the off-canvas start/exit translate.
- `--screen-y`: gap from the top/bottom edges (`0` for full height).

Flipping the drawer to the inline-start edge means changing `--tx`, `--mx`, and
which corners are flattened together. If you are not certain of the exact values,
confirm against `@fylgja/base/theme.css` rather than guessing.

## Alpine variant

Use the `@fylgja/alpinejs-dialog` plugin's `x-htmldialog` on an `x-show` dialog.
Keep the `.offcanvas` class and rule; the plugin only drives the native
open/close, so all the base styling still applies. Base already locks background
scroll for modal dialogs, so no `noscroll` modifier is needed here.

```html
<div x-data="{ open: false }">
  <button type="button" @click="open = true">Open menu</button>
  <dialog x-show="open" x-htmldialog.closeby.any="open = false"
          class="offcanvas" aria-labelledby="menu-title">
    <h2 id="menu-title">Menu</h2>
    <button type="button" @click="open = false">Close</button>
  </dialog>
</div>
```

## Accessibility

- Label the panel with `aria-labelledby` (or `aria-label`).
- Opened as a modal, the drawer traps focus and makes the page inert; focus
  returns to the trigger on close, natively.
- With `closedby="any"` the reader can leave via Escape, the backdrop, or the
  close button. Keep a visible close control as well.
