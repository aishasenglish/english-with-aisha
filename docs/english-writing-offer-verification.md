# English Writing offer verification

Internal record of what the current English Writing offer can and cannot claim publicly on
`/courses/english-writing`. This is a maintenance document — none of the internal states below are
rendered on the public page, and nothing here should be read as legal, academic-integrity or other
professional advice, or as an answer on Aisha's behalf.

**Last reviewed:** English Writing Step 4 (29 August 2026).

> No operational claim moves from this document into public copy until its evidence/source and
> approved wording are recorded here first.

## Allowed internal states

- `Verified`
- `Unverified — do not publish`
- `Removed from public page`
- `Published as bounded educational guidance`

## Verified

| Claim / offer detail | Current status | Evidence/source | Approved public wording | Files affected | Follow-up required |
|---|---|---|---|---|---|
| Qualification | Verified | `content/site.ts`'s `qualification` | "MPhil in English Literature" | `components/english-writing/EnglishWritingAuthorityStrip.tsx` | None |
| Professional role | Verified | `content/site.ts`'s `professionalRole` | "College Lecturer" — never "University Lecturer" | `components/english-writing/EnglishWritingAuthorityStrip.tsx` | None |
| Public email | Verified | `content/site.ts`'s `email` | `aishasenglish@gmail.com` | `content/englishWriting.ts`'s `contact.email` (reads `site.email` directly) | None |
| Online delivery (website-purpose level) | Verified | Owner-confirmed business purpose — the whole site markets online English tutoring in multiple domains (same basis IELTS/PTE/TOEFL/Spoken English Step 1 each used) | "Online English tutoring." No live/synchronous, platform, group/private or recording claim | `content/englishWriting.ts`'s `hero.eyebrow` | None for this fact alone |

## Requires owner confirmation before publication

Every row below is `Unverified — do not publish` unless a future step records a specific
confirmation date and evidence source here first.

