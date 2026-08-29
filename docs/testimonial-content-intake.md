# Testimonial content intake

This document is for Aisha's use when collecting and approving student or parent
testimonials for publication. **It is not imported into the website** — it is a private
planning file for deciding what goes into `content/testimonials.ts`.

No testimonials currently exist in the codebase. The homepage social-proof section, the `/about`
evidence section and the `/success-stories` page are all built to stay truthfully empty until
entries are added here first, reviewed, and then entered into `content/testimonials.ts` with
`consentConfirmed: true`.

Do not add a testimonial to `content/testimonials.ts` unless the entry below has permission
recorded as "yes" and personal identifiers have been removed from any evidence.

## Testimonial entry

- Approved display name:
- Audience: student / parent / professional
- Context:
- Course or programme:
- Original testimonial text:
- Specific outcome, if any:
- Evidence available: written feedback / score report / grade result / parent feedback / professional feedback
- Photograph approved for publication: yes / no
- Result screenshot approved for publication: yes / no
- Personal identifiers removed from evidence: yes / no
- Permission to publish on website: yes / no
- Date permission was recorded:
- Homepage featured story: yes / no

_Copy the block above for each new testimonial._

## Spoken English-specific intake fields (Step 4)

`/courses/spoken-english`'s conditional evidence component
(`components/spoken-english/SpokenEnglishVerifiedEvidence.tsx`) renders a Spoken English
testimonial only when it passes every check in
`docs/spoken-english-offer-verification.md`'s "Evidence eligibility rules". Collect these
additional fields for any Spoken English record before it is considered for
`content/testimonials.ts` (in addition to the general fields above):

- Exact programme/service the person actually used (e.g. "Spoken English coaching" specifically,
  not a related programme):
