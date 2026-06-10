# Project Handoff

Last updated: 2026-06-10

## Current State

The Veyron Materials website is a static one-page B2B site for biodegradable packaging and PBAT material inquiries.

Website source code changes were made after the handoff setup as part of the B2B UX and bilingual-content pass.

Updated website files:

- `index.html`
- `styles.css`
- `script.js`

Project documentation:

- `project-context/README.md`
- `project-context/AGENTS.md`
- `project-context/HANDOFF.md`

## Files Already Reviewed

- `README.md`
- `index.html`
- `styles.css`
- `script.js`
- `CNAME`
- `robots.txt`
- `sitemap.xml`
- `assets/`

## Important Discovery And Resolution

The Chinese text risk in `script.js` has been addressed.

Relevant areas:

- `heroSlides.zh`
- `translations.zh`

Completed action:

- Rebuilt bilingual hero slide content.
- Rebuilt Chinese translation strings.
- Verified English/Chinese switching in the browser.
- Confirmed no missing `data-i18n` or placeholder translation keys.

Remaining note:

- Some terminal views may still display Chinese poorly depending on encoding, but browser rendering was verified as readable.

## Project Priorities

### P0: Repair Chinese Language Content

Goal:

Make the Chinese version readable, accurate, and aligned with the English B2B message.

Status:

- Completed and browser-verified.

### P1: Improve Inquiry Reliability

Current issue:

The contact form now uses FormSubmit AJAX instead of opening the visitor's email client.

Current implementation:

- `index.html` posts to `https://formsubmit.co/ajax/sales@veyronmaterials.com`.
- `script.js` submits the form with `fetch` and shows sending, success, and error messages.
- If FormSubmit fails, the page shows a direct `mailto:` fallback link.
- `project-context/FORM_BACKEND.md` records setup and activation notes.

Remaining risk:

The owner must submit a first test inquiry and confirm the FormSubmit activation email at `sales@veyronmaterials.com`.

Options:

- Keep FormSubmit for initial launch.
- Add a first-party backend endpoint later.
- Add direct email plus WhatsApp/WeChat/phone if available.
- Keep `mailto:` only as fallback.

### P1: Internal Product Price Reference

Current rule:

- Owner-provided competitor screenshot prices are internal reference baselines only.
- Current rough quote guidance is baseline price plus 10% to 15% minimum unless owner overrides.
- Product reference data is stored in `project-context/private/PRODUCT_PRICE_REFERENCE.md` and `project-context/private/product-price-reference.json`.
- `project-context/private/` is ignored by git to avoid publishing competitor price notes.

### P1: Strengthen Trust Proof

Current issue:

The site mentions Australian certification, but the claim is not supported with specific proof.

Needed information from owner:

- Certification name.
- Certification number or document.
- Product scope covered by certification.
- Whether certificate image can be shown publicly.

### P1: Optimize Images

Current issue:

Image assets are large, roughly 1.6MB to 2.5MB each.

Recommended action:

- Convert large hero/product images to optimized WebP or compressed PNG/JPG.
- Keep originals if needed.
- Update references only after visual comparison.

### P2: Mobile And First-Screen QA

Latest checked:

- Fixed header crowding.
- Hero headline length.
- CTA visibility.
- Product card readability.
- Contact form field spacing.
- Desktop and mobile first viewport now show a hint of the next buyer-fit section.
- No horizontal overflow was detected in browser checks.

Still worth checking after future content changes:

- Longer translated copy.
- New contact methods.
- Real product or certificate images.

## Suggested Next Conversation Start

Recommended owner prompt:

"Give me the project-manager plan for replacing the current email-based inquiry flow with a reliable production form."

Or, when ready to execute:

"Clarify the Australian certification details and update the website trust section only with verified certificate information."

## Decision Log

- Shared project memory is stored in `project-context/`.
- Website source files are not modified unless the owner approves or asks for execution.
- Root `README.md` remains untouched to avoid changing existing project metadata unexpectedly.

## Open Questions

1. What is the exact official Chinese name of Veyron Materials?
2. Should the Chinese site target mainland Chinese suppliers, overseas Chinese buyers, or internal review only?
3. What exact Australian certification has been obtained?
4. Should inquiry submission stay email-based or move to a real web form?
5. Are generated AI product images acceptable for launch, or should they be replaced with real product/factory/certificate visuals?
