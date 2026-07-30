import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import FadeUp from "@/components/FadeUp";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About Aisha",
  description:
    "Meet Aisha — MA English Literature, college lecturer, and your online English coach. Based in Lahore, Pakistan.",
};

const credentials = [
  "MA English Literature",
  "Government college lecturer",
  "Exam-focused coaching for IELTS, PTE & TOEFL",
  "Personal feedback on writing & speaking",
  "Recorded classes + regular mock exams",
];

const galleryPhotos = [
  { src: "/images/aisha-cafe.jpg",      alt: "Aisha at a meeting" },
  { src: "/images/aisha-pensive.jpg",   alt: "Aisha in thought" },
  { src: "/images/aisha-studio.jpg",    alt: "Aisha in studio" },
  { src: "/images/aisha-headshot.jpg",  alt: "Aisha — professional photo" },
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
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* About photo — warm seated portrait */}
          <FadeUp>
            <div className="relative">
              <div className="rounded-md overflow-hidden shadow-xl bg-surface-tint">
                <Image
                  src="/images/aisha-about.jpg"
                  alt="Aisha — MA English Literature, English Coach"
                  width={520}
                  height={680}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-gold rounded-md px-5 py-3 shadow-lg">
                <p className="text-white font-medium text-sm">{site.city}</p>
                <p className="text-white/80 text-xs">{site.timezone}</p>
              </div>
            </div>
          </FadeUp>

          {/* Text */}
          <FadeUp delay={100}>
            <div className="space-y-8">
              <div>
                <p className="text-lg text-charcoal leading-relaxed">
                  I&apos;m Aisha, a Master&apos;s in English Literature and a lecturer at a
                  government college in Lahore. For years I&apos;ve taught English to students
                  from every kind of background — and I&apos;ve seen the same thing again and
                  again: bright, capable people held back not by ability, but by the way
                  English was taught to them.
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

      {/* Photo gallery */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <SectionHeading eyebrow="Behind the coaching" title="A few more moments with Aisha" centered />
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {galleryPhotos.map((p, i) => (
              <FadeUp key={p.src} delay={i * 80}>
                <div className="aspect-[3/4] rounded-md overflow-hidden shadow-md bg-stone">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={280}
                    height={370}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 45vw, 24vw"
                  />
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
