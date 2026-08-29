# English Writing offer verification

Internal record of what the current English Writing offer can and cannot claim publicly on
`/courses/english-writing`. This is a maintenance document — none of the internal states below are
rendered on the public page, and nothing here should be read as legal, academic-integrity or other
professional advice, or as an answer on Aisha's behalf.

**Last reviewed:** English Writing Step 9 (29 August 2026).

> No operational claim moves from this document into public copy until its evidence/source and
> approved wording are recorded here first.

## Allowed internal states

- `Verified`
- `Unverified — do not publish`
- `Removed from public page`
- `Published as bounded educational guidance`
- `Unverified — do not publish amount` (pricing-specific; see the Pricing verification section)
- `No eligible record — enquiry state` (availability-specific; see the Availability verification
  section)

## Verified

| Claim / offer detail | Current status | Evidence/source | Approved public wording | Files affected | Follow-up required |
|---|---|---|---|---|---|
| Qualification | Verified | `content/site.ts`'s `qualification` | "MPhil in English Literature" | `components/english-writing/EnglishWritingAuthorityStrip.tsx` | None |
| Professional role | Verified | `content/site.ts`'s `professionalRole` | "College Lecturer" — never "University Lecturer" | `components/english-writing/EnglishWritingAuthorityStrip.tsx` | None |
| Public email | Verified | `content/site.ts`'s `email` | `aishasenglish@gmail.com` | `content/englishWriting.ts`'s `contact.email` (reads `site.email` directly) | None |
| Online delivery (website-purpose level) | Verified | Owner-confirmed business purpose — the whole site markets online English tutoring in multiple domains (same basis IELTS/PTE/TOEFL/Spoken English Step 1 each used) | "Online English tutoring." No live/synchronous, platform, group/private or recording claim | `content/englishWriting.ts`'s `hero.eyebrow`; also republished as the Step 5 "Confirmed delivery category" panel in `learningFormat.confirmedFact` | None for this fact alone |

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
| Pricing, currency, payment schedule, refunds and discounts | Unverified — do not publish amount | The legacy `PKR 10,000` in `content/courses.ts` was never verified — see that file's comment on the `price` field and the dedicated "Pricing verification" section below | None. No amount, currency, billing basis or discount | `content/courses.ts` (`price: 10000`, non-authoritative, unread by the dedicated route); `content/englishWritingPricing.ts` (the actual gate) | Confirm the current fee, currency, billing basis and policies |
| Current/future intake and capacity | No eligible record — enquiry state | No complete, owner-verified, published, non-past English Writing record exists in `content/batches.ts` (see the "Availability verification" section below for the exact resolver and current record-by-record rejection reasons) | The Step 7 enquiry-state copy in `content/englishWriting.ts`'s `availability.enquiry*` fields. Never a historical date, an inferred cadence or a scarcity claim | `content/englishWriting.ts`'s `availability`; `content/batches.ts`; `lib/batches.ts`; `components/english-writing/EnglishWritingAvailability.tsx` | Supply a genuine future intake record with every field `isCompleteEnglishWritingIntake()` requires, or continue on enquiry only |
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

## Step 5 public guidance decisions — learning format and pre-enrolment checklist

| Public guidance | Current status | Basis | Approved boundary | Files affected |
|---|---|---|---|---|
| Confirmed-delivery-category panel | Verified | Republishes the same owner-confirmed business-purpose fact already used in the hero eyebrow: "Online English tutoring" | Must state only the delivery category, with an explicit note that platform, live/asynchronous arrangement and group/private format are not yet published — never upgraded into a platform, format or schedule claim | `content/englishWriting.ts`'s `learningFormat.confirmedFact`; `EnglishWritingLearningFormat.tsx` |
| Stable educational-approach summary | Published as bounded educational guidance | Summarises the needs-led approach already established across Steps 1-4: the learner's real writing situation, connected writing priorities, focused attempts and revision decisions, and learner authorship | Must remain framed as the page's educational approach, with an explicit note that it does not confirm lesson frequency, assignments, document review, feedback method or package inclusions; must never use "you will receive" or "every lesson includes" | `content/englishWriting.ts`'s `learningFormat.approachItems` / `approachDistinctionNote`; `EnglishWritingLearningFormat.tsx` |
| Pre-enrolment confirmation checklist | Published as a fail-closed pattern — every item is a question, never an answer | Five groups (delivery/participants, timing/duration, writing practice/feedback, access/privacy/support, commercial details) covering every row marked `Unverified — do not publish` above | Must never answer a listed question by implication; must use a neutral hollow marker, never a checkmark or cross, so it cannot be mistaken for an inclusion or exclusion list | `content/englishWriting.ts`'s `learningFormat.confirmationGroups`; `EnglishWritingLearningFormat.tsx` |
| Contextual "confirm the format" CTA | Published — requests confirmation only | Asks Aisha to confirm current format, timing, writing practice, feedback arrangement, fee and relevant policies before enrolling | Must never request a document, promise a free consultation/assessment, imply availability, or imply that clicking reserves a place or starts payment | `content/englishWriting.ts`'s `learningFormat.confirmCta`; `EnglishWritingLearningFormat.tsx` |

