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

### Analytics activation checklist (IELTS Step 12; extended to PTE in PTE Step 12 and to TOEFL in TOEFL Step 12)

`lib/analytics/` implements a strict, typed event contract shared by the IELTS, PTE and TOEFL
enquiry journeys (see `docs/analytics-event-map.md` for the full funnel and per-action
instrumentation tables for all three programmes) — `components/analytics/AnalyticsListener.tsx`
(one delegated click listener, mounted once in `app/layout.tsx`),
`components/analytics/ProgrammePageViewTracker.tsx` (fires `programme_view` once per navigation to
`/courses/ielts`, `/courses/pte` or `/courses/toefl` — one small typed component mounted with a
different `programme`/`pagePath` prop pair on each page, replacing the earlier IELTS-only
`IELTSPageViewTracker.tsx`), and `components/DiagnosticForm.tsx`'s IELTS-, PTE- and TOEFL-variant
form-lifecycle events. **All of it is currently inert, for all three programmes.**
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

**TOEFL evidence (TOEFL Step 12):**

- `npm run test:analytics` — 27/27 checks passed (up from 23, all originals still passing
  unchanged): every real event name still accepted; a minimal valid TOEFL payload accepted; all
  three programmes accepted on `/free-diagnostic-test` with their own matching `source`; an
  unrecognised programme (now `"toeic"`, since `"toefl"` is a real programme as of this step)
  rejected; a programme paired with a *different* programme's own detail page rejected outright
  for every one of the six possible cross-programme pairs
  (`pte`+`/courses/ielts`, `ielts`+`/courses/pte`, `toefl`+`/courses/ielts`,
  `toefl`+`/courses/pte`, `ielts`+`/courses/toefl`, `pte`+`/courses/toefl`); a *known* source value
  belonging to a different programme rejected outright even though the string itself is real, for
  every one of ten combinations across `/courses/*` and `/free-diagnostic-test`; valid
  section/intent/source/error_type combinations kept for TOEFL; a TOEFL-specific sensitive-key
  injection attempt (now including `institution`, `programme_name`, `overall_score`,
  `section_score`, `score_scale`, `previous_result`, `test_date`, `timezone` alongside the
  original set) fully stripped; GA measurement-ID shape validation unchanged; `analyticsIsActive()`
  confirmed to stay `false` even with a valid-shaped measurement ID *and* a fully valid TOEFL
  payload present together; and `resolvePagePath("/courses/toefl")` now correctly resolves to
  `/courses/toefl` (the unresolved-route example was moved to `/courses/o-a-level-english` since
  `/courses/toefl` is now a real resolved path).
- A live Playwright pass against a local production build (`npm run build && npm run start`) with
  no `.env.local` present confirmed zero requests to any known analytics/advertising/replay host
  (156 total requests observed while browsing `/courses/toefl`,
  `/free-diagnostic-test?programme=toefl&source=toefl-page`, `/courses/ielts`, `/courses/pte`, the
  homepage and the Courses hub — including scrolling the full TOEFL page, opening a TOEFL FAQ item,
  and clicking every non-destructive TOEFL WhatsApp CTA); zero cookies or `localStorage`/
  `sessionStorage` keys created on the site's own origin (the only cookies observed were
  `wa_ul`/`wa_lang_pref` on `whatsapp.com`/`api.whatsapp.com` — WhatsApp's own external site, set
  only because the test actually let a real `wa.me` popup load; not something this site sets or
  controls); no `<script src>` referencing a known tracker domain anywhere in the rendered HTML;
  zero dev-debug console output (the opt-in flag was unset).
- With a temporary, non-committed `.env.local` setting only `NEXT_PUBLIC_ANALYTICS_DEBUG=1`
  (deleted before this step's commit, confirmed via `ls`), run against the dev server (the debug
  log only fires outside production): exactly one `programme_view` logged on TOEFL page load with
  `programme: toefl, page_path: /courses/toefl`; exactly one `whatsapp_click` (with the correct
  `section`/`intent`) for each of the hero, score-profile, learning-format, pricing, availability
  and final-enquiry CTAs; exactly one `email_click` for the final CTA's unconfigured fallback; zero
  events from expanding a TOEFL FAQ item, following the hero's same-page anchor to `#toefl-fit`, or
  clicking the fit section's official ETS source link or internal `/courses#language-tests`
  comparison link; the IELTS and PTE page views continued to fire correctly and distinctly
  (`programme: ielts` / `programme: pte`, never `toefl`) with no regression; and navigating
  TOEFL → IELTS → back to TOEFL produced exactly one further `programme_view` for the return visit
  (no dedup failure, no double-fire) — confirming `ProgrammePageViewTracker`'s `pathname`-keyed
  `useEffect` behaves correctly for the newly-added instance too.
