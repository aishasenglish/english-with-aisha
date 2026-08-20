export type Testimonial = {
  name: string;
  result: string;
  course: string;
  quote: string;
  image: string; // filename in /public/images/testimonials/
};

// Add only testimonials Aisha has verified and has permission to publish.
export const testimonials: Testimonial[] = [];
