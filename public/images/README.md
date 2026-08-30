# Images Required

Drop your photos into this folder. The website references these filenames.

**Last checked:** About Step 6 (29 August 2026) — every dimension below was re-verified directly
from the actual file with `sharp`, not copied from prior documentation. Filenames do not prove
purpose or quality; role assignments below reflect what each image actually looks like and how
it's actually consumed in code, not what its name suggests.

## Identity portraits (Aisha)

| Filename | Actual dimensions / ratio | Role | Current consumer(s) | Alt decision | Container / crop | Loading priority |
|---|---|---|---|---|---|---|
| `about-aisha.jpeg` | 490×468px, ~1.05:1 (near-square) | Full About-page hero portrait | `/about` hero (`components/about/AboutHero.tsx`, via `content/about.ts`'s `hero.portrait`) | Informative: "Aisha, online English teacher and College Lecturer" | `aspect-square` `object-cover object-top`, ~2% trim per side (matches source almost exactly — not stretched into the 3:4 ratio the file's own name might suggest) | `priority` — confirmed the genuine LCP element on both mobile (390px) and desktop (1440px) via `PerformanceObserver`, not assumed from source inspection |
| `aisha-home-hero.png` | 684×984px, ~0.70 (transparent-background cropped portrait) | Homepage hero portrait | `/` (`components/Hero.tsx`) | Informative: "Aisha, online English teacher" | `object-contain object-bottom` inside a softly tinted rounded panel, fixed panel height per breakpoint (390/460/500/530px) | `preload` — homepage hero is above the fold |
| `aisha-headshot.jpg` | 1086×1448px, 3:4 | Homepage "About Aisha" preview portrait | `/` (`components/AboutAisha.tsx`) | Informative: "Aisha, online English teacher and College Lecturer" (About Step 6: corrected from "...English Literature specialist...", which overstated scope — neither the MPhil nor the College Lecturer role establishes "specialist" status) | `aspect-[3/4]` `object-cover`, `max-w-xs md:max-w-none` | Not `priority` (below the fold on the homepage) |
| `aisha-about.jpg` | 1086×1448px, 3:4 | Not currently used — was the original About-page hero portrait before it was swapped to `about-aisha.jpeg` above | None | — | — | — |
| `aisha-hero.jpg` | 865×1280px, ~0.676 (not 3:4 — previously mis-documented here as 800×1067/3:4; corrected) | O/A Level hero portrait | `/courses/o-a-level-english` (`app/courses/o-a-level-english/page.tsx`) | "Aisha, specialist online O and A Level English teacher" — **flagged, not fixed**: "specialist" may overstate scope; this page is explicitly out of this step's scope (O/A Level subdomain work is deferred) | `aspect-[4/5]` (0.8) applied to a source measuring ~0.676 — a real ratio mismatch on that page, also flagged and not fixed here | `priority` (not re-verified this step) |
| `aisha-thoughtful.jpg` | 1086×1448px, 3:4 | O/A Level secondary portrait | `/courses/o-a-level-english` | "Aisha teaching an O and A Level English class" — **flagged, not fixed**: this is a plain portrait, not an actual classroom/teaching photo; the alt text claims a teaching context the image doesn't show. Record for the O/A Level subdomain's own audit rather than corrected here (out of this step's scope) | width/height intrinsic (480×640 declared, real file is 1086×1448 — also a mismatch worth that page's own review) | Not `priority` |

### Unused / avoid-by-default assets

None of these are referenced anywhere in `app/`, `components/` or `content/`. Left in place, not
deleted — do not use any of them without a documented role, consent confirmation and an accurate
alt-text decision first:

