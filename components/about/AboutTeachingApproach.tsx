import Link from "next/link";
import { aboutContent } from "@/content/about";

// About Step 3: replaces the temporary Step-1 three-item AboutTeachingPrinciples preview with a
// concrete, adaptable five-part method (clarify the requirement, identify priorities, explain the
// reason, purposeful practice, review/next step) plus three goal-specific application examples.
// Server component, no client JavaScript, no timeline/animation library, no carousel.
//
// Sequential principles use a real semantic <ol> (native numbering suppressed via `list-none` --
// the visible step badge is a decorative restatement, aria-hidden, so meaning never depends on it
// alone) so screen readers still announce list position/size correctly. The flow diagram below the
// list is purely decorative and aria-hidden -- the <ol> above already carries the real sequence.
export default function AboutTeachingApproach() {
  const { teachingApproach } = aboutContent;

  return (
    <section
      id={teachingApproach.id}
      className="py-10 sm:py-16 px-4 bg-ivory"
      aria-labelledby="about-teaching-approach-heading"
    >
      <div className="max-w-3xl mx-auto">
        <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
          {teachingApproach.eyebrow}
          <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
        </p>
        <h2 id="about-teaching-approach-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-4">
          {teachingApproach.heading}
        </h2>
        <p className="text-ink-soft leading-relaxed mb-8 sm:mb-10">{teachingApproach.intro}</p>

        <ol className="list-none space-y-5 mb-6">
          {teachingApproach.principles.map((principle) => (
            <li key={principle.id} className="flex gap-4 bg-white border border-stone rounded-md p-5">
              <span
                className="shrink-0 w-9 h-9 rounded-md border border-teal/30 bg-sea-wash flex items-center justify-center font-serif text-base font-medium text-amber-dark"
                aria-hidden="true"
              >
                {principle.step}
              </span>
              <div>
                <h3 className="font-serif text-base font-medium text-ink mb-1.5">{principle.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{principle.explanation}</p>
                {principle.boundary && (
                  <p className="text-sm text-ink-faint leading-relaxed mt-2">{principle.boundary}</p>
                )}
              </div>
            </li>
          ))}
        </ol>

        {/* Decorative restatement of the same five-step sequence, hidden on phones (where it
            would just wrap awkwardly) and from assistive technology (the <ol> above is already
            the accessible source of truth). Conceptual only -- not a promise every lesson follows
            five identical stages, which is why the boundary note directly below it is ordinary,
            fully readable body text rather than a tooltip or footnote. */}
        <div className="hidden sm:flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-ink-faint mb-3" aria-hidden="true">
          {teachingApproach.flow.map((step, i) => (
            <span key={step} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">→</span>}
              <span className="px-2.5 py-1 rounded-full border border-stone bg-white">{step}</span>
            </span>
          ))}
        </div>
        <p className="text-ink-soft text-sm leading-relaxed mb-10 sm:mb-12">{teachingApproach.flowBoundary}</p>

        <p className="text-xs font-semibold uppercase tracking-wide text-amber-dark mb-4">
          {teachingApproach.goalApplicationsHeading}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {teachingApproach.goalApplications.map((application) => (
            <div key={application.id} className="border border-stone rounded-md p-5 bg-white flex flex-col">
              <h3 className="font-serif text-base font-medium text-ink mb-2">{application.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-4 flex-1">{application.description}</p>
              <Link
                href={application.href}
                className="inline-flex min-h-11 items-center text-sm font-medium text-ink hover:text-teal underline underline-offset-2"
              >
                {application.linkLabel}
              </Link>
            </div>
          ))}
        </div>

        <Link
          href={teachingApproach.closingLink.href}
          className="inline-flex min-h-11 items-center font-serif text-base font-medium text-ink hover:text-teal underline underline-offset-2"
        >
          {teachingApproach.closingLink.label}
        </Link>
      </div>
    </section>
  );
}
