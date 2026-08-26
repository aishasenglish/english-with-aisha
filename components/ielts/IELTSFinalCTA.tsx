import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";
import { ieltsPage } from "@/content/ielts";

// A dedicated component rather than a CTASection extension: this page's primary action is
// external (WhatsApp) and its secondary action is an internal anchor — the reverse of
// CTASection's fixed primary-internal/secondary-WhatsApp shape, so reusing it would mean
// reworking a component every other page also depends on for one page's layout.
export default function IELTSFinalCTA() {
  const { finalCta, hero } = ieltsPage;

  return (
    <section className="bg-surface-tint border-t border-line py-14 sm:py-16 lg:py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center justify-center gap-3 mb-3">
          {finalCta.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-4 leading-tight">
          {finalCta.heading}
        </h2>
        <p className="text-ink-soft text-base sm:text-lg mb-7 sm:mb-8">{finalCta.body}</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center">
          {/* Same WhatsApp message as the hero — one canonical string, not a second copy. */}
          <a
            href={whatsappLink(hero.primaryCta.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            {finalCta.primaryLabel}
          </a>
          <Link
            href={finalCta.secondaryHref}
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {finalCta.secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
