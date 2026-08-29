# PTE content sources

Official sources backing the factual claims in the PTE score-profile and four-skill curriculum
sections (`content/pte.ts`, `components/pte/PTEScoreProfile.tsx`,
`components/pte/PTETaskCurriculum.tsx`). This is a maintenance record, not something imported into
the website — do not paste full official task instructions, sample prompts or examiner comments
here or into the site itself.

**Last checked:** 27 August 2026.

**Warning:** do not use old cached PTE blogs, third-party "prediction file" sites or PTE Core
materials as a source for PTE Academic content. Pearson's own current pages are the only
authority this page relies on.

## Sources and what they support

### 1. PTE Academic test-format overview
`https://www.pearsonpte.com/pte-academic/test-format/`

Supports: the test is organised into three parts (Speaking & Writing, Reading, Listening); PTE
Academic UKVI shares the same test-format structure as PTE Academic and exists as a distinct
product for UK work-visa and below-degree-study purposes.

Used by: `content/pte.ts`'s `fit.versionNote` (Step 1) and `scoreProfile.requiredDetails`'
"Exact test: PTE Academic or PTE Academic UKVI" line.

### 2. PTE Academic Speaking and Writing task format
`https://www.pearsonpte.com/pte-academic/test-format/speaking-writing/`

Supports: the current Speaking task list — Personal Introduction (unscored, familiarisation only,
not published as a task family), Read Aloud, Repeat Sentence, Describe Image, Retell Lecture,
Answer Short Question, Summarize Group Discussion, Respond to a Situation — and the current
Writing task list — Summarize Written Text, Write Essay. Confirms both `Summarize Group
Discussion` and `Respond to a Situation` are current, live task types.

Used by: `content/pte.ts`'s `curriculum.skills` Speaking (`taskFamilies`) and Writing
(`taskFamilies`, partial — see source 4 below for the integrated Listening/Writing tasks).

**Rechecked for PTE Step 4 (feedback demonstration), 27 August 2026:** this same page confirms
`Respond to a Situation` requires the candidate to listen to and read a description of an
everyday situation, then give a spoken response describing what they would say; and that its
three published scoring traits are **Content**, **Pronunciation** and **Oral Fluency** — Content
is described as whether the response addresses the situation effectively and communicates
information clearly using appropriate expressions, and the page confirms Content specifically
receives human expert review before the final score is confirmed, alongside AI scoring of all
three traits. This is PTE Academic's own published terminology — PTE Core's distinct
`Appropriacy` trait is not used here.

Used by: `content/pte.ts`'s `feedbackDemo` (the illustrative diagnosis points address only what
Content-type criteria can assess from a transcript — purpose, accuracy and register — and the
`transcriptLimitation`/`audioBoundary` text explicitly excludes Pronunciation and Oral Fluency,
since those require audio and cannot be evaluated from text).

### 3. PTE Academic Reading task format
`https://www.pearsonpte.com/pte-academic/test-format/reading/`

Supports: the current Reading task list — Fill in the Blanks (Dropdown), Multiple Choice Multiple
Answers, Reorder Paragraph, Fill in the Blanks (Drag and Drop), Multiple Choice Single Answer —
and that Multiple Choice, Multiple Answers specifically can deduct points for incorrect
selections.

Used by: `content/pte.ts`'s `curriculum.skills` Reading (`taskFamilies`, `integratedNote`).

### 4. PTE Academic Listening task format
`https://www.pearsonpte.com/pte-academic/test-format/listening/`

Supports: the current Listening task list — Summarize Spoken Text, Multiple Choice Multiple
Answers, Fill in the Blanks (Type In), Highlight Correct Summary, Multiple Choice Single Answer,
Select Missing Word, Highlight Incorrect Words, Write from Dictation — including that Summarize
Spoken Text asks for a 50–70 word written summary of an audio recording, and Write from Dictation
asks the candidate to type a sentence they hear.

Used by: `content/pte.ts`'s `curriculum.skills` Listening (`taskFamilies`) and Writing's
"Summarize Spoken Text (integrated Listening/Writing)" / "Write from Dictation (integrated
Listening/Writing)" entries. Also supports two of the three integrated-skills examples:
"Summarize Spoken Text connects listening comprehension with written response" and "Write from
Dictation connects listening accuracy, memory and written form."

