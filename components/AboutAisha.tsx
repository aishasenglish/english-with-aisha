import Image from "next/image";
import Button from "./Button";
import FadeUp from "./FadeUp";
import { whatsappLink } from "@/lib/whatsapp";
import { site } from "@/content/site";

// Titles reuse the canonical wording from content/site.ts — named fields for the two owner-
// confirmed facts, and the fixed tail of site.credentialsList for the other two credentials
// (site.credentialsList is always [qualification, professionalRole, "IDP-Certified IELTS
// Trainer", "Corporate Trainer"], so indices 2 and 3 are stable) — rather than a positional
// index into every slot, which silently breaks if the array's shape ever changes again.
const CREDENTIALS = [
  {
    title: site.qualification,
    copy: "Advanced study of language, literature, analysis and written expression.",
  },
  {
    title: site.professionalRole,
    copy: "Classroom teaching experience grounded in clear explanation, structured practice and academic standards.",
  },
  {
    title: site.credentialsList[2], // "IDP-Certified IELTS Trainer"
    copy: "Focused preparation informed by IELTS task requirements and assessment criteria.",
  },
  {
    title: site.credentialsList[3], // "Corporate Trainer"
    copy: "Practical English support for interviews, presentations, professional writing and workplace communication.",
  },
];

const VALUE_POINTS = [
  {
    title: "Clear explanations",
    copy: "Understand grammar, structure and technique in practical language you can apply.",
  },
  {
    title: "Relevant preparation",
    copy: "Focus on the syllabus, test requirement or communication goal that actually matters to you.",
  },
  {
    title: "Actionable feedback",
    copy: "Know what is working, what needs attention and what to practise next.",
  },
];

const ASK_AISHA_MESSAGE =
  "Hi Aisha! I'd like to ask about your teaching and which English programme may suit my goal. My question is:";

export default function AboutAisha() {
  return (
    <section id="about-aisha" className="py-14 sm:py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            Meet your teacher
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-8 sm:mb-10 max-w-2xl">
            English expertise, taught with clarity and care.
          </h2>
        </FadeUp>

        <div className="md:grid md:grid-cols-[38%_1fr] md:gap-10 lg:gap-12 md:items-start mb-10 sm:mb-12">
          <FadeUp className="mb-6 md:mb-0">
            <div className="relative w-full max-w-xs md:max-w-none mx-auto aspect-[3/4] rounded-md overflow-hidden">
              <Image
                src="/images/aisha-headshot.jpg"
                alt="Aisha, English Literature specialist and online English teacher"
                fill
                sizes="(max-width: 767px) 320px, (max-width: 1023px) 38vw, 32vw"
                className="object-cover"
              />
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-charcoal leading-relaxed">
                I&apos;m Aisha, a {site.professionalRole.toLowerCase()} with an {site.qualification}{" "}
                and an IDP-certified IELTS trainer, based in Lahore. I teach school students,
                examination candidates and professionals through live online coaching that turns
                complex language rules into clear, practical skills.
              </p>
              <p className="text-base text-ink-soft leading-relaxed">
                My approach combines subject knowledge with structured practice and specific
                feedback. Whether you are preparing for an English examination, strengthening
                school English or building professional confidence, you should understand not
                only what to improve, but how to improve it.
              </p>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={150}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10 sm:mb-12">
            {CREDENTIALS.map((credential) => (
              <li key={credential.title} className="flex gap-3 p-4 border border-stone rounded-md">
                <div className="w-9 h-9 flex items-center justify-center rounded-sm bg-amber-tint text-amber-dark shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0121 15c0 1.79-.402 3.484-1.121 5.001M12 14l-6.16-3.422A12.083 12.083 0 003 15c0 1.79.402 3.484 1.121 5.001M12 14v7" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-sm font-medium text-ink mb-1">{credential.title}</p>
                  <p className="text-sm text-ink-soft leading-relaxed">{credential.copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={200}>
          <div className="mb-10 sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal mb-4">
              What this means for your learning
            </p>
            <ul className="space-y-4">
              {VALUE_POINTS.map((point) => (
                <li key={point.title} className="flex flex-col sm:flex-row sm:gap-3">
                  <span className="font-serif text-sm font-medium text-ink sm:w-48 shrink-0">
                    {point.title}
                  </span>
                  <span className="text-sm text-ink-soft leading-relaxed">{point.copy}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>

        <FadeUp delay={250}>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/about" variant="coral" className="w-full sm:w-auto">
              More About Aisha
            </Button>
            <Button href={whatsappLink(ASK_AISHA_MESSAGE)} external variant="outline" className="w-full sm:w-auto">
              Ask Aisha a Question
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
