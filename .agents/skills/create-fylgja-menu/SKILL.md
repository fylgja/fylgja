---
name: create-fylgja-menu
description: Use when building a dropdown, action menu, context menu, kebab menu, or a list of actions opened from a button in a Fylgja project. Ensures a native <menu popover> opened with invoker commands and anchored with Fylgja's popover defaults, never a positioned div with click-outside JavaScript.
---

Build menus in Fylgja on the Popover API. Never a positioned `<div>` with a click-outside script. A popover gives the top layer, closing on Escape or an outside click, and closing other open menus for free, and Fylgja Base anchors it to its trigger. For classes and variables see [fylgja-css]. For a dialog that needs a decision use [create-fylgja-modal].

This needs `@fylgja/base` 2.2.0 or later, which adds the popover defaults and the list reset on `menu`.

## Markup

```html
<button type="button" commandfor="file-menu" command="toggle-popover">
  <span>File options</span>
  <svg class="toggle-rotate transition" aria-hidden="true">...</svg>
</button>

<menu id="file-menu" popover role="list" style="--btn-stroke: transparent">
  <li>
    <button type="button" commandfor="file-menu" command="hide-popover" class="w-full align" style="--align: center start">
      Rename
    </button>
  </li>
  <li>
    <a href="/download" class="btn w-full align" style="--align: center start">Download</a>
  </li>
  <li><hr style="--my: 0.25rem"></li>
  <li>
    <button type="button" commandfor="file-menu" command="hide-popover" class="w-full align" style="--align: center start">
      Delete
    </button>
  </li>
</menu>
```

| Part | Does |
| --- | --- |
| `commandfor` with `command="toggle-popover"` | Opens and closes the menu, and exposes the state to assistive technology. `popovertarget` also works in older browsers |
| `<menu popover role="list">` | The panel and the list in one element, so no wrapper is needed |
| `command="hide-popover"` | Closes the menu after an action. Links close it by navigating |
| `<li><hr></li>` | Separates groups of items |
| `--btn-stroke: transparent` | Removes the button borders inside the menu |
| `.w-full .align` | Makes each item full width with its text at the start |

Keep the text next to an icon in a `<span>`, or Base gives the button icon-only padding.

## The chevron

`.toggle-rotate` only reacts to a popover right after its invoker, with the `popover` element as the next sibling of the button. An `<svg>` inside the trigger then flips while the menu is open.

If a wrapper sits between the two, the chevron no longer rotates.

## Position

Base anchors the popover under its trigger and flips it when there is no room. Change that with variables:

- `--popover-position`: any `position-area` value, such as `block-end span-inline-start` for a trigger at the end of a row.
- `--popover-offset`: the gap to the trigger.
- `--popover-padding`, `--popover-radius`, `--popover-bg`, `--popover-color`, `--popover-shadow`: the panel.

Browsers without anchor positioning show the popover centered. It still opens and closes, so there is no need for a fallback script.

A popover opened from script has no implicit anchor. Give the trigger an `anchor-name` and the popover a matching `position-anchor`.

## Accessibility

- Use plain buttons and links. Do not add `role="menu"` or `role="menuitem"` unless you also write the script for arrow key navigation, because those roles promise that behavior.
- An icon-only trigger needs an `aria-label`, such as "More actions".
- Tab after opening moves into the menu, and Escape closes it and returns focus to the trigger.
