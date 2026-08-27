# Analytics event map

The shared IELTS/PTE/TOEFL enquiry-journey event taxonomy (IELTS Step 12; extended to PTE in PTE
Step 12 and to TOEFL in TOEFL Step 12, without changing any IELTS or PTE behaviour). This is a
maintenance/reporting reference — it is not imported into the site. The actual typed contract
lives in `lib/analytics/events.ts`; this document explains what each event means, when it fires,
and how to read the resulting reports. See `docs/launch-verification.md` for whether analytics is
currently active (as of this writing: **no** — see that document's activation checklist).

## Business objective

The primary outcome being measured is a **qualified IELTS, PTE or TOEFL coaching enquiry**, not
page views, scroll depth or total clicks. A visitor who clicks the same WhatsApp button three
times has not generated three leads. IELTS, PTE and TOEFL are three programmes measured through
one shared event contract, distinguished by the `programme` field — not three separate analytics
stacks.

## Funnel model

| # | Event | Meaning |
|---|---|---|
| 1 | `programme_view` | A visitor views `/courses/ielts`, `/courses/pte` or `/courses/toefl`. |
| 2 | `assessment_cta_click` | The visitor opens the detailed (configured-form) enquiry route. |
| 3 | `whatsapp_click` | The visitor chooses a contextual WhatsApp action anywhere on the journey. |
| 4 | `email_click` | The visitor uses the email fallback shown when the form isn't configured. |
| 5 | `assessment_form_start` | The visitor meaningfully begins the IELTS, PTE or TOEFL enquiry form. |
| 6 | `assessment_form_error` | A submission attempt fails, for one of four safe categorical reasons. |
| 7 | `assessment_form_submit` | The configured form provider confirms a successful submission. |
| 8 | `generate_lead` | *(not a callable event)* — an optional, provider-specific mapping a future approved adapter may derive internally from a confirmed `assessment_form_submit`. Never emitted by a component; see "Provider mapping" below. |

No new event names were introduced for PTE or TOEFL — `programme: "pte"` / `programme: "toefl"`
on the same seven events already provide the reporting dimension. There is no `pte_whatsapp_click`,
`toefl_page_view` or equivalent cosmetic duplicate.

### What is *not* a lead

None of the following are tracked as a lead or high-intent event, for any programme:

- viewing the page (`programme_view` is a page-view signal, not a lead);
- opening the header/mobile-drawer navigation;
- expanding an FAQ item;
- scrolling to the final CTA;
- merely landing on `/free-diagnostic-test` without interacting;
- focusing an empty form field;
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
| `programme` | `"ielts"` \| `"pte"` \| `"toefl"` | Always present. A fourth programme would need its own reviewed addition to this union and to every allowlist below — never a raw string passed through from a component. |
| `page_path` | `"/courses/ielts"` \| `"/courses/pte"` \| `"/courses/toefl"` \| `"/free-diagnostic-test"` | Always present. Derived from a controlled pathname mapping (`resolvePagePath()` in `lib/analytics/pagePaths.ts`), never `window.location.href`, `document.URL` or a query string. `/free-diagnostic-test` is shared by all three programmes; each programme detail page is exclusive to its own programme. |
| `section` | one of `hero`, `score_profile`, `learning_format`, `pricing`, `availability`, `final_enquiry`, `diagnostic_form` | Present on CTA click events. Shared vocabulary — IELTS, PTE and TOEFL all use the same section codes since the three pages have parallel structure. |
| `intent` | one of `discuss_goal`, `share_score_profile`, `ask_format`, `ask_fee`, `ask_availability`, `ask_intake`, `request_assessment`, `continue_on_whatsapp`, `send_email` | Present on CTA click events. Shared vocabulary for the same reason. |
| `source` | `"ielts-page"` \| `"pte-page"` \| `"toefl-page"` \| `"general"` | The **resolved, allowlisted** source — never the raw `?source=` query value. Present on form-lifecycle events and the configured-form CTA. `"ielts-page"` may only ever accompany `programme: "ielts"`, `"pte-page"` only `programme: "pte"`, and `"toefl-page"` only `programme: "toefl"` — see the consistency rule below. |
| `error_type` | `"configuration"` \| `"network"` \| `"provider"` \| `"validation"` | Present only on `assessment_form_error`. Shared across all three programmes. |

`lib/analytics/events.ts`'s `sanitizeAnalyticsPayload()` is the single gate every payload passes
through — from a typed call site (defence in depth) and from the delegated click listener's
untrusted `data-analytics-*` attribute reads (the actual trust boundary). Any unrecognised value
in any field is dropped, not forwarded.

### Programme/path/source consistency (PTE Step 12; extended to TOEFL in TOEFL Step 12)

Adding a second programme introduced a new failure mode a single-programme contract didn't need
to guard against: an impossible or spoofed combination like `programme: "pte"` paired with
`page_path: "/courses/ielts"`, or `programme: "ielts"` paired with `source: "pte-page"`. Adding a
third programme (TOEFL) extended the same rule rather than introducing a new one.
`sanitizeAnalyticsPayload()` rejects the **entire payload** (not just the offending field) for any
of these:

- `programme` paired with a `page_path` that doesn't belong to it (each programme's own detail
  page belongs only to that programme; `/free-diagnostic-test` belongs to all three);
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