- Learner audience: student / professional / other approved category:
- Real communication context (e.g. "workplace meetings", "job interviews", "study
  participation") — accurate and non-sensitive, with any employer/institution name removed unless
  separately approved:
- Exact original quotation, word for word:
- Approved excerpt, if different from the exact quotation (only usable with explicit approval of
  the final public wording — never a silent grammar cleanup):
- Approved public display name:
- Approved context line for public display:
- Consent-confirmation date and where the private consent record is kept (e.g. "WhatsApp message,
  kept by Aisha outside this repository" — never paste the consent evidence itself into this file
  or into `content/testimonials.ts`):
- May an employer/client/institution name appear: yes / no:
- Does the quote make an interview, job, promotion or presentation-outcome claim: yes / no — if
  yes, what specific evidence supports it:
- Evidence supporting any other specific outcome named in the quote:
- Does audio or image evidence exist: yes / no:
- If audio/image exists: who owns it, and has the person given explicit consent to public web
  publication (separate from consent to be quoted)?
- Accessibility transcript/caption status for any audio/image (required before any audio/image can
  be published — see the implementing prompt's "Audio and media safeguards"):
- Expiry/review date, if the context could become stale (e.g. a role, employer or study stage that
  may change):
- Withdrawal/removal process: how the person can ask for the entry to be removed, and who is
  responsible for actioning that request.

Do not add learner audio, an audio recorder/player, or AI-generated pronunciation analysis to the
public site under any circumstances arising from this intake — Spoken English audio evidence
remains categorically out of scope until a separate, fully-documented decision is made (see the
"Audio and media safeguards" section of the Spoken English Step 4 implementing prompt for the full
list of unresolved prerequisites: ownership, consent to publish, consent to edit/transcribe,
approved identity, employer/confidential-voice screening, redaction method, withdrawal process,
storage/retention, and accessibility transcript/captions).

## English Writing-specific intake fields (Step 4)

`/courses/english-writing`'s conditional evidence component
(`components/english-writing/EnglishWritingVerifiedEvidence.tsx`) renders an English Writing
testimonial only when it passes every check in `docs/english-writing-offer-verification.md`'s
evidence-eligibility rows. Collect these additional fields for any English Writing record before it
is considered for `content/testimonials.ts` (in addition to the general fields above):

- Exact programme/service the person actually used (e.g. "English Writing coaching" specifically,
  not a related programme):
- Learner audience: student / professional / other approved category:
- Real writing context (e.g. "workplace emails and reports", "study-related written responses",
  "everyday written communication") — accurate and non-sensitive, with any employer/institution
  name removed unless separately approved:
- Exact original quotation, word for word:
- Approved excerpt, if different from the exact quotation (only usable with explicit approval of
  the final public wording — never a silent grammar cleanup):
- Approved public display name:
- Approved context line for public display:
- Consent-confirmation date and where the private consent record is kept (e.g. "WhatsApp message,
  kept by Aisha outside this repository" — never paste the consent evidence itself into this file
  or into `content/testimonials.ts`):
- May an employer/client/institution name appear: yes / no:
- Does the quote make a grade, admission, promotion, publication or employment-outcome claim:
  yes / no — if yes, what specific evidence supports it:
- Evidence supporting any other specific outcome named in the quote:
- Does the record include a learner writing sample (original text, revised text, or both):
  yes / no:
- If a writing sample exists: who authored each version (learner or Aisha), whether the work was
  assessed or confidential, and whether names, organisations, assignments and other identifiers
  have been removed:
- Permission to publish the original writing sample: yes / no — separately from permission to
  publish any revised version:
- Permission to publish the revised writing sample and any annotations: yes / no:
- Whether search-engine indexing of any published sample is permitted: yes / no:
- The exact claim the sample supports (e.g. "shows a learner-led revision", never an inferred grade
  or admissions outcome unless separately evidenced):
- Expiry/review date, if the context could become stale (e.g. a role, employer or study stage that
  may change):
- Withdrawal/removal process: how the person can ask for the entry to be removed, and who is
  responsible for actioning that request.

Do not add a real learner writing sample to the public site without every field above completed —
see `docs/english-writing-offer-verification.md`'s "Writing-sample and privacy safeguards" guidance
for the complete prerequisite list. The Step 4 illustrative feedback demonstration on
`/courses/english-writing` (`content/englishWriting.ts`'s `demonstration`;
`components/english-writing/EnglishWritingFeedbackDemonstration.tsx`) is recorded here as
**teaching demonstration — not learner evidence**: it is original website-created copy with no real
learner, company, report or confidential detail, it demonstrates teaching judgement only, and it
must never be added to `content/testimonials.ts` or treated as a consented outcome record.

## About-page-specific intake fields (About Step 5)

`/about`'s conditional evidence component (`components/about/AboutVerifiedEvidence.tsx`) renders a
testimonial only when it passes every check below, in addition to the general fields above. Having
`consentConfirmed: true` alone is **not** sufficient for About — About featuring must be separately
and explicitly approved, and is never inferred from `featured` (homepage), `courseSlug`, or
audience type. Collect these fields for any record before setting `aboutFeatured: true`:

- Suitable for About-page trust evidence: yes/no
- About-page feature approved by person/guardian: yes/no
- `aboutFeatured` approved: yes/no
- What the quote demonstrates about Aisha's teaching:
- Exact programme/service context:
- Does the quote include a result/outcome: yes/no
- Evidence supporting outcome:
- Does it imply causation: yes/no
- Approved display name:
- Approved context line:
- Minor status/guardian permission:
- Employer/institution/client naming permission:
- Image/media permission separate from quote permission:
- Exact public quote:
- Consent record location outside repository:
- Consent confirmation date:
- Review/expiry date:
- Withdrawal/removal process:
- Final reviewer/date:

Do not paste real consent messages, private contact data or unredacted evidence into this file or
into `content/testimonials.ts`.

An item is not suitable for About merely because it is positive — it should primarily help a
visitor understand Aisha as a teacher (clarity of explanation, organisation, usefulness of
guidance, respectfulness/professionalism, relevance of practice, or how a learner/parent
experienced communication with her). Avoid curating for About a quote that focuses only on a bare
score/grade with no teaching context, an unrelated administrative interaction, a programme no
longer offered, a minor's identity or a sensitive learning difficulty, a company/client name
without publication permission, a personal friendship/family relationship, or a generic "best
teacher" statement with no provenance.

A record scoped to one programme's own evidence section (e.g. an IELTS-specific record used by
`components/ielts/IELTSVerifiedEvidence.tsx`) is not automatically eligible for About just because
it is consent-confirmed — About eligibility is a separate, explicit decision, and vice versa: an
About-featured record does not automatically become eligible for a programme-specific section
merely because it names that programme.

For a learner under the relevant age of consent, the learner's own message is never sufficient
permission — parent/guardian consent must be separately obtained and recorded, identity details
minimised (prefer a context such as "Parent of an O Level learner" when appropriate and approved),
and no school name, exact class, location, timetable or other identifying combination, or the
child's own photograph, published by default.

## Privacy reminders

- Remove student numbers, candidate numbers, email addresses, phone numbers and school
  identifiers from any screenshots before they are shared for this purpose.
- For minors, obtain appropriate parent or guardian permission — not the student's alone.
- Keep the original permission record (e.g. a WhatsApp message, email, or signed form) outside
  the public website repository where possible. Do not paste real consent evidence into this
  file or into `content/testimonials.ts`.

## Moving an approved entry into the codebase

Once an entry above has permission confirmed, add it to the `testimonials` array in
`content/testimonials.ts` using the `Testimonial` type defined there:

- `id` — any stable, unique string (e.g. `"2026-01-ielts-1"`).
- `displayName` — exactly the approved display format (full name, first name + initial, "Parent
  of an O Level student", etc.) — never a fuller identity than what was approved.
- `audience` — `"student"`, `"parent"`, or `"professional"`.
- `context` — a short phrase, e.g. `"Parent of an O Level student"` or `"IELTS learner, Lahore"`.
- `courseSlug` — optional; matches a slug in `content/courses.ts` when tied to one programme.
- `quote` — the original approved statement, unedited in meaning.
- `outcome` — optional; only include if it is a specific, evidence-backed result.
- `evidenceType` — one of `"written-feedback"`, `"score-report"`, `"grade-result"`,
  `"parent-feedback"`, `"professional-feedback"`.
- `image` — optional filename only, placed in `public/images/testimonials/` (never a stock photo
  or generated avatar).
- `featured` — set `true` to include it in the homepage's curated selection (max 3 shown there).
- `aboutFeatured` — set `true` only once the About-page-specific intake fields above are answered
  and "About-page feature approved by person/guardian" is "yes" — independent of `featured`; set
  neither, either, or both depending on what was actually approved. Included in the `/about`
  page's own curated selection (max 3 shown there, see `content/about.ts`'s
  `ABOUT_TESTIMONIAL_LIMIT`).
- `consentConfirmed` — set `true` only once the "Permission to publish on website" answer above
  is "yes" and it's on record.

Once added, update `docs/about-evidence-verification.md`'s eligible-entry table if `aboutFeatured`
was set — that document is the current-state verification record for `/about`'s evidence section
specifically.
