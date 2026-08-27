import { whatsappLink } from "@/lib/whatsapp";
import { spokenEnglishPage } from "@/content/spokenEnglish";

// Server component. Step 1 deliberately renders only the fail-closed enquiry state -- it does not
// query content/batches.ts or render a scheduled-intake card branch at all, since building that
// verified-intake logic (mirroring IELTS/PTE/TOEFL's dedicated availability steps) is explicitly a
// later step. Every current Spoken English-tagged batch record is historical, closed and
// unpublished, so an enquiry-only state is also the truthful current state. Never shows a
// historical date, an inferred cadence, or a group/one-to-one availability claim.
export default function SpokenEnglishAvailability() {
  const { availability } = spokenEnglishPage;

  return (
    <section
      id={availability.id}
      className="py-14 sm:py-16 px-4 bg-white"
      aria-labelledby="spoken-english-availability-heading"
    >
      <div className="max-w-2xl mx-auto">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
          {availability.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h2 id="spoken-english-availability-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
          {availability.heading}
        </h2>
        <p className="text-ink-soft leading-relaxed mb-4">{availability.body}</p>
        <p className="text-sm text-ink-faint mb-6">{availability.note}</p>

        <a
          href={whatsappLink(availability.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full sm:w-auto min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide px-6 py-3.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
        >
          {availability.ctaLabel}
        </a>
      </div>
    </section>
  );
}
