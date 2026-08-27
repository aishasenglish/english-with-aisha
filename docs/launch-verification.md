# Launch verification

Items an implementation agent cannot resolve alone — they need Aisha's (or the site owner's)
direct confirmation, legal review, or a real account/URL before the site should carry paid
traffic, run ads, or start a mailing list. This is an implementation inventory, not legal advice.

## High priority — before paid advertising or mailing-list collection

### Privacy policy and terms of service

The site collects personal enquiry data (name, email, WhatsApp number, and — depending on the
form — the learner's programme, current level/score, country/time zone, and free-text context)
through Formspree-backed forms (`components/ContactForm.tsx`, `components/DiagnosticForm.tsx` —
see `lib/forms.ts`). There is currently **no `/privacy` or `/terms` page**, and none has been
added by this step: generating legal policy text from assumptions is out of scope for an
implementation agent and could create a false sense of compliance.

**Action needed:** Aisha (or a lawyer/legal reviewer she engages) should approve real privacy and
terms content — covering at minimum what's collected, why, how long it's kept, and that Formspree
is the third-party processor — before:
- running paid advertising that sends traffic to a form,
- collecting for a mailing list or newsletter (none exists yet — see `content/leadCapture.ts`'s
  note that Step 11 deliberately did not add one),
- adding any analytics or tracking script (see the "Analytics activation checklist" below — the
  event contract and instrumentation exist as of IELTS Step 12, but every event resolves to a
  no-op until this checklist is complete).

Once approved pages exist at `/privacy` and `/terms`, link them from `components/Footer.tsx` and
add both routes to `app/sitemap.ts`.

### Known third-party data processor

- **Formspree** (`formspreeEndpoint` in `content/site.ts`, validated by `lib/forms.ts`) — receives
  whatever a visitor submits through the contact or recommendation-request form. No endpoint is
  currently configured (see `.env.example`), so no data is actually being sent anywhere yet.

### Analytics activation checklist (IELTS Step 12; extended to PTE in PTE Step 12)

`lib/analytics/` implements a strict, typed event contract shared by the IELTS and PTE enquiry
journeys (see `docs/analytics-event-map.md` for the full funnel and per-action instrumentation
tables for both programmes) — `components/analytics/AnalyticsListener.tsx` (one delegated click
listener, mounted once in `app/layout.tsx`), `components/analytics/ProgrammePageViewTracker.tsx`
(fires `programme_view` once per navigation to `/courses/ielts` or `/courses/pte` — one small
typed component mounted with a different `programme`/`pagePath` prop pair on each page, replacing
the earlier IELTS-only `IELTSPageViewTracker.tsx`), and `components/DiagnosticForm.tsx`'s IELTS-
and PTE-variant form-lifecycle events. **All of it is currently inert, for both programmes.**
`lib/analytics/config.ts`'s `analyticsIsApproved()` is hard-coded `false`, so
`lib/analytics/track.ts`'s `track()` never dispatches anything beyond an opt-in local
`console.debug` (itself off by default, and never active in a production build regardless of the
opt-in flag).

| Requirement | Status |
|---|---|
| Chosen provider | **Not yet approved** |
| Purpose of collection | Not yet documented |
| Consent approach | Unresolved |
| Approved privacy notice (and cookie notice if required) | Missing — see the privacy/terms section above |
| Data-retention setting | Unresolved |
| Account access and ownership | Unconfirmed |
| Advertising features / remarketing / signals / session recording | Disabled — and explicitly out of scope for this launch (see below) |
| Production measurement ID | Not committed to source; `NEXT_PUBLIC_GA_ID` remains empty in every environment file checked into this repository |
| Session recording (Microsoft Clarity) | **Disabled, not wired up.** Deliberately deferred — needs its own separate purpose/consent/disclosure decision. `NEXT_PUBLIC_CLARITY_ID` existing in `.env.example` is not permission to add it. |
| Advertising pixel (Meta Pixel) | **Disabled, not wired up.** Same reasoning as Clarity, plus advertising-specific consent requirements. `NEXT_PUBLIC_META_PIXEL_ID` existing in `.env.example` is not permission to add it. |

**To activate GA4 once every row above is genuinely resolved:** change
`lib/analytics/config.ts`'s `analyticsIsApproved()` to return `true` (a deliberate, reviewed
source edit — never inferred from an environment variable alone), set a real `NEXT_PUBLIC_GA_ID`
matching the approved property, implement the actual provider dispatch call inside
`lib/analytics/track.ts`'s `dispatch()` function (currently an intentionally empty, commented
placeholder), and re-run the disabled-state network test below to confirm the *new* active state
behaves as documented (fires only the approved events, no more).

