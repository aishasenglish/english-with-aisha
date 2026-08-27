# TOEFL offer verification

Internal record of what the current TOEFL iBT offer can and cannot claim publicly on
`/courses/toefl`. This is a maintenance document — none of the internal states below are rendered
on the public page, and nothing here should be read as legal advice, visa advice, admissions
advice or an answer on Aisha's behalf.

**Last reviewed:** TOEFL Step 6.

## Allowed internal states

- `Owner confirmed`
- `Needs owner confirmation`
- `Not included`
- `Not applicable`
- `Removed from public page`

## Format-currency facts

| Item | State | Notes |
|---|---|---|
| Coaching covers tests taken on/after 21 January 2026 | Needs owner confirmation | The public page now describes the current post-transition format (see `docs/toefl-content-sources.md`), but whether the actual coaching content/practice has been rebuilt around it needs Aisha's confirmation before any operational claim is made. |
| Candidates with an older (pre-21-January-2026) score report supported | Needs owner confirmation | Whether retakers moving from the old to the new format receive any different guidance. |

## Operational facts

| Item | State | Notes |
|---|---|---|
| Online delivery | **Owner confirmed** | Based on the owner-confirmed business purpose (the whole site markets online English tutoring) — consistent with the IELTS/PTE precedent. Now reflected in the dedicated TOEFL learning-format section (TOEFL Step 5, `components/toefl/TOEFLLearningFormat.tsx`): "TOEFL iBT coaching is delivered online." |
| Synchronous/live delivery | Needs owner confirmation | Not asserted as standard to every current option — Step 5 lists "Live, asynchronous or mixed delivery" as a detail to confirm rather than an inclusion. |
| Asynchronous support | Needs owner confirmation | Same row as above — the exact delivery mode is not yet confirmed either way. |
| Delivery platform | Needs owner confirmation | Not confirmed as Zoom or any other named platform. |
| Group availability | Needs owner confirmation | — |
| One-to-one availability | Needs owner confirmation | Including whether it's included or separately priced. |
| Group-size maximum | Needs owner confirmation | Only relevant once group availability itself is confirmed. |
| Lesson frequency and lesson duration | Needs owner confirmation | — |
| Complete programme duration | Needs owner confirmation | — |
| Schedule and time zone | Needs owner confirmation | Business timezone is Asia/Karachi (`content/site.ts`), but that alone doesn't confirm a class schedule. |
| Recording availability | Needs owner confirmation | — |
| Recording access duration | Needs owner confirmation | Only relevant once recording availability itself is confirmed. |
| Formal starting assessment | Needs owner confirmation | Whether a starting assessment exists before a study plan is set. |
| Requirement-led explanation | **Owner confirmed (as a teaching-method description, not an operational quantity)** | Step 5's "Requirement-led instruction" support item summarises the already-approved Step 2–4 teaching model; it asserts no platform, frequency or live/asynchronous claim. |
| Guided current-task practice | **Owner confirmed (as a teaching-method description, not an operational quantity)** | Step 5's "Current-task practice" support item; asserts no official-material, weekly-test or mock-count claim. |
| Computer-test routine practice | **Owner confirmed (as a teaching-method description, not an operational quantity)** | Step 5's "Computer-test routines" support item; asserts no ETS-interface, secure-content or scoring-equivalence claim. |
| Speaking submission and feedback method | Needs owner confirmation | — |
| Writing submission and feedback method | Needs owner confirmation | — |
| Feedback frequency | Needs owner confirmation | — |
| Feedback turnaround | Needs owner confirmation | — |
| Reading and Listening review | **Owner confirmed (as a teaching-method description only)** | Step 5's "Focused response review" support item summarises the Step 3 process/Step 4 demonstration without a fixed submission allowance, review channel or turnaround; the exact review approach itself remains a Step 5 confirm-list item ("Reading and Listening review approach"). |
| Timed-practice frequency | Needs owner confirmation | — |
| Full-mock availability and quantity | Needs owner confirmation | — |
| Estimated mock-score source | Needs owner confirmation | — |
| Third-party practice-platform access and duration | Needs owner confirmation | — |
| Official ETS-licensed materials | Needs owner confirmation | Whether genuine ETS-licensed practice material is used. |
| Teacher-created materials | Needs owner confirmation | Whether teacher-created material is used, alongside or instead of official material. |
| Support between sessions | Needs owner confirmation | — |
| Current-format coaching coverage for tests taken on/after 21 January 2026 | Needs owner confirmation | Unchanged by Step 5 — the page accurately describing the public ETS format is not evidence that the actual coaching content has been rebuilt around it. See the "Format-currency facts" table above. |
| Home Edition-specific guidance | Needs owner confirmation | Whether TOEFL iBT Home Edition candidates receive any preparation guidance distinct from test-centre candidates. Step 5 lists "Test-centre or Home Edition preparation needs" as a detail to confirm; it does not present Home Edition as a separate service or score product. |
| Current fee, currency and billing basis | Needs owner confirmation | — |
| Missed-class, rescheduling, cancellation and refund policies | Needs owner confirmation | — |
| TOEFL Essentials availability as a separate service | Needs owner confirmation | TOEFL Essentials is a different, shorter test (see `docs/toefl-content-sources.md`) — do not create TOEFL Essentials coaching content unless Aisha confirms it as a separately offered service. Not mentioned anywhere on the Step 5 section. |
| TOEFL ITP availability as a separate service | Needs owner confirmation | TOEFL ITP is a different, institution-administered test — same rule as TOEFL Essentials above. Not mentioned anywhere on the Step 5 section. |
| Free diagnostic or placement test | Needs owner confirmation | TOEFL Step 3. Process copy describes reviewing "a previous report or current performance where available" — deliberately not the same claim as a formal diagnostic service. |
| Official-style predicted TOEFL score | Needs owner confirmation | TOEFL Step 3. Not published anywhere on the page; tutor feedback is explicitly distinguished from an official score. |
| Personalised written study plan | Needs owner confirmation | TOEFL Step 3. |
| Fixed number of practice tasks or marked responses per week | Needs owner confirmation | TOEFL Step 3. |
| Audio recordings retained by the tutor | Needs owner confirmation | TOEFL Step 3 — "recorded speech" in the process copy describes the Speaking response mode, not a promise that recordings are stored or returned. |
| Access to official ETS-licensed question banks | Needs owner confirmation | TOEFL Step 3 — overlaps with the "Official ETS-licensed materials" row above. |
| Proprietary practice platform or scoring dashboard | Needs owner confirmation | TOEFL Step 3. |
| Automatic error analytics | Needs owner confirmation | TOEFL Step 3. |
| One-to-one review included with every group option | Needs owner confirmation | TOEFL Step 3. |
| Support through a named app or messaging channel | Needs owner confirmation | TOEFL Step 3 — overlaps with the "Support between sessions" row above. |

