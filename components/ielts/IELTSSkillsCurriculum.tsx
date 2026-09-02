import { ieltsProgrammePage } from "@/content/ielts";

export default function IELTSSkillsCurriculum() {
  const { programme } = ieltsProgrammePage;

  return (
    <section id={programme.id} className="scroll-mt-24 border-y border-line bg-surface-tint px-4 py-16 sm:px-6 sm:py-20 lg:scroll-mt-32 lg:px-8 lg:py-28" aria-labelledby="ielts-programme-heading">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">{programme.eyebrow}<span className="h-px w-10 bg-teal" aria-hidden="true" /></p>
          <h2 id="ielts-programme-heading" className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.035em] text-ink">{programme.heading}</h2>
          <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-ink-soft sm:text-lg">{programme.introduction}</p>
        </div>
        <p className="mt-8 max-w-4xl rounded-xl border border-sea-edge bg-sea-wash p-5 text-sm leading-relaxed text-ink-soft sm:text-base">{programme.versionNote}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
          {programme.skills.map((skill, index) => (
            <article key={skill.id} id={skill.id} className="rounded-xl border border-line bg-white p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-semibold tracking-[-0.025em] text-ink">{skill.title}</h3>
                <span className="text-sm font-semibold text-teal" aria-hidden="true">0{index + 1}</span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">{skill.body}</p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {skill.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" /></svg>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
