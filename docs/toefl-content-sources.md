# TOEFL content sources

Official sources backing the factual claims in the TOEFL hero, requirement-qualifier,
score-requirement and four-skill curriculum sections (`content/toefl.ts`,
`components/toefl/TOEFLFit.tsx`, `TOEFLScoreProfile.tsx`, `TOEFLTaskCurriculum.tsx`). This is a
maintenance record, not something imported into the website — do not paste full official task
instructions, sample prompts or examiner comments here or into the site itself.

**Last checked:** 27 August 2026 (Steps 1, 2, 3, 4, 8 and 10).

**Warning:** do not use old cached TOEFL blogs, third-party "prediction file" sites, pre-2026
coaching material or TOEFL Essentials/TOEFL ITP resources as a source for TOEFL iBT content. ETS's
own current pages are the only authority this page relies on.

## Sources and what they support

### 1. Current TOEFL iBT content and structure
`https://www.ets.org/toefl/test-takers/ibt/about/content.html`

Supports: the current four sections (Reading, Listening, Writing, Speaking) and their current task
families (see the per-skill sources 2–5 below for the dedicated task-type page behind each).

Also confirms the test as a whole adapts ("As the test adapts, test time and items may vary"), but
does **not** specify which individual section(s) are adaptive — see "Facts deliberately omitted"
below.

Used by: `content/toefl.ts`'s `curriculum.skills[].taskFamilies` (task-family names only; no item
counts, timing or adaptive-routing detail is published on the page).

### 2. Current Reading task types (TOEFL Step 2)
`https://www.ets.org/toefl/test-takers/ibt/about/content/reading.html`

Supports: the three current Reading task types — Complete the Words, Read in Daily Life, Read an
Academic Passage. Does not mention adaptive or multistage design for Reading specifically.

Used by: `content/toefl.ts`'s `curriculum.skills` Reading entry (`taskFamilies`).

### 3. Current Listening task types (TOEFL Step 2)
`https://www.ets.org/toefl/test-takers/ibt/about/content/listening.html`

Supports: the four current Listening task types — Listen and Choose a Response, Listen to a
Conversation, Listen to an Announcement, Listen to an Academic Talk. Does not mention adaptive or
multistage design, and does not state whether audio is played once — see "Facts deliberately
omitted" below (Part E of the implementing prompt: only state audio-plays-once if explicitly
confirmed, so this page deliberately makes no claim about it).

Used by: `content/toefl.ts`'s `curriculum.skills` Listening entry (`taskFamilies`).

### 4. Current Writing task types (TOEFL Step 2)
`https://www.ets.org/toefl/test-takers/ibt/about/content/writing.html`

Supports: the three current Writing task types — Build a Sentence, Write an Email, Write for an
Academic Discussion. States tasks are "concise and focused, helping you manage your time
effectively" but gives no specific word-count or timing figure; does not use the word "linear".

Used by: `content/toefl.ts`'s `curriculum.skills` Writing entry (`taskFamilies`).

### 5. Current Speaking task types (TOEFL Step 2)
`https://www.ets.org/toefl/test-takers/ibt/about/content/speaking.html`

Supports: the two current Speaking task types — Listen and Repeat, Take an Interview. Confirms
responses are recorded ("You will speak into a microphone to record your responses") but gives no
specific preparation-time or response-timing figure.

Used by: `content/toefl.ts`'s `curriculum.skills` Speaking entry (`taskFamilies`).

### 6. Institution-facing content and structure (date-specific format selector)
`https://www.ets.org/toefl/institutions/ibt/about/content-structure.html`

Supports: the same four-section structure and task families as source 1, confirmed for tests taken
on or after 21 January 2026 specifically; confirms a test-taker must attempt at least one item per
section or no scores are reported (not currently used in any public claim).

Used by: cross-checks source 1 for the post-21-January-2026 format.

### 7. TOEFL iBT score scale update
`https://www.ets.org/toefl/institutions/ibt/score-scale-update.html`

Supports: the transition from the 0–120 scale to a new 1–6 scale (half-point increments) for
tests taken on or after 21 January 2026; each of the four sections receives its own 1–6 score; the
overall score is the average of the four section scores, rounded to the nearest half band; during
a two-year transition period after January 2026 (i.e. until January 2028), every score report also
shows a comparable overall score on the 0–120 scale, representing the midpoint of the equivalent
0–120 range; the redesign aims for closer alignment with CEFR.

