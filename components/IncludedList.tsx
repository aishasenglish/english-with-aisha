import { Course } from "@/content/courses";

type Props = {
  course: Course;
};

export default function IncludedList({ course }: Props) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-8">
          What&apos;s included
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {course.includes.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-charcoal text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