| Claim / offer detail | Current status | Evidence/source | Approved public wording | Files affected | Follow-up required |
|---|---|---|---|---|---|
| Exact learner age range | Unverified — do not publish | No English Writing-specific record exists | None | — | Confirm the intended learner age range or scope |
| Starting/proficiency levels served | Unverified — do not publish | No English Writing-specific record exists | None. Do not invent beginner/intermediate/advanced tiers | — | Confirm which starting levels the current offer can genuinely support |
| Live, asynchronous or mixed delivery | Unverified — do not publish | No English Writing-specific record exists | None. Do not say "live" or "recorded" for this programme | — | Confirm whether current coaching is live, asynchronous or mixed |
| Platform, including Zoom | Unverified — do not publish | No English Writing-specific record exists | None. Do not name Zoom or any other platform | — | Confirm the current delivery platform, if any |
| Group, private or mixed format | Unverified — do not publish | No English Writing-specific record exists | None. Do not imply a small-group or one-to-one format exists | — | Confirm whether a group and/or one-to-one format is currently offered |
| Class/session duration and frequency | Unverified — do not publish | No English Writing-specific record exists | None | — | Confirm current session length and frequency |
| Programme duration | Unverified — do not publish | No English Writing-specific record exists | None | — | Confirm the current programme duration, if fixed |
| Whether sessions are recorded | Unverified — do not publish | No English Writing-specific record exists | None. Do not say sessions are recorded | — | Confirm whether recordings are provided and, if so, for how long |
| Fixed curriculum scope and sequence | Unverified — do not publish | No owner-confirmed English Writing lesson sequence exists | The Step 2 public framework may describe six connected **possible priorities**, but must not be called a fixed module order, complete inclusion list or identical syllabus for every learner | `content/englishWriting.ts`'s `framework`; `components/english-writing/EnglishWritingFramework.tsx` | Confirm the actual teaching scope and any fixed sequence before publishing module, lesson or coverage promises |
| Whether every lesson follows the Step 3 five-stage cycle | Unverified — do not publish | No owner-confirmed English Writing lesson structure exists | The Step 3 public cycle may describe an **adaptable coaching framework** ("A useful writing-coaching cycle can begin with...") but must not be called the format every lesson, learner or package follows | `content/englishWriting.ts`'s `coachingProcess`; `components/english-writing/EnglishWritingCoachingProcess.tsx` | Confirm whether a genuinely fixed lesson structure exists before publishing it as a universal format |
| Whether writing tasks are assigned | Unverified — do not publish | No English Writing-specific record exists | None. Do not say assignments are included | — | Confirm whether writing tasks/assignments are part of the current offer |
| Whether learners submit full drafts, or whether Aisha reviews documents outside lessons | Unverified — do not publish | No English Writing-specific record exists; no document-upload feature exists in this codebase | None. The Step 3 process explicitly uses "a focused attempt", "short response" or "relevant section", never "full draft" or "document", and states the page does not request or store a document | `content/englishWriting.ts`'s `coachingProcess.stages` (stage 3's `boundary`); `components/english-writing/EnglishWritingCoachingProcess.tsx` | Confirm whether document submission or out-of-lesson review is ever offered, and what privacy/consent process would apply |
| Feedback method, depth and frequency | Unverified — do not publish | No English Writing-specific record exists | None. Do not say "detailed feedback" is included, and do not say feedback is written, oral, live, recorded, asynchronous, comprehensive or line-by-line, or provided after every task | `content/englishWriting.ts`'s `coachingProcess.boundaryNote` | Confirm the feedback method, depth and frequency for the current offer |
| Feedback turnaround time | Unverified — do not publish | No English Writing-specific record exists | None. Do not promise a turnaround time | `content/englishWriting.ts`'s `coachingProcess.boundaryNote` | Confirm any feedback turnaround commitment |
| Number of drafts or revisions | Unverified — do not publish | No English Writing-specific record exists | None. The Step 3 boundary note explicitly states the number of revisions must be confirmed before enrolment | `content/englishWriting.ts`'s `coachingProcess.boundaryNote` | Confirm whether a specific number of drafts/revisions is offered |
| Marking against a rubric, formal assessment, grading or progress reports | Unverified — do not publish | No English Writing-specific record exists | None. The Step 3 feedback lenses are framed as review questions, never task scoring, formal marking or a grade | `content/englishWriting.ts`'s `coachingProcess.feedbackLenses` | Confirm whether any formal assessment, marking or progress-reporting mechanism exists |
| Tests or progress checks | Unverified — do not publish | No English Writing-specific record exists | None. Do not say "regular tests" | — | Confirm whether tests or progress checks are part of the current offer |
| One-to-one review availability | Unverified — do not publish | No English Writing-specific record exists | None. Do not imply a "1-on-1 review option" exists | — | Confirm whether one-to-one review is currently offered |
| Materials and homework | Unverified — do not publish | No English Writing-specific record exists | None | — | Confirm whether materials or homework are provided/expected |
| Use/storage/privacy of learner writing samples | Unverified — do not publish | No English Writing-specific record exists; no privacy/consent mechanism exists in this codebase for document collection | None. Do not invite or imply document/writing-sample submission or storage | — | Confirm whether learner writing is ever collected/stored, and obtain an explicit privacy/consent decision before any such feature is built |
| Academic-integrity policy | Unverified — do not publish | No English Writing-specific record exists | None beyond the Step 1 boundary that this is teaching, not document completion on a learner's behalf | `content/englishWriting.ts` (implicit throughout; no explicit policy text published) | Confirm and document an explicit academic-integrity policy before any assignment/document-review feature is built |
| Proofreading, editing and ghostwriting boundaries | Unverified — do not publish | No English Writing-specific record exists | None. The page must never imply proofreading, editing or ghostwriting service | — | Confirm the exact boundary of what any current offer does and does not include |
| Permitted use of AI tools | Unverified — do not publish | No English Writing-specific record exists | None | — | Confirm any AI-tool policy before publishing one |
| Support for dissertations, theses, applications or publication writing | Unverified — do not publish | No English Writing-specific record exists | None. Do not imply support for these document types | — | Confirm whether any of these are genuinely supported |
| Pricing, currency, payment schedule, refunds and discounts | Unverified — do not publish | The legacy `PKR 10,000` in `content/courses.ts` was never verified — see that file's comment on the `price` field | None. No amount, currency, billing basis or discount | `content/courses.ts` (`price: 10000`, non-authoritative, unread by the dedicated route) | Confirm the current fee, currency, billing basis and policies |
| Current/future intake and capacity | Unverified — do not publish | No owner-verified, future, published English Writing record exists in `content/batches.ts` | "Current English Writing availability is confirmed individually" (the current Step 1 enquiry-only state). Never a historical date, an inferred cadence or a scarcity claim | `content/englishWriting.ts`'s `availability` | Supply a genuine future intake record with complete required fields, or confirm coaching is arranged on enquiry only |
| Booking or consultation process | Unverified — do not publish | No English Writing-specific record exists | None. Do not imply a bookable consultation exists | — | Confirm whether a consultation/booking step exists |
| Expected enquiry response time | Unverified — do not publish | No documented standard exists anywhere on the site | None. Do not promise a reply-time window | — | Confirm whether Aisha wants to commit to a stated response time |
| Writing-specific testimonials, results or samples | Unverified — do not publish | `content/testimonials.ts` currently has no entries | None. No testimonial, quote, sample or outcome claim may appear until a real, consent-confirmed, English-Writing-tagged record exists | — | Supply a genuine testimonial with recorded consent and a `courseSlug: "english-writing"` tag before any evidence section is built |
| Whether the Step 4 illustrative demonstration reflects an actual lesson or assessment | Unverified — do not publish; also **Removed from public page as a claim** | The demonstration is original website-created copy, not a transcript of a real session | None. The disclosure states the example "was created for this website" and "is not a real learner's work, testimonial, graded response or evidence of a result" | `content/englishWriting.ts`'s `demonstration`; `EnglishWritingFeedbackDemonstration.tsx` | None — this is a permanent boundary, not a pending confirmation |

