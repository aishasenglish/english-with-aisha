# About-page evidence verification

Internal record of what `/about`'s evidence/social-proof section
(`components/about/AboutVerifiedEvidence.tsx`, curated selector `aboutTestimonials` in
`content/testimonials.ts`) currently shows and why. This is a maintenance document — nothing here
is legal advice, and this task did not add any testimonial to production data.

**Implementation date:** About Step 5 (29 August 2026).

## Current eligible-entry count

**Zero.** `content/testimonials.ts`'s `testimonials` array is empty — no testimonial of any kind
exists in the codebase, About-eligible or otherwise. `aboutTestimonials` (which filters
`publishedTestimonials` for `aboutFeatured: true`) is therefore also empty, and
`components/about/AboutVerifiedEvidence.tsx` returns `null`: no section, heading, explanatory copy,
divider, empty grid, "coming soon" state, fake testimonial, Success Stories link, or placeholder
avatar renders anywhere on `/about`.

This is the honest, correct state — not a bug, not a placeholder pending fixture data, and not
something Step 5 should have "fixed" by adding sample content.

## Selector/limit rules

- `content/testimonials.ts`'s `aboutTestimonials` = `publishedTestimonials.filter(t =>
  t.aboutFeatured).slice(0, ABOUT_TESTIMONIAL_LIMIT)`.
- `ABOUT_TESTIMONIAL_LIMIT = 3` — at most three curated entries ever render on `/about`.
- Order is the stable source-array order in `content/testimonials.ts` — never randomised, never
  re-sorted by date or relevance.
- `aboutFeatured` must be explicitly `true` on a record — it is never inferred from `featured`
  (the separate homepage curation flag), `courseSlug`, or `audience`. A testimonial can be
  homepage-featured without being About-featured, and vice versa; the two curations are
  intentionally independent so that, for example, a programme-specific IELTS record used only by
  `components/ielts/IELTSVerifiedEvidence.tsx` never leaks onto `/about` merely because it is
  consent-confirmed.
- The Success Stories link only renders when `publishedTestimonials.length >
  aboutTestimonials.length` — i.e. only when `/success-stories` genuinely has more content than
  what's already shown on `/about`. It is never shown merely because the section itself rendered.

## Eligible items

None currently exist. When a genuine, approved entry is added with `aboutFeatured: true`, record
here: its `id`, why it qualifies (which teaching-quality dimension it demonstrates — clarity,
organisation, usefulness of guidance, professionalism, relevance of practice, or communication
experience), a reference to where its consent record lives (never the evidence itself — see
`docs/testimonial-content-intake.md`), programme/context accuracy, the outcome-evidence decision
(if it names a result), the media decision (text-only by default), the minor/privacy review
outcome if relevant, its page location(s), the date last checked, and its removal/expiry handling.

## Consent status reference

No entry exists, so no consent reference is recorded. Once one is added, this document must record
*where* the consent lives (e.g. "WhatsApp message, kept by Aisha outside this repository") — never
the consent message itself, and never any private contact detail.

## Programme/context accuracy

Not yet applicable (no entries). When entries exist, each card's context label must state the
correct programme/service (IELTS labelled IELTS, PTE labelled PTE, TOEFL labelled TOEFL, Spoken
English/English Writing evidence explicitly relevant to that programme, parent/school evidence not
repurposed as adult-test evidence, corporate/professional evidence not published without scope and
client permission). A single testimonial must never be used to imply effectiveness across every
programme. The O/A Level subdomain is deferred — no URL for it is invented here, and any future
school-English evidence would need its own correct context before being considered for About,
without linking to an unconfirmed subdomain.

## Outcome evidence decision

Not applicable (no entries with an outcome exist). Should one ever be added, `outcome` may only be
set when: the exact number/grade is evidence-supported, permission to publish it exists, the
test/version/date/context is verified where relevant, the wording does not imply the teaching alone
caused the result, no material starting context is hidden in a way that would mislead, no
improvement figure is calculated without verified comparable measures, and the anecdote is never
presented as a general success rate. The About page favours teaching-experience evidence over
result claims by design.

## Media decision

Text-only by default — no image, audio or video evidence currently exists or is approved for
About. If an image is ever approved, it requires separate consent from the quote permission,
verified ownership, cropped/redacted identifiers, stripped metadata, `next/image` with accurate
dimensions, accurate alt text (never repeating the quote text), and a recorded withdrawal process.
Audio/video remains out of scope for this step entirely, per the implementing prompt's media
safeguards — omitted rather than improvised.

## Minor/privacy review

Not applicable (no entries). Any future minor-related entry requires parent/guardian consent (the
learner's own message is never sufficient), minimised identity details, no school name/exact
class/location/timetable combination, and no child photograph by default.

## Page location

`/about` — `AboutVerifiedEvidence` section, positioned after the fit/boundary section and before
the final CTA (reinforcing trust immediately before the conversion ask). Currently renders nothing.

## Last checked

2026-08-29 (About Step 5 implementation).

## Removal/expiry handling

Not applicable — no entries exist. Once an entry is added, its context should be reviewed whenever
the underlying fact could plausibly change (a role, programme or study stage ending), and removed
immediately on withdrawal request — since `aboutTestimonials` derives from the same single
`testimonials` array every other selector reads from, deleting or un-flagging one record removes
it from every surface (About, homepage, programme-specific sections, `/success-stories`)
simultaneously.

## Empty-state behaviour

`components/about/AboutVerifiedEvidence.tsx` returns `null` when `aboutTestimonials.length === 0`
— confirmed via live testing that this produces no section wrapper, heading, explanatory copy,
divider, empty grid, "coming soon" text, placeholder avatar, or Success Stories link, and leaves no
unexplained vertical gap in the page (the preceding fit/boundary section is immediately followed by
the final CTA section).

## Link-to-Success-Stories decision

The link is conditional on `publishedTestimonials.length > aboutTestimonials.length` (see
"Selector/limit rules" above) — mirroring the homepage's own `TestimonialsSection.tsx` pattern
(`hasMoreStories`) rather than showing the link merely because the evidence section rendered at
all. `/success-stories` itself (`components/TestimonialGrid.tsx`) already shows an honest,
non-misleading empty state ("Student stories will be added after publication permission is
confirmed... No sample or generated testimonials are shown") — inspected during this step and
found to require no correction.

## Shared-component defect review

Inspected `TestimonialCard.tsx`, `TestimonialGrid.tsx` and `TestimonialsSection.tsx` before
building any new markup. All three were reused as-is (no fork): `TestimonialCard` already uses
semantic `<figure>`/`<blockquote>`/`<figcaption>`/`<cite>`, shows an outcome only when present,
shows an image only when present (no stock/generated-avatar fallback), and contains no fake stars,
rating icons, or "verified" ticks. No shared defect was found, so none was corrected in this step.

## Fixture testing performed (not committed)

All 12 required states from the implementing prompt were exercised using synthetic, clearly
QA-fixture-marked records temporarily added to `content/testimonials.ts` (plus one temporary
generated placeholder image for the image-present state), then fully reverted before commit:

1. Empty array — confirmed no section renders (the current, permanent production state).
2. `consentConfirmed: false` + `aboutFeatured: true` — excluded everywhere.
3. `consentConfirmed: true` + `aboutFeatured: false` (also `featured: true`) — rendered on the
   homepage only, confirmed absent from About, proving the two curations are independent.
4. `consentConfirmed: true` + `aboutFeatured: true` — rendered on About.
5. Five eligible items — confirmed only the first three (stable source order) rendered, never
   randomised.
6. A deliberately long quote/display-name/context — rendered without truncation, clipping or
   horizontal overflow at all 8 required viewport widths on `/success-stories`.
7. Outcome absent — card rendered with no outcome line.
8. Verified outcome present — card rendered with its outcome label.
9. Image absent — card rendered with no avatar element.
10. Approved image present — card rendered a real `<img>` referencing the fixture file via
    `next/image`.
11. Item withdrawal — removing one eligible record from the array made it disappear from every
    surface (About and `/success-stories`) immediately, with the next-eligible item taking its
    vacated slot in the top three.
12. A programme-specific record (`courseSlug: "ielts"`, consent-confirmed, but `aboutFeatured` not
    set) — confirmed it rendered on `/courses/ielts`'s own evidence section but never on About,
    proving About eligibility is never inferred from `courseSlug`.

Also confirmed: zero console/hydration errors with fixtures present; real `<blockquote>`/`<cite>`
semantics; no star-rating markup; no `Review`/`AggregateRating`/`ratingValue`/`reviewCount` JSON-LD
on `/about` with fixtures present. `git diff`/`git status` after reverting showed zero fixture
residue in `content/testimonials.ts`, and the temporary fixture image and its generation script
were deleted.
