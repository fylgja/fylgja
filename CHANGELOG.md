# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Fixed
- _Menu_: default auto-selector for use with Hyva (Tailwind `@apply`) with `.btn`

## [1.1.5] - 2022-02-04
### Added
- _Form_: scss option added, to set the `$label-margin`

### Changed
- Cleanup `package.json` for all components.

### Fixed
- _Auto Grid_: **[Possible Breaking Change]** Also Scoped the gap variable,
  making all of the auto-grid variables scoped.
- _Auto Grid_: Fixed relative PostCSS import

## [1.1.4] - 2021-11-27
### Added
- _Transform_: added rotate utility modifiers

### Changed
- Updated stylelint-config
- _Details_: Removed Summary from details scope, making the css smaller and easier to edit
- _Form_: **[Possible Breaking Change]** removed input prefix from type,
  Making it easier to edit the form styles with utility classes
- _Form_: Removed form prefix from CSS imports for style versions
- _Input Group_: Removed input-group prefix from CSS imports for style versions

### Fixed
- _Auto Grid_: **[Possible Breaking Change]** Scoped the variables

## [1.1.3] - 2021-10-17
### Changed
- Updated dev dependencies

### Fixed
- _Base_: Corrected heading first child insistent margin-top unset

## [1.1.2] - 2021-10-13
### Fixed
- _Utilpack_: Typo for visibility value

## [1.1.1] - 2021-10-12
### Added
- Text gradients to _gradient_ component

## [1.1.0] - 2021-10-10
### Added
- _Aria Only_: added breakpoint option, (enable this option with `$enable-aria-only-mq`)
- _Base_: added `accent-color` option
- _Dialog_: added support for custom dialogs via extends
- New _Mq_ helper package
- _Transform_: More Transform translate utilities
- _Utilpack_: Visibility utility class
- _Utilpack_: index utility class

### Changed
- _Menu_: **[Possible Breaking Change]** Removed extra list layer from menu
  This makes the CSS component smaller and easier to edit
- _Pagination_: Moved variables to helper for easier reuse
- _Scroll-Slider_: Moved overflow fix to only effect Safari, Firefox and Chrome have fixed this issue
- _Transform_: Make easier to edit via a separate variable
- _Utilpack_: sizing utils like `w-content` have been replaced with `w-max` and `w-min`
  The util classes use the min/max-content values
  Also adding more freedom for other max-w/h and min-w/h versions

### Fixed
- _Base_: heading not inheriting the family-header CSS variable
- _Transform_: **[Breaking Change]** translate naming inconsistency
  the `-t(y/x)-half` is now `-t(y/x)-50` matching the naming used in the Utilpack
- _Utilpack_: text-break has wrong css value option
- _Utilpack_: **[Breaking Change]** Fixed typo for `$utilpack-separator` was `$utilpack-sepparator`
- _Utilpack_: space and divide utilities now also ignores template tags
  Making it easier to work with loops in [AlpineJS](https://alpinejs.dev/)
  To unset this back to just the `[hidden]` attribute change the;
  - `$utilpack-space-class-nested`
  - `$utilpack-divider-class-nested`

## [1.0.2] - 2021-08-22
### Changed
- _Code_: moved SCSS variables to helper file

### Fixed
- _Form_: input color radius var is empty when null
- _Form_: missing focus style var,
  and merged border width and style to keep supporting CSSNano

## [1.0.0] - 2021-06-22
Initial Release 🎉
