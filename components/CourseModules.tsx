import { Course } from "@/content/courses";

type Props = {
  course: Course;
};

export default function CourseModules({ course }: Props) {
  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-8">
          What you&apos;ll learn
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {course.modules.map((module, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-white rounded-md p-4 border border-stone"
            >
              <div className="w-8 h-8 rounded-md bg-teal/10 flex items-center justify-center shrink-0">
                <span className="text-teal font-medium text-sm">{i + 1}</span>
              </div>
              <p className="text-charcoal font-medium text-sm leading-relaxed">{module}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