## Step 2 public guidance decisions

These decisions describe non-operational learner guidance. They do not verify a package, delivery
format or teaching inclusion:

| Public guidance | Current status | Basis | Approved boundary | Files affected |
|---|---|---|---|---|
| Four-part writing profile | Published as bounded educational guidance | Helps a visitor describe writing type, reader/purpose, current difficulty and whether the need belongs on a named exam route | Must remain a reflection guide, never a formal assessment, diagnostic, placement or level result | `content/englishWriting.ts`; `EnglishWritingProfile.tsx` |
| Six-area writing-development framework | Published as bounded educational guidance | Organises the existing broad writing positioning into purpose/task, sentence control, paragraph development, organisation/cohesion, vocabulary/tone and revision/self-review | Must not imply a fixed sequence, equal coverage, lesson count, assignments or feedback package | `content/englishWriting.ts`; `EnglishWritingFramework.tsx` |
| Study, workplace and everyday context map | Published as bounded educational guidance | Shows how emphasis can change with writing purpose and reader | Examples are not guaranteed inclusions; exact document types remain subject to confirmation | `content/englishWriting.ts`; `EnglishWritingContextMap.tsx` |
| Learning/authorship boundary | Published as bounded educational guidance | The site markets teaching and learner development, not completion or concealment services | No assessed-work completion, plagiarism disguise or authorship misrepresentation is offered or implied | `content/englishWriting.ts`; `EnglishWritingContextMap.tsx` |
| Five-stage writing-coaching cycle | Published as bounded educational guidance | Organises a responsible writing-development sequence: clarify task/reader/purpose, plan, produce a focused attempt, review useful priorities, revise and transfer | Must not imply every lesson follows the sequence, that assignments or full drafts are involved, or that a fixed number of attempts is included | `content/englishWriting.ts`'s `coachingProcess.stages`; `EnglishWritingCoachingProcess.tsx` |
| Four-lens feedback framework | Published as bounded educational guidance | Explains what useful review can focus on: purpose/response, organisation/development, sentences/language, revision/independence | Must not imply comprehensive/line-by-line correction, a specific method, frequency or turnaround, or formal scoring | `content/englishWriting.ts`'s `coachingProcess.feedbackLenses`; `EnglishWritingCoachingProcess.tsx` |
| Feedback principle and operational boundary note | Published as bounded educational guidance | States that feedback should give the learner something specific to revise, not replace the learner's writing, and that practice format/feedback method/revision count/turnaround must be confirmed before enrolment | Must remain visible without interaction and must not be softened into an inclusion promise | `content/englishWriting.ts`'s `coachingProcess.feedbackPrinciple` / `boundaryNote`; `EnglishWritingCoachingProcess.tsx` |

## Step 4 public guidance decisions — teaching demonstration, not learner evidence