- Form lifecycle (same temporary `.env.local`, plus a temporary valid-format
  `NEXT_PUBLIC_FORMSPREE_ENDPOINT`, both confirmed removed afterward): clicking the TOEFL final
  CTA's configured-form link fired exactly one `assessment_cta_click` with `source: toefl-page`
  before navigating; the first meaningful edit on the resulting TOEFL-locked form fired exactly one
  `assessment_form_start` with `programme: toefl, source: toefl-page`; further edits (including
  filling in a name, institution text and WhatsApp number) did not re-fire it; a submission to the
  fake endpoint fired exactly one `assessment_form_error` with a safe categorical `error_type`
  (`provider`) and confirmed no entered field value (the test's own "QA Analytics Candidate" name
  or "ABC University" text) anywhere in the log; no `assessment_form_submit` fired for the failed
  attempt; a second submission to a mocked 200-response endpoint then fired exactly one
  `assessment_form_submit` with `programme: toefl, source: toefl-page` (a genuine, non-production
  double confirming the `res.ok === true` gating, since no live Formspree account exists in this
  environment — the code path itself is identical in shape to the already-proven IELTS/PTE path);
  and the same edit performed on the **general** (non-programme) form variant produced zero
  analytics events, confirming the generic form still stays outside programme-specific conversion
  tracking.
- Fixture-branch regression (temporary edits to `content/toeflPricing.ts` — a complete, valid
  `published` record — and `content/batches.ts` — one complete scheduled TOEFL intake — both
  reverted via `git checkout` and confirmed via a fixture-marker `grep` afterward): the published-
  pricing branch's WhatsApp CTA and the scheduled-intake branch's per-card WhatsApp CTA both fired
  their documented `whatsapp_click` events correctly (exactly the allowlisted
  `programme`/`page_path`/`section`/`intent` fields, nothing more), with no amount, currency,
  billing/policy text, start date, schedule, format or duration leaked into the logged payload.
