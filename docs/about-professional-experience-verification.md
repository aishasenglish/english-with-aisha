# About-page professional-experience verification

Internal record of what the `/about` page's professional-story section
(`components/about/AboutProfessionalStory.tsx`, content in `content/about.ts`'s
`professionalStory`) can and cannot claim publicly. This is a maintenance document — nothing here
is rendered on the public page, and nothing here is legal advice. Existing publication in source
code (including legacy routes) is never treated as evidence.

**Implementation date:** About Step 4 (29 August 2026).

## Verification table

| Claim/milestone | Status | Source/evidence | Exact approved public wording | Valid from/to | Scope | Page locations | Privacy/permission notes | Last checked | Follow-up |
|---|---|---|---|---|---|---|---|---|---|
| Current College Lecturer role | Owner confirmed | Owner-supplied fact, `content/site.ts`'s `professionalRole` | "Aisha's current professional work includes teaching as a College Lecturer..." | — | No institution/duration | `/about` professional-story narrative + "College teaching" context block | No institution name, department, tenure or duration published | 2026-08-29 | Publish institution name only with `docs/about-professional-story-intake.md`'s "Permission/authority to publish institution name" answered |
| MPhil in English Literature | Owner confirmed | Owner-supplied fact, `content/site.ts`'s `qualification` | "Her MPhil in English Literature provides an academic foundation for close reading, interpretation and language-focused explanation." | — | No institution/year | `/about` professional-story narrative | No awarding institution or completion year published | 2026-08-29 | Publish once intake's "Academic journey" section is answered |
| Online English tutoring | Owner confirmed at business-purpose level | The site's own stated business model | "AISHAS ENGLISH provides an online starting point for learners to explore goal-specific English support and confirm the current option directly." | — | No platform/format | `/about` "Online English tutoring" context block | Does not claim live delivery, a named platform, recordings, or a response time | 2026-08-29 | — |
| IELTS/PTE/TOEFL/Spoken English/English Writing routes | Verified from canonical site routes | `content/courses.ts` route existence; live pages at each slug | "The website separates test preparation, spoken communication and writing because the task, learner profile and useful practice differ across those goals." | — | Site routes, not experience duration | `/about` "Different English goals" context block, linking to `/courses#language-tests`, `/courses/spoken-english`, `/courses/english-writing` | Describes route *existence*, never years taught, learner counts or results | 2026-08-29 | — |
| Teaching start date | Unverified | None | — | — | — | **Do not publish** a duration or "for years" | No claim made | 2026-08-29 | Needs `docs/about-professional-story-intake.md`'s "Teaching history" section |
| College role start date | Unverified | None | — | — | — | **Do not publish** | No claim made | 2026-08-29 | Same intake section |
| AISHAS ENGLISH launch date | Unverified | None | — | — | — | **Do not publish** an origin timeline | No claim made | 2026-08-29 | Needs intake's "AISHAS ENGLISH" section |
| Institution name | Unverified/not approved | None | — | — | — | **Do not publish** | No claim made | 2026-08-29 | Needs explicit publish permission, not just the name |
| Learner totals/countries | Unverified | None | — | — | — | **Do not publish** | No claim made | 2026-08-29 | Needs intake's "Learner contexts" section, including permission to publish aggregated numbers |
| Corporate training history | Needs evidence/scope | None | — | — | — | **Do not publish** as an experience claim | No claim made | 2026-08-29 | Needs intake's "Additional professional work" section — see also `docs/about-credentials-verification.md`'s open question on "Corporate Trainer" |
| Personal origin story | Needs Aisha's own wording | None | — | — | — | **Do not invent** | No claim made | 2026-08-29 | Needs intake's "Personal narrative" section; any first-person motivation statement requires her direct approval before publication |

## Biography versus service scope

A public service route (e.g. `/courses/ielts` existing and being linked from the professional
story) proves only that the route currently exists and that a visitor can explore or enquire about
it — never how many years Aisha has taught it, how many learners she has taught, results achieved,
certification, current availability or delivery format. The narrative and context blocks in
`content/about.ts` were written to keep this distinction explicit; none of them says "Aisha has
extensive experience teaching IELTS, PTE, TOEFL..." merely because those routes exist.

## Timeline decision

