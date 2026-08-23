import { batches, type Batch } from "@/content/batches";
import { courses } from "@/content/courses";

/**
 * Pakistan Standard Time is a fixed UTC+5 offset with no daylight saving, so every function
 * here treats it explicitly rather than relying on the visitor's or server's local timezone —
 * that's what the "stale batch" and "date shifts a day" bugs this file fixes came from.
 */
const PAKISTAN_UTC_OFFSET = "+05:00";

/** Parses a "YYYY-MM-DD" date-only string as midnight in Pakistan time, not UTC or local time. */
export function parsePakistanDate(dateOnly: string): Date {
  return new Date(`${dateOnly}T00:00:00${PAKISTAN_UTC_OFFSET}`);
}

/** Today's calendar date in Pakistan, as "YYYY-MM-DD" — not the visitor's or server's local date. */
export function pakistanTodayDateOnly(now: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Karachi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/**
 * True once the batch's start date is strictly before today in Pakistan — regardless of its
 * stored `status`. A batch left marked "Open" after its date has passed must still be excluded.
 */
export function isPastBatch(batch: Pick<Batch, "startDate">, now: Date = new Date()): boolean {
  // Plain "YYYY-MM-DD" strings compare lexicographically in the same order as chronologically.
  return batch.startDate < pakistanTodayDateOnly(now);
}

/** Formats a "YYYY-MM-DD" date-only string unambiguously, e.g. "12 September 2026". */
export function formatBatchDate(dateOnly: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Karachi",
  }).format(parsePakistanDate(dateOnly));
}

/** The course's canonical display name from content/courses.ts, falling back to the slug itself. */
export function courseLabel(slug: string): string {
  return courses.find((c) => c.slug === slug)?.name ?? slug;
}

/** Joins the display names for a batch that covers one or more courses — never the vague "All Courses". */
export function batchCourseNames(batch: Pick<Batch, "courseSlugs">): string {
  return batch.courseSlugs.map(courseLabel).join(", ");
}

/**
 * A batch may render publicly only when it's explicitly published, not manually closed, and its
 * start date has not already passed in Pakistan time — regardless of what `status` says.
 */
function isPubliclyVisible(batch: Batch, now: Date): boolean {
  return batch.published && batch.status !== "Closed" && !isPastBatch(batch, now);
}

/**
 * Published, non-closed, non-past batches — optionally filtered to one course — sorted
 * chronologically (stable: ties keep their original array order).
 */
export function getPublishedUpcomingBatches(courseSlug?: string, now: Date = new Date()): Batch[] {
  return batches
    .filter((batch) => isPubliclyVisible(batch, now))
    .filter((batch) => !courseSlug || batch.courseSlugs.includes(courseSlug))
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export function getNextPublishedBatch(courseSlug?: string, now: Date = new Date()): Batch | undefined {
  return getPublishedUpcomingBatches(courseSlug, now)[0];
}
