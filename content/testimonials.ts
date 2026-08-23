export type TestimonialAudience = "student" | "parent" | "professional";

export type TestimonialEvidenceType =
  | "written-feedback"
  | "score-report"
  | "grade-result"
  | "parent-feedback"
  | "professional-feedback";

export type Testimonial = {
  id: string;
  /** Only the display format explicitly approved by the person (full name, first name + initial, "Parent of an O Level student", etc.). */
  displayName: string;
  audience: TestimonialAudience;
  /** e.g. "Parent of an O Level student", "IELTS learner, Lahore" */
  context: string;
  /** Matches a slug in content/courses.ts when the story is tied to a specific programme. */
  courseSlug?: string;
  /** The original approved statement — never generated or paraphrased. */
  quote: string;
  /** Only set when a specific, evidence-backed result was supplied. Never inferred or estimated. */
  outcome?: string;
  evidenceType: TestimonialEvidenceType;
  /** Filename only, resolved against /public/images/testimonials/. Omit unless a photo was approved. */
  image?: string;
  /** Set true to include this entry in the homepage's curated (max 3) selection. */
  featured?: boolean;
  /** Must be true, on record, before this entry can render anywhere on the public site. */
  consentConfirmed: boolean;
};

// Add only testimonials Aisha has supplied or approved for publication, with consentConfirmed
// explicitly set to true once permission is on record. See docs/testimonial-content-intake.md
// for the intake template. Do not add placeholder, generated or paraphrased entries here —
// see the Step 8 implementation prompt's non-negotiable evidence rule.
export const testimonials: Testimonial[] = [];

/** The only entries the public website may render — everything else is silently excluded. */
export const publishedTestimonials: Testimonial[] = testimonials.filter(
  (testimonial) => testimonial.consentConfirmed
);

export const HOMEPAGE_TESTIMONIAL_LIMIT = 3;

/**
 * Curated homepage subset: consent-confirmed AND explicitly featured, in stable array order
 * (not randomised). Preferred mix when available: one O/A Level story, one exam-preparation
 * story, one spoken/writing/professional story — see the Step 8 prompt for the full guidance.
 */
export const homepageTestimonials: Testimonial[] = publishedTestimonials
  .filter((testimonial) => testimonial.featured)
  .slice(0, HOMEPAGE_TESTIMONIAL_LIMIT);
