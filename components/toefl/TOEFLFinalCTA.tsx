import { whatsappLink } from "@/lib/whatsapp";
import { toeflPage } from "@/content/toefl";

// TOEFL Step 1: a single strong WhatsApp action only -- the configured-form/email dual-path
// DiagnosticForm.tsx supports for IELTS and PTE needs its own dedicated TOEFL enquiry-handoff step
// (its own field labels, success copy, submission subject and a safe fixed lib/enquiryQuery.ts
// allowlist entry), not a Step-1 addition. Reuses the exact hero WhatsApp message per this step's
// own instruction ("Use the same focused message as the hero").
export default function TOEFLFinalCTA() {
  const { finalCta, hero } = toeflPage;

  return (
    <section
      id={finalCta.id}
      className="bg-surface-tint border-t border-line py-14 sm:py-16 lg:py-20 px-4"
      aria-labelledby="toefl-enquiry-heading"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center justify-center gap-3 mb-3">
          {finalCta.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h2 id="toefl-enquiry-heading" className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-4 leading-tight">
          {finalCta.heading}
        </h2>
        <p className="text-ink-soft text-base sm:text-lg mb-7 sm:mb-8">{finalCta.body}</p>

        <a
          href={whatsappLink(hero.primaryCta.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral mb-6"
        >
          {finalCta.primaryLabel}
        </a>

        <p className="text-ink-soft text-sm max-w-md mx-auto leading-relaxed">{hero.reassurance}</p>
      </div>
    </section>
  );
}