## Pricing facts

**Current TOEFL pricing state: `enquire`.** `content/toeflPricing.ts` is the only
publication-authoritative TOEFL pricing source — see "Pricing authority and state" below. The
legacy `price: 10000` in `content/courses.ts` (TOEFL) is retained only for shared `Course`-type
compatibility (no consumer on `/courses/toefl` reads it — the generic `<PricingCard>` is never
imported on that route) and remains removed from public authority.

| Item | State | Notes |
|---|---|---|
| Current amount | Needs owner confirmation | The legacy `PKR 10,000` in `content/courses.ts` was never verified — see that file's comment on the `price` field. `content/toeflPricing.ts`'s `toeflPricing.amount` does not exist while `status: "enquire"`. |
| Currency | Needs owner confirmation | `content/toeflPricing.ts` only accepts `"PKR"` or `"USD"` once a record is approved — no currency is inferred from the business timezone or owner location. |
| Billing basis | Needs owner confirmation | Per lesson, week, month, batch or complete programme — not recorded. |
| Exact TOEFL iBT / current-format context for the fee | Needs owner confirmation | Whether the priced offer covers the format applicable to tests taken on or after 21 January 2026 — overlaps with the "Coaching covers tests taken on/after 21 January 2026" row above; a published price cannot assert format coverage merely because the public page describes the current ETS format elsewhere. |
| Group vs. one-to-one fee | Needs owner confirmation | Whether separate prices exist per confirmed learning format; `content/toeflPricing.ts` would store these as separate, clearly labelled records rather than one figure covering both. |
| Duration covered | Needs owner confirmation | — |
| Schedule context the price applies to | Needs owner confirmation | — |
| Inclusions | Needs owner confirmation | See operational facts above — a published price's `verifiedInclusionIds` may only reference `content/toefl.ts`'s `delivery.supportItems` (Step 5's stable teaching-method items), never Step 5's neutral `detailsToConfirm` question list. |
| Recordings, mocks and platform access included | Needs owner confirmation | — |
| Instalments / payment schedule | Needs owner confirmation | — |
| Accepted payment methods | Needs owner confirmation | — |
| International transfer/currency policy | Needs owner confirmation | — |
| Refund, cancellation, rescheduling and transfer policy | Needs owner confirmation | — |
| Effective date | Needs owner confirmation | — |
| Verification date | Not applicable | No record has been verified yet — see `toeflPricing.lastReviewed` (2026-08-27), which records when the `enquire` state itself was last reviewed against reality, not a price verification date. |
| Quotation validity date | Needs owner confirmation | — |
| Next-review date | Needs owner confirmation | To be set once a first record is approved. |
| Person responsible for future pricing review | Aisha (site owner) | Same as every other confirmation item in this document. |

## Pricing authority and state (TOEFL Step 6)

- `content/toeflPricing.ts` is the single, publication-authoritative TOEFL pricing source. It is a
  discriminated union (`status: "enquire" | "published"`) mirroring
  `content/ieltsPricing.ts`/`content/ptePricing.ts`'s established fail-closed pattern.
- Current `toeflPricing.status` is `"enquire"` (`lastReviewed: "2026-08-27"`) — no owner-approved
  fee exists, so `components/toefl/TOEFLPricing.tsx` renders only the honest fee-enquiry panel.
- `isValidPublishedTOEFLPrice()` gates the `published` branch: it rejects a missing required
  field, a zero/negative/`NaN`/non-finite amount, an unsupported currency, an empty programme,
  test-date, format, billing, duration or schedule label, any `programmeLabel` other than the
  exact string `"TOEFL iBT preparation"`, an invalid ISO date, `effectiveFrom` after `validUntil`,
  `verifiedAt` before `effectiveFrom`, an already-expired `validUntil` (checked against Pakistan
  time via `lib/batches.ts`'s `pakistanTodayDateOnly()`), an inclusion id absent from
  `content/toefl.ts`'s `delivery.supportItems`, or an empty payment/policy note. A module-level
  `assertPublishedTOEFLPriceIsValid()` call also fails the dev server/build loudly and immediately
  if the record is ever edited to `"published"` with a defect, so a content mistake is caught
  before it ships.
- `/courses/toefl` revalidates hourly (`export const revalidate = 3600` in
  `app/courses/toefl/page.tsx`), which is frequent enough that an expired `validUntil` cannot
  remain visible indefinitely once a price is eventually published.
- No exact TOEFL fee, currency, billing basis, or exact/published record exists as of this step.
  When Aisha supplies one, record the exact approved public wording, owner-confirmation date and a
  privacy-safe confirmation description here before flipping `status` to `"published"`.

## What the public page currently says instead (as of TOEFL Step 6)

`/courses/toefl` shows only:

- a TOEFL-iBT-specific hero, authority strip and exact-requirement qualifier
  (`components/toefl/TOEFLHero.tsx`, `TOEFLAuthorityStrip.tsx`, `TOEFLFit.tsx`), positioning the
  page around the candidate's own confirmed institution, test date and score requirement rather
  than a broad worldwide-admissions claim;
- an officially-verified score-requirement profile and four-skill task curriculum
  (`components/toefl/TOEFLScoreProfile.tsx`, `TOEFLTaskCurriculum.tsx` — TOEFL Step 2; the
  Step 1 temporary `TOEFLCurriculumPreview.tsx` has been removed entirely, not merely
  superseded), explaining that ETS sets no universal passing score, describing current 1–6/
  transitional 0–120 score reporting without an unofficial conversion, and covering the current
  Reading/Listening/Writing/Speaking task families with an adaptive-design note and a scoring-
  integrity note;
- a four-stage coaching-process section and feedback-by-task-type explanation
  (`components/toefl/TOEFLCoachingProcess.tsx` — TOEFL Step 3), describing the teaching cycle
  without asserting any unconfirmed quantity, platform, frequency or turnaround, and without
  claiming a guaranteed score or a reproduction of ETS's scoring system;
- an illustrative feedback demonstration and a conditional verified-evidence section
  (`components/toefl/TOEFLFeedbackDemo.tsx`, `TOEFLVerifiedEvidence.tsx` — TOEFL Step 4), the
  latter rendering nothing while `content/testimonials.ts` has no TOEFL-tagged, consent-confirmed
  entry;
- an online-delivery statement, a stable-learning-experience summary and a neutral pre-enrolment
  confirmation checklist (`components/toefl/TOEFLLearningFormat.tsx` — TOEFL Step 5, id
  `toefl-learning-format`), confirming only that TOEFL iBT coaching is delivered online;
  summarising "Requirement-led instruction", "Current-task practice", "Focused response review"
  and "Computer-test routines" as the already-approved Step 2–4 teaching model with no platform,
  frequency, live/asynchronous or quantity claim; and separately listing 15 operational details
  (format coverage, test-centre/Home Edition needs, delivery mode, group/one-to-one availability,
  platform/schedule/time zone, lesson frequency and duration, group-size limit, recordings,
  Speaking/Writing feedback, Reading/Listening review, timed-practice/mocks, practice-platform
  access, official-vs-teacher-created materials, between-session support, and fee/policies) as
  questions to confirm — using a hollow-circle marker distinct from any checkmark, an `<aside>`
  landmark separate from the support list, and a single contextual WhatsApp CTA
  ("Ask About the Current TOEFL Option") that requests the candidate's exact requirement alongside
  the current-offer confirmation, without competing with the final CTA below it;
- a fail-closed fee-enquiry panel (`components/toefl/TOEFLPricing.tsx` — TOEFL Step 6, id
  `toefl-pricing`), which is the ONLY place on the site allowed to render an exact TOEFL fee and
  currently shows only the honest "Review the complete TOEFL fee before you decide." enquiry state
  (no amount, currency, billing basis, "One-time fee", "per course", discount or scarcity
  language) because `content/toeflPricing.ts`'s `toeflPricing.status` is `"enquire"`; a single
  WhatsApp CTA ("Ask for the Current TOEFL Fee") requests the complete current offer alongside the
  candidate's exact requirement;
- the shared, fail-closed availability fallback (`components/BatchTable.tsx`, extended in an
  earlier step with optional `emptyStateHeading`/`emptyStateBody` props) at `id="toefl-availability"`,
  correctly showing "ask about the next suitable TOEFL start" since no TOEFL batch is published,
  with a TOEFL-specific WhatsApp fallback message requesting the exact institution, score
  requirement, scale, deadline, time zone and usual availability;
- a TOEFL-specific final CTA (`components/toefl/TOEFLFinalCTA.tsx`) with a single WhatsApp action,
  reusing the hero's exact message.

It no longer shows: `<CourseHero>`/`<CourseModules>` (replaced entirely by the dedicated
components above), `<IncludedList>` (removed entirely), `<LearningFormats>` (never rendered on this
route — its live-group/one-to-one/Zoom/recordings/personal-feedback copy is not owner confirmation
for the current TOEFL offer), `<PricingCard>` (removed entirely — never imported on
`/courses/toefl`, so `content/courses.ts`'s legacy `price: 10000` cannot render there), or the
generic 17-item `<FAQAccordion />` (removed entirely). None of these render "coming soon" or an
empty heading in their place — they are simply absent until their own verified replacement step. A
dedicated availability component, a specialist FAQ and the enquiry-handoff form variant all remain
deliberately deferred to their own later TOEFL steps, mirroring the IELTS and PTE sequence.

## Global FAQ audit (TOEFL Step 1)

The IELTS Step 8 and PTE Step 8 corrections to `content/faqs.ts`'s shared entries
(`live-or-recorded`, `missed-class`, `new-batches`, `fees-and-schedules`, `fees-payment`,
`mock-exams`, `one-to-one-help`, `platform`, `programmes-taught`, `personal-feedback`) already
removed their unconfirmed universal claims in favour of "confirmed per programme/current option"
wording — this already protects TOEFL too, since those answers no longer assert anything specific
to any one programme. `choosing-language-test` already links to `/courses/toefl` alongside IELTS
and PTE (added in IELTS Step 10). No further correction was needed for TOEFL in this step.

## Open questions for Aisha

1. Does current TOEFL coaching specifically cover the test format introduced 21 January 2026, or
   is a rebuild of the actual teaching content still in progress?
2. Is TOEFL iBT coaching delivered live, asynchronously, or both?
3. What platform is used for live sessions, if any?
4. Is a group format currently offered for TOEFL, a one-to-one format, or both?
5. If one-to-one is offered, is it included in the standard fee or a separate paid option?
6. What is the current maximum group size, if group format is offered?
7. What is the length of one class, and the total programme duration?
8. What is the current schedule (days/times) and which time zone is it fixed to?
9. Are class recordings provided, and if so, for how long can a learner access them?
10. Does every TOEFL learner complete a starting assessment, or is the starting point reviewed
    informally from previous results and sample work?
11. How are Speaking responses submitted and reviewed? How are Writing responses submitted and
    reviewed?
12. How frequently can a learner submit work for feedback, and what is the normal feedback
    turnaround time?
13. Are timed practice tasks included in every programme format?
14. Are official ETS-licensed resources used, teacher-created resources used, or both?
15. Are full mock tests offered, and if so, how many?
16. What support, if any, is available between classes?
17. What is the missed-class, rescheduling, cancellation and refund policy?
18. Do TOEFL iBT Home Edition candidates receive any preparation guidance different from
    test-centre candidates?
19. Is TOEFL Essentials or TOEFL ITP preparation offered as a separate service? (If not confirmed,
    no such content should ever be created.)
20. What is the current fee, currency and billing basis?
21. How long is a quoted fee valid?
22. If any third-party practice platform is used, what estimated-score source does it provide, and
    for how long can a learner access it?
23. Does the fee differ between confirmed learning formats (e.g. group vs. one-to-one)?
24. Is full payment required before the programme begins, or are instalments available, and on
    what schedule?
25. Which payment methods and currencies are accepted, and who pays transfer or processing
    charges?
26. What happens when Aisha cancels or reschedules a session, versus when a learner does?
27. Can enrolment be transferred, paused or deferred?
28. When does an approved public price take effect (`effectiveFrom`), and when should it next be
    reviewed?

Until these are answered, the public page deliberately shows only the verified positioning,
test-qualifier, current-format-preview, coaching-process, feedback-demonstration,
learning-format and fee-enquiry content, plus a WhatsApp path to ask Aisha directly — never an
invented format, platform, fee, mock count, diagnostic offer or inclusion.