Not instrumented, deliberately, for any of the three programmes: the header/mobile-drawer
WhatsApp action (site-wide, not programme-specific — opening the menu itself is explicitly not a
conversion), the fit/comparison section's official ETS/IELTS/Pearson source links and internal
product-comparison links (information navigation, not a lead), expanding an FAQ item, ordinary
navigation to `/batches`, and the generic (non-IELTS, non-PTE, non-TOEFL) `DiagnosticForm` flow
reached without a matching `?programme=` value (its `source` and `variant` default to values that
never map to an analytics event, since `AnalyticsProgramme` has exactly three allowed values and
the generic variant isn't one of them).

### Form-lifecycle detail (all three programmes)

- **`assessment_form_start`** fires at most once per mounted form instance, on the first
  meaningful field edit — never on load, never because the locked programme field renders
  pre-filled to "IELTS Preparation", "PTE Academic Preparation" or "TOEFL iBT Preparation" (that
  field has no `onChange` at all), and never once per keystroke thereafter. Guarded by a `useRef`
  flag, not component state, so it doesn't cause a re-render.
  `components/DiagnosticForm.tsx`'s `ANALYTICS_PROGRAMME_BY_VARIANT` map (PTE Step 12, extended to
  TOEFL in TOEFL Step 12) resolves which programme, if any, a given form `variant` reports as —
  `general` has no entry and never fires an event.
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
(for any of the three programmes), additionally emit `generate_lead` to the provider. Do not
assign a fabricated monetary `value`. Do not emit both as separately counted "leads" in a
dashboard without documenting that `generate_lead` is a derived provider mapping of the same
underlying event, not a second lead.

## Reporting dimensions

- event name
- `programme` (`ielts`, `pte` or `toefl`)
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
launch.

## Primary funnel reports

1. IELTS/PTE/TOEFL programme views → contextual WhatsApp clicks (filter by `programme` to separate the three)
2. IELTS/PTE/TOEFL programme views → detailed-enquiry CTA clicks
3. Assessment form starts → confirmed submissions, by programme
4. Form error rate by safe categorical error type, by programme
5. High-intent actions by page section, by programme
6. Mobile versus desktop high-intent action rate
7. TOEFL versus IELTS versus PTE funnels side by side, using the `programme` dimension as the sole split — never a separate dashboard built from a separate event set

Do not optimise for total clicks alone — repeated clicks by one visitor are not necessarily
multiple leads.

## Page-view deduplication note

If GA4 (or any provider with automatic page-view/route-change measurement) is later activated:

- check whether its automatic measurement already reports the App Router navigation to
  `/courses/ielts`, `/courses/pte` and `/courses/toefl` before also relying on this codebase's
  manual `programme_view`;
- use either automatic or manual page-view measurement for each route, not both;
- `programme_view` is a distinct **product** event from the provider's own automatic `page_view` —
  don't conflate them in a report without noting which one a given number comes from;
- `components/analytics/ProgrammePageViewTracker.tsx` (PTE Step 12 — replaces the earlier
  IELTS-only `IELTSPageViewTracker.tsx`; extended to TOEFL in TOEFL Step 12 with no code change,
  since the component already accepted a typed `programme`/`pagePath` prop pair;
  `app/courses/ielts/page.tsx`, `app/courses/pte/page.tsx` and `app/courses/toefl/page.tsx` each
  mount their own instance with fixed props) fires once per `pathname` change to its own fixed
  route (a `useEffect` dependency, not on every re-render) — test back/forward navigation and
  client-side route transitions before trusting a report built on it.

## Testing evidence

See `docs/launch-verification.md`'s "Analytics activation checklist" section for what has actually
been verified (self-test script results, disabled-state network inspection, and the live
Playwright instrumentation pass) as of IELTS Step 12, PTE Step 12 and TOEFL Step 12.
