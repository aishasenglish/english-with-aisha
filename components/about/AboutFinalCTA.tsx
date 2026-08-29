import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";
import { formsAreConfigured } from "@/lib/forms";
import { aboutContent } from "@/content/about";

// A tailored trust-stage next step rather than the generic shared CTASection -- primary route to
// /courses, low-pressure WhatsApp secondary, and an optional tertiary text link to the existing
// general (unlocked) enquiry form, shown only when Formspree is genuinely configured so the link
// never leads to a silently broken form. Never calls the enquiry a diagnostic test in visible
// copy, and never promises booking/reservation ("Book now", "Reserve your seat") without a real
// workflow.
export default function AboutFinalCTA() {
  const { finalCta } = aboutContent;
  const formConfigured = formsAreConfigured();

  return (
    <section
      id={finalCta.id}
      className="bg-surface-tint border-t border-line py-14 sm:py-16 lg:py-20 px-4"
      aria-labelledby="about-final-cta-heading"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center justify-center gap-3 mb-3">
          {finalCta.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h2 id="about-final-cta-heading" className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-4 leading-tight">
          {finalCta.heading}
        </h2>
        <p className="text-ink-soft text-base sm:text-lg mb-7 sm:mb-8">{finalCta.body}</p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center mb-6">
          <Link
            href={finalCta.primaryCta.href}
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            {finalCta.primaryCta.label}
          </Link>
          <a
            href={whatsappLink(finalCta.secondaryCta.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {finalCta.secondaryCta.label}
          </a>
        </div>

        {formConfigured && (
          <Link
            href={finalCta.tertiaryLink.href}
            className="inline-flex min-h-11 items-center font-serif text-sm font-medium text-ink hover:text-teal underline underline-offset-2"
          >
            {finalCta.tertiaryLink.label}
          </Link>
        )}
      </div>
    </section>
  );
}
