import FAQAccordion from "@/components/FAQAccordion";
import { englishWritingFaqs } from "@/content/englishWritingFaqs";
import { englishWritingContent } from "@/content/englishWriting";

// Server component. Reuses the shared native <details>/<summary> FAQAccordion -- its markup and
// styling are appropriate here -- with an English-Writing-specific `items` prop rather than its
// default generalFaqs. No client-side state, no search box, no categories or nested accordions,
// and no FAQPage JSON-LD (Step 8: final technical SEO belongs to Step 10 -- see the implementation
// prompt's Part F). No "Still have questions?" block either, since EnglishWritingFinalCTA follows
// directly. Mirrors components/spoken-english/SpokenEnglishFAQ.tsx, components/toefl/TOEFLFAQ.tsx
// and components/pte/PTEFAQ.tsx exactly.
export default function EnglishWritingFAQ() {
  const { faq } = englishWritingContent;

  return (
    <section
      id={faq.id}
      // Step 11: phone padding tightened from py-14 to py-10 -- a supplementary detail section,
      // not a primary decision point, in a long mobile scroll journey. Tablet/desktop unchanged.
      className="py-10 sm:py-16 px-4 bg-ivory"
      aria-labelledby="english-writing-faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {faq.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="english-writing-faq-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {faq.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{faq.introduction}</p>
        </div>

        <FAQAccordion items={englishWritingFaqs} />
      </div>
    </section>
  );
}