| Public guidance | Current status | Basis | Approved boundary | Files affected |
|---|---|---|---|---|
| Illustrative feedback-revision demonstration | Published as bounded educational guidance — **teaching demonstration, not learner evidence** (see `docs/testimonial-content-intake.md`'s "English Writing-specific intake fields" section) | One original, website-created example (a colleague email requesting missing report data) makes the Step-3 coaching cycle concrete: an illustrative first attempt, what already communicates, three focused revision priorities, one possible learner-owned revision, and what changed | Must never be presented as a real learner, testimonial, grade, client, document or result; must never imply the exact feedback format, full-document review, line editing or a specific number of revisions is included in the current offer; the possible revision must remain framed as the learner's own, not a rewriting service | `content/englishWriting.ts`'s `demonstration`; `EnglishWritingFeedbackDemonstration.tsx` |
| Conditional verified-evidence section | Published as a fail-closed pattern — currently renders nothing | `components/english-writing/EnglishWritingVerifiedEvidence.tsx` filters `publishedTestimonials` (from `content/testimonials.ts`, currently empty) to `courseSlug === "english-writing"` and returns `null` when no eligible record exists — no heading, wrapper or placeholder | Must never render a generic testimonial, the illustrative demonstration, or an unattributed quote as English Writing evidence; must never infer a grade, admission, promotion or publication outcome | `components/english-writing/EnglishWritingVerifiedEvidence.tsx`; `content/testimonials.ts` |

## What the public page currently says instead (as of English Writing Step 4)

`/courses/english-writing` shows only:

- an English-Writing-specific hero, compact authority strip and fit section
  (`components/english-writing/EnglishWritingHero.tsx`, `EnglishWritingAuthorityStrip.tsx`,
  `EnglishWritingFit.tsx`), positioning the page around the candidate's own real writing situations
  (study, work, everyday, foundations) rather than a promise to "write clearly, correctly,
  confidently";
- a static four-part writing-profile guide (`components/english-writing/
  EnglishWritingProfile.tsx`, id `english-writing-profile`) that helps visitors describe what they
  write, the reader/purpose, current difficulty and whether the need belongs on a named exam route;
- a six-area writing-development framework (`components/english-writing/
  EnglishWritingFramework.tsx`, id `english-writing-framework`) framed as possible priorities, not
  a fixed module sequence or promise of identical coverage;
- a study/workplace/everyday context map (`components/english-writing/
  EnglishWritingContextMap.tsx`, id `english-writing-context-map`) with explicit document-scope,
  confidentiality and academic-integrity boundaries;
- a five-stage writing-coaching cycle and four-lens feedback framework (`components/english-writing/
  EnglishWritingCoachingProcess.tsx`, id `english-writing-coaching-process`), presented as an
  adaptable pedagogical sequence rather than a universal lesson format, with a feedback principle
  ("give the learner something specific... not silently replace the learner's writing"), an
  explicit operational boundary note (practice format, feedback method, revision count and
  turnaround all subject to confirmation; no document upload), and its own contextual WhatsApp CTA
  ("Discuss my writing situation") that never requests a full document or promises feedback
  inclusion or a response time;
- one original, website-created illustrative feedback demonstration (`components/english-writing/
  EnglishWritingFeedbackDemonstration.tsx`, id `english-writing-demonstration`), disclosed
  prominently before either version of the writing as "not a real learner's work, testimonial,
  graded response or evidence of a result" — a short imperfect first attempt (asking a colleague
  for missing report data), an acknowledgement of what already communicates, three focused
  revision priorities with guiding questions, one possible learner-owned revision, what changed,
  and visible format/outcome boundaries stating the exact feedback format, full-document review,
  line editing, revision count and any result are not confirmed or guaranteed;
- a conditional verified-evidence section (`components/english-writing/
  EnglishWritingVerifiedEvidence.tsx`, id `english-writing-verified-evidence` when rendered) that
  currently renders nothing at all — no heading, wrapper or placeholder — because
  `content/testimonials.ts` has no record tagged `courseSlug: "english-writing"` with
  `consentConfirmed: true`;
- a route-guidance section (`components/english-writing/EnglishWritingRouteGuidance.tsx`, id
  `english-writing-route-guidance`) distinguishing general English Writing coaching from IELTS/PTE/
  TOEFL Writing preparation and O/A Level English, each with a real internal link;
- the fail-closed, enquiry-only availability state (`components/english-writing/
  EnglishWritingAvailability.tsx`, id `english-writing-availability`), correctly showing that
  availability is "confirmed individually" since no English Writing batch is published, with a
  WhatsApp/email fallback requesting the candidate's writing goal, current difficulty and preferred
  timing;
