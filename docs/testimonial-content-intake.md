# Testimonial content intake

This document is for Aisha's use when collecting and approving student or parent
testimonials for publication. **It is not imported into the website** — it is a private
planning file for deciding what goes into `content/testimonials.ts`.

No testimonials currently exist in the codebase. The homepage social-proof section and the
`/success-stories` page are both built to stay truthfully empty until entries are added here
first, reviewed, and then entered into `content/testimonials.ts` with `consentConfirmed: true`.

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
- `consentConfirmed` — set `true` only once the "Permission to publish on website" answer above
  is "yes" and it's on record.
