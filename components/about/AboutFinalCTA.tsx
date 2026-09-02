import Link from "next/link";
import { IELTS_RECOMMENDATION_HREF } from "@/content/nav";

export default function AboutFinalCTA() {
  return (
    <section className="border-t border-line bg-sea-wash px-4 py-14 sm:px-6 sm:py-16 lg:px-8" aria-labelledby="about-final-cta-heading">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">IELTS coaching</p>
        <h2 id="about-final-cta-heading" className="mb-4 text-[1.9rem] font-semibold tracking-[-0.025em] text-ink sm:text-4xl">
          Ready to plan your IELTS preparation?
        </h2>
        <p className="mb-7 text-base leading-relaxed text-ink-soft sm:text-lg">
          Explore Aisha’s IELTS coaching approach, or share your current level, target band and test date for a personalised next step.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/courses/ielts" className="inline-flex min-h-12 items-center justify-center rounded-[10px] border-2 border-teal px-6 py-3 text-sm font-semibold text-teal transition-colors hover:bg-white">
            View IELTS Coaching
          </Link>
          <a href={IELTS_RECOMMENDATION_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sea-deep">
            Get My Free Recommendation
          </a>
        </div>
      </div>
    </section>
  );
}
