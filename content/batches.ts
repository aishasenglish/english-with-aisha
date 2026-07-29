export type BatchStatus = "Open" | "Filling Fast" | "Closed";

export type Batch = {
  id: string;
  courseSlug: string; // use "all" for all courses
  startDate: string;  // ISO date string
  status: BatchStatus;
};

// Add a new object here every 15 days when a new batch opens.
export const batches: Batch[] = [
  {
    id: "batch-001",
    courseSlug: "all",
    startDate: "2026-07-05",
    status: "Open",
  },
  {
    id: "batch-002",
    courseSlug: "ielts",
    startDate: "2026-07-20",
    status: "Open",
  },
  {
    id: "batch-003",
    courseSlug: "all",
    startDate: "2026-08-04",
    status: "Open",
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
