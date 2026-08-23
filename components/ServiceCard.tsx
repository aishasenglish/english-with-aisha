import Link from "next/link";
import { Course } from "@/content/courses";

type Props = {
  course: Course;
};

export default function ServiceCard({ course }: Props) {
  return (
    <article className={`flex flex-col rounded-md border border-line p-5 sm:p-6 lg:p-8 ${course.cardTint}`}>
      {course.badge && (
        <span
          className={`inline-block self-start rounded-sm border px-2.5 py-1 mb-4
                      text-[0.6875rem] font-medium uppercase tracking-[0.10em]
                      ${course.badgeBorder} ${course.badgeText}`}
        >
          {course.badge}
        </span>
      )}
      <h3 className="text-xl font-medium tracking-[0.01em] text-ink mb-3">
        {course.name}
      </h3>
      <p className="text-[0.9375rem] font-normal leading-[1.7] text-ink-soft">
        {course.summary}
      </p>
      <Link
        href={`/courses/${course.slug}`}
        aria-label={`Learn more about ${course.name}`}
        className="inline-flex min-h-11 items-center gap-1 mt-4 text-[0.8125rem] font-medium tracking-[0.06em] text-sea-deep hover:gap-2 transition-[gap] w-fit"
      >
        Learn more
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </article>
  );
}
