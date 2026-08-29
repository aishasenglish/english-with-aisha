import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";
import { aboutContent } from "@/content/about";

// About Step 1: identity, relevance and portrait in one first-screen block.
// About Step 6 fix: this section previously used `order-2 md:order-1` on the text block and
// `order-1 md:order-2` on the portrait -- which put the PORTRAIT FIRST on phones (confirmed via
// live bounding-box measurement: the image rendered above the H1), directly contradicting the
// required phone reading order (eyebrow -> H1 -> role summary -> actions -> portrait). Removed
// both order overrides entirely: the text block is already the first DOM child and the portrait
// the second, so plain source order already stacks text-then-portrait on phones (no grid columns
// below md:) and places text in the wider left column / portrait in the narrower right column at
// md: and above (two-column grid, first child -> first column) -- no order utility needed either
// way. Server component -- no client JavaScript needed for a static hero.
export default function AboutHero() {
  const { hero } = aboutContent;

  return (
    <section id={hero.id} className="bg-white text-ink pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 px-4 border-b border-line">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 lg:gap-14 items-center">
        <div className="text-center md:text-left">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center justify-center md:justify-start gap-3 mb-3">
            {hero.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h1 className="font-serif text-[2rem] sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-[-0.015em] mb-4">
            {hero.heading}
          </h1>
          <p className="text-ink-soft text-base sm:text-lg leading-relaxed mb-7 sm:mb-8">{hero.body}</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              {hero.primaryCta.label}
            </Link>
            <a
              href={whatsappLink(hero.secondaryCta.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        {/* about-aisha.jpeg is near-square (490x468, ~1.05:1) -- the previous aspect-[3/4]
            container forced a much taller frame than the source photo, so `object-cover` had to
            scale the image up ~1.3x just to cover the height, cropping ~90px off each side and
            reading as an over-zoomed close-up. `aspect-square` matches the source ratio almost
            exactly (only a ~2% trim per side), so the photo now scales and crops correctly without
            the artificial zoom. `md:max-w-sm` (was `md:max-w-none`) also caps the physical size on
            desktop instead of letting it fill the entire grid column. */}
        <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm mx-auto">
          <div className="relative w-full h-full aspect-square rounded-md overflow-hidden bg-surface-tint">
            <Image
              src={hero.portrait.src}
              alt={hero.portrait.alt}
              fill
              priority
              // About Step 6: the container is a hard pixel cap (280px below sm:, 320px from
              // sm:, 384px from md: all the way through desktop -- see the container comment
              // above), never a percentage of viewport width. The previous "(max-width: 1023px)
              // 40vw" hint measured correctly at 768/820px (331px/356px, both under the 384px
              // bucket) but overshot to ~400-409px between roughly 980-1023px viewport width,
              // pushing Next's bucket selection up to 640px wide when the image only ever
              // renders at 384px there -- a real, measured over-fetch (confirmed via
              // `img.currentSrc` and the actual network request, not just the fallback `src`
              // attribute, which always reports the largest bucket regardless of what's really
              // requested). Flat 384px from 768px onward matches the real cap exactly and never
              // crosses into the next bucket.
              sizes="(max-width: 639px) 280px, (max-width: 767px) 320px, 384px"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