Used by: `content/toefl.ts`'s `fit.currentFormatNote` and `scoreProfile.observations`
("do-not-convert-yourself") for the 1–6 scale and transitional 0–120 score.

### 8. Understanding your current TOEFL iBT score
`https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html`

Supports: the same 1–6 scale, overall-score-averaging and transitional 0–120 reporting as source
7, from the test-taker-facing page; **rechecked directly for TOEFL Step 2**, confirming: "There
are no passing or failing scores set by the TOEFL Program or ETS" and "Each institution sets its
own score requirements." Linked directly from `content/toefl.ts`'s `fit.currentFormatSourceLink`
as the official source a candidate can read themselves.

Used by: `components/toefl/TOEFLFit.tsx`'s external "Read ETS's current TOEFL iBT score guidance"
link; `content/toefl.ts`'s `scoreProfile.body` and the "no-universal-passing-score" observation
(TOEFL Step 2).

### 9. Current score-report FAQ (TOEFL Step 2)
`https://www.ets.org/toefl/test-takers/ibt/faq/score-reports.html`

Supports: "Institutions set their own TOEFL iBT score requirements, so be sure to check with them
directly about what scores they accept"; and, on institutions updating requirements during the
transition, an illustrative example — "Schools that previously required a total score of 100 may
now require a total score of 5, while scores that required an 80 may ask for a 4. These decisions,
however, will be made by each individual university" — confirming institutions decide their own
new-scale requirement individually (used only to support the general "institutions are updating at
different times" framing, not any specific numeric equivalence, which this page never publishes).

Used by: `content/toefl.ts`'s `scoreProfile.body` and observations (institution-sets-requirement
framing).

### 10. Official explanation of 2026 score displays (TOEFL Step 2)
`https://www.ets.org/toefl/blog/understanding-toefl-ibt-score-displays.html`

Supports: "the four test sections and the total score" now use "a new score scale from 1 to 6, in
increments of 0.5"; "every test taker will receive the updated 1-6 score format (total and section
scores) and a comparable estimate of an overall score on the 0-120 scale on their official TOEFL
iBT score report." **Important for what this page does NOT say**: it describes the 0–120 figure
only as a comparable *overall* score — it does not state that converted/comparable *section*
scores on the 0–120 scale are also provided. `content/toefl.ts`'s "do-not-convert-yourself"
observation is deliberately worded to avoid implying section-level 0–120 conversion exists.

Used by: `content/toefl.ts`'s `scoreProfile.observations` ("do-not-convert-yourself").

### 11. TOEFL Essentials content (product distinction only)
`https://www.ets.org/toefl/test-takers/essentials/content.html`

Supports: TOEFL Essentials is a distinct test — four scored sections (Listening, Reading, Writing,
Speaking) plus an unscored Personal Video Statement, taking approximately 1.5 hours, materially
shorter and structurally different from TOEFL iBT.

Used by: confirms the basis for `content/toefl.ts`'s `fit.productNote` ("TOEFL Essentials and
TOEFL ITP are different assessments") — no TOEFL Essentials task detail is published on this page,
since this route is for TOEFL iBT only.

### 12. TOEFL Essentials score-acceptance guidance
`https://www.ets.org/toefl/test-takers/essentials/scores/score-acceptance.html`

Checked only to confirm the instruction to verify the exact test product with the receiving
institution — not used to promote or describe TOEFL Essentials as a service this page offers.

### 13. January 2026 TOEFL iBT updates page
`https://www.ets.org/toefl/test-takers/ibt/upcoming-updates-jan-2026.html`

Checked, but did not clearly surface format-change detail distinct from other sources at the time
of this check (the page's visible content focused on general TOEFL iBT positioning rather than a
change log). Recorded here so a future reviewer knows this page was checked and found insufficient
for a specific claim, rather than skipped. Recheck this page directly in a browser at the next
content review, since automated extraction may not have reflected its full content.

### 14. Official 2026 research/technical resources (checked, TOEFL Step 2)
`https://www.ets.org/toefl/research/toefl-ibt-updates-2026.html`

