# About-page credentials verification

Internal record of what the `/about` page (and every other surface that reuses `content/site.ts`'s
credential fields) can and cannot claim publicly. This is a maintenance document — nothing here is
rendered on the public page, and nothing here is legal or professional advice.

**Last reviewed:** About Step 2 (29 August 2026).

> No authority claim moves from this document into public copy until its evidence/source and
> approved wording are recorded here first. Existing publication in source code is not treated as
> verification — a claim already appearing in a component before this step does not make it safe.

See `docs/about-credential-evidence-intake.md` for the template a future credential must fully
satisfy — evidence, approval and privacy/safety review — before it can appear in `content/about.ts`'s
`publicCredentials` array and be published here.

## Credential hierarchy (About Step 2)

`content/about.ts` now models every public credential as one typed `PublicCredential` record
(`category`, `label`, `context`, `evidenceStatus`, plus optional `programmeScope`/
`verificationUrl`/`issuedBy`/`issuedAt`/`expiresAt`), filtered through `isPublishableCredential()`
before anything renders. This replaces Step 1's flat `authorityFacts` pill row with the four-
category hierarchy the About Step 2 prompt requires (academic qualification, current professional
role, additional training/certification, professional training/client work) enforced in code, not
just prose — see `docs/about-credential-evidence-intake.md` for exactly what a future
`additional-training` record must supply before `isPublishableCredential()` will accept it.

`components/about/AboutCredentials.tsx` (replacing Step 1's `AboutAuthorityStrip.tsx`) renders the
current two publishable records as neutral-labelled cards under the heading "Academic background
and professional role" — no green checkmark, badge or icon implying independent verification;
the category labels ("Academic qualification", "Current professional role") carry the meaning
through text alone. "Online English tutoring" and Aisha's location are kept as a separate plain-
prose line below the cards rather than a third card, since they're operational/location facts, not
credentials — this also avoids ever flattening a real credential and an operational fact into one
undifferentiated badge row. `components/AboutAisha.tsx` (homepage About preview) now reads the
exact same `publicCredentials` array — not a second, separately maintained label/copy list — so
the two pages can never drift into contradictory wording again.

## Verification record

| Claim | Exact public wording | Status | Source / evidence | Date checked | Approved page locations | Notes / limitations |
|---|---|---|---|---|---|---|
| Qualification | "MPhil in English Literature" | Owner confirmed | Owner-supplied fact, `content/site.ts`'s `qualification` | 2026-08-29 | `/about` (`AboutCredentials`, hero), homepage `AboutAisha`, homepage `Hero`, every programme authority strip, sitewide anywhere `site.qualification`/`site.credentials`/`site.credentialsList` is read | Do not expand to "MA English", "MA in English Literature", "Master's in English" or a doctorate. Do not infer a certification to assess CEFR levels, IELTS/Pearson/ETS/Cambridge/Edexcel accreditation, examiner status, or guaranteed teaching effectiveness. |
| Professional role | "College Lecturer" | Owner confirmed | Owner-supplied fact, `content/site.ts`'s `professionalRole` | 2026-08-29 | `/about` (`AboutCredentials`, hero), homepage `AboutAisha`, homepage `Hero`, every programme authority strip, sitewide anywhere `site.professionalRole`/`site.credentials`/`site.credentialsList` is read | Do not expand to "University Lecturer" or "Government College Lecturer" unless Aisha separately confirms that exact public wording everywhere. Do not publish an institution name, government status, employment dates, permanent/tenured status, or unconfirmed subjects/departments/duties. |
| Online delivery | "Online English tutoring" / "teaches online" | Owner confirmed from website purpose | The site's own stated business model | 2026-08-29 | `/about`'s `AboutCredentials` (plain prose, not a credential card) and introduction | Does not confirm live-vs-asynchronous, platform, group-vs-one-to-one, or recording availability — those remain programme-page-specific and separately unresolved per each programme's own offer-verification document. |
| Location | "Lahore, Pakistan" | Present in canonical site record; confirm if still desired publicly | `content/site.ts`'s `city` | 2026-08-29 | `/about`'s `AboutCredentials` (plain prose, not a credential card) only | Not used as the page's main value proposition, per the Step 1 instruction. Remove if Aisha ever asks for it to stop being public. |
| Public email | "aishasenglish@gmail.com" | Owner confirmed | `content/site.ts`'s `email` | 2026-08-29 | Every `mailto:` link sitewide | Unchanged by this step. |
| IDP-Certified IELTS Trainer | — | Needs evidence/owner confirmation | Only prior repository source-code usage — not independent evidence | 2026-08-29 | **Do not publish** anywhere until confirmed | Removed from `content/site.ts`'s `credentials`/`credentialsList` in Step 1. **About Step 2 finding:** `components/ielts/IELTSAuthorityStrip.tsx` was *still* independently publishing this exact claim on the live IELTS page via `content/ielts.ts`'s `ieltsCredential` constant — Step 1's shared-source fix never touched it, since each programme authority strip builds its own local `facts` array. Removed from the IELTS strip this step; see `docs/ielts-offer-verification.md`'s "Credential correction (About Step 2)" section. If ever evidenced, must stay scoped to IELTS-relevant context only — never presented as evidence for PTE, TOEFL, Spoken English, English Writing or school-English. |
| Corporate Trainer | — | Needs scope/evidence/owner confirmation | Only prior repository source-code usage — not independent evidence | 2026-08-29 | **Do not publish** as a credential yet | Same removal as above — no scope, client type, dates or evidence has ever been recorded for this claim anywhere in the repository. Not referenced by any component as of this step. |
| Years of experience | — | Needs an exact verified start point | None | 2026-08-29 | **Do not publish** a number, "for years", "many years", "over a decade", or "experienced" plus a number | The previous About page said "For years I've taught..." with no recorded start date — removed in Step 1. `app/courses/o-a-level-english/page.tsx`'s `YEARS_EXPERIENCE = "10+"` is a separate, pre-existing, already-flagged defect (see `docs/launch-verification.md`'s "Lower priority" section) — explicitly out of scope for this About-page step per its own boundary ("Do not modify the O/A Level subdomain"); left untouched. |
| Student/learner totals | — | No verified record | None | 2026-08-29 | **Do not publish** | No count of any kind appears anywhere in this step's copy. |
| Examiner/exam-board status | — | No verified record | None | 2026-08-29 | **Do not publish** | Not implied anywhere on `/about`, the homepage preview, or any programme authority strip ("examiner", "rater", "official trainer", "certified expert" all absent from every audited public surface). |
| Ratings, awards, affiliations | — | No verified record | None | 2026-08-29 | **Do not publish** | Not implied anywhere. |

