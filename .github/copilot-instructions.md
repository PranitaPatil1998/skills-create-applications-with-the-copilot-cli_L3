# Copilot Instructions for Skills: Create Applications with the Copilot CLI

## Repository Overview

This is a GitHub Skills learning repository that teaches developers how to use the **Copilot CLI** (a standalone terminal application) to build a Node.js CLI calculator application. The skill progression follows four steps:

1. **Install Copilot CLI** - Set up the CLI and learn basic commands
2. **Interactive Development** - Build the calculator with interactive Copilot assistance
3. **Expand Functionality** - Add new features using delegated tasks
4. **Complete the Workflow** - Create PRs, get reviews, and merge changes

## Key Concepts

### Copilot CLI vs VS Code Extension

This repository specifically focuses on the **standalone Copilot CLI** (invoked with `copilot` command), not the VS Code extension. Key differences:

- **Standalone CLI**: Terminal-based, full interactive experience, supports custom agents, delegation via `/delegate`
- **VS Code Extension**: Editor-based, different set of capabilities

When helping users, encourage terminal-based workflows over IDE integration.

### The Calculator Application

The target application is a Node.js CLI calculator (`calculator.js`) that:

- Implements basic arithmetic operations (addition, subtraction, multiplication, division)
- Can be expanded with additional operations (modulo, exponentiation, square root)
- Serves as a practical example of building applications with Copilot CLI assistance
- Should follow the feature structure defined in `.github/ISSUE_TEMPLATE/feature_request.md`

## Development Workflow

### Phase 1: Issue Creation

Users should create GitHub issues using the feature request template (`.github/ISSUE_TEMPLATE/feature_request.md`). The template requires:

- Feature Description
- Use Case
- Proposed Solution
- Additional Context

Copilot CLI can generate these issues directly via `gh issue` commands with MCP tools enabled.

### Phase 2: Interactive Development

- Start a Copilot CLI session: `copilot --enable-all-github-mcp-tools`
- Use `/login` for GitHub authentication if needed
- Use `/delegate TASK-DESCRIPTION` for delegating larger coding tasks
- The CLI will create branches and draft PRs automatically

### Phase 3: Code Review

- Copilot can review code changes and suggest improvements
- Use GitHub PR linking to connect code changes to issues
- Rely on Copilot's review assistance before merging

### Phase 4: Merge and Ship

- Merge PRs directly from the CLI
- Copilot helps ensure all related issues are closed

## Important Commands and Flags

### Essential Copilot CLI Commands

- `copilot` - Start an interactive session
- `copilot --help` - Show help information
- `copilot --version` - Check installed version
- `copilot --allow-all` - Allow all operations without prompting (useful for automation)
- `copilot --enable-all-github-mcp-tools` - Enable all GitHub MCP tools for issue/PR management

### Interactive Mode Slash Commands

Within a Copilot CLI session, useful commands include:

- `/login` - Authenticate with GitHub
- `/logout` - Log out
- `/session` - Show current session details
- `/context` - Display token usage overview
- `/usage` - Show session statistics (premium requests, duration, LoC edited, model breakdown)
- `/delegate TASK` - Delegate a coding task to Copilot coding agent
- `/agent` - Browse and select custom agents
- `/share [file|gist] [path]` - Export session to markdown or gist
- `/exit` or `/quit` - End session

### Global Keyboard Shortcuts

- `@` - Mention files (include their contents in context)
- `Esc` - Cancel current operation
- `!` - Execute shell command directly (bypass Copilot)
- `Ctrl+C` - Cancel operation / clear input
- `Ctrl+D` - Shutdown
- `Ctrl+L` - Clear screen
- `Shift+Tab` - Switch between plan mode and interactive mode

## Prerequisites and Setup

### Installation Requirements

- Node.js version 22 or later
- npm version 10 or later
- Active GitHub Copilot subscription (Pro, Pro+, Business, or Enterprise)

### Installation Steps

```bash
npm install -g @github/copilot
copilot --version  # Verify installation
```

