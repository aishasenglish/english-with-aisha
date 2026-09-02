import { aboutMetrics } from "@/content/aboutPage";

export default function IELTSAuthorityStrip() {
  return (
    <section className="border-b border-sea-edge bg-sea-wash px-4 py-12 sm:px-6 sm:py-14 lg:px-8" aria-label="Aisha's teaching experience and qualifications">
      <dl className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-7 gap-y-8 sm:gap-x-10 lg:grid-cols-4 lg:gap-y-0">
        {aboutMetrics.map((metric) => (
          <div key={metric.value} className="border-t border-sea-edge pt-4 lg:border-l lg:border-t-0 lg:pl-7 lg:first:border-l-0 lg:first:pl-0">
            <dt className={`font-semibold leading-tight tracking-[-0.035em] text-sea-deep ${"credential" in metric ? "text-[clamp(1.4rem,2.5vw,2rem)]" : "text-[clamp(1.9rem,3vw,2.65rem)]"}`}>{metric.value}</dt>
            {"label" in metric && <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{metric.label}</dd>}
          </div>
        ))}
      </dl>
    </section>
  );
}
