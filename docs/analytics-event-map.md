# Analytics event map

The shared IELTS/PTE/TOEFL/English-Writing enquiry-journey event taxonomy (IELTS Step 12; extended
to PTE in PTE Step 12, to TOEFL in TOEFL Step 12, and to English Writing in English Writing Step
12, without changing any earlier programme's behaviour). This is a maintenance/reporting reference
— it is not imported into the site. The actual typed contract lives in `lib/analytics/events.ts`;
this document explains what each event means, when it fires, and how to read the resulting
reports. See `docs/launch-verification.md` for whether analytics is currently active (as of this
writing: **no** — see that document's activation checklist). Spoken English remains deliberately
uninstrumented pending its own reviewed Step 12 extension.

## Business objective

The primary outcome being measured is a **qualified IELTS, PTE, TOEFL or English Writing coaching
enquiry**, not page views, scroll depth or total clicks. A visitor who clicks the same WhatsApp
button three times has not generated three leads. IELTS, PTE, TOEFL and English Writing are four
programmes measured through one shared event contract, distinguished by the `programme` field —
not four separate analytics stacks.

## Funnel model

| # | Event | Meaning |
|---|---|---|
| 1 | `programme_view` | A visitor views `/courses/ielts`, `/courses/pte`, `/courses/toefl` or `/courses/english-writing`. |
| 2 | `assessment_cta_click` | The visitor opens the detailed (configured-form) enquiry route. |
| 3 | `whatsapp_click` | The visitor chooses a contextual WhatsApp action anywhere on the journey. |
| 4 | `email_click` | The visitor uses the email fallback shown when the form isn't configured. |
| 5 | `assessment_form_start` | The visitor meaningfully begins the IELTS, PTE, TOEFL or English Writing enquiry form. |
| 6 | `assessment_form_error` | A submission attempt fails, for one of four safe categorical reasons. |
| 7 | `assessment_form_submit` | The configured form provider confirms a successful submission. |
| 8 | `generate_lead` | *(not a callable event)* — an optional, provider-specific mapping a future approved adapter may derive internally from a confirmed `assessment_form_submit`. Never emitted by a component; see "Provider mapping" below. |

No new event names were introduced for PTE, TOEFL or English Writing — `programme: "pte"` /
`programme: "toefl"` / `programme: "english-writing"` on the same seven events already provide the
reporting dimension. There is no `pte_whatsapp_click`, `toefl_page_view`,
`english_writing_form_submit` or equivalent cosmetic duplicate. `assessment` and `diagnostic_form`
are legacy internal identifiers carried over from the original IELTS-only implementation for
cross-programme reporting continuity — they never appear in visitor-facing English Writing copy
and never imply a formal writing assessment; the visible English Writing journey always says
"enquiry," never "assessment," "test" or "diagnostic."

### What is *not* a lead

None of the following are tracked as a lead or high-intent event, for any programme:

- viewing the page (`programme_view` is a page-view signal, not a lead);
- opening the header/mobile-drawer navigation;
- expanding an FAQ item;
- scrolling to the final CTA;
- merely landing on `/free-diagnostic-test` without interacting;
- focusing an empty form field, including the English Writing writing-profile prompts, which are
  static reflection text, not form controls;
- clicking Submit before the provider accepts the request;
- a failed Formspree request (that's `assessment_form_error`, explicitly not a submit);
- a `whatsapp_click` — this is documented as a **high-intent click**, distinct from a **confirmed
  form submission**. Do not report the two under one combined "leads" number. If Aisha later
  wants WhatsApp treated as its own conversion type for reporting, that's a deliberate reporting
  decision to make explicitly, not an automatic consequence of this taxonomy.

## Payload schema

Every event carries only these fields (`lib/analytics/events.ts`'s `AnalyticsPayload`). Nothing
outside this fixed set is ever attached, and every value is a short, bounded code — never free
text, a name, a contact detail, a score, a deadline, a prefilled message or a URL.

| Field | Type | Notes |
|---|---|---|
| `programme` | `"ielts"` \| `"pte"` \| `"toefl"` \| `"english-writing"` | Always present. A fifth programme would need its own reviewed addition to this union and to every allowlist below — never a raw string passed through from a component. `"spoken-english"` is deliberately not a member yet. |
| `page_path` | `"/courses/ielts"` \| `"/courses/pte"` \| `"/courses/toefl"` \| `"/courses/english-writing"` \| `"/free-diagnostic-test"` | Always present. Derived from a controlled pathname mapping (`resolvePagePath()` in `lib/analytics/pagePaths.ts`), never `window.location.href`, `document.URL` or a query string. `/free-diagnostic-test` is shared by every instrumented programme; each programme detail page is exclusive to its own programme. |
| `section` | one of `hero`, `score_profile`, `writing_profile`, `coaching_process`, `learning_format`, `pricing`, `availability`, `final_enquiry`, `diagnostic_form` | Present on CTA click events. Shared vocabulary — `writing_profile` and `coaching_process` were added for English Writing Step 12 (its writing-profile and coaching-process sections have no IELTS/PTE/TOEFL analogue), while every other section code is reused as-is since the four pages have parallel structure. |
| `intent` | one of `discuss_goal`, `share_score_profile`, `share_writing_profile`, `ask_format`, `ask_fee`, `ask_availability`, `ask_intake`, `request_assessment`, `continue_on_whatsapp`, `send_email` | Present on CTA click events. Shared vocabulary — `share_writing_profile` was added for English Writing Step 12's writing-profile CTA; its coaching-process CTA reuses the existing `discuss_goal` intent rather than a cosmetic duplicate. |
| `source` | `"ielts-page"` \| `"pte-page"` \| `"toefl-page"` \| `"english-writing-page"` \| `"general"` | The **resolved, allowlisted** source — never the raw `?source=` query value. Present on form-lifecycle events and the configured-form CTA. `"ielts-page"` may only ever accompany `programme: "ielts"`, `"pte-page"` only `programme: "pte"`, `"toefl-page"` only `programme: "toefl"`, and `"english-writing-page"` only `programme: "english-writing"` — see the consistency rule below. |
| `error_type` | `"configuration"` \| `"network"` \| `"provider"` \| `"validation"` | Present only on `assessment_form_error`. Shared across every instrumented programme. |

`lib/analytics/events.ts`'s `sanitizeAnalyticsPayload()` is the single gate every payload passes
through — from a typed call site (defence in depth) and from the delegated click listener's
untrusted `data-analytics-*` attribute reads (the actual trust boundary). Any unrecognised value
in any field is dropped, not forwarded.

### Programme/path/source consistency (PTE Step 12; extended to TOEFL in TOEFL Step 12; extended to English Writing in English Writing Step 12)

Adding a second programme introduced a new failure mode a single-programme contract didn't need
to guard against: an impossible or spoofed combination like `programme: "pte"` paired with
`page_path: "/courses/ielts"`, or `programme: "ielts"` paired with `source: "pte-page"`. Each
programme added since (TOEFL, then English Writing) extended the same rule rather than introducing
a new one. `sanitizeAnalyticsPayload()` rejects the **entire payload** (not just the offending
field) for any of these:

- `programme` paired with a `page_path` that doesn't belong to it (each programme's own detail
  page belongs only to that programme; `/free-diagnostic-test` belongs to every instrumented
  programme);
- `programme` paired with a `source` value that belongs to a *different* programme, even though
  the string itself is a real allowlisted value.

This is stricter than the ordinary "unrecognised value is dropped, not forwarded" rule that still
applies to a genuinely made-up `section`/`intent`/`source`/`error_type` string (e.g.
`"referral-campaign-42"` is silently dropped, not treated as a reject-the-whole-payload case) —
the distinction matters because a *known* value assigned to the wrong programme is exactly the
shape a bug or spoofed `data-*` attribute would produce, and is worth failing loudly (returning
`null`, so the caller gets no event at all) rather than silently laundering it into a plausible-
looking but wrong record.

`components/analytics/AnalyticsListener.tsx`'s delegated click listener never trusts a
`data-analytics-*` attribute for `programme` at all — it derives `programme` from the current,
un-spoofable pathname instead (`programmeForPagePath()` in `lib/analytics/pagePaths.ts`), so a
compromised or miscopied `data-*` attribute set on the wrong page can't claim to be the other
programme's event in the first place.

## Per-action instrumentation — IELTS

| Location | Component | Event | `section` | `intent` |
|---|---|---|---|---|
| Hero primary WhatsApp | `IELTSHero.tsx` | `whatsapp_click` | `hero` | `discuss_goal` |
| Hero secondary ("See What the Programme Covers") | `IELTSHero.tsx` | *(none)* | — | — a same-page anchor to `#ielts-fit`; navigation, not a lead action |
| Score-profile contextual link | `IELTSScoreProfile.tsx` | `whatsapp_click` | `score_profile` | `share_score_profile` |
| Learning-format CTA | `IELTSLearningFormat.tsx` | `whatsapp_click` | `learning_format` | `ask_format` |
| Pricing CTA (enquire or published branch) | `IELTSPricing.tsx` | `whatsapp_click` | `pricing` | `ask_fee` |
| Availability — no-intake CTA | `IELTSAvailability.tsx` | `whatsapp_click` | `availability` | `ask_availability` |
| Availability — per-intake card CTA | `IELTSAvailability.tsx` | `whatsapp_click` | `availability` | `ask_intake` |
| Final CTA primary WhatsApp | `IELTSFinalCTA.tsx` | `whatsapp_click` | `final_enquiry` | `discuss_goal` |
| Final CTA secondary, form configured | `IELTSFinalCTA.tsx` | `assessment_cta_click` | `final_enquiry` | `request_assessment` (with `source: "ielts-page"`) |
| Final CTA secondary, form unconfigured | `IELTSFinalCTA.tsx` | `email_click` | `final_enquiry` | `send_email` |
| Diagnostic form — first meaningful edit | `DiagnosticForm.tsx` (IELTS variant) | `assessment_form_start` | — | — (carries `source`) |
| Diagnostic form — failed submission | `DiagnosticForm.tsx` (IELTS variant) | `assessment_form_error` | — | — (carries `source`, `error_type`) |
| Diagnostic form — successful submission | `DiagnosticForm.tsx` (IELTS variant) | `assessment_form_submit` | — | — (carries `source`) |
| `/courses/ielts` page view | `ProgrammePageViewTracker` (`programme="ielts"`) | `programme_view` | — | — |

## Per-action instrumentation — PTE (PTE Step 12)

Identical structure to IELTS, using the same shared event names and vocabulary with
`programme: "pte"` as the distinguishing dimension.

| Location | Component | Event | `section` | `intent` |
|---|---|---|---|---|
| Hero primary WhatsApp | `PTEHero.tsx` | `whatsapp_click` | `hero` | `discuss_goal` |
| Hero secondary ("Check Whether This Programme Fits") | `PTEHero.tsx` | *(none)* | — | — a same-page anchor to `#pte-fit`; navigation, not a lead action |
| Score-profile contextual link | `PTEScoreProfile.tsx` | `whatsapp_click` | `score_profile` | `share_score_profile` |
| Learning-format CTA | `PTELearningFormat.tsx` | `whatsapp_click` | `learning_format` | `ask_format` |
| Pricing CTA (enquire or published branch) | `PTEPricing.tsx` | `whatsapp_click` | `pricing` | `ask_fee` |
| Availability — no-intake CTA | `PTEAvailability.tsx` | `whatsapp_click` | `availability` | `ask_availability` |
| Availability — per-intake card CTA | `PTEAvailability.tsx` | `whatsapp_click` | `availability` | `ask_intake` |
| Final CTA primary WhatsApp | `PTEFinalCTA.tsx` | `whatsapp_click` | `final_enquiry` | `discuss_goal` |
| Final CTA secondary, form configured | `PTEFinalCTA.tsx` | `assessment_cta_click` | `final_enquiry` | `request_assessment` (with `source: "pte-page"`) |
| Final CTA secondary, form unconfigured | `PTEFinalCTA.tsx` | `email_click` | `final_enquiry` | `send_email` |
| Diagnostic form — first meaningful edit | `DiagnosticForm.tsx` (PTE variant) | `assessment_form_start` | — | — (carries `source`) |
| Diagnostic form — failed submission | `DiagnosticForm.tsx` (PTE variant) | `assessment_form_error` | — | — (carries `source`, `error_type`) |
| Diagnostic form — successful submission | `DiagnosticForm.tsx` (PTE variant) | `assessment_form_submit` | — | — (carries `source`) |
| `/courses/pte` page view | `ProgrammePageViewTracker` (`programme="pte"`) | `programme_view` | — | — |

## Per-action instrumentation — TOEFL (TOEFL Step 12)

Identical structure to IELTS and PTE, using the same shared event names and vocabulary with
`programme: "toefl"` as the distinguishing dimension.

| Location | Component | Event | `section` | `intent` |
|---|---|---|---|---|
| Hero primary WhatsApp | `TOEFLHero.tsx` | `whatsapp_click` | `hero` | `discuss_goal` |
| Hero secondary ("Check Whether This Programme Fits") | `TOEFLHero.tsx` | *(none)* | — | — a same-page anchor to `#toefl-fit`; navigation, not a lead action |
| Score-profile contextual link | `TOEFLScoreProfile.tsx` | `whatsapp_click` | `score_profile` | `share_score_profile` |
| Learning-format CTA | `TOEFLLearningFormat.tsx` | `whatsapp_click` | `learning_format` | `ask_format` |
| Pricing CTA (enquire or published branch) | `TOEFLPricing.tsx` | `whatsapp_click` | `pricing` | `ask_fee` |
| Availability — no-intake CTA | `TOEFLAvailability.tsx` | `whatsapp_click` | `availability` | `ask_availability` |
| Availability — per-intake card CTA | `TOEFLAvailability.tsx` | `whatsapp_click` | `availability` | `ask_intake` |
| Final CTA primary WhatsApp | `TOEFLFinalCTA.tsx` | `whatsapp_click` | `final_enquiry` | `discuss_goal` |
| Final CTA secondary, form configured | `TOEFLFinalCTA.tsx` | `assessment_cta_click` | `final_enquiry` | `request_assessment` (with `source: "toefl-page"`) |
| Final CTA secondary, form unconfigured | `TOEFLFinalCTA.tsx` | `email_click` | `final_enquiry` | `send_email` |
| Diagnostic form — first meaningful edit | `DiagnosticForm.tsx` (TOEFL variant) | `assessment_form_start` | — | — (carries `source`) |
| Diagnostic form — failed submission | `DiagnosticForm.tsx` (TOEFL variant) | `assessment_form_error` | — | — (carries `source`, `error_type`) |
| Diagnostic form — successful submission | `DiagnosticForm.tsx` (TOEFL variant) | `assessment_form_submit` | — | — (carries `source`) |
| `/courses/toefl` page view | `ProgrammePageViewTracker` (`programme="toefl"`) | `programme_view` | — | — |

## Per-action instrumentation — English Writing (English Writing Step 12)

Same shared event names and vocabulary as IELTS/PTE/TOEFL, using `programme: "english-writing"` as
the distinguishing dimension. Two section codes (`writing_profile`, `coaching_process`) and one
intent (`share_writing_profile`) were added because English Writing's page structure — a writing
profile and a coaching/feedback process — has no IELTS/PTE/TOEFL analogue; the coaching-process CTA
reuses the existing `discuss_goal` intent rather than a cosmetic duplicate.

| Location | Component | Event | `section` | `intent` |
|---|---|---|---|---|
| Hero primary WhatsApp | `EnglishWritingHero.tsx` | `whatsapp_click` | `hero` | `discuss_goal` |
| Hero secondary ("See who it may suit") | `EnglishWritingHero.tsx` | *(none)* | — | — a same-page anchor to `#english-writing-fit`; navigation, not a lead action |
| Writing-profile CTA ("Share my writing profile") | `EnglishWritingProfile.tsx` | `whatsapp_click` | `writing_profile` | `share_writing_profile` |
| Coaching-process CTA ("Discuss my writing situation") | `EnglishWritingCoachingProcess.tsx` | `whatsapp_click` | `coaching_process` | `discuss_goal` |
| Learning-format CTA | `EnglishWritingLearningFormat.tsx` | `whatsapp_click` | `learning_format` | `ask_format` |
| Pricing CTA (enquire or published branch) | `EnglishWritingPricing.tsx` | `whatsapp_click` | `pricing` | `ask_fee` |
| Availability — no-intake CTA | `EnglishWritingAvailability.tsx` | `whatsapp_click` | `availability` | `ask_availability` |
| Availability — per-intake card CTA | `EnglishWritingAvailability.tsx` | `whatsapp_click` | `availability` | `ask_intake` |
| Final CTA primary WhatsApp | `EnglishWritingFinalCTA.tsx` | `whatsapp_click` | `final_enquiry` | `discuss_goal` |
| Final CTA secondary, form configured | `EnglishWritingFinalCTA.tsx` | `assessment_cta_click` | `final_enquiry` | `request_assessment` (with `source: "english-writing-page"`) |
| Final CTA secondary, form unconfigured | `EnglishWritingFinalCTA.tsx` | `email_click` | `final_enquiry` | `send_email` |
| Diagnostic form — first meaningful edit | `DiagnosticForm.tsx` (English Writing variant) | `assessment_form_start` | — | — (carries `source`) |
| Diagnostic form — failed submission | `DiagnosticForm.tsx` (English Writing variant) | `assessment_form_error` | — | — (carries `source`, `error_type`) |
| Diagnostic form — successful submission | `DiagnosticForm.tsx` (English Writing variant) | `assessment_form_submit` | — | — (carries `source`) |
| `/courses/english-writing` page view | `ProgrammePageViewTracker` (`programme="english-writing"`) | `programme_view` | — | — |

**Not instrumented on `/courses/english-writing`**, deliberately: the fit section's four context
cards, the six-area writing-development framework, the study/workplace/everyday context map (and
its academic-integrity note), the illustrative feedback demonstration's two writing panels and
their disclosure, the conditional verified-evidence testimonials (if any ever render), the
route-guidance links to IELTS/PTE/TOEFL/O-A-Level, and every FAQ question/answer — all
informational or internal-navigation content, not a lead action. Copying or selecting the
illustrative example text is never tracked. The Step-5 pre-enrolment confirmation checklist
questions are static text, not interactive controls, and are not tracked either.

Not instrumented, deliberately, for any of the four programmes: the header/mobile-drawer WhatsApp
action (site-wide, not programme-specific — opening the menu itself is explicitly not a
conversion), the fit/comparison section's official ETS/IELTS/Pearson source links and internal
product-comparison links (information navigation, not a lead), expanding an FAQ item, ordinary
navigation to `/batches`, and the generic (non-IELTS, non-PTE, non-TOEFL, non-English-Writing)
`DiagnosticForm` flow reached without a matching `?programme=` value (its `source` and `variant`
default to values that never map to an analytics event, since `AnalyticsProgramme` has exactly
four allowed values and the generic variant isn't one of them). Spoken English remains entirely
uninstrumented — `/courses/spoken-english` carries zero `data-analytics-*` attributes and is not a
member of `AnalyticsProgramme`/`AnalyticsPagePath`/`AnalyticsSource` — pending its own reviewed
Step 12 extension.

### Form-lifecycle detail (every instrumented programme)

- **`assessment_form_start`** fires at most once per mounted form instance, on the first
  meaningful field edit — never on load, never because the locked programme field renders
  pre-filled to "IELTS Preparation", "PTE Academic Preparation", "TOEFL iBT Preparation" or
  "English Writing" (that field has no `onChange` at all), and never once per keystroke
  thereafter. Guarded by a `useRef` flag, not component state, so it doesn't cause a re-render.
  `components/DiagnosticForm.tsx`'s `ANALYTICS_PROGRAMME_BY_VARIANT` map (PTE Step 12, extended to
  TOEFL in TOEFL Step 12 and to English Writing in English Writing Step 12) resolves which
  programme, if any, a given form `variant` reports as — `general` and the still-uninstrumented
  `spoken-english` variant have no entry and never fire an event.
- **`assessment_form_error`** fires with exactly one `error_type`:
  - `configuration` — the Formspree endpoint was unexpectedly unavailable at submit time (should
    be unreachable in practice, since the unconfigured fallback UI renders instead of the form —
    a defensive fail-closed path, not an expected user-facing state);
  - `network` — the `fetch` call itself failed (e.g. no connectivity);
  - `provider` — Formspree responded, but not with a success status;
  - `validation` — reserved for custom validation beyond native browser `required`/`type`
    constraints; **not currently emitted**, since this form uses only native HTML validation.
  Never includes the HTTP response body, status text, field name, entered value or validation
  message.
- **`assessment_form_submit`** fires only once, only after `res.ok` is `true`. The unconfigured
  WhatsApp fallback shown when Formspree isn't set up is never counted as a submission — that
  path is a plain WhatsApp link inside the always-client `DiagnosticForm` without a
  `data-analytics-event` attribute (conceptually a `whatsapp_click` with intent
  `continue_on_whatsapp`; a future revision could wire it through `track()` directly if that
  reporting granularity becomes useful).

### Provider mapping (not active)

If GA4 is ever approved and its `generate_lead` recommended event is adopted, the mapping belongs
inside `lib/analytics/track.ts`'s `dispatch()` function: on a confirmed `assessment_form_submit`
(for any instrumented programme), additionally emit `generate_lead` to the provider. Do not
assign a fabricated monetary `value`. Do not emit both as separately counted "leads" in a
dashboard without documenting that `generate_lead` is a derived provider mapping of the same
underlying event, not a second lead.

## Reporting dimensions

- event name
- `programme` (`ielts`, `pte`, `toefl` or `english-writing`)
- `page_path`
- `section`
- `intent`
- resolved `source`
- device category — only if an approved analytics provider supplies it independently; this
  codebase never derives or sends it

Do not send the visitor's entered country/city/time zone as a `country` dimension, and do not
send the visitor's entered institution as an `institution` dimension — if an approved provider
later supplies coarse geographic reporting on its own (e.g. from IP-based inference), document
plainly in any resulting report that this is **provider-derived**, not the value the visitor
typed into a form. Do not add an `enquirer_role` dimension unless Aisha later confirms a genuine
reporting need and a privacy review approves the limited category — it is not required for this
launch. For English Writing specifically, never add a `writing_type`, `writing_context`,
`reader`, `purpose`, `difficulty` or `deadline` dimension from anything the visitor typed — none
of these exist as analytics fields at all, by design.

## Primary funnel reports

1. Programme views → contextual WhatsApp clicks (filter by `programme` to separate IELTS/PTE/TOEFL/English Writing)
2. Programme views → detailed-enquiry CTA clicks
3. Assessment form starts → confirmed submissions, by programme
4. Form error rate by safe categorical error type, by programme
5. High-intent actions by page section, by programme
6. Mobile versus desktop high-intent action rate
7. IELTS versus PTE versus TOEFL versus English Writing funnels side by side, using the `programme` dimension as the sole split — never a separate dashboard built from a separate event set

Do not report individual writing profiles, writing topics, purposes, difficulties or deadlines —
none of these are ever collected by analytics in the first place, so no report can surface them.

Do not optimise for total clicks alone — repeated clicks by one visitor are not necessarily
multiple leads.

## Page-view deduplication note

If GA4 (or any provider with automatic page-view/route-change measurement) is later activated:

- check whether its automatic measurement already reports the App Router navigation to
  `/courses/ielts`, `/courses/pte`, `/courses/toefl` and `/courses/english-writing` before also
  relying on this codebase's manual `programme_view`;
- use either automatic or manual page-view measurement for each route, not both;
- `programme_view` is a distinct **product** event from the provider's own automatic `page_view` —
  don't conflate them in a report without noting which one a given number comes from;
- `components/analytics/ProgrammePageViewTracker.tsx` (PTE Step 12 — replaces the earlier
  IELTS-only `IELTSPageViewTracker.tsx`; extended to TOEFL in TOEFL Step 12 and to English Writing
  in English Writing Step 12, both with no code change, since the component already accepted a
  typed `programme`/`pagePath` prop pair; `app/courses/ielts/page.tsx`, `app/courses/pte/page.tsx`,
  `app/courses/toefl/page.tsx` and `app/courses/english-writing/page.tsx` each mount their own
  instance with fixed props) fires once per `pathname` change to its own fixed route (a
  `useEffect` dependency, not on every re-render) — test back/forward navigation and client-side
  route transitions before trusting a report built on it.

## Testing evidence

See `docs/launch-verification.md`'s "Analytics activation checklist" section for what has actually
been verified (self-test script results, disabled-state network inspection, and the live
Playwright instrumentation pass) as of IELTS Step 12, PTE Step 12, TOEFL Step 12 and English
Writing Step 12.