Checked specifically for "multistage adaptive" or "linear" task-sequence terminology. The page
discusses task-development research generally but does not use either term — see "Facts
deliberately omitted" below.

### 15. Official 2026 test specification PDF (checked, not usable, TOEFL Step 2)
`https://www.ets.org/content/dam/ets-india/pdfs/toefl/toefl-ibt-test-specifications-2026.pdf`

Fetched for TOEFL Step 2 specifically to confirm or deny "multistage adaptive" (Reading/Listening)
and "linear" (Writing/Speaking) technical terminology. The available tooling could not extract
readable text from this PDF in this session (binary/compressed content, not machine-readable via
the fetch tool used). **This source remains unconfirmed for that specific terminology** — do not
treat its absence from public copy as an oversight; it is a deliberate omission pending a review
environment that can actually read this document. See "Facts deliberately omitted" below.

## Current task families by section (as verified)

- **Reading**: Complete the Words, Read in Daily Life, Read an Academic Passage.
- **Listening**: Listen and Choose a Response, Listen to a Conversation, Listen to an
  Announcement, Listen to an Academic Talk.
- **Writing**: Build a Sentence, Write an Email, Write for an Academic Discussion.
- **Speaking**: Listen and Repeat, Take an Interview.

## Scoring facts used on the page

- ETS sets no universal passing or failing TOEFL iBT score; each institution sets its own
  requirement (source 8/9, quoted directly).
- Tests taken on or after 21 January 2026 report four section scores plus an overall score on a
  1–6 scale (half-point increments).
- The overall score is the average of the four section scores, rounded to the nearest half band.
- For a two-year transition period after January 2026 (until January 2028), every score report
  also shows a comparable *overall* score on the 0–120 scale — never described here as including
  converted section-level 0–120 scores, since source 10 doesn't confirm that.
- Institutions are updating their own published requirements at their own pace during the
  transition (source 9's illustrative example, used only to support this general framing).
- TOEFL iBT, TOEFL Essentials and TOEFL ITP are distinct products; this page addresses TOEFL iBT
  only.

## Adaptive-design facts used publicly

- Reading and Listening are described as using "an adaptive design, so the exact experience can
  vary" (`content/toefl.ts`'s `curriculum.adaptiveNote`) — based on source 1's confirmed but
  non-section-specific "the test adapts" wording.
- No claim is made about Writing or Speaking being "linear" — see below.
- No routing mechanics, upper/lower-module tactics, or claim that a fixed item count applies to
  every candidate are published anywhere on the page.

## Facts deliberately omitted due to uncertainty

- **The specific term "multistage adaptive" for Reading/Listening.** The implementing prompt for
  this step names this as an expected current fact, but none of sources 1–6, 13 or 14 use this
  specific term, and source 15 (the 2026 test specification PDF, the document most likely to
  contain it) could not be read in this session. `content/toefl.ts`'s `curriculum.adaptiveNote`
  therefore says only "adaptive design" (confirmed) rather than "multistage adaptive design"
  (unconfirmed) — recheck source 15 with a working PDF-reading tool before adding the more
  specific term.
- **"Writing and Speaking follow linear task sequences."** This optional sentence (explicitly
  conditional in the implementing prompt — "only if the current official source supports it") is
  omitted entirely. Source 4 (Writing) and source 5 (Speaking) do not use the word "linear", and
  source 15 could not be read. Add this sentence only once a source explicitly confirms it.
- **Which specific section(s) audio plays once for (Listening).** Source 3 does not state this;
  the implementing prompt requires explicit confirmation before publishing such a claim, so no
  audio-playback claim appears anywhere on the page.
- **Exact item counts, section durations and total test length.** Per this step's own instruction
  not to publish exact timings/counts without a later, more thorough sourcing pass, no duration or
  count figure appears on the public page.
- **Whether the transitional 0–120 score includes converted section-level scores.** Source 10
  describes only a comparable *overall* score; `content/toefl.ts` never states or implies that
  section-level 0–120 conversions exist.

## TOEFL Step 3: feedback-category sourcing

`content/toefl.ts`'s `process.feedbackAreas` (rendered by
`components/toefl/TOEFLCoachingProcess.tsx`) describes what tutor review can look at for each
response type. These are grounded in the same per-skill task-type pages already sourced above
(sources 2–5), not a new fetch — Step 3 rechecked that Step 2's task names and page content still
matched before building the feedback categories on top of them:

