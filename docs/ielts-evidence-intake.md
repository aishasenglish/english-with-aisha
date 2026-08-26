# IELTS evidence intake

Private checklist for Aisha's use when considering a genuine IELTS learner story or result for
publication on `/courses/ielts` (`components/ielts/IELTSVerifiedEvidence.tsx`). **This document
is not imported into the website.** It supplements the general
`docs/testimonial-content-intake.md` process with the extra fields an IELTS record needs — score
history, test version and official-vs-practice distinction — that don't apply to every programme.

Never commit private consent conversations, unredacted score reports or identity documents to
this public repository. Keep the original permission record (WhatsApp message, email, signed
form) outside the repository.

## IELTS evidence entry

- Approved public display name:
- Learner age category: adult / minor
- Parent or guardian permission recorded (required if minor): yes / no
- Exact original quote (unedited in meaning):
- Academic or General Training context, if approved for publication: yes / no — which:
- Test date or general timeframe, if approved for publication: yes / no — value:
- Previous overall and component scores, only if evidenced and approved: yes / no — values:
- Later overall and component scores, only if evidenced and approved: yes / no — values:
- Was the later result an official IELTS test or an internal practice result? (this distinction
  must be preserved — never present a practice score as an official result):
- Evidence type and storage location (e.g. "score report PDF, kept in [private location]"):
- Permission to publish the quote: yes / no
- Permission to publish the outcome/score: yes / no
- Permission to publish a redacted screenshot: yes / no
- Approved crop and redaction reviewed by: _____ on [date] — see redaction checklist below
- Date consent was recorded:
- Can consent be withdrawn, and what is the removal process: (state it, even if the answer is a
  simple "yes — remove from `content/testimonials.ts` and confirm to the learner")

_Copy this block for each new IELTS evidence entry. Do not fill in a field with a guess — leave
it blank and follow up rather than publishing an assumed answer._

## Screenshot redaction checklist

Before any result or feedback screenshot is added to `public/`, confirm each of the following has
been removed or cropped from the **source image** (not hidden with CSS blur or an overlay —
redact the file itself):

- [ ] Full legal names, unless explicitly approved for display
- [ ] Candidate and registration numbers
- [ ] Date of birth
- [ ] Email address
- [ ] Telephone number
- [ ] Home address
- [ ] Identity-document information
- [ ] Login details, QR codes and barcodes
- [ ] Test-report-form numbers
- [ ] School, employer or institution details, unless specifically approved
- [ ] Other learners' names or messages visible in the same screenshot
- [ ] Notification previews and device/account details

Record who reviewed the redaction and when, in the entry above, before the image is added.

## Score claim rules (apply when writing the entry into `content/testimonials.ts`)

- Never infer a score from a testimonial's wording — only record a number that was actually
  supplied and evidenced.
- Never convert a phrase like "improved a lot" into a numeric outcome.
- Never imply causation the learner did not themselves state.
- Always distinguish an official IELTS result from an internal practice-test score in the
  `outcome` field's wording.
- If showing a before/after score, keep the relevant dates or a truthful timeframe in this
  private document even if the public `outcome` field is more general.
- Do not publish selected component scores in a way that implies a complete overall result if the
  full picture wasn't approved for publication.
- Do not calculate or publish an average-improvement statistic from a small, non-representative
  sample — `components/ielts/IELTSVerifiedEvidence.tsx` renders individual entries only, never an
  aggregate.

## Moving an approved IELTS entry into the codebase

Once every field above is answered and consent is on record, add the entry to the `testimonials`
array in `content/testimonials.ts` using its existing `Testimonial` type — set `courseSlug:
"ielts"` so `IELTSVerifiedEvidence` picks it up, and `consentConfirmed: true` only once publish
permission is confirmed. See `docs/testimonial-content-intake.md` for the field-by-field mapping
shared with every other programme's testimonials.