#### Analytics testing evidence (IELTS Step 12; PTE evidence added in PTE Step 12)

- `npm run test:analytics` (`scripts/analytics-selftest.mts`, a dependency-free Node script — the
  project has no test runner) — 12/12 checks passed: event-name allowlisting, payload
  sanitisation (unrecognised programme/page_path/section/intent/source/error_type values are
  dropped, and a payload with `name`/`email`/`whatsapp`/`href`/`message` keys added has every one
  of those keys stripped), GA measurement-ID shape validation (valid ID accepted; empty,
  `PLACEHOLDER`, `EXAMPLE` and legacy Universal Analytics shapes rejected), and confirmation that
  `analyticsIsActive()` stays `false` even with a valid-shaped measurement ID present in the
  environment.
- A live Playwright pass against both the dev server and a local production build
  (`npm run build && npm run start`) with no `.env.local` present (i.e. the exact shipped
  configuration) confirmed: zero requests to any Google Analytics/Tag Manager/DoubleClick/Meta/
  Clarity/Plausible/Umami/PostHog domain while browsing `/courses/ielts` and
  `/free-diagnostic-test?programme=ielts&source=ielts-page` (including scrolling and opening an
  FAQ item); zero analytics cookies or `localStorage` identifiers created; zero console errors;
  zero dev-debug console output (the opt-in flag was unset); every documented CTA carries its
  correct `data-analytics-*` attributes with no nested duplicate-firing elements; clicking an
  instrumented CTA neither throws nor delays navigation; and cross-route regressions (homepage,
  Courses hub, the WhatsApp float correctly present site-wide but still suppressed specifically on
  `/courses/ielts` per Step 11, and the IELTS diagnostic-form variant) all still behave exactly as
  the steps that built them left them.
- Separately, with a temporary, non-committed `.env.local` setting only
  `NEXT_PUBLIC_ANALYTICS_DEBUG=1` (deleted before this step's commit), a live click on the hero
  WhatsApp CTA was confirmed to produce exactly one `[analytics:dev-only] whatsapp_click
  {programme: ielts, page_path: /courses/ielts, section: hero, intent: discuss_goal}` console
  line, and page load produced exactly one `programme_view` line — proving the full instrumentation
  path (server-rendered `data-*` attributes → delegated click listener → sanitiser → dispatch)
  works correctly end-to-end when explicitly opted in, while remaining silent by default.

**PTE evidence (PTE Step 12):**

- `npm run test:analytics` — 23/23 checks passed (up from 12, all originals still passing
  unchanged): every real event name still accepted; a minimal valid PTE payload accepted; both
  programmes accepted on `/free-diagnostic-test` with their own matching `source`; an unrecognised
  programme (`"toefl"`) rejected; a programme paired with the *other* programme's own detail page
  rejected outright (`pte`+`/courses/ielts`, `ielts`+`/courses/pte`); a *known* source value
  belonging to the other programme rejected outright even though the string itself is real
  (`pte`+`ielts-page`, `ielts`+`pte-page`, on both `/courses/*` and `/free-diagnostic-test`); valid
  section/intent/source/error_type combinations kept for both programmes; a wider sensitive-key
  injection attempt (now including `phone`, `score`, `target_score`, `deadline`, `country`,
  `query`, `form_data` alongside the original `name`/`email`/`whatsapp`/`href`/`message`) fully
  stripped on both an IELTS-shaped and a PTE-shaped payload; GA measurement-ID shape validation
  unchanged; `analyticsIsActive()` confirmed to stay `false` even with a valid-shaped measurement
  ID *and* a fully valid PTE payload present together; and (new) `resolvePagePath()` — extracted
  from `lib/analytics/track.ts` into the self-contained `lib/analytics/pagePaths.ts` specifically
  so this pure function could be exercised directly here — correctly resolves each programme's own
  detail page and the shared `/free-diagnostic-test` route, returns nothing for any other path,
  and never returns a path carrying a query string.
- A live Playwright pass against a local production build (`npm run build && npm run start`) with
  no `.env.local` present confirmed zero requests to any known analytics/advertising/replay host
  and zero third-party requests of any kind while browsing `/courses/pte`,
  `/free-diagnostic-test?programme=pte&source=pte-page`, `/courses/ielts`, the homepage and the
  Courses hub (including scrolling the full PTE page, opening a PTE FAQ item, and clicking every
  non-destructive PTE WhatsApp CTA); zero cookies or `localStorage`/`sessionStorage` keys created
  on the site's own origin (the only cookies observed were `wa_ul`/`wa_lang_pref` on
  `whatsapp.com`/`api.whatsapp.com` — WhatsApp's own external site, set only because the test
  actually let a real `wa.me` popup load; not something this site sets or controls); no
  `<script src>` referencing a known tracker domain anywhere in the rendered HTML.
