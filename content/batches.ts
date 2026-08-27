export type BatchStatus = "Open" | "Filling Fast" | "Closed";
export type BatchFormat = "Live Online Group" | "One-to-One";

export type Batch = {
  id: string;
  /** One or more slugs from content/courses.ts this batch applies to — never a vague "all". */
  courseSlugs: string[];
  /** "YYYY-MM-DD", a Pakistan calendar date — see lib/batches.ts for parsing/formatting. */
  startDate: string;
  /** Manual business status. Never inferred from proximity to the start date. */
  status: BatchStatus;
  format: BatchFormat;
  /** Only set once actually confirmed — do not fill in a placeholder to satisfy the type. */
  duration?: string;
  schedule?: string;
  timezone: "Asia/Karachi";
  /** Must be true for this entry to ever be eligible for public display — see lib/batches.ts. */
  published: boolean;
  /** "YYYY-MM-DD" — when this record was last checked against reality. Update it when you verify. */
  verifiedAt: string;
  /**
   * "YYYY-MM-DD" — required alongside `status: "Filling Fast"` on any published record shown by a
   * programme's specialist availability component (see components/ielts/IELTSAvailability.tsx,
   * components/pte/PTEAvailability.tsx and components/toefl/TOEFLAvailability.tsx). "Filling Fast"
   * is a scarcity claim, so it must carry its own recent, manual verification date separate from
   * `verifiedAt`'s general accuracy check — never inferred from proximity to `startDate`. If
   * absent, those components display the record as the neutral "Open" instead of rendering an
   * unverified scarcity claim. The repository has no enforceable freshness window for how "recent"
   * this date must remain — a present-but-old `statusVerifiedAt` still displays as "Filling Fast"
   * until a maintainer manually re-verifies or downgrades it; see docs/updating-batches.md.
   */
  statusVerifiedAt?: string;
};

// See docs/updating-batches.md for how to add, publish, or close a batch record.
//
// These three entries are historical: their start dates have passed, so they are closed and
// unpublished rather than deleted (a small archive), per Step 10's "don't invent, don't delete"
// rule. No future batch has been supplied yet, so there is currently nothing upcoming to publish.
export const batches: Batch[] = [
  {
    id: "batch-001",
    courseSlugs: ["ielts", "pte", "toefl", "english-writing", "spoken-english", "o-a-level-english"],
    startDate: "2026-07-05",
    status: "Closed",
    format: "Live Online Group",
    duration: "6 Weeks",
    timezone: "Asia/Karachi",
    published: false,
    verifiedAt: "2026-08-24",
  },
  {
    id: "batch-002",
    courseSlugs: ["ielts"],
    startDate: "2026-07-20",
    status: "Closed",
    format: "Live Online Group",
    duration: "8 Weeks",
    timezone: "Asia/Karachi",
    published: false,
    verifiedAt: "2026-08-24",
  },
  {
    id: "batch-003",
    courseSlugs: ["ielts", "pte", "toefl", "english-writing", "spoken-english", "o-a-level-english"],
    startDate: "2026-08-04",
    status: "Closed",
    format: "Live Online Group",
    duration: "6 Weeks",
    timezone: "Asia/Karachi",
    published: false,
    verifiedAt: "2026-08-24",
  },
];
