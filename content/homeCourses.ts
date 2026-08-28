import type { CourseSlug } from "@/content/coursePresentation";

/**
 * Homepage-only concerns for components/CourseExplorer.tsx: the display order for its card
 * grid (independent of content/courses.ts's own declaration order and of
 * content/courseCategories.ts's Courses-hub grouping) and the one field genuinely specific to
 * that section — its delivery-format line. Shared card copy (description, best-for, focus, CTA
 * label, WhatsApp message) lives once in content/coursePresentation.ts and is reused here rather
 * than duplicated.
 */
export const HOME_COURSE_ORDER: CourseSlug[] = [
  "o-a-level-english",
  "ielts",
  "spoken-english",
  "pte",
  "toefl",
  "english-writing",
];

export const DEFAULT_DELIVERY_LINE = "Live online · Group or one-to-one · Recordings included";

/** Only set where the shared default line would overstate what a course's canonical
 *  content/courses.ts `includes` list actually offers. */
export const HOME_COURSE_DELIVERY: Partial<Record<CourseSlug, string>> = {
  // Course data lists small-group batches only (max 8 students) with no individual option, so
  // the shared "Group or one-to-one" line would overstate the current offering for this course.
  "o-a-level-english": "Live online · Small-group classes · Recordings included",
  // PTE Step 10: the shared default line claims live delivery, group/one-to-one availability and
  // recordings, none of which is owner-confirmed for PTE (see docs/pte-offer-verification.md's
  // "Delivery platform" / "Live/asynchronous format" / "Group availability" / "Recording
  // availability" rows, all "Needs owner confirmation"). Overridden with wording consistent with
  // the verified Step 5 learning-format section instead of asserting an unconfirmed format.
  pte: "Online coaching · Confirm current format and support",
  // TOEFL Step 1: same reasoning as PTE above -- no TOEFL-specific record verifies live delivery,
  // group/one-to-one availability or recordings (see docs/toefl-offer-verification.md, where
  // every one of those rows is "Needs owner confirmation").
  toefl: "Online coaching · Confirm current format and support",
  // Spoken English Step 1: same reasoning as PTE/TOEFL above -- no Spoken English-specific record
  // verifies live delivery, group/one-to-one availability or recordings (see
  // docs/spoken-english-offer-verification.md, where every one of those rows is "Needs owner
  // confirmation").
  "spoken-english": "Online coaching · Confirm current format and support",
  // English Writing Step 1: same reasoning as PTE/TOEFL/Spoken English above -- no English
  // Writing-specific record verifies live delivery, group/one-to-one availability or recordings
  // (see docs/english-writing-offer-verification.md, where every one of those rows is
  // "Unverified — do not publish").
  "english-writing": "Online coaching · Confirm current format and support",
};

// The homepage's compact corporate-training panel reuses the same shared, deliberately-hedged
// enquiry copy as the Courses hub's fuller CorporateEnquiryPanel — see content/courseGuidance.ts.
// Re-exported here under the name this file's existing consumer (CourseExplorer.tsx) already
// imports, so its own compact single-row layout didn't need to change.
export { corporateEnquiry as corporatePanel } from "@/content/courseGuidance";
