# Fylgja CSS AI Skill

This directory contains an AI skill definition (`SKILL.md`) for the Fylgja CSS library. This skill helps AI assistants (like Gemini CLI) understand the core concepts, packages, and architecture of Fylgja, allowing them to provide better code generation, architectural advice, and support for projects using Fylgja CSS.

## How to Install

### Gemini CLI

To use this skill globally across all your projects so your AI assistant always knows about Fylgja CSS:

Copy the `ai-skill` folder to your Gemini CLI skills directory.

```bash
mkdir -p ~/.gemini/skills/fylgja-css
cp ai-skill/SKILL.md ~/.gemini/skills/fylgja-css/
```

### Claude CLI
To use this skill globally across all your projects so your AI assistant always knows about Fylgja CSS:

Copy the `ai-skill` folder to your Claude CLI skills directory.

```bash
mkdir -p ~/.claude/skills/fylgja-css
cp ai-skill/SKILL.md ~/.claude/skills/fylgja-css/
```

### Other AI CLIs

To use this skill globally across all your projects with other AI CLI tools, copy the folder to their respective skills directory:

Copy the `ai-skill` folder to the AI CLI's skills directory.

```bash
mkdir -p ~/.<ai-cli-name>/skills/fylgja-css
cp ai-skill/SKILL.md ~/.<ai-cli-name>/skills/fylgja-css/
```

### Local Project Installation

If you want to keep the skill local to a specific project using Fylgja, you can simply include this directory in your project repository. Some AI assistants will automatically read `.md` files or workspace instructions containing this context.

## Usage

Once installed, the skill will automatically activate when you ask the AI assistant to style something using Fylgja, or when you ask questions related to:
- Fylgja Base and class-less HTML
- Fylgja Design Tokens
- Fylgja Dynamic Utilities
- Fylgja Components (e.g., Badge, Breadcrumbs, Card, Form Extend, Input Group, Toast)
