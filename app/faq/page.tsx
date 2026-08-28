import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about English coaching with Aisha — programmes, fees, schedules, and how enquiries work.",
};

// Spoken English Step 10: the FAQPage JSON-LD previously emitted here was removed — Google
// announced the FAQ rich-result feature would stop appearing from 7 May 2026 and removed the
// corresponding documentation in June 2026, so the schema had no remaining Google Search consumer.
// No FAQ content was removed; only the now-obsolete structured data. See
// docs/spoken-english-offer-verification.md's Step 10 section for the full record.
export default function FAQPage() {
  return (
    <>
      <section className="bg-white text-ink pt-28 pb-16 lg:pt-36 lg:pb-20 px-4 border-b border-line">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            Frequently asked questions.
          </h1>
          <p className="text-ink-soft text-lg">
            Everything you need to know before getting started.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <FAQAccordion />
          </FadeUp>
        </div>
      </section>

      <CTASection />
    </>
  );
}
