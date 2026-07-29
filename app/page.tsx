import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import HowItWorks from "@/components/HowItWorks";
import TestimonialGrid from "@/components/TestimonialGrid";
import LeadMagnet from "@/components/LeadMagnet";
import SocialBar from "@/components/SocialBar";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";
import Button from "@/components/Button";
import Link from "next/link";
import { courses } from "@/content/courses";
import { nextBatch, courseLabel } from "@/content/batches";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.brandName} — ${site.tagline}`,
  description:
    "Expert online English coaching for IELTS, PTE, TOEFL, Writing & Spoken English. Guided by Aisha — MA English Literature, College Lecturer. Live on Zoom, classes recorded.",
};

export default function HomePage() {
  const batch = nextBatch();

  return (
    <>
      <Hero />
      <TrustStrip />

      {/* Why learn with Aisha — split layout with Home 1 photo */}
      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* Photo — Home 1 (contemplative pose, white bg) */}
          <FadeUp className="order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <Image
                  src="/images/aisha-home.jpg"
                  alt="Aisha — English coach and MA English Literature"
                  width={480}
                  height={560}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
              {/* Accent badge */}
              <div className="hidden sm:block absolute -bottom-5 -right-5 bg-teal text-white rounded-2xl px-5 py-3 shadow-lg">
                <p className="font-bold text-sm">MA English Literature</p>
                <p className="text-white/70 text-xs">Government College Lecturer</p>
              </div>
            </div>
          </FadeUp>

          {/* Text + 3 feature cards */}
          <div className="order-1 lg:order-2 space-y-8">
            <FadeUp>
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
                  <div className="flex gap-4 bg-card rounded-2xl p-4 border border-stone shadow-sm">
                    <div className="p-2.5 bg-teal/10 text-teal rounded-xl shrink-0 h-fit">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-bold text-ink mb-1">{card.title}</h3>
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

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <SectionHeading eyebrow="Courses" title="Six ways I can help you" />
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {courses.map((course, i) => (
              <FadeUp key={course.slug} delay={i * 60}>
                <ServiceCard course={course} />
              </FadeUp>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/courses" variant="teal">
              View all courses
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works — with a photo accent */}
      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="text-center mb-12">
              <SectionHeading eyebrow="The process" title="How it works" centered />
            </div>
          </FadeUp>
          <HowItWorks />

          {/* Photo strip below the steps */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/aisha-teal.jpg",        alt: "Aisha coaching session" },
              { src: "/images/aisha-thoughtful.jpg",  alt: "Aisha preparing a lesson" },
              { src: "/images/aisha-warm.jpg",        alt: "Aisha in a teaching setting" },
              { src: "/images/aisha-professional.jpg",alt: "Aisha — English coach" },
            ].map((img) => (
              <FadeUp key={img.src}>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 45vw, 25vw"
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Next batch teaser */}
      {batch && (
        <section className="py-12 px-4 bg-teal text-white">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white/70 text-sm uppercase tracking-wider mb-1">Upcoming batch</p>
              <p className="font-serif text-2xl font-bold">
                {courseLabel(batch.courseSlug)} ·{" "}
                {new Date(batch.startDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="text-white/70 text-sm mt-1">
                A new batch begins every 15 days — seats are limited.
              </p>
            </div>
            <Button href="/batches" variant="coral" size="lg">
              See upcoming batches
            </Button>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
              <SectionHeading title="Students who took the leap." />
              <Link
                href="/success-stories"
                className="text-teal font-semibold hover:text-ink transition-colors text-sm shrink-0"
              >
                Read all success stories →
              </Link>
            </div>
          </FadeUp>
          <TestimonialGrid />
        </div>
      </section>

      {/* Lead Magnet */}
      <LeadMagnet />

      {/* Social Bar */}
      <section className="py-16 px-4 bg-ivory">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <SectionHeading title="Follow along for daily English tips." centered />
          </FadeUp>
          <div className="mt-8">
            <SocialBar />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
