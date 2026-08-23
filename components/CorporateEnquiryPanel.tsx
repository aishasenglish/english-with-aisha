import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";
import { formsAreConfigured } from "@/lib/forms";
import { corporateEnquiry } from "@/content/courseGuidance";

// Server component. This is an enquiry pathway, not a seventh published course — no Course
// JSON-LD, no invented curriculum, pricing, team-size limits or client claims. Visually
// distinguished from the programme cards with a bordered/tinted panel, but the distinction is
// carried by the visible "enquiry" wording too, not colour alone.
export default function CorporateEnquiryPanel() {
  const showContactLink = formsAreConfigured();

  return (
    <section className="py-14 sm:py-16 px-4 bg-white" aria-labelledby="corporate-enquiry-heading">
      <div className="max-w-5xl mx-auto rounded-md border-2 border-teal/25 bg-sea-wash/40 p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-teal mb-2">
              {corporateEnquiry.eyebrow}
            </p>
            <h2 id="corporate-enquiry-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
              {corporateEnquiry.heading}
            </h2>
            <p className="text-ink-soft leading-relaxed">{corporateEnquiry.body}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-3">
              {corporateEnquiry.goalsLabel}
            </p>
            <ul className="space-y-2 mb-6">
              {corporateEnquiry.goals.map((goal) => (
                <li key={goal} className="flex items-start gap-2 text-sm text-ink-soft">
                  <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {goal}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <a
                href={whatsappLink(corporateEnquiry.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-12 inline-flex items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide text-center px-5 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
              >
                {corporateEnquiry.ctaLabel}
              </a>
              {showContactLink && (
                <Link
                  href={corporateEnquiry.secondaryHref}
                  className="w-full min-h-12 inline-flex items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-medium tracking-wide text-center px-5 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                >
                  {corporateEnquiry.secondaryCtaLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