`professionalStory.milestones` is an empty array. No verified milestone with an exact, approved
date currently exists anywhere in this repository (confirmed via the biography claim audit below
and via `docs/about-professional-story-intake.md`, which remains entirely unfilled). Per the Step 4
prompt's own "Timeline decision" — a timeline renders only once at least two meaningful milestones
have verified dates, approved exact wording, learner relevance, and no private institution/client
exposure — none of that is met, so `components/about/AboutProfessionalStory.tsx` renders no
timeline container, heading, "Present" card, estimated date or single-item timeline at all. This is
mechanically enforced: the component checks `professionalStory.milestones.length >= 2` before
rendering anything timeline-related.

If a timeline is later added, calculate any duration deterministically from a recorded exact start
date (never a hard-coded number that goes stale), round down partial years, keep the evidentiary
source in `docs/about-professional-story-intake.md` (not in public code), and never combine
unrelated work periods (e.g. college teaching and private online tutoring) into one figure.

## Claims deliberately omitted

Per `docs/about-professional-story-intake.md`'s current entirely-unfilled state, the professional
story does **not** state: an institution name, a role/teaching start date, a brand-launch date,
learner/country counts, corporate-client names or scope, publications/presentations/memberships,
awards, or any first-person motivation/origin statement. All of these remain open questions for
Aisha (see that file).

## Biography claim audit (About Step 4)

Ran the required search across the professional-story surfaces:

```
rg -n -i 'for years|years of experience|students taught|learners taught|every background|
worldwide|international students|trusted by|success rate|college lecturer|university lecturer|
government college|institution|founded|since|examiner|corporate trainer' app/about
components/about content/about.ts components/AboutAisha.tsx content/site.ts
```

Every match was reviewed and classified:

- `college lecturer` — the canonical, owner-confirmed role, read from `site.professionalRole`
  everywhere it appears; correct and unchanged.
- `institution` — appears only inside this document, `docs/about-professional-story-intake.md` and
  `content/about.ts`'s own explanatory comments (e.g. "No institution name, department, tenure..."),
  never as a published institution name.
- No hit for `for years`, `years of experience`, `students taught`, `learners taught`, `every
  background`, `worldwide`, `international students`, `trusted by`, `success rate`, `university
  lecturer`, `government college`, `founded`, `examiner` or `corporate trainer` in any of the
  audited public-facing files.
- `since` — no hit in public copy (only appears in unrelated code comments elsewhere in the
  repository, outside the audited scope).

## Cross-site consistency

- `components/AboutAisha.tsx` (homepage About preview) was re-checked: its own biography paragraph
  already avoids "for years"/experience totals/institution names (fixed in About Step 1) and does
  not claim anything the full About page's new professional story doesn't also support. No change
  was needed for Step 4.
- `content/site.ts` was not changed — `qualification`/`professionalRole`/`brandName` remain the one
  canonical source `professionalStory` reads from.
- `app/courses/o-a-level-english/page.tsx`'s `Person` JSON-LD (`name: site.founder`,
  `jobTitle: site.professionalRole`) was re-checked: it adds no employer, alumni, award or founding
  date — unaffected by this step, and still correct.
- No public surface names an institution, employer or corporate client anywhere in this repository
  as of this step.
- `docs/about-credentials-verification.md` cross-referenced: its own qualification/role rows remain
  accurate and consistent with this document; no update to that file's verification table was
  needed since neither fact changed.
- `docs/about-teaching-approach-verification.md`: reviewed — the new professional-story narrative
  introduces no teaching-method claim (it only names *what context* Aisha teaches in, never *how*
  she teaches), so no method-boundary update was needed there.
- `docs/launch-verification.md`: no existing entry stated an institution name, founding date or
  learner-count claim as a currently-active value, so no correction was required there for this
  step — see that file's existing "Contact details" section, which already correctly treats
  qualification/role as the only verified facts.

## Page locations

- `/about` — `AboutProfessionalStory` section (narrative + three context blocks; no timeline
  currently renders).
- Homepage `AboutAisha` preview — unaffected; already consistent (see "Cross-site consistency").

## Last checked

2026-08-29 (About Step 4 implementation).

## Removal/expiry handling

Every row above stays "Unverified"/"Needs evidence" until `docs/about-professional-story-intake.md`
is genuinely filled and Aisha approves exact public wording — no expiry date applies to an
unpublished claim. Once a claim is published, review it whenever the underlying fact could have
changed (e.g. a role ending, an institution changing) rather than on a fixed schedule.

## Empty-state behaviour

The professional-story section itself always renders (narrative + context blocks are static,
approved content, not conditional on evidence the way a testimonial or timeline is) — only the
timeline portion is conditionally omitted, per "Timeline decision" above.