| Filename | Actual dimensions / ratio | Note |
|---|---|---|
| `aisha-cutout-placeholder.png` | 896×1195px, ~3:4 (transparent-background cutout) | Heavy (~715 KB) placeholder asset — avoid by default even if a use case appears; re-export/optimise first |
| `aisha-prof.jpeg` | 1083×1452px, ~3:4 | Former homepage hero portrait; superseded by `aisha-home-hero.png` |
| `aishaa.png` | 1224×1285px, ~0.95 (near-square, transparent-background cutout) | Heavy (~1.6 MB) — avoid by default; superseded by the homepage hero assets |
| `aisha-cafe.jpg` | 960×1280px, 3:4 | No current role assigned |
| `aisha-hands.jpg` | 1086×1448px, 3:4 | No current role assigned |
| `aisha-home.jpg` | 885×1280px, ~0.69 | No current role assigned |
| `aisha-pensive.jpg` | 960×1280px, 3:4 | No current role assigned |
| `aisha-professional.jpg` | 870×1280px, ~0.68 (cutout-like/white-background portrait) | No current role assigned — do not add to About merely because the filename sounds professional; less natural as editorial story evidence than `about-aisha.jpeg` |
| `aisha-studio.jpg` | 1086×1448px, 3:4 | No current role assigned |
| `aisha-teal.jpg` | 1086×1448px, 3:4 | No current role assigned |
| `aisha-warm.jpg` | 1086×1448px, 3:4 | No current role assigned |

See `docs/about-visual-assets.md` for the full selection rationale, the ownership/publication
confirmation still required from Aisha, and browser/performance test results.

## Other site images

| Filename | Used on | Recommended size |
|---|---|---|
| `og-image.jpg` | Default Open Graph / Twitter image (root layout, inherited by pages without their own) | Currently 960×1280px (portrait) — declared as such in `app/layout.tsx`; a genuinely landscape 1200×630px replacement would let more pages use the `summary_large_image` Twitter card type |
| `social/ielts-preparation.jpg` | `/courses/ielts` Open Graph / Twitter image | 1200×630px (landscape) — composed from `og-image.jpg` padded onto an ivory background, not cropped or stretched; see `docs/ielts-content-sources.md` for why |
| `social/pte-academic-preparation.jpg` | `/courses/pte` Open Graph / Twitter image | 1200×630px (landscape) — composed the same way as the IELTS asset above, from the same `og-image.jpg` source; see `docs/pte-content-sources.md` for why |
| `social/toefl-ibt-preparation.jpg` | `/courses/toefl` Open Graph / Twitter image | 1200×630px (landscape) — composed the same way as the IELTS/PTE assets above, from the same `og-image.jpg` source; see `docs/toefl-content-sources.md` for why |
| `social/spoken-english-coaching.jpg` | `/courses/spoken-english` Open Graph / Twitter image | 1200×630px (landscape) — composed the same way as the IELTS/PTE/TOEFL assets above, from the same `og-image.jpg` source; see `docs/spoken-english-content-sources.md` for why |
| `social/english-writing-coaching.jpg` | `/courses/english-writing` Open Graph / Twitter image | 1200×630px (landscape) — composed the same way as the IELTS/PTE/TOEFL/Spoken English assets above, from the same `og-image.jpg` source; see `docs/english-writing-content-sources.md` for why |

## Testimonial Photos

| Filename | Actual dimensions / ratio | Role | Current consumer(s) | Alt decision | Container / crop | Loading priority |
|---|---|---|---|---|---|---|
| `student-review.jpeg` | 960×1280px, 3:4 | Abdul Basit's IELTS testimonial portrait | Homepage IELTS student-experience card (`components/HomeIELTSBenefits.tsx`, via `content/homeIELTS.ts`) | Informative: "Abdul Basit, IELTS Batch student" | Circular 112/128px crop, `object-cover object-[center_42%]` | Not `preload` (below the fold) |

See `docs/testimonial-content-intake.md` for the evidence and consent requirements that apply
before publishing additional testimonial photos.

## Tips

- Use JPEG for photos, PNG for logos/graphics
- Compress images before uploading (use [Squoosh](https://squoosh.app) or similar)
- The site uses `next/image` which automatically optimizes images at serve time
