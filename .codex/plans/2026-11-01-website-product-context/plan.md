# Website product context

Capture the confirmed purpose and constraints of `apps/web` so continuing website work starts with durable product facts. This is documentation and one workflow preference, owned by Codex and reviewed by Yi.

## Confirmed decisions

- Yi confirmed continuing product/design work on the catalog/docs website for developers browsing portable repository skills, copying installation commands, and reading source-owned standards.
- Context belongs in `apps/web`, as resolved by Impeccable. It does not govern the whole skills library.
- Yi chose code-first for future landing pages and showcase surfaces. Record `buildPath: "code"` in the app's Impeccable config; app screens and documents remain code-first under the skill's workflow.
- Preserve existing static hosting and the approved Iris theme. This initialization establishes no new visual direction.
- Matt setup is already present: GitHub Issues guidance, triage vocabulary with the triage skill installed, and domain-document conventions. No additional Matt setup is needed.

## Sequence and approval

1. Yi reviews this plan, including the exact product draft and config below, through the required Plannotator approval gate. Do not write either target before approval. If changes are requested, revise both plan formats and review again.
2. After approval, Codex creates only `apps/web/PRODUCT.md` and `apps/web/.impeccable/config.json`, using the reviewed content. If either file appears in the meantime, inspect it and preserve existing authority instead of overwriting it.
3. Codex checks the product schema marker, platform, source links, and JSON value; runs `bun run format:check` and `git diff --check`; then reviews final file scope and reports actual results.

The review packet lives in `.codex/plans/2026-11-01-website-product-context/` as `plan.md`, `plan.html`, and the gate's `review.json`. These planning artifacts precede implementation.

## Exact draft: apps/web/PRODUCT.md

```markdown
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
```

## Exact draft: apps/web/.impeccable/config.json

```json
{
  "buildPath": "code"
}
```

This is a workflow preference, not product truth. Keep it out of `PRODUCT.md`.

## Preserved and deferred

- Preserve the existing Iris identity in implementation and its approved plan; do not write or replace `DESIGN.md` during init. Impeccable init records product truth only.
- Live-mode configuration is deferred until visual iteration needs it. No server, browser injection, CSP edit, hook change, dependency installation, application code, redesign, migration, credentials, publishing, or deployment is part of this setup.
- Preserve unrelated dirty work: modified root `AGENTS.md`, untracked `.hermes/`, `.serena/`, `.trae/`, and `docs/agents/code-review.md` observed at investigation.
- No new ADR, tracker configuration, baseline changes, skill bundles, or root `PRODUCT.md` are needed.
- Do not add unconfirmed positioning claims, usage metrics, customer proof, or a new accessibility certification claim.

## Acceptance and evidence limits

- The app owns a short product record with the schema marker, bare `web` platform, confirmed users/purpose, actual capabilities, and existing constraints. Every evidence link resolves locally.
- The app's config records only the confirmed `buildPath: "code"` preference, preserving any existing keys if concurrent work creates a config before implementation.
- The two implementation files match the reviewed draft, with formatting adjustments allowed. Existing source, design, tracker, domain, and unrelated work are preserved.
- Verification is proportionate to documentation/config changes: format check, whitespace check, JSON/schema/link inspection, and final scope review. No new tests or application build is needed because runtime behavior is unchanged. Report pre-existing failures separately.
- Local checks do not establish remote CI, live website behavior, publication, or deployment. None is being requested or performed.

## Investigation evidence

CodeGraph was queried before locating website source. Impeccable context resolved the app root as `apps/web`, reported an incumbent visual implementation, and found no `PRODUCT.md` or `DESIGN.md`. Current routes and content generation substantiate the catalog, search, skill details, installation commands, standards reader, and repository-source ownership. The original repository plan and Iris plan both have recorded approved review results. The latest website commits inspected were from September 2026; Yi's current confirmation establishes ongoing intent rather than inferring it from commit recency.

The local Matt setup skill was read and its existing outputs checked against the installed triage skill and `origin` (`ybtam/skills`). This assesses local configuration; remote labels were not audited or modified. Shared-memory tooling was unavailable, and no relevant prior-memory entry was used.
