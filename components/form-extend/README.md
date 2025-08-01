# Fylgja Form Extend

[![NPM version](https://img.shields.io/npm/v/@fylgja/form-extend)](https://www.npmjs.com/package/@fylgja/form-extend)
[![NPM Downloads](https://img.shields.io/npm/dt/%40fylgja%2Fform-extend)](https://www.npmjs.com/package/@fylgja/form-extend)
[![License](https://img.shields.io/github/license/fylgja/fylgja?color=%23234)](/LICENSE)

Enhance your forms with advanced features, including native validation and flexible base and component styles for a wide range of form fields.

## Installation

You can install Fylgja Form Extend via npm or other Node-based package managers like pnpm or bun:

```bash
npm install @fylgja/form-extend
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/form-extend/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/form-extend";
```

Alternatively, if you only need specific parts, you can import them individually:

| Import Path                          | Description                                    |
| ------------------------------------ | ---------------------------------------------- |
| `@fylgja/form-extend/field-error`    | Validation styles for form fields              |
| `@fylgja/form-extend/meter-progress` | Styles for `<meter>` and `<progress>` elements |
| `@fylgja/form-extend/range`          | Styles for the `<range>` element               |

### Form Validation

With the [`@fylgja/base`](https://fylgja.dev/library/base/) theme, form fields display a red outline when an error occurs.

The `field-error` helper class makes it easy to show error messages for form fields.

Add the `field-error-message` class to any element to keep error messages hidden until the related form field has an error. Pairing this with `aria-errormessage` ensures screen readers announce the error for better accessibility.

Error messages are always scoped with the common wrapper name `field`, so even if you use an [`input-group`](https://fylgja.dev/library/components/input-group/) and the error message isn't placed directly next to the field group, it will still work as expected.

For JavaScript validation, the `[aria-invalid]` attribute is also supported—if set to `true`, the error message will be shown.

### Meter and Progress Elements

Just like the form styles from the [`@fylgja/base`](https://fylgja.dev/library/base/), Fylgja adds default styles to both Meter and Progress elements.

Because they share the same foundation, both are combined into a single CSS file, keeping your styles lightweight.

### Range Element

Styling range sliders can be challenging, as browser implementations are not fully unified. Fylgja makes this process much easier and more consistent across platforms.

The Range element is fully customizable with CSS variables, letting you set the range value for dynamic background styling.

Firefox supports these features natively, while Chrome and Safari are still catching up. For Chrome, Fylgja provides a progressive method to automatically update the range value, which will also be supported in future Safari releases.

To ensure compatibility with older browsers, we recommend hydrating the range slider with a small JavaScript snippet that updates the value.

You can do this simply with an inline `input` event:

```html
<label for="input-range">Input Range</label>
<input
	type="range"
	name="input-range"
	id="input-range"
	value="40"
	style="--range-value: 40"
	oninput="this.style.setProperty('--range-value', this.value)"
>
```
