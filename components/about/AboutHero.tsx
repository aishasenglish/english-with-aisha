import Image from "next/image";
import Link from "next/link";
import { IELTS_RECOMMENDATION_HREF } from "@/content/nav";

export default function AboutHero() {
  return (
    <section className="border-b border-line bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24" aria-labelledby="about-page-heading">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            About Aisha<span className="h-px w-10 bg-teal" aria-hidden="true" />
          </p>
          <h1 id="about-page-heading" className="max-w-2xl text-[clamp(2.35rem,5vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-ink">
            Meet Aisha—an English lecturer and IELTS coach.
          </h1>
          <p className="mt-6 max-w-[65ch] text-base leading-relaxed text-ink-soft sm:text-lg">
            I&apos;m Aisha, an MPhil-qualified English lecturer with more than 12 years of English coaching experience. I help Academic and General Training IELTS candidates prepare through clear teaching, focused practice and feedback they can apply.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/courses/ielts" className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sea-deep active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal">
              Explore IELTS Coaching
            </Link>
            <a href={IELTS_RECOMMENDATION_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-teal px-6 py-3 text-sm font-semibold text-teal transition-colors hover:bg-sea-wash active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal">
              Get My Free Recommendation
            </a>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[31rem] overflow-hidden rounded-2xl bg-sea-wash">
          <Image src="/images/aisha-about-main.jpg" alt="Professional portrait of Aisha" fill preload sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1199px) 44vw, 496px" className="object-cover object-center" />
        </div>
      </div>
    </section>
  );
}
