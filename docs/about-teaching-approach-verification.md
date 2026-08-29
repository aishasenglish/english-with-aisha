# About-page teaching-approach verification

Internal record of the teaching-philosophy/method copy on `/about` (the "A teaching approach
built around the learner's real goal" section, `components/about/AboutTeachingApproach.tsx`,
content in `content/about.ts`'s `teachingApproach`). This is a maintenance document — nothing here
is rendered on the public page, and nothing here is legal, academic-integrity or clinical advice.

**Implementation date:** About Step 3 (29 August 2026).

> No teaching-method claim moves from this document into public copy without a recorded evidence
> basis, and no first-person "I always…"/"I believe…" statement is published without Aisha's
> explicit approval — see "Wording requiring Aisha's review" below.

## Philosophy versus operational inclusion

Every principle below is a pedagogical description, never a promise of a specific operational
inclusion. `content/about.ts`'s `TeachingPrinciple` type's optional `boundary` field exists
precisely to keep the two separate in code, not just in prose.

| Can state (philosophy/pedagogy) | Requires programme verification (operational inclusion) |
|---|---|
| Goals should be clarified | Live classes, platform (Zoom or otherwise) |
| Priorities should be relevant to the learner's goal | Recordings, and how long they remain accessible |
| Explanations should connect to purpose | Group or one-to-one delivery |
| Practice should be purposeful | Homework/assignments, mocks/tests |
| Review should support a manageable next step | Marking, personal feedback, feedback frequency/turnaround |
| — | Materials, lesson duration, support between sessions, consultations |

Programme pages (`/courses/ielts`, `/courses/pte`, `/courses/toefl`, `/courses/spoken-english`,
`/courses/english-writing`) remain the sole authoritative source for every item in the right-hand
column. This About-page section never states or implies any of them as universal.

## Principles and evidence basis

| Principle | Proposed public wording | Source pattern | Classification | Approved scope | Claim risk if unbounded |
|---|---|---|---|---|---|
| 1. Clarify the real requirement | "Begin with the situation the learner is preparing for, not a generic promise to 'improve English'…" | Mirrors the starting-point/requirement-profile pattern already public on IELTS/PTE/TOEFL (score/level profile), Spoken English (needs-led speaking profile) and English Writing (writing-profile guide) | Philosophy/pedagogy | All programmes, generically | Could read as a formal diagnostic or guaranteed placement if the boundary line were removed |
| 2. Identify manageable priorities | "Focus on the areas most relevant to the learner's current goal and starting point…" | Mirrors each programme's "possible priorities/framework" pattern (never a fixed module list) | Philosophy/pedagogy | All programmes, generically | Could read as a promised personalised plan if not marked as a principle rather than an inclusion |
| 3. Explain the reason, not only the rule | "Explanations connect the language choice or task strategy to its purpose…" | Mirrors the teaching-method language already used in each programme's coaching-process/framework sections (explaining patterns, not rote correction) | Philosophy/pedagogy | All programmes, generically | Could read as dismissing grammar/rules if phrased as an opposition — avoided by explicitly stating it is not that |
| 4. Use purposeful practice | "Practice should have a clear purpose… not simply completing more exercises." | Mirrors each programme's "purposeful/relevant practice" language, never a specific quantity or format | Philosophy/pedagogy | All programmes, generically | Could imply homework, mocks, recordings or live practice are guaranteed — boundary line names all four explicitly |
| 5. Review, revise and choose the next priority | "When review is part of the current option, it helps the learner understand one manageable next change…" | Mirrors each programme's review/feedback framework language, always conditioned on "when part of the current option" | Philosophy/pedagogy | All programmes, generically | Could imply guaranteed feedback or score/result improvement — boundary line explicitly denies both |

No principle is a first-person "I believe…"/"I always…" statement — all five are phrased in
neutral, third-person or infinitive method language precisely because no such statement has been
separately approved by Aisha (see "Wording requiring Aisha's review" below).

## Goal-specific application examples

| Goal | Public wording | Link | Notes |
|---|---|---|---|
| Test preparation | "Confirm the exact test and requirement, understand the relevant task demands, identify current performance priorities and use appropriate practice." | `/courses#language-tests` | Deliberately links to the general test-preparation area rather than a single named test, since the example itself doesn't favour one test. No score-gain promise, no proprietary test content, no claim of identical strategy across tests. |
| Spoken communication | "Start with the real speaking situation, listener and communication task, then identify priorities such as response development, intelligibility or interaction where relevant." | `/courses/spoken-english` | No fluency, confidence or accent-removal promise; no clinical speech-assessment implication. |
| Written English | "Clarify the type of writing, reader and purpose, then focus on relevant areas such as sentence clarity, organisation, tone or revision." | `/courses/english-writing` | No ghostwriting/proofreading/assignment-completion offer; no document requested on this page; no error-free guarantee. |

The school/O/A Level path is deliberately not included as a fourth application example — it is
deferred to its own separate subdomain project; no URL for it is invented anywhere in this section.

## Adaptable method flow

Rendered as `Goal/context → Priorities → Explanation → Purposeful attempt → Review/next step` — a
decorative, `aria-hidden` restatement of the same five-item `<ol>` above, hidden on phones (where
it would wrap awkwardly) and never the sole carrier of meaning. Immediately followed by a fully
readable (not de-emphasised, not a tooltip or footnote) boundary sentence: "This describes the
teaching logic, not a fixed package. The exact activities, delivery format, practice and feedback
arrangement depend on the current programme option and should be confirmed before enrolment."

## How It Works link — decision and corrections (Option A)

`app/how-it-works/page.tsx` was audited before linking to it. It contained three real
truth-safety problems:

1. Section heading "Everything that comes with each course" asserted every item below as a
   universal inclusion, directly contradicting the items' own conditional body text ("confirmed
   for your current programme option"). Changed to "Details to confirm for your programme".
2. The "Confirmed live sessions" item's *title* (not just its body copy) read as an assertion
   that live delivery is confirmed. Changed to "Live sessions, where confirmed" — matching the
   sibling "Recordings, where confirmed" item's already-safe pattern.
3. "Consultations & 1-on-1 practice" was phrased as a standing "Book a consultation…" offer with
   no availability gate. Changed to "Consultations & individual practice, where available", with
   body copy changed from "Book a…" to "Ask whether a consultation or individual practice session
   is available for your current programme option…".

`components/HowItWorks.tsx`'s own four-step process (used only on this page) had a fourth problem:
step 3, "Learn live and practise between lessons" / "Attend live online teaching, revisit class
recordings…", asserted universal live delivery and recording access. Reworded to "Attend your
confirmed sessions and practise between lessons" / "Attend teaching through the delivery format
confirmed for your programme… Recording access, where available, is confirmed for your current
option."

This is **Option A — minimal truth-safety correction**, not a redesign: the same five-item grid,
the same four-step process, the same icons and layout remain; only the specific
universal/standing-offer wording was corrected. `docs/about-teaching-approach-verification.md`
(this file) and `content/about.ts`'s `teachingApproach.closingLink` comment record why the link is
now considered safe to feature: "See how coaching decisions are made" → `/how-it-works`.

An `axe-core` pass confirmed **zero WCAG AA violations** on both `/about` and `/how-it-works`
after these changes.

## Wording requiring Aisha's review

None of the five principles or three goal-application examples is a first-person belief statement,
so none currently requires a stronger approval step beyond this document's own record — but Aisha
should still confirm:

1. Do the five principles accurately describe how coaching actually proceeds today, or does
   practice vary enough (e.g. some learners skip a stage, or review isn't always structured this
   way) that the copy should say so more explicitly?
2. Is "college setting" (used elsewhere on `/about`) consistent with how these principles are
   actually applied in Aisha's private/online coaching versus her college teaching — should the
   method wording distinguish between the two contexts at all, or is one unified description
   accurate?
3. Should any principle name a specific technique (e.g. a particular error-correction method) once
   Aisha confirms it's consistently used — currently everything is deliberately generic.

## Prohibited universal claims (confirmed absent)

Searched `app/about`, `components/about`, `content/about.ts`, `app/how-it-works/page.tsx` and
`components/HowItWorks.tsx` for: "proven method", "secret", "guarantee", "confidence over fear",
"without hesitation", "fluent", "master", "every course", "comes with each course", "confirmed
live" (as a title), "Zoom", "recorded" (unconditional), "one-to-one"/"1-on-1" (unconditional),
"personal feedback" (unconditional), "moves your score", "personalised plan" (unconditional). Every
remaining hit is either a negation ("no result can be guaranteed"), an explanatory code comment, or
already-conditional copy ("Recordings, where confirmed"). None asserts a universal claim.

## Affected files

- `content/about.ts` — new `TeachingPrinciple`/`GoalApplication` types; `aboutContent.teachingApproach`
  replaces `aboutContent.teachingPrinciples`.
- `components/about/AboutTeachingPrinciples.tsx` — deleted.
- `components/about/AboutTeachingApproach.tsx` — new.
- `app/about/page.tsx` — imports `AboutTeachingApproach` instead of `AboutTeachingPrinciples`, same
  position.
- `app/how-it-works/page.tsx` — section heading and two `details` items reworded (see above).
- `components/HowItWorks.tsx` — step 3 reworded (see above).
- `docs/about-teaching-approach-verification.md` — this file.

## Unresolved questions

See "Wording requiring Aisha's review" above. No operational fact (delivery format, feedback
method, homework, recordings, group/one-to-one availability) is resolved by this document — those
remain each programme's own offer-verification record.
