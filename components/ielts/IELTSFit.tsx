import { ieltsProgrammePage } from "@/content/ielts";

export default function IELTSFit() {
  const { fit } = ieltsProgrammePage;

  return (
    <section id={fit.id} className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28" aria-labelledby="ielts-fit-heading">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">{fit.eyebrow}<span className="h-px w-10 bg-teal" aria-hidden="true" /></p>
          <h2 id="ielts-fit-heading" className="max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.035em] text-ink">{fit.heading}</h2>
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-ink-soft sm:text-lg">{fit.body}</p>
          <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-ink-soft">{fit.supporting}</p>
        </div>
        <div>
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {fit.points.map((point, index) => (
              <li key={point} className="border-t border-line pt-4">
                <span className="text-sm font-semibold text-teal" aria-hidden="true">0{index + 1}</span>
                <p className="mt-2 text-base font-medium leading-relaxed text-ink">{point}</p>
              </li>
            ))}
          </ul>
          <aside className="mt-8 rounded-xl border border-sea-edge bg-sea-wash p-5 sm:p-6" aria-labelledby="ielts-before-heading">
            <h3 id="ielts-before-heading" className="text-lg font-semibold text-ink">{fit.panelHeading}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">{fit.panelBody}</p>
          </aside>
          <p className="mt-4 text-sm leading-relaxed text-ink-faint">{fit.note}</p>
        </div>
      </div>
    </section>
  );
}
