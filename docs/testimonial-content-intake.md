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