- an English-Writing-specific final CTA (`components/english-writing/EnglishWritingFinalCTA.tsx`)
  with its own WhatsApp message and a plain `mailto:` fallback to the canonical
  `aishasenglish@gmail.com`, plus a helper note clarifying that "review the enquiry" does not mean
  free document review, editing or written assessment.

It no longer shows: `<CourseHero>`/`<CourseModules>` (replaced entirely by the dedicated
components above), `<IncludedList>` (removed entirely), `<PricingCard>` (removed entirely), the
generic `<BatchTable>` "Upcoming Writing batches" section (removed entirely), or the complete
generic `<FAQAccordion />` (removed entirely). None of these render "coming soon" or an empty
heading in their place — they are simply absent until their own verified replacement step.
Learning format, pricing, a dedicated availability component, specialist FAQ and enquiry-handoff
form variant remain deliberately deferred to their own later English Writing steps. Step 2's public
framework is not an operational promise that all areas are included or taught in a fixed order,
Step 3's public coaching cycle and feedback framework are not a promise that every lesson, learner
or package follows an identical sequence, includes assignments or full-draft review, or receives
feedback of a specific method, frequency, depth or turnaround, and Step 4's illustrative
demonstration is not a real learner's work, testimonial, graded response, evidence of a result, or
a promise that the demonstrated feedback format, full-document review, line editing or a specific
number of revisions is included in the current offer.

## Cross-site corrections made this step

- `content/courses.ts`: canonical `name` corrected from "English Writing Mastery" to "English
  Writing" — this field is safely consumed site-wide (Footer, homepage `CourseExplorer` card title
  and its default WhatsApp message, the general enquiry form's programme dropdown). `tagline`,
  `summary`, `whoFor`, `modules`, `includes` and `price` remain unchanged but are now annotated as
  non-authoritative for the dedicated route, which no longer imports `CourseHero`/`CourseModules`/
  `IncludedList`/`PricingCard`.
- `content/coursePresentation.ts`: the homepage/Courses-hub card copy (`typeLabel`,
  `shortDescription`, `bestFor`, `focus`, `ctaLabel`, `whatsappMessage`) was rewritten to remove
  the "Mastery" name, the "Improve grammar, sentence control and structure" outcome framing, and
  the "Regular writing practice with actionable feedback" unverified inclusion claim.
- `content/nav.ts` and `content/audiences.ts`: the "English Writing Mastery" / "Writing Mastery"
  navigation and homepage-audience-panel labels were both corrected to "English Writing".
- `content/courseGuidance.ts`: the course-choice guide's action label was aligned to "Explore
  English Writing" to match `coursePresentation.ts`'s `ctaLabel`.
- `content/homeCourses.ts`: added an `HOME_COURSE_DELIVERY` override
  ("Online coaching · Confirm current format and support") so the homepage card no longer shows
  the shared default line's unverified "Live online · Group or one-to-one · Recordings included"
  claim for this programme.
