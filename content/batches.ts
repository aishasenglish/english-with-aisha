export type BatchStatus = "Open" | "Filling Fast" | "Closed";

export type Batch = {
  id: string;
  courseSlug: string; // use "all" for all courses
  startDate: string;  // ISO date string
  status: BatchStatus;
  duration: string; // TODO: placeholder — confirm actual batch length per course
};

// ⚠️ Add the next batch on the 1st and 15th of every month, then redeploy.
// The "new batch every 15 days" claim on the homepage depends on this file
// being current. BatchTable/nextBatch() already filter out past dates, but
// on a statically-built page that filter only re-runs when the page
// revalidates (see `export const revalidate` on pages that render
// <BatchTable />) — so stale entries can still show as "Open" between
// deploys if this file isn't kept ahead of the calendar.
// TODO(aisha): confirm these placeholder dates/durations are correct.
export const batches: Batch[] = [
  {
    id: "batch-004",
    courseSlug: "all",
    startDate: "2026-09-01",
    status: "Open",
    duration: "6 Weeks",
  },
  {
    id: "batch-005",
    courseSlug: "ielts",
    startDate: "2026-09-15",
    status: "Open",
    duration: "8 Weeks",
  },
  {
    id: "batch-006",
    courseSlug: "all",
    startDate: "2026-10-01",
    status: "Open",
    duration: "6 Weeks",
  },
];

export function courseLabel(slug: string): string {
  const labels: Record<string, string> = {
    all: "All Courses",
    ielts: "IELTS Preparation",
    pte: "PTE Academic",
    toefl: "TOEFL iBT",
    "english-writing": "English Writing Mastery",
    "spoken-english": "Spoken English & Fluency",
    "o-a-level-english": "O & A Level English",
  };
  return labels[slug] ?? slug;
}

export function nextBatch(): Batch | undefined {
  const today = new Date();
  return batches
    .filter((b) => b.status !== "Closed" && new Date(b.startDate) >= today)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())[0];
}