## Pricing verification (Step 6)

| Field | Current value |
|---|---|
| Record / status | `content/englishWritingPricing.ts`'s `englishWritingPricing.status` = `"enquire"` |
| Option label | Not set — no `published` record exists |
| Amount | Not set — no `published` record exists |
| Currency | Not set — no `published` record exists |
| Billing basis | Not set — no `published` record exists |
| Format | Not set — no `published` record exists |
| Learner scope | Not set — no `published` record exists |
| Duration | Not set — no `published` record exists |
| Sessions/timing covered | Not set — no `published` record exists |
| Verified inclusions | None — a `published` record's `verifiedInclusionIds` may only reference `content/englishWriting.ts`'s `learningFormat.approachItems` ids (`real-situation`, `connected-priorities`, `focused-attempts`, `learner-authorship`), never `learningFormat.confirmationGroups`' question ids |
| Payment method/timing | Not set — no `published` record exists |
| Refund/cancellation/rescheduling policy | Not set — no `published` record exists |
| Effective date | Not set — no `published` record exists |
| Valid-until date | Not set — no `published` record exists |
| Evidence source | None. The legacy `content/courses.ts` english-writing `price: 10000` is **not** evidence — it was never verified for currency, billing basis, lesson arrangement, duration, inclusions or policy, and `content/englishWritingPricing.ts` never reads it |
| Owner approval date | None |
| Approved public wording | None — the public page shows only the enquiry state (`content/englishWriting.ts`'s `pricing.enquire`) |
| Reviewer | Claude Sonnet 5, English Writing Step 6 implementation, 29 August 2026 |
| Affected files | `content/englishWritingPricing.ts` (new); `components/english-writing/EnglishWritingPricing.tsx` (new); `content/englishWriting.ts`'s `pricing` copy object |

**Current default:**

- Status: `Unverified — do not publish amount`.
- Public behaviour: the enquiry state renders (`EnglishWritingPricing.tsx`'s first branch) — no amount, currency, billing basis, duration or inclusion appears anywhere on the public page, in page HTML, metadata, structured data, or any hidden attribute.
- Legacy `PKR 10,000`: removed/non-authoritative. It remains only inside `content/courses.ts`'s quarantined english-writing record (required by the shared `Course` type) and is never read by `content/englishWritingPricing.ts` or `EnglishWritingPricing.tsx`.
- Global `site.showPrices`/`site.currency` settings: **not evidence**. `EnglishWritingPricing.tsx` requires `site.showPrices && isValidPublishedEnglishWritingPrice(englishWritingPricing)` — `showPrices` may only ever suppress an otherwise-valid price, never substitute for verification, and no global currency setting is read by the validator at all.
- Next owner action: confirm the complete pricing record (amount, currency, billing basis, option/format, duration, coverage, schedule, payment method/timing, and cancellation/refund/rescheduling policy) before any `published` record can be written.

Implementation approval of this pricing *section* is not confirmation of any numeric fee or policy — Aisha requesting Step 6 be built does not make `PKR 10,000` or any other figure verified.

Manual validator self-test (23 cases, run against `isValidPublishedEnglishWritingPrice()`'s logic on 29 August 2026 — not committed as a permanent test file, matching the existing precedent that no other program pricing validator has one): enquire state, amount zero, negative amount, `NaN` amount, non-finite amount, unsupported currency, missing currency, blank option/format/billing-basis/duration label, unknown inclusion id, a confirmation-checklist question id used as an inclusion id, empty inclusion list, invalid `effectiveFrom`, invalid `verifiedAt`, `verifiedAt` before `effectiveFrom`, expired `validUntil`, `validUntil` before `effectiveFrom`, invalid `validUntil` format, blank payment note, blank policy note, and one complete valid published record — all 23 cases passed (every invalid case correctly rejected to the enquiry state; the one complete valid record correctly accepted). A separate live fixture test (temporarily setting `status: "published"` with a complete, clearly-marked "QA fixture" record, screenshotting the rendered published branch, then fully reverting before commit) confirmed the amount renders with `Intl.NumberFormat` currency formatting adjacent to its billing basis, only the two fixture-included inclusion ids render, and both the last-verified and valid-until dates render correctly.

## Availability verification (Step 7)

| Field | Current value |
|---|---|
| Current public state | Enquiry (`components/english-writing/EnglishWritingAvailability.tsx`'s first branch — `getPublishedUpcomingBatches("english-writing").filter(isCompleteEnglishWritingIntake)` returns an empty array) |
| Eligible record IDs | None |
| `content/batches.ts` english-writing-tagged records considered | `batch-001` (startDate `2026-07-05`, `status: "Closed"`, `published: false`, no `schedule` field) — rejected: past date, closed, unpublished, incomplete. `batch-003` (startDate `2026-08-04`, `status: "Closed"`, `published: false`, no `schedule` field) — rejected: past date, closed, unpublished, incomplete. Neither record would pass even if republished, since both are missing the required `schedule` field. |
| Timezone/date policy | `Asia/Karachi` (Pakistan Standard Time, fixed UTC+5, no daylight saving) throughout — `lib/batches.ts`'s `pakistanTodayDateOnly()`/`parsePakistanDate()`/`formatBatchDate()`, the same helpers already used by IELTS/PTE/TOEFL/Spoken English |
| Required schedule fields for a complete record | Non-empty `id`; `courseSlugs` includes `"english-writing"`; ISO `startDate`; `published: true`; `status !== "Closed"`; `format` is `"Live Online Group"` or `"One-to-One"`; non-empty `duration`; non-empty `schedule`; `timezone === "Asia/Karachi"`; ISO `verifiedAt` — see `components/english-writing/EnglishWritingAvailability.tsx`'s `isCompleteEnglishWritingIntake()` |
| Expiry rules | A batch is excluded once `startDate` is strictly before today in Pakistan time, regardless of its stored `status` (`lib/batches.ts`'s `isPastBatch()`) — a statically generated page could otherwise keep showing an expired intake, which is why `app/courses/english-writing/page.tsx` now sets `export const revalidate = 3600` |
| Status/publication rules | `published: false`, `status: "Closed"`, and any record for a different `courseSlugs` are excluded before the completeness check even runs (`lib/batches.ts`'s `getPublishedUpcomingBatches()`). `"Filling Fast"` displays as the neutral `"Open"` unless the record also carries a `statusVerifiedAt` — a scarcity claim needs its own recent, manual verification, never inferred from proximity to the start date |
| Relationship to pricing verification | Kept wholly separate by design: a scheduled English Writing intake never makes `content/englishWritingPricing.ts`'s `englishWritingPricing` publishable, and a valid published price would never imply an intake is open. Neither component reads the other's data |
| Reservation wording | Enquiry state: "Sending an enquiry does not reserve a place. Wait for confirmation of availability, format, schedule and fee before making a payment. No payment is required simply to ask about availability." Scheduled state (per card): "Availability is confirmed by Aisha; sending an enquiry does not reserve a place." |
| Next review date/owner | Re-check `content/batches.ts` whenever Aisha supplies a genuine future English Writing record, or by 2026-11-29 (three months) if none has been supplied by then |
| Affected files | `content/englishWriting.ts`'s `availability`; `content/batches.ts` (read-only, unchanged this step); `lib/batches.ts` (read-only, unchanged this step — its existing helpers were already complete and reused as-is); `components/english-writing/EnglishWritingAvailability.tsx`; `app/courses/english-writing/page.tsx` (`revalidate` added) |

Manual resolver self-test (14 cases, run against `isCompleteEnglishWritingIntake()` + the shared `getPublishedUpcomingBatches()` pipeline's logic on 29 August 2026 — not committed as a permanent test file): no English Writing records, only historical records, only unpublished records, a closed record, an invalid date, incomplete schedule (missing `duration`), incomplete schedule (missing `schedule`), wrong course slug, an invalid `verifiedAt`, a complete future record, multiple complete future records sorted chronologically, a future record plus an unrelated course's record, and page behaviour after the start date passes — all 14 cases passed, plus a separate chronological-sort-order check. A separate live fixture test (temporarily adding two complete, clearly-marked "QA fixture" `content/batches.ts` records — one `"Filling Fast"` without `statusVerifiedAt`, one `"Open"` — then fully reverting before commit) confirmed both cards render with the correct date/schedule/timezone/format/duration, sort chronologically, the unverified `"Filling Fast"` status correctly downgrades to `"Open"`, each card's CTA references its exact option/date/id without reservation language, and no horizontal overflow occurs at 320/768/1440px.

## What the public page currently says instead (as of English Writing Step 9)

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
- a learning-format section (`components/english-writing/EnglishWritingLearningFormat.tsx`, id
  `english-writing-learning-format`) publishing the one verified delivery fact ("Online English
  tutoring," with an explicit note that platform, live/asynchronous arrangement and group/private
  format are not yet published), a four-item summary of the stable educational approach from Steps
  1-4 with an explicit approach-versus-inclusion distinction note, a five-group pre-enrolment
  confirmation checklist (delivery/participants, timing/duration, writing practice/feedback,
  access/privacy/support, commercial details) that only asks questions and never answers them, and
  a contextual "Confirm the current writing format" WhatsApp CTA that requests confirmation without
  requesting a document or implying availability, payment or a reserved place;
- a dedicated pricing section (`components/english-writing/EnglishWritingPricing.tsx`, id
  `english-writing-pricing`) that currently renders only the fail-closed enquiry state — no amount,
  currency, billing basis, duration or inclusion appears anywhere on the page — because
  `content/englishWritingPricing.ts`'s `englishWritingPricing.status` is `"enquire"`. The enquiry
  panel states plainly that a complete current price has not been verified for publication and asks
  Aisha to confirm the exact amount, currency, billing basis, coverage and payment/cancellation
  terms, with one WhatsApp CTA ("Ask for the current fee") that requests confirmation only;
- a route-guidance section (`components/english-writing/EnglishWritingRouteGuidance.tsx`, id
  `english-writing-route-guidance`) distinguishing general English Writing coaching from IELTS/PTE/
  TOEFL Writing preparation and O/A Level English, each with a real internal link;
- a date-aware availability section (`components/english-writing/EnglishWritingAvailability.tsx`,
  id `english-writing-availability`) that currently renders the enquiry state — stating plainly
  that "no future English Writing start date is currently confirmed on this page," a six-item
  "include these details" checklist (writing need, study/work/everyday context, main difficulty,
  country/timezone, usual days/times, deadline), one WhatsApp CTA, and a reservation note that
  sending an enquiry does not reserve a place and no payment is required simply to ask. The same
  component would instead render up to three complete, verified, non-past `content/batches.ts`
  cards (start date, schedule, timezone, format, duration, status, a per-card "last checked" date
  and CTA) if a genuine future record ever passes every completeness check — currently none does;
  see the "Availability verification" section above for exactly why the two existing
  english-writing-tagged records are rejected;
- a specialist FAQ (`components/english-writing/EnglishWritingFAQ.tsx`, id
  `english-writing-faq`) with exactly eight English-Writing-specific questions
  (`content/englishWritingFaqs.ts`), reusing the shared native `<details>/<summary>`
  `FAQAccordion` with English-Writing-specific items rather than its generic default list. Answers
  cover suitability, document scope, exam-route separation, learner authorship, writing samples,
  practice/feedback, current format/fee/availability, and progress expectations -- every changing
  operational fact links to its authoritative Step 5-7 section instead of duplicating a price, date
  or schedule. No `FAQPage` structured data renders anywhere on the page (deliberately deferred to
  Step 10 -- see the "Specialist FAQ (Step 8)" section above);
- an English-Writing-specific final CTA (`components/english-writing/EnglishWritingFinalCTA.tsx`)
  centralising the five-field enquiry checklist (`content/englishWritingEnquiry.ts`), one primary
  WhatsApp action, and exactly one server-decided secondary action -- the allowlisted structured
  "Send a Detailed Enquiry" form link when Formspree is genuinely configured, otherwise the
  canonical `mailto:` fallback to `aishasenglish@gmail.com` -- plus a response-expectation note
  clarifying that a full document is not needed in the first message, that an enquiry does not
  reserve a place or confirm enrolment, and that format/schedule/fee should be confirmed before
  payment. When reached via the structured-form path, `app/free-diagnostic-test?programme=english-
  writing&source=english-writing-page` locks the programme field and never calls itself a
  diagnostic, test or assessment.

It no longer shows: `<CourseHero>`/`<CourseModules>` (replaced entirely by the dedicated
components above), `<IncludedList>` (removed entirely), `<PricingCard>` (removed entirely), the
generic `<BatchTable>` "Upcoming Writing batches" section (removed entirely), or the complete
generic `FAQAccordion` list from `content/faqs.ts`'s `generalFaqs` (replaced by the Step 8
English-Writing-specific eight-question set above -- the shared `FAQAccordion` component itself is
still reused, just with different `items`). None of these render "coming soon" or an empty
heading in their place — they are simply absent until their own verified replacement step.
A specialist FAQ and enquiry-handoff form variant remain deliberately deferred to their own later
English Writing steps. Step 2's public framework is not an operational promise that all areas are
included or taught in a fixed order, Step 3's public coaching cycle and feedback framework are not
a promise that every lesson, learner or package follows an identical sequence, includes assignments
or full-draft review, or receives feedback of a specific method, frequency, depth or turnaround,
Step 4's illustrative demonstration is not a real learner's work, testimonial, graded response,
evidence of a result, or a promise that the demonstrated feedback format, full-document review,
line editing or a specific number of revisions is included in the current offer, Step 5's
learning-format section is not a promise that any platform, live/asynchronous arrangement,
group/private format, session frequency/duration, recording, assignment, feedback method, homework,
support, fee or intake is confirmed — every one of those remains a question in the pre-enrolment
checklist, not an answer — Step 6's pricing section is not evidence of a current fee: it fails
closed to a pure confirmation-request state because no complete, current, owner-verified English
Writing pricing record exists, Step 7's availability section is not evidence of a current intake:
it fails closed to the same enquiry state because neither existing english-writing-tagged
`content/batches.ts` record is published, current or complete, Step 8's specialist FAQ answers the
eight highest-value objections without inventing any operational fact those answers reference --
every changing detail is a link to its authoritative Step 5-7 section, never a duplicated amount,
date or schedule -- and Step 9's final CTA is a handoff mechanism, not a resolution: it centralises
the enquiry request and chooses a safe secondary action, but it does not confirm a format, fee,
availability or response time that Steps 5-7 have not already verified.

## Specialist FAQ (Step 8)

`content/englishWritingFaqs.ts` holds exactly eight English-Writing-specific questions, independent
of `content/faqs.ts`'s `generalFaqs`, rendered by `components/english-writing/EnglishWritingFAQ.tsx`
via the shared `FAQAccordion`.

- **Step 8 implementation date:** 2026-08-29.
- **The eight specialist questions added:** `learner-suitability`, `writing-scope`,
  `exam-route-distinction`, `authorship-boundary`, `writing-sample`, `practice-and-feedback`,
  `current-offer`, `progress-timeline` (see `content/englishWritingFaqs.ts` for the full text of
  each).
- **Answers based on verified facts:** `exam-route-distinction` restates the Step-1 route-guidance
  positioning (general writing coaching vs. IELTS/PTE/TOEFL/O-A Level) with no new claim;
  `authorship-boundary` restates the Step 3/4 learner-authorship and non-ghostwriting boundary
  already established; `writing-sample` restates the Step 4 "teaching demonstration, not learner
  evidence" boundary.
- **Answers that deliberately route unverified details to confirmation rather than answering
  directly:** `learner-suitability` (no age/proficiency level accepted as universal);
  `writing-scope` (dissertations/theses/publication/admissions/citation-system/business-document
  support not automatically included); `authorship-boundary` ("the exact boundary of any feedback
  or editing activity must be confirmed" -- no blanket "Aisha never proofreads" claim, since that
  specific policy has not been independently confirmed); `writing-sample` (sample collection,
  storage, retention and privacy all remain `Unverified — do not publish`); `practice-and-feedback`
  (method, depth, frequency, turnaround and revision count all still `Unverified — do not
  publish`); `current-offer` (links to Learning format/Pricing/Availability rather than repeating
  any amount, date or schedule, all of which remain `Unverified — do not publish`/`No eligible
  record — enquiry state`); `progress-timeline` (no universal timeline -- this document has no
  evidence that would ever support one).
- **Document-upload and privacy boundary:** `writing-sample` states directly "you do not need to
  send a full document in your first enquiry," that "the site currently has no document-upload
  workflow," and that assessed/confidential/personally sensitive material should not be sent until
  Aisha confirms how a sample would be handled -- consistent with every earlier step's fail-closed
  privacy posture (Step 4's demonstration disclosure, Step 5's access/privacy/support confirmation
  group).
- **Academic-integrity boundary:** `authorship-boundary` states directly that the page "presents
  coaching that helps learners develop and revise their own writing, not a done-for-you writing
  service," that the learner remains the author, and that the page does not offer "completion of
  assessed work, ghostwriting, plagiarism concealment or authorship misrepresentation" -- matching
  `contextMap.integrityNote` (Step 2) and the Step 4 demonstration's authorship note in substance.
- **No-guaranteed-outcome boundary:** `progress-timeline` states there is "no single honest timeline
  that applies to every learner or writing goal" and explicitly rules out "mastery, error-free
  writing, a grade, admission, publication, promotion or employment result" -- consistent with
  `demonstration.outcomeBoundary` (Step 4) and `coachingProcess.boundaryNote` (Step 3).
- **Stable anchors used for changing offer details:** `#english-writing-profile` (Step 2),
  `#english-writing-context-map` (Step 2), `#english-writing-route-guidance` (Step 1),
  `#english-writing-coaching-process` (Step 3), `#english-writing-demonstration` (Step 4),
  `#english-writing-learning-format` (Step 5), `#english-writing-pricing` (Step 6),
  `#english-writing-availability` (Step 7) -- every anchor was confirmed to exist exactly once in
  the rendered page via a live Playwright check before this step's commit. No fee, date or schedule
  is duplicated as FAQ text; each changing fact links to its authoritative section instead.
- **Shared FAQ contradictions corrected:** none needed. `content/faqs.ts` was searched for
  `english-writing`/`writing` mentions and for universal claims involving live delivery, recordings,
  group/one-to-one availability, detailed feedback, the legacy PKR 10,000 figure, recurring batches,
  fixed response times, universal refund/rescheduling terms, universal suitability, or upload
  invitations -- none were found; the two existing generic mentions of "English writing" (in the
  services-overview and course-choice FAQ entries) are already neutral and were already made
  programme-neutral by earlier IELTS/PTE/TOEFL/Spoken English Step 8 work. No edit to
  `content/faqs.ts` was made this step. `components/FAQAccordion.tsx` already provides visible
  `:focus-visible` styling (global `app/globals.css` rule) and already respects
  `prefers-reduced-motion`, so no change to the shared component was needed either -- confirmed by
  inspection, not assumed.
- **FAQPage structured data:** deliberately not added this step. Per the implementing prompt's Part
  F, final technical SEO belongs to Step 10, business answers may still contain verification-led
  enquiry states that could change before then, and FAQ rich-result eligibility/search-engine
  policy can change -- confirmed via live Playwright check that zero `FAQPage`-typed
  `application/ld+json` blocks render anywhere on `/courses/english-writing`. Record this decision
  for Step 10 review.

## Final CTA and enquiry handoff (Step 9)

`content/englishWritingEnquiry.ts` is now the single canonical source for the final-stage enquiry
fields and the full WhatsApp/form-fallback/email message text — `content/englishWriting.ts`'s
`finalCta` holds only structural copy (eyebrow, heading, body, button labels, response
expectation). `components/english-writing/EnglishWritingFinalCTA.tsx` was rewritten to mirror
`components/spoken-english/SpokenEnglishFinalCTA.tsx`, `components/toefl/TOEFLFinalCTA.tsx` and
`components/pte/PTEFinalCTA.tsx` exactly.

- **Step 9 implementation date:** 2026-08-29.
- **Canonical final enquiry fields** (`englishWritingEnquiryFields`, exactly five items, matching
  the implementing prompt's own required-information list verbatim): what you need to write; who
  will read it and what it should achieve; what currently feels difficult; any relevant deadline;
  country/timezone and usual days/times.
- **WhatsApp/form/email action logic:** WhatsApp is always the primary action
  (`englishWritingFinalEnquiry.whatsappMessage`). The secondary action is decided on the server via
  `formsAreConfigured()` — the allowlisted detailed-enquiry link
  (`/free-diagnostic-test?programme=english-writing&source=english-writing-page`) when Formspree is
  genuinely configured, otherwise the canonical `mailto:` built from `site.email` via `emailLink()`
  with `englishWritingFinalEnquiry.emailSubject`/`emailBody`. Exactly two final actions ever render;
  WhatsApp, the detailed form and email are never shown simultaneously.
- **Form configuration fail-closed behaviour:** unchanged shared logic
  (`lib/forms.ts`'s `isValidFormspreeEndpoint()`/`formsAreConfigured()`) — an empty, placeholder,
  non-HTTPS, wrong-host or malformed endpoint always falls back to the email action, never a broken
  form link. Verified live this step with a temporary local-only `.env.local` Formspree URL fixture
  (see "Verification performed" below) and confirmed reverted before this commit.
- **Allowlisted programme and source values:** `lib/enquiryQuery.ts`'s `EnquirySource` gained
  `"english-writing-page"`, `EnquiryVariant` gained `"english-writing"`, and `PROGRAMME_QUERY_MAP`
  maps only the exact key `"english-writing"` to the locked programme label `"English Writing"`
  (deliberately defined fresh in `content/englishWritingEnquiry.ts`, not imported from
  `content/courses.ts`'s legacy `tagline`/`price`/`modules`/`includes`). Any other value (wrong
  case, whitespace, script/HTML-like input, excessively long input, unknown programme, missing
  source) falls back to the general form — confirmed via a 15-case manual query-resolution
  self-test.
- **Shared form field relabelling, not a bespoke field set:** `components/DiagnosticForm.tsx`'s
  three free-text fields are relabelled for this variant (`situation` → "Writing situation and
  current difficulty"; `goalTimeline` → "Type of writing, reader/purpose and deadline, if any";
  `location` → "Country, time zone and usual availability") rather than adding a new bespoke
  10-field form, per the implementing prompt's own "extend the existing shared form architecture
  rather than cloning it" instruction and matching the Spoken English Step 9 precedent exactly.
- **Privacy/data-minimisation boundaries:** the form requests no document, file, attachment,
  assessed-assignment text, payment/card/bank data, national ID/passport/address, employer/school
  name, or marketing consent. No file or audio input exists on the English Writing form variant
  (verified live; the shared `DiagnosticForm.tsx` markup used by every variant already has none).
  The shared `leadCapture.privacyNote` ("used only to respond to this enquiry... not added to a
  marketing list") renders unchanged. No new marketing-consent checkbox was added.
- **Confirmation that submission does not reserve a place or require payment:** the response
  expectation states directly: "sending an enquiry does not reserve a place or confirm enrolment,
  and format/schedule/fee should be confirmed before payment." No response-time commitment is made
  anywhere.
- **Unresolved response-time, format, fee and availability facts:** unchanged from Steps 5-7 — all
  remain `Unverified — do not publish` / `No eligible record — enquiry state` (see the tables
  above). Step 9 does not resolve any of them; it only builds the handoff mechanism that requests
  them.
- **Shared "What happens next" correction (Part F):** `app/free-diagnostic-test/page.tsx`'s
  `WHAT_HAPPENS_NEXT` map gained an `"english-writing"` override
  (`englishWritingFormVariant.whatHappensNext`) so this variant's page never implies a document or
  work-sample review — the shared list's exam-preparation-specific third line ("...she may ask for
  an exam code, current score or short work sample") was never shown for this variant.
- **Structured-form visible copy never calls this a diagnostic, test or assessment:** confirmed
  live — the page heading reads "Send a detailed English Writing enquiry" and the subtitle
  describes reviewing writing situation/difficulty/type/availability, never a score, level or
  scored placement.
- **Analytics boundary preserved:** `"english-writing"` was deliberately added to neither
  `ANALYTICS_PROGRAMME_BY_VARIANT` nor `ANALYTICS_SOURCE_BY_VARIANT` in
  `components/DiagnosticForm.tsx` — no `assessment_form_start/submit/error` event fires for this
  variant until a reviewed Step 12 extension formally adds it to `lib/analytics`'s allowlists,
  mirroring the Spoken English Step 9 precedent exactly. No writing type, difficulty, deadline,
  timezone, contact information or message content was added to any analytics payload.
- **Verification performed:** a temporary `.env.local` fixture (a syntactically valid but
  non-existent `https://formspree.io/f/qatest123` endpoint) was used to exercise the
  form-configured secondary-action branch and the structured form's locked programme, relabelled
  fields, honeypot and absence of a file input; a real submission was attempted against that fake
  endpoint (which genuinely fails, since the form ID does not exist) to confirm the failure path
  preserves entered values, shows a specific error message, and offers the WhatsApp fallback
  without ever exposing the endpoint value — no fabricated success state was shown, and no real
  third-party submission ever succeeded or was expected to. The `.env.local` file was deleted
  before this commit; confirmed via `grep` for the fixture value (none found) and `ls` showing only
  `.env.example` remains.

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

## Step 5 reconciliation check

Before building the learning-format section, re-confirmed via targeted search that
`/courses/english-writing` does not publicly render `Live Zoom classes (recorded)`, `Writing
assignments with detailed feedback`, `Regular tests`, `1-on-1 review option`, PKR 10,000 or another
unverified fee, `Upcoming Writing batches`, `recordings included`, `group or one-to-one`, or a fixed
duration/frequency. None of these appear on the dedicated route; the only remaining hits are the
already-quarantined legacy `content/courses.ts` record (unread by the dedicated route) and this
document's own explanatory text. `content/coursePresentation.ts` and `content/homeCourses.ts` were
re-inspected and already say "Online coaching · Confirm current format and support," consistent
with the new learning-format section, so neither file needed an edit for Step 5. No shared
`LearningFormats` or `IncludedList` component was imported onto the route.

## Step 6 reconciliation check

Searched every public English Writing surface (the dedicated route, its page HTML source including
hidden attributes, the homepage course card, the Courses hub card, metadata and structured data) for
`price: 10000`, `PKR 10,000`, `10,000`, `10000`, `showPrices`, `currency`, `one-time`, `per course`,
`monthly`, `per session`, `package`, `starting from`, `fee`, `discount`, `refund`, `cancellation`,
`reschedule`, `missed class`, `expiry`, and Offer/Product/PriceSpecification JSON-LD. No amount,
currency, billing basis, or price-related structured data appears anywhere on the public page in the
default (`enquire`) state — confirmed by both manual inspection and an automated Playwright sweep of
the rendered page text and full HTML source. The only remaining hits for the legacy figure are
inside the already-quarantined `content/courses.ts` record (required by the shared `Course` type,
never read by `content/englishWritingPricing.ts`) and this document's own explanatory text. No
shared programme's pricing was altered, and no offer/product price schema was added to this or any
other page.

## Step 7 reconciliation check

Searched every public English Writing surface for `open`, `closed`, `available`, `filling fast`,
`next batch`, `upcoming`, `new batch`, `start date`, `registration`, `limited seats`, `seats left`,
`reserve`, `secure your place`, `waitlist`, `group`, `cohort`, `one-to-one`, `private`,
`individual`, `rolling`, `start anytime`, and `flexible schedule`. In the default enquiry state, the
only matches are the enquiry copy's own neutral references (e.g. "available" inside "confirm
whether a suitable current option is available") — no scarcity, group/private, recurring or
rolling-enrolment claim appears. `content/batches.ts` was re-inspected in full: its two
english-writing-tagged records (`batch-001`, `batch-003`) are both past-dated, `status: "Closed"`,
`published: false`, and missing the required `schedule` field, so neither can render as a current
option under any circumstance without a genuine data update. No record's `published` flag was
changed, no closed record was reopened, and no date was generated from historical spacing. The
generic `<BatchTable>` component remains absent from the dedicated route, confirmed by inspecting
`app/courses/english-writing/page.tsx`'s imports.

## Step 8 reconciliation check

Searched `content/englishWritingFaqs.ts` and the rendered FAQ section for `beginner`,
`intermediate`, `advanced`, `adult`, `child`, `age`, `CEFR`, `placement`, `diagnostic`,
`level test`, `assessment`, `dissertation`, `thesis`, `application`, `publication`,
`proofreading`, `editing`, `rewriting`, `ghostwriting`, `plagiarism`, `originality`, `citation`,
`AI detection`, `upload`, `storage`, `feedback`, `correction`, `marking`, `revisions`,
`turnaround`, `homework`, `recordings`, `materials`, `support`, `live`, `Zoom`, `group`,
`private`, `one-to-one`, `duration`, `frequency`, `schedule`, `start date`, `fee`, `price`,
`payment`, `refund`, `cancellation`, `grades`, `admissions`, `promotion`, `employment`, and
`guaranteed`. Every match is either a boundary-setting negation (e.g. "not a done-for-you writing
service," "no document-upload workflow," "not automatically included," "no single honest
timeline") or a routing reference to a verified Step 5-7 section -- no answer asserts an age/level/
document-scope/delivery claim, invites document upload, offers proofreading/rewriting/ghostwriting,
publishes a feedback method/frequency/turnaround/revision count, duplicates a price/date/schedule,
or promises a grade/admission/publication/employment/progress-timeline outcome. `content/faqs.ts`
was also searched for the same terms in an English-Writing-specific context; no contradiction was
found (see the "Specialist FAQ (Step 8)" section above for the full audit). No `FAQPage`,
`Review`, `Rating` or `Offer` structured data was added anywhere on the page.

## Step 9 reconciliation check

Searched every English Writing CTA label, WhatsApp message and email template for `free
diagnostic`, `free assessment`, `consultation`, `book`, `enrol`, `reserve`, `secure seat`, and any
fixed response-time promise -- none found; every enquiry-related string states or implies only a
fit/availability discussion. Checked `content/englishWritingEnquiry.ts`'s WhatsApp message and
email body for personal data placed in a way that would leak into logs or browser history beyond
what the visitor explicitly typed into a `wa.me`/`mailto:` link (the same pattern already accepted
for every other program) -- no additional exposure introduced. Confirmed via `grep` that the
Formspree endpoint value is never rendered in any English Writing page component, comment intended
for public copy, or content string. Confirmed `lib/enquiryQuery.ts`'s new `"english-writing"` /
`"english-writing-page"` entries only ever activate on an exact, case-sensitive match (15-case
manual self-test, all passed) and that the existing `"ielts"`/`"pte"`/`"toefl"`/`"spoken-english"`
entries are byte-for-byte unchanged. No file, upload, rich-text, booking, payment, CRM, chat or
marketing-opt-in element was added anywhere in this step.

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
28. Is there a genuine future English Writing intake to publish? If so, supply every field
    `isCompleteEnglishWritingIntake()` requires (stable id, exact start date, confirmed
    `"Live Online Group"` or `"One-to-One"` format, duration, schedule, and a recent
    `verifiedAt`) rather than reopening or republishing either of the two existing closed,
    unpublished records.

Until these are answered, the public page deliberately shows only the verified positioning, fit
guidance, non-scored writing profile, possible-priorities framework, context mapping, the adaptable
coaching cycle and feedback framework, one clearly disclosed illustrative teaching demonstration,
one verified delivery fact with a five-group pre-enrolment confirmation checklist in place of every
unresolved operational detail, a fail-closed pricing enquiry state in place of any amount, a
date-aware availability section that fails closed to the same enquiry state until a genuine future
record passes every completeness check, an eight-question specialist FAQ that routes every
changing detail to those same verified sections, route-selection guidance, and a centralised final
enquiry handoff (WhatsApp primary, a safe server-chosen secondary action) that requests exactly the
context needed to assess fit — never an invented format, formal level, fixed module order,
duration, fee, feedback promise, intake, response-time commitment, or real learner evidence that
hasn't passed the publication guard.
