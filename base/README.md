# Fylgja Base

Fylgja Base provides a streamlined starting point for any web project.
It’s a collection of class-less solutions,
allowing you to focus on building your site using plain HTML or your preferred frontend language,
without the need to add any additional classes.

If you don't require everything that Fylgja Base offers,
you can import only the parts you need.
For example, the preflight module provides a solid foundation for typography
but excludes styles for forms, buttons, and the HTML dialog element.

## Installation

You can install Fylgja Base via npm or other Node-based package managers like pnpm or bun:

```bash
npm install @fylgja/base
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/base@2.0/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/base";
```

Alternatively, if you only need specific parts of the base, you can import them individually:

| Import Path              | Description                                                                    |
| ------------------------ | ------------------------------------------------------------------------------ |
| `@fylgja/base/preflight` | Global defaults and typography                                                 |
| `@fylgja/base/btn`       | Button styles, including styles for input buttons and a `.btn` class for links |
| `@fylgja/base/form`      | Comprehensive form styles                                                      |
| `@fylgja/base/dialog`    | Dialog styles, including support for popovers                                  |

### Theme Styles

By default, Fylgja Base is a clean canvas, meaning no brand colors or additional extras are included.
If you prefer to use predefined themes, we offer these as separate imports, or you can copy them directly into your project.

```css
@import "@fylgja/base/theme"; /* or use 'theme.red', 'theme.blue', 'theme.green' */
```

With the brand color themes, we include styles for dark mode, view transitions, primary button styling, and offcanvas support for the dialog.

### SCSS Source Files

While Fylgja Base is designed to be easy to use without requiring build tools,
we also offer SCSS source files.

These can be used to customize the generated CSS files to better suit your project's needs.
For example, if you want to go fully classless, you can disable the `.btn` class.
