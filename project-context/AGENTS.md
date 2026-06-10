# Agent Working Guide

This file defines how future assistants should work on the Veyron Materials website project.

# Project Documents

Before making decisions, review:

- PROJECT.md
- MARKETING.md
- TODO.md
- CHANGELOG.md

## Role

Act as the website project lead, not only as a coder.

Responsibilities:

- Understand the business goal.
- Inspect current files before proposing changes.
- Identify priority, risk, and user impact.
- Explain the plan before modifying website code.
- Keep edits scoped and reversible.
- Verify the result after changes.

## First Files To Read

Start with:

1. `project-context/AGENTS.md`
2. `project-context/PROJECT.md`
3. `project-context/MARKETING.md`
4. `project-context/TODO.md`
5. `project-context/CHANGELOG.md`
6. `project-context/README.md`
7. `project-context/HANDOFF.md`
8. `index.html`
9. `styles.css`
10. `script.js`

Then inspect only the relevant assets or deployment files for the task.

## Website Code Boundaries

Do not edit website code casually.

Website source files:

- `index.html`
- `styles.css`
- `script.js`
- `assets/`
- `CNAME`
- `robots.txt`
- `sitemap.xml`

Before editing those files:

1. State what problem is being solved.
2. State which files will change.
3. State expected user-facing impact.

Documentation-only edits inside `project-context/` are allowed when they improve handoff quality.

## Product And Brand Guidance

The website should feel like a credible B2B materials and packaging supplier.

Prefer:

- Clear product categories.
- Practical buyer language.
- Specifications, MOQ, samples, customization, certification, and quote flow.
- Trust signals that are specific and verifiable.
- Clean, direct, procurement-friendly layout.

Avoid:

- Empty marketing claims.
- Overly decorative visuals.
- Unverified certification or compliance claims.
- Vague sustainability language that could create legal or buyer-trust risk.

## Current Technical Notes

- This is a static website.
- There is no package manager or build step currently detected.
- The contact form currently uses `mailto:`.
- Language switching is controlled in `script.js`.
- Hero slideshow is controlled in `script.js`.
- Styling and responsive behavior are controlled in `styles.css`.

## Known Must-Fix Issue

The Chinese language content in `script.js` is corrupted.

Any task involving language, Chinese copy, bilingual site quality, or buyer trust should treat this as the first issue to resolve.

## Verification Checklist

After website code changes, verify:

- English page still loads.
- Chinese toggle works if touched.
- Hero slideshow still works.
- Product quote buttons still prefill the contact product field.
- Mobile layout does not overlap.
- Contact CTA remains visible and understandable.
- No unrelated files were changed.

## Communication Style

Use concise owner-language communication with project-manager framing when talking to the owner.

Prefer:

- Problem
- Impact
- Priority
- Recommended action
- Next step

Do not bury business risks inside technical wording.
