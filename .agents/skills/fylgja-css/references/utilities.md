# Fylgja Utilities

Each utility is one class, or none, configured through CSS variables.

## Imports

`@fylgja/utilities` imports everything. For one utility, use `@fylgja/utilities/utils/{name}.css`, for example `@fylgja/utilities/utils/flex.css`. The `utils/` folder is required.

To change the breakpoints, use `@fylgja/utilities/no-mq.css` (no responsive variants) or `@fylgja/utilities/custom-mq.css` (`@media (--md)` style queries, needs a build step).

## Responsive variants

Variables take a breakpoint prefix: `sm_`, `md_`, `lg_`, `xl_`, or `xxl_`. This works for `--align`, `--align-items`, `--align-self`, `--flex-dir`, `--flex-wrap`, `--gap`, `--grid-cols`, `--row`, `--col`, and the spacing variables.

```html
<div class="grid-cols gap" style="--sm_grid-cols: 2; --lg_grid-cols: 3">...</div>
```

Display classes and `sr-only` use a class prefix instead, with an escaped colon in CSS: `md:flex`, `lg:hidden`, `md:sr-only`, `md:not-sr-only`.

## Spacing and size

No class needed. Set these on the `style` attribute:

`--m`, `--my`, `--mx`, `--p`, `--py`, `--px`, `--size`, `--size-x`, `--size-y`

They match through `[style*="--my:"]`, so the rule is strict:

- Write them inline, in the `style` attribute. Setting them in a stylesheet does nothing.
- Keep the colon right after the name. `--my : 1rem` does not match.

## Layout

| Class | Variables | Notes |
| --- | --- | --- |
| `.flex`, `.flex-wrap`, `.flex-col` | `--flex-dir`, `--flex-wrap` | Plus `.flex-none` and `.flex-auto` for children |
| `.grid-cols` | `--grid-cols`, `--row`, `--col` | `.col-span-full` for a full width child |
| `.grid-flow` | `--grid-flow-size` | |
| `.auto-grid` | `--max-col-size` | The value is the minimum column width, despite the name |
| `.gap`, `.gap-sm` | `--gap` | |
| `.align` | `--align`, `--align-items` | Sets `place-content` and `place-items` |
| `.align-self` | `--align-self` | Plus `.align-self-end` |
| `.container` | `--container-size`, `--container-gap` | |
| `.stack` | | Layers children on top of each other |
| `.flow`, `.flow-none` | `--flow` | Vertical rhythm between children |
| `.divide-y`, `.divide-x` | `--divide`, `--gap`, `--flow` | |

`.align-center` sets both `place-content` and `place-items`. When you only mean one of them, use `.align` with a variable. There are no `justify-*` or `items-*` classes.

Display: `.hidden`, `.block`, `.inline-block`, `.flow-root`, `.flex`, `.inline-flex`, `.grid`, `.inline-grid`, `.table-cell`. The `open:` prefix applies them while the element itself is `[open]` or `:popover-open`, such as `open:block`.

## Position

`.relative`, `.sticky`, `.absolute`, and `.fixed` read `--z`, `--inset`, `--inset-t`, `--inset-b`, `--inset-s`, and `--inset-e`. Place an element with these variables, not with custom `top` or `left` rules.

```html
<div class="fixed" style="--inset-b: 1rem; --inset-e: 1rem">...</div>
```

`.stretched-link` makes a link cover its nearest positioned parent. `.overlay` adds a scrim through `--overlay-bg` and `--overlay-fg`.

## Toggles

`.toggle-flip`, `.toggle-turn`, `.toggle-rotate`, `.toggle-hide`, and `.toggle-show` respond to the state of their parent:

- `details[open] > summary`
- `[aria-expanded]`, `[aria-selected]`, and `[aria-sort]`
- `[commandfor]` or `[popovertarget]` invokers, when the popover comes right after the invoker

The toggle must be a direct child, or sit inside a direct `.group` or `.stack`.

```html
<button commandfor="menu" command="toggle-popover">
  Menu <svg class="toggle-rotate">...</svg>
</button>
<div id="menu" popover>...</div>
```

## Other utilities

| Class | Variables |
| --- | --- |
| `.rounded`, `.round`, `.rounded-conditional`, `.rounded-none`, `.rounded-inherit` | `--radius`, `--radius-y`, `--radius-x`, `--radius-t`, `--radius-b`, `--radius-s`, `--radius-e` |
| `.line-clamp` | `--line-count` |
| `.truncate`, `.nowrap` | |
| `.lead` | `--lead-size` |
| `.font-normal`, `.font-bold`, `.italic`, `.not-italic` | |
| `.text-start`, `.text-center`, `.text-end` | |
| `.scroll-x`, `.scroll-y` | |
| `.scroll-mask` | `--mask-size`, `--mask-dir`, `--mask-color-start`, `--mask-color-end` |
| `.scrollbar-thin`, `.scrollbar-none` | |
| `.snap` | `--snap-dir`, `--snap-stop`, `--snap-align` |
| `.transition`, `.transition-color`, `.transition-display` | `--transition-props`, `--transition-duration`, `--transition-ease` |
| `.bg-gradient`, `.text-gradient`, `.border-gradient` | `--gradient`, `--gradient-from`, `--gradient-to`, `--gradient-stops`, `--gradient-angle`, `--gradient-color-space`, `--inner-bg` |
| `.content-lazy` | `--content-size` |
| `.clip`, `.clip-x`, `.clip-y` | |
| `.object-cover`, `.object-contain` | |
| `.w-full`, `.h-full`, `.max-w-full`, `.max-h-full` | |
| `.list-none` | |
| `.sr-only` | |
