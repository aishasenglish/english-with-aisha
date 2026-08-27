# Spoken English content sources

Sources and boundary decisions behind the factual and positioning claims on `/courses/spoken-
english` (`content/spokenEnglish.ts`, `components/spoken-english/*.tsx`). This is a maintenance
record, not something imported into the website.

**Last checked:** 27 August 2026 (Step 1).

## Canonical owner facts used

- Qualification: `MPhil in English Literature` (`content/site.ts`'s `qualification`).
- Professional role: `College Lecturer` (`content/site.ts`'s `professionalRole`).
- Public email: `aishasenglish@gmail.com` (`content/site.ts`'s `email`).
- Business purpose: online English tutoring (owner-confirmed at the website-purpose level — the
  same basis IELTS/PTE/TOEFL Step 1 used for their own "online delivery: owner confirmed" row).

None of these is duplicated as a second literal in `content/spokenEnglish.ts` or its components —
`SpokenEnglishAuthorityStrip.tsx` reads `site.qualification`/`site.professionalRole` directly, the
same pattern `TOEFLAuthorityStrip.tsx` already established.

## Internal source for online-delivery confirmation

Aisha has confirmed the website markets online English tutoring generally (recorded in this
project's working history and consistently applied across every programme's Step 1 — see
`docs/toefl-offer-verification.md`'s and `docs/pte-offer-verification.md`'s identical "Online
delivery — Owner confirmed at the website-purpose level" rows for the established precedent). This
supports only the single word "online" — it does not confirm live/synchronous delivery, a named
platform, group or one-to-one availability, or recordings for Spoken English specifically. See
`docs/spoken-english-offer-verification.md` for the complete list of what remains unconfirmed.

## Content boundary decisions

These are deliberate positioning and safety choices made for this step, not claims requiring an
external citation:

- **Intelligibility, not accent elimination.** "Pronunciation and intelligibility" is defined
  throughout as making speech easier for the intended listener to understand — never as sounding
  native, removing an accent, or adopting a specific national accent (British/American/neutral).
  No accent-elimination, accent-reduction or native-accent language appears anywhere on the page.
- **Fluency defined functionally.** Where "fluency" appears (the priorities-preview's "Fluency,
  pacing and preparation" item), it is defined as managing pauses, organising ideas and rehearsing
  relevant situations — never as nonstop or hesitation-free speech, and never promised as an
  automatic or guaranteed outcome.
- **Confidence is not a curriculum item.** The legacy `content/courses.ts` record's "Confidence for
  interviews & presentations" module and "confidence" framing throughout its `whoFor`/`summary`
  fields are not carried into `content/spokenEnglish.ts` at all — confidence is acknowledged only
  as a possible result of supported practice (hero reassurance copy), never as something the
  course delivers or teaches directly.
- **No ableist or shaming framing.** The legacy "freezes when speaking" phrasing is not used
  anywhere in the new copy. Speaking difficulty is framed as situational (tied to real
  conversations, listeners and tasks), not as a personal failing or identity.
- **No diagnosis of clinical concerns.** The fit section's alternative-routes panel states plainly
  that ordinary English coaching is not a substitute for an appropriately qualified professional
  where a speech, language or hearing difficulty may be involved — without attempting to diagnose,
  name a condition, or direct the visitor to a specific clinical pathway.
- **IDP credential kept out of this page.** `site.credentials`/`site.credentialsList` include
  "IDP-Certified IELTS Trainer", which is specific to IELTS. `SpokenEnglishAuthorityStrip.tsx`
  deliberately renders only `site.qualification` and `site.professionalRole` directly (not the
  combined `site.credentials` string), so the IELTS-specific credential cannot appear beside this
  programme's authority claim and be misread as general Spoken English accreditation — the same
  pattern `TOEFLAuthorityStrip.tsx` already established.
- **"Corporate Trainer" omitted.** `site.credentialsList` also includes "Corporate Trainer", which
  this step does not surface on the Spoken English page — the implementing prompt requires the
  owner to confirm the exact current public use and evidence standard for this specific page
  before it appears here, and no such confirmation has been supplied. See "Open questions for
  Aisha" in `docs/spoken-english-offer-verification.md`.
- **Test-preparation and writing redirected, not covered.** The fit section explicitly redirects a
  visitor whose real requirement is an IELTS/PTE/TOEFL score, or formal writing, to the relevant
  dedicated programme page — this page is never presented as IELTS/TOEFL/PTE speaking preparation.

## External language-framework sources

None used. No CEFR (Common European Framework of Reference for Languages) terminology, level
label, or alignment claim appears anywhere in `content/spokenEnglish.ts` or its components — the
implementing prompt requires a current official Council of Europe source and a real documented
assessment method before any such claim could be introduced, and neither exists yet. If CEFR
terminology is introduced in a later step, this document must be updated with the exact Council of
Europe source consulted, the date checked, and the documented method behind any level claim before
publication.

## Positioning versus formal assessment claims

Every "possible priority" area in `content/spokenEnglish.ts`'s `prioritiesPreview` and every "fit"
pathway is explicitly framed as **positioning** — a description of the kind of communication goal
the programme addresses — not a **formal assessment claim**. None of the following is stated or
implied anywhere on the page:

- a specific proficiency level (beginner/intermediate/advanced or CEFR);
- an automated or human level test;
- a guaranteed number of levels of improvement;
- a fixed curriculum sequence tied to a level.

## Recheck requirement

Recheck this document whenever `content/spokenEnglish.ts`'s positioning language changes, whenever
a new owner-confirmed operational fact is added to
`docs/spoken-english-offer-verification.md`, and before ever introducing CEFR or another external
language-framework reference.

## Responsibility

Whoever implements the next Spoken English step (or performs a scheduled content review) is
responsible for rechecking every fact and boundary above and updating this document's "Last
checked" date before publishing any change to Spoken English positioning, level or curriculum
claims.
