# PTE offer verification

Internal record of what the current PTE Academic offer can and cannot claim publicly on
`/courses/pte`. This is a maintenance document — none of the internal states below are rendered
on the public page, and nothing here should be read as legal advice, visa advice, or as an answer
on Aisha's behalf.

**Last reviewed:** PTE Step 12. This step closes out the full 12-step PTE programme-page project,
mirroring the completed IELTS project.

## Availability state (PTE Step 7)

`components/pte/PTEAvailability.tsx` is the single source `/courses/pte` reads intake data from —
not the shared `<BatchTable>`, which has been removed from this page entirely.

| Field | Current value |
|---|---|
| Availability state | No future PTE intake published — the no-intake enquiry state renders |
| Records in `content/batches.ts` tagged `pte` | Two (`batch-001`, `batch-003`), both with July/August 2026 start dates now in the past, `status: "Closed"`, `published: false` |
| Confirmed next PTE start date | None |
| Confirmed future PTE schedule | None |
| Confirmed programme duration for a future intake | None |
| Verified seat count | None — and none will ever be publicly claimed (see Part E of the implementing prompt: never invent a seat count) |
| Verified application/enrolment deadline | None |
| Separately modelled PTE one-to-one availability record | None — see "Open questions" below |
| Next review responsibility | Whoever publishes the next confirmed PTE intake, following `docs/updating-batches.md` section 9b |

Until a complete record exists (`pte` in `courseSlugs`, future `startDate`, `status: "Open"` or a
recently-verified `"Filling Fast"`, confirmed `format`, `duration`, `schedule`,
`timezone: "Asia/Karachi"`, `published: true`, current `verifiedAt`), `PTEAvailability` renders
only the enquiry state: eyebrow "Current availability", heading "Ask about the next suitable PTE
start.", a six-item detail checklist, and one WhatsApp CTA ("Check PTE Availability"). No past
date, guessed recurrence, manufactured scarcity or unconfirmed one-to-one availability is shown.

## Pricing state (PTE Step 6)

`content/ptePricing.ts` is the single, gate-kept source for any PTE fee shown on `/courses/pte` —
`components/pte/PTEPricing.tsx` reads only from it, never from `content/courses.ts`'s legacy
`price` field.

| Field | Current value |
|---|---|
| Pricing state | `enquire` |
| Exact approved public record | None exists |
| Confirmation date | Not applicable — no record to confirm |
| Billing basis | Not applicable |
| Applicable test/format | Not applicable |
| Inclusion references | Not applicable |
| Validity / review date | `lastReviewed: "2026-08-27"` on the `enquire` record |
| Policy status | Not applicable — no policy has been approved to publish |
| Legacy pricing figure | **Removed from public authority** — `content/courses.ts`'s `pte.price` (`10000`, never verified for currency, billing basis, test/format, duration or inclusions) cannot render on `/courses/pte`; that page no longer imports `<PricingCard>`, the only component that would read it |
| Next review responsibility | Whoever implements the next PTE step, or immediately once Aisha supplies a complete approved fee — see the billing/policy question list below |

Until a complete, owner-approved record exists, `PTEPricing` renders a fee-enquiry panel (eyebrow
"Fees and enrolment", heading "Review the complete PTE fee before you decide.") with one WhatsApp
CTA asking Aisha to confirm the complete current offer. No payment of any kind is requested
through the website.

## Allowed internal states

- `Owner confirmed`
- `Needs owner confirmation`
- `Not included`
- `Not applicable`
- `Removed from public page`

## Operational facts

| Item | State | Notes |
|---|---|---|
| Online delivery | **Owner confirmed** | "PTE Academic coaching is delivered online." — based on the owner-confirmed business purpose (the whole site markets online English tutoring). Exact public wording used by `components/pte/PTELearningFormat.tsx`'s `body`: "PTE Academic coaching is delivered online. The exact format, schedule, feedback, practice access and fee should be confirmed for the currently available option before payment." (PTE Step 5) |
| Teacher-led explanation (method only) | **Owner confirmed** | Describes the teaching method already approved in Steps 2-4, not an operational quantity/platform — "Teacher-led explanation" (not "Live"), since synchronous delivery is separately unconfirmed (PTE Step 5). |
| Focused PTE practice (method only) | **Owner confirmed** | Same basis as above (PTE Step 5). |
| Response review (method only) | **Owner confirmed** | Reflects the Step 3 coaching-process cycle, not a submission quantity, channel or turnaround (PTE Step 5). |
| Computer-test routines (method only) | **Owner confirmed** | Describes the teaching goal, not an official Pearson interface, simulator or scoring platform (PTE Step 5). |
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