- With a temporary, non-committed `.env.local` setting `NEXT_PUBLIC_ANALYTICS_DEBUG=1` (deleted
  before this step's commit, confirmed via `ls`): exactly one `programme_view` logged on PTE page
  load with `programme: pte, page_path: /courses/pte`; exactly one `whatsapp_click` (with the
  correct `section`/`intent`) for each of the hero, score-profile, learning-format, pricing,
  availability and final-enquiry CTAs; exactly one `email_click` for the final CTA's unconfigured
  fallback; zero events from expanding a PTE FAQ item or following the hero's same-page anchor
  link; the IELTS page view continued to fire correctly and distinctly (`programme: ielts`,
  never `pte`) with no regression; and navigating PTE → IELTS → back to PTE produced exactly one
  further `programme_view` for the return visit (no dedup failure, no double-fire) — confirming
  `ProgrammePageViewTracker`'s `pathname`-keyed `useEffect` behaves correctly for both mounted
  instances.
- Form lifecycle (same temporary `.env.local`, plus a temporary valid-format
  `NEXT_PUBLIC_FORMSPREE_ENDPOINT`, both confirmed removed afterward): clicking the PTE final
  CTA's configured-form link fired exactly one `assessment_cta_click` with
  `source: pte-page` before navigating; the first meaningful edit on the resulting PTE-locked form
  fired exactly one `assessment_form_start` with `programme: pte, source: pte-page`; further edits
  did not re-fire it; a submission to the fake endpoint fired exactly one `assessment_form_error`
  with a safe categorical `error_type` (`network` or `provider`) and no entered field value in the
  log; no `assessment_form_submit` fired for the failed attempt (confirmed genuine-success-only
  gating is unchanged); and the same edit performed on the **general** (non-programme) form variant
  produced zero analytics events, confirming the generic form still stays outside programme-
  specific conversion tracking. A confirmed real provider *success* response could not be tested
  (no live Formspree account is configured in this environment) — marked **Not tested** for that
  specific sub-case; the `res.ok === true` gating logic itself was verified by code inspection
  and is identical in shape to the already-proven IELTS path.
- Fixture-branch regression (temporary edits to `content/ptePricing.ts` — a complete, valid
  `published` record — and `content/batches.ts` — one complete scheduled PTE intake — both
  reverted via `git checkout` and confirmed via a fixture-marker `grep` afterward): the published-
  pricing branch's WhatsApp CTA and the scheduled-intake branch's per-card WhatsApp CTA both fired
  their documented `whatsapp_click` events correctly, with no amount, currency, billing/policy
  text, start date, schedule, format or duration leaked into the logged payload.
- An `axe-core` automated accessibility pass (the engine is already present as a transitive
  dependency; run directly via `page.addScriptTag` + `axe.run()`, not a new project dependency)
  against both `/courses/pte` and the PTE detailed-enquiry page found and fixed two genuine,
  pre-existing WCAG AA colour-contrast failures unrelated to analytics — see "Colour-contrast
  fixes" below — and reported **zero violations on both pages** after the fix, with all `wcag2a`/
  `wcag2aa`/`wcag22aa`-tagged rules passing.

### Colour-contrast fixes found during the PTE Step 12 audit (unrelated to analytics)

An `axe-core` pass required by this step's own "measure WCAG AA contrast" mandate surfaced two
real, measurable failures that predate Step 12:

- `components/pte/PTETaskCurriculum.tsx`'s task-family chips (`text-teal` on `bg-amber-tint`)
  measured **4.03:1**, short of the 4.5:1 minimum for 12px text. Changed to `text-amber-dark`
  (the same `#1F616E` token already used elsewhere as the brand's darker accent), which measures
  **6.11:1** on the same background.
- `components/pte/PTECoachingProcess.tsx`'s feedback-area category labels (`text-teal` on
  `bg-ivory`) measured **4.42:1**, also short of 4.5:1. Same fix: changed to `text-amber-dark`,
  measuring **6.69:1**.

**Flagged, not fixed:** `components/ielts/IELTSCoachingProcess.tsx` has the identical
`text-teal`-on-`bg-ivory` pattern at the identical location (its own feedback-area labels) and
almost certainly fails the same 4.42:1 check — this was not fixed here to keep this step scoped to
the PTE route; it needs the same one-line `text-teal` → `text-amber-dark` change whenever IELTS is
next touched, or as its own small fix.

### IELTS enquiry handoff (IELTS Step 9)

`components/ielts/IELTSFinalCTA.tsx` picks its secondary action from `formsAreConfigured()` on
the server: while the Formspree endpoint above is unconfigured, it shows a `mailto:` link to
`aishasenglish@gmail.com` (built by `lib/contact.ts`'s `emailLink()`) instead of the detailed
form. Once a real endpoint is configured, that secondary action automatically switches to
`/free-diagnostic-test?programme=ielts&source=ielts-page`, which preselects and locks
`components/DiagnosticForm.tsx` to "IELTS Preparation" and swaps its field guidance to IELTS
wording — see `lib/enquiryQuery.ts` for the fixed allowlist that resolves the `programme`/`source`
query values (an unrecognised value always falls back to the original generic form). The
Formspree payload now also includes a non-sensitive `source` label and, only when the visitor
supplied one, `_replyto: form.email` — no code change is needed to activate any of this once a
real endpoint is set.

### PTE enquiry handoff (PTE Step 9)

`components/pte/PTEFinalCTA.tsx` follows the identical pattern: `formsAreConfigured()` on the
server picks either `/free-diagnostic-test?programme=pte&source=pte-page` (preselects and locks
`components/DiagnosticForm.tsx` to "PTE Academic Preparation" and swaps its field guidance to PTE
wording) or a `mailto:` link to `aishasenglish@gmail.com` when unconfigured — no code change
needed to activate either once a real endpoint is set. `components/DiagnosticForm.tsx` now reads
all three variants' (general/ielts/pte) labels, placeholders and fallback/success/error WhatsApp
messages from one typed `VARIANT_CONFIG` map rather than a growing set of `isIelts` ternaries — the
general and IELTS variants' exact prior behaviour was preserved when this was introduced.
**Update (PTE Step 12):** `assessment_form_*` events now also fire for the PTE variant — see
`docs/analytics-event-map.md`'s per-programme instrumentation tables and this document's
"Analytics activation checklist" above for the (still fully inert) PTE instrumentation. The
general variant still emits nothing.

## Contact details — verify before relying on them publicly

- **Email**: `content/site.ts`'s `email` field is set to `aishasenglish@gmail.com`, per Aisha's
  explicit confirmation during Step 12. Every rendered `mailto:` link and visible email address
  is built from this one value.
- **WhatsApp number**: `content/site.ts`'s `whatsapp.display` / `whatsapp.intl`
  (`0311-2233671` / `923112233671`) were already in place before Step 12 and were treated as an
  existing, owner-supplied contact rather than altered — reconfirm this is still the correct
  number to publish before launch.
- **City / time zone**: `Lahore, Pakistan` / `PKT (GMT+5)` — likewise pre-existing and left
  unchanged.
- **Qualification / role**: owner-confirmed as `MPhil in English Literature` and
  `College Lecturer` — now the two canonical `content/site.ts` fields (`qualification`,
  `professionalRole`) every credential string on the site is built from. `IDP-Certified IELTS
  Trainer` and `Corporate Trainer` are pre-existing, left unchanged — confirm these remain
  accurate. Note "College Lecturer" is deliberately not "Government College Lecturer" — that
  extra distinction hasn't been separately confirmed as public; add it back only if Aisha
  explicitly asks for it everywhere.

## Social accounts

`content/site.ts`'s `socials` block is currently all empty strings (no icons render in the footer
— see `lib/social.ts`, which also rejects anything that isn't a real `https://` URL on the
expected platform domain). Add a real profile URL per platform only once Aisha confirms the
handle; never fill these with placeholder or invented links.

## High priority — before publishing an IELTS fee

- **IELTS pricing (`content/ieltsPricing.ts`)**: this is now the *only* source
  `/courses/ielts` is allowed to read a fee from (`components/ielts/IELTSPricing.tsx`) — not
  `content/courses.ts`'s generic `price` field, and not a `<PricingCard>` (still not imported on
  this page). `content/courses.ts`'s IELTS `discount` object — which claimed "LIMITED TIME: 40%
  OFF" from $75/PKR 20,000 down to $45/PKR 12,000, contradicting its own `price: 10000` and with
  no verified expiry — has been deleted entirely (IELTS Step 6), not merely left unrendered.
  `ieltsPricing`'s `status` is currently `"enquire"`: the page shows a fee-enquiry panel with a
  WhatsApp CTA, and no exact amount renders anywhere. To publish a real fee, every field
  `isValidPublishedPrice()` checks must be answered and approved by Aisha first — see
  `docs/ielts-offer-verification.md`'s "Billing and policy questions still required" section for
  the complete list (billing basis, duration, group-vs-one-to-one pricing, inclusions,
  recordings, mocks, payment schedule, instalments, accepted methods/currencies, who pays
  transfer fees, cancellation/reschedule/missed-class/refund/transfer policy, and how long a
  quoted fee stays valid). Do not hand-edit `ieltsPricing` to `status: "published"` without every
  field complete — an incomplete or malformed record fails the build (see the module-level check
  in `content/ieltsPricing.ts`), and an expired `validUntil` fails safely back to the enquiry
  panel at render time rather than showing stale pricing.

