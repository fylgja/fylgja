# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Moved api logic from index to `_api.scss`

### Fixed
- **[Possible Breaking Change]** Separator key typo in api build and build-item (was sepparator)

## [1.1.1] - 2021-10-13
### Fixed
- _Utilpack_: Typo for visibility value

## [1.1.0] - 2021-10-10
### Added
- _Utilpack_: Visibility utility class
- _Utilpack_: index utility class

### Changed
- _Utilpack_: sizing utils like `w-content` have been replaced with `w-max` and `w-min`
  The util classes use the min/max-content values
  Also adding more freedom for other max-w/h and min-w/h versions

### Fixed
- _Utilpack_: text-break has wrong css value option
- _Utilpack_: **[Breaking Change]** Fixed typo for `$utilpack-separator` was `$utilpack-sepparator`
- _Utilpack_: space and divide utilities now also ignores template tags
  Making it easier to work with loops in [AlpineJS](https://alpinejs.dev/)
  To unset this back to just the `[hidden]` attribute change the;
  - `$utilpack-space-class-nested`
  - `$utilpack-divider-class-nested`

## [1.0.0] - 2021-06-22
Initial Release 🎉
