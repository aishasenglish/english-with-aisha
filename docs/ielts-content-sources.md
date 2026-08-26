# IELTS content sources

Official sources backing the factual claims in the IELTS score-profile and four-skill curriculum
sections (`content/ielts.ts`, `components/ielts/IELTSScoreProfile.tsx`,
`components/ielts/IELTSSkillsCurriculum.tsx`). This is a maintenance record, not something
imported into the website — do not paste full official descriptors, sample tasks or examiner
comments here or into the site itself.

**Last checked:** 26 August 2026.

## Sources and what they support

### 1. IELTS scoring in detail
`https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail`

Supports:
- IELTS reports separate Listening, Reading, Writing and Speaking band scores plus an overall
  band score (the overall band is the average of the four, rounded to the nearest half band).
- Receiving organisations set their own accepted overall/component requirements — IELTS itself
  doesn't publish a universal minimum.
- Listening and Reading raw marks are converted to band scores, and the precise marks needed for
  a given band vary slightly by test version — this is why the site does not publish a fixed
  score-conversion table or calculator.

Used by: `content/ielts.ts`'s `scoreProfile` section.

### 2. IELTS Academic Writing format
`https://ielts.org/take-a-test/test-types/ielts-academic-test/ielts-academic-format-writing`

Supports: Academic Writing Task 1 (describing visual information — graphs, tables, charts or
diagrams) and Task 2 (an essay responding to a point of view, argument or problem); Task 2
contributes twice as much as Task 1 to the Writing score; both tasks are assessed on task
achievement/response, coherence and cohesion, lexical resource, and grammatical range and
accuracy.

Used by: `content/ielts.ts`'s `curriculum.skills` Writing entry (`versionDistinction`,
`assessmentNote`, `weightingNote`).

### 3. IELTS General Training Writing format
`https://ielts.org/take-a-test/test-types/ielts-general-training-test/ielts-general-training-format-writing`

Supports: General Training Writing Task 1 is a letter responding to a practical, everyday
situation; Task 2 is a discursive essay, also weighted twice Task 1's contribution.

Used by: `content/ielts.ts`'s `curriculum.skills` Writing entry (`versionDistinction`).

### 4. IELTS General Training test overview
`https://ielts.org/take-a-test/test-types/ielts-general-training-test`

Supports: Listening and Speaking are identical between Academic and General Training; Reading
and Writing differ between the two versions.

Used by: `content/ielts.ts`'s `curriculum.versionNote`, and the Reading skill's version note.

### 5. Official IELTS Writing band descriptors
`https://ielts.org/cdn/ielts-guides/ielts-writing-band-descriptors.pdf`

Supports: the four named Writing assessment criteria (task achievement/response, coherence and
cohesion, lexical resource, grammatical range and accuracy) — confirmed directly from the PDF.
The descriptor text itself (what distinguishes each band) is not reproduced anywhere on the site.

Used by: `content/ielts.ts`'s Writing `assessmentNote`.

### 6. Official IELTS Speaking band descriptors
`https://ielts.org/cdn/ielts-guides/ielts-speaking-band-descriptors.pdf`

Supports: the four named Speaking assessment criteria (fluency and coherence, lexical resource,
grammatical range and accuracy, pronunciation). This PDF didn't extract cleanly via automated
fetch at last check — the four criteria are long-standing, publicly stable IELTS terminology used
consistently across ielts.org's other pages, but reconfirm directly against the PDF (or the
current ielts.org Speaking test page) at the next content review rather than relying on this note
alone.

Used by: `content/ielts.ts`'s Speaking `assessmentNote`.

## Social image (IELTS Step 10)

`/courses/ielts`'s Open Graph/Twitter image is `public/images/social/ielts-preparation.jpg` — a
genuine `1200×630` file (declared dimensions match the actual pixels). It was composed from the
site's existing approved portrait (`public/images/og-image.jpg`, itself `960×1280`, portrait
orientation) by resizing it to fill the canvas height and centring it on a plain `#F7FAFB`
(ivory/`--color-surface-tint`) background — padding, not cropping or stretching. No AI generation,
retouching or identity change was applied; the photo itself is unmodified other than a resize. No
IELTS logo, band badge or test-provider branding was added.

This was necessary because the source portrait's aspect ratio (`0.75`, tall) cannot honestly fill
a `1200×630` (`1.9:1`, wide) frame without either cropping off Aisha's face/body or stretching the
image — both of which the implementation prompt explicitly disallows. Padding on a brand-neutral
background was the only option left that keeps the photo genuine and undistorted while still
declaring truthful dimensions.

The root layout's own default `og-image.jpg` reference was also corrected in this step — it
previously declared `1200×630` for a file that is actually `960×1280`; it now declares the true
dimensions, and the root `twitter.card` was changed from `summary_large_image` to `summary`
(better suited to a portrait image than a large landscape card). Only `/courses/ielts` uses the
newly composed wide asset and `summary_large_image`.

## Maintenance warning

If official IELTS information changes, update the canonical IELTS content and every visible or
structured-data claim together. Do not update `content/ielts.ts` without also checking whether
`app/courses/ielts/page.tsx`'s metadata, any future IELTS structured data, and this document all
still agree with each other and with the source.

Recheck all six sources before publishing any change to test-format, scoring or assessment-
criteria claims on the IELTS page — they were last verified on the date above and IELTS may
revise its published test information at any time.
