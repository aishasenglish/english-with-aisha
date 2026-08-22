export type Testimonial = {
  name: string;
  result: string;
  course: string; // must match a Course.name in content/courses.ts
  quote: string;
  image?: string; // filename in /public/images/testimonials/ — omit to show initials instead
  date?: string; // e.g. "July 2026" — always show the month on real testimonials
  screenshot?: string; // path to a redacted official-result screenshot
};

// Add only testimonials Aisha has verified and has permission to publish.
export const testimonials: Testimonial[] = [];