## Billing and policy questions still required (PTE Step 6)

Before `content/ptePricing.ts`'s `ptePricing` can move from `status: "enquire"` to
`status: "published"`, every one of these needs an owner-approved answer — not one inferred from
industry practice or legacy code:

1. What is the exact amount and currency?
2. Is the fee per lesson, week, month, intake/batch or complete programme?
3. Which exact PTE test option does it cover?
4. Does the fee differ for PTE Academic and PTE Academic UKVI support?
5. Does it differ between group and one-to-one coaching?
6. How many lessons, weeks or months does the billing basis cover?
7. What is the lesson duration and programme duration?
8. Which Speaking and Writing feedback services are included?
9. Are Reading and Listening error reviews included?
10. Are recordings included, and for how long?
11. Are timed practice tasks or full mock tests included, and how many?
12. Does a mock include an estimated score, and which system provides it?
13. Is access to a practice or scoring platform included, and for how long?
14. Are official Pearson-licensed or teacher-created materials included?
15. Is full payment required before the programme begins?
16. Are instalments available?
17. Which payment methods and currencies are accepted?
18. Who pays transfer or processing fees?
19. What happens when Aisha cancels or reschedules a session?
20. What happens when a learner misses or reschedules a session?
21. Is any amount refundable, and under which conditions?
22. Can enrolment be transferred, paused or deferred?
23. How long is a quoted fee valid?
24. When should the public price be reviewed again?

Plus the full field list `isValidPublishedPTEPrice()` in `content/ptePricing.ts` checks before any
of this can render: stable id, exact test label, format label, exact numeric amount, explicit
currency (`PKR` or `USD`), a stated billing basis, a stated duration, at least one inclusion id
that matches a real `content/pte.ts` `delivery.supportItems` entry, an ISO `effectiveFrom` date
not after `validUntil`, an ISO `verifiedAt` date, an unexpired ISO `validUntil` date if one
applies, a payment note and a policy note.

## What the public page currently says instead (as of PTE Step 6)

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
- an illustrative feedback demonstration and a conditional verified-evidence section
  (`components/pte/PTEFeedbackDemo.tsx`, `PTEVerifiedEvidence.tsx` — PTE Step 4), the latter
  rendering nothing while `content/testimonials.ts` has no PTE-tagged, consent-confirmed entry;
- a learning-format section separating the stable, already-approved teaching method from the
  operational details a candidate must confirm before paying
  (`components/pte/PTELearningFormat.tsx` — PTE Step 5), with one contextual WhatsApp CTA;
- a fee-enquiry panel (`components/pte/PTEPricing.tsx` — PTE Step 6), correctly showing no exact
  amount anywhere since `content/ptePricing.ts`'s `ptePricing.status` is `"enquire"`, with one
  WhatsApp CTA asking Aisha to confirm the complete current fee;
- a PTE-specific availability section (`components/pte/PTEAvailability.tsx` — PTE Step 7,
  replacing the shared `<BatchTable>` wrapper), correctly showing the no-intake enquiry state
  since no complete future PTE record is published, with its own WhatsApp CTA requesting the
  exact test, required overall and skill scores, previous result, deadline, time zone and usual
  availability, and a note that an enquiry does not reserve a place;
- a PTE-specific eight-question FAQ (`components/pte/PTEFAQ.tsx`, `content/pteFaqs.ts` — PTE
  Step 8), addressing exact-test choice, required score, information to share, tutor feedback vs.
  official scoring, preparation time, guarantees/shortcuts, the current offer (linking to the
  verified learning-format, pricing and availability sections) and international candidates;
- a PTE-specific final CTA (`components/pte/PTEFinalCTA.tsx` — PTE Step 9) with WhatsApp as the
  primary action and, chosen server-side via `formsAreConfigured()`, either a locked PTE detailed
  form (`/free-diagnostic-test?programme=pte&source=pte-page`) or a `mailto:aishasenglish@gmail.com`
  link as the secondary action.

It still does not show: `<IncludedList>` (removed entirely), `<PricingCard>` (removed entirely),
`<LearningFormats>` (never rendered on this page), or the generic 17-item `<FAQAccordion />` with
its default `generalFaqs` (removed entirely — the page now uses `<FAQAccordion items={pteFaqs} />`
via `PTEFAQ` instead). None of these render "coming soon" or an empty heading in their place —
they are simply absent until their own verified replacement step.

## Final CTA and enquiry handoff (PTE Step 9)

