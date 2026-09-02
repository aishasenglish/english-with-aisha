import Image from "next/image";
import {
  ieltsBenefits,
  ieltsProofPoints,
  ieltsStudentExperience,
  ieltsWhyAisha,
} from "@/content/homeIELTS";

function StarIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 1.9 12.5 7l5.6.8-4 3.9.9 5.5-5-2.6-5 2.6.9-5.5-4-3.9L7.5 7 10 1.9Z" />
    </svg>
  );
}

export default function HomeIELTSBenefits() {
  return (
    <section className="bg-surface-tint" aria-labelledby="why-aisha-heading">
      <div className="border-y border-line bg-white">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {ieltsProofPoints.map((point, index) => (
            <div
              key={point.label}
              className={`px-3 py-6 text-center sm:px-6 sm:py-7 lg:py-8 ${
                index % 2 === 0 ? "border-r border-line" : ""
              } ${index < 2 ? "border-b border-line lg:border-b-0" : ""} ${
                index === 1 ? "lg:border-r" : ""
              }`}
            >
              <dt className="mb-1 text-lg font-semibold tracking-[-0.01em] text-teal sm:text-xl">
                {point.value}
              </dt>
              <dd className="text-sm leading-relaxed text-ink-soft sm:text-base">{point.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            {ieltsWhyAisha.eyebrow}
          </p>
          <h2
            id="why-aisha-heading"
            className="mb-4 text-[1.9rem] font-semibold tracking-[-0.025em] text-ink sm:text-4xl"
          >
            {ieltsWhyAisha.heading}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {ieltsWhyAisha.body}
          </p>
        </div>

        <div className="mb-12 grid gap-5 md:grid-cols-3 sm:mb-14 sm:gap-6 lg:mb-16">
          {ieltsBenefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-xl border border-line bg-white p-6 shadow-[0_12px_35px_rgba(26,26,26,0.04)] sm:p-7"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-sea-wash text-sm font-semibold text-teal">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-3 text-xl font-semibold tracking-[-0.015em] text-ink">
                {benefit.title}
              </h3>
              <p className="text-base leading-relaxed text-ink-soft">{benefit.body}</p>
            </article>
          ))}
        </div>

        <figure id="student-experience" className="mx-auto grid max-w-5xl items-center gap-7 overflow-hidden rounded-2xl border border-sea-edge bg-sea-wash p-6 sm:p-8 md:grid-cols-[auto_1fr] md:gap-9 lg:p-10">
          <div className="relative mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-sm sm:h-32 sm:w-32">
            <Image
              src={ieltsStudentExperience.image}
              alt={ieltsStudentExperience.imageAlt}
              fill
              sizes="128px"
              className="object-cover object-[center_42%]"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
              {ieltsStudentExperience.heading}
            </p>
            <blockquote className="mb-5 text-base leading-relaxed text-ink sm:text-lg">
              “{ieltsStudentExperience.quote}”
            </blockquote>
            <div
              className="mb-2 flex justify-center gap-0.5 text-teal md:justify-start"
              aria-label={`${ieltsStudentExperience.rating} out of 5 stars`}
            >
              {Array.from({ length: ieltsStudentExperience.rating }, (_, index) => (
                <StarIcon key={index} />
              ))}
            </div>
            <figcaption className="text-sm text-ink-soft">
              <span className="font-semibold text-ink">— {ieltsStudentExperience.name}</span>
              {` (${ieltsStudentExperience.context})`}
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