## High priority — before publishing a PTE fee (PTE Steps 1, 5 and 6)

- **PTE inclusions**: `<IncludedList course={course} />` and the shared `<LearningFormats />` have
  been removed entirely from `/courses/pte` (PTE Steps 1 and 5) — the five generic inclusion
  claims (live Zoom classes, weekly practice tests, full-length mocks, personal feedback, 1-on-1
  consultation) and `LearningFormats`' own group/one-to-one/Zoom/recordings assertions do not
  render anywhere on that page. `components/pte/PTELearningFormat.tsx` shows only the stable,
  already-approved teaching method plus a neutral checklist of operational details to confirm.
- **PTE pricing (`content/ptePricing.ts`)**: this is now the *only* source `/courses/pte` is
  allowed to read a fee from (`components/pte/PTEPricing.tsx`) — not `content/courses.ts`'s
  generic `price` field, and not a `<PricingCard>` (still not imported on this page).
  `ptePricing`'s `status` is currently `"enquire"`: the page shows a fee-enquiry panel with a
  WhatsApp CTA, and no exact amount renders anywhere (PTE Step 6). To publish a real fee, every
  field `isValidPublishedPTEPrice()` checks must be answered and approved by Aisha first — see
  `docs/pte-offer-verification.md`'s "Billing and policy questions still required" section for
  the complete list (exact test/format, billing basis, duration, group-vs-one-to-one pricing,
  inclusions, recordings, mocks, practice-platform access, payment schedule, instalments,
  accepted methods/currencies, who pays transfer fees, cancellation/reschedule/missed-session/
  refund/transfer policy, and how long a quoted fee stays valid). Do not hand-edit `ptePricing` to
  `status: "published"` without every field complete — an incomplete or malformed record fails
  the build (see the module-level check in `content/ptePricing.ts`), and an expired `validUntil`
  fails safely back to the enquiry panel at render time rather than showing stale pricing.

