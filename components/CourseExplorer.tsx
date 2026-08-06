"use client";

import { useState } from "react";
import Link from "next/link";
import { courses } from "@/content/courses";
import { whatsappLink } from "@/lib/whatsapp";

type Goal = "exam" | "write" | "speak";
type Format = "batch" | "private";

const COURSE_META: Record<string, { duration: string; target: string; goals: Goal[]; formats: Format[] }> = {
  ielts: { duration: "Live online · recorded", target: "Target Band 7+", goals: ["exam"], formats: ["batch", "private"] },
  pte: { duration: "Live online · recorded", target: "Target 79+", goals: ["exam"], formats: ["batch", "private"] },
  toefl: { duration: "Live online · recorded", target: "Target 100+", goals: ["exam"], formats: ["batch", "private"] },
  "english-writing": { duration: "Live online · recorded", target: "Weekly marked work", goals: ["write"], formats: ["batch", "private"] },
  "spoken-english": { duration: "Live online · recorded", target: "Small groups", goals: ["speak"], formats: ["batch", "private"] },
  "o-a-level-english": { duration: "Live online · recorded", target: "Cambridge & Edexcel", goals: ["exam"], formats: ["batch", "private"] },
};

const EXPLORER_COURSES = courses
  .filter((c) => COURSE_META[c.slug])
  .map((c) => ({ ...c, ...COURSE_META[c.slug] }));

export default function CourseExplorer() {
  const [goal, setGoal] = useState<Goal | "all">("all");
  const [slug, setSlug] = useState<string>("all");
  const [format, setFormat] = useState<Format | "all">("all");
  const [applied, setApplied] = useState<{ goal: Goal | "all"; slug: string; format: Format | "all" }>({
    goal: "all",
    slug: "all",
    format: "all",
  });

  const visible = EXPLORER_COURSES.filter(
    (c) =>
      (applied.goal === "all" || c.goals.includes(applied.goal)) &&
      (applied.slug === "all" || c.slug === applied.slug) &&
      (applied.format === "all" || c.formats.includes(applied.format))
  );

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 relative z-10 -mt-16 sm:-mt-20" id="finder">
        <form
          className="bg-white border border-stone border-t-4 border-t-coral shadow-xl p-6 sm:p-7"
          onSubmit={(e) => {
            e.preventDefault();
            setApplied({ goal, slug, format });
            document.getElementById("courses")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-ink">Find your course</h2>
            <span className="text-sm text-muted">Filters the course list below.</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <label className="flex flex-col gap-1.5">
              <span className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-muted">
                What do you want to achieve?
              </span>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value as Goal | "all")}
                className="w-full px-4 py-3.5 rounded-sm border border-line-strong bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-coral cursor-pointer"
              >
                <option value="all">Any goal</option>
                <option value="exam">Score well on an English exam</option>
                <option value="write">Write better English</option>
                <option value="speak">Speak with confidence</option>
              </select>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-muted">Course</span>
              <select
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full px-4 py-3.5 rounded-sm border border-line-strong bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-coral cursor-pointer"
              >
                <option value="all">All courses</option>
                {EXPLORER_COURSES.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-muted">Format</span>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value as Format | "all")}
                className="w-full px-4 py-3.5 rounded-sm border border-line-strong bg-white text-ink text-sm focus:outline-none focus:ring-2 focus:ring-coral cursor-pointer"
              >
                <option value="all">Any format</option>
                <option value="batch">Live online batch</option>
                <option value="private">One-to-one</option>
              </select>
            </label>
            <button
              type="submit"
              className="rounded-sm bg-coral hover:bg-amber-dark text-white font-serif font-medium uppercase tracking-wide text-sm px-6 py-3.5 transition-colors"
            >
              Show courses
            </button>
          </div>
        </form>
      </div>

      <section className="pt-10 sm:pt-12 pb-10 sm:pb-12 px-4" id="courses">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
                Courses
                <span className="h-0.5 w-9 bg-coral" aria-hidden />
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink">
                Six ways to get your English where it needs to be
              </h2>
            </div>
            <Link
              href="/courses"
              className="font-serif text-sm font-medium uppercase tracking-wide border-b-2 border-coral pb-1 hover:text-amber-dark inline-flex items-center gap-2"
            >
              All courses
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map((c) => (
              <Link
                href={`/courses/${c.slug}`}
                key={c.slug}
                className="rounded-md border border-stone hover:border-line-strong hover:-translate-y-1 transition-[transform,border-color] duration-200 flex flex-col p-5 bg-[rgba(240,240,240,0.4)]"
              >
                {c.badge && (
                  <span
                    className={`inline-block self-start rounded-sm border px-2.5 py-1 mb-2
                                text-[0.6875rem] font-medium uppercase tracking-[0.10em]
                                ${c.badgeBorder} ${c.badgeText}`}
                  >
                    {c.badge}
                  </span>
                )}
                <span className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint mb-1.5">
                  {c.goals.includes("exam") ? "Exam preparation" : c.goals.includes("write") ? "Skills training" : "Skills training"}
                </span>
                <h3 className="text-xl font-medium tracking-[0.01em] text-ink mb-2">{c.name}</h3>
                <p className="text-[0.9375rem] font-normal leading-[1.7] text-ink-soft flex-1">{c.summary}</p>
                <div className="flex items-center justify-between gap-3 pt-3 mt-3 border-t border-stone text-sm text-ink-soft">
                  <span>{c.duration}</span>
                  <strong className="font-serif text-ink text-xs">{c.target}</strong>
                </div>
              </Link>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="mt-8 p-6 bg-ivory border-l-[3px] border-coral text-charcoal">
              No course matches that combination yet.{" "}
              <a href={whatsappLink()} className="text-amber-dark font-medium">
                Message Aisha
              </a>{" "}
              and she&rsquo;ll tell you what fits — or reset the filters above.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
