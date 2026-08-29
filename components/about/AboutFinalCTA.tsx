import Link from "next/link";
import { whatsappLink } from "@/lib/whatsapp";
import { emailLink } from "@/lib/contact";
import { formsAreConfigured } from "@/lib/forms";
import { site } from "@/content/site";
import { aboutEnquiry } from "@/content/aboutEnquiry";

// About Step 8: evolves the previous three-visually-equal-button final CTA into a deliberate
// three-level hierarchy -- WhatsApp is the clear primary action, a server-selected form-or-email
// action is secondary, and programme comparison becomes a quiet tertiary text link rather than
// competing with the enquiry actions. formsAreConfigured() is checked once, on the server, so
// exactly one secondary path reaches the client -- no flash of the wrong action after hydration,
// and no silently broken form link when Formspree is unconfigured.
//
// This is an enquiry handoff, not an enrolment, payment, reservation, appointment-booking,
// diagnostic or guaranteed-placement system -- see docs/about-enquiry-handoff.md.
export default function AboutFinalCTA() {
  const formConfigured = formsAreConfigured();

  return (
    <section
      id={aboutEnquiry.id}
      className="bg-surface-tint border-t border-line py-14 sm:py-16 lg:py-20 px-4"
      aria-labelledby="about-final-cta-heading"
    >
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center justify-center gap-3 mb-3">
          {aboutEnquiry.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h2 id="about-final-cta-heading" className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-4 leading-tight">
          {aboutEnquiry.heading}
        </h2>
        <p className="text-ink-soft text-base sm:text-lg mb-7 sm:mb-8">{aboutEnquiry.body}</p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center mb-5 sm:mb-6">
          {/* Primary: WhatsApp -- the clear, visually strongest action. */}
          <a
            href={whatsappLink(aboutEnquiry.primaryWhatsapp.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            {aboutEnquiry.primaryWhatsapp.label}
          </a>

          {/* Secondary: exactly one of these two, decided server-side -- never both, never a
              client-side flash after hydration. A mailto: link is not an HTTP external page, so
              it gets no forced new tab. */}
          {formConfigured ? (
            <Link
              href={aboutEnquiry.configuredForm.href}
              className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {aboutEnquiry.configuredForm.label}
            </Link>
          ) : (
            <a
              href={emailLink(aboutEnquiry.emailFallback.subject, aboutEnquiry.emailFallback.body, site.email)}
              className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {aboutEnquiry.emailFallback.label}
            </a>
          )}
        </div>

        <ul className="text-ink-faint text-sm leading-relaxed space-y-1 mb-7 sm:mb-8 max-w-md mx-auto">
          {aboutEnquiry.reassurance.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        {/* Tertiary: a quiet text link for visitors still comparing -- never a button competing
            with the enquiry actions above. */}
        <Link
          href={aboutEnquiry.tertiary.href}
          className="inline-flex min-h-11 items-center font-serif text-sm font-medium text-ink hover:text-teal underline underline-offset-2"
        >
          {aboutEnquiry.tertiary.label}
        </Link>
      </div>
    </section>
  );
}
