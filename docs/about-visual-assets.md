# About-page visual assets

Internal record of the visual-trust/portrait system for `/about` and the direct homepage identity
surfaces it was cross-checked against. This is a maintenance document — nothing here is legal
advice, and no raster image was generated or edited to produce this step.

**Implementation date:** About Step 6 (29 August 2026).

## Dependency confirmation

Confirmed before editing: About Steps 1–5 are present (`/about` has a portrait hero, a fail-closed
credential hierarchy, a fact-safe professional story, a philosophy-vs-inclusion teaching-approach
section, and a fail-closed testimonial section); the brand-name standardisation is complete
(`site.brandName` reads `AISHAS ENGLISH` everywhere); no fake statistic, certificate asset or
generated learner image exists anywhere in the repository.

## A note on the primary portrait: an owner-approved deviation from this prompt's own assumption

This implementing prompt's "Current image inventory" and "About hero composition" sections both
assume `aisha-about.jpg` (1086×1448, 3:4) is still the live About hero image, and its own
acceptance criteria say to use it "unless an owner-approved alternative is documented."

That assumption is stale: after About Step 1 shipped with `aisha-about.jpg`, Aisha directly
requested (in a live instruction, not through this prompt) that the hero image be swapped to
`about-aisha.jpeg` (490×468, near-square) — a distinctly different file with a confusingly similar
name. That swap was implemented and pushed, and a follow-up request fixed an over-zoomed crop that
resulted from initially keeping the old 3:4 container against the new near-square source. Both
changes are already live on `origin/master`.

This document treats `about-aisha.jpeg` as the current, owner-approved primary About portrait — the
exact "owner-approved alternative" this prompt's own acceptance criteria allow for — rather than
reverting to `aisha-about.jpg`. Every technical requirement in this step (correct ratio, no
stretching, accurate `sizes`, correct alt text, LCP/CLS verification, no duplicate portraits,
documentation) has been applied in full to the actual live asset. `aisha-about.jpg` remains in
`public/images/` unused, left in place rather than deleted, in case Aisha ever wants to revisit the
choice.

## Chosen primary About portrait

- **File:** `public/images/about-aisha.jpeg`
- **Actual dimensions:** 490×468px — verified directly with `sharp` before this step (not copied
  from prior documentation).
- **Actual ratio:** ~1.047:1 (near-square) — not 3:4, not 4:5.
- **File size:** ~28 KB source.
- **Why it was selected:** it is the file Aisha explicitly asked to be used here (see the
  deviation note above); it is a genuine, current photo of Aisha with no artificial studio effects,
  filters or backdrop implying an institution.

## Mobile/tablet/desktop crop decisions

- Container: `aspect-square` (not `aspect-[3/4]`, which was tried first and produced a measurable
  over-zoom — see `docs/about-credentials-verification.md`'s "Correction (over-zoomed crop fixed)"
  section for that history). `aspect-square` matches the source's own ~1.047:1 ratio almost
  exactly, trimming only ~2% per side via `object-cover object-top` — no stretching, no awkward
  cut through the face.
- Container width: `max-w-[280px]` below `sm:` (640px), `max-w-xs` (320px) from `sm:`, `max-w-sm`
  (384px) from `md:` (768px) all the way through desktop — a hard pixel cap, never a percentage of
  viewport width, confirmed by live measurement (see "Responsive `sizes` and priority logic"
  below).
- No circular crop is used for the About hero, per this step's own rule.
- Mobile reading order (**real defect found and fixed this step**): the hero previously used
  `order-1 md:order-2` on the portrait and `order-2 md:order-1` on the text block — which put the
  **portrait before the H1** on phones. Confirmed via live bounding-box measurement before the fix
  (image `y=205`, H1 `y=545` — image rendered first) and after (H1 `y=233`, image `y=621` — text
  now correctly first). Fixed by removing both `order-*` overrides entirely: the text block is
  already the first DOM child and the portrait the second, so plain source order already gives the
  required phone sequence (eyebrow → H1 → role summary → actions → portrait) with no grid columns
  below `md:`, and at `md:`+ the same DOM order naturally places text in the wider left column and
  the portrait in the narrower right column — no `order` utility was ever needed.

## Responsive `sizes` and priority logic

Actual rendered portrait width, measured live via Playwright bounding boxes at every required
viewport width:

| Viewport | Rendered width | Notes |
|---|---|---|
| 320–639px | 280px | flat cap |
| 640–767px | 320–356px | grows toward the `md:` cap as the grid column widens |
| 768–899px | 331–384px | still below the 384px cap in the low end of this range |
| 900px+ | 384px | flat cap, unchanged through 1440px+ |

