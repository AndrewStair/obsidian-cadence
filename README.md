# Cadence

Cadence is a local-first operating system for planning and executing meaningful work in Obsidian. It keeps projects, milestones, tasks, notes, and decisions in Markdown while providing a focused workspace for deciding what to work on next.

This is the public fork maintained by [AndrewStair](https://github.com/AndrewStair), based on [wesswart77/obsidian-cadence](https://github.com/wesswart77/obsidian-cadence). It is intentionally general-purpose: no cloud account is required, and your vault remains the source of truth.

> **Public build:** Cadence `0.29.7` carries the portable planning and project-management implementation from this fork. Private integrations, personal data, and machine-specific configuration are removed before publication.

## Why Cadence

Most task tools isolate planning from the work that gives it context. Cadence keeps both together:

- **Markdown first.** Projects and supporting notes remain ordinary vault files you can inspect, edit, link, search, and own.
- **Milestone-first execution.** A project is broken into outcomes, then actionable tasks, so progress is visible without maintaining a separate system.
- **Local by default.** Cadence does not require a hosted service, account, or proprietary database.
- **Attention with context.** Inbox, Today, Calendar, and project views make it easier to choose the next useful action without losing the larger objective.
- **Structured, not rigid.** Use a simple project when that is enough, and add relationships, portfolios, or sequencing only when they reduce real uncertainty.

## Public Fork Capabilities

The public edition centers practical project management in Obsidian:

| Area | Intended capability |
| --- | --- |
| **Projects** | Folder-backed projects with a brief, desired outcome, status, priority, milestones, tasks, notes, and progress. |
| **Milestones** | Ordered outcomes with notes and tasks; completed work can be collapsed without disappearing from the record. |
| **Portfolios** | A readable grouping of related projects, including parent and child project structure where it is useful. |
| **Node Map** | A canvas-like view of project relationships, dependencies, tentative next steps, and containment. |
| **Planning surfaces** | Inbox capture, daily focus, a calendar, and project-aware reviews. |
| **Relationships** | Explicit links such as dependency, enablement, tentative next, related work, and containment. |
| **Local customization** | An included Cadence background, optional per-vault background override, preferences, work-scope names, and visual choices stored locally rather than in the repository. |

The fork also retains Home, Inbox, Today, Calendar, project boards, capture, reminders, and the optional upstream CRM and partner-management modules. A release only promises what its release notes and source actually include.

## Install

### Manual install

1. Download `main.js`, `manifest.json`, `styles.css`, and the `assets` folder from the [latest release](https://github.com/AndrewStair/obsidian-cadence/releases/latest).
2. Create `<your-vault>/.obsidian/plugins/cadence-planner/`.
3. Place the files and `assets` folder in that folder.
4. In Obsidian, open **Settings -> Community plugins**, reload plugins, and enable **Cadence**.

### Development checkout

```powershell
git clone https://github.com/AndrewStair/obsidian-cadence.git
cd obsidian-cadence
git remote add upstream https://github.com/wesswart77/obsidian-cadence.git
node scripts/audit-public-release.mjs
```

Use `origin` for this fork and `upstream` only to review or incorporate upstream changes deliberately.

## Data and Privacy

Cadence reads and writes Markdown in your own vault. Runtime settings are stored locally by Obsidian and are excluded from this repository.

Before a public release, run:

```powershell
node scripts/audit-public-release.mjs
```

The audit rejects personal paths and private product integrations. Do not commit `data.json`, local configuration files, vault content, credentials, or screenshots containing private information.

## Contributing

Bug reports and focused pull requests are welcome. For a change that affects the project model, start with the user workflow and the Markdown data contract: Cadence should make ordinary work clearer, not create another system users have to maintain.

## Attribution and License

Cadence originates from [wesswart77/obsidian-cadence](https://github.com/wesswart77/obsidian-cadence). This fork retains the original [MIT License](LICENSE); additional attribution is in [NOTICE](NOTICE).
