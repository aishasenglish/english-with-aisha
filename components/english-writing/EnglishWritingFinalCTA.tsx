import { whatsappLink } from "@/lib/whatsapp";
import { emailLink } from "@/lib/contact";
import { englishWritingContent } from "@/content/englishWriting";

// Server component. A single strong WhatsApp action plus a plain email fallback -- a dedicated
// English Writing form variant (mirroring Spoken English Step 9) is a later step, not a Step 1
// addition. "Review the enquiry" never means free document review, editing or written assessment
// -- the helper note makes that explicit.
export default function EnglishWritingFinalCTA() {
  const { finalCta, contact } = englishWritingContent;

  return (
    <section
      id={finalCta.id}
      className="bg-surface-tint border-t border-line py-14 sm:py-16 lg:py-20 px-4"
      aria-labelledby="english-writing-enquiry-heading"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center justify-center gap-3 mb-3">
          {finalCta.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h2 id="english-writing-enquiry-heading" className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-4 leading-tight">
          {finalCta.heading}
        </h2>
        <p className="text-ink-soft text-base sm:text-lg mb-3">{finalCta.body}</p>
        <p className="text-ink-faint text-sm mb-7 sm:mb-8">{finalCta.helperNote}</p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center">
          <a
            href={whatsappLink(finalCta.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {finalCta.primaryLabel}
          </a>

          <a
            href={emailLink(finalCta.emailSubject, finalCta.emailBody, contact.email)}
            aria-label={finalCta.emailAccessibleLabel}
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {finalCta.emailCtaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
