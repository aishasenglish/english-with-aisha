import Button from "./Button";
import { Course } from "@/content/courses";
import { whatsappLink, courseEnrollLink } from "@/lib/whatsapp";

type Props = {
  course: Course;
};

export default function CourseHero({ course }: Props) {
  return (
    <section className="bg-white text-ink pt-28 pb-16 lg:pt-36 lg:pb-20 px-4 border-b border-line">
      <div className="max-w-4xl mx-auto text-center">
        {course.badge && (
          <span className="inline-block bg-sea-wash text-sea-deep text-sm font-semibold px-4 py-1 rounded-full mb-4">
            {course.badge}
          </span>
        )}
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {course.tagline}
        </h1>
        <p className="text-ink-soft text-lg mb-3">Who this is for:</p>
        <ul className="text-ink-soft text-base space-y-1 mb-8">
          {course.whoFor.map((w, i) => (
            <li key={i} className="flex items-start gap-2 justify-center">
              <svg className="w-5 h-5 text-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {w}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/free-diagnostic-test" variant="coral" size="lg">
            Take the Free Diagnostic Test
          </Button>
          <Button
            href={courseEnrollLink(course.name)}
            variant="outline"
            size="lg"
            external
            className="border-ink text-ink hover:bg-ink hover:text-white"
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
