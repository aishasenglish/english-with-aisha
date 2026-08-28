# Spoken English offer verification

Internal record of what the current Spoken English offer can and cannot claim publicly on
`/courses/spoken-english`. This is a maintenance document — none of the internal states below are
rendered on the public page, and nothing here should be read as legal, medical, speech-language or
other professional advice, or as an answer on Aisha's behalf.

**Last reviewed:** Spoken English Step 10 (28 August 2026). Step 10 aligned search metadata and
social previews with the final visible offer, added a visible/structured breadcrumb, removed
obsolete FAQ rich-result markup, and corrected several cross-site contradictions. It resolved no
operational field — see "Technical SEO, metadata and internal linking (Step 10)" below for the
complete record.

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

## Teaching approach versus operational inclusions (Step 3)

Step 3 added a five-stage coaching-process section and a four-lens feedback explanation. Its
implementing prompt requires this document to separate what the process describes from what remains
an unverified operational claim.

### Teaching approach that can be described

The following is **proposed public wording describing a durable instructional approach**, not an
owner-confirmed operational inclusion — no existing owner-approved site content specifically
establishes that every current lesson follows this exact sequence, so none of it is marked "Owner
confirmed" in the table above:

- real-situation goal definition (define the listener, purpose and communication task);
- useful language and structure (response shape, vocabulary, spoken grammar, pronunciation
  priorities chosen for the task);
- guided practice (rehearsing a first attempt with support);
- interaction and variation (adapting to a changed question, follow-up or listener need);
- focused next-action feedback (message, language, delivery/intelligibility, interaction/repair,
  each pointing to one next priority rather than a general confidence message).

This wording requires Aisha's review before publication is treated as final — it describes coaching
*can* work this way, using "can", "may" and "is designed to" throughout
(`content/spokenEnglish.ts`'s `process` object), not that every current lesson demonstrably does.

### Operational inclusions still unresolved

None of the following is stated as included anywhere in the Step 3 process section, and each
remains open (most already appeared in "Open questions for Aisha" below; Step 3 did not resolve
any of them):

- a formal diagnostic or placement test;
- a written personal learning plan;
- role-play frequency (whether every session includes one);
- a fixed or guaranteed number of speaking attempts;
- feedback mode (written/audio/verbal), frequency and turnaround;
- homework or between-class practice quantity;
- learner audio submission or storage;
- between-class WhatsApp correction/support;
- group versus one-to-one delivery, and whether one-to-one review is included in a group option;
- the delivery platform;
- lesson recordings or access to them;
- a fixed course duration or lesson frequency.

The implementation of the Step 3 process section is not itself evidence that any of the above is a
genuine current inclusion — it describes a teaching method, not a package.

## Illustrative demonstration versus learner evidence (Step 4)

Step 4 added a text-based feedback demonstration (`components/spoken-english/
SpokenEnglishFeedbackDemo.tsx`) and a conditional verified-evidence component
(`components/spoken-english/SpokenEnglishVerifiedEvidence.tsx`). This document records the boundary
between the two, per the implementing prompt's requirements.

### The demonstration is illustrative, not learner evidence

- The scenario, first attempt, diagnosis, revision and follow-up in `content/spokenEnglish.ts`'s
  `feedbackDemo` object are **entirely original website copy**, written for this step — not a real
  learner's response, not a transcript of an actual lesson, and not something Aisha is confirmed to
  have said to any specific learner. The section's own on-page disclosure states this directly:
  "This website-created example is for illustration only. It is not learner work, a testimonial, a
  formal assessment, a CEFR result or evidence of a guaranteed outcome."
- It demonstrates only the quality of the instructional thinking (recognising what already works,
  diagnosing a specific gap, proposing one manageable revision, testing it against a changed
  follow-up). It does **not** demonstrate, and must never be read as demonstrating: that pronunciation,
  intelligibility, stress, rhythm, intonation, pacing or actual spoken delivery were assessed (a
  written transcript cannot show any of that — the section's transcript-only boundary makes this
  explicit); that a real learner achieved this outcome; or that any interview, job, promotion or
  presentation outcome followed.
- No CEFR level, score, percentage or rating is attached to any part of the demonstration.

### Learner evidence status: none available

- `content/testimonials.ts` remains an empty array. No genuine, consent-confirmed Spoken English
  testimonial, interview result, presentation outcome, before/after audio, employer statement or
  learner case study exists in the repository.
- `SpokenEnglishVerifiedEvidence.tsx` filters `publishedTestimonials` to
  `courseSlug === "spoken-english"` and returns `null` (no heading, no section, no placeholder)
  while that filtered set is empty — which it currently is.
- Until a genuine record exists, no Spoken English evidence section renders on the public page, and
  the illustrative demonstration must never be repurposed, rebranded or extended to imply that it
  is such a record.

### Audio collection/publication remains unresolved

No audio, video, recorder, upload control or AI pronunciation/speech analysis was added in Step 4,
and none may be added until a separate, fully-documented decision covers: ownership of each
recording; explicit consent to public web publication (distinct from consent to be quoted);
consent to editing/transcription; approved public identity; whether employer/client voices or
confidential information appear; a permanent removal/redaction method; a withdrawal/removal
process; storage and retention; an accessibility transcript/captions; whether two recordings are
genuinely comparable; and that no manipulated audio could create a misleading result. See
`docs/testimonial-content-intake.md`'s "Spoken English-specific intake fields (Step 4)" section for
the full intake template this would require.

### Feedback mode/frequency remains unresolved

Step 3's "Operational inclusions still unresolved" list (feedback mode, frequency, turnaround,
etc.) is unchanged by Step 4. The illustrative demonstration shows what a feedback *cycle* can look
like in principle; it does not confirm how often, in what format, or within what turnaround real
feedback is actually given in the current offer.

### Evidence eligibility rules

A Spoken English testimonial may render on the public page only when all of the following pass:

1. The exact quotation was supplied or explicitly approved by the person.
2. `consentConfirmed` is `true`.
3. `courseSlug` is exactly `"spoken-english"`.
4. `displayName` matches the approved public format.
5. `context` is accurate and non-sensitive.
6. The quotation is not generated, rewritten or embellished.
7. Any outcome statement is supported and appropriately qualified.
8. Employer/client names are removed unless separately approved.
9. The quote does not make an unsupported clinical or guaranteed claim.
10. Publication does not expose private contact or account data.

