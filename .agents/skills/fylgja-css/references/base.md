# Fylgja Base

Classless defaults for native HTML. Element styles sit in `:where()`, so any class wins without a specificity fight.

## Imports

| Import | Contains |
| --- | --- |
| `@fylgja/base` | Everything below, except the theme |
| `@fylgja/base/preflight` | Global defaults, typography, and tables |
| `@fylgja/base/preflight-scoped` | Same, with typography scoped to `article`, `.entry-content`, and `.prose` |
| `@fylgja/base/btn` | Button styles, plus the `.btn` class for links |
| `@fylgja/base/btn-class-only` | Only the `.btn` class |
| `@fylgja/base/btn-class-less` | Only the native button styles |
| `@fylgja/base/form` | Form styles |
| `@fylgja/base/form-class-less` | Form styles without `.form-input` |
| `@fylgja/base/dialog` | Dialog and popover styles |
| `@fylgja/base/theme` | Optional theme, see below |

Only the full import and `preflight` define root variables such as `--root-bg` and `--family-mono`. If a project imports `btn`, `form`, or `dialog` alone, those variables are undefined unless it sets them.

## Classes

Base ships very few classes: `.btn` for links styled as buttons, `.form-input` for elements styled as a field, and the `.is-active` and `.is-disabled` button states. Everything else targets elements.

## Variables

Customize by setting variables, not by writing new rules.

- **Root**: `--root-bg`, `--root-fg`, `--font-size`, `--line-height`, `--surface-color`, `--family-system`, `--family-mono`, `--family-emoji`, `--anchor-offset`
- **Text flow**: `--text-flow`, `--separator-flow`, `--list-flow`
- **Headings**: `--h-size`, `--h-weight`, `--h-line`, `--h1-size`, `--h2-size`, `--h3-size`, `--h4-size`
- **Focus**: `--outline-size`, `--outline-offset`, `--outline-transition`
- **Code**: `--code-bg`, `--code-color`, `--code-stroke`, `--code-radius`
- **Tables**: `--table-px`, `--table-py`, `--table-stroke`
- **Buttons**: `--btn-bg`, `--btn-color`, `--btn-stroke`, `--btn-px`, `--btn-py`, `--btn-radius`, `--btn-gap`, `--btn-font-weight`, `--btn-border-width`, plus `--btn-hover-bg`, `--btn-hover-color`, `--btn-hover-stroke`, `--btn-active-bg`, `--btn-active-color`, `--btn-active-stroke`, `--btn-disabled-bg`, `--btn-disabled-color`, and `--btn-disabled-stroke`
- **Form fields**: `--form-bg`, `--form-color`, `--form-stroke`, `--form-px`, `--form-py`, `--form-radius`, `--form-border-width`, `--form-active-color`
- **Checkboxes and radios**: `--control-size`, `--control-radius`, `--control-border-width`, `--control-checked-bg`, `--control-checked-color`, `--control-checked-stroke`, `--switch-size`
- **Select and textarea**: `--select-icon`, `--select-icon-size`, `--select-icon-offset`, `--textarea-min-size`
- **Search clear button**: `--search-clear-size`, `--search-clear-gap`, `--search-clear-color`, `--search-clear-icon`
- **Dialogs**: `--dialog-bg`, `--dialog-color`, `--dialog-shadow`, `--dialog-translate-x`, `--dialog-translate-y`, `--dialog-open-speed`, `--dialog-close-speed`
- **Popovers**: `--popover-bg`, `--popover-color`, `--popover-padding`, `--popover-radius`, `--popover-shadow`, `--popover-offset`, `--popover-position`

## Patterns

- A button is a `<button>`. A link that looks like a button is `<a class="btn">`.
- A switch is `<input type="checkbox" role="switch">`.
- `role="list"` on `ul`, `ol`, or `menu` removes the list styles and keeps the semantics. Lists inside `nav` are reset too.
- A button holding only an `svg` or `img` gets icon padding. With text next to the icon, wrap the text in a `<span>`.
- Popovers are anchored to their invoker in browsers that support anchor positioning.
- Closed `details` print their content.

## Theme

`@fylgja/base/theme` is opt-in, and a project may have copied and changed it (`npx fylgja@latest add theme`), so do not assume its rules exist.

It adds `--brand`, `--on-brand`, and `--form-error-color`, a dark color scheme, primary buttons (`.btn-primary`, or any `type="submit"` button), error outlines on `:user-invalid` fields, red `legend` text for an invalid `fieldset`, the `.field` wrapper, a sticky footer layout on `body`, and `.offcanvas`.
