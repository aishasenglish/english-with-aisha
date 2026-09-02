import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/content/courses";
import { getCoursePresentation } from "@/content/coursePresentation";
import { corporateEnquiry } from "@/content/courseGuidance";
import { IELTS_RECOMMENDATION_HREF, PROFESSIONAL_ENQUIRY_HREF } from "@/content/nav";
import { site } from "@/content/site";

const title = "Online English Programmes | Aisha’s English";
const description =
  "Explore IELTS coaching first, plus online support for O/A Level and IGCSE English, PTE, TOEFL, spoken English and English writing.";
const pageUrl = `https://${site.domain}/courses`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/courses" },
  openGraph: { type: "website", title, description, url: pageUrl },
  twitter: { title, description },
};

const otherProgrammeSlugs = [
  "o-a-level-english",
  "pte",
  "toefl",
  "spoken-english",
  "english-writing",
] as const;

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: title,
  description,
  mainEntity: {
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: 6,
    itemListElement: ["ielts", ...otherProgrammeSlugs].map((slug, index) => {
      const course = courses.find((item) => item.slug === slug)!;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: course.name,
        url: `${pageUrl}/${slug}`,
      };
    }),
  },
};

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function CoursesPage() {
  const ielts = getCoursePresentation("ielts");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }} />

      <section className="border-b border-line bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">All programmes</p>
          <h1 className="mb-4 text-[2.2rem] font-semibold tracking-[-0.03em] text-ink sm:text-5xl">
            Start with the English support that matches your goal.
          </h1>
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
            IELTS is Aisha’s main coaching focus. Other programmes remain available for learners preparing for school exams, other English tests, speaking and writing goals.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20" aria-labelledby="ielts-feature-heading">
        <div className="mx-auto max-w-[1200px]">
          <article className="overflow-hidden rounded-2xl border border-sea-edge bg-sea-wash p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">Main focus</p>
                <h2 id="ielts-feature-heading" className="mb-4 text-3xl font-semibold tracking-[-0.025em] text-ink sm:text-4xl">IELTS Coaching</h2>
                <p className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{ielts.shortDescription}</p>
              </div>
              <div className="rounded-xl border border-white/80 bg-white/80 p-5 sm:p-6">
                <p className="mb-2 text-sm font-semibold text-ink">Best for</p>
                <p className="mb-5 text-sm leading-relaxed text-ink-soft sm:text-base">{ielts.bestFor}</p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href="/courses/ielts" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sea-deep">
                    View IELTS Programme <ArrowIcon />
                  </Link>
                  <a href={IELTS_RECOMMENDATION_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-[10px] border-2 border-teal px-5 py-3 text-sm font-semibold text-teal transition-colors hover:bg-sea-wash">
                    Get My Free Recommendation
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-surface-tint px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20" aria-labelledby="other-programmes-heading">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">Other programmes</p>
            <h2 id="other-programmes-heading" className="mb-3 text-[1.9rem] font-semibold tracking-[-0.025em] text-ink sm:text-4xl">More ways to learn with Aisha.</h2>
            <p className="text-base leading-relaxed text-ink-soft">Choose the specific programme that matches the learner’s exam or communication goal.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {otherProgrammeSlugs.map((slug) => {
              const course = courses.find((item) => item.slug === slug)!;
              const presentation = getCoursePresentation(slug);
              return (
                <article key={slug} className="flex min-w-0 flex-col rounded-xl border border-line bg-white p-6 sm:p-7">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-teal">{presentation.typeLabel}</p>
                  <h3 className="mb-3 text-xl font-semibold tracking-[-0.015em] text-ink">{course.name}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-ink-soft sm:text-base">{presentation.shortDescription}</p>
                  <Link href={`/courses/${slug}`} className="mt-auto inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-teal underline decoration-sea-edge underline-offset-4 hover:text-sea-deep">
                    {presentation.ctaLabel} <ArrowIcon />
                  </Link>
                </article>
              );
            })}

            <article className="flex min-w-0 flex-col rounded-xl border border-sea-edge bg-sea-wash p-6 sm:p-7">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-teal">Enquiry-only service</p>
              <h3 className="mb-3 text-xl font-semibold tracking-[-0.015em] text-ink">Professional English</h3>
              <p className="mb-6 text-sm leading-relaxed text-ink-soft sm:text-base">{corporateEnquiry.body}</p>
              <a href={PROFESSIONAL_ENQUIRY_HREF} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-teal underline decoration-sea-edge underline-offset-4 hover:text-sea-deep">
                Discuss Your Goals <ArrowIcon />
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