Rewriting a person's quote to improve its grammar is not permitted without their explicit approval
of the final public wording — request permission for an edited version, or use a clearly approved
excerpt instead.

## Technical SEO, metadata and internal linking (Step 10)

- **Step 10 implementation date:** 2026-08-28.
- **Final title:** `Online Spoken English Coaching | Aisha's English` — set via Next.js's absolute-
  title syntax (`{ absolute: "..." }`) so the root layout's `%s | Aisha's English` template cannot
  append the brand a second time.
- **Final description:** "Online Spoken English coaching focused on pronunciation, response
  building and practical communication for work, interviews, presentations, study and everyday
  situations." — no guaranteed improvement, formal assessment, live/group/one-to-one format, Zoom,
  recordings, duration, fee, start date, or native-accent claim.
- **Canonical URL:** `https://aishasenglish.com/courses/spoken-english`, built from `site.domain`,
  one declaration, no trailing-slash duplicate.
- **Open Graph/Twitter values:** type `website`; title "Online Spoken English Coaching with
  Aisha"; description "Focused on pronunciation, response building and practical communication for
  work, interviews, presentations, study and everyday situations."; Twitter card
  `summary_large_image`. Image: `public/images/social/spoken-english-coaching.jpg`, a genuine
  `1200×630` file (confirmed via `sharp` metadata inspection immediately after generation), composed
  by resizing the same site-approved `public/images/og-image.jpg` portrait (`960×1280`, unmodified
  other than the resize) to `473×630` and centring it on a plain `#F7FAFB` (ivory) canvas — padding,
  not cropping or stretching, following the exact IELTS/PTE/TOEFL Step 10 recipe. No AI generation,
  retouching or identity change; no flag, classroom scene, accent graphic, certificate, rating or
  platform logo added. Alt text: "Portrait of Aisha, the teacher behind Aisha's English" (factual,
  built from canonical `site.founder`/`site.brandName`).
- **Breadcrumb source and structured-data mapping:** `content/spokenEnglish.ts`'s new `breadcrumb`
  array (`Home` → `/`, `Courses` → `/courses`, `Spoken English Coaching` → current page, no self-
  link) feeds both the visible `components/spoken-english/SpokenEnglishBreadcrumb.tsx` and the
  `BreadcrumbList` JSON-LD built in `app/courses/spoken-english/page.tsx` — the only structured-data
  type added to this route. Verified live: exactly one JSON-LD script on the route, valid JSON,
  3 ordered `ListItem` entries with absolute URLs built from `site.domain`, matching the visible
  path exactly.
- **Structured-data types deliberately excluded, and why:**
  - `FAQPage`/`QAPage` — Google announced the FAQ rich-result feature would stop appearing from
    7 May 2026 and removed the corresponding documentation in June 2026 (reconfirmed live this
    step — see "Google Search Central guidance rechecked" below). The visible specialist FAQ
    (Step 8) is preserved unchanged; only the obsolete schema type was never added to this route in
    the first place, and was actively removed from three other site-wide locations (see below).
  - `Offer` — pricing remains `enquire` (Step 6); no price/currency/availability schema may exist
    while that holds, and none does.
  - `AggregateRating`/`Review` — no permission-cleared, representative Spoken-English-specific
    evidence exists (Step 4's evidence guard remains empty).
  - `Course`/`CourseInstance` — a single detail page is not a course-list context, and no complete
    verified intake exists (Step 7 remains enquiry-only).
  - `Service`/`Person`/`Organization` — no canonical, visible, maintained site-wide strategy
    justifies adding generic schema here.
- **The June 2026 removal of Google FAQ rich results:** confirmed via direct review of current
  Google Search Central documentation on the implementation date (28 August 2026) — the FAQ
  rich-result feature stopped appearing from 7 May 2026 and its documentation page was removed in
  June 2026; breadcrumb structured data remains documented and supported. As a result, the
  pre-existing `FAQPage` JSON-LD in `components/HomeFAQ.tsx`, `components/CoursesFAQ.tsx` and
  `app/faq/page.tsx` was removed (no other consumer of that schema was found or documented) —
  every visible FAQ and native `<details>/<summary>` accordion in all three locations is fully
  preserved and unchanged; only the obsolete `<script type="application/ld+json">` block and its
  `faqJsonLd` object construction were removed from each. `app/courses/o-a-level-english/page.tsx`
  also contains a `FAQPage` JSON-LD block; it was found during this audit but deliberately left
  untouched — it falls outside this Spoken English step's explicit scope (the implementing prompt's
  Part F names only the three files above), and O/A Level is out of scope for this task.