## Central credential cleanup (About Step 1, extended in About Step 2)

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

**About Step 2 finding and fix:** the Step 1 cleanup above only ever touched the *shared* source
(`site.credentials`/`site.credentialsList`). Each programme page's own authority strip
(`components/{ielts,pte,toefl,spoken-english,english-writing}/*AuthorityStrip.tsx`) builds its own
local `facts` array instead of reading `site.credentialsList` directly, so the Step 1 fix did not
reach them. Auditing all five found that `components/ielts/IELTSAuthorityStrip.tsx` alone still
independently imported `content/ielts.ts`'s `ieltsCredential` ("IDP-Certified IELTS Trainer") and
was rendering it live on `/courses/ielts` — the exact unverified claim Step 1 removed everywhere
else. Fixed by dropping it from that strip's `facts` array; PTE, TOEFL, Spoken English and English
Writing's own strips were already clean (each already had its own comment explicitly excluding the
IDP claim as IELTS-specific). See `docs/ielts-offer-verification.md`'s "Credential correction
(About Step 2)" section for the full record.

`components/AboutAisha.tsx`'s `CREDENTIALS` constant was also changed this step from its own
separately maintained `{title, copy}` array to `publicCredentials.filter(isPublishableCredential)`
from `content/about.ts` — the identical typed records `/about`'s own `AboutCredentials.tsx` renders
— so the homepage preview and the full About page read one shared source and can never again drift
into different wording for the same two facts.

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

## Open questions for Aisha

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

## Colour-contrast fix found during the About Step 2 axe-core audit (unrelated to credentials)

An `axe-core` pass against `/about` found the same recurring `text-teal`-on-tinted-surface failure
already fixed elsewhere in this codebase (PTE/TOEFL Step 12, IELTS coaching-process, flagged for
IELTS's own equivalent): `components/about/AboutCredentials.tsx`'s two category labels
("Academic qualification", "Current professional role" — `text-teal` on `bg-ivory`) measured
**4.41:1**, short of the 4.5:1 minimum for 12px text. Fixed the same way as every prior instance —
changed to `text-amber-dark`. `axe-core` reported **zero violations** on `/about` after the fix,
with all `wcag2a`/`wcag2aa`/`wcag22aa`-tagged rules passing.

## Files affected (About Step 2)

- `content/about.ts` — new `PublicCredentialCategory`/`PublicCredential` types,
  `CREDENTIAL_CATEGORY_LABEL`, `isSafeCredentialVerificationUrl()`, `isPublishableCredential()`,
  the `publicCredentials` array, and `aboutContent.credentialsSection` (replacing
  `aboutContent.authorityFacts`).
- `components/about/AboutAuthorityStrip.tsx` — deleted.
- `components/about/AboutCredentials.tsx` — new; renders the category hierarchy.
- `app/about/page.tsx` — imports `AboutCredentials` instead of `AboutAuthorityStrip`, same
  position in the page.
- `components/AboutAisha.tsx` (homepage About preview) — `CREDENTIALS` now derived from
  `content/about.ts`'s `publicCredentials` instead of a separately maintained array.
- `components/ielts/IELTSAuthorityStrip.tsx` — removed the unverified "IDP-Certified IELTS
  Trainer" claim it was still independently rendering.
- `content/ielts.ts` — `ieltsCredential` constant's comment updated to record why it's currently
  unused.
- `docs/ielts-offer-verification.md` — new "Credential correction (About Step 2)" section.
- `docs/about-credential-evidence-intake.md` — new evidence/privacy intake template.
- `docs/about-credentials-verification.md` — this file.
