import { ieltsPage } from "@/content/ielts";

// Four full-width skill articles, stacked at every width, rather than a 2x2 grid — Writing
// carries substantially more content (a version-distinction breakdown plus two notes) than
// Listening, so pairing them in a grid row would create the exact imbalance the spec warns
// against. Each article uses an internal "restrained side label" split on wide screens instead.
export default function IELTSSkillsCurriculum() {
  const { curriculum } = ieltsPage;

  return (
    <section className="py-14 sm:py-16 px-4 bg-ivory" aria-labelledby="ielts-curriculum-heading">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-2xl mb-6">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {curriculum.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="ielts-curriculum-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {curriculum.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{curriculum.body}</p>
        </div>

        {/* Academic/General Training relationship — stacks on phones, two-column text on desktop. */}
        <div className="bg-white border border-stone rounded-md p-5 sm:p-6 mb-8 sm:mb-10 sm:grid sm:grid-cols-[220px_1fr] sm:gap-6">
          <p className="font-serif text-base font-medium text-ink mb-2 sm:mb-0">
            {curriculum.versionNote.heading}
          </p>
          <p className="text-sm text-ink-soft leading-relaxed">{curriculum.versionNote.body}</p>
        </div>

        <div className="space-y-6">
          {curriculum.skills.map((skill) => (
            <article
              key={skill.id}
              id={skill.id}
              className="border border-stone rounded-md bg-white p-5 sm:p-6 lg:p-8"
              aria-labelledby={`ielts-skill-${skill.id}-heading`}
            >
              <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-8">
                <div className="mb-4 lg:mb-0">
                  <h3
                    id={`ielts-skill-${skill.id}-heading`}
                    className="font-serif text-xl font-medium text-ink mb-2"
                  >
                    {skill.heading}
                  </h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{skill.intro}</p>
                </div>

                <div>
                  <ul className="space-y-2 mb-4">
                    {skill.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-charcoal leading-relaxed">
                        <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-teal" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {skill.note && (
                    <p className="text-sm text-ink-faint leading-relaxed mb-4">{skill.note}</p>
                  )}

                  {skill.versionDistinction && (
                    <div className="grid sm:grid-cols-3 gap-3 mb-4">
                      {skill.versionDistinction.map((v) => (
                        <div key={v.label} className="bg-ivory rounded-md p-3">
                          <p className="text-xs font-semibold uppercase tracking-wide text-teal mb-1">
                            {v.label}
                          </p>
                          <p className="text-xs text-ink-soft leading-relaxed">{v.body}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {skill.assessmentNote && (
                    <p className="text-sm text-ink-soft leading-relaxed mb-2">{skill.assessmentNote}</p>
                  )}

                  {skill.weightingNote && (
                    <p className="text-sm text-ink-faint leading-relaxed">{skill.weightingNote}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