### 5. PTE Academic scoring overview
`https://www.pearsonpte.com/pte-academic/scoring/`

Supports: the 10–90 overall score scale; that the score report includes individual scores for the
candidate's communicative skills alongside the overall score; and Pearson's own description of an
automated ("AI") scoring system reviewed by a human expert for some response aspects before the
score is finalised.

Used by: `content/pte.ts`'s `scoreProfile.body` (score scale and skill-score structure) and
`curriculum.integritySecondSentence` (automated-scoring-plus-human-review statement).

**Deliberately not used:** this page does not explicitly name all four communicative skills
(Listening, Reading, Speaking, Writing) together in one place, and does not state whether the
overall score is or isn't a simple arithmetic average of the four. See "Facts deliberately
omitted" below.

### 6. PTE Academic score guide — understanding your score
`https://www.pearsonpte.com/pte-academic/scoring/understand-your-score`

Checked, but did not support any claim used on the page — it covers CEFR-band descriptions of
what different overall-score ranges mean in practice, not the skill-score structure or the
arithmetic-average question. Recorded here so a future reviewer knows this page was checked and
found insufficient for those specific claims, rather than skipped.

### 7. Pearson's enhanced PTE Academic announcement (August 2025)
`https://www.pearsonpte.com/news/pearson-advances-english-language-assessment-with-enhanced-pte-test/`

Supports: `Summarize Group Discussion` and `Respond to a Situation` were introduced to PTE
Academic's Speaking section from August 2025, as tasks intended to assess real-world academic and
professional communication.

Used by: confirms the two newer Speaking task families in `content/pte.ts`'s `curriculum.skills`
Speaking entry are current, not stale content from before the format update.

## Current task names by section (as verified)

- **Speaking** (unscored familiarisation task excluded): Read Aloud, Repeat Sentence, Describe
  Image, Retell Lecture, Answer Short Question, Summarize Group Discussion, Respond to a
  Situation.
- **Writing**: Summarize Written Text, Write Essay, Summarize Spoken Text (integrated with
  Listening), Write from Dictation (integrated with Listening).
- **Reading**: Fill in the Blanks (Dropdown), Multiple Choice Multiple Answers, Reorder Paragraph,
  Fill in the Blanks (Drag and Drop), Multiple Choice Single Answer.
- **Listening**: Summarize Spoken Text, Multiple Choice Multiple Answers, Fill in the Blanks (Type
  In), Highlight Correct Summary, Multiple Choice Single Answer, Select Missing Word, Highlight
  Incorrect Words, Write from Dictation.

## Scoring facts used on the page

- Overall score scale: 10–90.
- The score report includes an overall score plus individual communicative-skill scores.
- Pearson describes an automated scoring system with human expert review of some response
  aspects before a final score is issued.

## Facts deliberately omitted due to uncertainty

- **Whether the overall score is a simple arithmetic average of the four skill scores.** The
  implementation prompt for this step explicitly names this as a fact to state only if the
  current official score guide still supports it. Neither the scoring overview page nor the
  understand-your-score page confirmed or denied this clearly enough to publish either way, so
  `content/pte.ts` states only the overall-plus-skill-scores structure and omits any claim about
  averaging.
- **Exact task counts, section durations and total test length.** Pearson's Speaking & Writing
  format page states a combined duration range, but per this step's own instruction not to
  publish exact timings without independently re-verifying them at the moment of publication, no
  duration or count figure appears on the public page.
- **Explicit naming of all four communicative skills together in one official sentence.** The
  scoring overview page confirms the structure (overall + individual communicative-skill scores)
  without naming all four in the same sentence; `content/pte.ts`'s `scoreProfile.body` names them
  based on the well-established, consistently-used public PTE Academic terminology (Listening,
  Reading, Speaking, Writing) rather than a single directly-quotable official sentence.
- **A complete official Skills Profile / enabling-skills breakdown.** Mentioned in passing by
  Pearson's scoring page but not detailed enough to publish a specific claim about it; not used.

## PTE Step 8: FAQ fact recheck (27 August 2026)

Rechecked before writing `content/pteFaqs.ts`'s "tutor feedback vs official scoring" answer
(`feedback-vs-official-scoring`) and its use of the automated-scoring-plus-human-review claim:

- `https://www.pearsonpte.com/pte-academic/scoring/` still confirms, verbatim in substance: "Institutions
  set their own minimum scores" (receiving organisations set their own requirement — supports the
  `required-score` FAQ answer directing candidates to the receiving organisation); an overall score
  plus individual communicative-skill scores are reported; the test is scored by an "AI scoring
  system"; and "some responses are also reviewed by a human expert before the automated score is
  finalised." All four claims match what `content/pte.ts`'s `curriculum.integritySecondSentence`
  and `content/pteFaqs.ts`'s `feedback-vs-official-scoring` answer already state — no wording
  change was needed as a result of this recheck.
- `https://www.pearsonpte.com/pte-academic/test-format/speaking-writing/`,
  `.../test-format/reading/` and `.../test-format/listening/` were not re-fetched for this step —
  no FAQ answer restates specific task names, counts or timings (Part F explicitly prohibits
  repeating the complete task curriculum in the FAQ), so nothing from those pages needed
  rechecking here.
- Google's structured-data guidance was also rechecked for this step (Search appearance gallery
  and structured-data policies pages) — the supported gallery still does not list a general FAQ
  rich-result feature for a tutoring portfolio. No `FAQPage` JSON-LD was added to `/courses/pte`
  as a result; see `docs/pte-offer-verification.md`'s Step 8 notes for the full reasoning.

## Social image and technical SEO (PTE Step 10)

`/courses/pte`'s Open Graph/Twitter image is `public/images/social/pte-academic-preparation.jpg`
— a genuine `1200×630` file (declared dimensions match the actual pixels, confirmed via `sharp`
metadata inspection). It was composed from the same site-approved portrait already used for IELTS
(`public/images/og-image.jpg`, itself `960×1280`, portrait orientation) by resizing it to fill the
canvas height (`473×630`) and centring it on a plain `#F7FAFB` (ivory/`--color-surface-tint`)
background — padding, not cropping or stretching, following the exact IELTS Step 10 approach. No
AI generation, retouching or identity change was applied; the photo itself is unmodified other
than a resize. No Pearson/PTE logo, score badge, visa graphic or provider branding was added. File
size is 53 KB (reasonable; no visible degradation at the composed resolution).

This was necessary because the source portrait's aspect ratio (`0.75`, tall) cannot honestly fill
a `1200×630` (`1.9:1`, wide) frame without either cropping off Aisha's face/body or stretching the
image — both of which the implementation prompt explicitly disallows. Padding on a brand-neutral
background was the only option left that keeps the photo genuine and undistorted while still
declaring truthful dimensions.

### Google Search Central guidance rechecked (27 August 2026)

Confirmed via direct fetch of the current pages before implementing:

- `search-gallery`: the supported rich-result gallery does not list a general `FAQPage` rich
  result for a tutoring portfolio (also separately confirmed for PTE Step 8) — no `FAQPage`,
  `QAPage`, `Offer`, `AggregateRating`, `Review` or `CourseInstance` markup was added to
  `/courses/pte`. `BreadcrumbList` remains a supported, genuinely applicable type and is the only
  structured-data addition in this step.
- `sd-policies` / `breadcrumb`: current guidance still emphasises that structured data must
  describe visible page content — the `BreadcrumbList` JSON-LD added to
  `app/courses/pte/page.tsx` is generated from the exact same `ptePage.breadcrumb` array
  `components/pte/PTEBreadcrumb.tsx` renders visibly, so the two can never disagree.
- `title-link` / `snippet`: current guidance favours concise, descriptive, non-stuffed titles and
  unique, accurate descriptions — the absolute title (`Online PTE Academic Preparation |
  AISHAS ENGLISH` — brand-name standardisation updated this from `| Aisha's English`) and
  description avoid score, price, recording or availability promises per Steps 2-9's own
  safeguards.

## Recheck requirement

Recheck the PTE Academic task list and public scoring facts against Pearson's current format and
score guide before launch and after any announced test update — add this as a private
launch-verification item (see `docs/launch-verification.md`). If a future Pearson update adds,
removes or renames a task, or changes the score scale or reporting structure, update
`content/pte.ts`'s `curriculum` and `scoreProfile` objects, this document's source table, and
`sourceVerifiedAt` together — do not update one without the others.

## Responsibility

Whoever implements the next PTE step (or performs a scheduled content review) is responsible for
rechecking every source above and updating this document's "Last checked" date before publishing
any change to PTE test-format, scoring or curriculum claims.
