# IELTS offer verification

Internal record of what the current IELTS offer can and cannot claim publicly on
`/courses/ielts`. This is a maintenance document — none of the internal states below are
rendered on the public page, and nothing here should be read as legal advice or as an answer on
Aisha's behalf.

**Last reviewed:** IELTS Step 8.

## FAQ (IELTS Step 8)

`components/ielts/IELTSFAQ.tsx` renders exactly eight questions from the dedicated
`content/ieltsFaqs.ts` — never `content/faqs.ts`'s `generalFaqs`. Every operational answer either
avoids stating an unconfirmed specific (feedback, preparation time, guarantee) or points to this
page's own verified Steps 5-7 sections instead of restating a number that can drift (the
current-offer answer links to `#ielts-learning-format`, the pricing section and
`#ielts-availability`).

### Global FAQ audit (`content/faqs.ts`)

Seven existing global entries were checked against this document for a cross-site contradiction.
Six asserted an unconfirmed universal claim and were rewritten conservatively (kept `published:
true`, wording corrected to "confirmed per programme/current option" rather than asserted as
fact); one was reviewed and left unchanged.

| Global FAQ id | Outcome |
|---|---|
| `live-or-recorded` | Rewritten — no longer asserts "live on Zoom" or "every current programme includes a recording" |
| `missed-class` | Rewritten — no longer assumes a recording is always available |
| `new-batches` | Rewritten — no longer implies a regular recurring cadence |
| `mock-exams` | Rewritten — no longer names IELTS (or PTE/TOEFL/O & A Level) as including a specific mock quantity |
| `one-to-one-help` | Rewritten — no longer asserts "most programmes include" one-to-one |
| `platform` | Rewritten — no longer asserts "All classes run live on Zoom" |
| `personal-feedback` | Reviewed, unchanged — doesn't assert an unconfirmed frequency, turnaround or delivery method |

None of the seven ids are part of `homepageFaqs` or `courseHubFaqs`'s curated selections, so these
corrections only affect the full `/faq` page — no other selector was at risk of breaking.

## Availability state (IELTS Step 7)

`components/ielts/IELTSAvailability.tsx` reads `getPublishedUpcomingBatches("ielts")` from
`lib/batches.ts`/`content/batches.ts` directly — not the shared `<BatchTable>` fallback — and
additionally requires `duration` and `schedule` before a record can render as a confirmed intake
card (see `isCompleteIeltsIntake()` in that component).

| Field | Current value |
|---|---|
| Published future IELTS intake | **None** — `content/batches.ts` has three historical records, all `status: "Closed"` and `published: false` |
| Confirmed next start date | Not applicable — no record to confirm |
| Confirmed schedule | Not applicable |
| Verified seat count | Not applicable — this site never publishes a seat count |
| Verified application/enrolment deadline | Not applicable |
| One-to-one availability | **Not modelled** — no separate record exists; see "One-to-one availability" below |
| Rendered page state | No-intake enquiry state (eyebrow "Current availability", heading "Ask about the next suitable IELTS start.") |

Until a real intake is published, `IELTSAvailability` shows the enquiry checklist (test type,
scores, deadline, country/time zone, usual availability) and one WhatsApp CTA. It does not link to
`/batches`, since that page currently has no additional IELTS availability either — doing so would
send a candidate in a conversion loop between two empty states.

### One-to-one availability

Not currently confirmed. Per the implementation prompt's Part F, publishing a one-to-one
"available" state requires separate owner confirmation of: whether the option is currently
offered, how scheduling is arranged, whether it has a distinct fee, whether there's a capacity
limit, and whether a start date is required. None of this exists yet — the no-intake enquiry may
ask a candidate's preferred format, but the page must not claim either format is actually
available until this is confirmed.

### Publishing a future IELTS batch

See `docs/updating-batches.md` section 9 for the IELTS-specific rules on top of the general batch
rules — in short: `duration` and `schedule` are required (not optional) for IELTS display, and
`status: "Filling Fast"` requires a `statusVerifiedAt` date or it displays as the neutral `Open`.

## Pricing state (IELTS Step 6)

`content/ieltsPricing.ts` is the single, gate-kept source for any IELTS fee shown on
`/courses/ielts` — `components/ielts/IELTSPricing.tsx` reads only from it, never from
`content/courses.ts`'s legacy `price`/former `discount` fields.

| Field | Current value |
|---|---|
| Pricing state | `enquire` |
| Exact approved public record | None exists |
| Confirmation date | Not applicable — no record to confirm |
| Billing basis | Not applicable |
| Applicable format | Not applicable |
| Inclusion references | Not applicable |
| Validity / review date | `lastReviewed: "2026-08-26"` on the `enquire` record |
| Policy status | Not applicable — no policy has been approved to publish |
| Legacy discount claims | **Removed** — the `discount` object ("LIMITED TIME: 40% OFF" from $75/PKR 20,000 down to $45/PKR 12,000) has been deleted from `content/courses.ts`'s `ielts` entry, not merely un-rendered |
| Next review responsibility | Whoever implements the next IELTS step, or immediately once Aisha supplies a complete approved fee — see the billing/policy question list below |

Until a complete, owner-approved record exists, `IELTSPricing` renders a fee-enquiry panel (eyebrow
"Fees and enrolment", heading "Review the complete fee before you decide.") with one WhatsApp CTA
asking Aisha to confirm the complete current offer. No payment of any kind is requested through
the website.

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

## Billing and policy questions still required (IELTS Step 6)

Before `content/ieltsPricing.ts`'s `ieltsPricing` can move from `status: "enquire"` to
`status: "published"`, every one of these needs an owner-approved answer — not one inferred from
common industry practice:

1. Is the fee per lesson, week, month, batch or complete programme?
2. How many lessons or weeks does that basis include?
3. Does the fee differ between group and one-to-one coaching?
4. Which feedback and practice items are included?
5. Are recordings included, and for how long?
6. Are mock tests included, and how many?
7. Is full payment required in advance?
8. Are instalments available?
9. Which payment methods and currencies are accepted?
10. Who pays transfer or processing fees?
11. What happens if Aisha cancels or reschedules a class?
12. What happens if a learner misses a class?
13. Is any amount refundable, and under which conditions?
14. Can an enrolment be transferred or deferred?
15. How long is a quoted fee valid?

Plus the full field list `isValidPublishedPrice()` in `content/ieltsPricing.ts` checks before any
of this can render: exact numeric amount, explicit currency (`PKR` or `USD`), a stated billing
basis, a stated duration, at least one inclusion id that matches a real
`content/ielts.ts` `delivery.supportItems` entry, an ISO `effectiveFrom` date, an ISO `verifiedAt`
date, an unexpired ISO `validUntil` date if one applies, a payment note and a policy note.
