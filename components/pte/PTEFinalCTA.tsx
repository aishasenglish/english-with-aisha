import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";
import { emailLink } from "@/lib/contact";
import { formsAreConfigured } from "@/lib/forms";
import { site } from "@/content/site";
import { ptePage } from "@/content/pte";
import { pteEnquiryFields, pteFinalEnquiry } from "@/content/pteEnquiry";

// A dedicated component rather than a CTASection extension: this page's primary action is
// external (WhatsApp) and its secondary action is either an internal form link or an external
// mailto: link chosen on the server — the reverse of CTASection's fixed primary-internal/
// secondary-WhatsApp shape, so reusing it would mean reworking a component every other page also
// depends on for one page's layout.
//
// PTE Step 9: the secondary action is decided here, on the server, from formsAreConfigured() —
// never client-side — so there's no flash of the wrong action and no client bundle needed for
// this decision. Availability is deliberately not linked again: it immediately precedes the FAQ
// and this section, so a second link back to it would be a conversion loop backwards through
// content the candidate has already read. No data-analytics-* attributes here -- PTE conversion
// measurement is deliberately deferred to its own later step (Part I of the implementing prompt);
// the existing analytics event contract and sanitizer are IELTS-specific and must not be extended
// here just to mirror IELTSFinalCTA's attributes.
export default function PTEFinalCTA() {
  const { finalCta } = ptePage;
  const formConfigured = formsAreConfigured();

  return (
    <section
      id={finalCta.id}
      className="bg-surface-tint border-t border-line py-14 sm:py-16 lg:py-20 px-4"
      aria-labelledby="pte-enquiry-heading"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center justify-center gap-3 mb-3">
          {finalCta.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h2 id="pte-enquiry-heading" className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-4 leading-tight">
          {finalCta.heading}
        </h2>
        <p className="text-ink-soft text-base sm:text-lg mb-7 sm:mb-8">{finalCta.body}</p>

        {/* Left-aligned even though the section is otherwise centred -- a checklist reads more
            naturally top-to-bottom-left than centred. */}
        <div className="text-left bg-white border border-stone rounded-md p-5 sm:p-6 mb-7 sm:mb-8">
          <p className="font-serif text-base font-medium text-ink mb-3">{finalCta.detailsHeading}</p>
          <ul className="space-y-2">
            {pteEnquiryFields.map((field) => (
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
            href={whatsappLink(pteFinalEnquiry.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            {finalCta.primaryLabel}
          </a>

          {formConfigured ? (
            <Link
              href="/free-diagnostic-test?programme=pte&source=pte-page"
              className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {finalCta.formCtaLabel}
            </Link>
          ) : (
            <a
              href={emailLink(pteFinalEnquiry.emailSubject, pteFinalEnquiry.emailBody, site.email)}
              aria-label={finalCta.emailAccessibleLabel}
              className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {finalCta.emailCtaLabel}
            </a>
          )}
        </div>

        <p className="text-ink-soft text-sm max-w-md mx-auto leading-relaxed">{finalCta.responseExpectation}</p>
      </div>
    </section>
  );
}
