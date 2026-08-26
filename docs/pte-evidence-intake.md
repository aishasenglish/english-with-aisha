# PTE evidence intake

Private checklist for Aisha's use when considering a genuine PTE Academic learner story or result
for publication on `/courses/pte` (`components/pte/PTEVerifiedEvidence.tsx`). **This document is
not imported into the website.** It supplements the general `docs/testimonial-content-intake.md`
process with the extra fields a PTE record needs — score history, exact PTE test version, and the
official-vs-practice-vs-third-party distinction — that don't apply to every programme.

Never commit private consent conversations, unredacted score reports, identity documents or
account screenshots to this public repository. Keep the original permission record (WhatsApp
message, email, signed form) outside the repository.

## PTE evidence entry

- Approved public display name:
- Learner age category: adult / minor
- Parent or guardian permission recorded (required if minor): yes / no
- Exact original quote (unedited in meaning):
- Exact programme/test context: PTE Academic or PTE Academic UKVI:
- Official test date or approved general timeframe, if approved for publication: yes / no —
  value:
- Previous overall and communicative-skill scores, only if evidenced and approved: yes / no —
  values:
- Later overall and communicative-skill scores, only if evidenced and approved: yes / no —
  values:
- For each score claimed, was it from: an official PTE test / an official Pearson scored
  practice test / a third-party platform estimate / tutor-created practice? (record which, for
  every score mentioned):
- Evidence type and secure storage location (e.g. "score report PDF, kept in [private
  location]"):
- Permission to publish the quote: yes / no
- Permission to publish the score claim: yes / no
- Permission to publish a redacted screenshot: yes / no
- Approved crop and redaction reviewed by: _____ on [date] — see redaction checklist below
- Date consent was recorded:
- Can consent be withdrawn, and what is the removal process: (state it, even if the answer is a
  simple "yes — remove from `content/testimonials.ts` and confirm to the learner")

_Copy this block for each new PTE evidence entry. Do not fill in a field with a guess — leave it
blank and follow up rather than publishing an assumed answer._

## Screenshot redaction checklist

Before any result or feedback screenshot is added to `public/`, confirm each of the following has
been removed or cropped from the **source image** (not hidden with CSS blur or an overlay —
redact the file itself):

- [ ] Full legal name, unless explicitly approved for display
- [ ] PTE Test Taker ID
- [ ] Score Report Code
- [ ] Registration or appointment numbers
- [ ] Date of birth
- [ ] Email address
- [ ] Telephone number
- [ ] Home address
- [ ] Identity-document details
- [ ] Login details
- [ ] QR codes and barcodes
- [ ] Institution-recipient information, unless specifically approved
- [ ] Other learners' names or messages visible in the same screenshot
- [ ] Notification previews, browser account details and device-account information

Record who reviewed the redaction and when, in the entry above, before the image is added.

## Score claim rules (apply when writing the entry into `content/testimonials.ts`)

- Never infer a score from a testimonial's wording — only record a number that was actually
  supplied and evidenced.
- Never convert a phrase like "I improved a lot" into a numeric outcome.
- Never imply causation the learner did not themselves approve.
- Always distinguish the exact PTE test version (PTE Academic vs. PTE Academic UKVI).
- Always distinguish an official PTE test result from an official Pearson scored practice test,
  a third-party platform estimate, or tutor-created practice — never label a tutor estimate as an
  official PTE score.
- If showing a before/after score, keep the relevant dates and supporting evidence in this
  private document even if the public `outcome` field is more general.
- Do not cherry-pick one communicative-skill score in a way that implies a complete overall
  result if the full picture wasn't approved for publication.
- Do not calculate or publish an average-improvement statistic, pass rate or success percentage
  from a small, selected or incomplete sample — `components/pte/PTEVerifiedEvidence.tsx` renders
  individual entries only, never an aggregate.
- Do not publish visa, admission or professional-registration success as though a PTE score alone
  caused the outcome.

## Moving an approved PTE entry into the codebase

Once every field above is answered and consent is on record, add the entry to the `testimonials`
array in `content/testimonials.ts` using its existing `Testimonial` type — set `courseSlug: "pte"`
so `PTEVerifiedEvidence` picks it up, and `consentConfirmed: true` only once publish permission is
confirmed. See `docs/testimonial-content-intake.md` for the field-by-field mapping shared with
every other programme's testimonials.
