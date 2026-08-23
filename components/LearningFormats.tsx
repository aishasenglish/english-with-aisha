import { whatsappLink } from "@/lib/whatsapp";

type Format = {
  title: string;
  description: string;
  bestForCopy: string;
  features: string[];
  ctaLabel: string;
  whatsappMessage: string;
  icon: React.ReactNode;
};

const FORMATS: Format[] = [
  {
    title: "Live Online Small Group",
    description:
      "Join scheduled Zoom classes with a small group, a clear weekly structure and opportunities to learn through guided discussion and practice.",
    bestForCopy:
      "Learners who want structure, accountability and interaction with others working towards similar goals.",
    features: [
      "Scheduled live Zoom classes",
      "Small-group interaction and practice",
      "Recordings available after class",
    ],
    ctaLabel: "Ask About Group Availability",
    whatsappMessage:
      "Hi Aisha! I'm interested in live online small-group English coaching. My course or goal is:",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "One-to-One Coaching",
    description:
      "Work directly with Aisha through sessions shaped around your current level, priorities and preferred pace.",
    bestForCopy:
      "Learners who need focused support, a more flexible schedule or preparation for a specific deadline.",
    features: [
      "Personal learning priorities",
      "More flexible scheduling",
      "Focused practice and direct feedback",
    ],
    ctaLabel: "Ask About Private Coaching",
    whatsappMessage:
      "Hi Aisha! I'm interested in one-to-one English coaching. My course or goal and preferred schedule are:",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

type Inclusion = { title: string; copy: string; icon: React.ReactNode };

const INCLUSIONS: Inclusion[] = [
  {
    title: "Live teaching",
    copy: "Ask questions and practise with a teacher in real time rather than studying through a self-paced video course.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 20l1.3-3.9A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Class recordings",
    copy: "Revisit explanations and catch up when you cannot attend a scheduled lesson.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.867V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2v-2.867a1 1 0 00-.447-.832L15 14" />
      </svg>
    ),
  },
  {
    title: "Guided practice",
    copy: "Apply what you learn through relevant exercises, writing, speaking tasks or examination practice.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Personal feedback",
    copy: "Understand what is improving, what still needs work and what to practise next.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const UNSURE_WHATSAPP_MESSAGE =
  "Hi Aisha! I'm not sure whether a live group or one-to-one coaching would suit me. My English goal and availability are:";

export default function LearningFormats() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 px-4 bg-white" id="formats">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            How you learn
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-4">
            Choose the support level that suits you.
          </h2>
          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            Join a small live online group or work one-to-one with Aisha. Both formats include
            direct teaching, class recordings, guided practice and personal feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-6 sm:mb-8">
          {FORMATS.map((format) => (
            <article
              key={format.title}
              className="flex flex-col rounded-md border border-stone hover:border-line-strong transition-colors p-5 sm:p-7 bg-white"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-sm bg-amber-tint text-amber-dark mb-4">
                {format.icon}
              </div>
              <h3 className="font-serif text-xl font-medium text-ink mb-2">{format.title}</h3>
              <p className="text-base text-ink-soft leading-relaxed mb-4">{format.description}</p>

              <p className="text-sm text-ink-soft mb-4">
                <span className="font-medium text-ink">Best for:</span> {format.bestForCopy}
              </p>

              <ul className="flex flex-col gap-2 mb-6">
                {format.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <svg
                      className="w-4 h-4 text-coral shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(format.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full min-h-12 inline-flex items-center justify-center text-center rounded-sm bg-coral hover:bg-amber-dark text-white font-serif font-medium uppercase tracking-wide text-xs px-4 py-3 transition-colors"
              >
                {format.ctaLabel}
              </a>
            </article>
          ))}
        </div>

        <div className="rounded-md border border-stone bg-ivory p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal mb-2">
            Included with both formats
          </p>
          <h3 className="font-serif text-lg sm:text-xl font-medium text-ink mb-5 sm:mb-6 max-w-xl">
            The support continues beyond the live lesson.
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {INCLUSIONS.map((inclusion) => (
              <div key={inclusion.title} className="flex flex-col gap-2">
                <div className="w-9 h-9 flex items-center justify-center rounded-sm bg-white border border-stone text-teal">
                  {inclusion.icon}
                </div>
                <p className="font-serif text-sm font-medium text-ink">{inclusion.title}</p>
                <p className="text-sm text-ink-soft leading-relaxed">{inclusion.copy}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-ink-faint mt-6 sm:mt-8">
          Not sure which format is right for you?{" "}
          <a
            href={whatsappLink(UNSURE_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-coral"
          >
            Ask Aisha for a recommendation
          </a>
        </p>
      </div>
    </section>
  );
}
