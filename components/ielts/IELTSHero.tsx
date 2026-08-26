import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";
import { ieltsPage } from "@/content/ielts";

// Copy-led hero (IELTS Step 1) — no photograph, since no approved image specific to this page
// exists yet. Server component, no client JavaScript required.
export default function IELTSHero() {
  const { hero } = ieltsPage;

  return (
    <section className="bg-white text-ink py-12 sm:py-16 lg:py-20 px-4 border-b border-line">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center justify-center gap-3 mb-4">
          {hero.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h1 className="font-serif text-[2rem] sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.1] tracking-[-0.02em]">
          {hero.heading}
        </h1>
        <p className="text-ink-soft text-base sm:text-lg leading-relaxed mb-3">{hero.body}</p>
        <p className="text-ink-faint text-sm mb-8">{hero.contextLine}</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
          <a
            href={whatsappLink(hero.primaryCta.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            {hero.primaryCta.label}
          </a>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-medium tracking-wide px-6 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>

        <p className="text-ink-faint text-xs max-w-md mx-auto leading-relaxed">{hero.reassurance}</p>
      </div>
    </section>
  );
}