`components/pte/PTEFinalCTA.tsx` replaces the Step 1 single-WhatsApp-only section. Canonical field
list and message text live in `content/pteEnquiry.ts` (`pteEnquiryFields`, `pteFinalEnquiry`,
`pteFormVariant`) rather than being duplicated inline. The secondary action is chosen on the
server via `formsAreConfigured()`: `/free-diagnostic-test?programme=pte&source=pte-page` (which
preselects and locks "PTE Academic Preparation" in `components/DiagnosticForm.tsx`) when a real
Formspree endpoint is configured, otherwise a `mailto:aishasenglish@gmail.com` link built by
`lib/contact.ts`'s `emailLink()`. `lib/enquiryQuery.ts`'s allowlist was extended with the
`"pte-page"` source and `"pte"` programme/variant values — an unrecognised or missing value still
falls back to the general form. **Update (PTE Step 12):** `data-analytics-*` attributes and
`assessment_form_*` events were added for PTE, matching IELTS exactly — see the "Conversion
measurement and launch readiness" section below and `docs/analytics-event-map.md`. All of it
remains fully inert pending owner/legal approval.

## Technical SEO, metadata and internal linking (PTE Step 10)

`app/courses/pte/page.tsx` now declares an absolute page title (`Online PTE Academic Preparation
| Aisha's English`, bypassing the root `%s | Aisha's English` template), a page-specific
description, page-specific Open Graph/Twitter metadata, and the new dedicated
`public/images/social/pte-academic-preparation.jpg` social image (`1200×630`, replacing the
inherited portrait `og-image.jpg`) — see `docs/pte-content-sources.md`'s "Social image and
technical SEO" section for the composition method and rationale. A visible
`components/pte/PTEBreadcrumb.tsx` (Home / Courses / PTE Academic Preparation) and a matching
`BreadcrumbList` JSON-LD were added, both built from the same `content/pte.ts` `breadcrumb` array
so they can never disagree. No `Offer`, `AggregateRating`, `Review`, `FAQPage`, `QAPage` or
`CourseInstance` markup was added — current official Google guidance was rechecked and does not
support adding any of those for this page's current state.

Two cross-site contradictions were corrected as part of this step:

- `content/homeCourses.ts`'s `HOME_COURSE_DELIVERY` default line ("Live online · Group or
  one-to-one · Recordings included") asserted live delivery, group/one-to-one availability and
  recordings for PTE, none of which is owner-confirmed (see Operational facts above). Added a
  PTE-specific override: "Online coaching · Confirm current format and support."
- `content/coursePresentation.ts`'s PTE card copy said "Computer-based task strategy" (read like
  the algorithm-shortcut marketing the page's own evidence-led positioning explicitly rejects) and
  implied migration/university acceptance was general rather than confirmed per receiving
  organisation. Rewritten to the aligned copy specified for this step.

The legacy `content/courses.ts` PTE record's `tagline`/`summary`/`price` ("score high", "smart,
template-driven strategies", unverified `10000`) remain confirmed unreachable by any search-facing
component for `/courses/pte` — no new consumer was introduced that would expose them, and the
existing non-authoritative comments on that record were left in place (Steps 1, 2 and 6 already
established and documented this).

## Mobile performance and accessibility hardening (PTE Step 11)

This step audited the complete rendered `/courses/pte` route (not isolated components) for
mobile, tablet, performance and accessibility defects after Steps 1-10. Findings:

- **Shared chrome generalised, not duplicated**: `lib/routeChrome.ts` (new) centralises the
  previously IELTS-only route check into one named `PROGRAMME_DETAIL_ROUTES_WITH_OWN_CHROME` list.
  `components/WhatsAppFloat.tsx` now suppresses the generic floating WhatsApp button on
  `/courses/pte` exactly as it already did on `/courses/ielts` (both routes have contextual
  WhatsApp actions of their own). `components/UtilityBar.tsx` now hides the phone-width utility
  bar on the same two routes, giving the PTE H1 and primary action more first-screen space.
- **Two real small-text findings, both fixed** in the shared `components/DiagnosticForm.tsx`
  (affects every variant — general/IELTS/PTE): the "(required)"/"(optional)" field-status
  indicator and the privacy note were both `text-xs` (12px); the implementing prompt names both
  as decision-relevant text needing at least 14px. Bumped both to `text-sm`.
- **Everything else audited and found already compliant** — every PTE component's `text-xs`
  usage was individually reviewed against the prompt's explicit exception list (decorative
  eyebrows, short category labels like "Focus areas", compact task-family chips, the
  non-critical "Last verified" label) and found to fall within an allowed exception; every
  decision-critical note already reviewed in Steps 2-9 (score-guarantee, transcript/audio
  limitation, disclosure, pricing/payment/policy notes, reservation note, evidence context note)
  was already `text-sm` or larger.
