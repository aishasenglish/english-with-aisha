# About-page credentials verification

Internal record of what the `/about` page (and every other surface that reuses `content/site.ts`'s
credential fields) can and cannot claim publicly. This is a maintenance document — nothing here is
rendered on the public page, and nothing here is legal or professional advice.

**Last reviewed:** About Step 1 (29 August 2026).

> No authority claim moves from this document into public copy until its evidence/source and
> approved wording are recorded here first. Existing publication in source code is not treated as
> verification — a claim already appearing in a component before this step does not make it safe.

## Verification record

| Claim | Exact public wording | Status | Source / evidence | Date checked | Approved page locations | Notes / limitations |
|---|---|---|---|---|---|---|
| Qualification | "MPhil in English Literature" | Owner confirmed | Owner-supplied fact, `content/site.ts`'s `qualification` | 2026-08-29 | `/about`, homepage `AboutAisha`, homepage `Hero`, sitewide anywhere `site.qualification`/`site.credentials`/`site.credentialsList` is read | Do not expand to "MA English", "MA in English Literature", "Master's in English" or a doctorate. |
| Professional role | "College Lecturer" | Owner confirmed | Owner-supplied fact, `content/site.ts`'s `professionalRole` | 2026-08-29 | `/about`, homepage `AboutAisha`, homepage `Hero`, sitewide anywhere `site.professionalRole`/`site.credentials`/`site.credentialsList` is read | Do not expand to "University Lecturer" or "Government College Lecturer" unless Aisha separately confirms that exact public wording everywhere. |
| Online delivery | "Online English tutoring" / "teaches online" | Owner confirmed from website purpose | The site's own stated business model | 2026-08-29 | `/about` authority strip and introduction | Does not confirm live-vs-asynchronous, platform, group-vs-one-to-one, or recording availability — those remain programme-page-specific and separately unresolved per each program's own offer-verification document. |
| Location | "Lahore, Pakistan" | Present in canonical site record; confirm if still desired publicly | `content/site.ts`'s `city` | 2026-08-29 | `/about` authority strip only | Not used as the page's main value proposition, per this step's instruction. Remove if Aisha ever asks for it to stop being public. |
| Public email | "aishasenglish@gmail.com" | Owner confirmed | `content/site.ts`'s `email` | 2026-08-29 | Every `mailto:` link sitewide | Unchanged by this step. |
| IDP-Certified IELTS Trainer | — | Needs evidence/owner confirmation | Only prior repository source-code usage — not independent evidence | 2026-08-29 | **Do not publish** in About-page authority blocks, or anywhere else, until confirmed | Removed from `content/site.ts`'s `credentials`/`credentialsList` this step (was previously combined with the two verified facts in one shared string/array, causing sitewide accidental publication via homepage `Hero.tsx`'s credential ribbon and `components/AboutAisha.tsx`'s credential-card grid). Also removed from `AboutAisha.tsx`'s intro paragraph, which previously stated "an IDP-certified IELTS trainer" directly. |
| Corporate Trainer | — | Needs scope/evidence/owner confirmation | Only prior repository source-code usage — not independent evidence | 2026-08-29 | **Do not publish** as a credential yet | Same removal as above — no scope, client type, or format has ever been recorded for this claim anywhere in the repository. |
| Years of experience | — | Needs an exact verified start point | None | 2026-08-29 | **Do not publish** a number or "for years" | The previous About page said "For years I've taught..." with no recorded start date — removed. |
| Student/learner totals | — | No verified record | None | 2026-08-29 | **Do not publish** | No count of any kind appears anywhere in this step's new copy. |
| Examiner/exam-board status | — | No verified record | None | 2026-08-29 | **Do not publish** | Not implied anywhere ("examiner", "examiner-trained" avoided). |
| Ratings, awards, affiliations | — | No verified record | None | 2026-08-29 | **Do not publish** | Not implied anywhere. |

## Central credential cleanup performed this step

`content/site.ts`'s `credentials` (a single display string) and `credentialsList` (the same facts
as an array) previously read:

> MPhil in English Literature • College Lecturer • IDP-Certified IELTS Trainer • Corporate Trainer

Both are now:

> MPhil in English Literature • College Lecturer

