# TOEFL offer verification

Internal record of what the current TOEFL iBT offer can and cannot claim publicly on
`/courses/toefl`. This is a maintenance document — none of the internal states below are rendered
on the public page, and nothing here should be read as legal advice, visa advice, admissions
advice or an answer on Aisha's behalf.

**Last reviewed:** TOEFL Step 12.

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

## Availability authority and state (TOEFL Step 7)

- `components/toefl/TOEFLAvailability.tsx` (id `toefl-availability`) replaces the TOEFL Step 1
  page-level `<BatchTable>` wrapper. It reads `getPublishedUpcomingBatches("toefl")` from
  `content/batches.ts` directly, mirroring `components/ielts/IELTSAvailability.tsx` and
  `components/pte/PTEAvailability.tsx`'s established fail-closed pattern — `content/batches.ts`
  remains the single, shared, publication-authoritative availability source across all three
  programmes; TOEFL has no separate availability data file.
- **Current public state: no-intake enquiry.** Both TOEFL-tagged records in `content/batches.ts`
  (`batch-001`, `batch-003`) have past start dates, `status: "Closed"` and `published: false`, so
  `isPubliclyVisible()` (`lib/batches.ts`) excludes both and `TOEFLAvailability.tsx` renders the
  honest "Ask about the next suitable TOEFL start." enquiry panel with its 8-item "Include these
  details" checklist and a single WhatsApp CTA ("Check TOEFL Availability").
- `isCompleteToeflIntake()` additionally requires non-empty `duration` and `schedule` before a
  record may render as a confirmed intake card — the generic `Batch` type allows both to be
  omitted, but an incomplete record is treated as unpublished rather than shown with a "TBA"
  placeholder.
- Publishing a future TOEFL record requires, beyond the generic gates every programme shares: a
  stable unique `id`, `toefl` in `courseSlugs`, a genuine future `startDate`, `status: "Open"` or a
  manually re-verified `"Filling Fast"` (via `statusVerifiedAt`), confirmed `format`, `duration`
  and `schedule`, `timezone: "Asia/Karachi"`, `published: true`, a current `verifiedAt`, **and**
  separate owner confirmation (recorded here, not in the batch record itself — the `Batch` type has
  no field for this) that the coaching offered for that specific intake covers the TOEFL iBT format
  applicable to candidates' planned test dates. No such confirmation exists yet for any future
  TOEFL date.
- No one-to-one TOEFL availability is modelled or implied. `content/batches.ts` only represents
  scheduled group intakes; a separate one-to-one data source (status, format coverage, scheduling,
  fee, capacity) would need its own explicit owner confirmation before being built.
- TOEFL pricing (`content/toeflPricing.ts`, Step 6) and TOEFL availability
  (`content/batches.ts` + `TOEFLAvailability.tsx`, Step 7) remain two independent, separately
  gate-kept states — a future published price does not imply a published intake, and vice versa.

## What the public page currently says instead (as of TOEFL Step 10)

`/courses/toefl` shows only:

