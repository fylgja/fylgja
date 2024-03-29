# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.4] - 2023-10-10
### Fixed
- Import error for CSS Props packages with PostCSS, closes #191
- Missing PostCSS export for Native Element for Button Component

## [1.3.3] - 2023-09-02
### Changed
- Updated _Base_ to v1.1.2, for small Sass bug fix
- Updated _Control_ to v1.3.0, for small improvements
- Updated _Dialog_ to v1.5.0
  - For issue #182, animation bug in firefox
  - Small improvements
- Updated _Form_ to v1.1.6, for small bug fix
- Updated _Gradient_ to v1.1.3, for small improvements
- Updated _Input Group_ to v1.3.0, for small improvements
- Updated _Menu_ to v1.3.2, for small bug fix
- Updated _Stretched Link_ to v1.2.0 for small improvements

## [1.3.2] - 2023-05-10
### Changed
- Updated _Form_ to v1.1.4, for small bug fix
- Updated _Colors_ to v1.1.1

## [1.3.1] - 2023-04-28
### Fixed
- Missing fonts CSS props in tokens bundle
- Missing border CSS props in tokens bundle

## [1.3.0] - 2023-02-20
### Added
- bundle for native elements, use with: `fylgja/fylgja-html.css`
- CSS props for border
- CSS props for fonts
- Marquee component (not part of the core install)
- Tokens component (not part of the core install),
  for design systems

### Changed
- Full update of all core Fylgja components
- All components (except CSS props) now support `@layer` with SCSS
- All CSS props components now support `:host` as import option

### Fixed
- Missing import option for bundles and root index.scss

## [1.2.6] - 2022-08-18
### Changed
- Updated _Colors_ to v1.0.7

## [1.2.5] - 2022-08-16
### Fixed
- Missing import option for JS hsl syntax in colors

### Changed
- Updated _Colors_ to v1.0.6

## [1.2.4] - 2022-08-15
### Fixed
- Quotes on scss variables for shadow

### Changed
- Updated _Shadow_ to v1.0.3

## [1.2.3] - 2022-08-14
### Added
- Added support for both CommonJS and ESM import syntax's

### Changed
- Updated _Aspect Ratio_ to v1.1.1
- Updated _Colors_ to v1.0.5
- Updated _Easing_ to v1.0.3
- Updated _Mq_ to v1.1.2
- Updated _Shadow_ to v1.0.2
- Updated _Sizes_ to v1.0.2
- Updated _Z-Layer_ to v1.0.2

## [1.2.2] - 2022-08-09
### Changed
- Updated _Form_ to v1.0.8
- Updated _Input Group_ to v1.1.3

### Fixes
- form bugs see the form and input group components, for what

## [1.2.1] - 2022-07-25
### Added
- Range component to main and slim bundle

## [1.2.0] - 2022-07-24
### Added
- New components for Design Tokens (CSS props);
  - aspect-ratio
  - colors
  - easing
  - mq
  - shadow (will replace elevation in the next release)
  - sizes
  - z-layer
- Add new bundle option specific for Design Tokens (CSS props)

### Changed
- Updated all packages,
  this contains too many changes to list here; instead,
  see each package to learn what has changed.

### Fixed
- Issue [#40](https://github.com/fylgja/fylgja/issues/40)

## [1.1.5] - 2022-03-21
### Added
- slim version of full Fylgja package, thats without the utilities,
  _which is only 30kb minified_

### Changed
- Updated _Auto Grid_ to v1.0.3
- Updated _Button_ to v1.0.1
- Updated _Dialog_ to v1.1.0
- Updated _Form_ to v1.0.4
- Updated _Menu_ to v1.1.1
- Updated _Print_ to v1.0.1

## [1.1.4] - 2021-11-27
### Changed
- Updated stylelint-config
- Updated _Auto Grid_ to v1.0.2
- Updated _Details_ to v1.0.1
- Updated _Form_ to v1.0.3
- Updated _Input Group_ to v1.0.1

## [1.1.3] - 2021-10-17
### Changed
- Updated dev dependencies
- Updated _Base_ to v1.0.2

## [1.1.2] - 2021-10-13
### Changed
- Updated _Utilpack_ to v1.1.1

## [1.1.1] - 2021-10-12
### Changed
- Updated _Gradient_ to v1.0.1

## [1.1.0] - 2021-10-10
### Added
- _Mq_ component

### Changed
- Updated _Aria Only_ to v1.1.0
- Updated _Base_ to v1.0.1
- Updated _Dialog_ to v1.0.1
- Updated _Menu_ to v1.1.0
- Updated _Pagination_ to v1.0.1
- Updated _Scroll-Slider_ to v1.1.0
- Updated _Transform_ to v1.1.1
- Updated _Utilpack_ to v1.1.0

## [1.0.2] - 2021-08-22
### Changed
- Updated _Code_ to v1.0.1
- Updated _Form_ to v1.0.2

## [1.0.0] - 2021-06-22
Initial Release 🎉
