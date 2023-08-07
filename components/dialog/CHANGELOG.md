# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.4.0] - 2023-08-07
### Fixed
- Fixed a rare edge case in Firefox where the dialog would stay open if the animation was triggered many times.
  - We dropped the CSS animation for a transition.
  - This could be considered a breaking change.
  - Closes #182.

### Removed
- Dropped old Firefox and Safari fix styles for when the support for the native dialog was still bad

## [1.3.2] - 2023-02-19
### Changed
- Simplified `@layer` support,
  CSS can use native, for SCSS use the new variable `$dialog-layer`,
  the options from v1.3 are deprecated

## [1.3.1] - 2023-02-05
### Changed
- color syntax with new linter rules

## [1.3.0] - 2023-02-05
### Added
- support for `@layer` in components scope

## [1.2.3] - 2022-10-05
### Fixed
- Border radius in offcanvas alway on all sides

## [1.2.2] - 2022-06-27
### Fixed
- Border radius in offcanvas being static instead a CSS variable
- Some sass variable not being escaped

## [1.2.1] - 2022-06-08
### Fixed
- typo in extend

## [1.2.0] - 2022-06-05
### Added
- `.is-open` for dialogs without the native element
- `$dialog-show` and `$dialog-hide`, for an option to control the animations

### Changed
- Moved style logic to mixin in favor of extend,
  _Extend will be dropped in v2_
- Slimmed down the CSS by using the `:is` selector

### Fixed
- Elevation fallback, was empty if no `@fylgja/elevation` component was present

## [1.1.0] - 2022-03-21
### Added
- Variable support for backdrop
- Class support next to native element

## [1.0.1] - 2021-10-10
### Added
- Support for custom dialogs via extends

## [1.0.0] - 2021-06-22
Initial Release 🎉
