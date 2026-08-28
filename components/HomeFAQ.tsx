import Link from "next/link";
import FAQAccordion from "./FAQAccordion";
import { homepageFaqs } from "@/content/faqs";

// Server component — the accordion beneath it is native <details>/<summary>, so this entire
// section needs no client-side JavaScript. Spoken English Step 10: the FAQPage JSON-LD previously
// emitted here was removed — Google announced the FAQ rich-result feature would stop appearing
// from 7 May 2026 and removed the corresponding documentation in June 2026, so the schema had no
// remaining Google Search consumer. No FAQ content was removed; only the now-obsolete structured
// data. See docs/spoken-english-offer-verification.md's Step 10 section for the full record.
export default function HomeFAQ() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 px-4 bg-ivory" aria-labelledby="home-faq-heading">
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
