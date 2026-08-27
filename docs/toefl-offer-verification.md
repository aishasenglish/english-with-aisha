# TOEFL offer verification

Internal record of what the current TOEFL iBT offer can and cannot claim publicly on
`/courses/toefl`. This is a maintenance document — none of the internal states below are rendered
on the public page, and nothing here should be read as legal advice, visa advice, admissions
advice or an answer on Aisha's behalf.

**Last reviewed:** TOEFL Step 1.

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
| Online delivery | **Owner confirmed** | Based on the owner-confirmed business purpose (the whole site markets online English tutoring) — consistent with the IELTS/PTE precedent. Not yet reflected in a dedicated TOEFL learning-format section (a later step). |
| Delivery platform | Needs owner confirmation | Not confirmed as Zoom or any other named platform. |
| Live/asynchronous format | Needs owner confirmation | — |
| Group availability | Needs owner confirmation | — |
| One-to-one availability | Needs owner confirmation | Including whether it's included or separately priced. |
| Group-size limit | Needs owner confirmation | — |
| Programme duration | Needs owner confirmation | — |
| Schedule and time zone | Needs owner confirmation | Business timezone is Asia/Karachi (`content/site.ts`), but that alone doesn't confirm a class schedule. |
| Recording availability | Needs owner confirmation | — |
| Recording access period | Needs owner confirmation | Only relevant once recording availability itself is confirmed. |
| Starting-point/diagnostic process | Needs owner confirmation | Whether a starting assessment exists before a study plan is set. |
| Lesson frequency | Needs owner confirmation | — |
| Official vs. teacher-created practice materials | Needs owner confirmation | Whether genuine ETS-licensed practice material is used, teacher-created material, or both. |
| Timed-practice frequency | Needs owner confirmation | — |
| Full mock availability and quantity | Needs owner confirmation | — |
| Speaking and Writing feedback method/frequency | Needs owner confirmation | — |
| Feedback turnaround | Needs owner confirmation | — |
| Support between sessions | Needs owner confirmation | — |
| Rescheduling and missed-class policy | Needs owner confirmation | — |
| Home Edition candidates — different guidance | Needs owner confirmation | Whether TOEFL iBT Home Edition candidates receive any preparation guidance distinct from test-centre candidates. |
| TOEFL Essentials offered separately | Needs owner confirmation | TOEFL Essentials is a different, shorter test (see `docs/toefl-content-sources.md`) — do not create TOEFL Essentials coaching content unless Aisha confirms it as a separately offered service. |
| TOEFL ITP offered separately | Needs owner confirmation | TOEFL ITP is a different, institution-administered test — same rule as TOEFL Essentials above. |

## Pricing facts

| Item | State | Notes |
|---|---|---|
| Current amount | Needs owner confirmation | The legacy `PKR 10,000` in `content/courses.ts` was never verified — see that file's comment on the `price` field. |
| Currency | Needs owner confirmation | — |
| Billing basis | Needs owner confirmation | Per lesson, week, month, batch or complete programme — not recorded. |
| Group vs. one-to-one fee | Needs owner confirmation | — |
| Duration covered | Needs owner confirmation | — |
| Inclusions | Needs owner confirmation | See operational facts above. |
| Recordings, mocks and platform access included | Needs owner confirmation | — |
| Instalments / payment schedule | Needs owner confirmation | — |
| Accepted payment methods | Needs owner confirmation | — |
| International transfer/currency policy | Needs owner confirmation | — |
| Refund, cancellation, rescheduling and transfer policy | Needs owner confirmation | — |
| Quotation validity date | Needs owner confirmation | — |
| Owner verification date | Not applicable | No record has been verified yet. |

## What the public page currently says instead (as of TOEFL Step 1)

`/courses/toefl` shows only:

- a TOEFL-iBT-specific hero, authority strip and exact-requirement qualifier
  (`components/toefl/TOEFLHero.tsx`, `TOEFLAuthorityStrip.tsx`, `TOEFLFit.tsx`), positioning the
  page around the candidate's own confirmed institution, test date and score requirement rather
  than a broad worldwide-admissions claim;
- a temporary, officially-sourced current-format curriculum preview
  (`components/toefl/TOEFLCurriculumPreview.tsx` — corrects the pre-2026 "Integrated and
  independent Writing tasks" / "Speaking responses that score" labels that previously rendered);
- the shared, fail-closed availability fallback (`components/BatchTable.tsx`, extended in this
  step with optional `emptyStateHeading`/`emptyStateBody` props) at `id="toefl-availability"`,
  correctly showing "ask about the next suitable TOEFL start" since no TOEFL batch is published,
  with a TOEFL-specific WhatsApp fallback message requesting the exact institution, score
  requirement, scale, deadline, time zone and usual availability;
- a TOEFL-specific final CTA (`components/toefl/TOEFLFinalCTA.tsx`) with a single WhatsApp action,
  reusing the hero's exact message.

It no longer shows: `<CourseHero>`/`<CourseModules>` (replaced entirely by the dedicated
components above), `<IncludedList>` (removed entirely), `<PricingCard>` (removed entirely), or the
generic 17-item `<FAQAccordion />` (removed entirely). None of these render "coming soon" or an
empty heading in their place — they are simply absent until their own verified replacement step.
Detailed score-profile/curriculum, coaching process, feedback demonstration, evidence, learning
format, pricing, a dedicated availability component, a specialist FAQ and the enquiry-handoff form
variant all remain deliberately deferred to their own later TOEFL steps, mirroring the IELTS and
PTE sequence.

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

Until these are answered, the public page deliberately shows only the verified positioning,
test-qualifier and current-format-preview content, plus a WhatsApp path to ask Aisha directly —
never an invented format, fee, mock count, diagnostic offer or inclusion.