This is the single shared source every credential display sitewide reads from, so the fix applies
everywhere at once rather than only on `/about`:

- `components/Hero.tsx` (homepage) — its credential ribbon now shows only the two verified facts,
  reusing the same `site.credentialsList.map(...)` it already had; no component code change was
  needed there.
- `components/AboutAisha.tsx` (homepage About preview) — its `CREDENTIALS` grid previously read
  `site.credentialsList[2]`/`[3]` positionally for the IDP/Corporate cards; both cards were removed
  entirely (not replaced with placeholder content) since no verified third or fourth credential
  currently exists. Its intro paragraph also previously stated "an IDP-certified IELTS trainer"
  directly in prose — removed — and referenced "live online coaching" (a universal delivery claim
  not verified for every current programme) and "clear, practical skills" as a guaranteed outcome
  (explicitly flagged as an example to avoid in the About Step 1 prompt) — both reworded to
  confirmation-safe language.
- `app/about/page.tsx` — rebuilt entirely this step; no longer reads `site.credentials` as a single
  combined string at all (see the new `content/about.ts`).

No other component in the repository was found (via `grep`) to read `site.credentials` or
`site.credentialsList`.

## Portrait verification

`public/images/aisha-about.jpg` was documented in `public/images/README.md` as an 800×1000 (4:5)
portrait. Direct inspection with `sharp` before implementation found the actual file measures
**1086×1448px (3:4)**, not 4:5. `public/images/README.md` has been corrected to record the true
dimensions and ratio, and `app/about`'s hero reserves a 3:4 aspect-ratio container (not 4:5) so the
portrait is never stretched or cropped to a wrong assumed ratio. No new image was generated — the
existing genuine portrait was used as-is at the time.

**Update (hero image swap):** `content/about.ts`'s `hero.portrait.src` now points to
`public/images/about-aisha.jpeg` instead, per a direct request to update the hero image next to
the "Meet Aisha, your online English teacher" heading. Direct inspection with `sharp` found this
file measures **490×468px** (near-square, ~1.05:1) — not 3:4. Per the request, the hero's existing
`aspect-[3/4]`/`object-cover` container was kept exactly as-is rather than resized, so the new
image is cropped by `object-cover` to fill that taller frame; nothing is stretched. `aisha-about.jpg`
was left in place, unused, rather than deleted, since removing a file wasn't requested. Both
`public/images/README.md` and `content/about.ts` were updated to record the new file, its actual
dimensions, and that this crop behaviour is expected. Identity/alt text (`Aisha, English teacher
and College Lecturer`) is unchanged — the new photo is still of Aisha.

**Correction (over-zoomed crop fixed):** the `aspect-[3/4]` container kept above was flagged as
displaying "too large and overly zoomed-in" once live — correctly so: covering a 3:4 frame (ratio
0.75) with a 1.047-ratio source forced `object-cover` to scale the image up ~1.3x just to satisfy
the taller dimension, cropping roughly 90px off each side at typical rendered sizes and reading as
a tight, zoomed-in close-up rather than a natural portrait crop. `components/about/AboutHero.tsx`
now uses `aspect-square` instead, which matches the 490×468 source almost exactly (only ~2% is
trimmed per side), plus `object-top` so the framing favours the face if any crop remains, plus a
`md:max-w-sm` cap (was `md:max-w-none`) so the image no longer scales up to fill the entire desktop
grid column. Verified visually via Playwright screenshots at 1280×900 and 390×844 after the fix.

1. Is "IDP-Certified IELTS Trainer" a real, current certification? If so, what evidence (a
   certificate, IDP registration reference, or equivalent) can be recorded here before it is
   republished anywhere on the site?
2. What is the actual scope of "Corporate Trainer" — which organisations, what format, and is it a
   currently offered service or a past one?
3. Is there an exact, confirmed start date for Aisha's English teaching that would support a
   specific, non-invented years-of-experience figure?
4. Should "Lahore, Pakistan" remain a public fact on `/about`, or should location be omitted?

Until these are answered, `/about` and every shared credential surface show only the two owner-
confirmed facts — MPhil in English Literature and College Lecturer — plus the online-delivery and
location facts already covered above, never an invented duration, count, rating, award or
examiner status.
