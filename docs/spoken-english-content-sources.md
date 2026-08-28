# Spoken English content sources

Sources and boundary decisions behind the factual and positioning claims on `/courses/spoken-
english` (`content/spokenEnglish.ts`, `components/spoken-english/*.tsx`). This is a maintenance
record, not something imported into the website.

**Last checked:** 28 August 2026 (Step 9).

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

### Step 2 additions (speaking profile and communication curriculum)

- **Spoken interaction and spoken production are treated as inseparable, without naming that
  distinction.** `curriculum`'s `listening-interaction` area and its boundary ("Spoken communication
  is interactive. The curriculum should not treat speaking as isolated monologues only.") express
  the idea behind that standard linguistic distinction without citing a framework, since the CEFR
  source that would normally be cited for it was unreachable this step (see "CEFR source access
  attempt" above).
- **Pronunciation is intelligibility, explicitly not identity or imitation.** The curriculum's
  `pronunciation-intelligibility` area's boundary states plainly that the goal is "clearer speech,
  not removal of the learner's identity or imitation of a native accent" — extending Step 1's
  intelligibility-not-accent-elimination decision into the curriculum detail itself.
- **Fluency is defined against a specific misconception, not just positively.** `curriculum`'s
  `fluency-pacing-repair` area states "Fluency does not mean speaking nonstop, never pausing or
  speaking as fast as possible" before describing what it does mean (chunking, purposeful pausing,
  repair) — a deliberately corrective framing, not merely an omission of the wrong claim.
- **Grammar accuracy is bounded against a perfection expectation.** The `spoken-grammar` area's
  boundary ("Effective speech can include natural pauses and self-correction. Error-free performance
  is not promised.") exists so the focus-area list (time reference, question formation, modals,
  error-repair) cannot be read as a promise of grammatically flawless speech.
- **The speaking profile is a discussion aid, not an instrument.** `speakingProfile.profileAreas`
  uses one-line descriptive `observation` text for each area (never a score, percentage, or coloured
  severity label), and `speakingProfile.boundaryNote` states outright that it is "a coaching needs
  profile, not a certified CEFR placement, clinical speech assessment or guarantee of progress" —
  applying Step 1's "no diagnosis of clinical concerns" decision to this step's new profile content.
- **The six profile prompts request only what coaching needs, nothing sensitive.** No prompt asks
  for an audio/video sample, an employer's confidential information, immigration status, a medical
  or clinical detail, or an identity document — the prompts stay limited to situation, listener,
  communication task, current difficulty, current experience (described, not self-rated against a
  level), and timeline/time-zone/availability.
- **Context application maps curriculum emphasis, not separate offers.** `contextApplication`'s five
  situational mappings (work and meetings, interviews, presentations, study, everyday) describe
  which curriculum focus matters more in each situation — they do not imply a separate mini-course,
  a per-situation price, or a per-situation guarantee, none of which exists.
- **Three-tier WhatsApp message hierarchy, each scoped to what it collects.** The hero's message
  (short: goal + current difficulty) invites a first reply; `speakingProfile.cta.message` (full:
  eight fields matching the six prompts) is used once a visitor is ready to describe their situation
  in detail; `finalCta.message` (also full, ending with an explicit request to confirm format,
  schedule and fee) is used at the point of enquiry. The three are deliberately different lengths
  for different points in the visitor's decision, not copies of one another.

## External language-framework sources

None used. No CEFR (Common European Framework of Reference for Languages) terminology, level
label, or alignment claim appears anywhere in `content/spokenEnglish.ts` or its components — the
implementing prompt requires a current official Council of Europe source and a real documented
assessment method before any such claim could be introduced, and neither exists yet. If CEFR
terminology is introduced in a later step, this document must be updated with the exact Council of
Europe source consulted, the date checked, and the documented method behind any level claim before
publication.

### CEFR source access attempt (Step 2, 28 August 2026)

Step 2's implementing prompt asked for CEFR terminology to be used only if it could be verified
against a current official Council of Europe source, and named five specific URLs to check. All
five were fetched live this step and every one returned **HTTP 403 Forbidden**:

- `https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-companion-volume-and-its-language-versions`
- `https://www.coe.int/en/web/common-european-framework-reference-languages/purposes`
- `https://www.coe.int/en/web/common-european-framework-reference-languages/uses-and-objectives`
- `https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-in-the-classroom`
- `https://rm.coe.int/cefr-companion-volume-with-new-descriptors-2020/16809ea0d4`

