# Fylgja Components

Small CSS components, each installed on its own. Import one by package name, such as `@import "@fylgja/card";`.

Most read `--brand`, `--root-bg`, and `--root-fg`, so load `@fylgja/base` and the theme, or set those variables yourself.

## Badge

`@fylgja/badge`

```html
<span class="badge">New</span>
```

Variables: `--badge-bg`, `--badge-color`, `--badge-px`, `--badge-py`, `--badge-radius`

## Breadcrumbs

`@fylgja/breadcrumbs`

```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumbs">
    <li><a href="/">Home</a></li>
    <li><a href="/docs/" aria-current="page">Docs</a></li>
  </ol>
</nav>
```

The `.breadcrumbs` class is required. There is no classless version.

Variables: `--breadcrumbs-gap`, `--breadcrumbs-separator`

## Callout

`@fylgja/callout`, or `@fylgja/callout/base` and `@fylgja/callout/styles`

```html
<div class="callout" data-callout="note">
  <p class="callout-title"><strong>Note</strong></p>
  <p>Useful information.</p>
</div>
```

The types are `note`, `tip`, `important`, `warning`, and `caution`. For a collapsible callout, use `details` and a `summary.callout-title`, with `.callout-fold-icon` on the marker icon.

Variables: `--callout-style`, `--callout-bg`, `--callout-gap`, `--callout-my`, `--callout-py`, `--callout-px`, `--callout-stroke-size`, and a color per type, `--callout-note` to `--callout-caution`

## Card

`@fylgja/card`, or `@fylgja/card/base`, `@fylgja/card/elevated`, and `@fylgja/card/hover`

```html
<article class="card">
  <div class="card-content">...</div>
</article>
```

Modifiers: `.--elevated` swaps the border for `--shadow-2`, and `.--hover` adds `--shadow-4` on hover, which pairs well with `.stretched-link`. Both shadows come from `@fylgja/tokens`.

Variables: `--card-bg`, `--card-color`, `--card-stroke`, `--card-radius`, `--card-shadow`, `--card-padding`, `--card-px`, `--card-py`

## Form Extend

`@fylgja/form-extend`, or `@fylgja/form-extend/field-error`, `/meter-progress`, `/range`, `/range-fill`, and `/range-vertical`

```html
<label class="field">
  Email
  <input type="email" required aria-errormessage="email-error">
  <small id="email-error" class="field-error-message">Enter a valid email</small>
</label>
```

`.field-error-message` stays hidden until a field next to it is `:user-invalid` or `[aria-invalid=true]`. It also shows as a direct child of a `.field` holding such a field. It does not work as a child of a `fieldset`.

`.range-vertical` turns a range input vertical. The CSS only fill from `range-fill` needs scroll animations, which Safari supports from version 26.

Variables: `--track-size`, `--track-color`, `--track-fill`, `--track-radius`, `--thumb-size-x`, `--thumb-size-y`, `--thumb-color`, `--thumb-radius`, `--thumb-stroke`, `--thumb-stroke-size`, `--thumb-shadow`, `--form-error-color`

## Input Group

`@fylgja/input-group`, or `@fylgja/input-group/base`, `/merge`, and `/steps`

```html
<div class="input-group">
  <input type="search" aria-label="Search">
  <button>Search</button>
</div>
```

Modifiers: `.--merge` merges the borders between the elements, and `.--steps` makes a range-like group of radios or checkboxes.

## Toast

`@fylgja/toast`, or `@fylgja/toast/base` and `@fylgja/toast/styles`

```html
<div class="toast fixed" style="--inset-b: 1rem; --inset-e: 1rem" role="status">Saved</div>
```

Position a toast with the utilities, not with custom modifiers. `--toast-style` sets the color, and the `styles` import adds `data-type="info"`, `"warning"`, and `"error"` presets.

Variables: `--toast-bg`, `--toast-color`, `--toast-stroke`, `--toast-style`, `--toast-shadow`, `--toast-radius`, `--toast-px`, `--toast-py`
