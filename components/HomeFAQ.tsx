import Link from "next/link";
import FAQAccordion from "./FAQAccordion";
import { homepageFaqs } from "@/content/faqs";

// Server component — the accordion beneath it is native <details>/<summary>, so this
// entire section (including the FAQPage JSON-LD) needs no client-side JavaScript.
export default function HomeFAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="py-14 sm:py-16 lg:py-20 px-4 bg-ivory" aria-labelledby="home-faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-2xl mx-auto">
        <div className="mb-7 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            Before you begin
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="home-faq-heading" className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-3">
            Questions students and parents often ask
          </h2>
          <p className="text-ink-soft leading-relaxed">
            These answers explain the general process. Programme-specific schedules, fees and
            requirements are confirmed before enrolment.
          </p>
        </div>

        <FAQAccordion items={homepageFaqs} />

        <p className="mt-6 text-center">
          <Link
            href="/faq"
            className="text-sm font-medium text-teal hover:text-ink underline underline-offset-4"
          >
            View all frequently asked questions
          </Link>
        </p>
      </div>
    </section>
  );
}
