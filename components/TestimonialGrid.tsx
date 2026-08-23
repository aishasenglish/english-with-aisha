import { publishedTestimonials } from "@/content/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialGrid() {
  if (publishedTestimonials.length === 0) {
    return (
      <div className="text-center max-w-xl mx-auto py-8">
        <h2 className="font-serif text-xl sm:text-2xl font-medium text-ink mb-3">
          Student stories will be added after publication permission is confirmed.
        </h2>
        <p className="text-muted leading-relaxed">
          Aisha publishes learner and parent feedback only with permission. No sample or
          generated testimonials are shown.
        </p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {publishedTestimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}
