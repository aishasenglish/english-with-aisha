# Brand name standard

Internal record of the site's approved public brand identity. This is a maintenance document —
nothing here is legal advice, and this task did not rename the repository, routes, domain, email
or filesystem folders.

**Implementation date:** 29 August 2026.

## Approved forms

| Form | Value |
|---|---|
| Public display brand | `AISHAS ENGLISH` |
| Compact/no-space identifier | `AISHASENGLISH` (documented here; not stored as its own field in `content/site.ts` — see "Compact identifier" below) |
| Domain | `aishasenglish.com` (unchanged, lowercase, technical value) |
| Public email | `aishasenglish@gmail.com` (unchanged, lowercase, technical value) |
| Founder/person name | `Aisha` (unchanged — never renamed to the brand) |

## Retired forms

The following are no longer approved anywhere in public copy, metadata or artwork:

- `Aisha's English`
- `Aisha's English` (curly apostrophe)
- `AISHA'S ENGLISH`
- `AISHA'S ENGLISH` (curly apostrophe)
- `English with Aisha`

Do not reintroduce an apostrophe into the brand under any casing.

## Canonical source

`content/site.ts`'s `brandName` field is the **only** canonical display-brand source. Every
component, page and content file reads `site.brandName` rather than repeating the string as a
literal (`app/layout.tsx`'s title template/OG `siteName`, `app/page.tsx`, `app/courses/page.tsx`,
`app/courses/o-a-level-english/page.tsx`, `components/Footer.tsx`, `components/Header.tsx`,
`content/about.ts`). The five specialist course pages' hard-coded absolute titles
(`{ absolute: "..." }`, which bypass the root title template) now interpolate `${site.brandName}`
instead of a duplicated literal, so they can never drift from the canonical value again.

## Compact identifier

`AISHASENGLISH` is the approved no-space form, reserved for genuine technical contexts where a
space is impossible (e.g. a future social-media handle, a URL slug, a case-sensitive identifier).
No real consumer currently exists in this repository — no social handle is configured
(`site.socials` is all empty strings), and no other technical context needs a no-space brand
string — so it is **not** added as its own `content/site.ts` field per this task's own instruction
not to add an unused source field. Add a `brandIdentifier` field only when a genuine consumer
needs it, and only with this exact value.

**Never use `AISHASENGLISH` in ordinary prose, headings or the main header/footer wordmark.** The
default display form is always `AISHAS ENGLISH`.

## Ordinary possessive grammar boundary

Only brand *references* were changed — not every possessive phrase containing Aisha's name.

**Changed (brand reference):**

- `Through Aisha's English, she teaches online...` → `Through AISHAS ENGLISH, she teaches online...`
- `the teacher behind Aisha's English` → `the teacher behind AISHAS ENGLISH`
- `Aisha's English covers three routes` → `AISHAS ENGLISH covers three routes`
- `Online IELTS Preparation | Aisha's English` → `Online IELTS Preparation | AISHAS ENGLISH`

**Preserved (ordinary possessive, not a brand reference):**

- `Aisha's teaching approach`
- `Aisha's qualification`
- `Aisha's current role`
- `Aisha's English teaching` (meaning "English teaching performed by Aisha," not the brand —
  e.g. `docs/about-credentials-verification.md`'s open question about a verified teaching start
  date)
- `I'm Aisha` (an ordinary contraction, unrelated to the brand)

## Usage table

| Context | Correct form |
|---|---|
| Header/footer wordmark | AISHAS ENGLISH |
| Body copy naming the business | AISHAS ENGLISH |
| Metadata/OG site name | AISHAS ENGLISH |
| Copyright | AISHAS ENGLISH |
| No-space identifier, only when required | AISHASENGLISH |
| Domain | aishasenglish.com |
| Email | aishasenglish@gmail.com |
| Founder/person name | Aisha |
| Ordinary possessive | Aisha's teaching / Aisha's qualification |

## Metadata and title format

- Root title template (`app/layout.tsx`): default `${site.brandName} — ${site.tagline}`,
  template `%s | ${site.brandName}` — both dynamic, no literal.
- Every specialist course page's absolute title (IELTS, PTE, TOEFL, Spoken English, English
  Writing) now reads `... | ${site.brandName}`.
- Open Graph `siteName` and every OG/Twitter social-image alt text that names the teacher/brand
  (`Portrait of ${site.founder}, the teacher behind ${site.brandName}`) are dynamic — the IELTS
  page's alt text was previously a hard-coded literal not matching the other four programme
  pages' already-dynamic pattern; it now matches.
- `app/courses/o-a-level-english/page.tsx`'s `Course` JSON-LD `provider.name` reads
  `site.brandName` dynamically — no literal to change.
- `Person` JSON-LD (`name: site.founder`, `jobTitle: site.professionalRole`) is unaffected — the
  founder is never renamed to the brand, and no alumni/award/employer detail was added.

## Logo/wordmark rule

`public/logo.svg` (a two-line "English with" / "Aisha" wordmark, confirmed unused by any current
component — `grep` found no reference to `logo.svg` anywhere in the codebase) was updated to a
single-line `AISHAS ENGLISH` wordmark:

