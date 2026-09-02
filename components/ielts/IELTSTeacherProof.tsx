import Image from "next/image";
import Link from "next/link";
import { approvedIeltsTestimonial } from "@/content/aboutPage";
import { ieltsProgrammePage } from "@/content/ielts";

export default function IELTSTeacherProof() {
  const { teacher } = ieltsProgrammePage;

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28" aria-labelledby="ielts-teacher-heading">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[32rem] pb-16 pr-10 sm:pb-20 sm:pr-20">
            <Image src="/images/about-aisha.jpeg" alt="Portrait of Aisha, English lecturer and IELTS coach" width={490} height={468} sizes="(max-width: 639px) calc(100vw - 4.5rem), 490px" className="h-auto w-full rounded-2xl object-cover" />
            <div className="absolute bottom-0 right-0 aspect-[3/4] w-[42%] overflow-hidden rounded-xl border-4 border-white bg-surface-tint shadow-[0_14px_35px_rgba(26,26,26,0.12)]">
              <Image src="/images/aisha-about-5.jpeg" alt="Aisha signing professional training certificates" fill sizes="(max-width: 639px) 38vw, 215px" className="object-contain" />
            </div>
          </div>
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">{teacher.eyebrow}<span className="h-px w-10 bg-teal" aria-hidden="true" /></p>
            <h2 id="ielts-teacher-heading" className="max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.035em] text-ink">{teacher.heading}</h2>
            <div className="mt-6 max-w-[65ch] space-y-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              {teacher.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <Link href={teacher.aboutHref} className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-teal underline decoration-sea-edge underline-offset-4 hover:text-sea-deep hover:decoration-teal">{teacher.aboutLabel}</Link>
          </div>
        </div>

        <figure className="mt-16 border-l-2 border-teal pl-6 sm:pl-10 lg:ml-[42%]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-teal">A student&apos;s experience</p>
          <blockquote className="mt-5 text-[clamp(1.35rem,2.5vw,2rem)] font-medium leading-snug tracking-[-0.025em] text-ink">“{approvedIeltsTestimonial.quote}”</blockquote>
          <div className="mt-5 flex gap-1 text-teal" aria-label={`${approvedIeltsTestimonial.rating} out of 5 stars`}>
            {Array.from({ length: approvedIeltsTestimonial.rating }).map((_, index) => (
              <svg key={index} className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2.75 2.78 5.63 6.22.9-4.5 4.39 1.06 6.2L12 16.94l-5.56 2.93 1.06-6.2L3 9.28l6.22-.9L12 2.75Z" /></svg>
            ))}
          </div>
          <figcaption className="mt-4"><span className="block font-semibold text-ink">{approvedIeltsTestimonial.name}</span><span className="mt-1 block text-sm text-ink-soft">{approvedIeltsTestimonial.context}</span></figcaption>
        </figure>
      </div>
    </section>
  );
}