- a visible `Home / Courses / TOEFL iBT Preparation` breadcrumb
  (`components/toefl/TOEFLBreadcrumb.tsx` — TOEFL Step 10) above the hero, with a matching
  `BreadcrumbList` JSON-LD block built from the same `content/toefl.ts` `breadcrumb` array so the
  visible path and structured data can never disagree — the only structured-data type added; no
  `Offer`, `AggregateRating`, `Review`, `FAQPage`, `QAPage` or `CourseInstance` markup exists on
  this page. The page also carries an explicit absolute title
  (`Online TOEFL iBT Preparation | AISHAS ENGLISH` — brand-name standardisation updated this from
  `| Aisha's English`), a truthful description, a self-referencing
  canonical, and complete TOEFL-specific Open Graph/Twitter metadata with a genuine `1200×630`
  social image (`public/images/social/toefl-ibt-preparation.jpg`, composed from the same approved
  portrait used for IELTS/PTE — see `docs/toefl-content-sources.md`);
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
- a dedicated, fail-closed availability section (`components/toefl/TOEFLAvailability.tsx` — TOEFL
  Step 7, id `toefl-availability`, replacing the earlier page-level `<BatchTable>` wrapper),
  correctly showing "Ask about the next suitable TOEFL start." since both TOEFL-tagged
  `content/batches.ts` records are historical (past dates, `"Closed"`, unpublished); its 8-item
  "Include these details" checklist requests the institution, required overall/section scores and
  scale, previous result or starting point, planned test date and deadline, test-centre/Home
  Edition plan, country/time zone and usual availability; a single WhatsApp CTA ("Check TOEFL
  Availability") and an explicit "sending an enquiry does not reserve a place" reassurance; no link
  to `/batches` while it holds no additional relevant TOEFL information. A future confirmed intake
  would render as a card (`TOEFL iBT Preparation`, `<time>`-marked start date, schedule + Pakistan
  time, format, duration, text status, last-verified date, one intake-specific CTA) only once
  `isCompleteToeflIntake()` and every other Part D gate — including separate owner confirmation of
  current-format coverage — is satisfied;
- a specialist eight-question FAQ (`components/toefl/TOEFLFAQ.tsx` — TOEFL Step 8, id
  `toefl-faq`, reading from the dedicated `content/toeflFaqs.ts` rather than
  `content/faqs.ts`'s `generalFaqs`), covering exact test choice, institution-set score
  requirements, information to share, the tutor-feedback/official-scoring boundary, preparation
  time, guarantees/shortcuts, the current offer (linking to `#toefl-learning-format`,
  `#toefl-pricing` and `#toefl-availability` rather than duplicating any fee, date or schedule
  value), and international enquiries — reusing the shared native `<details>/<summary>`
  `FAQAccordion` with no new dependency, client state or `FAQPage`/`QAPage` structured data;
- a final enquiry handoff (`components/toefl/TOEFLFinalCTA.tsx` — TOEFL Step 9, id
  `toefl-enquiry`) that no longer reuses the hero's shorter message: it asks for six compact
  details (institution/requirement, overall/section scores and scale, previous result or starting
  point, planned test date and deadline, test-centre/Home Edition plan, country/time zone and
  usual availability), then offers WhatsApp as the primary action plus exactly one
  server-selected secondary action — the allowlisted TOEFL detailed-enquiry form
  (`/free-diagnostic-test?programme=toefl&source=toefl-page`) when `formsAreConfigured()` is true,
  otherwise a safely encoded `mailto:` link to the canonical `aishasenglish@gmail.com`. The
  canonical field list and complete WhatsApp/email templates live in the new
  `content/toeflEnquiry.ts` so they cannot drift from what the form itself sends. No reply-time,
  acceptance or suitability promise appears anywhere in this section.

It no longer shows: `<CourseHero>`/`<CourseModules>` (replaced entirely by the dedicated
components above), `<IncludedList>` (removed entirely), `<LearningFormats>` (never rendered on this
route — its live-group/one-to-one/Zoom/recordings/personal-feedback copy is not owner confirmation
for the current TOEFL offer), `<PricingCard>` (removed entirely — never imported on
`/courses/toefl`, so `content/courses.ts`'s legacy `price: 10000` cannot render there), the shared
`<BatchTable>` page-level wrapper (replaced entirely by `TOEFLAvailability.tsx`, though
`<BatchTable>` itself remains in use by the homepage, `/batches` and other programme routes), or the
generic 17-item `<FAQAccordion />` default `items` (the component itself is reused with
TOEFL-specific `items`, never `generalFaqs`, on this route). None of these render "coming soon" or
an empty heading in their place — they are simply absent until their own verified replacement step.

## Global FAQ audit (TOEFL Step 1)

The IELTS Step 8 and PTE Step 8 corrections to `content/faqs.ts`'s shared entries
(`live-or-recorded`, `missed-class`, `new-batches`, `fees-and-schedules`, `fees-payment`,
`mock-exams`, `one-to-one-help`, `platform`, `programmes-taught`, `personal-feedback`) already
removed their unconfirmed universal claims in favour of "confirmed per programme/current option"
wording — this already protects TOEFL too, since those answers no longer assert anything specific
to any one programme. `choosing-language-test` already links to `/courses/toefl` alongside IELTS
and PTE (added in IELTS Step 10). No further correction was needed for TOEFL in this step.

## Global FAQ audit (TOEFL Step 8)

Re-audited every global entry this step's implementing prompt named, cross-checking each against
this document's TOEFL-specific states:

| ID | Risk checked | Finding |
|---|---|---|
| `programmes-taught` | Asserting live delivery, or omitting TOEFL from the taught-programme list | Says "IELTS and related tests" — no live claim, and vague enough not to exclude TOEFL. Safe as-is. |
| `international-students` | Implying live/synchronous delivery for every international learner | "Yes, teaching is online... schedules are shown or confirmed in Pakistan Standard Time" — matches TOEFL's own `international-candidates` FAQ answer exactly in spirit. Safe as-is. |
| `fees-and-schedules` | Asserting an unverified reason fees vary | Already states only that Aisha confirms the complete fee before enrolment — no invented reason. Safe as-is. |
| `live-or-recorded` | Universal live/recording claim | Already "confirmed per programme and current option." Safe as-is. |
| `missed-class` | Assuming a recording is always available | Already "depend on the policy confirmed for your specific programme." Safe as-is. |
| `new-batches` | Implying a recurring/regular TOEFL intake cadence | Already "published only once confirmed... can vary by programme." Safe as-is. |
| `fees-payment` | Same fee-variation risk as `fees-and-schedules` | Already confirms per-programme before enrolment, no invented reason. Safe as-is. |
| `mock-exams` | Promising a universal mock quantity/format | Already "differ by programme... confirmed for your current option." Safe as-is. |
| `one-to-one-help` | Implying one-to-one TOEFL availability | Already "programme-specific and confirmed before you enrol." Safe as-is. |
| `platform` | Naming Zoom (or any platform) universally | Already "confirmed for your specific programme and current option." Safe as-is. |
| `personal-feedback` | Promising a universal feedback method/quantity/turnaround | Already "confirmed for your specific programme and current option." Safe as-is. |
| `choosing-language-test` | Recommending one test over another, or omitting TOEFL | Already sends candidates back to the receiving organisation's accepted tests/scores; already links to `/courses/toefl` alongside IELTS and PTE. Safe as-is. |

**Result: no global FAQ entry required correction or `published: false` for TOEFL.** Every entry
this prompt flagged for risk had already been made programme-neutral by the IELTS Step 8 and PTE
Step 8 corrections recorded above (TOEFL Step 1's audit) — none was rewritten specifically for
IELTS or PTE in a way that has since drifted unsafe for TOEFL. No pre-21-January-2026 integrated/
independent task wording and no universal TOEFL passing-score claim exists anywhere in
`content/faqs.ts`.

## Mobile performance and accessibility hardening (TOEFL Step 11)

This step audited the complete rendered `/courses/toefl` route (not isolated components) for
mobile, tablet, performance and accessibility defects after Steps 1–10. Findings:

- **Shared chrome extended, not duplicated**: `/courses/toefl` was added to the existing
  `lib/routeChrome.ts` `PROGRAMME_DETAIL_ROUTES_WITH_OWN_CHROME` list (already covering
  `/courses/ielts` and `/courses/pte` from IELTS/PTE Step 11). `components/WhatsAppFloat.tsx` now
  suppresses the generic floating WhatsApp button on `/courses/toefl` — the page already has
  contextual WhatsApp actions throughout (hero, fit, score profile, learning format, pricing,
  availability, FAQ current-offer answer, final CTA). `components/UtilityBar.tsx` now hides the
  phone-width utility bar on the same route, giving the TOEFL H1 and primary action more
  first-screen space. Neither shared component needed its own code change — both already read the
  centralised list generically.
- **Two sitewide "live" claims corrected**, both rendered on every route including
  `/courses/toefl`: the global header brand subtitle (`components/Header.tsx`) said "LIVE ONLINE
  ENGLISH COACHING" and the footer's brand summary (`components/Footer.tsx`) said "Live online
  English tutoring..." — both asserted a universal synchronous-delivery claim that contradicts
  this page's own verified state (live/synchronous delivery remains "Needs owner confirmation").
  "Live"/"LIVE" removed from both; regression-tested across every route.
- **Everything else audited and found already compliant** — every TOEFL component's `text-xs`
  usage was individually reviewed and found identical to the already-hardened PTE/IELTS
  equivalents (decorative eyebrows, short category labels like "Focus areas", compact task-family
  chips, the non-critical "Last verified"/"Valid until" labels); every decision-critical note
  already reviewed in Steps 2–9 (score/scoring-boundary statements, transcript/audio limitation,
  feedback-demo disclosure, pricing/payment/policy notes, reservation note, evidence context note,
  confirm-checklist items) was already `text-sm` or larger. `components/DiagnosticForm.tsx`'s
  shared required/optional indicator and privacy note (bumped to `text-sm` in PTE Step 11) already
  apply to the `toefl` variant with no further change needed, since the component is shared.
- **No real horizontal overflow found** at any of the 17 required phone/tablet/desktop widths,
  landscape, 320px reflow with page-level overflow-clipping temporarily disabled, or the correctly
  zoom-equivalent CSS-pixel widths for 200%/400% zoom (640px/320px) — confirmed via
  `scrollWidth`/`clientWidth` comparison. One test-methodology artifact was investigated and
  confirmed non-issue: naively forcing `html { font-size: 200% }` at a 320px viewport (a technique
  that does not correspond to any real browser zoom behaviour) produced apparent overflow that
  disappeared entirely once tested at the actually-equivalent 640px width (200% of a 1280px
  desktop) and the genuine 320px reflow width (400% equivalent) — both passed with zero overflow.
- **Anchors, focus and reduced motion verified, not duplicated**: every Step 2–9 fragment target
  (`#toefl-fit` through `#toefl-enquiry`) clears the sticky header at both desktop and mobile
  widths via a real anchor-link click and a fresh direct URL load (the two ways a candidate
  actually navigates); `prefers-reduced-motion: reduce` already correctly disables smooth
  scrolling and shortens the FAQ disclosure-icon transition to effectively immediate (no
  TOEFL-specific duplication was added). One test-methodology artifact was investigated and
  confirmed non-issue: calling `page.goto()` twice against the same route with only the hash
  changed can bypass the browser's native fragment-scroll in a way a real click or fresh page load
  does not — both real-world interaction patterns were separately confirmed correct.
- **All real rendering branches tested together** with a temporary combined fixture (a long
  published TOEFL price with detailed format/schedule/payment/policy text, two scheduled TOEFL
  intakes including a verified "Filling Fast" status and long duration/schedule text, and one
  consent-confirmed TOEFL testimonial with a long quote) — confirmed correct rendering, no
  overflow at any of 17 widths, zero axe-core violations, and no duplicate headings, then fully
  reverted via `git checkout` (confirmed clean via `git status` and a fixture-marker `grep`).
- **Server rendering and JS payload confirmed minimal**: no new client component was added; the
  page's only interactive client boundaries remain the shared header/mobile menu, the
  route-chrome-aware `UtilityBar`/`WhatsAppFloat`, and the TOEFL `DiagnosticForm` variant — all
  pre-existing. No new dependency was added.
- **TOEFL enquiry form hardening** (temporary Formspree fixture, confirmed removed via `ls`
  afterward): mobile input/textarea text confirmed ≥16px (avoids iOS auto-zoom); programme field
  confirmed disabled and preselected as "TOEFL iBT Preparation" and remains visually readable
  (not near-invisible); correct `inputMode`/`type` on phone and email fields; honeypot confirmed
  `tabindex="-1"` inside an `aria-hidden` wrapper; a failed submission preserved every entered
  value and moved focus to a `role="alert"` error message offering the canonical TOEFL WhatsApp
  fallback. Two test-script artifacts were investigated and confirmed non-issues: a
  `text-transform: uppercase` eyebrow breaking a case-sensitive text assertion (an established
  recurring pattern in this project), and Next.js's own always-present hidden route-announcer
  element also carrying `role="alert"` alongside the genuine, single visible form error.

No page reordering, new dependency, analytics addition, or weakening of any price/availability/
evidence verification gate was made in this step.

## Conversion measurement and launch readiness (TOEFL Step 12)

Extended the existing IELTS/PTE privacy-first analytics foundation (`lib/analytics/`) to support
TOEFL as a third first-class programme, without activating any provider or collecting any
sensitive data. See `docs/analytics-event-map.md` for the full combined event map and
`docs/launch-verification.md`'s "Analytics activation checklist" for the complete testing
evidence. Summary:

- `lib/analytics/events.ts`'s `AnalyticsProgramme`, `AnalyticsPagePath` and `AnalyticsSource`
  unions now include `"toefl"`, `"/courses/toefl"` and `"toefl-page"` respectively, with the same
  cross-programme consistency validation PTE Step 12 introduced now rejecting every impossible
  TOEFL/IELTS/PTE combination (verified in both directions for all three programmes).
- Seven TOEFL conversion actions (hero, score-profile, learning-format, pricing, availability,
  final-WhatsApp, final-email/form) carry the same controlled `data-analytics-*` attributes
  IELTS/PTE already use — read by the existing single delegated `AnalyticsListener.tsx`, no new
  per-CTA client code. `ProgrammePageViewTracker` now also mounts on `/courses/toefl` with fixed
  `programme="toefl"`/`pagePath="/courses/toefl"` props. `DiagnosticForm.tsx`'s TOEFL variant now
  emits `assessment_form_start`/`assessment_form_error`/`assessment_form_submit` exactly as the
  IELTS/PTE variants do; the general variant still emits nothing.
- `analyticsIsApproved()` remains hard-coded `false` — the shipped production build sends zero
  analytics, advertising or session-replay requests, creates no analytics cookie or storage key,
  and every event resolves to a silent no-op (or an opt-in local `console.debug`, never active in
  production). Live-tested: 27/27 self-test checks, zero tracker requests across six routes, exact
  correct payloads for every TOEFL CTA and form-lifecycle state (including a genuine
  provider-success double for `assessment_form_submit`, since no live Formspree account exists in
  this environment), zero leaked amount/date/schedule/institution/score text in any event across
  a combined published-pricing + scheduled-intake fixture, and zero regression to IELTS/PTE
  events.
- No provider, consent design, privacy notice, cookie notice, retention setting, account
  ownership, advertising/remarketing decision or session-recording decision has been approved —
  all remain explicitly unresolved (see `docs/launch-verification.md`'s activation-checklist
  table). This step did not resolve, and could not resolve, any of them.

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
