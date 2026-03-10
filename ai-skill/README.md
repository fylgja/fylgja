# Fylgja CSS AI Skill

This directory contains an AI skill definition (`SKILL.md`) for the Fylgja CSS library. This skill helps AI assistants (like Gemini CLI) understand the core concepts, packages, and architecture of Fylgja, allowing them to provide better code generation, architectural advice, and support for projects using Fylgja CSS.

## How to Install

### Gemini CLI

To use this skill globally across all your projects so your AI assistant always knows about Fylgja CSS:

Install the skill directly using the Gemini CLI.

```bash
gemini skills install https://github.com/fylgja/fylgja --path ai-skill
```

### Claude Code

To use this skill locally in your project so your AI assistant always knows about Fylgja CSS:

```bash
mkdir -p .claude/skills/fylgja
curl -o .claude/skills/fylgja/SKILL.md https://raw.githubusercontent.com/fylgja/fylgja/main/ai-skill/SKILL.md
```

### Cursor

To use this skill locally in your project so your AI assistant always knows about Fylgja CSS:

```bash
mkdir -p .cursor/skills/fylgja
curl -o .cursor/skills/fylgja/SKILL.md https://raw.githubusercontent.com/fylgja/fylgja/main/ai-skill/SKILL.md
```

### GitHub Copilot

To use this skill locally in your project so your AI assistant always knows about Fylgja CSS:

```bash
mkdir -p .github/skills/fylgja
curl -o .github/skills/fylgja/SKILL.md https://raw.githubusercontent.com/fylgja/fylgja/main/ai-skill/SKILL.md
```

### Other AI Agents

If your CLI agent uses a different folder (like `.codex` or `.opencode`), just replace the folder name in the path:

```bash
mkdir -p .YOUR_AGENT_FOLDER/skills/fylgja
curl -o .YOUR_AGENT_FOLDER/skills/fylgja/SKILL.md https://raw.githubusercontent.com/fylgja/fylgja/main/ai-skill/SKILL.md
```

### Local Project Installation

If you want to keep the skill local to a specific project using Fylgja, you can simply include this directory in your project repository. Some AI assistants will automatically read `.md` files or workspace instructions containing this context.

## Usage

Once installed, the skill will automatically activate when you ask the AI assistant to style something using Fylgja, or when you ask questions related to:
- Fylgja Base and class-less HTML
- Fylgja Design Tokens
- Fylgja Dynamic Utilities
- Fylgja Components (e.g., Badge, Breadcrumbs, Card, Form Extend, Input Group, Toast)
