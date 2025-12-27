# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## 2.0.0 - 2025-03-17

The input group's architecture has undergone a complete refactoring,
yielding improved cleanliness and efficiency.

Notably, it has been decoupled from all external dependencies,
simplifying its integration.

The component now supports button group functionality,
demonstrating its multi-functional design.

## 1.3.0 - 2023-09-02

### Changed
- Replace positions properties with inset

## 1.2.0 - 2023-02-05

### Added
- support for `@layer` in components scope

### Changed
- import syntax for field and box to just the name, no style prefix needed,
  older import syntax will be dropped in v2

## 1.1.0 - 2022-06-06

### Added
- The same CSS variables from the `@fylgja/form` to the `input-group` options

### Changed
- Moved logic for `input-extra` inside the `input-group`,
  using less class logic for building the layout,
  this also drops `input-extra` from the `input-group`
- Updated `@fylgja/form` to v1.0.6

### Removed
- flex grow/shrink styles from the form fields and input-extra,
  has no effect,
  if needed use the `@fylgja/utilpack` or any other utilities

## 1.0.0 - 2021-06-22

Initial Release 🎉