- **No real horizontal overflow found** at any of the 21 required phone/tablet/desktop widths,
  landscape phone, 320px reflow or simulated 200% zoom — confirmed via
  `scrollWidth`/`clientWidth` comparison (the codebase has no global `overflow-x: hidden` to mask
  a defect in the first place).
- **Server rendering and JS payload confirmed minimal**: a byte-for-byte comparison against a
  page with no form (`/about`) showed `/courses/pte` ships the *same* shared framework JavaScript
  and zero additional PTE-specific script — the only client component PTE depends on is the
  existing `DiagnosticForm`. Zero third-party network requests were observed on the route.
- **All real rendering branches tested together** with a temporary combined fixture (published
  pricing with a long amount/inclusions/policy text, two scheduled PTE intakes including a
  verified "Filling Fast" status, and one consent-confirmed PTE testimonial) — confirmed correct
  rendering, no overflow, no duplicate headings and no layout defect, then fully reverted via
  `git checkout` (confirmed clean via `git status` and a fixture-marker `grep`).
- **Anchors, focus and reduced motion verified, not duplicated**: every Step 5-9 fragment target
  (`#pte-fit` through `#pte-enquiry`) clears the sticky header at both desktop and mobile widths;
  `prefers-reduced-motion: reduce` already correctly disables smooth scrolling and shortens
  transitions site-wide (no PTE-specific duplication was added); the mobile drawer's focus trap,
  Escape handling and focus restoration all continue to work correctly on the PTE route.

No page reordering, new dependency, analytics addition, or weakening of any price/availability/
evidence verification gate was made in this step.

## Conversion measurement and launch readiness (PTE Step 12)

Extended the existing IELTS-only analytics foundation (`lib/analytics/`) to support PTE as a
second, equally-inert programme, and completed a full launch-readiness pass over the PTE journey.
No third-party tracker was activated; `analyticsIsApproved()` remains hard-coded `false`.

- **Shared contract, not a second stack**: `AnalyticsProgramme` extended to `"ielts" | "pte"`,
  `AnalyticsPagePath` extended with `/courses/pte`, `AnalyticsSource` extended with `"pte-page"`.
  No new event names — `programme: "pte"` on the same seven existing events provides the reporting
  dimension. See `docs/analytics-event-map.md` for the combined, per-programme instrumentation
  tables.
- **New cross-programme consistency rule**: `sanitizeAnalyticsPayload()` now rejects the whole
  payload (not just drops one field) for an impossible combination — `programme: "pte"` with
  `page_path: "/courses/ielts"`, or a known source value assigned to the wrong programme (e.g.
  `pte` + `ielts-page`). `components/analytics/AnalyticsListener.tsx` also no longer trusts a
  `data-*` attribute for `programme` at all — it now derives `programme` from the current,
  un-spoofable pathname via `lib/analytics/pagePaths.ts`'s `programmeForPagePath()`.
  `resolvePagePath()` was split out of `lib/analytics/track.ts` into that same new
  `lib/analytics/pagePaths.ts` file specifically so `scripts/analytics-selftest.mts` could test it
  directly (track.ts's own runtime imports can't be resolved when the file is executed directly
  by Node — pagePaths.ts is self-contained, matching events.ts/config.ts's existing pattern).
- **PTE CTAs instrumented**: hero, score-profile, learning-format, pricing (both branches),
  availability (both branches), and all three final-CTA actions on `/courses/pte` now carry the
  same controlled `data-analytics-*` attributes IELTS's equivalents already had — same event
  names, sections and intents, `programme` dimension the only difference.
- **PTE form lifecycle instrumented**: `components/DiagnosticForm.tsx`'s `isIelts`-only analytics
  gating was replaced with a small `ANALYTICS_PROGRAMME_BY_VARIANT`/`ANALYTICS_SOURCE_BY_VARIANT`
  lookup so `assessment_form_start`/`_error`/`_submit` now also fire correctly for the PTE variant
  (`programme: "pte"`, `source: "pte-page"`) — the general variant still emits nothing, and IELTS's
  exact prior behaviour is unchanged.
- **Page view**: the IELTS-only `IELTSPageViewTracker.tsx` was replaced with a shared, typed
  `components/analytics/ProgrammePageViewTracker.tsx` accepting `programme`/`pagePath` props —
  both `app/courses/ielts/page.tsx` and `app/courses/pte/page.tsx` mount their own instance. No
  visible rendering changed.
- **Self-test expanded** from 12 to 23 checks (all originals still passing unchanged): new
  cross-programme rejection cases, a wider sensitive-key injection list (added `phone`, `score`,
  `target_score`, `deadline`, `country`, `query`, `form_data`), a PTE-shaped injection test, a "PTE
  support doesn't activate a provider" check, and four new `resolvePagePath()` tests.
- **Two genuine, pre-existing WCAG AA colour-contrast failures found and fixed** via an
  `axe-core` pass (unrelated to analytics; see `docs/launch-verification.md`'s "Colour-contrast
  fixes" section for the measured ratios and the identical, flagged-not-fixed IELTS occurrence).
- **Zero-network/storage confirmed** on a local production build: no request to any known
  analytics/advertising/replay host, no third-party request of any kind, no cookie or storage
  identifier created on the site's own origin, across `/courses/pte`, the PTE detailed-enquiry
  route, `/courses/ielts`, the homepage and the Courses hub.

Owner/legal gates for third-party tracking (provider choice, purpose, consent approach, approved
privacy/terms pages, retention, account ownership, whether advertising/remarketing/session
recording are enabled, real measurement ID, tested consent behaviour) remain entirely unresolved —
see `docs/launch-verification.md`'s "Analytics activation checklist" for the full list. This step
did not and could not resolve any of them from code alone.

## Global FAQ audit (PTE Step 1)

The IELTS Step 8 corrections to `content/faqs.ts`'s shared entries (`live-or-recorded`,
`missed-class`, `new-batches`, `mock-exams`, `one-to-one-help`, `platform`) already removed their
unconfirmed universal claims in favour of "confirmed per programme/current option" wording — this
already protects PTE too, since those answers no longer assert anything specific to any one
programme. No further correction was needed for PTE in this step.

## Global FAQ audit (PTE Step 8)

A second audit found four more shared `content/faqs.ts` entries that still contradicted this
page's own verification state, corrected in this step (see that file for the full before/after
comments):

