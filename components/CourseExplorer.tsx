import Link from "next/link";
import { courses } from "@/content/courses";

type Goal = "exam" | "write" | "speak";

const COURSE_META: Record<string, { duration: string; target: string; goals: Goal[] }> = {
  ielts: { duration: "Live online · recorded", target: "Target Band 7+", goals: ["exam"] },
  pte: { duration: "Live online · recorded", target: "Target 79+", goals: ["exam"] },
  toefl: { duration: "Live online · recorded", target: "Target 100+", goals: ["exam"] },
  "english-writing": { duration: "Live online · recorded", target: "Weekly marked work", goals: ["write"] },
  "spoken-english": { duration: "Live online · recorded", target: "Small groups", goals: ["speak"] },
  "o-a-level-english": { duration: "Live online · recorded", target: "Cambridge & Edexcel", goals: ["exam"] },
};

const EXPLORER_COURSES = courses
  .filter((c) => COURSE_META[c.slug])
  .map((c) => ({ ...c, ...COURSE_META[c.slug] }));

export default function CourseExplorer() {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-16 lg:pb-20 px-4" id="courses">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7 sm:mb-10">
          <div>
            <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
              Courses
              <span className="h-0.5 w-9 bg-coral" aria-hidden />
            </p>
            <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink leading-tight">
              Six ways to get your English where it needs to be
            </h2>
          </div>
          <Link
            href="/courses"
            className="font-serif text-sm font-medium uppercase tracking-wide border-b-2 border-coral min-h-11 hover:text-amber-dark inline-flex items-center gap-2 self-start"
          >
            All courses
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <p className="sm:hidden text-xs text-ink-faint mb-3">Swipe to compare courses</p>
        <div className="mobile-card-rail flex overflow-x-auto overscroll-x-contain snap-x snap-mandatory gap-4 pb-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6" aria-label="Course options">
          {EXPLORER_COURSES.map((c) => (
            <Link
              href={`/courses/${c.slug}`}
              key={c.slug}
              className="w-[84vw] max-w-[320px] shrink-0 snap-start sm:w-auto sm:max-w-none rounded-md border border-stone hover:border-line-strong sm:hover:-translate-y-1 transition-[transform,border-color] duration-200 flex flex-col p-5 sm:p-6 lg:p-8 bg-[rgba(240,240,240,0.4)]"
            >
              {c.badge && (
                <span
                  className={`inline-block self-start rounded-sm border px-2.5 py-1 mb-4
                              text-[0.6875rem] font-medium uppercase tracking-[0.10em]
                              ${c.badgeBorder} ${c.badgeText}`}
                >
                  {c.badge}
                </span>
              )}
              <span className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint mb-2">
                {c.goals.includes("exam") ? "Exam preparation" : "Skills training"}
              </span>
              <h3 className="text-xl font-medium tracking-[0.01em] text-ink mb-3">{c.name}</h3>
              <p className="text-[0.9375rem] font-normal leading-[1.7] text-ink-soft flex-1">{c.summary}</p>
              <div className="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 pt-4 mt-4 border-t border-stone text-sm text-ink-soft">
                <span>{c.duration}</span>
                <strong className="font-serif text-ink text-xs">{c.target}</strong>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
