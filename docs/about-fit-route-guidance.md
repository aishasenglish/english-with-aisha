# About-page learner-fit and route guidance

Internal record of `/about`'s scenario-led route-guidance section
(`components/about/AboutLearnerFit.tsx`, content in `content/about.ts`'s `learnerFit`, replacing
Step 1's short `AboutFitBoundary` note). This is a maintenance document — nothing here is legal
advice, and this is decision guidance, not a quiz, automated assessment, formal placement test or
promise of eligibility.

**Implementation date:** About Step 7 (29 August 2026).

## Dependency confirmation

Confirmed before editing: About Steps 1–6 are present (conversion-focused architecture, verified
credential hierarchy, fact-safe teaching approach and professional story, fail-closed testimonial
evidence, the authentic portrait/responsive-image system) and the public brand-name
standardisation to `AISHAS ENGLISH` is complete.

## 1. Purpose of this section

After learning who Aisha is and how she teaches, a visitor still needs quick, honest answers to:
is this relevant to my goal, which programme page should I open, what should I confirm before
choosing a test route, what should I do if unsure, what to include in a first message, and which
requests are outside this teaching offer. `AboutLearnerFit` answers all six with ordinary semantic
content — no interaction, client state, carousel, tabs, accordion or multi-step quiz.

## 2. Broad expertise routes vs. scenario-led learner-fit guidance

`AboutExpertiseRoutes` (earlier on the page) answers "what areas does Aisha support?" with a
concise category overview (English tests / communication / writing). `AboutLearnerFit` answers "
given my situation, where should I go next?" with scenario-first language ("this is you if…")
rather than category labels. Both sections link to the same verified destinations — this is
intentional (one canonical route map, not two independently-drifting ones) — but the framing,
signal language and boundary notes are distinct, and neither repeats the other's card grid or
button set. `AboutFitBoundary`'s old three-sentence note was evolved into this richer section in
the same page position, not duplicated alongside it.

## 3. Public routes and verified destinations

| Route | Visitor signal | Destination | Link text |
|---|---|---|---|
| A recognised English test is required | An organisation has asked for a specific test/score | `/courses/ielts`, `/courses/pte`, `/courses/toefl` | "Explore IELTS Preparation", "Explore PTE Academic Preparation", "Explore TOEFL iBT Preparation" |
| Real-life spoken communication | Speaking practice for work/study/everyday situations, not a named test | `/courses/spoken-english` | "Explore Spoken English Coaching" |
| Clearer written English | Developing the learner's own writing | `/courses/english-writing` | "Explore English Writing Coaching" |
| Not sure yet | Broad goal, needs comparing, or explaining the situation first | `/courses` (always) + a human-enquiry action (see below) | "Compare All English Programmes" |

All five destination routes were verified live (HTTP 200) as part of this step's testing — see
"Tests performed" below. No route uses generic "Learn more" text.

## 4. O/A Level subdomain dependency (fail-closed)

Aisha intends a separate subdomain for O/A Level services. **No verified subdomain URL has been
supplied for this task.** Per this step's own explicit rule:

- No hostname was invented, guessed, or derived from the brand.
- No temporary or placeholder URL was added anywhere in code, copy, comments or documentation.
- `content/about.ts`'s `learnerFit.routes` array has **no** school/O-Level/A-Level entry.
- `/about` did not show a school-English route before this step either (`AboutExpertiseRoutes`
  deliberately excluded it in About Step 1, per that step's own three-route-group scope), so per
  this step's rule ("if the current About page does not show the school route, do not introduce a
  new public destination in Step 7"), none is introduced now.
- A real, separate internal page already exists at `/courses/o-a-level-english`
  (`app/courses/o-a-level-english/page.tsx`, 888 lines, already linked from the homepage footer,
  navigation and `content/programmeMatcher.ts`'s own `"school-english"` recommendation). This is
  **not** the deferred subdomain — it is a distinct, already-live internal route. This step
  deliberately does not present it as the new subdomain, and did not add it to `/about`'s new
  section, to stay consistent with the "no new destination" rule above rather than exploit the
  ambiguity between "an existing internal page" and "the future subdomain."

**Where the destination can later be added safely:** `content/about.ts`'s `learnerFit.routes`
array (add one new `AboutFitRoute` entry, e.g. `id: "school-english"`, following the exact shape
already used by the other four entries) and `components/about/AboutLearnerFit.tsx` needs no
structural change — the route-rendering loop already handles any array length. No `md:col-span-2`
override is needed unless the new entry also carries three-plus links.

**What must be updated once Aisha provides the verified URL:**

1. Confirm whether the destination is the new subdomain or the existing
   `/courses/o-a-level-english` page, and get explicit confirmation either way.
2. Add the route entry to `content/about.ts` with accurate `signal`/`guidance`/`boundary` text.
3. If linking to an external subdomain, use a plain `<a>` (not `next/link`) and follow this
   site's existing external-link convention (`target="_blank" rel="noopener noreferrer"`,
   consistent identification as leaving the site).
4. Add the new destination to this document's route table above.
5. Extend the responsive/QA test script referenced below to cover the new card.
6. Reconsider whether `AboutExpertiseRoutes` (Step 1) should also be revisited at the same time,
   since it independently excluded O/A Level for the same reason.

## 5. Excluded service categories and reasons

The "This teaching may not be the right service if you need…" subsection excludes, with reasons:

| Excluded | Why |
|---|---|
| A guaranteed score, grade, pass, admission, visa or job result | No outcome can be guaranteed by teaching alone |
| Official advice from a test provider, university, immigration authority or professional regulator | Aisha cannot decide what an institution accepts or give regulated advice — the visitor is pointed to confirm directly with that authority instead |
| Clinical speech, language, hearing, mental-health or learning-difficulty assessment or therapy | Outside a teaching relationship entirely; requires a qualified clinical professional |
| Ghostwriting, assignment completion, exam impersonation, plagiarism support, or help bypassing academic-integrity/AI-detection controls | Contract-cheating and integrity-violation categories, incompatible with teaching the learner |
| A proofreader or editor who completes the learner's work instead of teaching them | Coaching develops the learner's own writing; it does not substitute for it |
| An instantly reserved class, confirmed schedule, or accepted payment before availability/terms are confirmed | No workflow exists for that; every enquiry is confirmed manually first |

Tone: calm and helpful, never scolding — phrased as "this teaching may not be the right service
if you need…" rather than a list of prohibitions aimed at the visitor. No exhaustive legal
disclaimer wall was added.

## 6. First-enquiry data-minimisation guidance

The "What to include in your first message" list requests only what's needed to route the
enquiry: goal and real-life context, the exact test/required result if applicable, a brief
starting-point description in the learner's own words, a deadline if one exists, country/time
zone and general availability, and a request to confirm current format/fee/availability.

Explicitly **not** requested or encouraged, per this step's own rule: passport/national ID/visa/
payment information, private login credentials, confidential employer/client/school/institution
records, medical or diagnostic records, a full unpublished essay/assignment or other sensitive
intellectual property, unnecessary personal documents, or children's identifying details beyond
what a safe enquiry genuinely requires. None of these data points is embedded into any URL query
parameter or prefilled WhatsApp/email text — confirmed via live testing that the only prefilled
content is the same short starter message and subject/body defined in
`content/about.ts`'s `learnerFit.humanEnquiry` object.

## 7. Form/WhatsApp/email fallback behaviour

Mirrors `AboutFinalCTA.tsx`'s already-established pattern exactly, decided server-side via
`formsAreConfigured()` (`lib/forms.ts`) — never client-side, so there is no flash of the wrong
action:

- **Form configured:** shows "Ask Aisha for a Course Recommendation" linking to
  `/free-diagnostic-test` (the repository's existing technical route for the general enquiry
  form) alongside a WhatsApp action. The internal URL is never shown as visible text — the label
  is always the truthful "Ask Aisha for a Course Recommendation," never "Free Diagnostic Test."
- **Form not configured:** the form link is omitted entirely (not shown broken), and the
  canonical email `aishasenglish@gmail.com` (via `lib/contact.ts`'s `emailLink()`) is used as the
  fallback action instead of a `wa.me` link — confirmed live: with no Formspree endpoint
  configured (the current production state), the section shows exactly one email fallback link
  and zero form links.
- **WhatsApp message:** "Hi Aisha! I would like help choosing the right English programme. My
  goal is:" — no score, date, or other sensitive/misleading content prefilled, matching this
  step's own example text.
- No configuration error, environment variable name, or endpoint value is ever exposed publicly.

## 8. Claim and availability safeguards

Confirmed absent from this section's visible copy (see "Claims and compliance rules" audit
below): any claim that Aisha is an IELTS/PTE/TOEFL examiner, represents or is endorsed by a test
owner, can decide which test an institution accepts, gives legal/immigration/admissions advice,
can diagnose a speech/language/learning condition, guarantees a result, universally provides a
specific delivery format (one-to-one, group, live Zoom, recordings, marked homework, mock tests,
a fixed feedback-round count), or has confirmed current availability merely because a visitor
clicked a link. Every scenario's `boundary` field exists specifically to carry that scenario's own
limit next to its own routes, rather than one generic disclaimer disconnected from the decision it
affects. Programme pages remain authoritative for any programme-specific fact.

## 9. Mobile and accessibility decisions

- One route per row on phones (`grid-cols-1`); two columns from `md:` (768px), with the
  test-preparation card spanning both columns there since it carries three links — confirmed live
  at 820×1180 (test card 788px wide vs. a sibling's 384px).
- `<h2>` for the section heading, `<h3>` for each of the four scenario headings plus the
  first-enquiry and out-of-scope subsection headings (6 total, confirmed live).
- Real `<ul>/<li>` lists for route links, first-enquiry items and out-of-scope items — never a
  dense table or hidden accordion.
- Real `<Link>`/`<a>` elements for every action; no nested interactive elements inside a fake
  "card button."
- Descriptive link text throughout (e.g. "Explore IELTS Preparation," never "Learn more") —
  confirmed live via a repository-wide check for generic link text.
- No colour- or icon-only route-type indicator; no decorative icon was added in this section.
- No `title` attribute, no ARIA role added where native HTML already communicates structure.
- Confirmed live: zero horizontal overflow at 320×568, 360×800, 390×844, 412×915, 768×1024,
  820×1180, 1024×1366, 1280×900 and ~1440×900; the first link in the section is keyboard-focusable
  and DOM/keyboard order matches visual order (routes → first-enquiry list → out-of-scope list).
- Respects reduced motion trivially — no animation was added.
- External WhatsApp links use the same `target="_blank" rel="noopener noreferrer"` convention as
  every other WhatsApp CTA on the site.

## 10. Future-maintenance checklist

- [ ] When Aisha supplies the verified O/A Level subdomain (or confirms
      `/courses/o-a-level-english` as the intended destination), follow section 4's steps above.
- [ ] If a sixth scenario is ever needed (e.g. corporate/professional English, currently gated per
      `docs/about-credentials-verification.md`'s "Corporate Trainer" open question), add it the
      same way — a new `AboutFitRoute` entry, never a second parallel route map.
- [ ] If `content/programmeMatcher.ts` is ever refactored into the canonical source for labels and
      verified URLs, re-test every consumer (the free-diagnostic-test course chooser, this
      section, `AboutExpertiseRoutes`) before removing any duplicated string.
- [ ] Re-run this document's test list whenever a programme route slug changes.
- [ ] If `lib/enquiryQuery.ts` is ever touched for this section specifically, retain allowlist
      behaviour and add regression tests proving an unknown/malformed `programme`/`source` value
      falls back safely (not touched in this step — the section's own links use no query
      parameters at all).

## Tests performed

- `npm run lint` — clean.
- `npm run build` — clean; all 20 routes present.
- `npm run test:analytics` — 34/34 checks passed, unchanged (no analytics touched, per this
  step's own boundary).
- Required source searches: no obsolete brand form (`Aisha's English`/`English with Aisha`/
  `AISHA'S ENGLISH`), no `MA English`/`University Lecturer`, no guessed O/A Level hostname, and no
  live outcome-guarantee or misleading-diagnostic-CTA copy in the files this step changed (every
  "guarantee"/"diagnostic" hit reviewed is a negation or the internal-only route value, never
  visible promotional text).
- Live Playwright pass against a production build (33/33 genuine checks; one flagged "failure" in
  the test script's own broad regex was a false positive matching the out-of-scope exclusion
  list's own "A guaranteed score, grade, pass…" line, which correctly frames that as something
  *not* offered — confirmed non-issue against the actual rendered context): `/about` returns 200
  with one H1 and no console/hydration errors; the section has exactly one accessible H2 and the
  correct heading text; 6 total H3s (4 scenarios + first-enquiry + out-of-scope); no O/A Level
  route card renders; no invented subdomain hostname; no generic "Learn more" text; no visible
  "Free Diagnostic Test" label; all 6 internal destination links resolve with HTTP 200; no raw
  query parameters render as link text; the only external links are `mailto:`/WhatsApp; with the
  form unconfigured (the current production state), the form-link is hidden and the email
  fallback renders instead, addressed to the canonical `aishasenglish@gmail.com`; zero horizontal
  overflow at all 9 required viewport widths (320×568 through ~1440px); the test-preparation card
  is confirmed wider than its siblings at tablet width; the first link in the section is
  focusable; `AISHAS ENGLISH`, `MPhil in English Literature` and `College Lecturer` all remain
  present and correct; the old `#about-fit-boundary` section id no longer exists anywhere on the
  page.

No baseline failure predating this step was found in the files this step touched.
