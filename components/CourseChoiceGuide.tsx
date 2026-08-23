import Link from "next/link";
import { courses } from "@/content/courses";
import { whatsappLink } from "@/lib/whatsapp";
import { courseChoiceSituations, type CourseChoiceSituation } from "@/content/courseGuidance";

function resolveHref(situation: CourseChoiceSituation): string {
  if (situation.kind === "course") {
    const course = courses.find((c) => c.slug === situation.courseSlug);
    if (!course) {
      throw new Error(
        `components/CourseChoiceGuide.tsx: situation "${situation.id}" references unknown course slug "${situation.courseSlug}".`
      );
    }
    return `/courses/${course.slug}`;
  }
  if (situation.kind === "anchor") return situation.anchor;
  return whatsappLink(situation.whatsappMessage);
}

const arrowIcon = (
  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const whatsappIcon = (
  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
  </svg>
);

// Server component, no JavaScript required — a plain numbered list of real-world situations,
// each with one contextual link (internal route, in-page anchor, or a WhatsApp deep link).
export default function CourseChoiceGuide() {
  return (
    <section className="py-14 sm:py-16 px-4 bg-ivory" aria-labelledby="choice-guide-heading">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            Still comparing?
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="choice-guide-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            Start with the requirement, not the course name.
          </h2>
          <p className="text-ink-soft leading-relaxed">
            The right route depends on the learner&apos;s examination, receiving organisation or
            communication goal. Use these starting points before choosing.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 [&>li:last-child]:sm:col-span-2">
          {courseChoiceSituations.map((situation, i) => {
            const isWhatsapp = situation.kind === "whatsapp";
            const href = resolveHref(situation);
            const linkClasses =
              "inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-sea-deep hover:gap-2 transition-[gap]";
            return (
              <li key={situation.id} className="flex gap-3 p-5 bg-white border border-stone rounded-md">
                <span
                  aria-hidden="true"
                  className="shrink-0 w-8 h-8 rounded-full border border-teal/30 bg-white flex items-center justify-center font-serif text-sm font-medium text-teal"
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-ink font-medium mb-1">{situation.prompt}</p>
                  <p className="text-sm text-ink-soft leading-relaxed mb-3">{situation.guidance}</p>
                  {isWhatsapp ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                      {whatsappIcon}
                      {situation.action}
                      {arrowIcon}
                    </a>
                  ) : (
                    <Link href={href} className={linkClasses}>
                      {situation.action}
                      {arrowIcon}
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
