---
name: create-fylgja-modal
description: Use when building a modal or confirmation dialog in a Fylgja project, including requests to "add a modal", "popup", "confirm dialog", "are you sure prompt", or "cookie consent". Ensures a native <dialog> opened with invoker commands, closedby for dismissal control, a form for confirmations, and classless markup, never a div-and-overlay reimplementation.
---

Build modals in Fylgja on the native `<dialog>` element. Never a `<div>` overlay:
`<dialog>` gives focus trapping, top-layer rendering, a styleable `::backdrop`, and
correct dialog semantics for free. For classes and variables see [fylgja-css]. For
slide-in side panels use [create-fylgja-offcanvas] instead.

## Open and close declaratively

Use invoker commands, no JavaScript:

- Open: `<button type="button" commandfor="ID" command="show-modal">`.
- Close: a button inside with `command="close"` and the same `commandfor`, or a
  `<form method="dialog">` (see confirmation modal).

## Dismissal: the `closedby` attribute

- `closedby="any"`: Escape **and** a backdrop click dismiss it. Use for a simple
  modal the reader can freely close.
- (default for `showModal()`) `closedby="closerequest"`: Escape closes, backdrop
  does not.
- `closedby="none"`: neither Escape nor backdrop closes it. Use only when a
  decision is genuinely required, and always keep a visible, safe choice (Cancel /
  Decline) as the reader's only way out.

## Simple modal

```html
<button type="button" commandfor="welcome" command="show-modal">Open modal</button>

<dialog id="welcome" closedby="any" aria-labelledby="welcome-title">
  <h2 id="welcome-title">Welcome</h2>
  <p>Some content the reader can read and dismiss.</p>
  <button type="button" commandfor="welcome" command="close">Close</button>
</dialog>
```

## Confirmation modal

Wrap the choices in a `<form method="dialog">` and give each a `value`. Submitting
closes the dialog and records the choice on `dialog.returnValue`. Right-align the
actions with `flex-wrap gap align` and `--align: center end` (Fylgja has no
`justify-end` class). Use `closedby="none"` so the reader must choose.

```html
<button type="button" commandfor="cookie-consent" command="show-modal">Cookie settings</button>

<dialog id="cookie-consent" closedby="none" aria-labelledby="cookie-consent-title">
  <form method="dialog">
    <h2 id="cookie-consent-title">Accept cookies?</h2>
    <p>We use cookies to improve your experience. Do you accept?</p>
    <div class="flex-wrap gap align" style="--align: center end">
      <button value="decline">Decline</button>
      <button value="accept">Accept</button>
    </div>
  </form>
</dialog>
```

React to the choice from a `<script>` (never inline):

```html
<script>
  const dialog = document.getElementById("cookie-consent");
  dialog.addEventListener("close", () => {
    if (dialog.returnValue === "accept") {
      // Act on the choice here.
    }
  });
</script>
```

## JavaScript fallback

Invoker commands are the default. For older browsers, or to open programmatically,
call `showModal()` (not `show()`, which skips the top layer and backdrop) and
`close()` from a `<script>`, wiring listeners by id. Still no inline handlers.

## Alpine variant

Use the `@fylgja/alpinejs-dialog` plugin's `x-htmldialog` directive on an `x-show`
dialog. Do not hand-roll `x-ref`/`x-effect`.

```html
<div x-data="{ open: false }">
  <button type="button" @click="open = true">Open modal</button>
  <dialog x-show="open" x-htmldialog.closeby.any="open = false" aria-labelledby="t">
    <h2 id="t">Welcome</h2>
    <button type="button" @click="open = false">Close</button>
  </dialog>
</div>
```

Modifiers chain: `noscroll` (lock background scroll), `closeby.any` / `closeby.none`
(mirror the `closedby` values), `modeless` (open with `show()` instead of
`showModal()`).

## Accessibility

- Label the dialog: `aria-labelledby` on the heading, or `aria-label` if there is
  no visible title.
- Focus moves in on open and returns to the trigger on close, natively.
- When you set `closedby="none"`, a visible safe choice is mandatory, not optional.
