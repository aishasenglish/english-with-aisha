# Images Required

Drop your photos into this folder. The website references these filenames:

| Filename | Used on | Recommended size |
|---|---|---|
| `aisha-hero.jpg` | Home page hero | 800×1067px (portrait, 3:4) |
| `aisha-cutout-placeholder.png` | Home page hero (right-column cutout portrait) | Transparent-background PNG, portrait, ~1000px tall |
| `aisha-about.jpg` | About page | 800×1000px (portrait, 4:5) |
| `og-image.jpg` | Default Open Graph / Twitter image (root layout, inherited by pages without their own) | Currently 960×1280px (portrait) — declared as such in `app/layout.tsx`; a genuinely landscape 1200×630px replacement would let more pages use the `summary_large_image` Twitter card type |
| `social/ielts-preparation.jpg` | `/courses/ielts` Open Graph / Twitter image | 1200×630px (landscape) — composed from `og-image.jpg` padded onto an ivory background, not cropped or stretched; see `docs/ielts-content-sources.md` for why |
| `social/pte-academic-preparation.jpg` | `/courses/pte` Open Graph / Twitter image | 1200×630px (landscape) — composed the same way as the IELTS asset above, from the same `og-image.jpg` source; see `docs/pte-content-sources.md` for why |
| `social/toefl-ibt-preparation.jpg` | `/courses/toefl` Open Graph / Twitter image | 1200×630px (landscape) — composed the same way as the IELTS/PTE assets above, from the same `og-image.jpg` source; see `docs/toefl-content-sources.md` for why |

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
