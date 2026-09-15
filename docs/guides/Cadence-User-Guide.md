# Cadence User Guide

**Public edition**  
**Version:** 0.29.17  
**Platform:** Obsidian desktop

Cadence is a local-first planning and project-management workspace for Obsidian. It organizes work in Markdown files in your vault, then presents that work through focused views for capture, project delivery, scheduling, and strategy. Cadence does not require a cloud account. Your vault remains the source of truth.

> [!tip] Start with one real piece of work
> Do not try to configure every screen on day one. Capture one commitment, turn it into a small project, decide what comes next, and place a focused block on the Calendar. That single loop teaches the shape of Cadence.

![Cadence workflow from capture through scheduled work](assets/cadence-workflow.png)

## Contents

1. [Start Here](#start-here)
2. [Core Concepts](#core-concepts)
3. [Navigation and Work Scopes](#navigation-and-work-scopes)
4. [Capture, Inbox, and Today](#capture-inbox-and-today)
5. [Projects, Milestones, and Tasks](#projects-milestones-and-tasks)
6. [Portfolios and Parent-Child Projects](#portfolios-and-parent-child-projects)
7. [Node Map and Relationships](#node-map-and-relationships)
8. [Calendar and Scheduling](#calendar-and-scheduling)
9. [Strategy, Initiatives, Timeline, and Reviews](#strategy-initiatives-timeline-and-reviews)
10. [Settings and Customization](#settings-and-customization)
11. [Markdown Data and Maintenance](#markdown-data-and-maintenance)
12. [Practical Workflows](#practical-workflows)
13. [Troubleshooting](#troubleshooting)

## Start Here

### Install

1. Download `main.js`, `manifest.json`, `styles.css`, and the `assets` folder from the Cadence release.
2. Create `<vault>/.obsidian/plugins/cadence-planner/`.
3. Place those files and the `assets` folder in that plugin folder.
4. In Obsidian, open **Settings -> Community plugins**, reload plugins, and enable **Cadence**.

Cadence is desktop-only. After enabling it, open Cadence from its ribbon action, command palette command, or configured startup behavior.

### First-use checklist

1. Open **Cadence -> Settings**.
2. Confirm your daily-note folder and the headings Cadence should use for tasks and journal content.
3. Set the first day of the month view and your operating hours.
4. Decide whether to hide closed days in Week and Month calendar views.
5. Create one project with a desired outcome, one milestone, and a small next task.
6. Use Inbox for the next thing you need to remember rather than creating an unstructured note.

## Core Concepts

### Work scope

A work scope is a high-level lens for separating categories of work. The scope buttons in the Cadence sidebar filter eligible projects and portfolio content. A project belongs to one scope. When several scopes are selected, Cadence shows the combined set.

### Project

A project is an outcome-oriented container for meaningful work. It can include a brief, desired outcome, status, priority, dates, notes, milestones, tasks, and relationships. Use a project when the work needs coordination, context, or multiple steps.

### Milestone

A milestone is a durable intermediate outcome within a project. It is not simply a date. Give each milestone a clear completion condition, then attach the tasks needed to reach it. A project can have multiple milestones; task progress rolls into project progress.

### Task, reminder, and event

- **Task:** an actionable item, normally attached to a milestone or a daily note.
- **Reminder:** a captured obligation that can have due and repeat behavior.
- **Event / work block:** a scheduled time range shown on the Calendar. Events are stored as Markdown files under Cadence's event location.

Use the smallest structure that preserves context. A one-off thought usually starts in Inbox. Work with a durable outcome belongs in a project. A commitment to a time belongs on the Calendar.

## Navigation and Work Scopes

Cadence's main sidebar is divided into these areas:

| Area | Use it for |
| --- | --- |
| **Home** | A configurable command center and current-state overview. |
| **Plan** | Inbox, Today, and Calendar. |
| **PM** | Portfolios, Projects, and Node Map. |
| **Business Roadmap** | Strategy, Initiatives, Timeline, and Reviews. |
| **Settings** | Appearance, scheduling, startup, modules, and vault behavior. |

The work-scope buttons at the top of the sidebar act as filters. Click to include or exclude a scope. In views with a dedicated scope filter, such as Node Map, changes stay synchronized with the sidebar selection.

The sidebar can be collapsed. When **Expand collapsed sidebar on hover** is enabled in Settings, an icon-only or hidden sidebar temporarily expands under the pointer. Sidebar items provide immediate custom hover help.

### A quick way to orient yourself

Think of the navigation as a path, not a list of unrelated pages:

1. **Plan** is where incoming work and today’s decisions live.
2. **PM** is where projects gain structure and relationships.
3. **Business Roadmap** is where project work is connected to longer-term direction.
4. **Settings** is where Cadence adapts to your schedule, vault, and preferred level of detail.

## Capture, Inbox, and Today

### Quick Capture

Use **Quick Capture** for ideas, commitments, and reminders that arrive before you know where they belong. The default shortcut is **Ctrl+D** on Windows and Linux, or **Cmd+D** on macOS.

Capture can create a plain reminder or schedule an appointment/work block. Add a date, recurrence, notes, and a project link when known. If you do not know the project yet, capture first and decide from Inbox.

### Inbox

Inbox is the decision surface for unprocessed captures. For each capture, decide whether to:

- complete or delete it,
- keep it as a dated reminder,
- schedule it on Calendar,
- link it to a project, or
- promote it into a project when it needs a durable outcome and multiple steps.

Avoid treating Inbox as permanent storage. Its value comes from regularly converting vague intent into an actionable next location.

### Today

Today combines actionable daily-note tasks, reminders, due work, and scheduled items. It is the best place to decide what to do next without opening every project. Use it as a working list, not as a second project plan: update milestones and projects where the real context lives.

## Projects, Milestones, and Tasks

### Create a project

Open **PM -> Projects** and choose **New Project**. Begin with:

1. A concise project name.
2. A **Brief** explaining the context or problem.
3. A **Desired Outcome** that makes completion observable.
4. A status and priority.
5. A first milestone and its next task.

Cadence uses statuses to communicate intent:

| Status | Meaning |
| --- | --- |
| **Active** | Work is currently in motion. |
| **Planned** | Approved or expected work that is not yet active. |
| **Backlog** | Worth retaining but not presently committed. |
| **On hold** | Intentionally paused pending a decision, capacity, or dependency. |
| **Done** | Outcome completed. |
| **Cancelled** | Work will not continue. |

Priority is a separate signal from status. Use it to distinguish urgency or importance among otherwise eligible work.

### Organize milestones

Create milestones for outcomes that materially reduce uncertainty or move the project forward. Good milestones are named as results, for example, `Content structure approved` or `Pilot workflow validated`, rather than as vague activity.

Within a milestone:

- add tasks in the order that makes execution clear,
- keep task wording actionable,
- use notes for decisions, constraints, and supporting context,
- complete tasks as they are finished, and
- collapse completed milestone content when you need a quieter working view.

Cadence is intentionally milestone-first. Every project task should normally be assigned to a milestone. This prevents an invisible pool of unstructured project work.

### Project details and progress

Select a project to work in its detail view. The view provides its summary, metadata, milestones, tasks, and notes. Project progress derives from completed work rather than a manually maintained percentage. Keep statuses current so Portfolio and Node Map views remain useful.

## Portfolios and Parent-Child Projects

Portfolios group related projects without hiding independent work. Use a portfolio when a collection benefits from a shared context, such as a product area, department, client program, or strategic theme.

### Organize mode

In **PM -> Portfolios**, use **Organize** to create or rename portfolios, assign their work scope, and move projects between them. Drag a project onto another portfolio to reassign it.

### Parent and child projects

Use a **Containment** / **Part of** relationship when one project is genuinely a component of another. In portfolio cards, child projects are visually indented below their parent. This is stronger than merely grouping related work: it expresses that the parent outcome contains the child project.

Do not turn every relationship into containment. Two projects can be related, sequenced, or dependent without one being a child of the other.

## Node Map and Relationships

**PM -> Node Map** is a canvas-like workspace for relationships between projects. It is designed for understanding execution flow, not replacing project details.

### Relationship types

| Type | Use when |
| --- | --- |
| **Execution dependency** | One item cannot proceed until another is complete. This is the hard-blocker relationship. |
| **Enablement** | One item makes another easier or more valuable without being a strict prerequisite. |
| **Tentative Next** | You expect one item to be the next useful follow-on after another. It is a planning signal, not a hard rule. |
| **Related** | The items share context but do not imply sequence or blocking. |
| **Containment** | The target is part of, or a child of, the parent project. |

![Cadence relationship types and their intended meanings](assets/cadence-relationship-types.png)

### Create and edit connections

1. Open Node Map and select the scopes you want to view.
2. Drag project cards to arrange the map. Use middle-click drag to pan and left-drag empty space to select multiple items.
3. Drag from a project edge handle to another project to create a connection.
4. Select the new or existing arrow to choose its relationship type.
5. Select an arrow and use Delete/Backspace or the delete control to remove it.

### Groups and layout tools

Create groups to organize related projects spatially. Moving a group moves its members. Containment can point to a child-project group rather than every child individually.

Use the map controls for snap-to-grid, alignment, distribution, filters, and layout cleanup. The right inspector shows the selected project's brief and desired outcome, which helps you make relationship decisions without opening each project.

## Calendar and Scheduling

Cadence Calendar supports Day, Week, Month, and Agenda views. It displays appointments, work blocks, scheduled work, reminders, and deadlines as appropriate to the active filters.

### Scheduling basics

- Choose **New** to create an appointment or work block.
- Drag on a time grid to create a scheduled range.
- Drag an event to move it. Hold Ctrl/Cmd while dragging to duplicate where supported.
- Drag an event's start or end handle to resize it.
- Right-click an event to edit, duplicate, delete, open a linked project, or mark it complete/incomplete.

When events overlap, Cadence displays those overlapping events side by side. Events that do not overlap use the full width of the day column.

### Calendar views

| View | Best for |
| --- | --- |
| **Day** | Detailed time blocking and rescheduling. |
| **Week** | Balancing commitments and focus time across the working week. |
| **Month** | Scanning dates, deadlines, and all-day work. |
| **Agenda** | Reviewing upcoming work in chronological order. |

The calendar header remains visible while calendar content scrolls. When horizontal space is constrained, totals move below the date and controls retain a stable position.

![Choose a Calendar view based on the planning decision in front of you](assets/cadence-calendar-views.png)

### Operating hours and closed days

In **Settings -> Scheduling**, enable each open day and set independent start/end times. Calendar time grids show closed periods, and the current day pattern is reused by roadmap scheduling. Enable **Hide closed days in Calendar** to omit closed days from Week and Month views. Day and Agenda remain available for any date.

## Strategy, Initiatives, Timeline, and Reviews

The Business Roadmap area adds strategic context above individual projects.

- **Strategy** presents governing purpose, outcomes, capacity, and strategic direction.
- **Initiatives** tracks strategic initiatives and their current state.
- **Timeline** visualizes strategic timing, phases, and gates.
- **Reviews** supports weekly, monthly, and quarterly reflection.

Use this area when you need to decide whether the project portfolio is moving the larger plan forward. Keep operational task detail inside projects; use roadmap entries for durable strategic commitments and review decisions.

## Settings and Customization

### Appearance

- **Cadence dark mode:** changes Cadence surfaces without changing your global Obsidian theme.
- **Custom Cadence background image:** accepts a vault-relative path, HTTPS URL, `file:///` URL, or absolute Windows path. Leave blank to use the included background.
- **Set to default:** removes your override and restores the included background.
- **Root view background color:** applies a CSS color to the Cadence tab surface.
- **Icon gallery:** browse Lucide/Cadence icons and click one to copy its icon ID.

### Modules

Planner and PM are the core public workflow. CRM and partner-management modules are optional. Disable modules you do not use to simplify navigation and related dashboards.

### App behavior

Choose whether Cadence opens at Obsidian startup, opens in a pop-out window, and remembers its pop-out position. Set the default Cadence tab to the surface you use most often.

### Daily notes and reminders

Set the daily-note folder, task heading, and journal heading to match your vault. Cadence uses these values when it reads and writes daily-note tasks. Desktop notification permission and completed-reminder cleanup are also configured here.

## Markdown Data and Maintenance

Cadence writes its data into your vault. You can inspect and edit the resulting Markdown, but use Cadence's UI for structural changes when possible so related metadata remains consistent.

### Data ownership

- Projects, milestones, tasks, notes, and events are Markdown-backed.
- Local UI preferences are stored by Obsidian in the plugin's local data.
- No cloud account is required for the core public workflow.

### Safe manual-editing practices

1. Keep frontmatter keys intact when editing a Cadence-managed note.
2. Make small changes and reopen the Cadence view to confirm the result.
3. Use normal Obsidian backlinks, links, and search freely.
4. Back up your vault before bulk edits or migrations.
5. Do not commit `data.json`, credentials, or personal vault content when contributing to the plugin repository.

## Practical Workflows

### Weekly planning

1. Empty Inbox into reminders, projects, or scheduled blocks.
2. Review Today for due work and open tasks.
3. Check the Calendar for actual capacity.
4. Open Node Map and look for hard dependencies, blocked items, and tentative next steps.
5. Choose a small set of active milestones, not every project.

### Starting a new initiative

1. Create the project and state its desired outcome.
2. Add the first milestone and the next concrete task.
3. Put it in the appropriate portfolio and work scope.
4. Add a relationship only when it changes how you will sequence or prioritize the work.
5. Create a calendar block if the work needs protected time.

### Finishing a project

1. Complete remaining tasks and milestone outcomes.
2. Record the result and any decisions in project notes.
3. Mark the project Done or Cancelled.
4. Update downstream dependencies or tentative-next relationships.
5. Use a Review to capture what should change next time.

## Troubleshooting

### Cadence does not appear after an update

Reload community plugins or restart Obsidian. Confirm `main.js`, `manifest.json`, `styles.css`, and `assets` are all present in the plugin directory.

### Calendar does not show expected tasks or events

Check the current Calendar filters, work scopes, date range, and whether the item has a scheduled time. For Week/Month views, check whether **Hide closed days in Calendar** is hiding the relevant day.

### Background image does not load

Prefer a vault-relative path such as `00_Attachments/Cadence/background.png`. Confirm the attachment exists and use **Set to default** to return to the bundled background if needed.

### A relationship or group is not visible in Node Map

Confirm that both projects are inside the selected work scopes and that the map's state/link filters include the relationship. Pan or use the map controls to locate moved cards and groups.

### I need help or want to contribute

Use the project's GitHub issues for reproducible bugs and focused feature requests. Include your Cadence version, Obsidian version, operating system, steps to reproduce, and screenshots that do not expose private vault data.

---

Cadence is most effective when it reduces uncertainty about the next useful action. Keep the system lightweight: capture quickly, structure only what needs structure, and use relationships and schedules where they make real decisions easier.