| ID | Problem found | Correction |
|---|---|---|
| `programmes-taught` | Asserted "live online" delivery across every named programme, including PTE, where live/synchronous delivery is "Needs owner confirmation" (see Operational facts above). | Removed "live"; now reads "teaches online English." |
| `personal-feedback` | Universally promised "reviews your writing and speaking" to every visitor, while PTE's feedback method and frequency remain "Needs owner confirmation." | Rewritten so feedback focus, submission method, frequency and delivery are confirmed per programme rather than assumed. |
| `fees-and-schedules` | Asserted fees "can differ by programme, learning format and intake" — a specific, unconfirmed reason for variation. | Rewritten to state only that Aisha confirms the complete current fee, billing basis and payment details before enrolment, without asserting why it might vary. |
| `fees-payment` | Same issue as `fees-and-schedules`. | Same correction pattern. |

The remaining audited IDs (`international-students`, `live-or-recorded`, `missed-class`,
`new-batches`, `mock-exams`, `one-to-one-help`, `platform`, `choosing-language-test`) were
re-reviewed against the current PTE Steps 1–7 state and found not to contradict it — no further
change was needed for those in this step.

## PTE-specific FAQ (PTE Step 8)

`components/pte/PTEFAQ.tsx` renders exactly eight PTE-specific questions from
`content/pteFaqs.ts` — independent of `content/faqs.ts`'s `generalFaqs`, so this page never
inherits an unrelated or newly-added global entry automatically. No `FAQPage` JSON-LD was added to
`/courses/pte`: current official Google Search-appearance gallery guidance (rechecked 27 August
2026 — see `docs/pte-content-sources.md`) does not list a general FAQ rich-result feature for a
tutoring portfolio, so adding markup here would carry maintenance risk without a supported
benefit. The current-offer answer links to the verified `#pte-learning-format`, `#pte-pricing` and
`#pte-availability` sections rather than duplicating their changing fee, date or schedule details
in FAQ text.

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
25. What is the confirmed date, schedule, time zone, format and duration of the next PTE intake,
    if any exists? (PTE Step 7 — until answered, the page correctly shows the no-intake enquiry
    state rather than a guessed or extrapolated date.)
26. Is one-to-one PTE coaching currently offered? If so: how does scheduling work, does it have a
    separate fee, is there a capacity limit, and does it use a fixed start date? (PTE Step 7 — see
    the `PTEPrivateAvailability` type sketch in the implementing prompt; nothing is modelled or
    implied on the public page until this is confirmed.)

Until these are answered, the public page deliberately shows only the verified positioning,
test-qualifier and coaching-process content, plus a WhatsApp path to ask Aisha directly — never an
invented format, fee, mock count, diagnostic offer or inclusion.
