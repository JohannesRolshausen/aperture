# Aperture

One-page website for Aperture, a way into AI safety for creators.

Built with React, TypeScript and Vite. Fonts are self-hosted through
Fontsource, so the page loads nothing from third-party servers.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # type check, then output to dist/
npm run preview   # serve the build locally
```

The build uses a relative base path. It runs unchanged on a custom domain,
on Vercel and under a GitHub Pages sub-path.

## Before going live

All external links live in `src/config.ts`:

- `APPLY_URL`: Airtable form for creators
- `MENTOR_URL`: Airtable form for mentors
- `CONTACT_EMAIL`: contact address for partners
- `IMPRINT_URL` and `PRIVACY_URL`: legal pages. The footer links appear once
  these are set.

## Structure

```
src/
  config.ts            external links
  styles.css           design tokens and all styles
  components/
    Aperture.tsx       the aperture graphic, static or animated
    Logo.tsx
  sections/            one file per section of the page, in page order:
    Hero, WhatYouGet, WhyCreators, HowItWorks, About, Join, Closing, Footer
```

The four colours are defined once as CSS variables at the top of
`src/styles.css`: `--blue`, `--ink`, `--paper` and `--yellow`.