- `content/programmeMatcher.ts`: reviewed — its `"english-writing"` recommendation reason ("The
  focused writing pathway for clearer grammar, sentences, essays, emails and professional
  communication") contains no unsupported live/format/price/feedback claim, so no edit was made.
- `content/courseCategories.ts`: reviewed — the shared communication-skills category copy was
  already corrected during Spoken English Step 10 ("Develop practical speaking and writing" /
  "Focused support for learners working on spoken communication, language accuracy and written
  communication beyond a single examination") and required no further change for English Writing.

## Step 3 reconciliation check

Searched every public English Writing surface for `writing assignments with detailed feedback`,
`regular writing practice with actionable feedback`, `regular tests`, `1-on-1 review option`,
`unlimited feedback`, `personalised plan`, `line-by-line correction`, `feedback within 24/48
hours`, `submit your document`, `professional proofreading` and `we rewrite your work`. No
conflicting instance exists on `/courses/english-writing`, its dedicated components, or the
already-corrected shared surfaces (`content/coursePresentation.ts`, `content/nav.ts`,
`content/audiences.ts`, `content/courseGuidance.ts`, `content/homeCourses.ts`). The only remaining
hits are inside the quarantined legacy `content/courses.ts` record (unread by the dedicated route,
already annotated as non-authoritative) and this document's own explanatory text. No shared-surface
file needed a further edit for Step 3.

## Writing-sample and privacy safeguards

No real learner writing sample may be added to `/courses/english-writing` in any future step unless
the repository contains documented permission for both the learner's original text and the revised
text/any annotations. Before any future sample is published, `docs/testimonial-content-intake.md`'s
"English Writing-specific intake fields" section must record: who authored each version; whether
Aisha edited or the learner revised it; whether the work was assessed or confidential; whether
names, organisations, assignments and identifiers were removed; consent for public web publication;
whether search-engine indexing is permitted; the exact claim the sample supports; and how consent
withdrawal is handled. Private learner work must never be used simply because it is available in a
message, email or local file. The Step 4 illustrative demonstration is exempt from this rule because
it is original website-created copy, not a real learner's writing.

## Step 4 reconciliation check

Searched every public English Writing surface for `Real student transformation`, `Before and after
success`, `Aisha's proven method`, `Guaranteed improvement`, `Actual learner result`,
`teacher-corrected version`, `perfect response`, `professional final version`, `guaranteed
high-quality writing`, `bad writing`, `weak student`, `beginner English`, `incorrect version`,
`error-free` and `native-level`. No conflicting instance exists anywhere on
`/courses/english-writing`. `content/testimonials.ts` was re-checked and confirmed still empty (no
approved public English Writing testimonial, case study, before/after sample, grade result,
employer statement or learner success record exists), so
`EnglishWritingVerifiedEvidence.tsx` correctly renders `null`. The illustrative demonstration was
never added to `content/testimonials.ts` and carries no `consentConfirmed`/`courseSlug` fields — it
cannot be mistaken for a testimonial record by the publication guard. No shared-surface file needed
an edit for Step 4.

## Open questions for Aisha

See every row marked `Unverified — do not publish` above. In summary, still needed before any more
specific public claim can be made:

1. Is English Writing coaching delivered live, asynchronously, or both?
2. What platform is used for live sessions, if any?
3. Is a group format currently offered, a one-to-one format, or both?
4. What starting levels can the current offer genuinely support, and is there an age scope?
5. What is the current programme duration and lesson frequency?
6. Are session recordings provided, and if so, for how long can a learner access them?
7. Is a specific curriculum/module sequence confirmed, and does it include a fixed order? The
   current public framework only describes possible priorities and does not answer this.
8. Are writing tasks/assignments part of the current offer, and if so, how many/how often?
9. What is the feedback method, depth, frequency and turnaround?
10. Is a specific number of drafts/revisions offered per piece of writing?
11. Are tests or progress checks part of the current offer?
12. Is one-to-one review currently offered, separately from or alongside a group format?
13. Are materials provided, and is homework expected?
14. Is learner writing ever collected or stored? If so, what privacy/consent process applies?
15. What is the academic-integrity policy, and what are the explicit proofreading/editing/
    ghostwriting boundaries?
16. What AI-tool policy, if any, applies to submitted writing?
17. Is support for dissertations, theses, applications or publication writing genuinely offered?
18. What is the current fee, currency, billing basis and policy (refunds, discounts)?
19. Is there a current confirmed intake, or is coaching arranged on enquiry only?
20. Does Aisha want to commit to a stated response time for enquiries?
21. Are there any existing English-Writing learners who have given consent for a testimonial to be
    published on this page?
22. Does every current lesson genuinely follow a version of the five-stage coaching cycle, or does
    practice vary enough that the public page should say so more explicitly?
23. Are writing tasks/assignments assigned between sessions, and if so, are full drafts submitted
    or reviewed outside the lesson itself?
24. What is the actual feedback method (written, oral, live, recorded, asynchronous), typical
    depth, frequency and turnaround time for the current offer?
25. Is there a specific number of drafts or revisions included per writing attempt?
26. Is any writing formally marked, scored or graded, and are progress reports produced?
27. Are there any existing English-Writing learners who could supply a genuine writing sample with
    fully documented permission for both the original and revised text (see
    `docs/testimonial-content-intake.md`'s "English Writing-specific intake fields" section)?

Until these are answered, the public page deliberately shows only the verified positioning, fit
guidance, non-scored writing profile, possible-priorities framework, context mapping, the adaptable
coaching cycle and feedback framework, one clearly disclosed illustrative teaching demonstration,
route-selection guidance, the fail-closed availability state, and a WhatsApp/email path to ask
Aisha directly — never an invented format, formal level, fixed module order, duration, fee,
feedback promise, intake, or real learner evidence that hasn't passed the publication guard.
