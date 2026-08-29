# Images Required

Drop your photos into this folder. The website references these filenames:

| Filename | Used on | Recommended size |
|---|---|---|
| `aisha-hero.jpg` | `/courses/o-a-level-english` hero (not the homepage — this row was mislabeled before this update) | 800×1067px (portrait, 3:4) |
| `aisha-cutout-placeholder.png` | No longer referenced by any page (was superseded by `aishaa.png`, itself now superseded by `aisha-prof.jpeg` below) | Transparent-background PNG, portrait, ~1000px tall — left in place, unused |
| `aishaa.png` | No longer referenced by any page (superseded on the homepage by `aisha-prof.jpeg` below) | 896×1195px (portrait, transparent-background cutout) — left in place, unused |
| `aisha-prof.jpeg` | Home page hero (next to "Expert English Coaching for Exams, School and Confident Communication.") | 1083×1452px (portrait, ~3:4) — a real photo with its own natural background (not a transparent cutout), so `components/Hero.tsx` frames it in a fixed-aspect `object-cover` card with rounded corners rather than floating it directly over the circular colour wash |
| `aisha-about.jpg` | No longer referenced by any page (superseded on the About page by `about-aisha.jpeg` below) | 1086×1448px (portrait, 3:4) — left in place, unused, rather than deleted; the file itself is unchanged |
| `about-aisha.jpeg` | About page hero (next to "Meet Aisha, your online English teacher") | 490×468px (near-square, ~1.05:1) — the hero reserves a 3:4 `object-cover` container unchanged by this swap, so this image is cropped to fill it rather than stretched |
| `og-image.jpg` | Default Open Graph / Twitter image (root layout, inherited by pages without their own) | Currently 960×1280px (portrait) — declared as such in `app/layout.tsx`; a genuinely landscape 1200×630px replacement would let more pages use the `summary_large_image` Twitter card type |
| `social/ielts-preparation.jpg` | `/courses/ielts` Open Graph / Twitter image | 1200×630px (landscape) — composed from `og-image.jpg` padded onto an ivory background, not cropped or stretched; see `docs/ielts-content-sources.md` for why |
| `social/pte-academic-preparation.jpg` | `/courses/pte` Open Graph / Twitter image | 1200×630px (landscape) — composed the same way as the IELTS asset above, from the same `og-image.jpg` source; see `docs/pte-content-sources.md` for why |
| `social/toefl-ibt-preparation.jpg` | `/courses/toefl` Open Graph / Twitter image | 1200×630px (landscape) — composed the same way as the IELTS/PTE assets above, from the same `og-image.jpg` source; see `docs/toefl-content-sources.md` for why |
| `social/spoken-english-coaching.jpg` | `/courses/spoken-english` Open Graph / Twitter image | 1200×630px (landscape) — composed the same way as the IELTS/PTE/TOEFL assets above, from the same `og-image.jpg` source; see `docs/spoken-english-content-sources.md` for why |
| `social/english-writing-coaching.jpg` | `/courses/english-writing` Open Graph / Twitter image | 1200×630px (landscape) — composed the same way as the IELTS/PTE/TOEFL/Spoken English assets above, from the same `og-image.jpg` source; see `docs/english-writing-content-sources.md` for why |

## Testimonial Photos

There are no testimonials in the codebase yet — see `docs/testimonial-content-intake.md` for
how Aisha adds one. Once a specific person has approved their photo for publication, drop it
into a subfolder `images/testimonials/` and reference its filename in that person's `image`
field in `content/testimonials.ts`. There is no fixed filename list — each entry names its own
file. Photos should be square (1:1 ratio), minimum 88×88px. They render at 44×44px.

## Tips

- Use JPEG for photos, PNG for logos/graphics
- Compress images before uploading (use [Squoosh](https://squoosh.app) or similar)
- The site uses `next/image` which automatically optimizes images at serve time
