# Fylgja CSS AI Skill

This directory contains an AI skill definition (`SKILL.md`) for the Fylgja CSS library. This skill helps AI assistants (like Claude Code) understand the core concepts, packages, and architecture of Fylgja, allowing them to provide better code generation, architectural advice, and support for projects using Fylgja CSS.

## How to Install

### Claude Code

To use this skill locally in your project so your AI assistant always knows about Fylgja CSS:

```bash
mkdir -p .claude/skills/fylgja-css
curl -o .claude/skills/fylgja-css/SKILL.md https://raw.githubusercontent.com/fylgja/fylgja/main/ai-skill/SKILL.md
```

### Other AI Agents

Agents that read skills from their own dot folder follow the same steps, only the folder name changes:

```bash
# Replace .agents with your AI agent folder, e.g. .cursor, .github or .codex
mkdir -p .agents/skills/fylgja-css
curl -o .agents/skills/fylgja-css/SKILL.md https://raw.githubusercontent.com/fylgja/fylgja/main/ai-skill/SKILL.md
```

Some agents ship their own installer instead, so check their docs first if the folder layout differs.

### Commit the skill to your repo

Instead of fetching `SKILL.md` on every machine, you can copy this directory into your project and commit it. The skill then travels with the repo, so every collaborator and CI checkout has it without running anything, pinned to the version you copied. Some AI assistants will also automatically read `.md` files or workspace instructions containing this context.

## Usage

Once installed, the skill will automatically activate when you ask the AI assistant to style something using Fylgja, or when you ask questions related to:
- Fylgja Base and class-less HTML
- Fylgja Design Tokens
- Fylgja Dynamic Utilities
- Fylgja Components (e.g., Badge, Breadcrumbs, Card, Form Extend, Input Group, Toast)
