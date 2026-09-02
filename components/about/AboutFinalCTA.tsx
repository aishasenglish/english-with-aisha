import Image from "next/image";
import Link from "next/link";
import { IELTS_RECOMMENDATION_HREF } from "@/content/nav";

export default function AboutFinalCTA() {
  return (
    <section className="bg-sea-deep px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24" aria-labelledby="about-final-cta-heading">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-[1fr_0.72fr] lg:gap-20">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
            Ready to begin?<span className="h-px w-10 bg-white/60" aria-hidden="true" />
          </p>
          <h2 id="about-final-cta-heading" className="max-w-xl text-[clamp(2rem,4vw,3.75rem)] font-semibold tracking-[-0.04em] text-white">
            Let&apos;s find the right starting point.
          </h2>
          <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-white/85 sm:text-lg">
            Tell me your target, timeline and current level. I&apos;ll recommend the most suitable next step for your preparation.
          </p>
          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a href={IELTS_RECOMMENDATION_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-white px-6 py-3 text-sm font-semibold text-sea-deep transition-colors hover:bg-sea-wash active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Get My Free Recommendation
            </a>
            <Link href="/courses/ielts" className="inline-flex min-h-11 items-center text-sm font-semibold text-white underline decoration-white/50 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline-white">
              View IELTS Programme
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] w-full max-w-[25rem] overflow-hidden rounded-2xl bg-white/10 md:justify-self-end">
          <Image src="/images/aisha-about-9.jpeg" alt="Aisha standing in a bright professional setting" fill sizes="(max-width: 767px) calc(100vw - 2rem), 400px" className="object-cover object-top" />
        </div>
      </div>
    </section>
  );
}
