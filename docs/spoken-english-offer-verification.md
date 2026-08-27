# Spoken English offer verification

Internal record of what the current Spoken English offer can and cannot claim publicly on
`/courses/spoken-english`. This is a maintenance document — none of the internal states below are
rendered on the public page, and nothing here should be read as legal, medical, speech-language or
other professional advice, or as an answer on Aisha's behalf.

**Last reviewed:** Spoken English Step 1.

## Allowed internal states

- `Owner confirmed`
- `Needs owner confirmation`
- `Not included`
- `Not applicable`
- `Removed from public page`

## Claim and offer fields

| Claim / offer field | Current status | Evidence / source | Public wording allowed | Owner action required | Last verified |
|---|---|---|---|---|---|
| Online delivery | Owner confirmed | Website-purpose level — the whole site markets online English tutoring (owner-confirmed business purpose, same basis used for IELTS/PTE/TOEFL). | "Online Spoken English coaching." No live/synchronous, platform, group/private or recording claim. | None for this fact alone. | 2026-08-27 |
| Live/asynchronous format | Needs owner confirmation | No Spoken English-specific record exists. | None. Do not say "live" or "recorded" for this programme. | Confirm whether current coaching is live, asynchronous or mixed. | 2026-08-27 |
| Platform | Needs owner confirmation | No Spoken English-specific record exists. | None. Do not name Zoom or any other platform. | Confirm the current delivery platform, if any. | 2026-08-27 |
| Group availability | Needs owner confirmation | No Spoken English-specific record exists. | None. Do not imply a small-group format exists. | Confirm whether a group format is currently offered. | 2026-08-27 |
| One-to-one availability | Needs owner confirmation | No Spoken English-specific record exists. | None. Do not imply private coaching is currently available. | Confirm whether one-to-one coaching is currently offered, and whether it is included or separately priced. | 2026-08-27 |
| Level range | Needs owner confirmation | No Spoken English-specific record exists. | None. Do not invent beginner/intermediate/advanced tiers or a CEFR level claim. | Confirm which starting levels the current offer can genuinely support. | 2026-08-27 |
| Minimum age / adult or student scope | Needs owner confirmation | No Spoken English-specific record exists. | None. Do not state an age range or learner category as confirmed. | Confirm the intended learner age range or scope for the current offer. | 2026-08-27 |
| Duration | Needs owner confirmation | No Spoken English-specific record exists. | None. Do not state a programme length. | Confirm the current programme duration, if fixed. | 2026-08-27 |
| Session frequency | Needs owner confirmation | No Spoken English-specific record exists. | None. Do not state a weekly/monthly session count. | Confirm current lesson frequency. | 2026-08-27 |
| Recording availability / access period | Needs owner confirmation | No Spoken English-specific record exists. | None. Do not say sessions are recorded or describe an access period. | Confirm whether recordings are provided and, if so, for how long they remain accessible. | 2026-08-27 |
| Speaking-practice method | Needs owner confirmation | No Spoken English-specific record exists. | None beyond the Step 1 positioning framing (situations, priorities to discuss). Do not describe a specific practice mechanism as confirmed. | Confirm how speaking practice is actually structured in the current offer. | 2026-08-27 |
| Feedback method / frequency | Needs owner confirmation | No Spoken English-specific record exists. | None. Do not say "personal feedback" is included, nor state a frequency. | Confirm the feedback method and frequency for the current offer. | 2026-08-27 |
| Homework / self-practice expectations | Needs owner confirmation | No Spoken English-specific record exists. | None. | Confirm whether self-practice or homework is expected between sessions. | 2026-08-27 |
| Interview/presentation rehearsal inclusion | Needs owner confirmation | No Spoken English-specific record exists. | None beyond naming interviews/presentations as a possible situation to discuss (Step 1 fit section). Do not state rehearsal is an included service. | Confirm whether structured interview/presentation rehearsal is actually offered. | 2026-08-27 |
| Initial needs assessment | Needs owner confirmation | No Spoken English-specific record exists. | None. Do not describe a formal assessment, diagnostic or level test as included. | Confirm whether a starting-point assessment exists, and its form. | 2026-08-27 |
| Learner audio submission / storage | Needs owner confirmation (privacy) | No Spoken English-specific record exists; no privacy/consent mechanism exists in this codebase for audio collection. | None. Do not invite or imply audio submission, recording or storage. | Confirm whether audio is ever collected, and if so, obtain an explicit privacy/consent decision before any such feature is built. | 2026-08-27 |
| Fee, currency and billing basis | Needs owner confirmation | The legacy `PKR 10,000` in `content/courses.ts` was never verified — see that file's comment on the `price` field. | None. No amount, currency or billing basis. | Confirm the current fee, currency and billing basis. | 2026-08-27 |
| Payment / refund / rescheduling policy | Needs owner confirmation | No Spoken English-specific record exists. | None. | Confirm payment, refund and rescheduling terms for the current offer. | 2026-08-27 |
| Next intake | Needs owner confirmation | All current Spoken-English-tagged `content/batches.ts` records are historical (past dates, `"Closed"`, `published: false`). | "No future Spoken English intake is currently published" (the current Step 1 enquiry-only state). Never a historical date, an inferred cadence or a scarcity claim. | Supply a genuine future intake record with complete required fields, or confirm coaching is arranged on enquiry only. | 2026-08-27 |
| Response time | Needs owner confirmation | No documented standard exists anywhere on the site. | None. Do not promise a reply-time window. | Confirm whether Aisha wants to commit to a stated response time. | 2026-08-27 |
| Testimonial consent and direct Spoken English relevance | Needs owner confirmation | `content/testimonials.ts` currently has no entries. | None. No testimonial, quote or outcome claim may appear until a real, consent-confirmed, Spoken-English-tagged record exists. | Supply a genuine testimonial with recorded consent and a `courseSlug: "spoken-english"` tag before any evidence section is built. | 2026-08-27 |

