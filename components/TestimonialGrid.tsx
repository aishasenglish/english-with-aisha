import { testimonials } from "@/content/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialGrid() {
  if (testimonials.length === 0) {
    return (
      <p className="text-muted text-center py-8">
        Testimonials coming soon. Check back after the first batches complete!
      </p>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <TestimonialCard key={i} testimonial={t} />
      ))}
    </div>
  );
}
