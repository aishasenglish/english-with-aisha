import Link from "next/link";
import { Course } from "@/content/courses";
import { getCoursePresentation } from "@/content/coursePresentation";

type Props = {
  course: Course;
};

// One consistent academic card treatment for every programme — category context comes from the
// visible type label and the surrounding Courses-hub section, not from a per-course colour tint.
export default function ServiceCard({ course }: Props) {
  const presentation = getCoursePresentation(course.slug);

  return (
    <article className="flex flex-col h-full rounded-md border border-stone bg-white p-5 sm:p-6 lg:p-7 transition-shadow hover:shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-teal mb-2">{presentation.typeLabel}</p>
      <h3 className="text-xl font-medium tracking-[0.01em] text-ink mb-2">{course.name}</h3>
      <p className="text-[0.9375rem] leading-[1.7] text-ink-soft mb-4">{presentation.shortDescription}</p>
      <p className="text-sm text-ink-soft mb-2">
        <span className="font-medium text-ink">Best for:</span> {presentation.bestFor}
      </p>
      <p className="text-sm text-ink-soft mb-5">{presentation.focus}</p>
      <Link
        href={`/courses/${course.slug}`}
        className="mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-coral hover:bg-amber-dark text-white text-sm font-medium tracking-wide text-center px-5 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral"
      >
        {presentation.ctaLabel}
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </article>
  );
}