## High priority — before the next PTE format update (PTE Step 2)

- **Recheck the PTE Academic task list and public scoring facts against Pearson's current format
  and score guide before launch and after any announced test update.** `content/pte.ts`'s
  `curriculum` and `scoreProfile` objects were built from the official Pearson pages listed in
  `docs/pte-content-sources.md`, checked 27 August 2026. Pearson has changed the PTE Academic
  format before (the `Summarize Group Discussion` / `Respond to a Situation` tasks were added
  from August 2025) — if it happens again, update `content/pte.ts`, that document's source table,
  and `sourceVerifiedAt` together, not separately.

## High priority — before publishing a PTE availability record (PTE Step 7)

- **PTE availability (`components/pte/PTEAvailability.tsx`)**: this is now the *only* source
  `/courses/pte` reads intake dates from — the shared `<BatchTable>` has been removed from this
  page entirely. All three PTE-tagged records in `content/batches.ts` are historical (past dates,
  `"Closed"`, `published: false`), so the page currently and correctly shows the no-intake
  enquiry state, not a scheduled intake. To publish a real PTE intake, the record needs `pte` in
  `courseSlugs`, a genuine future `startDate`, confirmed `format`, `duration` and `schedule`,
  `timezone: "Asia/Karachi"`, `status: "Open"` (or a freshly-verified `"Filling Fast"` with
  `statusVerifiedAt`), `published: true`, and a current `verifiedAt` — see
  `docs/updating-batches.md` section 9b and `docs/pte-offer-verification.md`'s "Availability
  state" section. A record missing `duration` or `schedule` is silently filtered out by
  `isCompletePteIntake()` and never rendered as a "TBA" placeholder.