## What the public page currently says instead (as of Spoken English Step 1)

`/courses/spoken-english` shows only:

- a Spoken-English-specific hero, compact authority strip and fit section
  (`components/spoken-english/SpokenEnglishHero.tsx`, `SpokenEnglishAuthorityStrip.tsx`,
  `SpokenEnglishFit.tsx`), positioning the page around the candidate's own real speaking
  situations (work, interviews/presentations, study, everyday communication) rather than a
  promise to "speak without hesitation";
- a temporary communication-priorities preview (`components/spoken-english/
  SpokenEnglishPrioritiesPreview.tsx`, id `spoken-english-priorities`) explicitly framed as
  "examples to discuss, not a promise that every current option includes the same syllabus" —
  Step 2 will replace this with the final learner-profile and communication curriculum;
- the fail-closed, enquiry-only availability state (`components/spoken-english/
  SpokenEnglishAvailability.tsx`, id `spoken-english-availability`), correctly showing "ask about
  the current Spoken English option" since no Spoken English batch is published, with a
  Spoken-English-specific WhatsApp fallback message requesting the candidate's main speaking goal,
  current experience, country/time zone and usual availability;
- a Spoken-English-specific final CTA (`components/spoken-english/SpokenEnglishFinalCTA.tsx`)
  reusing the hero's exact WhatsApp message, plus a plain `mailto:` fallback to the canonical
  `aishasenglish@gmail.com` (no dedicated form variant yet — that is a later step).

It no longer shows: `<CourseHero>`/`<CourseModules>` (replaced entirely by the dedicated
components above), `<IncludedList>` (removed entirely), `<PricingCard>` (removed entirely), or the
generic complete `<FAQAccordion />` (removed entirely). None of these render "coming soon" or an
empty heading in their place — they are simply absent until their own verified replacement step.
Detailed learner-profile/curriculum, coaching process, feedback demonstration, evidence, learning
format, pricing, a dedicated availability component, a specialist FAQ and the enquiry-handoff form
variant all remain deliberately deferred to their own later Spoken English steps, mirroring the
IELTS, PTE and TOEFL sequence.

## Open questions for Aisha

1. Is Spoken English coaching delivered live, asynchronously, or both?
2. What platform is used for live sessions, if any?
3. Is a group format currently offered, a one-to-one format, or both? If one-to-one, is it
   included in a standard fee or a separately priced option?
4. What starting levels can the current offer genuinely support?
5. Is there a minimum age, or is the current offer scoped to adult/professional learners, students,
   or both?
6. What is the current programme duration and lesson frequency?
7. Are session recordings provided, and if so, for how long can a learner access them?
8. How is speaking practice actually structured (live conversation, recorded responses, written
   preparation, or a mix)?
9. What is the feedback method and how frequently is it given?
10. Is homework or self-practice expected between sessions?
11. Is structured interview or presentation rehearsal genuinely offered as part of the current
    coaching, or only as one possible situation among several?
12. Does every learner complete a starting-point assessment, or is the starting point discussed
    informally?
13. Is learner audio ever collected or stored? If so, what privacy/consent process applies?
14. What is the current fee, currency and billing basis?
15. What is the payment, refund, rescheduling and cancellation policy?
16. Is there a current confirmed intake, or is coaching arranged on enquiry only?
17. Does Aisha want to commit to a stated response time for enquiries?
18. Are there any existing Spoken-English learners who have given consent for a testimonial to be
    published on this page?

Until these are answered, the public page deliberately shows only the verified positioning,
fit guidance, a temporary priorities preview, the fail-closed availability state and a WhatsApp/
email path to ask Aisha directly — never an invented format, level, duration, fee, feedback
promise or intake.