The `coe.int`/`rm.coe.int` domain appears to be blocking this fetch tool entirely, not just these
five pages. Consistent with this project's established precedent for an unreadable official source
(TOEFL Step 2's ETS PDF), the responsible response is omission rather than publishing from training
data: **no CEFR term, level label (A1–C2), descriptor paraphrase, or "contextual adaptation"
citation was published anywhere in Step 2's visible copy.** Where the implementing prompt's content
would ordinarily reference a CEFR concept (e.g. distinguishing spoken interaction from spoken
production, or noting that real-world curricula must adapt CEFR-style descriptors to context), the
underlying *idea* is expressed in plain, framework-neutral language instead — e.g. `curriculum`'s
`listening-interaction` area frames listening and responding as inseparable from speaking without
naming any framework, and every area's "focus areas" describe observable skills rather than graded
descriptors.

Whoever attempts a later Spoken English step should re-fetch the five URLs above before assuming
the domain is still blocked — if any becomes reachable, the CEFR-avoidance decision in this section
should be revisited rather than carried forward by default.

### CEFR source access re-check (Step 3, 28 August 2026)

Step 3's implementing prompt permitted the Step-2 source record to use current Council of Europe
CEFR material as a *curriculum-design reference* (not a public-facing citation) for: action-
oriented, context-based language use; the spoken-production/spoken-interaction distinction;
intelligibility; phonological features that support meaning; and contextual adaptation of learning
objectives. It named three specific URLs to recheck:

- `https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-in-the-classroom`
- `https://www.coe.int/en/web/common-european-framework-reference-languages/uses-and-objectives`
- `https://rm.coe.int/cefr-companion-volume-with-new-descriptors-2020/16809ea0d4`

These three are a subset of the five already recorded as HTTP 403 Forbidden above, and this step's
own live re-fetch confirmed the domain remains blocked. Since the process content added this step
(the five-stage coaching cycle and four-lens feedback explanation) was already written entirely in
learner-facing plain language — using the *ideas* of spoken interaction, intelligibility and
phonological control without naming CEFR or any framework — the pre-existing decision to omit CEFR
terminology needed no change. The five-stage process is described only as an internal instructional
model; nowhere does the page call it an official CEFR method, claim CEFR alignment or certification,
copy a descriptor table, or promise progression between CEFR levels.

### Step 4 — illustrative example provenance

`content/spokenEnglish.ts`'s `feedbackDemo` object (the workplace-communication scenario, first
attempt, "what already works" points, diagnosis, revision priority, revised response, follow-up
question/response and "what changed" list) is **entirely original website copy**, written for this
step by the implementer against the implementing prompt's own specified wording — not sourced from,
adapted from, or copied out of any external task bank, test-preparation material, published
teaching example, or real lesson transcript. No external task prompt was used.

- **Transcript-only limitation.** The demonstration's `transcriptBoundary` field states plainly that
  a written transcript cannot show pronunciation, intelligibility, stress, rhythm, intonation, pace,
  pausing, listening or turn-taking, and that no audio was assessed in the example. This is a
  factual statement about the medium (text cannot carry audio information), not a claim requiring an
  external citation.
- **CEFR/intelligibility reference used for the boundary.** The demonstration's diagnosis includes
  one "Delivery question" point noting that "an actual spoken attempt would be needed to review
  intelligibility, stress, phrasing, pace, pausing and listener effort" — this restates, in plain
  language, the same intelligibility-over-accent-elimination position already established in Step 1
  and Step 2 (see "Content boundary decisions" above); it does not cite or rely on any external CEFR
  source, and none was consulted for this specific wording.
- **Review date.** 28 August 2026 (Step 4). Recheck this section if the illustrative scenario's
  wording is ever revised, or if it is ever considered for reuse elsewhere on the site.

### Step 5 — learning-format section source basis

`content/spokenEnglish.ts`'s `delivery` object introduces no new external source. Its content comes
from exactly two places, and nowhere else:

