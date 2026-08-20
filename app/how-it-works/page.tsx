import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "A simple, structured path from where you are now to ready and confident. Live Zoom classes, recorded, with personal feedback and mock exams.",
};

const details = [
  {
    title: "Live classes on Zoom",
    desc: "Attend interactive live sessions where you can ask questions in real time. Every class runs on Zoom — just join from your device, wherever you are.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.867V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-2.867a1 1 0 00-.447-.832L15 14" />
      </svg>
    ),
  },
  {
    title: "Every class recorded",
    desc: "Miss a class or want to revise? Watch the recording whenever you like. Every session is saved and shared with the batch.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.867V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-2.867a1 1 0 00-.447-.832L15 14M15 10l-3 2-3-2" />
      </svg>
    ),
  },
  {
    title: "Regular tests & full mock exams",
    desc: "Track your progress and remove exam-day surprises. Weekly tests keep you sharp; full-length mock exams get you fully comfortable with the real format.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Personal feedback",
    desc: "I review your writing and speaking and tell you exactly what to fix. No vague comments — specific, actionable guidance that actually moves your score.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    title: "Consultations & 1-on-1 practice",
    desc: "Need focused help? Book a consultation or individual practice session with Aisha for targeted coaching on a specific skill or problem area.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "New batch every 15 days",
    desc: "Never wait long to start. There's always a fresh batch around the corner. Seats are limited to keep each batch focused and personal.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-white text-ink pt-28 pb-16 lg:pt-36 lg:pb-20 px-4 border-b border-line">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            How the coaching works.
          </h1>
          <p className="text-ink-soft text-lg">
            A simple, structured path from &ldquo;where you are now&rdquo; to &ldquo;ready and confident.&rdquo;
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <SectionHeading eyebrow="The process" title="Four steps to fluency and confidence" centered />
          </FadeUp>
          <p className="sm:hidden text-xs text-ink-faint mt-8 mb-3">Swipe through the four steps</p>
          <div className="mt-0 sm:mt-12">
            <HowItWorks />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <SectionHeading title="Everything that comes with each course" />
          </FadeUp>
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {details.map((d, i) => (
              <FadeUp key={d.title} delay={i * 80}>
                <div className="flex gap-4 p-5 rounded-md border border-stone bg-white">
                  <div className="p-2.5 bg-teal/10 text-teal rounded-md shrink-0 h-fit">
                    {d.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-medium text-ink mb-1">{d.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
