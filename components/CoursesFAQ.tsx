import Link from "next/link";
import FAQAccordion from "./FAQAccordion";
import { courseHubFaqs } from "@/content/faqs";

// Server component — the accordion beneath it is native <details>/<summary>, so this entire
// section needs no client-side JavaScript. Reuses five entries from the one canonical FAQ source
// (content/faqs.ts) by stable ID; the full /faq page has already been audited so this section's
// closing link is safe to show. Spoken English Step 10: the FAQPage JSON-LD previously emitted
// here was removed — Google announced the FAQ rich-result feature would stop appearing from 7 May
// 2026 and removed the corresponding documentation in June 2026, so the schema had no remaining
// Google Search consumer. No FAQ content was removed; only the now-obsolete structured data.
export default function CoursesFAQ() {
  return (
    <section className="py-14 sm:py-16 px-4 bg-ivory" aria-labelledby="courses-faq-heading">
      <div className="max-w-2xl mx-auto">
        <div className="mb-7 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            Before you choose
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="courses-faq-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            Questions about choosing a programme
          </h2>
          <p className="text-ink-soft leading-relaxed">
            Formats, schedules and fees can vary by programme and intake. These answers explain
            how to identify the most relevant starting point.
          </p>
        </div>

        <FAQAccordion items={courseHubFaqs} />

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