- Instrumentation coverage (production build): exactly 7 `data-analytics-*`-carrying elements
  render in the current (unconfigured Formspree, enquire pricing, no-intake availability) default
  state — hero, score-profile, learning-format, pricing, availability, final-WhatsApp and
  final-email — each with both `section` and `intent` present and no nested duplicate-firing
  elements (a nested element would risk a double-fire from both the child's own handler and the
  parent's delegated listener); zero console or hydration errors on page load.
- An `axe-core` automated accessibility pass against `/courses/toefl` in this final state reported
  **zero violations**, with all `wcag2a`/`wcag2aa`/`wcag22aa`-tagged rules passing — confirming
  Step 11's hardening work and this step's instrumentation additions together introduced no new
  accessibility regression.

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

### Colour-contrast fix found during the TOEFL Step 3 audit (unrelated to analytics)

An `axe-core` pass against `/courses/toefl` after adding `TOEFLCoachingProcess.tsx` found the same
family of failure again: the four stage cards' `text-sm font-medium text-teal` "Result:" line on
`bg-ivory` measured **4.41:1**, short of 4.5:1 for 14px text. Fixed the same way — changed to
`text-amber-dark`, measuring **6.69:1** on the same background.

**Flagged, not fixed:** the identical `text-teal` "Result:" line exists in
`components/pte/PTECoachingProcess.tsx` and `components/ielts/IELTSCoachingProcess.tsx` (both
already flagged above for their separate feedback-area-label instance of the same underlying
issue) — not fixed here to keep this step scoped to the TOEFL route. All three coaching-process
components' remaining `text-teal`-on-tinted-surface instances should be swept together the next
time any one of IELTS, PTE or TOEFL is touched, rather than fixed one occurrence at a time across
three separate steps.

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

### TOEFL enquiry handoff (TOEFL Step 9)

`components/toefl/TOEFLFinalCTA.tsx` follows the identical pattern: `formsAreConfigured()` on the
server picks either `/free-diagnostic-test?programme=toefl&source=toefl-page` (preselects and
locks `components/DiagnosticForm.tsx` to "TOEFL iBT Preparation" and swaps its field guidance to
TOEFL wording) or a `mailto:` link to `aishasenglish@gmail.com` when unconfigured — no code change
needed to activate either once a real endpoint is set. `components/DiagnosticForm.tsx`'s typed
`VARIANT_CONFIG` map (general/ielts/pte/toefl) already covers the TOEFL variant without
reintroducing ternary sprawl. **Update (TOEFL Step 12):** `assessment_form_*` events now also fire
for the TOEFL variant — see `docs/analytics-event-map.md`'s per-programme instrumentation tables
and this document's "Analytics activation checklist" above for the (still fully inert) TOEFL
instrumentation. The general variant still emits nothing.

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

## High priority — before publishing a TOEFL fee, intake or format claim (TOEFL Steps 1–12)

- **TOEFL positioning rebuilt**: `/courses/toefl` now uses dedicated
  `components/toefl/{TOEFLHero,TOEFLAuthorityStrip,TOEFLFit,TOEFLScoreProfile,
  TOEFLTaskCurriculum,TOEFLFinalCTA}.tsx` reading from `content/toefl.ts`, replacing the generic
  `CourseHero`/`CourseModules` render and its pre-2026 curriculum labels ("Integrated and
  independent Writing tasks", "Speaking responses that score") and broad
  "universities worldwide" positioning. The current-format qualifier, score-requirement profile
  and four-skill curriculum are all sourced from official ETS pages — see
  `docs/toefl-content-sources.md`.
- **TOEFL score requirement and curriculum (TOEFL Step 2)**: the Step 1 temporary
  `TOEFLCurriculumPreview.tsx` has been removed entirely (not merely superseded).
  `TOEFLScoreProfile.tsx` explains that ETS sets no universal passing score and that each
  institution sets its own requirement (quoted directly from ETS's score-report FAQ);
  `TOEFLTaskCurriculum.tsx` covers the current Reading/Listening/Writing/Speaking task families
  with an adaptive-design note (deliberately says only "adaptive", not the unconfirmed
  "multistage adaptive" — the 2026 technical-specification PDF that might confirm the more
  specific term could not be read by the tooling available in this session; see
  `docs/toefl-content-sources.md`) and a scoring-integrity note distinguishing tutor feedback from
  an official TOEFL score.
- **Recheck the current TOEFL iBT task families, adaptive-section wording and score-reporting
  facts against ETS before launch and after any announced test update.** `content/toefl.ts`'s
  `scoreProfile` and `curriculum` objects were built from the official ETS pages listed in
  `docs/toefl-content-sources.md`, checked 27 August 2026. If ETS updates the format, task
  families, score scale or transition timeline, update `content/toefl.ts`, that document's source
  table, and `sourceVerifiedAt` together — not separately.
- **TOEFL coaching process (TOEFL Step 3)**: `TOEFLCoachingProcess.tsx` adds a four-stage teaching
  cycle and a feedback-by-task-type explanation (Reading/Listening decisions, Writing responses,
  Speaking responses), none of which asserts a formal diagnostic, personalised study plan, fixed
  practice/marking quantity, feedback turnaround, retained recordings, ETS-licensed question-bank
  access, a proprietary platform, automatic analytics, or one-to-one-included-with-group — every
  one of those remains "Needs owner confirmation" in `docs/toefl-offer-verification.md`. Tutor
  feedback is explicitly distinguished from an official TOEFL score, and the standard "no TOEFL
  score can be guaranteed" expectation statement appears once, not per stage.
- **TOEFL feedback demonstration and evidence (TOEFL Step 4)**: `TOEFLFeedbackDemo.tsx` adds an
  original, explicitly-illustrative `Write an Email` example (never learner work, never an ETS
  question, never given a score estimate) with a visible boundary explaining that a text example
  cannot demonstrate Speaking feedback (pronunciation, intelligibility and pace require actual
  audio). `TOEFLVerifiedEvidence.tsx` renders nothing — `content/testimonials.ts` has no
  TOEFL-tagged, consent-confirmed entry — see `docs/toefl-evidence-intake.md` for the intake
  checklist a future genuine record must satisfy before publication.
- **TOEFL inclusions**: `<IncludedList course={course} />` has been removed entirely from
  `/courses/toefl` — the five generic inclusion claims (live Zoom classes, weekly practice tests,
  full-length mocks, personal feedback, 1-on-1 consultation) do not render anywhere on that page.
- **TOEFL learning format and pre-enrolment confirmation checklist (TOEFL Step 5)**:
  `TOEFLLearningFormat.tsx` (id `toefl-learning-format`) confirms only that TOEFL iBT coaching is
  delivered online, summarises the already-approved Step 2–4 teaching model as four stable,
  non-promissory support items (requirement-led instruction, current-task practice, focused
  response review, computer-test routines — none asserting a platform, frequency or
  live/asynchronous claim), and separately lists 15 operational details as a neutral pre-enrolment
  checklist to confirm (format coverage, test-centre/Home Edition needs, delivery mode,
  group/one-to-one availability, platform/schedule/time zone, lesson frequency and duration,
  group-size limit, recordings, Speaking/Writing feedback, Reading/Listening review,
  timed-practice/mocks, practice-platform access, official-vs-teacher-created materials,
  between-session support, fee/policies) using a hollow-circle marker (never a checkmark) inside a
  separate `<aside>` landmark, plus one contextual WhatsApp CTA ("Ask About the Current TOEFL
  Option") that does not compete with the final CTA below it. The shared `<LearningFormats />`
  (which asserts live small-group teaching, Zoom, recordings and flexible scheduling) is still not
  rendered on `/courses/toefl`.
- **TOEFL pricing transparency and verification (TOEFL Step 6)**: `<PricingCard course={course} />`
  remains removed entirely from `/courses/toefl` — no amount, `One-time fee`, `PKR 10,000`,
  discount or enrolment action renders anywhere on that page. `content/toeflPricing.ts` (new, a
  discriminated `status: "enquire" | "published"` union mirroring
  `content/ieltsPricing.ts`/`content/ptePricing.ts`) is now the only publication-authoritative
  TOEFL pricing source; `toeflPricing.status` is `"enquire"`, so `TOEFLPricing.tsx` (id
  `toefl-pricing`) renders only the honest "Review the complete TOEFL fee before you decide."
  fee-enquiry panel with a single WhatsApp CTA ("Ask for the Current TOEFL Fee") requesting the
  complete current offer. `isValidPublishedTOEFLPrice()` gates the `published` branch and rejects
  a missing field, non-finite/zero/negative amount, unsupported currency, wrong `programmeLabel`,
  invalid or impossible date sequence, an already-expired `validUntil` (checked in Pakistan time),
  or an inclusion id outside `content/toefl.ts`'s verified `delivery.supportItems` — verified both
  by an assert-throws build guard and by fixture testing (25/25 validation-logic checks; a
  temporary valid fixture rendered correctly and was fully reverted, confirmed via `grep` for "QA
  FIXTURE" and `git status` before commit). The legacy `content/courses.ts` TOEFL `price: 10000` is
  confirmed unreachable on this route — `PricingCard` is never imported near `/courses/toefl`, and
  no TOEFL JSON-LD or `Offer` structured data exists anywhere on the site.
- **TOEFL current availability and intake handling (TOEFL Step 7)**: the page-level `<BatchTable>`
  wrapper has been replaced entirely by `components/toefl/TOEFLAvailability.tsx` (id
  `toefl-availability`), a dedicated server component that reads
  `getPublishedUpcomingBatches("toefl")` directly and controls its own TOEFL-specific heading,
  no-intake checklist and enquiry message rather than the shared cross-programme fallback. Both
  TOEFL-tagged records in `content/batches.ts` (`batch-001`, `batch-003`) remain historical (past
  dates, `"Closed"`, `published: false`), so production correctly renders "Ask about the next
  suitable TOEFL start." with an 8-item "Include these details" checklist (institution, required
  overall/section scores and scale, previous result or starting point, planned test date and
  deadline, test-centre/Home Edition plan, country/time zone, usual availability), a single
  WhatsApp CTA ("Check TOEFL Availability"), and an explicit "sending an enquiry does not reserve a
  place" reassurance — no link to `/batches` since it holds no additional relevant TOEFL
  information. `isCompleteToeflIntake()` additionally requires non-empty `duration` and `schedule`
  before any future record could render as a card, and publishing one also requires separate owner
  confirmation (recorded in `docs/toefl-offer-verification.md`, not a batch field) that the
  coaching actually covers the TOEFL iBT format applicable to that intake's test-date context.
  Verified via 11 temporary fixture records (valid, missing-schedule, missing-duration,
  unpublished, closed, past-dated-Open, Filling-Fast with current/missing/stale
  `statusVerifiedAt`, same-day, >3-records-triggering-the-`/batches`-link, and an unrelated-programme
  record) — every one behaved correctly and all fixtures were fully reverted from
  `content/batches.ts` before commit, confirmed via `grep` for "QA FIXTURE" and `git diff`. The
  shared `<BatchTable>` itself is untouched and remains in use by the homepage, `/batches`, IELTS
  and PTE.
- **TOEFL specialist FAQ and objection handling (TOEFL Step 8)**: the generic 17-item
  `<FAQAccordion />` remains removed entirely from `/courses/toefl`. `components/toefl/TOEFLFAQ.tsx`
  (id `toefl-faq`) now renders the shared `FAQAccordion` component with a dedicated
  `content/toeflFaqs.ts` `items` prop — exactly eight questions covering exact test choice
  (TOEFL iBT vs. TOEFL Essentials/ITP, test-centre vs. Home Edition), institution-set score
  requirements (no universal passing score, current 1–6/transitional 0–120 scale), information to
  share, the tutor-feedback/official-scoring boundary, preparation time (no fixed promise),
  guarantees/shortcuts (a direct "No."), the current offer (linking to `#toefl-learning-format`,
  `#toefl-pricing` and `#toefl-availability` rather than duplicating any fee, date or schedule
  figure), and international enquiries. Test-choice and scoring facts were re-fetched live against
  ETS's current pages for this step (`docs/toefl-content-sources.md`'s "TOEFL Step 8: FAQ
  sourcing"), reconfirming no drift since Steps 2–4. A full audit of every global FAQ entry this
  step's prompt named (`docs/toefl-offer-verification.md`'s "Global FAQ audit (TOEFL Step 8)")
  found none required correction — all had already been made programme-neutral by the IELTS/PTE
  Step 8 work. No `FAQPage`/`QAPage` structured data was added (current Google guidance does not
  establish a general tutoring portfolio as eligible for the FAQ rich-result use case). No new
  dependency or client state was added — the existing native `<details>/<summary>` `FAQAccordion`
  is reused as-is.
- **TOEFL final CTA and enquiry handoff (TOEFL Step 9)**: `TOEFLFinalCTA.tsx` (id
  `toefl-enquiry`) no longer reuses the hero's shorter WhatsApp message — it now uses the complete
  canonical `content/toeflEnquiry.ts` template and requests six compact details (institution/exact
  requirement, overall/section scores and scale, previous result or starting point, planned test
  date and deadline, test-centre/Home Edition plan, country/time zone and usual availability).
  Offers WhatsApp as the primary action plus exactly one server-selected secondary action —
  `formsAreConfigured()` decides, with no client-side flash — between the allowlisted TOEFL
  detailed-enquiry form (`/free-diagnostic-test?programme=toefl&source=toefl-page`, locking
  "TOEFL iBT Preparation") and a safely encoded `mailto:` link to the canonical
  `aishasenglish@gmail.com` via `lib/contact.ts`'s `emailLink()`. `lib/enquiryQuery.ts` gained a
  `toefl` `EnquiryVariant` and `toefl-page` `EnquirySource`, mapped only from the exact query key
  `toefl` — `toefl-essentials`/`toefl-itp`/any other unknown value falls back to the general form,
  verified live. `components/DiagnosticForm.tsx`'s `VARIANT_CONFIG` gained a fourth `toefl` entry
  without changing the general/IELTS/PTE entries; `app/free-diagnostic-test/page.tsx`'s
  `PAGE_CONTENT` map gained the matching `toefl` heading/subtitle. Deliberately **no**
  `data-analytics-*` attributes or `ANALYTICS_PROGRAMME_BY_VARIANT`/`ANALYTICS_SOURCE_BY_VARIANT`
  entries were added for TOEFL — conversion measurement remains deferred to a later TOEFL step
  (mirroring PTE Step 12), so no TOEFL interaction is tracked, and none is mislabelled as an IELTS,
  PTE or general event. Verified via a temporary `.env.local` (fully removed before commit,
  confirmed via `git status`) covering both the unconfigured (real, current) and configured
  states, an intercepted Formspree payload (`_subject: "TOEFL iBT Coaching Enquiry"`,
  `source: "toefl-page"`, `programme: "TOEFL iBT Preparation"`, conditional `_replyto`), and query
  edge cases (unknown programme, unknown source, repeated array params, missing params,
  script-like input, an extremely long string) — none rendered a raw value or selected the TOEFL
  variant incorrectly. IELTS and PTE variants, the general form and `ContactForm` were
  regression-tested and remain unchanged.
- **TOEFL technical SEO, metadata and internal linking (TOEFL Step 10)**: `/courses/toefl` now
  declares an explicit absolute title (`Online TOEFL iBT Preparation | Aisha's English`,
  bypassing the root `%s | Aisha's English` template), a truthful description ("Online TOEFL iBT
  preparation centred on Reading, Listening, Writing and Speaking and your institution's confirmed
  score requirement. Ask about current availability."), a self-referencing canonical, and complete
  TOEFL-specific Open Graph/Twitter metadata pointing to a genuine `1200×630`
  `public/images/social/toefl-ibt-preparation.jpg` (composed the same way as the IELTS/PTE social
  assets — see `docs/toefl-content-sources.md`). A visible `Home / Courses / TOEFL iBT
  Preparation` breadcrumb (`components/toefl/TOEFLBreadcrumb.tsx`, id-free typed source in
  `content/toefl.ts`) and matching `BreadcrumbList` JSON-LD (built from the identical array, one
  script rendered once) were added — the only new structured-data type; no `Offer`,
  `AggregateRating`, `Review`, `FAQPage`, `QAPage` or `CourseInstance` markup was added. Corrected
  two cross-site metadata contradictions: `app/page.tsx`'s homepage description and
  `app/courses/page.tsx`'s Courses-hub description both said "live online" while naming TOEFL
  (and every other programme) — "live" removed from both, since synchronous delivery is not
  owner-confirmed for TOEFL. `components/toefl/TOEFLPricing.tsx`'s dormant (currently unreachable)
  published-price WhatsApp message opened with "I'd like to enrol" — rewritten to an
  enquiry-first message; no pricing state or amount changed. `content/homeCourses.ts`'s TOEFL
  override and `content/coursePresentation.ts`'s TOEFL card copy were re-audited against this
  step's recommended wording and found already equally accurate — left unchanged. Confirmed the
  legacy `content/courses.ts` TOEFL record (`tagline`, `modules`, `includes`, `price: 10000`)
  remains unreachable by any search-facing surface (sitemap, JSON-LD, or `CourseHero.tsx`, which
  `/courses/toefl` never imports). Verified `/sitemap.xml` lists `https://aishasenglish.com/courses/toefl`
  exactly once with no fabricated `lastModified` and no separate entry for the
  `?programme=toefl&source=toefl-page` query variant; `/robots.txt` blocks nothing. Deliberately
  added **no** TOEFL analytics tracker (no `ProgrammePageViewTracker`) — that remains Step 12's
  scope, mirroring PTE.
- **Cross-site corrections**: `content/homeCourses.ts`'s TOEFL override
  ("Online coaching · Confirm current format and support") replaces the shared default line that
  falsely implied live delivery, group/one-to-one availability and recordings for TOEFL.
  `content/coursePresentation.ts`'s TOEFL card copy no longer says "integrated-task practice"
  (a pre-2026 structural description) and no longer implies general worldwide acceptance.
- See `docs/toefl-offer-verification.md` for the complete list of unresolved TOEFL offer facts
  (format-currency, operational, pricing) and `docs/toefl-content-sources.md` for the official ETS
  sourcing behind every current-format/scoring claim on the page.

## TOEFL mobile performance and accessibility hardening (TOEFL Step 11)

- **`/courses/toefl` added to the shared route-chrome list**: `lib/routeChrome.ts`'s
  `PROGRAMME_DETAIL_ROUTES_WITH_OWN_CHROME` now reads
  `["/courses/ielts", "/courses/pte", "/courses/toefl"]`. `components/WhatsAppFloat.tsx` and
  `components/UtilityBar.tsx` needed no code change — both already read this list generically
  (from PTE Step 11) — so the generic floating WhatsApp button is now suppressed and the
  phone-width utility bar is now hidden on `/courses/toefl` exactly as they already were on
  `/courses/ielts` and `/courses/pte`.
- **Two sitewide "live" claims corrected**: `components/Header.tsx`'s global brand subtitle
  ("LIVE ONLINE ENGLISH COACHING" → "ONLINE ENGLISH COACHING") and
  `components/Footer.tsx`'s brand-summary sentence ("Live online English tutoring..." → "Online
  English tutoring...") — both render on every route, including `/courses/toefl`, and both
  asserted a universal synchronous-delivery claim that contradicts TOEFL's (and IELTS'/PTE's) own
  verified state. Regression-tested across the homepage, Courses hub and every programme route.
- **Combined-fixture conditional-branch test** (a long published TOEFL price, two scheduled TOEFL
  intakes including a verified "Filling Fast" status, and one consent-confirmed TOEFL testimonial
  — fully reverted via `git checkout`, confirmed via `git status` and a fixture-marker `grep`):
  all three branches rendered correctly together with zero axe-core violations and no overflow at
  any of the 17 required widths.
- **No new client component, dependency or analytics** was added; the TOEFL `DiagnosticForm`
  variant's mobile ergonomics (≥16px input text, disabled/preselected programme field, honeypot
  correctly hidden, failed-submission value preservation and `role="alert"` focus) were verified
  against a temporary Formspree fixture, fully removed afterward.
- See `docs/toefl-offer-verification.md`'s "Mobile performance and accessibility hardening
  (TOEFL Step 11)" section for the complete finding list, including two test-methodology
  artifacts investigated and confirmed non-issues (a non-representative `font-size: 200%`
  technique, and `page.goto()` hash-only re-navigation not triggering native fragment scroll the
  way a real click or fresh load does).

## High priority — before publishing a Spoken English fee, intake or format claim (Spoken English Steps 1–4)

- **Spoken English positioning rebuilt**: `/courses/spoken-english` now uses dedicated
  `components/spoken-english/{SpokenEnglishHero,SpokenEnglishAuthorityStrip,SpokenEnglishFit,
  SpokenEnglishPrioritiesPreview,SpokenEnglishAvailability,SpokenEnglishFinalCTA}.tsx` reading
  from `content/spokenEnglish.ts`, replacing the generic `CourseHero`/`CourseModules`/
  `IncludedList`/`PricingCard`/complete `<FAQAccordion />`/`CTASection` render and its
  outcome-promising copy ("speak without hesitation", "real speaking fluency", "freezes when
  speaking", "Thinking in English" and "Confidence for interviews & presentations" as modules).
  The page is now positioned around the candidate's own real speaking situations (work,
  interviews/presentations, study, everyday communication) with an explicit no-instant-fluency/
  no-native-accent boundary in the hero reassurance copy.
- **Authority strip**: uses only `site.qualification` (`MPhil in English Literature`) and
  `site.professionalRole` (`College Lecturer`), read directly rather than duplicated. The
  IELTS-specific "IDP-Certified IELTS Trainer" credential is deliberately not shown near this
  section (mirrors `TOEFLAuthorityStrip.tsx`'s reasoning) — it is not general Spoken English
  accreditation. "Corporate Trainer" was also omitted pending an owner decision on its exact
  current public use for this page.
- **Speaking profile and communication curriculum (Step 2)**: Step 1's temporary
  `SpokenEnglishPrioritiesPreview.tsx` was deleted and replaced by two dedicated sections read from
  `content/spokenEnglish.ts`: `SpokenEnglishSpeakingProfile.tsx` (id
  `spoken-english-speaking-profile`) — six discussion prompts (situation, listener, communication
  task, current difficulty, current experience, timeline/time-zone/availability), six
  descriptively-worded profile areas (never a score or severity label), and an explicit boundary
  note that this is a coaching needs profile, not a certified CEFR placement, clinical speech
  assessment or guarantee of progress — and `SpokenEnglishCurriculum.tsx` (id
  `spoken-english-communication-curriculum`) — six areas (pronunciation and intelligibility,
  response building, spoken grammar, functional vocabulary, listening and interaction, fluency/
  pacing/repair), each with focus areas, practice examples and a boundary note wherever a claim
  could otherwise be overstated (e.g. "not removal of the learner's identity or imitation of a
  native accent"; "Error-free performance is not promised"; "Fluency does not mean speaking
  nonstop..."). A third new section, `SpokenEnglishContextApplication.tsx` (id
  `spoken-english-context-application`), maps that curriculum emphasis onto five real situations
  (work and meetings, interviews, presentations, study, everyday) without implying a separate
  mini-course, price or guarantee per situation. All five official Council of Europe CEFR source
  URLs the implementing prompt named returned HTTP 403 Forbidden when checked this step — no CEFR
  term, level label or descriptor citation was published anywhere as a result (see
  `docs/spoken-english-content-sources.md`'s "CEFR source access attempt" section). No automated
  level test, accent playback, or before/after audio claim exists anywhere on the page.
- **Fail-closed availability**: `SpokenEnglishAvailability.tsx` (id `spoken-english-availability`)
  renders only the enquiry-only state — it does not query `content/batches.ts` at all in this
  step (all current Spoken-English-tagged batch records are historical, closed and unpublished, so
  this is also the truthful current state). No historical date, inferred cadence, or group/private
  availability claim appears. A dedicated verified-intake component (mirroring IELTS/PTE/TOEFL
  Step 7) is a later step.
- **Final CTA and WhatsApp message hierarchy (Step 2)**: `SpokenEnglishFinalCTA.tsx` now uses its
  own dedicated `finalCta.message` (a full structured enquiry ending with an explicit request to
  confirm format, schedule and fee) rather than reusing the hero's message — Step 2 shortened the
  hero's WhatsApp message to a brief goal-and-difficulty invitation and retargeted the hero's
  secondary CTA to link to the new speaking-profile section ("Build Your Speaking Profile" →
  `#spoken-english-speaking-profile`), which has its own third, full structured message
  (`speakingProfile.cta.message`). The three messages are deliberately different lengths for
  different points in a visitor's decision, not copies of one another. The final CTA's plain
  `mailto:` fallback is unchanged (no dedicated form variant yet — deliberately deferred to a later
  step, mirroring IELTS/PTE/TOEFL Step 9, since the existing generic detailed-enquiry form would ask
  the visitor to pick a programme again and lose the Spoken English context).
- **Shared-copy corrections**: `content/homeCourses.ts` gained a Spoken English
  `HOME_COURSE_DELIVERY` override ("Online coaching · Confirm current format and support"),
  replacing the shared default line that falsely implied live delivery, group/one-to-one
  availability and recordings. `content/coursePresentation.ts`'s Spoken English card copy no
  longer states "personal feedback" as an inclusion (previously "Guided speaking practice with
  personal feedback") and no longer implies every learner needs the same situations. See
  "Resolved: the CourseExplorer universal claim" above for the shared `CourseExplorer.tsx`
  sentence this step also corrected.
- **Legacy course record**: `content/courses.ts`'s spoken-english record (`tagline`, `whoFor`,
  `modules`, `includes`, `price: 10000`) is confirmed unreachable by the dedicated route —
  `components/CourseHero.tsx` (the only consumer of `tagline`/`whoFor`) is not used by
  `/courses/spoken-english`; comments on every field now explain their non-authoritative status,
  mirroring the TOEFL Step 1 pattern.
- **Teaching, practice and feedback process (Step 3)**: `SpokenEnglishCoachingProcess.tsx` (id
  `spoken-english-coaching-process`), inserted after the curriculum/context-application sections
  and before availability, describes a five-stage coaching cycle — define the listener, purpose and
  task; build the language and response shape; rehearse a first attempt; adapt through interaction;
  review the attempt and apply a next priority — as a semantic `<ol>`, plus a separate four-lens
  feedback explanation (message/response, language choices, delivery/intelligibility,
  interaction/repair) as `<article>` elements. This is **proposed public wording describing a
  durable instructional approach, not an owner-confirmed operational inclusion** — see
  `docs/spoken-english-offer-verification.md`'s "Teaching approach versus operational inclusions"
  section for the exact split. No formal diagnostic, written plan, role-play frequency, feedback
  mode/frequency/turnaround, homework quantity, audio submission/storage, platform, recording,
  fixed duration/frequency, or outcome/confidence guarantee is claimed anywhere in the section. The
  delivery-intelligibility feedback lens carries its own boundary ("Accent features may remain.
  Feedback should focus on intelligibility and meaning, not native imitation."), and the section
  closes with one expectation statement stated once rather than repeated per card: "Coaching can
  provide structured practice and specific next priorities. Progress also depends on the learner's
  starting point, relevant practice, available time and continued application; no communication
  outcome can be guaranteed." The section adds no CTA of its own (Step 3's spec: the existing
  speaking-profile and final CTAs are sufficient) and no CEFR terminology (the three CEFR source
  URLs this step was asked to recheck all still returned HTTP 403 Forbidden — see
  `docs/spoken-english-content-sources.md`'s "CEFR source access re-check" section).
- **Illustrative feedback demonstration and conditional evidence (Step 4)**:
  `SpokenEnglishFeedbackDemo.tsx` (id `spoken-english-feedback-example`), inserted immediately
  after the coaching process, shows one original, website-created workplace-communication scenario
  (explaining a delayed report in a team meeting) moving from a first illustrative attempt through
  "what already works", a four-point diagnosis, one revision priority, a clearer revised response,
  and a changed follow-up question and answer — with a prominent disclosure before the scenario
  ("This website-created example is for illustration only. It is not learner work, a testimonial,
  a formal assessment, a CEFR result or evidence of a guaranteed outcome.") and two boundaries after
  it: a transcript-only limitation (a written transcript cannot show pronunciation, intelligibility,
  stress, rhythm, intonation, pace, pausing, listening or turn-taking; no audio was assessed) and an
  outcome boundary (the revision demonstrates one feedback process; it does not prove a learner
  result, formal level increase, interview outcome or guaranteed progress). First and revised
  attempts are distinguished by label and border treatment only, never red/green styling. No CTA,
  audio recorder, upload control or AI analysis was added.
  `SpokenEnglishVerifiedEvidence.tsx` (id `spoken-english-verified-evidence`), immediately after the
  demonstration, would render genuine consent-confirmed Spoken English testimonials
  (`courseSlug === "spoken-english"` from `publishedTestimonials`) but currently returns `null` —
  no heading, no section, no placeholder — because `content/testimonials.ts` remains empty. See
  `docs/spoken-english-offer-verification.md`'s "Illustrative demonstration versus learner
  evidence" section for the complete boundary, and `docs/testimonial-content-intake.md`'s "Spoken
  English-specific intake fields" for what a future genuine record would need before publication
  (including that audio/video evidence remains categorically unresolved pending a separate,
  fully-documented consent/redaction/withdrawal decision).
- See `docs/spoken-english-offer-verification.md` for the complete list of unresolved Spoken
  English offer facts (delivery, level, duration, frequency, feedback, fee, policy, evidence
  consent) and `docs/spoken-english-content-sources.md` for the positioning/boundary decisions
  behind every claim on the page.

## Resolved: the CourseExplorer universal claim flagged since IELTS Step 10 (fixed in Spoken English Step 1)

`components/CourseExplorer.tsx` (the homepage's programme grid) previously stated: "Every
programme is taught live online and includes recordings, guided practice and personal feedback."
This was flagged as out-of-scope during IELTS Step 10, PTE Step 10 and TOEFL Step 10 (each audit
confirmed it directly contradicted that programme's own offer-verification record, where live/
synchronous delivery, recording availability and recording access period were all still "Needs
owner confirmation") because fixing shared homepage copy was outside any single programme-page
step's scope.

Spoken English Step 1's implementing prompt explicitly authorised and directed this fix — unlike
the earlier steps, it named `components/CourseExplorer.tsx` directly and supplied exact
replacement wording. The sentence now reads: "Review each programme for its current focus, then
confirm the available format, schedule, support and fee before enrolling." This remains true and
useful for every programme card regardless of what any individual programme's format is later
confirmed to be. Regression-tested against every homepage programme card (see "Spoken English
positioning and page architecture" below). The per-card `delivery` line directly below this
paragraph remains a separate, already-corrected concern — see the PTE/TOEFL/Spoken-English-
specific `HOME_COURSE_DELIVERY` overrides.

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
