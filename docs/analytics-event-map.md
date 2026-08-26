# Analytics event map

The IELTS enquiry-journey event taxonomy (IELTS Step 12). This is a maintenance/reporting
reference — it is not imported into the site. The actual typed contract lives in
`lib/analytics/events.ts`; this document explains what each event means, when it fires, and how
to read the resulting reports. See `docs/launch-verification.md` for whether analytics is
currently active (as of this writing: **no** — see that document's activation checklist).

## Business objective

The primary outcome being measured is a **qualified IELTS coaching enquiry**, not page views,
scroll depth or total clicks. A visitor who clicks the same WhatsApp button three times has not
generated three leads.

## Funnel model

| # | Event | Meaning |
|---|---|---|
| 1 | `programme_view` | A visitor views `/courses/ielts`. |
| 2 | `assessment_cta_click` | The visitor opens the detailed (configured-form) enquiry route. |
| 3 | `whatsapp_click` | The visitor chooses a contextual WhatsApp action anywhere on the journey. |
| 4 | `email_click` | The visitor uses the email fallback shown when the form isn't configured. |
| 5 | `assessment_form_start` | The visitor meaningfully begins the IELTS enquiry form. |
| 6 | `assessment_form_error` | A submission attempt fails, for one of four safe categorical reasons. |
| 7 | `assessment_form_submit` | The configured form provider confirms a successful submission. |
| 8 | `generate_lead` | *(not a callable event)* — an optional, provider-specific mapping a future approved adapter may derive internally from a confirmed `assessment_form_submit`. Never emitted by a component; see "Provider mapping" below. |

### What is *not* a lead

None of the following are tracked as a lead or high-intent event:

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
| `programme` | `"ielts"` | Always present. Only one value exists today. |
| `page_path` | `"/courses/ielts"` \| `"/free-diagnostic-test"` | Always present. Derived from a controlled pathname mapping (`resolvePagePath()`), never `window.location.href`, `document.URL` or a query string. |
| `section` | one of `hero`, `score_profile`, `learning_format`, `pricing`, `availability`, `final_enquiry`, `diagnostic_form` | Present on CTA click events. |
| `intent` | one of `discuss_goal`, `share_score_profile`, `ask_format`, `ask_fee`, `ask_availability`, `ask_intake`, `request_assessment`, `continue_on_whatsapp`, `send_email` | Present on CTA click events. |
| `source` | `"ielts-page"` \| `"general"` | The **resolved, allowlisted** source — never the raw `?source=` query value. Present on form-lifecycle events and the configured-form CTA. |
| `error_type` | `"configuration"` \| `"network"` \| `"provider"` \| `"validation"` | Present only on `assessment_form_error`. |

`lib/analytics/events.ts`'s `sanitizeAnalyticsPayload()` is the single gate every payload passes
through — from a typed call site (defence in depth) and from the delegated click listener's
untrusted `data-analytics-*` attribute reads (the actual trust boundary). Any unrecognised value
in any field is dropped, not forwarded.

## Per-action instrumentation

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
| Diagnostic form — first meaningful edit | `DiagnosticForm.tsx` (IELTS variant only) | `assessment_form_start` | — | — (carries `source`) |
| Diagnostic form — failed submission | `DiagnosticForm.tsx` (IELTS variant only) | `assessment_form_error` | — | — (carries `source`, `error_type`) |
| Diagnostic form — successful submission | `DiagnosticForm.tsx` (IELTS variant only) | `assessment_form_submit` | — | — (carries `source`) |
| `/courses/ielts` page view | `IELTSPageViewTracker.tsx` | `programme_view` | — | — |

Not instrumented, deliberately: the header/mobile-drawer WhatsApp action (site-wide, not
IELTS-specific — opening the menu itself is explicitly not a conversion), expanding an FAQ item,
and the generic (non-IELTS) `DiagnosticForm` flow reached without `?programme=ielts` (its `source`
and `variant` default to values that are never mapped into an IELTS analytics event, since
`AnalyticsProgramme` only has one allowed value: `"ielts"`).

### Form-lifecycle detail

- **`assessment_form_start`** fires at most once per mounted form instance, on the first
  meaningful field edit — never on load, never because the IELTS variant's programme field
  renders pre-locked to "IELTS Preparation" (that field has no `onChange` at all), and never once
  per keystroke thereafter. Guarded by a `useRef` flag, not component state, so it doesn't cause a
  re-render.
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
  path is a `whatsapp_click` (`intent: continue_on_whatsapp` conceptually; the current
  unconfigured-fallback and on-error-retry buttons are plain WhatsApp links without a
  `data-analytics-event` attribute today, since they sit inside the always-client
  `DiagnosticForm` rather than a server-rendered CTA — a future revision could wire them through
  `track()` directly using the same `whatsapp_click` event if that reporting granularity becomes
  useful).

### Provider mapping (not active)

If GA4 is ever approved and its `generate_lead` recommended event is adopted, the mapping belongs
inside `lib/analytics/track.ts`'s `dispatch()` function: on a confirmed `assessment_form_submit`,
additionally emit `generate_lead` to the provider. Do not assign a fabricated monetary `value`.
Do not emit both as separately counted "leads" in a dashboard without documenting that
`generate_lead` is a derived provider mapping of the same underlying event, not a second lead.

## Reporting dimensions

- event name
- `programme`
- `page_path`
- `section`
- `intent`
- resolved `source`
- device category — only if an approved analytics provider supplies it independently; this
  codebase never derives or sends it

Do not send the visitor's entered country/city/time zone as a `country` dimension — if an
approved provider later supplies coarse geographic reporting on its own (e.g. from IP-based
inference), document plainly in any resulting report that this is **provider-derived**, not the
value the visitor typed into a form. Do not add an `enquirer_role` dimension unless Aisha later
confirms a genuine reporting need and a privacy review approves the limited category — it is not
required for this launch.

## Primary funnel reports

1. IELTS programme views → contextual WhatsApp clicks
2. IELTS programme views → assessment CTA clicks
3. Assessment form starts → confirmed submissions
4. Form error rate by safe categorical error type
5. CTA performance by page section
6. Mobile versus desktop high-intent action rate

Do not optimise for total clicks alone — repeated clicks by one visitor are not necessarily
multiple leads.

## Page-view deduplication note

If GA4 (or any provider with automatic page-view/route-change measurement) is later activated:

- check whether its automatic measurement already reports the App Router navigation to
  `/courses/ielts` before also relying on this codebase's manual `programme_view`;
- use either automatic or manual page-view measurement for this route, not both;
- `programme_view` is a distinct **product** event from the provider's own automatic `page_view` —
  don't conflate them in a report without noting which one a given number comes from;
- `IELTSPageViewTracker.tsx` fires once per `pathname` change to `/courses/ielts` (a `useEffect`
  dependency, not on every re-render) — test back/forward navigation and client-side route
  transitions before trusting a report built on it.

## Testing evidence

See `docs/launch-verification.md`'s "Analytics testing evidence" section for what has actually
been verified (self-test script results, disabled-state network inspection, and the live
Playwright instrumentation pass) as of IELTS Step 12.
