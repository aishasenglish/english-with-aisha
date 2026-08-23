import Image from "next/image";
import { courses } from "@/content/courses";
import type { Testimonial } from "@/content/testimonials";

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
  const course = testimonial.courseSlug
    ? courses.find((c) => c.slug === testimonial.courseSlug)
    : undefined;

  return (
    <figure className="flex flex-col gap-3 bg-white border border-stone rounded-md p-5 sm:p-6">
      {testimonial.outcome && (
        <p className="text-xs font-semibold uppercase tracking-wide text-teal">
          {testimonial.outcome}
        </p>
      )}

      <span className="font-serif text-3xl text-sea-edge leading-none" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className="text-base text-charcoal leading-relaxed flex-1 m-0">
        {testimonial.quote}
      </blockquote>

      <figcaption className="flex items-center gap-3 pt-4 mt-1 border-t border-stone">
        {testimonial.image && (
          <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
            <Image
              src={`/images/testimonials/${testimonial.image}`}
              alt={testimonial.displayName}
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
        )}
        <div>
          <cite className="not-italic font-serif font-medium text-ink text-sm block">
            {testimonial.displayName}
          </cite>
          <p className="text-ink-soft text-xs mt-0.5">
            {testimonial.context}
            {course ? ` · ${course.name}` : ""}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
