import Link from "next/link";
import { courses } from "@/content/courses";
import { getCoursePresentation } from "@/content/coursePresentation";
import { HOME_COURSE_ORDER, HOME_COURSE_DELIVERY, DEFAULT_DELIVERY_LINE, corporatePanel } from "@/content/homeCourses";
import { whatsappLink } from "@/lib/whatsapp";

const CARDS = HOME_COURSE_ORDER.map((slug) => {
  const course = courses.find((c) => c.slug === slug)!;
  const presentation = getCoursePresentation(slug);
  return {
    slug,
    category: presentation.typeLabel,
    name: course.name,
    href: `/courses/${course.slug}`,
    description: presentation.shortDescription,
    bestFor: presentation.bestFor,
    feature: presentation.focus,
    ctaLabel: presentation.ctaLabel,
    delivery: HOME_COURSE_DELIVERY[slug] ?? DEFAULT_DELIVERY_LINE,
    whatsappMessage:
      presentation.whatsappMessage ??
      `Hi Aisha! I'm interested in the ${course.name} programme. Could you share the current schedule, format and fee details?`,
  };
});

const IELTS_CARD = CARDS.find((card) => card.slug === "ielts")!;
const OTHER_CARDS = CARDS.filter((card) => card.slug !== "ielts");

function ProgrammeCard({ card }: { card: (typeof CARDS)[number] }) {
  return (
    <article className="flex flex-col rounded-md border border-stone bg-white p-5 transition-colors hover:border-line-strong sm:p-6">
      <span className="mb-2 font-serif text-xs font-medium uppercase tracking-[0.10em] text-teal">
        {card.category}
      </span>
      <h4 className="mb-2 text-xl font-medium tracking-[0.01em] text-ink">{card.name}</h4>
      <p className="mb-4 text-base leading-relaxed text-ink-soft">{card.description}</p>

      <p className="mb-2 text-sm text-ink-soft">
        <span className="font-medium text-ink">Best for:</span> {card.bestFor}
      </p>
      <p className="mb-4 text-sm text-ink-soft">{card.feature}</p>

      <p className="mb-5 border-t border-stone pt-4 text-xs text-muted">{card.delivery}</p>

      <div className="mt-auto flex flex-col gap-3">
        <Link
          href={card.href}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-coral px-4 py-3 text-center font-serif text-xs font-medium uppercase tracking-wide text-white transition-colors hover:bg-amber-dark"
        >
          {card.ctaLabel}
        </Link>
        <a
          href={whatsappLink(card.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-sm border-2 border-ink px-4 py-3 text-center font-serif text-xs font-medium uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-white"
        >
          Ask About This Programme
        </a>
      </div>
    </article>
  );
}

export default function CourseExplorer() {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-16 lg:pb-20 px-4" id="courses">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-3">
          <div className="max-w-2xl">
            <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
              English programmes
              <span className="h-0.5 w-9 bg-coral" aria-hidden />
            </p>
            <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink leading-tight mb-3">
              Choose the programme that fits your goal.
            </h2>
            <p className="text-ink-soft text-base sm:text-lg leading-relaxed">
              Review each programme for its current focus, then confirm the available format,
              schedule, support and fee before enrolling.
            </p>
          </div>
          <Link
            href="/courses"
            className="font-serif text-sm font-medium uppercase tracking-wide border-b-2 border-coral min-h-11 hover:text-amber-dark inline-flex items-center gap-2 self-start shrink-0"
          >
            View All Programme Details
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <p className="text-sm text-ink-faint mb-8 sm:mb-10">
          Not sure?{" "}
          <Link href="/#finder" className="underline underline-offset-2 hover:text-coral">
            Use the programme matcher above
          </Link>
          .
        </p>

        <div className="mb-10 sm:mb-12">
          <h3 className="mb-5 text-xl font-medium text-ink sm:text-2xl">IELTS Programme</h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            <ProgrammeCard card={IELTS_CARD} />
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xl font-medium text-ink sm:text-2xl">Other Programmes</h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {OTHER_CARDS.map((card) => (
              <ProgrammeCard key={card.slug} card={card} />
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 rounded-md border border-stone bg-ivory p-6 sm:p-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
          <div className="flex-1">
            <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint mb-2">
              {corporatePanel.eyebrow}
            </p>
            <h3 className="font-serif text-lg sm:text-xl font-medium text-ink mb-2">{corporatePanel.heading}</h3>
            <p className="text-sm text-ink-soft leading-relaxed">{corporatePanel.body}</p>
          </div>
          <a
            href={whatsappLink(corporatePanel.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full md:w-auto min-h-12 inline-flex items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white font-serif font-medium uppercase tracking-wide text-xs px-5 py-3 transition-colors"
          >
            {corporatePanel.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