- The single confirmed fact (`confirmedOnline`) restates `docs/spoken-english-offer-verification.md`'s
  "Online delivery — Owner confirmed" row, itself resting on the website-purpose-level owner
  confirmation already used identically by IELTS/PTE/TOEFL Step 1 (see "Internal source for
  online-delivery confirmation" above).
- The two `approachItems` restate, in shorter form, wording already public since Step 1 (the fit
  section's situation-led framing) and Step 2 (the curriculum's connected-skills framing) — no new
  claim is introduced, and the two items the implementing prompt made conditionally available
  (summarising the Step 3 coaching process and Step 4 feedback review) were withheld because Step 3
  is still recorded as "proposed public wording... requiring Aisha's review", not owner-approved
  (see `docs/spoken-english-offer-verification.md`'s "Learning-format section field mapping").
- Every `detailsToConfirm` label is a direct restatement of an existing "Needs owner confirmation"
  row from `docs/spoken-english-offer-verification.md`'s claim table — none is a new fact, an
  inference, or a value invented for visual completeness.

**Review date.** 28 August 2026 (Step 5). Recheck this section only if a `detailsToConfirm` label
is later added, reworded, or moved to a different confirmation state.

### Step 6 — pricing section source basis

`content/spokenEnglish.ts`'s `pricing` copy object and `content/spokenEnglishPricing.ts`'s
discriminated-union record introduce no new source. The enquiry-state copy (eyebrow, heading,
body, note, CTA label and message) is taken verbatim from the implementing prompt's own specified
wording; the `published`-branch labels exist only as ready-to-attach copy for a record that does
not yet exist. The single confirmed fact this section could show (online delivery) is not repeated
here since Step 6 added no new confirmed operational fact — see
`docs/spoken-english-offer-verification.md`'s "Pricing verification (Step 6)" section for the
complete record of what remains unresolved and the exact condition required before any amount can
be published.

**Review date.** 28 August 2026 (Step 6). Recheck this section only if the enquiry-state copy is
reworded, or once a genuine published pricing record is supplied.

### Step 7 — availability section source basis

`content/spokenEnglish.ts`'s `availability` object introduces no new source. The enquiry-state copy
(eyebrow, heading, body, detail prompts, CTA label and message, reservation note) and the
scheduled-state labels are taken verbatim from the implementing prompt's own specified wording. The
scheduled-state branch reads real data from `content/batches.ts` via `lib/batches.ts`'s existing
Pakistan-calendar helpers and `components/spoken-english/SpokenEnglishAvailability.tsx`'s own
completeness guard — no new date, format or duration claim was authored as copy; every fact shown
in a scheduled card comes directly from whatever batch record passes that guard.

**Review date.** 28 August 2026 (Step 7). Recheck this section only if the enquiry-state copy is
reworded, or the completeness guard's required fields change.

### Step 8 — specialist FAQ source basis

`content/spokenEnglishFaqs.ts`'s eight questions introduce no new source. Every answer is taken
verbatim from the implementing prompt's own specified wording, and every claim inside each answer
restates a position already established and sourced in an earlier step: pronunciation/
intelligibility (Step 1/2/3), the non-certified speaking-profile boundary (Step 2), the coaching
process description (Step 3), and the no-guaranteed-timeline boundary (Step 3). Changing
operational facts (format, fee, availability) are linked to their Step 5-7 sections rather than
answered as new copy, so this file carries no independent factual claim needing its own source.

**Review date.** 28 August 2026 (Step 8). Recheck this section only if a question's wording changes
or a new claim is added that doesn't already trace to an earlier step's sourced position.

### Step 9 — final CTA and enquiry-handoff source basis

`content/spokenEnglishEnquiry.ts` introduces no new source. The final-stage fields, WhatsApp
message, email subject/body, and form-variant labels/placeholders/success/fallback copy are taken
verbatim from the implementing prompt's own specified wording. The locked programme label "Spoken
English Coaching" was deliberately defined fresh (the prompt's own permitted alternative) rather
than imported from `content/courses.ts`'s legacy `name` field ("Spoken English & Fluency"), since
that legacy record's tagline/summary/whoFor/modules/includes/price remain non-authoritative for
this route (see the file-level comment on that record). The corrected "what happens next" list
(`spokenEnglishFormVariant.whatHappensNext`) removes only the exam-code/score/work-sample line from
the shared `leadCapture` list — every other word is unchanged in spirit from the original.

**Review date.** 28 August 2026 (Step 9). Recheck this section only if the enquiry fields, message
text, or form-variant copy are reworded.

## Positioning versus formal assessment claims

Every profile area in `content/spokenEnglish.ts`'s `speakingProfile`, every curriculum area in
`curriculum`, and every "fit" pathway is explicitly framed as **positioning** — a description of the
kind of communication goal the programme addresses — not a **formal assessment claim**. (Step 1's
temporary `prioritiesPreview` object, referenced here previously, was replaced in Step 2 by the
fuller `speakingProfile` and `curriculum` objects described above.) None of the following is stated
or implied anywhere on the page:

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
