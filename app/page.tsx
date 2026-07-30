import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import CourseExplorer from "@/components/CourseExplorer";
import Formats from "@/components/Formats";
import StatsBand from "@/components/StatsBand";
import SectionHeading from "@/components/SectionHeading";
import HowItWorks from "@/components/HowItWorks";
import GoalGrid from "@/components/GoalGrid";
import StoryFeature from "@/components/StoryFeature";
import BatchTable from "@/components/BatchTable";
import LeadMagnet from "@/components/LeadMagnet";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";
import Button from "@/components/Button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.brandName} — ${site.tagline}`,
  description:
    "Expert online English coaching for IELTS, PTE, TOEFL, Writing & Spoken English. Guided by Aisha — MA English Literature, College Lecturer. Live on Zoom, classes recorded.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CourseExplorer />
      <Formats />
      <StatsBand />

      {/* About Aisha */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <FadeUp className="order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="bg-white border border-stone overflow-hidden">
                <Image
                  src="/images/aisha-home.jpg"
                  alt="Aisha — English coach and MA English Literature"
                  width={480}
                  height={560}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-5 -right-5 bg-coral text-white rounded-sm px-5 py-3">
                <p className="font-serif font-medium text-sm">MA English Literature</p>
                <p className="text-white/70 text-xs">Government College Lecturer</p>
              </div>
            </div>
          </FadeUp>

          <div className="order-1 lg:order-2 space-y-8">
            <FadeUp>
              <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
                About Aisha
                <span className="h-0.5 w-9 bg-coral" aria-hidden />
              </p>
              <SectionHeading
                title="Learn from someone who has spent her life inside the English language"
                subtitle="Aisha holds a Master's in English Literature and teaches at a government college. She doesn't just know English — she understands how it works and how to teach it. Her coaching turns rules into habits and nerves into fluency, with a method built for real exam scores and real-world confidence."
              />
            </FadeUp>

            <div className="space-y-4">
              {[
                {
                  title: "A scholar's command of English",
                  desc: "Grammar, vocabulary, and style explained with the depth of a literature specialist, in plain language you can actually use.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                },
                {
                  title: "Built for results",
                  desc: "Exam-focused strategies, weekly tests, and full mock exams so you walk into your test prepared, not hopeful.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                },
                {
                  title: "You're never on your own",
                  desc: "Live classes, recordings to rewatch anytime, and personal feedback on your writing and speaking.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
              ].map((card, i) => (
                <FadeUp key={card.title} delay={i * 100}>
                  <div className="flex gap-4 bg-card rounded-md p-4 border border-stone shadow-sm">
                    <div className="p-2.5 bg-amber-tint text-amber-dark rounded-md shrink-0 h-fit">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-medium text-ink mb-1">{card.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={300}>
              <Button href="/about" variant="teal">
                More about Aisha
              </Button>
            </FadeUp>
          </div>
        </div>
      </section>

      <GoalGrid />
      <StoryFeature />

      {/* Method */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center justify-center gap-3 mb-3">
                The method
                <span className="h-0.5 w-9 bg-coral" aria-hidden />
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink">
                Four steps to fluency and confidence
              </h2>
            </div>
          </FadeUp>
          <HowItWorks />
        </div>
      </section>

      {/* Batch table */}
      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
                  Dates
                  <span className="h-0.5 w-9 bg-coral" aria-hidden />
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink">
                  Upcoming batches
                </h2>
              </div>
            </div>
            <BatchTable />
          </FadeUp>
        </div>
      </section>

      <LeadMagnet />
      <CTASection />
    </>
  );
}
