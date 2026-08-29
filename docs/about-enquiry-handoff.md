# About-page enquiry handoff

Internal record of `/about`'s final conversion section (`components/about/AboutFinalCTA.tsx`,
content in `content/aboutEnquiry.ts`). This is a maintenance document — nothing here is legal
advice. This step is an enquiry handoff, not an enrolment, payment, reservation, appointment-
booking, diagnostic or guaranteed-placement system.

**Implementation date:** About Step 8 (29 August 2026).

## Dependency confirmation

Confirmed before editing: About Steps 1–7 are present — trust-focused architecture, verified
credential hierarchy, fact-safe teaching approach and professional story, fail-closed testimonial
evidence, the authentic responsive portrait, learner-fit/programme-path guidance including its own
first-enquiry checklist (`AboutLearnerFit`'s `firstEnquiryItems`), and the completed brand-name
standardisation to `AISHAS ENGLISH`.

## 1. Final CTA hierarchy and rationale

Replaces the previous three-visually-equal-button final CTA (Compare Programmes / WhatsApp /
conditional form link with no fallback when unconfigured) with a deliberate three-level
hierarchy:

1. **Primary — WhatsApp** ("Ask Aisha About the Right Programme"): the visually strongest action
   (solid coral button), because WhatsApp is immediate and familiar for the site's largely mobile
   audience.
2. **Secondary — configured form, otherwise email** (outline-style button, same visual weight as
   each other but never both shown at once): the detailed form suits visitors who prefer
   structured context; email is the reliable fallback when the form cannot submit.
3. **Tertiary — Compare All English Programmes** (a quiet text link, not a button): kept available
   for visitors still in research mode, but deliberately does not compete with the enquiry actions
   above — Step 7 already handles route selection, so this is a return path, not a repeated
   decision point.

No three visually equal primary actions render at once. The secondary path is chosen once, on the
server, via `formsAreConfigured()` — never client-side, so there is no flash of the wrong action
after hydration.

## 2. Primary WhatsApp message template

> Hi Aisha! I am enquiring about online English support. My goal is [goal or exact test], my
> current situation is [brief context], my country or time zone is [location], and I hope to
> begin by [date]. Please confirm the most relevant programme and the current format, fee and
> availability.

Built with the canonical `whatsappLink()` helper (`lib/whatsapp.ts`) — never a manually
constructed `wa.me` URL. Does not prefill: a score the visitor hasn't supplied, passport/visa/
identity information, a school/employer/client name, payment details, personal documents, a claim
that the visitor wants to enrol or book, or a statement that Aisha has already accepted them. Opens
as an external destination with `target="_blank" rel="noopener noreferrer"`, matching the site's
established WhatsApp-link convention.

## 3. Form-configured branch

When `formsAreConfigured()` is true, the secondary action is:

- **Label:** "Send a Detailed Enquiry"
- **Destination:** `/free-diagnostic-test?source=about-page`

This opens the existing generic, unlocked course-recommendation form — never a programme-locked
variant, since no `programme` query value is supplied. The technical route name
(`/free-diagnostic-test`) remains unchanged internally, but no visible About-page copy calls this
a "diagnostic test" anywhere — confirmed via a repository search of every file this step touched.

`components/about/AboutLearnerFit.tsx`'s own Step 7 "not sure yet" human-enquiry form link was
also updated to the identical `?source=about-page` destination for consistency — both links
originate from the same page and open the identical form variant; keeping them aligned avoids two
subtly different technical destinations for what is functionally the same action.

## 4. Email-fallback branch

When `formsAreConfigured()` is false (the current production state, since no Formspree endpoint
is configured), the secondary action instead shows:

- **Label:** "Email Aisha"
- **Destination:** built with `lib/contact.ts`'s `emailLink()` — never a manually concatenated
  `mailto:` string, so spaces, newlines, ampersands and question marks are safely encoded.
- **Recipient:** `site.email` (`aishasenglish@gmail.com`), the one canonical source — not
  duplicated as a literal anywhere in this step's new code.
- **Subject:** `` English programme enquiry — ${site.brandName} `` (renders as "English programme
  enquiry — AISHAS ENGLISH").
- **Body:**

  ```text
  Hello Aisha,

  I am enquiring about online English support.

  Goal or exact test:
  Current situation:
  Country or time zone:
  Relevant deadline:

  Please confirm the most relevant programme and the current format, fee and availability.
  ```

The form link is never shown broken with no replacement — exactly one of the two secondary actions
always renders. A `mailto:` link is not an HTTP external page, so it does not get a forced new tab
(no `target="_blank"`), matching this step's own explicit rule. No Formspree configuration value,
endpoint ID or environment-variable name is ever exposed in the rendered page.

## 5. `about-page` source allowlisting and its security boundary

`lib/enquiryQuery.ts`'s `EnquirySource` union and `ALLOWED_SOURCES` array gained one new entry,
`"about-page"`, alongside the existing `homepage`/`courses-hub`/`ielts-page`/`pte-page`/
`toefl-page`/`spoken-english-page`/`english-writing-page`/`general` values. `resolveEnquirySource()`
was not otherwise changed — it already fails closed generically (any value not in the allowlist,
including a malformed array, an XSS attempt, or an empty string, resolves to `"general"`), so the
new entry inherits that same safety by construction rather than needing new logic.

Confirmed via live testing:

- `/free-diagnostic-test?source=about-page` renders the generic unlocked variant correctly
  (heading "Request a free course recommendation.").
- `/free-diagnostic-test?source=<script>alert(1)</script>&programme=nonsense` never reflects the
  raw script tag into the rendered HTML, and the malformed `programme` value still falls back to
  the generic, unlocked form — confirming the pre-existing allowlist behaviour in
  `resolveProgrammeQuery()`/`resolveEnquirySource()` was not weakened by this addition.

The resolved `source` value is used only as a non-sensitive origin label passed to
`DiagnosticForm` as a typed prop — never rendered as visible text, never placed in a CSS class,
URL, heading, subject or message, and never used to add a fake `programme=general` value. No
learner data is placed in the URL by this change. **No analytics event or tracking was added or
modified in this step** — adding an allowlisted, non-sensitive source label does not authorise new
measurement; About-page analytics remains a later, separately reviewed step.

## 6. Data-minimisation decisions

The About enquiry (across the WhatsApp message, the linked general form, and the email fallback)
requests only routing context: name, who the enquiry is for, one reply method, goal or exact test,
short current context, country/time zone, and a relevant deadline. It does not request or
encourage: file/audio uploads, passport/visa fields, date of birth, home address, payment/card
fields, national identity fields, sensitive medical/disability fields, employer/client names as
required data, a pre-selected marketing opt-in, third-party trackers in form values, or personal
information in query parameters/link attributes/analytics payloads. Reviewing the shared general
`DiagnosticForm` variant confirmed it already matches this shape (see "Form review scope" below) —
no field was added or removed.

## 7. Claims and booking language deliberately excluded

Confirmed absent from every string this step added, via a repository search across the changed
files: "book now," "reserve your seat," "enrol now," "secure your place," "limited slots," "free
assessment," "free consultation," "instant reply," "guaranteed match," "start your transformation,"
"unlock fluency," "get your target score," and "diagnostic test" as a visible label. The reassurance
list explicitly states the opposite of several of these: asking a question does not require
payment; sending an enquiry does not reserve a place; no course or schedule is confirmed until
Aisha replies; no result is guaranteed. No fixed response time, free call/consultation, assessment,
immediate-availability claim, batch-place promise, or pre-review personalised plan is promised
anywhere in this section.

## 8. Mobile/tablet behaviour

- One-column content on phones; the WhatsApp button and secondary action are both full-width, with
  the WhatsApp button visually primary (solid fill) and the secondary visually subordinate
  (outline).
- The tertiary "Compare All English Programmes" link sits below both buttons, as quiet text, never
  competing with them.
- Buttons use `min-h-12` (48px) with `gap-3`/`gap-4` (12–16px) separation between them — confirmed
  live: the primary button measures 48px tall at 390px viewport width.
- Confirmed live: zero horizontal overflow at 320×568, 360×800, 390×844, 412×915, 768×1024,
  820×1180, 1024×1366, 1280×900 and ~1440×900.
- Confirmed live: the site's existing fixed floating WhatsApp control does not overlap the
  tertiary link or any other final-CTA content at a 390×844 phone viewport, once scrolled into
  view (tertiary link bottom edge at y≈753px; float control top edge at y≈780px — no overlap).
- Reassurance text renders at `text-sm` (14px), matching this step's minimum-readability
  requirement.
- Desktop retains the About page's existing `max-w-2xl` restrained width — no oversized banner was
  introduced, and the section remains directly connected to the preceding evidence/fit content
  (same page, no added spacing beyond the section's existing padding).

## 9. Accessibility behaviour

- One semantic `<section>` with `aria-labelledby` tied to the visible `<h2>` heading — unchanged
  structural pattern, only the heading text and content changed.
- Real `<a>`/`<Link>` elements for WhatsApp, the form-or-email secondary action, and the tertiary
  programme-comparison link — no icon-only contact action, no nested interactive elements.
- Descriptive visible labels throughout ("Ask Aisha About the Right Programme," "Send a Detailed
  Enquiry," "Email Aisha," "Compare All English Programmes") — none is a generic "Learn more" or
  "Click here."
- Decorative elements (the eyebrow's coral divider line) remain `aria-hidden="true"`, unchanged.
- Existing focus-visible styles (`focus-visible:outline-2 focus-visible:outline-offset-2`) are
  preserved on both buttons.
- Primary/secondary distinction is conveyed through button style (solid vs. outline) and visible
  label text together, not colour alone.
- No new ARIA was added to any native control.

## 10. Form review scope

Reviewed the shared `DiagnosticForm` general variant (via a temporary, fully-reverted Formspree
fixture — the current production environment has no Formspree endpoint configured, so the form
normally renders its own WhatsApp-only fallback state instead of its fields) against every item
this step's audit checklist names:

- Visible title: "Request a free course recommendation." — accurate, matches the page heading.
- No programme is falsely preselected — the programme `<select>` renders unselected
  ("Select a programme" as the first, empty option).
- Required/optional fields are clearly marked in their visible labels ("(required)"/"(optional)").
- WhatsApp is required, email is optional — matches the established reply-method behaviour and is
  labelled honestly.
- The programme selector lists every current truthful route (IELTS Preparation, PTE Academic,
  TOEFL iBT, English Writing, O & A Level English, Spoken English Coaching) plus "Not sure yet" and
  "Another English goal" — no invented or retired programme name.
- Location/time zone field is optional.
- Situation and goal fields carry concise, realistic placeholder examples.
- The honeypot field (`#diag-gotcha`, Formspree's `_gotcha` convention) is genuinely off-screen —
  confirmed via its live bounding box (`x: -9999px`), not merely a CSS class assumed to work.
  (Note: Playwright's own `isVisible()` heuristic reports this element as "visible" because it
  only checks `display`/`visibility`/`opacity` and a non-zero bounding box — it does not account
  for an element being positioned thousands of pixels off-screen. Confirmed as a test-methodology
  artifact, not a real defect, by checking the actual coordinates directly.)
- No horizontal overflow at 320px.

**No defect was found that blocks the About handoff.** No change was made to `DiagnosticForm.tsx`,
`content/leadCapture.ts`, or `app/free-diagnostic-test/page.tsx` — per this step's own instruction
not to casually refactor the shared form in this narrow task, and since no correction was actually
necessary.

## 11. O/A Level subdomain deferral

Unchanged from Step 7's fail-closed record (`docs/about-fit-route-guidance.md`): no verified O/A
Level subdomain URL exists, so none was invented, added to the WhatsApp/email templates, or used
to alter the existing `/courses/o-a-level-english` route. This Step 8 enquiry will still happily
accept a visitor who writes "O/A Level" in their own WhatsApp/email message — the free-text goal
field imposes no restriction — but nothing in this step's own code or copy routes anyone to a
guessed URL.

## 12. Future-maintenance steps

- [ ] If Aisha later wants a stated response-time commitment, that requires an explicit, separate
      decision — do not add one to `content/aboutEnquiry.ts` without it.
- [ ] If a real Formspree endpoint is configured in production, re-verify live that the
      form-configured branch renders "Send a Detailed Enquiry" correctly and that the email
      fallback correctly disappears.
- [ ] If `lib/enquiryQuery.ts`'s `EnquirySource`/`ALLOWED_SOURCES` are extended again, re-run this
      document's allowlist tests (valid known values render correctly; unknown/malformed values
      fall back to `general`; no raw value reaches markup).
- [ ] About-page measurement (tracking which secondary action a visitor takes, dwell time, etc.)
      is explicitly out of scope here — a later, separately reviewed About analytics step should
      decide what, if anything, is safe to measure.
- [ ] If the floating WhatsApp control's position or the final CTA's own spacing changes in a
      future step, re-check for overlap at 390×844 (and other phone widths) the same way this
      step did.

## Tests performed

- `npm run lint` — clean.
- `npm run build` — clean; all 20 routes present.
- `npm run test:analytics` — 34/34 checks passed, unchanged (no analytics touched, per this
  step's own explicit boundary).
- Required source searches across every file this step changed: no obsolete brand form, no
  "MA English"/"University Lecturer", and no live booking/assessment/guarantee/diagnostic-test
  language (the one "diagnostic test" hit is an explanatory code comment, not visible copy).
- Live Playwright pass against a production build (35/35 checks): `/about` returns 200 with no
  console/hydration errors; one accessible H2 with the new heading; WhatsApp renders first with a
  solid background and the canonical `wa.me` URL; with the form unconfigured (current production
  state) exactly one "Email Aisha" fallback renders (never "Send a Detailed Enquiry"), resolving to
  the canonical address with the correct `AISHAS ENGLISH` subject, and never forcing a new tab; all
  four reassurance points render; the tertiary link points to `/courses`; no booking/guarantee/
  diagnostic language is visible; `/courses` and
  `/free-diagnostic-test?source=about-page` both resolve and the latter renders the generic
  unlocked variant; a deliberately malformed `source`/`programme` query never reaches markup raw
  and still falls back to the generic variant; the About hero's own two actions are unchanged; zero
  horizontal overflow at all 9 required viewport widths; the floating WhatsApp control does not
  overlap the final section at a phone viewport; the primary button is at least 48px tall.
- Separately, a temporary, fully-reverted Formspree fixture (`.env.local`, marked `# QA FIXTURE`,
  deleted before this step's commit — confirmed via `ls .env*` showing only `.env.example`
  remains) was used to inspect the general form's actual fields (title, preselection, required/
  optional marking, programme options, honeypot position) since the unconfigured production state
  shows a WhatsApp-only fallback instead of the form fields — see "Form review scope" above for
  the full result. `npm run lint`/`build`/`test:analytics` were re-run clean after reverting.

No baseline failure predating this task was found in the files this step touched.
