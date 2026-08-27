# TOEFL evidence intake

Private checklist for Aisha's use when considering a genuine TOEFL learner story or result for
publication on `/courses/toefl` (`components/toefl/TOEFLVerifiedEvidence.tsx`). **This document is
not imported into the website.** It supplements the general `docs/testimonial-content-intake.md`
process with the extra fields a TOEFL record needs — the exact test product, score-scale/
transition context, and the official-vs-practice-vs-tutor-created distinction — that don't apply
to every programme.

Never commit private consent conversations, unredacted score reports, identity documents or
account screenshots to this public repository. Keep the original permission record (WhatsApp
message, email, signed form) outside the repository.

## TOEFL evidence entry

- Approved public display name:
- Learner age category: adult / minor
- Parent or guardian permission recorded (required if minor): yes / no
- Exact original quote (unedited in meaning):
- Exact programme/test context: TOEFL iBT / TOEFL iBT Home Edition / TOEFL Essentials / TOEFL ITP
  (confirm only the test actually taught is named — do not publish TOEFL Essentials or TOEFL ITP
  evidence on this TOEFL iBT page):
- Official test date or approved general timeframe, if approved for publication: yes / no —
  value:
- Applicable score scale and reporting context (current 1–6 / transitional comparable 0–120 /
  pre-21-January-2026 0–120 — record which, since a pre-transition score is not directly
  comparable to a current one):
- Previous overall and section scores, only if evidenced and approved: yes / no — values:
- Later overall and section scores, only if evidenced and approved: yes / no — values:
- For each score claimed, was it from: an official TOEFL iBT test / an official ETS practice
  product / a third-party platform estimate / tutor-created practice? (record which, for every
  score mentioned):
- Evidence type and secure storage location (e.g. "score report PDF, kept in [private
  location]"):
- Permission to publish the quote: yes / no
- Permission to publish the score claim: yes / no
- Permission to publish a redacted screenshot: yes / no
- Approved crop and redaction reviewed by: _____ on [date] — see redaction checklist below
- Date consent was recorded:
- Can consent be withdrawn, and what is the removal process: (state it, even if the answer is a
  simple "yes — remove from `content/testimonials.ts` and confirm to the learner")

_Copy this block for each new TOEFL evidence entry. Do not fill in a field with a guess — leave it
blank and follow up rather than publishing an assumed answer._

## Screenshot redaction checklist

Before any result or feedback screenshot is added to `public/`, confirm each of the following has
been removed or cropped from the **source image** (not hidden with CSS blur or an overlay —
redact the file itself):

- [ ] Full legal name, unless explicitly approved for display
- [ ] Appointment, registration or test-taker identifiers
- [ ] Date of birth
- [ ] Email address
- [ ] Telephone number
- [ ] Home address
- [ ] Identity-document details
- [ ] Login details
- [ ] QR codes, barcodes and verification codes
- [ ] Institution-recipient information, unless specifically approved
- [ ] Other learners' names or messages visible in the same screenshot
- [ ] Notification previews, browser account details and device-account information

Record who reviewed the redaction and when, in the entry above, before the image is added.

## Score claim rules (apply when writing the entry into `content/testimonials.ts`)

- Never infer a score from a testimonial's wording — only record a number that was actually
  supplied and evidenced.
- Never convert a phrase like "I improved a lot" into a numeric outcome.
- Never imply causation the learner did not themselves approve — do not present tutoring as the
  sole cause of an admission, scholarship, employment or visa outcome.
- Always distinguish the exact test product: TOEFL iBT vs. TOEFL iBT Home Edition vs. TOEFL
  Essentials vs. TOEFL ITP.
- Always record the test date when it's necessary to explain whether a score used the current
  (post-21-January-2026, 1–6 scale) or earlier (0–120 scale) reporting context — do not use an
  unofficial scale conversion to manufacture a before/after comparison across the transition.
- Always distinguish an official TOEFL iBT result from an official ETS practice product, a
  third-party platform estimate, or tutor-created practice — never label a tutor estimate as an
  official TOEFL score.
- If showing a before/after score, keep the relevant dates and supporting evidence in this private
  document even if the public `outcome` field is more general.
- Do not cherry-pick one section score in a way that implies a complete overall result if the full
  picture wasn't approved for publication.
- Do not calculate or publish an average-improvement statistic, pass rate or success percentage
  from a small, selected or incomplete sample — `components/toefl/TOEFLVerifiedEvidence.tsx`
  renders individual entries only, never an aggregate.
- Do not publish an institution's admission decision as though a TOEFL score alone caused it.
- Remove a public record promptly if consent is withdrawn.

## Moving an approved TOEFL entry into the codebase

Once every field above is answered and consent is on record, add the entry to the `testimonials`
array in `content/testimonials.ts` using its existing `Testimonial` type — set
`courseSlug: "toefl"` so `TOEFLVerifiedEvidence` picks it up, and `consentConfirmed: true` only
once publish permission is confirmed. See `docs/testimonial-content-intake.md` for the
field-by-field mapping shared with every other programme's testimonials.
