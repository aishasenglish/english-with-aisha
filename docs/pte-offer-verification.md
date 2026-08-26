# PTE offer verification

Internal record of what the current PTE Academic offer can and cannot claim publicly on
`/courses/pte`. This is a maintenance document — none of the internal states below are rendered
on the public page, and nothing here should be read as legal advice, visa advice, or as an answer
on Aisha's behalf.

**Last reviewed:** PTE Step 3.

## Allowed internal states

- `Owner confirmed`
- `Needs owner confirmation`
- `Not included`
- `Not applicable`
- `Removed from public page`

## Operational facts

| Item | State | Notes |
|---|---|---|
| Delivery platform | Needs owner confirmation | Not confirmed as Zoom or any other named platform. |
| Live/asynchronous format | Needs owner confirmation | — |
| Group availability | Needs owner confirmation | — |
| One-to-one availability | Needs owner confirmation | Including whether it's included or separately priced. |
| Group-size limit | Needs owner confirmation | — |
| Duration (class and programme) | Needs owner confirmation | — |
| Schedule and time zone | Needs owner confirmation | Business timezone is Asia/Karachi (`content/site.ts`), but that alone doesn't confirm a class schedule. |
| Recording availability | Needs owner confirmation | — |
| Recording access period | Needs owner confirmation | Only relevant once recording availability itself is confirmed. |
| Diagnostic/starting-point process | Needs owner confirmation | Whether a starting assessment exists before a study plan is set. |
| Lesson frequency | Needs owner confirmation | — |
| Timed practice frequency | Needs owner confirmation | — |
| Official vs. teacher-created practice materials | Needs owner confirmation | Whether genuine Pearson-licensed practice material is used, teacher-created material, or both. |
| Scored mock availability and quantity | Needs owner confirmation | — |
| Speaking and writing feedback method/frequency | Needs owner confirmation | — |
| Marking turnaround | Needs owner confirmation | — |
| Support between classes | Needs owner confirmation | — |
| Rescheduling and missed-class policy | Needs owner confirmation | — |
| PTE Academic UKVI candidate support | Needs owner confirmation | Same test content/format as PTE Academic, but a distinct registration/result-reference context — confirm whether it's supported as a distinct request. |
| PTE Core offered separately | Needs owner confirmation | PTE Core is a different, general-English test for specified Canadian immigration routes — do not create PTE Core coaching content unless Aisha confirms it as a separately offered service. |
| Free diagnostic assessment | Needs owner confirmation | Whether a starting assessment exists, and if so whether it's free, paid, or included only after enrolment (PTE Step 3). |
| Personalised written study plan | Needs owner confirmation | PTE Step 3. |
| Speaking-response submission and review method | Needs owner confirmation | How a candidate submits a spoken response for review, and how it's reviewed (PTE Step 3). |
| Practice-platform or AI-scoring access | Needs owner confirmation | Whether any third-party practice or scoring platform is included in the fee (PTE Step 3) — the coaching-process copy never implies the site itself contains an official test simulator or scoring dashboard. |
| Reading/Listening error review method | Needs owner confirmation | Whether errors are reviewed individually or only through answer-key explanations (PTE Step 3). |
| Mock-test estimated score | Needs owner confirmation | Whether any mock produces an estimated score and, if so, which service creates it — this must never be presented as an official-style predicted PTE score (PTE Step 3). |

## Pricing facts

| Item | State | Notes |
|---|---|---|
| Current amount | Needs owner confirmation | The legacy `PKR 10,000` in `content/courses.ts` was never verified — see that file's comment on the `price` field. |
| Currency | Needs owner confirmation | — |
| Billing basis | Needs owner confirmation | Per lesson, week, month, batch or complete programme — not recorded. |
| Group vs. one-to-one fee | Needs owner confirmation | — |
| Duration covered | Needs owner confirmation | — |
| Inclusions | Needs owner confirmation | See operational facts above. |
| Instalments / payment schedule | Needs owner confirmation | — |
| Accepted payment methods | Needs owner confirmation | — |
| International transfer/currency policy | Needs owner confirmation | — |
| Refund, cancellation, rescheduling and transfer policy | Needs owner confirmation | — |
| Quotation validity date | Needs owner confirmation | — |
| Owner verification date | Not applicable | No record has been verified yet. |

