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

### Analytics activation checklist (IELTS Step 12)

`lib/analytics/` implements a strict, typed event contract for the IELTS enquiry journey (see
`docs/analytics-event-map.md` for the full funnel and per-action instrumentation table) —
`components/analytics/AnalyticsListener.tsx` (one delegated click listener, mounted once in
`app/layout.tsx`), `components/analytics/IELTSPageViewTracker.tsx` (fires `programme_view` once
per navigation to `/courses/ielts`), and `components/DiagnosticForm.tsx`'s IELTS-variant
form-lifecycle events. **All of it is currently inert.**
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

#### Analytics testing evidence (IELTS Step 12)

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
general and IELTS variants' exact prior behaviour was preserved when this was introduced. PTE form
interactions deliberately do not emit any analytics event — the existing `assessment_form_*`
events remain scoped to `variant === "ielts"` only; PTE conversion measurement is deferred to its
own later step.

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

## Flagged during IELTS Step 10, not fixed (out of this step's scope)

- **`components/CourseExplorer.tsx`** (the homepage's programme grid) states: "Every programme is
  taught live online and includes recordings, guided practice and personal feedback." This is the
  same class of unverified universal claim IELTS Step 10 removed from the root layout's
  `description` metadata ("Classes recorded.") — and it directly contradicts
  `docs/ielts-offer-verification.md`, where live/synchronous delivery, recording availability and
  recording access period are all still "Needs owner confirmation" specifically for IELTS. Fixing
  it is homepage content work outside an IELTS-page-specific step's scope; flagged here so it
  isn't lost. Confirm with Aisha whether every current programme genuinely is live and recorded
  before either keeping this sentence or rewriting it to something that doesn't assert a delivery
  model that hasn't been confirmed for every programme.

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
