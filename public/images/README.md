# Images Required

Drop your photos into this folder. The website references these filenames:

| Filename | Used on | Recommended size |
|---|---|---|
| `aisha-hero.jpg` | Home page hero | 800×1067px (portrait, 3:4) |
| `aisha-cutout-placeholder.png` | Home page hero (right-column cutout portrait) | Transparent-background PNG, portrait, ~1000px tall |
| `aisha-about.jpg` | About page | 800×1000px (portrait, 4:5) |
| `og-image.jpg` | Open Graph / social previews | 1200×630px (landscape) |

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