- **Reading and Listening decisions** — "vocabulary or word form, missing evidence,
  misunderstanding purpose or implied meaning, following a distractor, losing attention, weak note
  selection or time management" is a candidate-readable restatement of the focus areas already
  sourced in `curriculum.skills` (sources 2–3: meaning from context, main ideas, implied meaning,
  purpose), not a new official claim requiring its own citation — no automated error
  classification or adaptive-route analytics is implied.
- **Writing responses** — distinguishes `Build a Sentence` (grammatically complete sentence
  construction) from the two produced-response tasks (`Write an Email`'s purpose/organisation/
  social conventions, `Write for an Academic Discussion`'s position/support), based on source 4's
  three named task types. Deliberately uses "can" and "where relevant" throughout rather than
  asserting one identical scoring guide applies to all three tasks, since source 4 does not
  publish ETS's actual rubric.
- **Speaking responses** — distinguishes `Listen and Repeat` (accurate processing/reproduction,
  intelligibility) from `Take an Interview` (relevance, development, pace, intelligibility,
  vocabulary and grammar), based on source 5's two named task types and its confirmation that
  responses are recorded. No official rating-calculation reproduction is implied; the language
  focuses on intelligibility rather than native-accent imitation, matching the same boundary
  already established in `curriculum.skills`' Speaking focus areas.

No new official ETS scoring rubric, sample response or task prompt was reproduced for this step.

## TOEFL Step 4: feedback-demonstration sourcing

`content/toefl.ts`'s `feedbackDemo` (rendered by `components/toefl/TOEFLFeedbackDemo.tsx`) is an
original, website-created illustrative example — not sourced ETS content. Two facts were
rechecked directly for this step:

- **`Write an Email` is still a current TOEFL iBT Writing task family** — reconfirmed against
  source 4 (`.../about/content/writing.html`) on 27 August 2026, alongside `Build a Sentence` and
  `Write for an Academic Discussion`.
- **Speaking evaluation depends on audio, not just text** — reconfirmed against source 5
  (`.../about/content/speaking.html`), which describes producing speech that is "accurate and
  clearly intelligible" and maintaining "a natural speaking pace" — both audio-dependent
  qualities a written transcript cannot demonstrate. This directly supports
  `feedbackDemo.speakingBoundary`'s statement that a text example cannot demonstrate Speaking
  feedback.

The illustrative scenario, both attempts (first and revised), the tutor diagnosis and the "what
changed" points are entirely original text written for this website. None of it paraphrases,
imitates or reproduces an official ETS question, model answer, scoring rubric or score-report
layout. No official scoring inference is made anywhere in the demonstration — the scoring boundary
statement explicitly disclaims that the comparison represents official TOEFL scoring.

## TOEFL Step 8: FAQ sourcing

`content/toeflFaqs.ts` (rendered by `components/toefl/TOEFLFAQ.tsx`) reuses facts already
established by sources 8, 9 and 11 above — no new claim was introduced, but all three were
re-fetched live for this step to confirm they still hold on the implementation date:

- **Source 8 re-fetched** (`.../ibt/scores/understand-scores.html`) — reconfirmed verbatim: "There
  are no passing or failing scores set by the TOEFL Program or ETS. Each institution sets its own
  score requirements"; "As of January 21, 2026, TOEFL iBT score reports feature a new 1 – 6 scale,
  in half point increments"; "For a two-year transition period after January 2026, you will also
  receive a comparable overall score on the 0 – 120 scale, representing the midpoint of the
  corresponding total range." Directly supports `toeflFaqs`'s `required-score` answer.
- **`.../ibt/about.html` re-fetched** — reconfirmed "It's the only test that measures all four
  academic English skills — reading, listening, speaking and writing," supporting the general
  TOEFL iBT framing in `exact-test`. This page does not itself distinguish TOEFL Essentials/ITP —
  that distinction still relies on source 11, not this page.
- **Source 11 relied upon, not re-fetched this step** (`.../essentials/content.html`) — already
  confirms TOEFL Essentials is a materially shorter, structurally different test, supporting
  `toeflFaqs`'s `exact-test` answer's "TOEFL Essentials and TOEFL ITP are different assessments."
  No TOEFL ITP-specific official page has been fetched in any TOEFL step; the ITP claim rests on
  its well-established identity as a separate, institution-administered assessment distinct from
  TOEFL iBT, consistent with ETS's product naming — recheck directly against an official ETS ITP
  page before making any more specific ITP claim than "different assessment."
- No new fact about feedback, guarantees, preparation time or the current offer required an
  external source — those four answers (`feedback-vs-official-scoring`, `preparation-time`,
  `guarantees-and-shortcuts`, `current-offer`) restate business-boundary language already
  established in TOEFL Steps 3–4 and 5–7 (never an official ETS claim), and the `current-offer`
  answer links to the Step 5–7 anchors (`#toefl-learning-format`, `#toefl-pricing`,
  `#toefl-availability`) rather than duplicating any changing fee, date or schedule value.
- No official task question, score table, rubric or test-interface content was reproduced in any
  FAQ answer.

Google Search Central's structured-data guidance
(`search-gallery`/`faqpage`/`sd-policies`) was reviewed for this step's Part E decision: no
`FAQPage` or `QAPage` JSON-LD was added to `/courses/toefl` — a general tutoring/portfolio page is
not established as eligible for the restricted FAQ rich-result use case, and the visible answers
plus internal links already provide the page's SEO and user value. Recheck this guidance again
before ever adding FAQ structured data to this route.

## Social image and technical SEO (TOEFL Step 10)

`/courses/toefl`'s Open Graph/Twitter image is `public/images/social/toefl-ibt-preparation.jpg`
— a genuine `1200×630` file (declared dimensions match the actual pixels, confirmed via `sharp`
metadata inspection). It was composed from the same site-approved portrait already used for
IELTS/PTE (`public/images/og-image.jpg`, itself `960×1280`, portrait orientation) by resizing it
to fill the canvas height (`473×630`) and centring it on a plain `#F7FAFB` (ivory/
`--color-surface-tint`) background — padding, not cropping or stretching, following the exact
IELTS/PTE Step 10 approach. No AI generation, retouching or identity change was applied; the
photo itself is unmodified other than a resize. No ETS/TOEFL logo, score badge, university crest
or visa graphic was added. File size is 56 KB (reasonable; no visible degradation at the composed
resolution).

This was necessary because the source portrait's aspect ratio (`0.75`, tall) cannot honestly fill
a `1200×630` (`1.9:1`, wide) frame without either cropping off Aisha's face/body or stretching the
image — both of which the implementation prompt explicitly disallows. Padding on a brand-neutral
background was the only option left that keeps the photo genuine and undistorted while still
declaring truthful dimensions.

### Google Search Central guidance rechecked (27 August 2026)

Confirmed via direct review of the current pages before implementing (same guidance already
reviewed for TOEFL Step 8's structured-data decision, re-confirmed here):

- `search-gallery` / `faqpage`: the supported rich-result gallery does not list a general
  `FAQPage` rich result for a tutoring portfolio. No `FAQPage`, `QAPage`, `Offer`,
  `AggregateRating`, `Review` or `CourseInstance` markup was added to `/courses/toefl` as a
  result — only `BreadcrumbList`, per `breadcrumb` structured-data guidance.
- `breadcrumb`: the visible `Home / Courses / TOEFL iBT Preparation` breadcrumb and its matching
  `BreadcrumbList` JSON-LD are built from the exact same `content/toefl.ts` `breadcrumb` array
  (`components/toefl/TOEFLBreadcrumb.tsx` and `app/courses/toefl/page.tsx`), so the visible path
  and structured data can never disagree. Absolute URLs are built from `site.domain`.
- `course`: current course-list structured-data guidance applies to a list context with multiple
  courses; a single TOEFL detail page is not a course-list implementation, so none was added here
  (any future Courses-hub list-markup project is separately scoped, outside this step).
- `title-link` / `snippet`: the absolute title
  (`Online TOEFL iBT Preparation | AISHAS ENGLISH` — brand-name standardisation updated this from
  `| Aisha's English`) and description were written to identify the
  page topic, reflect visible four-skill content, and provide a natural next step without a
  score, price, recording or availability promise — see `app/courses/toefl/page.tsx`'s
  `metadata` export.
- `google-images`: the social image's alt text (`Portrait of Aisha, the teacher behind AISHAS
  ENGLISH`) is factual and derived from canonical `site.founder`/`site.brandName` fields, not
  keyword-stuffed.

### Cross-site corrections made for this step

- `app/page.tsx`'s homepage metadata `description` said "Personalised live online teaching" while
  naming TOEFL alongside IELTS/PTE — removed "live" (synchronous delivery is not owner-confirmed
  for TOEFL; see `docs/toefl-offer-verification.md`), matching the same correction pattern PTE
  Step 8 applied to `content/faqs.ts`'s shared entries.
- `app/courses/page.tsx`'s Courses-hub metadata `description` said "Compare live online English
  support" across every named programme including TOEFL — same correction, "live" removed.
- `components/toefl/TOEFLPricing.tsx`'s dormant (currently unreachable, `status: "enquire"`)
  published-price branch built a WhatsApp message beginning "I'd like to enrol in TOEFL iBT
  coaching..." — rewritten to an enquiry-first "I am interested in TOEFL iBT coaching... Please
  confirm whether this option is currently available and the next steps." Displaying a validated
  price still doesn't create a booking or enrolment transaction. No pricing state or amount was
  changed.
- `content/homeCourses.ts`'s TOEFL override ("Online coaching · Confirm current format and
  support") and `content/coursePresentation.ts`'s TOEFL card copy (short description, "best for",
  focus, CTA label) were re-audited against this step's recommended wording and found already
  equally accurate — left unchanged per the "do not rewrite only for variation" rule.
- `content/courses.ts`'s legacy TOEFL record (`tagline`, `modules`, `includes`, `price: 10000`)
  was re-confirmed unreachable by any search-facing surface: `components/CourseHero.tsx` (the only
  consumer of `tagline`/`whoFor`) is not used by `/courses/toefl`; the sitemap builds routes from
  `courses[].slug` only, never `tagline` or `price`; no JSON-LD on the page reads from
  `content/courses.ts`. Comments on those fields were already comprehensive from earlier steps —
  no further correction needed.
- `docs/launch-verification.md`'s pre-existing "Flagged during IELTS Step 10, not fixed" note on
  `components/CourseExplorer.tsx`'s "Every programme is taught live online and includes
  recordings..." sentence was updated to confirm TOEFL is the third programme this shared
  paragraph contradicts (live/synchronous delivery and recordings are both "Needs owner
  confirmation" for TOEFL) — the sentence itself remains unfixed, as correcting shared homepage
  copy is outside any single programme-page step's scope.

## Conflicts between sources

None identified between the officially-reachable pages checked for Steps 1–2. The one genuine gap
is source 15 (PDF) being unreadable by the tooling available in this session, not a conflict
between two readable sources — see "Facts deliberately omitted" above.

## Recheck requirement

Recheck the TOEFL iBT task list, adaptive-section wording and public scoring facts against ETS's
current format and score guide before launch and after any announced test update — add this as a
private launch-verification item (see `docs/launch-verification.md`, which already carries this
requirement). If a future ETS update adds, removes or renames a task, or changes the score scale,
reporting structure or transition timeline, update `content/toefl.ts`'s `scoreProfile` and
`curriculum` objects, this document's source table, and `sourceVerifiedAt` together — do not
update one without the others.

## Files to review after an ETS update

- `content/toefl.ts` (`scoreProfile`, `curriculum`, `fit`, `process`);
- `components/toefl/TOEFLFit.tsx`, `TOEFLScoreProfile.tsx`, `TOEFLTaskCurriculum.tsx`,
  `TOEFLCoachingProcess.tsx`;
- this document's source table and "Last checked" date;
- `docs/toefl-offer-verification.md`, if the update also changes an operational or pricing fact.

## Responsibility

Whoever implements the next TOEFL step (or performs a scheduled content review) is responsible for
rechecking every source above and updating this document's "Last checked" date before publishing
any change to TOEFL test-format, scoring or curriculum claims.
