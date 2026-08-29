import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";
import { aboutContent } from "@/content/about";

// About Step 1: identity, relevance and portrait in one first-screen block. Copy and portrait
// stack in a single phone reading order (value proposition and actions before/alongside the
// portrait, not several screens down), matching the mobile-first order the prompt requires.
// Server component -- no client JavaScript needed for a static hero.
export default function AboutHero() {
  const { hero } = aboutContent;

  return (
    <section id={hero.id} className="bg-white text-ink pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 px-4 border-b border-line">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 lg:gap-14 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
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

        {/* Stable 3:4 aspect-ratio container -- the actual file measures 1086x1448 (3:4), not the
            4:5 ratio public/images/README.md previously documented; verified with sharp before
            implementation and corrected there rather than stretching or cropping the portrait to
            fit a wrong assumed ratio. */}
        <div className="order-1 md:order-2 w-full max-w-[280px] sm:max-w-xs md:max-w-none mx-auto">
          <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden bg-surface-tint">
            <Image
              src={hero.portrait.src}
              alt={hero.portrait.alt}
              fill
              priority
              sizes="(max-width: 767px) 280px, (max-width: 1023px) 40vw, 380px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
