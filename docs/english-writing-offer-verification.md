# English Writing offer verification

Internal record of what the current English Writing offer can and cannot claim publicly on
`/courses/english-writing`. This is a maintenance document — none of the internal states below are
rendered on the public page, and nothing here should be read as legal, academic-integrity or other
professional advice, or as an answer on Aisha's behalf.

**Last reviewed:** English Writing Step 2 (29 August 2026).

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
| Whether writing tasks are assigned | Unverified — do not publish | No English Writing-specific record exists | None. Do not say assignments are included | — | Confirm whether writing tasks/assignments are part of the current offer |
| Feedback method, depth and frequency | Unverified — do not publish | No English Writing-specific record exists | None. Do not say "detailed feedback" is included | — | Confirm the feedback method, depth and frequency for the current offer |
| Feedback turnaround time | Unverified — do not publish | No English Writing-specific record exists | None. Do not promise a turnaround time | — | Confirm any feedback turnaround commitment |
| Number of drafts or revisions | Unverified — do not publish | No English Writing-specific record exists | None | — | Confirm whether a specific number of drafts/revisions is offered |
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

## Step 2 public guidance decisions

These decisions describe non-operational learner guidance. They do not verify a package, delivery
format or teaching inclusion:

| Public guidance | Current status | Basis | Approved boundary | Files affected |
|---|---|---|---|---|
| Four-part writing profile | Published as bounded educational guidance | Helps a visitor describe writing type, reader/purpose, current difficulty and whether the need belongs on a named exam route | Must remain a reflection guide, never a formal assessment, diagnostic, placement or level result | `content/englishWriting.ts`; `EnglishWritingProfile.tsx` |
| Six-area writing-development framework | Published as bounded educational guidance | Organises the existing broad writing positioning into purpose/task, sentence control, paragraph development, organisation/cohesion, vocabulary/tone and revision/self-review | Must not imply a fixed sequence, equal coverage, lesson count, assignments or feedback package | `content/englishWriting.ts`; `EnglishWritingFramework.tsx` |
| Study, workplace and everyday context map | Published as bounded educational guidance | Shows how emphasis can change with writing purpose and reader | Examples are not guaranteed inclusions; exact document types remain subject to confirmation | `content/englishWriting.ts`; `EnglishWritingContextMap.tsx` |
| Learning/authorship boundary | Published as bounded educational guidance | The site markets teaching and learner development, not completion or concealment services | No assessed-work completion, plagiarism disguise or authorship misrepresentation is offered or implied | `content/englishWriting.ts`; `EnglishWritingContextMap.tsx` |

## What the public page currently says instead (as of English Writing Step 2)

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
The exact teaching sequence, teaching/feedback process, evidence, learning format, pricing, a
dedicated availability component, specialist FAQ and enquiry-handoff form variant remain
deliberately deferred to their own later English Writing steps. Step 2's public framework is not an
operational promise that all areas are included or taught in a fixed order.

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

Until these are answered, the public page deliberately shows only the verified positioning, fit
guidance, non-scored writing profile, possible-priorities framework, context mapping,
route-selection guidance, the fail-closed availability state, and a WhatsApp/email path to ask
Aisha directly — never an invented format, formal level, fixed module order, duration, fee,
feedback promise or intake.
