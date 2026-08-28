import { whatsappLink } from "@/lib/whatsapp";
import { emailLink } from "@/lib/contact";
import { englishWritingContent } from "@/content/englishWriting";

// Server component. Step 1 deliberately renders only the fail-closed enquiry state -- it does not
// query content/batches.ts or render a scheduled-intake card branch at all, since no owner-
// verified, future, published English Writing intake exists and building the verified-intake
// logic (mirroring Spoken English Step 7) is explicitly a later step. Never shows continuous
// enrolment, immediate availability, a waiting list, limited places, a response-time promise, or a
// private/group format claim.
export default function EnglishWritingAvailability() {
  const { availability, contact } = englishWritingContent;

  return (
    <section
      id={availability.id}
      className="py-14 sm:py-16 px-4 bg-white"
      aria-labelledby="english-writing-availability-heading"
    >
      <div className="max-w-2xl mx-auto">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
          {availability.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h2 id="english-writing-availability-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
          {availability.heading}
        </h2>
        <p className="text-ink-soft leading-relaxed mb-6">{availability.body}</p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappLink(availability.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
          >
            {availability.ctaLabel}
          </a>
          <a
            href={emailLink(
              "English writing availability enquiry",
              "Hello Aisha,\n\nI would like to ask about current English Writing availability.\n\nWhat I need to write:\nWhat I find difficult:\nMy preferred timing:\n\nPlease let me know what option, if any, is currently available.",
              contact.email
            )}
            aria-label="Email Aisha about English Writing availability"
            className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Email Aisha
          </a>
        </div>
      </div>
    </section>
  );
}
