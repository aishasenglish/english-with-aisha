# TOEFL content sources

Official sources backing the factual claims in the TOEFL hero, requirement-qualifier and
temporary curriculum-preview sections (`content/toefl.ts`, `components/toefl/TOEFLFit.tsx`,
`components/toefl/TOEFLCurriculumPreview.tsx`). This is a maintenance record, not something
imported into the website — do not paste full official task instructions, sample prompts or
examiner comments here or into the site itself.

**Last checked:** 27 August 2026.

**Warning:** do not use old cached TOEFL blogs, third-party "prediction file" sites, pre-2026
coaching material or TOEFL Essentials/TOEFL ITP resources as a source for TOEFL iBT content. ETS's
own current pages are the only authority this page relies on.

## Sources and what they support

### 1. Current TOEFL iBT content and structure
`https://www.ets.org/toefl/test-takers/ibt/about/content.html`

Supports: the current four sections (Reading, Listening, Writing, Speaking) and their current task
families:

- **Reading**: "Complete the Words", "Read in Daily Life", "Read an Academic Passage".
- **Listening**: "Listen and Choose a Response", "Listen to a Conversation", "Listen to an
  Announcement", "Listen to an Academic Talk".
- **Writing**: "Build a Sentence", "Write an Email", "Write for an Academic Discussion".
- **Speaking**: "Listen and Repeat", "Take an Interview".

Also confirms the test as a whole adapts ("As the test adapts, test time and items may vary"), but
does **not** specify which individual section(s) are adaptive — see "Facts deliberately omitted"
below.

Used by: `content/toefl.ts`'s `curriculumPreview.items` (task-family names only; no item counts,
timing or adaptive-routing detail is published on the page).

### 2. Institution-facing content and structure (date-specific format selector)
`https://www.ets.org/toefl/institutions/ibt/about/content-structure.html`

Supports: the same four-section structure and task families as source 1, confirmed for tests taken
on or after 21 January 2026 specifically; confirms a test-taker must attempt at least one item per
section or no scores are reported (not currently used in any public claim).

Used by: cross-checks source 1 for the post-21-January-2026 format.

### 3. TOEFL iBT score scale update
`https://www.ets.org/toefl/institutions/ibt/score-scale-update.html`

Supports: the transition from the 0–120 scale to a new 1–6 scale (half-point increments) for
tests taken on or after 21 January 2026; each of the four sections receives its own 1–6 score; the
overall score is the average of the four section scores, rounded to the nearest half band; during
a two-year transition period after January 2026 (i.e. until January 2028), every score report also
shows a comparable overall score on the 0–120 scale, representing the midpoint of the equivalent
0–120 range; the redesign aims for closer alignment with CEFR.

Used by: `content/toefl.ts`'s `fit.currentFormatNote` (the 1–6 scale and transitional 0–120
score) and the `fit.items` entries addressing candidates on each scale.

### 4. Understanding your current TOEFL iBT score
`https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html`

Supports: the same 1–6 scale, overall-score-averaging and transitional 0–120 reporting as source
3, from the test-taker-facing page. Linked directly from `content/toefl.ts`'s
`fit.currentFormatSourceLink` as the official source a candidate can read themselves.

Used by: `components/toefl/TOEFLFit.tsx`'s external "Read ETS's current TOEFL iBT score guidance"
link.

### 5. TOEFL Essentials content (product distinction only)
`https://www.ets.org/toefl/test-takers/essentials/content.html`

Supports: TOEFL Essentials is a distinct test — four scored sections (Listening, Reading, Writing,
Speaking) plus an unscored Personal Video Statement, taking approximately 1.5 hours, materially
shorter and structurally different from TOEFL iBT.

Used by: confirms the basis for `content/toefl.ts`'s `fit.productNote` ("TOEFL Essentials and
TOEFL ITP are different assessments") — no TOEFL Essentials task detail is published on this page,
since this route is for TOEFL iBT only.

### 6. TOEFL Essentials score-acceptance guidance
`https://www.ets.org/toefl/test-takers/essentials/scores/score-acceptance.html`

Checked only to confirm the instruction to verify the exact test product with the receiving
institution — not used to promote or describe TOEFL Essentials as a service this page offers.

### 7. January 2026 TOEFL iBT updates page
`https://www.ets.org/toefl/test-takers/ibt/upcoming-updates-jan-2026.html`

Checked, but did not clearly surface format-change detail distinct from sources 1–4 at the time of
this check (the page's visible content focused on general TOEFL iBT positioning rather than a
change log). Recorded here so a future reviewer knows this page was checked and found insufficient
for a specific claim, rather than skipped. Recheck this page directly in a browser at the next
content review, since automated extraction may not have reflected its full content.

## Current task families by section (as verified)

- **Reading**: Complete the Words, Read in Daily Life, Read an Academic Passage.
- **Listening**: Listen and Choose a Response, Listen to a Conversation, Listen to an
  Announcement, Listen to an Academic Talk.
- **Writing**: Build a Sentence, Write an Email, Write for an Academic Discussion.
- **Speaking**: Listen and Repeat, Take an Interview.

## Scoring facts used on the page

- Tests taken on or after 21 January 2026 report four section scores plus an overall score on a
  1–6 scale (half-point increments).
- The overall score is the average of the four section scores, rounded to the nearest half band.
- For a two-year transition period after January 2026 (until January 2028), every score report
  also shows a comparable overall score on the 0–120 scale.
- TOEFL iBT, TOEFL Essentials and TOEFL ITP are distinct products; this page addresses TOEFL iBT
  only.

## Facts deliberately omitted due to uncertainty

- **Which specific section(s) (Reading, Listening) are adaptive.** ETS's content page confirms
  the test as a whole "adapts" and that "test time and items may vary", but does not specify
  Reading and Listening individually as the adaptive sections in the pages checked for this step.
  `content/toefl.ts`'s `curriculumPreview` therefore says only "Timing, attention and computer-test
  routines" rather than naming specific sections as adaptive. Recheck ETS's official test
  specification PDF (source below) before making a more specific adaptive-routing claim.
- **Exact item counts, section durations and total test length.** Per this step's own instruction
  not to publish exact timings/counts without a later, more thorough sourcing pass, no duration or
  count figure appears on the public page, even though source 1 states approximate figures.
- **The official TOEFL iBT 2026 test specification PDF**
  (`https://www.ets.org/content/dam/ets-india/pdfs/toefl/toefl-ibt-test-specifications-2026.pdf`)
  was not fetched for this step — reserved for a later step if an exact technical claim (timing,
  item count, adaptive mechanism) needs direct sourcing.

## Recheck requirement

Recheck the TOEFL iBT task list and public scoring facts against ETS's current format and score
guide before launch and after any announced test update — add this as a private
launch-verification item (see `docs/launch-verification.md`). If a future ETS update adds, removes
or renames a task, or changes the score scale, reporting structure or transition timeline, update
`content/toefl.ts`'s `curriculumPreview` and `fit` objects, this document's source table, and
`sourceVerifiedAt` together — do not update one without the others.

## Responsibility

Whoever implements the next TOEFL step (or performs a scheduled content review) is responsible for
rechecking every source above and updating this document's "Last checked" date before publishing
any change to TOEFL test-format, scoring or curriculum claims.