**Real defect found and fixed this step:** the previous `sizes` value
(`"(max-width: 767px) 280px, (max-width: 1023px) 40vw, 380px"`) used a `40vw` hint for the
768–1023px range. That hint is correct at 768/820px (307px/328px, both safely under Next's 384px
image-size bucket) but overshoots to ~400–409px between roughly 980–1023px viewport width — pushing
Next's `srcset` selection up to the next bucket (**640px** wide) even though the image only ever
renders at 384px in that range. Confirmed via `img.currentSrc` and the actual network request URL
(not the fallback `src` attribute, which always reports the largest bucket regardless of what the
browser actually fetches) at viewport widths 830–1023px before and after the fix:

- Before: 980px/1000px/1023px viewports all requested the 640px-wide image bucket for a 384px
  render — a genuine, measured over-fetch.
- After changing `sizes` to `"(max-width: 639px) 280px, (max-width: 767px) 320px, 384px"` (a flat
  384px hint from 768px onward, matching the real hard cap instead of a percentage that can exceed
  it): every viewport from 830px through 1440px consistently requests the 384px bucket.

`priority` is set on this image. This was verified, not assumed: a `PerformanceObserver` measuring
the actual `largest-contentful-paint` entry confirmed the portrait `<img>` is the genuine LCP
element at both 390px (mobile) and 1440px (desktop) viewports, with fast render times (73–132ms),
confirming the preload is doing real work rather than being applied speculatively. No other About
image is marked `priority`.

CLS was measured via `PerformanceObserver`'s `layout-shift` entries at both viewports: **0** at
both mobile and desktop — the fixed-aspect container reserves the correct space before the image
loads.

## Alt text and caption decisions

- **Final alt text:** "Aisha, online English teacher and College Lecturer" — concise, factual,
  matches the canonical `site.professionalRole`, and omits the MPhil qualification (not visually
  observable, and already stated in the adjacent hero body copy).
- No caption is used — the hero heading and body copy already identify Aisha, her role and the
  brand, so a caption would only repeat information already present.
- No `title` attribute is used as a substitute for alt.
- The portrait is not wrapped in a link (clicking it has no navigation purpose).
- Confirmed via live testing: exactly one image on `/about` carries this identity string in its
  alt text — no duplicate accessible announcement.

## Duplicate-image audit

Confirmed via live DOM inspection: exactly one `about-aisha.jpeg` element renders on `/about`, and
no other Aisha portrait appears anywhere else on the page (credentials, professional-story,
teaching-approach, evidence, fit/boundary or final-CTA sections all use typography and spacing for
rhythm, never a repeated image) — matching this step's "avoid visual duplication" rule exactly, and
already true of the existing implementation with no change needed.

## Cross-site identity consistency corrections (real defects found and fixed)

Auditing the direct identity consumers named in this prompt surfaced two genuine alt-text
contradictions, both now corrected:

1. **`components/Hero.tsx`** (homepage hero, `aisha-prof.jpeg`): alt text previously read
   "Aisha, online English teacher and **English Literature lecturer**" — this is not the canonical
   professional role. "College Lecturer" is (`content/site.ts`'s `professionalRole`); "English
   Literature" describes the *subject* of the qualification, not a job title, and conflating the
   two implied an unverified role. Corrected to "Aisha, online English teacher and College
   Lecturer".
2. **`components/AboutAisha.tsx`** (homepage About preview, `aisha-headshot.jpg`): alt text
   previously read "Aisha, **English Literature specialist** and online English teacher" — "
   specialist" overstates scope; neither the MPhil nor the College Lecturer role establishes
   specialist status in every English Literature context. Corrected to the same simple, factual
   pattern: "Aisha, online English teacher and College Lecturer".

All three direct identity images (About hero, homepage hero, homepage About preview) now use
consistent, accurate alt text built around the same two canonical facts, with no promotional
adjective and no unverified role in any of them.

`public/images/og-image.jpg`'s declared metadata dimensions (960×1280 in `app/layout.tsx`) were
re-verified against the actual file — accurate, no change needed. The header wordmark
(`components/Header.tsx`) renders `{site.brandName}` as text, not an image, and already reads
"AISHAS ENGLISH" — confirmed aligned, no change needed here.

## O/A Level image issues found — recorded, not fixed (out of this step's scope)

The O/A Level subdomain/page is explicitly deferred per this step's own boundary
("Do not modify... Record questionable O/A image claims for that separate task rather than
expanding scope"). Two issues were found on `/courses/o-a-level-english` and are recorded here for
that page's own future audit, not corrected now:

- `aisha-hero.jpg`'s alt text ("Aisha, specialist online O and A Level English teacher") uses
  "specialist" — the same overstated-scope pattern corrected elsewhere in this step. Its actual
  dimensions are 865×1280 (~0.676 ratio), rendered in an `aspect-[4/5]` (0.8) container — a real
  ratio mismatch on that page. This README previously mis-documented this same file as
  800×1067/3:4; corrected in `public/images/README.md` as part of this step's asset-inventory
  refresh, but the component itself was not touched.
- `aisha-thoughtful.jpg`'s alt text ("Aisha teaching an O and A Level English class") claims a
  teaching/classroom context the image does not actually show — it is a plain portrait, from the
  same photo set as the other 1086×1448 identity shots, not a photograph of a class in session.
  This directly matches this step's own "do not claim an image depicts teaching/institutional
  activity when it does not" rule, and should be corrected when the O/A Level page is next in
  scope.

## Unused/avoid-by-default assets

See `public/images/README.md`'s "Unused / avoid-by-default assets" table for the full list —
`aisha-cutout-placeholder.png` and `aishaa.png` (heavy transparent-background cutouts, 715 KB and
1.6 MB respectively) plus eight other portrait files (`aisha-cafe.jpg`, `aisha-hands.jpg`,
`aisha-home.jpg`, `aisha-pensive.jpg`, `aisha-professional.jpg`, `aisha-studio.jpg`,
`aisha-teal.jpg`, `aisha-warm.jpg`) that are not referenced anywhere in `app/`, `components/` or
`content/`. None was deleted. None should be used without a documented role, an alt-text decision
and confirmation the crop/composition is appropriate for its intended placement first.

## Image ownership/publication confirmation — still required from Aisha

The presence of a photo in this repository suggests intended use, not a complete rights record.
Aisha should confirm, for `about-aisha.jpeg` specifically (and ideally for the wider identity photo
set while reviewing this):

1. She is the person shown.
2. She owns the image or holds permission for website/marketing publication.
3. Any photographer's terms permit this use.
4. She approves the current crop (near-square, `object-top`) and its placement as the About-page
   hero.
5. Whether she wants any of the currently-unused files (see above) retained, or would prefer any
   removed — not actioned in this step either way, since deleting assets is outside this step's
   scope.

This gap is recorded honestly rather than blocking use of the already-intended, currently-live
portrait — consistent with this step's own instruction not to block use of an intended image solely
because internal rights documentation is incomplete, absent a real ownership concern.

## Tests performed

- `npm run lint` — clean.
- `npm run build` — clean; all 20 routes present.
- `npm run test:analytics` — 34/34 checks passed, unchanged (no analytics touched).
- Re-verified actual dimensions of all 15 images named in this prompt's inventory table directly
  with `sharp`, confirming the prompt's own table and finding one additional documentation defect
  it didn't flag: `public/images/README.md`'s `aisha-hero.jpg` row said 800×1067/3:4; the real file
  is 865×1280/~0.676 — corrected.
- Live Playwright pass (40/40 checks) against a production build (`next build && next start`) at
  every required viewport (320×568, 360×800, 375×667, 390×844, 430×932, 600×960, 768×1024,
  820×1180, 1024×768, ~1440×900): zero horizontal overflow, zero console/hydration errors, and the
  portrait's rendered aspect ratio stays within 2% of square (no distortion) at every width; alt
  text is concise/factual with no `title` attribute, the image isn't wrapped in a link, isn't
  keyboard-focusable, and its identity string appears in exactly one image's alt text on the page;
  exactly one `about-aisha.jpeg` element renders (no duplicate portrait); phone reading order is
  confirmed correct (eyebrow → H1 → CTA → portrait, by Y-coordinate); homepage hero and About
  preview alt text both confirmed corrected; zero horizontal overflow at 150% browser text zoom on
  a phone viewport.
- `PerformanceObserver`-based LCP measurement (not source-code inspection) confirmed the portrait
  is the genuine LCP element on both mobile and desktop, justifying its `priority` flag.
- `PerformanceObserver`-based CLS measurement confirmed 0 layout shift on both mobile and desktop.
- Direct network-request measurement (via `img.currentSrc` and `page.on("request")`, not the
  fallback `src` attribute) confirmed the `sizes` fix eliminates a real over-fetch that existed in
  the 980–1023px viewport range before this step.

## Lab-condition caveat

All performance measurements above were taken with a single local `next start` production build on
one machine, over `localhost` (no real network latency), using Chromium via Playwright. This is a
lab measurement, not field data — it does not represent every device, connection speed or browser
engine a real visitor might use. No Core Web Vitals claim is made beyond what was actually measured
in this environment; a genuine field assessment would need real deployment and aggregated
Real User Monitoring data (e.g. via Search Console's Core Web Vitals report) once the site is live
at its production domain.

## No raster image generated or edited

Confirmed: no image file was created, retouched, cropped, recompressed or otherwise modified as
part of this step. Only component code (`components/about/AboutHero.tsx`,
`components/Hero.tsx`, `components/AboutAisha.tsx`), content data (`content/about.ts`) and
documentation (`public/images/README.md`, this file) were changed.
