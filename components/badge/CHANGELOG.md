# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## 2.0.0 - 2025-12-27

The badge component has been completely refactored for improved clarity and efficiency.

It is now fully decoupled from external dependencies, making integration simpler.

The badge uses the standard content size instead a config, offering easier use and extensibility.

## 1.1.1 - 2023-02-19

### Changed

- Simplified `@layer` support,
  CSS can use native, for SCSS use the new variable `$badge-layer`,
  the options from v1.1 are deprecated

## 1.1.0 - 2023-01-30

### Added

- support for `@layer` in components scope

### Removed

- Nowrap to allow normal text flow

## 1.0.1 - 2022-06-05

### Added

- Option to disable the badge-addon wrapper
- Option to disable the badge -theme style
- Moved badge-addon style logic to mixin

## 1.0.0 - 2021-06-22

Initial Release 🎉