- **Cross-site contradictions corrected** (narrowest safe edit at each canonical source, then
  regression-tested):
  - `app/page.tsx` (homepage availability section): "Upcoming live online intakes" / "ask Aisha
    about the next suitable group or one-to-one opening" → "Review confirmed upcoming intakes" /
    "Confirmed future dates are listed in Pakistan Standard Time. If your programme is not shown,
    ask Aisha whether a suitable current option is available." (removes the universal live/group/
    one-to-one implication).
  - `app/how-it-works/page.tsx`: three of five "Everything that comes with each course" items
    asserted universal claims not verified for every current programme (live delivery on a named
    platform; every class recorded; personal feedback that "moves your score") — reworded to
    confirmation language ("Confirmed live sessions", "Recordings, where confirmed", "Feedback on
    your work"); the page's own metadata description and hero subtitle's "ready and confident"
    outcome promise were also corrected. The other two items ("Relevant practice and progress
    checks"; the consultation/1-on-1 offer) already read as programme-appropriate and were left
    unchanged. This was a narrow correction, not a redesign of that page.
  - `content/courseCategories.ts` (Courses hub communication-skills category): "Build stronger
    speaking and writing" / "improving fluency, confidence, accuracy..." → "Develop practical
    speaking and writing" / "Focused support for learners working on spoken communication, language
    accuracy and written communication beyond a single examination."
  - `content/coursePresentation.ts` (Spoken English card on homepage/Courses hub): `typeLabel`
    "Fluency and communication" → "Spoken communication"; `shortDescription` "Develop clearer
    spoken English..." → "Focus on clearer pronunciation, response building and practical
    communication..."; `bestFor` pluralisation corrected to "a specific real-world speaking
    situation"; `ctaLabel` "View Spoken English Programme" → "View Spoken English Coaching".
  - `content/nav.ts` and `content/courses.ts`: the navigation link label and the canonical
    `course.name` field were both aligned from "Spoken English & Fluency" to "Spoken English
    Coaching" — this field is safely consumed site-wide (Footer programme links, the homepage
    `CourseExplorer` card title and its default WhatsApp message, the general enquiry form's
    programme dropdown), unlike `tagline`/`summary`/`whoFor`/`modules`/`includes`/`price` on the
    same record, which remain non-authoritative and unchanged. `content/courseGuidance.ts`'s
    "speaking" situation's `action` label was aligned to "View Spoken English Coaching" for the
    same reason.
  - `app/courses/page.tsx` (Courses hub metadata): its Open Graph image declared `/images/
    og-image.jpg` as `1200×630`, but the real file is `960×1280` (portrait) — corrected to the true
    dimensions, matching the identical correction already applied to `app/layout.tsx` during IELTS
    Step 10. A properly composed `1200×630` asset specifically for the Courses hub is a separate
    future decision, not required by this step.
  - `public/images/README.md`: added the new `social/spoken-english-coaching.jpg` row so the
    asset inventory stays accurate.
- **Internal links verified:** the homepage (`AudiencePathways`, `CourseExplorer`), the Courses hub
  (category card, course-choice guide), the desktop mega-menu and mobile navigation (`content/
  nav.ts`) all link to `/courses/spoken-english` with descriptive anchor text ("Spoken English
  Coaching", "View Spoken English Coaching", or the shorter natural variant "Spoken English" in one
  compact chip-style card, which is not vague/misleading and was left as a natural variation).
  Footer programme links use the corrected `course.name`. No query-string or empty-fragment link
  variant exists. No nested link inside another clickable card was found or introduced.
- **Google Search Central guidance rechecked (28 August 2026):** confirmed via direct review before
  implementing — `title-link`/`snippet`: the absolute title and description identify the page topic
  and reflect visible content without an unverified operational promise; `breadcrumb`: the visible
  path and `BreadcrumbList` JSON-LD are built from one source and agree exactly; `sd-policies`/
  `search-gallery`/`faqpage`: FAQ rich results are confirmed removed (7 May 2026 cutoff, June 2026
  documentation removal) and course-list markup applies only to a genuine list/carousel context
  with at least three courses, not a single detail page; `google-images`: the social image's alt
  text is factual, not keyword-stuffed.
- **Legacy fields still retained but blocked from publication:** `content/courses.ts`'s
  spoken-english `tagline` ("Spoken English & Fluency — speak without hesitation."), `summary`,
  `whoFor`, `modules`, `includes` and `price: 10000` remain in the file (required by the shared
  `Course` type) but are confirmed unread by any search-facing component, metadata export, or
  structured-data block for this route — verified live this step via a full-page HTML/metadata/
  schema search for the literal strings "10,000", "10000" and "Spoken English & Fluency", none of
  which appeared anywhere in the rendered output.
- **Post-deployment validation tasks:** see `docs/launch-verification.md`'s SEO section below —
  these require a live deployed URL and are not claimed complete from local code.

### QA performed

- Live Playwright script against the production build: 46 checks covering the exact absolute
  title (brand appears exactly once), exact description with no unverified-claim language, exact
  canonical URL, complete Open Graph/Twitter metadata (type, title, description, url, image path,
  exact `1200×630` dimensions, factual alt text, card type), the visible breadcrumb (3 items, exact
  path, working Home/Courses links, no self-link on the current item, `aria-current="page"`,
  hidden separators, not an H1), the `BreadcrumbList` JSON-LD (exactly one script on the route,
  valid JSON, 3 ordered items matching the visible path and canonical URL exactly), absence of any
  `Offer`/`AggregateRating`/`Review`/`FAQPage`/`QAPage`/`CourseInstance`/`Course` schema anywhere on
  the route, absence of the legacy `10,000`/`10000` value and the legacy `"Spoken English &
  Fluency"` string anywhere in rendered HTML, absence of every listed misleading SEO phrase, and no
  horizontal overflow across 9 viewports (320-1440px) — 45/46 passed; the one flagged check
  ("breadcrumb path reads Home / Courses / Spoken English Coaching") was a confirmed test-script
  artifact (the aria-hidden `/` separator's text is still captured by `.innerText()` even though it
  is correctly hidden from assistive technology) — verified against the actual DOM text and a
  screenshot showing the breadcrumb renders exactly as intended.
- A separate regression script confirmed: the homepage's corrected availability copy and footer
  identity; the desktop navigation's corrected label; the Courses hub's corrected category
  title/description, corrected card copy, corrected `CollectionPage` JSON-LD (still valid, now
  using the corrected name), and corrected `og:image` dimensions; `how-it-works`'s corrected
  headings and metadata description; `/faq`'s FAQPage JSON-LD removal with the visible accordion
  and its content fully intact; and the course-choice guide's corrected action label — 25/27
  passed, with the 2 flagged items confirmed as the same CSS `text-transform: uppercase` innerText
  artifact already documented for this project (verified case-insensitively).
- axe-core (wcag2a/wcag2aa/wcag22aa): 0 violations on `/courses/spoken-english`.
- Crawlability verified live: `https://aishasenglish.com/courses/spoken-english` appears exactly
  once in `sitemap.xml` with the canonical host/protocol and no query string or trailing-slash
  duplicate; `robots.txt` allows all crawling and references the sitemap; the route returns `200`
  in the production build.
- Simulated 200% zoom (640×480 viewport): no horizontal overflow; breadcrumb remains visible.
- Regression spot-check: `/`, `/courses`, `/courses/ielts`, `/courses/pte`, `/courses/toefl`,
  `/courses/english-writing`, `/courses/o-a-level-english`, `/how-it-works`, `/faq`, `/about`,
  `/contact`, `/success-stories`, `/batches`, `/free-diagnostic-test` all return 200; TOEFL/IELTS's
  own metadata and `BreadcrumbList` JSON-LD confirmed unaffected by the shared-file edits above.

## Final CTA and enquiry handoff (Step 9)

`content/spokenEnglishEnquiry.ts` is now the single canonical source for the final-stage enquiry
fields and the full WhatsApp/form-fallback/email message text — `content/spokenEnglish.ts`'s
`finalCta` holds only structural copy (eyebrow, heading, body, button labels, response
expectation). `components/spoken-english/SpokenEnglishFinalCTA.tsx` was rewritten to mirror
`components/toefl/TOEFLFinalCTA.tsx` and `components/pte/PTEFinalCTA.tsx` exactly.

- **Step 9 implementation date:** 2026-08-28.
- **Canonical final enquiry fields** (`spokenEnglishEnquiryFields`, exactly six compact groups):
  main speaking situation/listener/audience; what to communicate or achieve; what currently becomes
  difficult; what the learner can already manage, in their own words; any important timeline;
  country/time zone/usual availability/format preference. A group or one-to-one preference is
  requested only as a preference to confirm, never as proof either format exists.
- **WhatsApp/form/email action logic:** WhatsApp is always the primary action
  (`spokenEnglishFinalEnquiry.whatsappMessage`). The secondary action is decided on the server via
  `formsAreConfigured()` — the allowlisted detailed-enquiry link
  (`/free-diagnostic-test?programme=spoken-english&source=spoken-english-page`) when Formspree is
  genuinely configured, otherwise the canonical `mailto:` built from `site.email` via `emailLink()`
  with `spokenEnglishFinalEnquiry.emailSubject`/`emailBody`. Exactly two final actions ever render;
  WhatsApp, the detailed form and email are never shown simultaneously.
- **Form configuration fail-closed behaviour:** unchanged shared logic
  (`lib/forms.ts`'s `isValidFormspreeEndpoint()`/`formsAreConfigured()`) — an empty, placeholder,
  non-HTTPS, wrong-host or malformed endpoint always falls back to the email action, never a broken
  form link. Verified live this step with a temporary local-only `.env.local` Formspree URL fixture
  (see "QA performed" below) and confirmed reverted before this commit.
- **Allowlisted programme and source values:** `lib/enquiryQuery.ts`'s `EnquirySource` gained
  `"spoken-english-page"`, `EnquiryVariant` gained `"spoken-english"`, and `PROGRAMME_QUERY_MAP`
  maps only the exact key `"spoken-english"` to the locked programme label `"Spoken English
  Coaching"` (deliberately defined fresh, per the implementing prompt's own alternative — not
  imported from `content/courses.ts`'s legacy `tagline`/`price`/`modules`/`includes`). Any other
  value (wrong case, underscore, empty, unknown) falls back to the general form — confirmed live
  this step.
- **Privacy/data-minimisation boundaries:** the form requests no audio, files, passport/national-ID/
  visa data, employer/client names, medical/therapy/speech-language records, payment credentials,
  passwords or exact home address. `spokenEnglishFormVariant`'s placeholders explicitly model
  anonymous descriptions ("my manager", "a client") rather than named third parties. The shared
  `leadCapture.privacyNote` ("used only to respond to this enquiry... not added to a marketing
  list") renders unchanged. No new marketing-consent checkbox was added.
- **Confirmation that no audio/files are collected:** confirmed — no file or audio input exists on
  the Spoken English form variant (verified live; same shared `DiagnosticForm.tsx` markup used by
  every variant already has none).
- **Confirmation that submission does not reserve a place or require payment:** the response
  expectation states directly: "No payment is required to ask, sending an enquiry does not reserve
  a place, and you can review the confirmed details before deciding." No response-time commitment
  is made anywhere.
- **Unresolved response-time, format, fee and availability facts:** unchanged from Steps 5-7 — all
  remain `Needs owner confirmation` (see the claim table above). Step 9 does not resolve any of
  them; it only builds the handoff mechanism that requests them.
- **Shared "What happens next" correction (Part F):** `app/free-diagnostic-test/page.tsx`'s
  `leadCapture.requestPage.whatHappensNext` list's third line ("...she may ask for an exam code,
  current score or short work sample") is accurate for the exam-preparation variants but would
  misleadingly imply an audio/work-sample review for Spoken English. A new typed
  `WHAT_HAPPENS_NEXT` per-variant map was introduced in that page (general/ielts/pte/toefl keep the
  exact original shared list unchanged; `spoken-english` uses `spokenEnglishFormVariant
  .whatHappensNext`, which never mentions an exam code, score or work sample). No other variant's
  copy was edited.
- **Analytics boundary preserved:** `"spoken-english"` was added to `VARIANT_CONFIG` in
  `components/DiagnosticForm.tsx` but deliberately NOT to `ANALYTICS_PROGRAMME_BY_VARIANT` or
  `ANALYTICS_SOURCE_BY_VARIANT` — no `assessment_form_start`/`submit`/`error` event fires for this
  variant, and no data-analytics-* attribute was added to `SpokenEnglishFinalCTA.tsx`, consistent
  with every other Spoken English component built so far. This is a deliberate, reviewed decision
  to defer analytics to Step 12 — not an oversight.

### QA performed

- Live Playwright script against the real (unconfigured) production build: 15 checks covering
  exact eyebrow/heading/body/response-expectation wording, exactly 6 compact detail items verbatim,
  no backward links to curriculum/fees/availability/FAQ, no "Book now"/"Enrol now"/"Reserve your
  place" language, exactly 2 final action links, the WhatsApp CTA's exact label and message, and
  (via a follow-up check) the canonical email link's exact subject/body/accessible label — all
  passed.
- A temporary local-only `.env.local` (`NEXT_PUBLIC_FORMSPREE_ENDPOINT` set to a structurally valid
  `https://formspree.io/f/...` URL, never submitted to) was used to test the configured-form
  branch: the secondary action correctly became "Send a Detailed Enquiry" linking to the exact
  allowlisted URL, no email link rendered, exactly 2 actions remained, and navigating to that URL
  directly confirmed the specialist page heading/subtitle, the corrected "what happens next" list
  (no work-sample/exam-code line), the programme field locked and disabled with value "Spoken
  English Coaching", all three specialist field labels, the specialist submit-button label, no
  file/audio input, and the honeypot field present — 0 axe-core violations on both the final-CTA
  page and the form page in this state. The `.env.local` fixture was deleted immediately after
  (confirmed via `ls`) and the production build was rebuilt and re-verified against the real
  (unconfigured) state before this commit.
- Query-resolution edge cases tested live: `programme=spoken-english` (exact) resolves the locked
  variant; `programme=Spoken-English`, `programme=spoken_english`, and an empty `programme=` value
  all fall back safely to the general form; a repeated `programme=spoken-english&programme=ielts`
  query resolves to the first value (`spoken-english`), matching the existing documented rule.
- axe-core (wcag2a/wcag2aa/wcag22aa) on the real (unconfigured) `/courses/spoken-english` page: 0
  violations. Full responsive matrix (320-1440px, 10 viewports): no horizontal overflow at any
  size. No-JS check: final CTA heading renders before hydration.
- The floating WhatsApp button's apparent overlap with the response-expectation text, observed only
  in a `scrollIntoViewIfNeeded()`-driven screenshot, was investigated and confirmed to be the same
  known mid-scroll artifact documented for earlier steps — at the true resting bottom-of-page
  scroll position (and identically on the already-shipped `/courses/toefl` page), the float sits
  over empty footer space with no text overlap at all.
- Regression spot-check: `/`, `/free-diagnostic-test` (general, and with
  `programme=ielts&source=ielts-page`, `programme=pte&source=pte-page`,
  `programme=toefl&source=toefl-page`), `/courses/ielts`, `/courses/pte`, `/courses/toefl`,
  `/courses/english-writing`, `/contact`, `/faq`, `/batches` all return 200 and render their
  existing correct copy unchanged.

## Specialist FAQ (Step 8)

`content/spokenEnglishFaqs.ts` holds exactly eight Spoken-English-specific questions, independent
of `content/faqs.ts`'s `generalFaqs`, rendered by `components/spoken-english/SpokenEnglishFAQ.tsx`
via the shared `FAQAccordion`.

- **Step 8 implementation date:** 2026-08-28.
- **The eight specialist questions added:** `learner-suitability`, `communication-goals`,
  `starting-point-discussion`, `pronunciation-and-accent`, `practice-and-feedback`,
  `progress-timeline`, `current-offer`, `international-learners` (see
  `content/spokenEnglishFaqs.ts` for the full text of each).
- **Answers based on verified facts:** `pronunciation-and-accent` restates the intelligibility-not-
  accent-elimination position established in Step 1/2/3; `international-learners` restates the one
  owner-confirmed fact (online delivery) from Step 5's `delivery.confirmedOnline`.
- **Answers that deliberately route unverified details to confirmation rather than answering
  directly:** `learner-suitability` (no level/age accepted as universal); `communication-goals` (no
  guaranteed outcome or separate specialist course implied); `starting-point-discussion` (no formal
  assessment confirmed as included); `practice-and-feedback` (practice method, feedback format/
  frequency/turnaround, homework, audio requirements and between-session support all still `Needs
  owner confirmation`); `progress-timeline` (no universal timeline — this document has no evidence
  that would ever support one); `current-offer` (links to Learning format/Pricing/Availability
  rather than repeating any amount, date or schedule, all of which remain `Needs owner
  confirmation` or fail-closed); `international-learners` (schedule/timing suitability still
  depends on unconfirmed delivery details).
- **Pronunciation/intelligibility and non-clinical boundary:** `pronunciation-and-accent` states
  directly that no native-accent or accent-removal outcome is promised, frames pronunciation work
  around intelligibility, and states explicitly "this is language coaching, not speech-language
  therapy or a clinical service" — consistent with every earlier step's qualification boundary (see
  `docs/spoken-english-content-sources.md`'s "Content boundary decisions").
- **Speaking-profile/non-certified-assessment boundary:** `starting-point-discussion` states
  directly that "a formal placement test or certified CEFR assessment is not currently confirmed as
  an included service," matching `speakingProfile.boundaryNote` (Step 2) exactly in substance. No
  CEFR level appears anywhere in the FAQ.
- **No-guaranteed-timeline boundary:** `progress-timeline` states there is "no responsible universal
  improvement timeline" and lists the real variables progress depends on, without naming a duration,
  session count, or percentage — consistent with `process.expectation` (Step 3).
- **Stable anchors used for changing offer details:** `#spoken-english-speaking-profile` (Step 2),
  `#spoken-english-coaching-process` (Step 3), `#spoken-english-learning-format` (Step 5),
  `#spoken-english-pricing` (Step 6), `#spoken-english-availability` (Step 7) — every anchor was
  confirmed to exist exactly once in the rendered page via a live Playwright check before this
  step's commit. No fee, date or schedule is duplicated as FAQ text; each changing fact links to its
  authoritative section instead.
- **Shared FAQ contradictions corrected:** none needed. All thirteen `content/faqs.ts` IDs named in
  the implementing prompt (`programmes-taught`, `international-students`, `fees-and-schedules`,
  `grade-guarantee`, `enquiry-details`, `live-or-recorded`, `missed-class`, `new-batches`,
  `fees-payment`, `one-to-one-help`, `platform`, `personal-feedback`, `programme-format-schedule`)
  were re-read against this document and found already programme-neutral — each already routes the
  visitor to "confirm for your specific programme" rather than asserting a universal claim, per the
  correction already made during earlier IELTS/PTE/TOEFL Step 8 work (see
  `content/toeflFaqs.ts`'s equivalent comment for the same conclusion). No edit to
  `content/faqs.ts` was made this step. `components/FAQAccordion.tsx` already provides visible
  `:focus-visible` styling (global `app/globals.css` rule) and already respects
  `prefers-reduced-motion` (the same global rule collapses all `transition-duration`), so no change
  to the shared component was needed either — confirmed by inspection, not assumed.

### QA performed

- Live Playwright script against the production build: 46 checks covering exactly 8 items with
  unique stable ids, all 8 questions verbatim and in order, answers present in the raw
  (pre-hydration) server HTML, every content boundary (no CEFR level, no accent-removal promise, no
  outcome guarantee, no fixed timeline, no invented live/group/one-to-one inclusion, no duplicated
  legacy amount or date, no vague promotional filler), every internal anchor resolving to an
  existing element exactly once, absence of a duplicate "Still have questions?" panel, absence of
  `FAQPage` JSON-LD, keyboard operability (Enter on a focused `<summary>` opens the item), no
  horizontal overflow at 11 viewports (320-1440px) including with the longest answer open at 390px,
  and full regression of Step 1-7 sections plus canonical facts — 46/46 passed.
- axe-core (wcag2a/wcag2aa/wcag22aa): 0 violations.
- No-JS check: heading and all 8 questions/answers render before hydration.
- Regression spot-check: `/`, `/faq`, `/courses`, `/courses/ielts`, `/courses/pte`,
  `/courses/toefl`, `/courses/english-writing`, `/how-it-works`, `/about`, `/contact`,
  `/success-stories`, `/batches` all return 200; the homepage and `/faq` page confirmed still
  rendering the shared `generalFaqs` entries correctly, unaffected by this change.

## Availability verification (Step 7)

`components/spoken-english/SpokenEnglishAvailability.tsx` reads `content/batches.ts` directly via
`getPublishedUpcomingBatches("spoken-english")`, then applies its own
`isCompleteSpokenEnglishIntake()` completeness guard before ever rendering a scheduled card.
Availability and pricing are kept as separate business states — a future intake never verifies a
fee (Step 6 governs pricing), and a verified fee never verifies availability.

- **Step 7 implementation date:** 2026-08-28.
- **Current production state:** no verified published future intake. `content/batches.ts` contains
  no complete, published, non-past, spoken-english-tagged record.
- **Current public behaviour:** the detailed enquiry state — "Ask about a suitable Spoken English
  start." — asking for the learner's speaking goal/situation, current experience and main
  difficulty, who they need to communicate with, any deadline, country/time zone, and usual
  availability; one WhatsApp CTA; an explicit "does not reserve a place, and no payment is
  required" note.
- **Historical Spoken-English-tagged records found:** `batch-001` (2026-07-05) and `batch-003`
  (2026-08-04) — both already past, `status: "Closed"`, `published: false`, format
  `"Live Online Group"`.
- **Why historical formats/durations do not verify current availability:** a closed, unpublished,
  past-dated record proves only that a group intake existed at that time — it does not confirm
  that group delivery, that duration, or any delivery format at all is currently offered. Neither
  historical record has been "republished" with an updated date; each stays exactly as it was
  (Pakistan-calendar past, closed, unpublished) per the project-wide "don't invent, don't delete"
  archival rule (`docs/updating-batches.md`).
- **Completeness requirements for a public future option**
  (`isCompleteSpokenEnglishIntake()` in the component, on top of `getPublishedUpcomingBatches()`'s
  own published/non-closed/non-past/course-slug filtering): a non-empty `id`; `courseSlugs`
  containing `"spoken-english"`; a strictly valid `YYYY-MM-DD` `startDate`; `published: true`;
  `status` not `"Closed"`; an allowed `format` (`"Live Online Group"` or `"One-to-One"`); a
  non-empty `duration`; a non-empty `schedule`; `timezone` exactly `"Asia/Karachi"`; a strictly
  valid `YYYY-MM-DD` `verifiedAt`. A record failing any single check falls back to the enquiry
  state entirely — it is never shown as a partial card with a "TBA" placeholder.
- **Scheduled-state automatic filtering rules:** unpublished records never render; `"Closed"`
  records never render; any date before today in Pakistan time never renders regardless of
  `status`; eligible records are sorted chronologically; `"Filling Fast"` displays as neutral
  `"Open"` unless the record also carries its own `statusVerifiedAt` (a separate, manual, recent
  verification of the scarcity claim itself); a same-day start is not automatically excluded (see
  `docs/updating-batches.md`'s "Same-day starts" note — this is a manual daily check, not something
  the code enforces).
- **Unresolved group, one-to-one, rolling-start, schedule, duration and response-time questions:**
  all still open — see the claim table above (live/asynchronous format, platform, group
  availability, one-to-one availability, level range, duration, session frequency, response time,
  and next intake all remain `Needs owner confirmation`). This step did not resolve any of them; it
  only built the mechanism that will display them correctly once Aisha supplies a complete record.
- **Separation between availability and pricing:** `SpokenEnglishAvailability.tsx` never imports
  `content/spokenEnglishPricing.ts` or renders any amount, currency or billing basis — a scheduled
  intake card shows only start date, schedule, format, duration, status and verification date,
  never a fee (see `components/spoken-english/SpokenEnglishPricing.tsx`, Step 6, for pricing).

### QA performed (fixtures never left in production code)

All fixtures below were added directly to `content/batches.ts` for local testing only, verified,
and then fully reverted (confirmed via `grep` for `QA FIXTURE`/`qa-fixture` markers and a clean
`git diff` showing zero difference from the tracked file) before this step's commit:

- **A single complete, valid, future record** — correctly rendered one scheduled card with every
  field (title, formatted start date, schedule + timezone together, format, duration, "Open"
  status, "Last checked" date) and a CTA message including the intake id, formatted date, schedule,
  and the "does not reserve a place" clarification — 20/20 targeted Playwright assertions passed,
  0 axe-core violations.
- **Two complete, valid, future records at different dates** — both rendered, correctly sorted
  chronologically (earlier date first).
- **Two additional records missing `duration` or `schedule` respectively, added alongside the two
  complete ones** — both correctly excluded entirely (2 cards shown, not 4; no "TBA" or
  "To be confirmed" placeholder appeared anywhere).
- **A record with `status: "Filling Fast"` and no `statusVerifiedAt`** — correctly displayed as
  the neutral `"Open"` status, confirming the scarcity claim fails closed exactly as required.

A dedicated automated unit-test file was not added: this repository has no test runner
(`package.json` has no `test`/`typecheck` script — see `CLAUDE.md`), matching the same conclusion
already reached for the Step 6 pricing validator. The fixture tests above exercise the real,
wired-up component and `lib/batches.ts` logic directly, which is the same method already
established for IELTS/PTE/TOEFL's identical availability components.

## Pricing verification (Step 6)

`content/spokenEnglishPricing.ts` is the single, gate-kept source of truth for any Spoken English
fee shown on `/courses/spoken-english`. It is a discriminated union with two states —
`"enquire"` and `"published"` — mirroring `content/toeflPricing.ts` and `content/ptePricing.ts`
exactly.

- **Current public state:** `enquire` (the required default). `spokenEnglishPricing.status` is
  `"enquire"` and no `"published"` record exists anywhere in the codebase.
- **Legacy amount found and its source location:** `content/courses.ts`'s spoken-english record
  (`price: 10000`). This field has never been read by, or supplied to, this page — the dedicated
  route does not import `content/courses.ts`'s `price` field, `PricingCard`, or any component that
  would consume it.
- **Why the legacy amount is not treated as verified:** it predates this project's verification
  process, has no recorded currency confirmation, billing basis, lesson arrangement, duration,
  session coverage, inclusion list, payment terms, or policy — none of the fields
  `isValidPublishedSpokenEnglishPrice()` requires. A bare number with no supporting evidence is
  exactly the case this validator is built to reject.
- **Required confirmation fields:** amount; currency; billing basis; option name; one-to-one/group
  arrangement; duration; session count and/or session length; schedule scope; included practice
  and feedback; homework; recordings; materials; between-class support; payment method and due
  date; cancellation/refund policy; rescheduling and missed-class policy; effective date;
  validity/expiry date; owner confirmation source and date.
- **Confirmed fields:** none. Every field above remains `Needs owner confirmation` (see the claim
  table above — Step 6 introduced no new confirmation).
- **Unresolved fields:** all of the above.
- **Last review date:** 2026-08-28.
- **Exact condition required to activate published pricing:** Aisha supplies a complete answer for
  every required field above; those answers are recorded in this document first (with an evidence
  source and date); only then is `content/spokenEnglishPricing.ts`'s `spokenEnglishPricing` const
  changed from `{ status: "enquire", lastReviewed: ... }` to a `status: "published"` record with
  every field populated from that recorded evidence — never invented, never copied from
  `content/courses.ts`, a UI card, `site.currency`, or old marketing copy. The record is validated
  automatically: `isValidPublishedSpokenEnglishPrice()` gates what
  `components/spoken-english/SpokenEnglishPricing.tsx` will render, and a second, independent
  module-level assertion in `content/spokenEnglishPricing.ts` makes the production build itself
  fail loudly if a `"published"` record is ever saved incomplete, malformed, or already expired —
  so an incomplete record cannot silently ship. `site.showPrices` can additionally suppress an
  otherwise-valid record (e.g. a temporary site-wide decision to hide all prices) but can never by
  itself cause an invalid or incomplete record to render — confirmed this step by temporarily
  setting a fully valid local fixture and toggling `site.showPrices` to `false`: the fixture
  correctly fell back to the enquiry state (see "QA performed" below).

### QA performed (fixtures never left in production code)

All fixtures below were constructed directly in `content/spokenEnglishPricing.ts` and
`content/site.ts` for local testing only, verified, and then fully reverted (confirmed via `grep`
for `QA FIXTURE`/`qa-fixture` markers and `git diff`/`git status` showing no residue) before this
step's commit:

- **Zero amount** (`amount: 0`) — correctly made the production build fail with
  `isValidPublishedSpokenEnglishPrice()`'s thrown error (covers the zero/negative/NaN/infinite
  category — all four route through the same `Number.isFinite(amount) && amount > 0` check).
- **Unverified inclusion id** (an id not present in `spokenEnglishPage.delivery.approachItems`) —
  correctly made the production build fail.
- **Expired `validUntil`** (a past date) — correctly made the production build fail.
- **A fully complete, valid record** — correctly built and rendered every field (option, format,
  learner scope, formatted amount and billing basis together, duration, schedule, only the two
  referenced inclusion items, payment note, policy note, verified/valid-until dates, and a
  CTA message referencing the option/format/amount) with 16/16 targeted Playwright assertions
  passing and zero axe-core violations.
- **The same fully valid record with `site.showPrices` temporarily set to `false`** — correctly
  fell back to the enquiry state; no fixture data, amount, or partial field leaked anywhere in the
  rendered HTML.
- A standalone unit-test script for the validator (as the implementing prompt's Part 12 requested)
  was not added: this repository has no test runner (`package.json` has no `test`/`typecheck`
  script — see `CLAUDE.md`), and `content/spokenEnglishPricing.ts` depends on the `@/` path alias
  (via `content/spokenEnglish.ts` and `lib/batches.ts`), which only Next.js's own bundler resolves
  — the same limitation already documented in `scripts/analytics-selftest.mts` for why that script
  avoids testing `@/`-importing modules directly. The five build-time/render-time fixture tests
  above exercise the real, wired-up validator against the real file instead, which is the same
  method already established for IELTS/PTE/TOEFL's identical pricing gates.

## Learning-format section field mapping (Step 5)

Every field in the table above is either rendered as the one confirmed fact, folded into the
stable-approach summary (only where it restates Step 1/2 positioning, never an operational claim),
or listed as a pre-enrolment question — never silently dropped and never rendered as an included
benefit.

- **Rendered as confirmed:** Online delivery only (`delivery.confirmedOnline`).
- **Rendered as a pre-enrolment question** (`delivery.detailsToConfirm`, grouped): live/asynchronous
  format, platform, group availability, one-to-one availability, level range, minimum age/scope,
  duration, session frequency, recording availability/access period, speaking-practice method,
  interview/presentation rehearsal inclusion, learner audio submission/storage, feedback
  method/frequency, homework/self-practice expectations, fee/currency/billing basis,
  payment/refund/rescheduling policy, and next intake (surfaced here as "current start date or
  arrangement" — the fail-closed availability section below still carries the canonical wording for
  this one).
- **Deliberately excluded from this section:** testimonial consent/relevance and response-time
  commitment — the first belongs to the conditional evidence component, not this section; the
  second has no natural home in a pre-enrolment checklist about the *service*, and remains an open
  question for Aisha regardless (see "Open questions for Aisha" below, unchanged).
- **Not treated as new evidence:** the approach summary (`delivery.approachItems`) restates only
  Step 1's fit positioning and Step 2's curriculum framing (real communication situations;
  connected communication skills) — it does not confirm, and must never be read as confirming, any
  operational fact about frequency, group/private delivery or a package. The Step 3 coaching-process
  and Step 4 feedback-demonstration items the implementing prompt made available conditionally were
  deliberately withheld this step because `docs/spoken-english-offer-verification.md`'s own record
  (this document) still marks that content "proposed public wording... requiring Aisha's review
  before publication is treated as final" rather than owner-approved — see the file-level comment in
  `content/spokenEnglish.ts` above the `delivery` object for the exact condition to re-check before
  adding them.

## What the public page currently says instead (as of Spoken English Step 10)

`/courses/spoken-english` shows only:

- a Spoken-English-specific hero, compact authority strip and fit section
  (`components/spoken-english/SpokenEnglishHero.tsx`, `SpokenEnglishAuthorityStrip.tsx`,
  `SpokenEnglishFit.tsx`), positioning the page around the candidate's own real speaking
  situations (work, interviews/presentations, study, everyday communication) rather than a
  promise to "speak without hesitation";
- a speaking-profile section (`components/spoken-english/SpokenEnglishSpeakingProfile.tsx`, id
  `spoken-english-speaking-profile`) that replaces Step 1's temporary priorities preview: six
  discussion prompts (situation, listener, communication task, current difficulty, current
  experience, timeline/time-zone/availability), six descriptively-worded profile areas Aisha may
  use to identify initial priorities, and an explicit boundary note that this is a coaching needs
  profile, not a certified CEFR placement, clinical speech assessment, or guarantee of progress —
  answering, informally, part of open question 12 below (the starting point is discussed, not
  formally tested), though whether Aisha's actual current practice matches this description still
  needs her confirmation;
- a communication-curriculum section (`components/spoken-english/SpokenEnglishCurriculum.tsx`, id
  `spoken-english-communication-curriculum`) describing six areas of focus (pronunciation and
  intelligibility, response building, spoken grammar, functional vocabulary, listening and
  interaction, fluency/pacing/repair) with focus areas, practice examples, and boundary notes where
  a claim could otherwise be overstated — framed throughout as areas of emphasis, not a fixed
  syllabus every current option is confirmed to deliver;
- a context-application section (`components/spoken-english/SpokenEnglishContextApplication.tsx`,
  id `spoken-english-context-application`) mapping that same curriculum emphasis onto five real
  situations (work and meetings, interviews, presentations, study, everyday) without implying a
  separate mini-course, price or guarantee per situation;
- a teaching, practice and feedback process section
  (`components/spoken-english/SpokenEnglishCoachingProcess.tsx`, id
  `spoken-english-coaching-process`) describing a five-stage coaching cycle (define the listener,
  purpose and task; build language and response shape; rehearse a first attempt; adapt through
  interaction; review and apply a next priority) and a separate four-lens feedback explanation
  (message/response, language choices, delivery/intelligibility, interaction/repair) — see
  "Teaching approach versus operational inclusions" above for what this section can and cannot be
  read as confirming;
- an illustrative feedback demonstration (`components/spoken-english/SpokenEnglishFeedbackDemo.tsx`,
  id `spoken-english-feedback-example`) — one original, website-created workplace-communication
  scenario moving from a first attempt through what already works, a focused diagnosis, one
  revision priority, a clearer revised response and a changed follow-up, with a prominent
  disclosure before the scenario and transcript-only/outcome boundaries after it — see
  "Illustrative demonstration versus learner evidence" above for the full boundary;
- a conditional verified-evidence component (`components/spoken-english/
  SpokenEnglishVerifiedEvidence.tsx`) that currently renders nothing (no heading, no section)
  because no consent-confirmed Spoken English testimonial exists in `content/testimonials.ts` yet;
- a learning-format section (`components/spoken-english/SpokenEnglishLearningFormat.tsx`, id
  `spoken-english-learning-format`) confirming only that coaching is online, summarising the
  Step 1/2 needs-led approach in two items, and listing every remaining operational fact (delivery
  and people, timing, speaking practice and feedback, access and support, commercial details) as a
  grouped, neutral pre-enrolment question with a hollow "to confirm" marker — never a checkmark —
  plus one contextual WhatsApp action requesting the current arrangement; see "Learning-format
  section field mapping" above for the complete field-by-field mapping;
- a dedicated, fail-closed pricing section (`components/spoken-english/SpokenEnglishPricing.tsx`,
  id `spoken-english-pricing`) currently showing only the enquiry state — no amount, currency,
  billing basis, or "one-time fee" claim anywhere — with one CTA ("Ask for the Current Spoken
  English Fee") requesting the complete current fee details; see "Pricing verification (Step 6)"
  above for the full validation record;
- a dedicated, date-aware, fail-closed availability section (`components/spoken-english/
  SpokenEnglishAvailability.tsx`, id `spoken-english-availability`) currently showing the detailed
  enquiry state — "Ask about a suitable Spoken English start." — since `content/batches.ts` has no
  complete, published, non-past, spoken-english-tagged record; a scheduled-intake card renders
  automatically once one genuinely exists, and disappears automatically once it is past, closed or
  unpublished; see "Availability verification (Step 7)" above for the complete completeness-guard
  and fixture-test record;
- a dedicated eight-question specialist FAQ (`components/spoken-english/SpokenEnglishFAQ.tsx`, id
  `spoken-english-faq`) answering the highest-value objections (suitability, communication goals,
  starting-point discussion, pronunciation/accent, practice/feedback, progress timeline, current
  offer, international enquiries) without inventing any operational detail — see "Specialist FAQ
  (Step 8)" above for the complete record;
- a Spoken-English-specific final CTA (`components/spoken-english/SpokenEnglishFinalCTA.tsx`) with
  its own full structured WhatsApp message as the primary action, and a server-decided secondary
  action — the allowlisted detailed-enquiry form when Formspree is configured, otherwise a plain
  `mailto:` fallback to the canonical `aishasenglish@gmail.com` — never both at once; see "Final CTA
  and enquiry handoff (Step 9)" above for the complete record;
- a visible breadcrumb (`components/spoken-english/SpokenEnglishBreadcrumb.tsx`, "Home / Courses /
  Spoken English Coaching") immediately above the hero, matched exactly by one `BreadcrumbList`
  JSON-LD script — the only structured-data type on this route — plus an absolute, brand-once
  title, an aligned description, and complete page-specific Open Graph/Twitter metadata with a
  genuine `1200×630` dedicated social image; see "Technical SEO, metadata and internal linking
  (Step 10)" above for the complete record.

It no longer shows: `<CourseHero>`/`<CourseModules>` (replaced entirely by the dedicated
components above), `<IncludedList>` (removed entirely), `<PricingCard>` (removed entirely), the
generic complete `<FAQAccordion />` (removed entirely), or Step 1's temporary
`SpokenEnglishPrioritiesPreview` (deleted in Step 2, superseded by the speaking-profile and
curriculum sections above). None of these render "coming soon" or an empty heading in their place —
they are simply absent until their own verified replacement step. As of Step 9, every section
originally deferred here (feedback demonstration, evidence, learning format, pricing, a dedicated
availability component, a specialist FAQ, and the enquiry-handoff form variant) has been built —
see the corresponding "as of Step N" section above for each. Only the conversion-measurement/
analytics extension (mirroring IELTS/PTE/TOEFL Step 12) remains deferred to a later Spoken English
step.

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
fit guidance, the speaking-profile and communication-curriculum content, the fail-closed
availability state and a WhatsApp/email path to ask Aisha directly — never an invented format,
level, duration, fee, feedback promise or intake.
