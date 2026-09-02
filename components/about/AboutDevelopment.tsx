import Image from "next/image";

export default function AboutDevelopment() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28" aria-labelledby="about-development-heading">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <div className="grid items-end gap-4 sm:grid-cols-[1.25fr_0.75fr]">
          <div className="relative aspect-[12/8] overflow-hidden rounded-2xl bg-sea-wash">
            <Image src="/images/aisha-about-0.jpeg" alt="Aisha receiving a professional certificate from a colleague" fill sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 58vw, 430px" className="object-contain" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-surface-tint sm:translate-y-10">
            <Image src="/images/aisha-about-5.jpeg" alt="Aisha signing course completion certificates" fill sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) 34vw, 255px" className="object-contain" />
          </div>
        </div>
        <div>
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            Background and development<span className="h-px w-10 bg-teal" aria-hidden="true" />
          </p>
          <h2 id="about-development-heading" className="max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.035em] text-ink">
            Academic knowledge, strengthened by continued learning.
          </h2>
          <div className="mt-6 max-w-[65ch] space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
            <p>My MPhil in English Literature gave me a strong foundation in language, analysis and communication. My work as a Government Lecturer has strengthened that foundation through years of classroom teaching.</p>
            <p>I continue to develop my teaching practice through relevant training and professional learning, so my lessons remain clear, practical and focused on the learner.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
