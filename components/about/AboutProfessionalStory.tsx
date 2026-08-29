import Link from "next/link";
import { aboutContent } from "@/content/about";

// About Step 4: deepens (replaces, does not duplicate) Step 1's brief AboutIntroduction with a
// proper professional-story section -- a concise current-context narrative, up to three compact
// professional-context blocks, and a semantic timeline that renders only once at least two
// verified milestones exist (currently zero, so no timeline container renders at all). No
// invented institution, teaching-start date, brand-launch date, learner count or personal-
// motivation quote appears anywhere here -- see docs/about-professional-experience-verification.md.
export default function AboutProfessionalStory() {
  const { professionalStory } = aboutContent;
  const hasTimeline = professionalStory.milestones.length >= 2;

  return (
    <section
      id={professionalStory.id}
      className="py-10 sm:py-16 px-4 bg-ivory"
      aria-labelledby="about-professional-story-heading"
    >
      <div className="max-w-3xl mx-auto">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
          {professionalStory.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h2 id="about-professional-story-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-5">
          {professionalStory.heading}
        </h2>
        <p className="text-charcoal leading-relaxed mb-8 sm:mb-10">{professionalStory.narrative}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
          {professionalStory.contexts.map((context) => (
            <div key={context.id} className="bg-white border border-stone rounded-md p-5">
              <h3 className="font-serif text-base font-medium text-ink mb-1.5">{context.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{context.description}</p>
              {context.links && (
                <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
                  {context.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex min-h-11 items-center text-sm font-medium text-ink hover:text-teal underline underline-offset-2"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Timeline decision: renders only once at least two milestones have verified dates and
            approved wording (see content/about.ts's `milestones` comment) -- currently empty, so
            nothing renders here at all, not even an empty heading or "Present" placeholder. */}
        {hasTimeline && (
          <ol className="mt-8 sm:mt-10 space-y-4">
            {professionalStory.milestones.map((milestone) => (
              <li key={milestone.id} className="flex gap-4 bg-white border border-stone rounded-md p-5">
                <span className="shrink-0 font-serif text-sm font-medium text-amber-dark">{milestone.date}</span>
                <div>
                  <p className="font-serif text-base font-medium text-ink mb-1">{milestone.label}</p>
                  <p className="text-sm text-ink-soft leading-relaxed">{milestone.description}</p>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
