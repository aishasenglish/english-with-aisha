import Link from "next/link";
import { Course } from "@/content/courses";

type Props = {
  course: Course;
};

const DATA_COURSE: Record<string, string> = {
  ielts: "ielts",
  pte: "pte",
  toefl: "toefl",
  "english-writing": "writing",
  "spoken-english": "spoken",
};

export default function ServiceCard({ course }: Props) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      data-course={DATA_COURSE[course.slug]}
      className="course-card group block"
    >
      {course.badge && (
        <span
          className="inline-block rounded-sm border px-2.5 py-1 mb-4
                     text-[0.6875rem] font-medium uppercase tracking-[0.10em]
                     border-[var(--card-edge,var(--color-line))] text-[var(--card-mark,var(--color-ink-faint))]"
        >
          {course.badge}
        </span>
      )}
      <h3 className="text-[1.25rem] font-medium leading-[1.3] tracking-[0.01em] text-ink mb-3">
        {course.name}
      </h3>
      <p className="text-[0.9375rem] font-normal leading-[1.7] tracking-[0.01em] text-ink-soft mb-6">
        {course.summary}
      </p>
      <span className="inline-flex items-center gap-1 text-[0.8125rem] font-medium tracking-[0.06em] text-sea-deep group-hover:gap-2 transition-[gap]">
        Learn more
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  );
}
