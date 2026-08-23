"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { courses } from "@/content/courses";
import { whatsappLink } from "@/lib/whatsapp";
import {
  GOAL_OPTIONS,
  PREFERENCE_OPTIONS,
  RECOMMENDATIONS,
  type GoalValue,
  type PreferenceValue,
} from "@/content/programmeMatcher";

type Errors = { goal?: string; preference?: string };

export default function ProgrammeMatcher() {
  const [goal, setGoal] = useState<GoalValue | "">("");
  const [preference, setPreference] = useState<PreferenceValue | "">("");
  const [errors, setErrors] = useState<Errors>({});
  const [submittedGoal, setSubmittedGoal] = useState<GoalValue | null>(null);
  const [submittedPreference, setSubmittedPreference] = useState<PreferenceValue | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const nextErrors: Errors = {};
    if (!goal) nextErrors.goal = "Please choose your main goal.";
    if (!preference) nextErrors.preference = "Please choose a learning preference.";
    setErrors(nextErrors);

    if (nextErrors.goal || nextErrors.preference) {
      document.getElementById(nextErrors.goal ? "matcher-goal" : "matcher-preference")?.focus();
      return;
    }

    setSubmittedGoal(goal as GoalValue);
    setSubmittedPreference(preference as PreferenceValue);
    // Wait for the result to mount, then move focus there — no page-jump, just the local scroll a focus() needs.
    requestAnimationFrame(() => resultRef.current?.focus());
  }

  const goalLabel = GOAL_OPTIONS.find((o) => o.value === submittedGoal)?.label ?? "";
  const preferenceLabel = PREFERENCE_OPTIONS.find((o) => o.value === submittedPreference)?.label ?? "";
  const recommendation = submittedGoal ? RECOMMENDATIONS[submittedGoal] : null;
  const recommendedCourse = recommendation?.courseSlug
    ? courses.find((c) => c.slug === recommendation.courseSlug)
    : undefined;
  const title = recommendedCourse?.name ?? recommendation?.corporateTitle ?? "";

  const whatsappMessage = !recommendation
    ? ""
    : recommendedCourse
      ? `Hi Aisha! I used the programme matcher on your website. My main goal is "${goalLabel}", and my preferred learning format is "${preferenceLabel}". The website recommended "${title}". Could you share the current schedule and fee details?`
      : `Hi Aisha! I'm interested in professional or corporate English training. My preferred learning format is "${preferenceLabel}". Could you recommend the most suitable individual or team option and share the current details?`;

  return (
    <section id="finder" className="py-14 sm:py-16 lg:py-20 px-4 bg-ivory">
      <div id="programme-matcher" className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center justify-center gap-3 mb-3">
            Not sure where to start?
            <span className="h-0.5 w-9 bg-coral" aria-hidden />
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-3">
            Find the right English programme in under a minute.
          </h2>
          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            Choose your main goal and preferred lesson format. We&apos;ll show you the most relevant next step.
          </p>
        </div>

        <div className="bg-white border border-stone rounded-md p-5 sm:p-7 lg:p-8">
          <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-3 gap-4 md:items-end">
            <div>
              <label htmlFor="matcher-goal" className="block text-sm font-medium text-charcoal mb-1.5">
                What do you want help with? <span className="text-coral">*</span>
              </label>
              <select
                id="matcher-goal"
                required
                value={goal}
                onChange={(e) => {
                  setGoal(e.target.value as GoalValue);
                  if (errors.goal) setErrors((prev) => ({ ...prev, goal: undefined }));
                }}
                aria-invalid={errors.goal ? "true" : undefined}
                aria-describedby={errors.goal ? "matcher-goal-error" : undefined}
                className="w-full min-h-12 px-4 py-3 rounded-sm border border-line-strong bg-white text-ink text-base focus:outline-none focus:ring-2 focus:ring-teal cursor-pointer"
              >
                <option value="" disabled>
                  Choose your main goal
                </option>
                {GOAL_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              {errors.goal && (
                <p id="matcher-goal-error" role="alert" className="text-red-600 text-sm mt-1.5">
                  {errors.goal}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="matcher-preference" className="block text-sm font-medium text-charcoal mb-1.5">
                How would you prefer to learn? <span className="text-coral">*</span>
              </label>
              <select
                id="matcher-preference"
                required
                value={preference}
                onChange={(e) => {
                  setPreference(e.target.value as PreferenceValue);
                  if (errors.preference) setErrors((prev) => ({ ...prev, preference: undefined }));
                }}
                aria-invalid={errors.preference ? "true" : undefined}
                aria-describedby={errors.preference ? "matcher-preference-error" : undefined}
                className="w-full min-h-12 px-4 py-3 rounded-sm border border-line-strong bg-white text-ink text-base focus:outline-none focus:ring-2 focus:ring-teal cursor-pointer"
              >
                <option value="" disabled>
                  Choose a learning preference
                </option>
                {PREFERENCE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              {errors.preference && (
                <p id="matcher-preference-error" role="alert" className="text-red-600 text-sm mt-1.5">
                  {errors.preference}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full min-h-12 rounded-sm bg-coral hover:bg-amber-dark text-white font-serif font-medium uppercase tracking-wide text-sm px-6 py-3 transition-colors"
            >
              Show My Best Match
            </button>
          </form>

          <div aria-live="polite" aria-atomic="true">
            {recommendation && (
              <div ref={resultRef} tabIndex={-1} className="mt-7 pt-6 border-t border-stone focus:outline-none">
                <p className="text-xs font-semibold uppercase tracking-wide text-teal mb-2">
                  Recommended starting point
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-ink mb-2">{title}</h3>
                <p className="text-ink-soft leading-relaxed mb-3">{recommendation.reason}</p>
                <p className="text-sm text-muted mb-5">
                  Learning preference: <span className="font-medium text-ink">{preferenceLabel}</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {recommendedCourse ? (
                    <>
                      <Link
                        href={`/courses/${recommendedCourse.slug}`}
                        className="inline-flex min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white font-serif font-medium uppercase tracking-wide text-xs px-5 py-3 transition-colors"
                      >
                        View Programme Details
                      </Link>
                      <a
                        href={whatsappLink(whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center justify-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white font-serif font-medium uppercase tracking-wide text-xs px-5 py-3 transition-colors"
                      >
                        Ask Aisha About This Programme
                      </a>
                    </>
                  ) : (
                    <a
                      href={whatsappLink(whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-12 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white font-serif font-medium uppercase tracking-wide text-xs px-5 py-3 transition-colors"
                    >
                      Discuss Corporate Training
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