## PTE technical SEO, metadata and internal linking (PTE Step 10)

- **Metadata**: `/courses/pte` now declares its own absolute title, description, and Open
  Graph/Twitter metadata (including the new `public/images/social/pte-academic-preparation.jpg`,
  a genuine `1200×630` composed image) instead of inheriting root-layout defaults or the
  portrait `og-image.jpg`. No score, price, recording or availability promise appears in any of
  it.
- **Breadcrumb**: a visible `components/pte/PTEBreadcrumb.tsx` (Home / Courses / PTE Academic
  Preparation) and a matching `BreadcrumbList` JSON-LD were added, both generated from the same
  `content/pte.ts` `breadcrumb` array. No `Offer`, `Review`, `FAQPage`, `QAPage` or
  `CourseInstance` markup was added — rechecked against current official Google guidance (see
  `docs/pte-content-sources.md`).
- **Cross-site corrections**: `content/homeCourses.ts`'s PTE override
  ("Online coaching · Confirm current format and support") replaces the shared default line that
  falsely implied live delivery, group/one-to-one availability and recordings for PTE.
  `content/coursePresentation.ts`'s PTE card copy no longer uses "task strategy" wording or
  implies general migration/university acceptance. See `docs/pte-offer-verification.md`'s
  "Technical SEO, metadata and internal linking" section for the full detail.
- **Verify before relying on this publicly**: production HTTPS/canonical-host behaviour, sitemap
  entry uniqueness and social-preview rendering on the actual deployed URL — these were checked
  against the local dev/build output in this step, not a live production deploy.

## PTE mobile performance and accessibility hardening (PTE Step 11)

- **Shared route chrome now driven by `lib/routeChrome.ts`**: `components/WhatsAppFloat.tsx` and
  `components/UtilityBar.tsx` both suppress the generic floating WhatsApp button / phone-width
  utility bar for the same named route list (`PROGRAMME_DETAIL_ROUTES_WITH_OWN_CHROME`), currently
  `["/courses/ielts", "/courses/pte"]`. Adding a third programme route to this treatment later
  means adding one string to that one list — not editing two separate inline conditions.
