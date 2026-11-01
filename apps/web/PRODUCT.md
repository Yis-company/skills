# Yi's repository skills website

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Developers evaluating portable repository skills, choosing a skill for their work, copying its installation command, and reading the standards it uses.

## Product Purpose

Make the repository's skills and engineering standards easy to discover, evaluate, install, and understand. Continuing product/design work is scoped to this catalog and documentation website.

## Operating Context

The website accompanies the `ybtam/skills` repository. Visitors browse or search the catalog, open a skill's full instructions and source, copy an installation command, and read full standard documents. Installing and running skills happens outside the website.

## Capabilities and Constraints

- The catalog is generated from maintained `skills/` sources; standard documents come from `standards/`. These repository sources remain authoritative.
- Preserve static output, both root-path hosting and the `/skills/` GitHub Pages base, directly accessible public routes, and missing-page recovery.
- The established website scope has no accounts, saved questionnaires, database, native app, or shared backend.
- This record applies to `apps/web`; it does not replace root engineering guidance, domain terminology, architecture decisions, or portable skill instructions.
- Upstream skills remain explicitly attributed to their owners rather than presented as this repository's own work.

## Evidence on Hand

- [Repository overview and installation guidance](../../README.md).
- [Approved original scope](../../.codex/plans/2026-09-05-repository-skills/plan.md).
- [Website contributor guidance](AGENTS.md).
- [Catalog and skill sources](../../skills/) and [maintained standards](../../standards/).
- [Content generation](src/content/generate.ts) and [website routes](src/routes/).

## Product Principles

- Help visitors select a relevant skill and reach its installation instructions or source.
- Keep website content tied to maintained repository sources rather than duplicate editorial copies.
- Keep the website small and static; add capabilities only for a confirmed need.

## Accessibility & Inclusion

Preserve keyboard operation and visible focus, reduced-motion behavior, usability at mobile widths, readable documentation and code blocks, useful empty search results, and usable feedback when copying fails.
