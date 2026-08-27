import { whatsappLink } from "@/lib/whatsapp";
import { emailLink } from "@/lib/contact";
import { site } from "@/content/site";
import { spokenEnglishPage } from "@/content/spokenEnglish";

// Server component. Reuses the hero's exact WhatsApp message (this step's own guidance: "Use the
// same canonical contextual WhatsApp message as the hero") rather than a second near-duplicate
// template. The secondary action is a plain mailto: link, not the generic detailed-enquiry form --
// that form would ask the visitor to pick a programme again, losing the Spoken English context
// they've already established by reaching this page. A dedicated Spoken English form variant
// (mirroring IELTS/PTE/TOEFL Step 9) is a later step, not a Step 1 addition.
export default function SpokenEnglishFinalCTA() {
  const { finalCta, hero } = spokenEnglishPage;

  return (
    <section
      id={finalCta.id}
      className="bg-surface-tint border-t border-line py-14 sm:py-16 lg:py-20 px-4"
      aria-labelledby="spoken-english-enquiry-heading"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center justify-center gap-3 mb-3">
          {finalCta.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h2 id="spoken-english-enquiry-heading" className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-4 leading-tight">
          {finalCta.heading}
        </h2>
        <p className="text-ink-soft text-base sm:text-lg mb-7 sm:mb-8">{finalCta.body}</p>

        <div className="text-left bg-white border border-stone rounded-md p-5 sm:p-6 mb-7 sm:mb-8">
          <p className="font-serif text-base font-medium text-ink mb-3">{finalCta.detailsHeading}</p>
          <ul className="space-y-2">
            {finalCta.details.map((field) => (
              <li key={field.id} className="flex items-start gap-2.5 text-sm text-ink-soft">
                <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {field.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center mb-6">
          <a
            href={whatsappLink(hero.primaryCta.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            {finalCta.primaryLabel}
          </a>

          <a
            href={emailLink(finalCta.emailSubject, finalCta.emailBody, site.email)}
            aria-label={finalCta.emailAccessibleLabel}
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {finalCta.emailCtaLabel}
          </a>
        </div>

        <p className="text-ink-soft text-sm max-w-md mx-auto leading-relaxed">{finalCta.supportingNote}</p>
      </div>
    </section>
  );
}
