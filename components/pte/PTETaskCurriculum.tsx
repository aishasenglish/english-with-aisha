import { ptePage } from "@/content/pte";

// Server component. A two-column grid at sm+ and held there through desktop (never expanded to
// four narrow columns, per Part L) -- each skill card carries an intro, a focus-area list and a
// task-family list, so four columns would compress task names into cramped, hard-to-scan lines.
export default function PTETaskCurriculum() {
  const { curriculum } = ptePage;

  return (
    <section id={curriculum.id} className="py-14 sm:py-16 px-4 bg-ivory" aria-labelledby="pte-curriculum-heading">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {curriculum.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="pte-curriculum-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
            {curriculum.heading}
          </h2>
          <p className="text-ink-soft leading-relaxed">{curriculum.body}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-8 sm:mb-10">
          {curriculum.skills.map((skill) => (
            <article
              key={skill.id}
              id={skill.id}
              className="border border-stone rounded-md bg-white p-5 sm:p-6"
              aria-labelledby={`pte-skill-${skill.id}-heading`}
            >
              <h3 id={`pte-skill-${skill.id}-heading`} className="font-serif text-xl font-medium text-ink mb-2">
                {skill.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-4">{skill.introduction}</p>

              <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-2">Focus areas</p>
              <ul className="space-y-2 mb-4">
                {skill.focusItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal leading-relaxed">
                    <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-teal" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint mb-2">Current task families</p>
              <ul className="flex flex-wrap gap-1.5 mb-4">
                {skill.taskFamilies.map((task) => (
                  <li key={task} className="text-xs text-teal bg-amber-tint rounded-sm px-2 py-1 leading-snug">
                    {task}
                  </li>
                ))}
              </ul>

              {skill.integratedNote && (
                <p className="text-sm text-ink-faint leading-relaxed">{skill.integratedNote}</p>
              )}
            </article>
          ))}
        </div>

        {/* Integrated-skills panel -- no weighting table or diagram, just three verified examples. */}
        <div className="bg-white border border-stone rounded-md p-5 sm:p-6 mb-6">
          <h3 className="font-serif text-lg font-medium text-ink mb-2">{curriculum.integratedHeading}</h3>
          <p className="text-sm text-ink-soft leading-relaxed mb-4">{curriculum.integratedBody}</p>
          <ul className="space-y-2">
            {curriculum.integratedExamples.map((example) => (
              <li key={example.id} className="flex items-start gap-2.5 text-sm text-ink-soft leading-relaxed">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-teal" aria-hidden="true" />
                {example.body}
              </li>
            ))}
          </ul>
        </div>

        {/* Scoring-integrity note -- calm, credibility-led, no proprietary-algorithm claim. */}
        <div className="bg-white border-2 border-teal/30 rounded-md p-5 sm:p-6">
          <h3 className="font-serif text-lg font-medium text-ink mb-2">{curriculum.integrityHeading}</h3>
          <p className="text-sm text-ink-soft leading-relaxed mb-2">{curriculum.integrityBody}</p>
          <p className="text-sm text-ink-soft leading-relaxed">{curriculum.integritySecondSentence}</p>
        </div>
      </div>
    </section>
  );
}