## What the public page currently says instead (as of PTE Step 3)

`/courses/pte` shows only:

- the PTE-specific hero, authority strip and test-version qualifier (`components/pte/PTEHero.tsx`,
  `PTEAuthorityStrip.tsx`, `PTEFit.tsx`);
- the officially-verified score-requirement profile and four-skill task curriculum
  (`components/pte/PTEScoreProfile.tsx`, `PTETaskCurriculum.tsx` — PTE Step 2; the earlier
  temporarily-retained `<CourseModules>` render has been fully removed, not merely superseded);
- the four-stage coaching-process section and feedback-by-response-type explanation
  (`components/pte/PTECoachingProcess.tsx` — PTE Step 3), describing the teaching cycle without
  asserting any unconfirmed quantity, platform, frequency or turnaround, and without claiming a
  guaranteed score or a reproduction of Pearson's scoring system;
- the shared, fail-closed availability fallback (`components/BatchTable.tsx`) at
  `id="pte-availability"`, correctly showing "ask about the next available intake" since no PTE
  batch is published, with a PTE-specific WhatsApp fallback message requesting the exact test,
  required score, deadline, time zone and usual availability;
- a PTE-specific final CTA (`components/pte/PTEFinalCTA.tsx`) with a single WhatsApp action.

It still does not show: `<IncludedList>` (removed entirely), `<PricingCard>` (removed entirely),
or the generic 17-item `<FAQAccordion />` (removed entirely). None of these render "coming soon"
or an empty heading in their place — they are simply absent until their own verified replacement
step. Sample feedback artefacts, testimonials, verified evidence, learning format, pricing,
availability redesign and a specialist FAQ are all deliberately deferred to their own later PTE
steps, not added here.

## Global FAQ audit (PTE Step 1)

The IELTS Step 8 corrections to `content/faqs.ts`'s shared entries (`live-or-recorded`,
`missed-class`, `new-batches`, `mock-exams`, `one-to-one-help`, `platform`) already removed their
unconfirmed universal claims in favour of "confirmed per programme/current option" wording — this
already protects PTE too, since those answers no longer assert anything specific to any one
programme. No further correction was needed for PTE in this step.

## Open questions for Aisha

1. Is PTE Academic coaching delivered live, asynchronously, or both?
2. What platform is used for live sessions, if any?
3. Is a group format currently offered for PTE, a one-to-one format, or both?
4. If one-to-one is offered, is it included in the standard fee or a separate paid option? Are
   one-to-one feedback sessions specifically included or separately priced?
5. What is the current maximum group size, if group format is offered?
6. What is the length of one class, and the total programme duration?
7. What is the current schedule (days/times) and which time zone is it fixed to?
8. Are class recordings provided, and if so, for how long can a learner access them?
9. Does every PTE learner complete a starting assessment, or is the starting point reviewed
   informally from previous results and sample work? If there is an assessment, is it free, paid,
   or included only after enrolment?
10. Is a written preparation plan provided?
11. How are Speaking responses submitted and reviewed? How are Writing responses submitted and
    reviewed?
12. How frequently can a learner submit work for feedback, and what is the normal feedback
    turnaround time?
13. Is feedback delivered in writing, audio, video, live lessons, or a combination?
14. Are Reading and Listening errors reviewed individually, or only through answer-key
    explanations?
15. Are timed practice tasks included in every programme format?
16. Are official Pearson-licensed resources used, teacher-created resources used, or both?
17. Are full mock tests offered, and if so, how many? Does any mock produce an estimated score,
    and what service creates it? (An estimated score from a mock must never be presented as an
    official-style predicted PTE score.)
18. Is any third-party practice or scoring platform included in the fee?
19. What support, if any, is available between classes?
20. What is the missed-class, rescheduling, cancellation and refund policy?
21. Is PTE Academic UKVI specifically supported, and does it require a different process?
22. Is PTE Core offered as a separate service? (If not confirmed, no PTE Core content should ever
    be created.)
23. What is the current fee, currency and billing basis?
24. How long is a quoted fee valid?

Until these are answered, the public page deliberately shows only the verified positioning,
test-qualifier and coaching-process content, plus a WhatsApp path to ask Aisha directly — never an
invented format, fee, mock count, diagnostic offer or inclusion.
