import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Aisha",
  description:
    `Meet Aisha — ${site.qualification}, ${site.professionalRole}, and your online English coach. Based in Lahore, Pakistan.`,
};

// Reuse the canonical qualification and role wording from content/site.ts instead of a second
// hard-coded copy.
const credentials = [
  site.qualification,
  site.professionalRole,
  "Exam-focused coaching for IELTS, PTE & TOEFL",
  "Personal feedback on writing & speaking",
  "Recorded classes for later review",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white text-ink pt-28 pb-16 lg:pt-36 lg:pb-20 px-4 border-b border-line">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            Meet Aisha — your English coach.
          </h1>
          <p className="text-ink-soft text-lg">{site.credentials} · {site.city}</p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-3xl mx-auto">

          {/* Text */}
          <FadeUp delay={100}>
            <div className="space-y-8">
              <div>
                <p className="text-lg text-charcoal leading-relaxed">
                  I&apos;m Aisha, a {site.professionalRole} in Lahore with an {site.qualification}.
                  For years I&apos;ve taught English to students from every kind of background —
                  and I&apos;ve seen the same thing again and again: bright, capable people held
                  back not by ability, but by the way English was taught to them.
                </p>
              </div>

              <div>
                <SectionHeading title="My approach" />
                <p className="text-charcoal leading-relaxed mt-4">
                  I teach English the way it actually works — patterns over rote rules,
                  confidence over fear, and steady practice over last-minute cramming. Whether
                  you&apos;re preparing for an exam or finally want to speak without hesitation,
                  my job is to make the language feel like yours.
                </p>
              </div>

              <div>
                <SectionHeading title="Why online" />
                <p className="text-charcoal leading-relaxed mt-4">
                  Online coaching means you learn from home, on Zoom, with every class recorded
                  so you can revisit anything, anytime. It also means I can keep batches focused
                  and give you the personal feedback that genuinely moves your score.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-medium text-ink mb-4">What I bring</h3>
                <ul className="space-y-3">
                  {credentials.map((c, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-charcoal">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection />
    </>
  );
}
