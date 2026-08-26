# IELTS offer verification

Internal record of what the current IELTS offer can and cannot claim publicly on
`/courses/ielts`. This is a maintenance document — none of the internal states below are
rendered on the public page, and nothing here should be read as legal advice or as an answer on
Aisha's behalf.

**Last reviewed:** IELTS Step 5.

## Allowed internal states

- `Owner confirmed`
- `Needs owner confirmation`
- `Not included`
- `Not applicable`
- `Removed from public page`

## Operational facts

| Item | State | Approved wording | Confirmed | Source | Next review |
|---|---|---|---|---|---|
| Online delivery | **Owner confirmed** | "IELTS coaching is delivered online." | Step 5 — based on the owner-confirmed business purpose (the whole site markets online English tutoring) | Owner statement, recorded in IELTS Step 5's implementation brief | — |
| Synchronous/live delivery | Needs owner confirmation | — | — | — | Ask before re-adding "live" anywhere on this page |
| Platform (e.g. Zoom) | Needs owner confirmation | — | — | — | Ask before naming any platform publicly |
| Group availability | Needs owner confirmation | — | — | — | — |
| One-to-one availability | Needs owner confirmation | — | — | — | Also confirm whether it's included or separately priced |
| Maximum group size | Needs owner confirmation | — | — | — | — |
| Class duration | Needs owner confirmation | — | — | — | — |
| Course duration | Needs owner confirmation | — | — | — | — |
| Schedule and time zone | Needs owner confirmation | — | — | — | Note: business timezone is Asia/Karachi (`content/site.ts`), but that alone doesn't confirm a class schedule |
| Recording availability | Needs owner confirmation | — | — | — | — |
| Recording access duration | Needs owner confirmation | — | — | — | Only relevant once recording availability itself is confirmed |
| Guided practice | Owner confirmed (method only) | "Apply each lesson through relevant Listening, Reading, Writing or Speaking work before moving to broader timed practice." | Step 5, describing the teaching method already approved in Steps 2-4 | IELTS Steps 2-4 content, approved and implemented | — |
| Writing feedback frequency and format | Needs owner confirmation | — | — | — | — |
| Speaking feedback frequency and format | Needs owner confirmation | — | — | — | — |
| Listening and Reading review | Owner confirmed (method only) | "Review why an answer was missed so future practice targets vocabulary, evidence, attention, answer handling or time-management problems." | Step 5, describing the teaching method already approved in Steps 3-4 | IELTS Steps 3-4 content, approved and implemented | — |
| Practice-test frequency | Needs owner confirmation | — | — | — | Do not publish "weekly" without this |
| Number of full mocks | Needs owner confirmation | — | — | — | Do not publish "full-length mocks included" without a quantity and scope |
| Materials/resources included | Needs owner confirmation | — | — | — | — |
| Response/feedback turnaround time | Needs owner confirmation | — | — | — | — |
| Current fee and billing basis | Needs owner confirmation | — | — | — | Pricing is separately out of scope until `docs/launch-verification.md`'s conditions are met |
| Missed-class / rescheduling / cancellation / refund policy | Needs owner confirmation | — | — | — | — |

## Legacy `content/courses.ts` inclusion claims

The `ielts` entry's `includes` array still lists five items inherited from the generic
course-template data:

| Claim | State |
|---|---|
| `Live Zoom classes (recorded)` | **Removed from public page** |
| `Weekly practice tests` | **Removed from public page** |
| `Full-length mock exams` | **Removed from public page** |
| `Personal feedback on writing & speaking` | **Removed from public page** |
| `1-on-1 consultation option` | **Removed from public page** |

As of IELTS Step 5, `/courses/ielts` no longer renders `<IncludedList course={course} />` and no
longer reads `course.includes` at all — see `components/ielts/IELTSLearningFormat.tsx` for the
verified replacement section. The field itself still exists on the `ielts` record in
`content/courses.ts` (commented there as not publication-authoritative for this page) because
the shared `Course` type and other course pages' own `<IncludedList>` renders still depend on
every record having an `includes` array. None of these five claims is independently confirmed —
removing the render is not the same as confirming or disproving any of them.

## What the public page currently says instead

Per IELTS Step 5, `components/ielts/IELTSLearningFormat.tsx` shows only:

- the confirmed fact that coaching is delivered online;
- four stable learning-method items already approved in Steps 2-4 (teacher-led online
  explanation, focused IELTS practice, Writing/Speaking review, Listening/Reading error
  analysis) — no frequency, quantity or turnaround time attached to any of them;
- a checklist of eight operational questions a candidate should confirm before paying, presented
  as questions (hollow-circle markers), never as confirmed inclusions (no checkmarks);
- one contextual WhatsApp CTA asking Aisha to confirm the complete current offer.

No availability link was added next to the checklist because there is currently no published,
non-expired IELTS batch in `content/batches.ts` to link to (see `lib/batches.ts` — every existing
batch record is closed and unpublished). Add one only once a real upcoming IELTS intake is
published.

## Open questions for Aisha

1. Is every current IELTS option live (synchronous), or does any option involve pre-recorded or
   asynchronous instruction?
2. What platform is used for live sessions, if any?
3. Is a live/small-group format currently offered for IELTS, a one-to-one format, or both?
4. If one-to-one is offered, is it included in the standard fee or a separate paid option?
5. What is the current maximum group size, if group format is offered?
6. What is the length of one class, and the total programme duration?
7. What is the current schedule (days/times) and which time zone is it fixed to?
8. Are class recordings provided, and if so, for how long can a learner access them?
9. How often is Writing marked, and how is the feedback delivered?
10. How is Speaking feedback delivered (live in class, recorded and reviewed, written notes)?
11. Are practice tests offered at a fixed frequency (e.g. weekly), or does this vary by intake?
12. How many full-length mock exams, if any, are included in the current option?
13. What materials or resources (worksheets, question banks, platform access) are included?
14. What is the normal turnaround time for feedback on a submitted response?
15. What is the current fee and billing basis for IELTS coaching?
16. What is the missed-class, rescheduling, cancellation and refund policy?

Until these are answered, `IELTSLearningFormat` deliberately shows the checklist above instead of
stating any of these as an inclusion.
