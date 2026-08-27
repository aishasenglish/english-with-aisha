import { toeflPage } from "@/content/toefl";

// Server component. A two-column grid at sm+ and held there through desktop (never expanded to
// four narrow columns, per Part L) -- each skill card carries an intro, a focus-area list and a
// task-family list, so four columns would compress task names into cramped, hard-to-scan lines.
// Rendered in official test order -- Reading, Listening, Writing, Speaking.
export default function TOEFLTaskCurriculum() {
  const { curriculum } = toeflPage;

  return (
    <section id={curriculum.id} className="py-14 sm:py-16 px-4 bg-ivory" aria-labelledby="toefl-curriculum-heading">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {curriculum.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2 id="toefl-curriculum-heading" className="font-serif text-2xl sm:text-3xl font-medium text-ink mb-3">
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
              aria-labelledby={`toefl-skill-${skill.id}-heading`}
            >
              <h3 id={`toefl-skill-${skill.id}-heading`} className="font-serif text-xl font-medium text-ink mb-2">
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
              {/* text-amber-dark, not text-teal -- matches the WCAG AA contrast correction made
                  for PTE (PTE Step 12): text-teal on bg-amber-tint measures 4.03:1, short of the
                  4.5:1 minimum for this 12px text. text-amber-dark (#1F616E) measures 6.11:1 on
                  this background. */}
              <ul className="flex flex-wrap gap-1.5">
                {skill.taskFamilies.map((task) => (
                  <li key={task} className="text-xs text-amber-dark bg-amber-tint rounded-sm px-2 py-1 leading-snug">
                    {task}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Adaptive-design panel -- Reading and Listening only. No routing diagram, no
            upper/lower-module tactics, no fixed item count presented as universal. */}
        <div className="bg-white border border-stone rounded-md p-5 sm:p-6 mb-6">
          <h3 className="font-serif text-lg font-medium text-ink mb-2">{curriculum.adaptiveNote.heading}</h3>
          <p className="text-sm text-ink-soft leading-relaxed">{curriculum.adaptiveNote.body}</p>
        </div>

        {/* Scoring-integrity note -- calm, credibility-led, no proprietary-algorithm claim. */}
        <div className="bg-white border-2 border-teal/30 rounded-md p-5 sm:p-6">
          <h3 className="font-serif text-lg font-medium text-ink mb-2">{curriculum.integrityNote.heading}</h3>
          <p className="text-sm text-ink-soft leading-relaxed mb-2">{curriculum.integrityNote.body}</p>
          <p className="text-sm text-ink-soft leading-relaxed">{curriculum.integrityNote.feedbackNote}</p>
        </div>
      </div>
    </section>
  );
}
