import FAQAccordion from "@/components/FAQAccordion";
import { spokenEnglishFaqs } from "@/content/spokenEnglishFaqs";
import { spokenEnglishPage } from "@/content/spokenEnglish";

// Server component. Reuses the shared native <details>/<summary> FAQAccordion -- its markup and
// styling are appropriate here -- with a Spoken-English-specific `items` prop rather than its
// default generalFaqs. No client-side state, no search box, no categories or nested accordions,
// and no FAQPage JSON-LD (Step 8: current official Google structured-data guidance does not list
// FAQ rich results as a supported feature for a tutoring portfolio -- see the implementation
// prompt's Part F). No "Still have questions?" block either, since SpokenEnglishFinalCTA follows
// directly. Mirrors components/toefl/TOEFLFAQ.tsx and components/pte/PTEFAQ.tsx exactly.
export default function SpokenEnglishFAQ() {
  const { faq } = spokenEnglishPage;

  return (
    <section
      id={faq.id}
      className="py-14 sm:py-16 px-4 bg-ivory"
      aria-labelledby="spoken-english-faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {faq.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="spoken-english-faq-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {faq.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{faq.introduction}</p>
        </div>

        <FAQAccordion items={spokenEnglishFaqs} />
      </div>
    </section>
  );
}
