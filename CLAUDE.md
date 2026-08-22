# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm install       # install deps (node_modules is not currently installed — run this first)
npm run dev        # start dev server at http://localhost:3000
npm run build       # production build
npm run start       # serve the production build
npm run lint        # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test suite configured in this repo.

## Architecture

Marketing site for an English coaching business (Next.js 16 App Router, TypeScript, Tailwind CSS v4, no backend/CMS/database).

**Content-driven pages.** All copy, pricing, contact info, and structured data live in `/content/*.ts` as plain typed objects/arrays — pages and components import from there rather than hardcoding text. When asked to change site text, prices, batches, testimonials, FAQs, or nav links, edit the relevant file in `content/`, not the components:
- `content/site.ts` — brand name, WhatsApp/email/city, `showPrices` toggle, Formspree endpoint, social links
- `content/courses.ts` — one object per course (`slug`, modules, includes, price); course pages under `app/courses/<slug>/page.tsx` look up their course via `courses.find(c => c.slug === "...")`
- `content/batches.ts`, `content/testimonials.ts`, `content/faqs.ts`, `content/nav.ts`

**Course pages are thin and repetitive by design.** Each of `app/courses/{ielts,pte,toefl,english-writing,spoken-english}/page.tsx` assembles the same sequence of shared components (`CourseHero`, `CourseModules`, `IncludedList`, `PricingCard`, `BatchTable`, `FAQAccordion`, `CTASection`) around a single course looked up from `content/courses.ts`. Adding a course means adding an entry to `courses.ts` plus a new `page.tsx` following the existing pattern — not a new component.

**Two lead-capture paths, no backend:**
- Forms (`ContactForm`, `DiagnosticForm`) POST directly to `site.formspreeEndpoint` (Formspree) client-side.
- `lib/whatsapp.ts` builds `wa.me` deep links (`whatsappLink`, `courseEnrollLink`) from `site.whatsapp`; used by CTAs and `WhatsAppFloat` throughout the site instead of a contact backend.

**Design tokens** are defined once in `app/globals.css` via Tailwind v4's `@theme` (`--color-ink`, `--color-teal`, `--color-coral`, `--color-ivory`, `--color-charcoal`, `--color-muted`, `--color-stone`, etc., plus `--font-sans`/`--font-serif`, both currently mapped to the single Outfit font loaded in `app/layout.tsx`). Use these theme color/font names in Tailwind classes rather than raw hex values or arbitrary fonts.

**Date-driven pages** (anything rendering `<BatchTable />`, or reading `content/batches.ts` directly) must export `export const revalidate = 3600;` — otherwise the past-date filter in `BatchTable`/`nextBatch()` only re-evaluates at build time and stale "Open" batches can linger between deploys.

**Scroll-reveal animation**: wrap content in the `FadeUp` component (adds the `.fade-up`/`.visible` classes defined in `globals.css` via an `IntersectionObserver`) rather than writing new scroll-triggered animation logic.

**Images** are not committed — `public/images/README.md` documents the exact filenames/sizes each page expects (e.g. `aisha-hero.jpg`, `og-image.jpg`, `testimonials/testimonial-*.jpg`). When wiring up a new image reference, follow that naming convention and update that README.
