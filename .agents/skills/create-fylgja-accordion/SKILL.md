---
name: create-fylgja-accordion
description: Use when building an accordion, FAQ list, disclosure, collapsible section, or expand and collapse content in a Fylgja project. Ensures native <details> and <summary>, a shared name for single-open behavior, and Fylgja utilities for the look, never a div with click handlers and ARIA wiring.
---

Build accordions in Fylgja on `<details>` and `<summary>`. Never a `<div>` with a click handler. The native elements give keyboard support, the open state for assistive technology, and find-in-page for free, so no JavaScript or `aria-expanded` is needed. For classes and variables see [fylgja-css].

## Markup

```html
<div class="divide-y">
  <details name="faq" class="flow-none" open>
    <summary class="list-none flex align" style="--py: 0.75rem">
      <span>What is Fylgja?</span>
      <svg class="toggle-rotate transition flex-none" aria-hidden="true">...</svg>
    </summary>
    <p style="--py: 0 0.75rem">A modular CSS library built around plain HTML.</p>
  </details>
  <details name="faq" class="flow-none">
    <summary class="list-none flex align" style="--py: 0.75rem">
      <span>Does it need a build step?</span>
      <svg class="toggle-rotate transition flex-none" aria-hidden="true">...</svg>
    </summary>
    <p style="--py: 0 0.75rem">No, it also works from a CDN.</p>
  </details>
</div>
```

Base keeps `<details>` plain on purpose, so the look comes from utilities, with no custom CSS:

| Part | Does |
| --- | --- |
| `name` | Same value on each `<details>` makes it single-open. Leave it out to allow several open sections |
| `open` | Starts a section expanded |
| `.divide-y` | Draws the dividers between sections |
| `.flow-none` | Clears the margins, so the padding stays even |
| `.list-none` | Hides the default triangle on the `<summary>` |
| `.flex .align` | Pushes the label and the chevron to opposite ends |
| `.flex-none` | Stops the chevron from shrinking |
| `.toggle-rotate` | Flips the chevron while open. It must be a direct child of the `<summary>` |
| `--py` | Sets the padding. It only works inline in the `style` attribute |

The text next to the icon has to stay in its own `<span>`, so `.align` can separate them.

## Animation

Opening needs no JavaScript to animate either. Add this rule, which is safe to ignore in browsers without support:

```css
:root {
  interpolate-size: allow-keywords;
}

details::details-content {
  block-size: 0;
  overflow: clip;
  transition:
    block-size 0.2s,
    content-visibility 0.2s allow-discrete;
}

details[open]::details-content {
  block-size: auto;
}
```

`@fylgja/base/theme` already sets `interpolate-size`, but a project may not load the theme, so keep it in the rule.

## Accessibility

- Keep the summary text meaningful on its own, since it is the label of the section.
- Do not put links or buttons inside a `<summary>`.
- Do not add `role`, `aria-expanded`, or `aria-controls`. The browser exposes all of this.