- the book/A icon mark is unchanged;
- the `English with` and `Aisha` text nodes and their comments were removed;
- `viewBox`/`width` widened from `160×44` to `205×44` so the full 14-character wordmark fits
  with a comfortable safety margin on both sides (font-size 14, weight 700, 0.02em
  letter-spacing) — verified by rendering the file to PNG with `sharp` (both on its own and
  composited onto a dark background, since its white fill needs a dark background to be visible
  — the same treatment the original two-line version already assumed);
- the gold underline accent now spans the new text width;
- no bitmap conversion, no AI-generated logo, no ® or ™, no old word order anywhere including
  comments.

**Defect found and fixed during verification:** the first draft's wordmark comment used a
double-hyphen (`--`) inside an XML comment (`<!-- ... standardisation -- no apostrophe ... -->`),
which is invalid XML/SVG — `sharp` failed to parse the file at all ("Double hyphen within
comment"). This would have broken the asset for any future consumer, including this task's own
verification rendering. Fixed by rewording the comment to avoid the double-hyphen, and confirmed
the file parses and renders correctly afterward. This codebase's usual "--" comment-separator
convention (used throughout `.ts`/`.tsx` files) is not valid inside an actual XML comment node —
worth remembering for any future SVG edit.

`public/images/logo-mark.png` (the symbol-only "ae" monogram actually used in
`components/Header.tsx`) was inspected and contains no text at all — left unchanged, per this
task's own instruction not to replace a symbol-only asset that carries no obsolete brand text.

## Social-image rule

Every image referenced from metadata was inspected directly (not just its alt text):

| Image | Contains brand text? | Action |
|---|---|---|
| `public/images/og-image.jpg` | No — a plain portrait photo, no text overlay | Preserved unchanged |
| `public/images/social/ielts-preparation.jpg` | No | Preserved unchanged |
| `public/images/social/pte-academic-preparation.jpg` | No (composed identically from the same source photo) | Preserved unchanged |
| `public/images/social/toefl-ibt-preparation.jpg` | No (composed identically) | Preserved unchanged |
| `public/images/social/spoken-english-coaching.jpg` | No (composed identically) | Preserved unchanged |
| `public/images/social/english-writing-coaching.jpg` | No (composed identically) | Preserved unchanged |

No raster artwork needed updating — only the alt text describing them (already dynamic on four of
five pages; the IELTS page's alt text literal was made dynamic to match, per "Metadata and title
format" above).

## Files changed

- `content/site.ts` — `brandName` updated to `AISHAS ENGLISH`; explanatory comment added recording
  retired forms and the compact-identifier decision.
- `components/Header.tsx` — hard-coded `AISHA&apos;S ENGLISH` replaced with `{site.brandName}`.
- `public/logo.svg` — single-line wordmark, no apostrophe, widened viewBox (see above).
- `app/courses/{ielts,pte,toefl,spoken-english,english-writing}/page.tsx` — absolute titles now
  interpolate `${site.brandName}`; IELTS's alt text made dynamic to match its four siblings.
- `content/about.ts` — one literal brand reference in the expertise-routes intro
  (`"Aisha's English covers three broad routes"`) changed to `${site.brandName}`.
- `README.md` — title line updated; a short comment records that the repository/package name
  intentionally remain `english-with-aisha`.
- `docs/launch-verification.md`, `docs/{english-writing,spoken-english,toefl,pte}-offer-verification.md`,
  `docs/{toefl,pte}-content-sources.md` — quoted "Final title"/alt-text values that stated the old
  brand as the current, active value were updated with a note recording the change; historical
  narrative describing what a given Step originally implemented was preserved, not rewritten.
- `docs/brand-name-standard.md` — this file.

Not changed (correctly, per this task's own boundaries): `content/site.ts`'s `domain`/`email`,
every route slug, `app/sitemap.ts`/`app/robots.ts` output, analytics page paths, the repository
folder name, `package.json`'s `name` field, `public/images/logo-mark.png`, any raster social-image
artwork, the O/A Level subdomain configuration, and every ordinary possessive phrase listed above.

## Verification performed

- `npm run lint`, `npm run build`, `npm run test:analytics` all pass.
- Repository-wide case-insensitive search (straight and curly apostrophes, and the HTML-escaped
  `&apos;` form that `components/Header.tsx` used) for every retired form — the only remaining
  hits outside this document and `audit/` (left untracked and untouched) are the explanatory
  "brand-name standardisation updated this from..." annotations added to historical verification
  docs, and genuine ordinary-possessive phrases.
- Production build's rendered output inspected for the header wordmark, footer brand/copyright
  line, root `<title>`, every specialist page's `<title>`, and OG `site_name` meta tag — all show
  `AISHAS ENGLISH` with no apostrophe and no duplicated brand in any title.
- Visual check at 320×568 through ~1440px desktop: header wordmark does not collide with the
  mobile menu button or navigation at any width (the new text is one character shorter than the
  retired form, since removing the apostrophe never adds length); footer wraps cleanly; the SVG
  wordmark (though currently unused) renders unclipped in its widened viewBox at its intended
  size.
