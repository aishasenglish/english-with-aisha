import Image from "next/image";
import Link from "next/link";
import { IELTS_RECOMMENDATION_HREF } from "@/content/nav";
import { ieltsProgrammePage } from "@/content/ielts";

export default function IELTSHero() {
  const { hero } = ieltsProgrammePage;

  return (
    <section className="border-b border-line bg-white px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-12" aria-labelledby="ielts-page-heading">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            {hero.eyebrow}<span className="h-px w-10 bg-teal" aria-hidden="true" />
          </p>
          <h1 id="ielts-page-heading" className="max-w-3xl text-[clamp(2.35rem,5.2vw,4.8rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">
            {hero.heading}
          </h1>
          <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-ink-soft sm:text-lg">{hero.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={IELTS_RECOMMENDATION_HREF} target="_blank" rel="noopener noreferrer" data-analytics-event="whatsapp_click" data-analytics-section="hero" data-analytics-intent="discuss_goal" className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sea-deep active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal">
              {hero.primaryLabel}
            </a>
            <Link href={hero.secondaryHref} className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-teal px-6 py-3 text-sm font-semibold text-teal transition-colors hover:bg-sea-wash active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal">
              {hero.secondaryLabel}
            </Link>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink-faint">{hero.trustLine}</p>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[30rem] overflow-hidden rounded-2xl bg-sea-wash">
          <Image src="/images/aisha-about-9.jpeg" alt="Aisha, IELTS coach and English lecturer" fill preload sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1199px) 42vw, 480px" className="object-cover object-top" />
        </div>
      </div>
    </section>
  );
}
