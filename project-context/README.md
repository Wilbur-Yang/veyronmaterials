# Veyron Materials Website Project

This folder is the shared project memory for Veyron Materials website work.

Read this folder before changing the website.

## Project Location

Project root:

`C:\Users\14413\OneDrive\<Documents>\foreign-trade-web`

Shared context folder:

`project-context/`

## Website Type

- Static one-page B2B website.
- No build system detected.
- Core files:
  - `index.html`
  - `styles.css`
  - `script.js`
- Domain and search files:
  - `CNAME`
  - `robots.txt`
  - `sitemap.xml`
- Visual assets:
  - `assets/`

## Business Positioning

Brand:

Veyron Materials

Audience:

- Overseas B2B buyers.
- Packaging brands.
- Distributors and wholesalers.
- E-commerce packaging buyers.
- Eco-packaging companies.
- Buyers interested in Australia and overseas supply discussions.

Product scope:

- PBAT modified material / masterbatch.
- Biodegradable blown film.
- Biodegradable mulch film.
- Biodegradable mailer bags.
- Biodegradable garbage bags.
- Flexible packaging bags.
- Compostable takeout boxes.

Core message:

Veyron Materials supports B2B biodegradable packaging and PBAT material inquiries with sample discussion, customization, flexible MOQ, and Australian certification positioning.

## Current Site Structure

The page currently includes:

1. Fixed header with brand, navigation, language toggle, and quote CTA.
2. Hero slideshow with rotating background images and hero copy.
3. Buyer-fit strip.
4. Product catalog with two primary product cards and downstream product options.
5. About / why section.
6. FAQ.
7. Contact / inquiry form.
8. Footer.

## Current High-Priority Risks

1. Chinese language pack is corrupted in `script.js`.
   - Impact: switching to Chinese makes the page unreadable.
   - Priority: P0.

2. Inquiry form uses `mailto:`.
   - Impact: form submission depends on the buyer's local email client and may fail silently.
   - Priority: P1.

3. Image files are large.
   - Impact: slower first load and weaker mobile experience.
   - Priority: P1.

4. Certification proof is underdeveloped.
   - Impact: trust claim exists, but buyers cannot verify details from the page.
   - Priority: P1.

5. Mobile header and hero need visual QA.
   - Impact: first impression and CTA clarity may degrade on small screens.
   - Priority: P2.

## Working Principle

The owner expects project-manager behavior:

- Read first.
- Analyze before execution.
- Split work into priorities.
- Do not make website code changes until the plan is clear or execution is requested.
- Treat design, trust, conversion, content, and technical quality as one website responsibility.

## Related Files

- `AGENTS.md`: rules for future assistants or collaborators.
- `HANDOFF.md`: current project handoff, open issues, and recommended next actions.