- **`components/DiagnosticForm.tsx`'s required/optional indicator and privacy note** were bumped
  from `text-xs` to `text-sm` — this affects the general, IELTS and PTE form variants equally
  (there's only one shared component).
- **Performance snapshot** (production build, `npm run build && npm run start`, Chromium via
  Playwright, 390×844 viewport, Android Chrome UA, CPU 4x slowdown, ~1.6 Mbps/150 ms-latency
  network, 27 August 2026): `/courses/pte` ships the identical shared framework JavaScript payload
  as a page with no form (`/about`) — zero PTE-specific script weight — and zero third-party
  network requests. No Lighthouse CLI was available in this environment to produce an official
  score; lab timing (TTFB, DOMContentLoaded, paint, best-effort LCP/CLS via
  `PerformanceObserver`) was captured instead and is not a substitute for a full Lighthouse run
  or real-user field data — re-run an actual Lighthouse audit before relying on a specific score
  number publicly.
- See `docs/pte-offer-verification.md`'s "Mobile performance and accessibility hardening" section
  for the complete finding list and QA method.

## Flagged during IELTS Step 10, not fixed (out of this step's scope)

- **`components/CourseExplorer.tsx`** (the homepage's programme grid) states: "Every programme is
  taught live online and includes recordings, guided practice and personal feedback." This is the
  same class of unverified universal claim IELTS Step 10 removed from the root layout's
  `description` metadata ("Classes recorded.") — and it directly contradicts
  `docs/ielts-offer-verification.md`, where live/synchronous delivery, recording availability and
  recording access period are all still "Needs owner confirmation" specifically for IELTS.
  **Also confirmed to contradict PTE** (PTE Step 10 audit — same rows are "Needs owner
  confirmation" in `docs/pte-offer-verification.md`), and almost certainly every other programme
  this sentence covers, since it's one shared page-level paragraph rather than a per-programme
  field. Fixing it is homepage content work that would need to change copy shared across every
  programme card, outside any single programme-page step's scope; flagged here so it isn't lost.
  Confirm with Aisha whether every current programme genuinely is live and recorded before either
  keeping this sentence or rewriting it to something that doesn't assert a delivery model that
  hasn't been confirmed for every programme. (The per-card `delivery` line directly below this
  paragraph is a separate, already-corrected concern — see the PTE-specific
  `HOME_COURSE_DELIVERY` override added in PTE Step 10.)

## Flagged during Step 12, not fixed (out of this step's scope)

- **`components/PricingCard.tsx`** labels every course's price "One-time fee" (shown on the
  PTE, TOEFL, Writing and Spoken English pricing cards — IELTS's card is currently hidden, see
  above). `content/faqs.ts` was corrected in Step 12 to stop asserting a single universal billing
  model in the FAQ, but this same claim is still live in a more prominent place — directly next
  to the price on four remaining course pages. `content/courses.ts`'s `Course` type has no field
  recording billing model per programme, so this can't be verified from the codebase alone.
  Confirm with Aisha whether every course is genuinely billed as a one-time fee before leaving
  this label as-is, or change it to something that doesn't assert a billing model that hasn't
  been confirmed.

## Lower priority — noted, not blocking

- **Spelling consistency**: newer content (Steps 4–12) consistently uses British spelling
  (`programme`, `enrol`/`enrolment`). A few older, out-of-scope files still use American spelling
  in code identifiers and copy (e.g. `lib/whatsapp.ts`'s `courseEnrollLink` function name,
  `components/PricingCard.tsx`'s "Enroll via WhatsApp" button, `app/batches/page.tsx`'s
  `enrollSteps`/"How to enroll", `README.md`'s "enrollment"). Left untouched by Step 12 — renaming
  a shared function identifier and its call sites is a larger refactor than the "small correction"
  scope this step allows.
- **O & A Level page**: `app/courses/o-a-level-english/page.tsx` still carries an unverified "10+
  years" of experience claim (`YEARS_EXPERIENCE` in that file) — flagged in Step 7, still
  outstanding. (Its "MA English Literature" wording — metadata, JSON-LD `jobTitle`, visible
  copy — was corrected in the qualification/role standardisation pass; it and
  `app/courses/ielts/page.tsx` now consistently read `site.qualification` /
  `site.professionalRole`.)