### Authentication

First-time users may need to authenticate:

```bash
copilot --allow-all
# When prompted, run: /login
# Follow the GitHub authentication flow
```

### Troubleshooting Setup Issues

- **Node.js version**: Check with `node --version` (must be 22+)
- **npm install fails**: Try `sudo npm install -g @github/copilot`
- **Copilot CLI not found**: Ensure npm is in your PATH
- **Authentication fails**: Run `copilot` and use `!gh auth login` or `/login`
- **Permission prompts**: Respond "yes" and "Yes, approve for rest of session" to enable features

## Folder Structure

```
.github/
├── instructions/
│   └── copilot-cli-ref.instructions.md  (General Copilot CLI reference)
├── steps/
│   ├── 1-step.md  (Install CLI & issue creation)
│   ├── 2-step.md  (Interactive development)
│   ├── 3-step.md  (Expand functionality)
│   ├── 4-step.md  (PRs, reviews, merging)
│   └── x-review.md  (Final review)
├── workflows/
│   ├── 0-start-exercise.yml
│   ├── 1-step.yml
│   ├── 2-step.yml
│   ├── 3-step.yml
│   └── 4-step.yml
├── ISSUE_TEMPLATE/
│   └── feature_request.md  (Template for calculator features)
└── images/  (Screenshots of CLI in action)
```

## Conventions and Patterns

### Issue Tracking

- Use the feature request template for all new functionality
- Link PRs to related issues using `closes #ISSUE_NUMBER` in PR description
- Use the calculator-focused labels (e.g., "enhancement")

### Code Organization

The final calculator application (`calculator.js`) should:

- Export functions for each operation (add, subtract, multiply, divide, etc.)
- Have clear input validation and error handling
- Follow consistent naming patterns across operations
- Support new operations through Copilot delegation

### Prompting Best Practices for This Repo

When working with Copilot CLI on calculator features:

1. **Reference the issue**: "Using the feature request in issue #N, implement..."
2. **Mention the template**: "Follow the structure from feature_request.md"
3. **Use delegation for complex tasks**: `/delegate Add feature X with proper error handling`
4. **Leverage context**: Use `@` to include `.github/ISSUE_TEMPLATE/feature_request.md` in your prompt

### MCP Tools Integration

This repository is designed to use GitHub MCP tools via the `--enable-all-github-mcp-tools` flag. When enabled, Copilot CLI can:

- Create and manage GitHub issues
- Create and manage pull requests
- Interact with the GitHub API directly
- Manage repository workflows

## Common Tasks

### Creating an Issue via Copilot CLI

```bash
copilot --enable-all-github-mcp-tools
# (authenticate if needed with /login)
# Then ask: "Create a GitHub issue for [feature description] using 
# the template from .github/ISSUE_TEMPLATE/feature_request.md with 
# the title 'calculator: [feature name]'"
```

### Delegating a Feature Implementation

```bash
copilot
/delegate Add [operation] function to calculator.js with error handling and tests
```

### Reviewing and Merging Code

```bash
copilot
# Ask: "Create a pull request for [branch], link it to issue #N, and get a code review"
# Copilot will handle review suggestions and help prepare for merge
```

## Documentation

- **Step-by-step guide**: See `.github/steps/` for the full learning path
- **Copilot CLI Reference**: `.github/instructions/copilot-cli-ref.instructions.md` contains reference material
- **Repository README**: `README.md` contains setup information
- **Feature Template**: `.github/ISSUE_TEMPLATE/feature_request.md` defines how to request features

## When to Use Copilot CLI for This Project

✅ **Good use cases:**

- Generating calculator function implementations
- Creating GitHub issues and PRs from the terminal
- Getting code review suggestions
- Automating repetitive setup tasks
- Learning terminal-based development workflows

❌ **Avoid:**

- Jumping ahead of the lesson steps (stick to the prompted workflow)
- Using the VS Code extension instead of the terminal CLI (unless specifically asked)
- Creating features outside the calculator scope (this is a focused learning exercise)
