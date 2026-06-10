# Form Backend

Last updated: 2026-06-10

## Current Form Service

The public inquiry form now posts to FormSubmit using AJAX:

`https://formsubmit.co/ajax/sales@veyronmaterials.com`

Public form files:

- `index.html`
- `script.js`
- `styles.css`

## How It Works

- The form no longer defaults to `mailto:`.
- `script.js` intercepts submit, builds `FormData`, and posts to FormSubmit with `Accept: application/json`.
- The page shows sending, success, or failure status messages in place.
- If the form endpoint fails, the page shows a `mailto:` fallback link.
- Hidden FormSubmit fields are included for subject, table email template, current source URL, and honeypot spam reduction.

## Activation Required

FormSubmit requires the destination email to be confirmed the first time the form is used.

Action for owner:

1. Open the deployed website.
2. Submit one test inquiry.
3. Check `sales@veyronmaterials.com`.
4. Confirm the FormSubmit activation email.
5. Submit a second test inquiry and verify it arrives.

## Official Docs

- https://formsubmit.co/documentation
- https://formsubmit.co/ajax-documentation

## Remaining Risk

- FormSubmit is a third-party email form backend.
- The free email endpoint depends on FormSubmit availability and deliverability.
- If lead volume increases, replace this with a first-party backend or a paid form service with dashboard, spam controls, and delivery logs.
