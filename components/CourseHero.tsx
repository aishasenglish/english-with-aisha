import Button from "./Button";
import { Course } from "@/content/courses";
import { courseEnrollLink } from "@/lib/whatsapp";

type Props = {
  course: Course;
};

export default function CourseHero({ course }: Props) {
  return (
    <section className="bg-white text-ink py-12 sm:py-16 lg:py-20 px-4 border-b border-line">
      <div className="max-w-4xl mx-auto text-center">
        {course.badge && (
          <span className="inline-block bg-sea-wash text-sea-deep text-sm font-medium px-4 py-1 rounded-sm mb-4">
            {course.badge}
          </span>
        )}
        <h1 className="font-serif text-[2rem] sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.08] tracking-[-0.02em]">
          {course.tagline}
        </h1>
        <p className="text-ink-soft text-lg mb-3">Who this is for:</p>
        <ul className="text-ink-soft text-sm sm:text-base space-y-2 mb-8 max-w-2xl mx-auto">
          {course.whoFor.map((w, i) => (
            <li key={i} className="flex items-start gap-2 text-left sm:justify-center">
              <svg className="w-5 h-5 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {w}
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center">
          <Button href="/free-diagnostic-test" variant="coral" size="lg" className="w-full sm:w-auto">
            Request a Free Recommendation
          </Button>
          <Button
            href={courseEnrollLink(course.name)}
            variant="outline"
            size="lg"
            external
            className="border-ink text-ink hover:bg-ink hover:text-white w-full sm:w-auto"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
