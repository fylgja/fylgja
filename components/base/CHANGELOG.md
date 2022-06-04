# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
<!-- for v2 replace code back to v1 when merging to main, to prevent any breaking changes -->
### Added
- block and inline support,
  this will **break some variables**, so check the changes in the variables
  This also includes the removal of the `$item-spacer`

### Changed
- Replaced `$h-margin` and other heading variants for `$h-mt` and `$h-mb` to add block support
- Replaced `$item-spacer` for `$list-mt` and `$list-mb` to add block support
- Dropped `$item-spacer` for dedicated variables for `p`, `figure`, `address`,

### Removed
- quotes as variable

## [1.0.2] - 2021-10-17
### Fixed
- Corrected heading first child insistent margin-top unset

## [1.0.1] - 2021-10-10
### Added
- `accent-color` option

### Fixed
- heading not inheriting the family-header CSS variable

## [1.0.0] - 2021-06-22
Initial Release 🎉
