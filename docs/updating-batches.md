# Updating batches and availability

This document explains how to safely publish, update, or close an intake date on the website.
It is a maintenance guide, not something imported into the site itself.

## 1. Where batch records live

- **Data**: `content/batches.ts` — the `batches` array, one object per intake.
- **Logic**: `lib/batches.ts` — date parsing, timezone handling, and the filtering/sorting
  functions every page uses to decide what's shown. Don't duplicate this logic elsewhere.
- **Display**: `components/BatchTable.tsx` — renders whatever `lib/batches.ts` returns. It's used
  on the homepage, `/batches`, and each course page (filtered to that one course there).

## 2. Required fields

Every entry in `content/batches.ts` must satisfy the `Batch` type:

| Field | Required | Notes |
|---|---|---|
| `id` | yes | Any stable, unique string. |
| `courseSlugs` | yes | An array of one or more slugs from `content/courses.ts`. Never a vague "all" — list the actual courses this intake covers. |
| `startDate` | yes | `"YYYY-MM-DD"`, a Pakistan calendar date. |
| `status` | yes | `"Open"`, `"Filling Fast"`, or `"Closed"` — a manual business decision, never inferred from the date. |
| `format` | yes | `"Live Online Group"` or `"One-to-One"`. |
| `duration` | optional | Only fill this in once actually confirmed — leave it out rather than guessing. |
| `schedule` | optional | e.g. days/times, only once confirmed. |
| `timezone` | yes | Always the literal `"Asia/Karachi"`. |
| `published` | yes | The public gate — see below. |
| `verifiedAt` | yes | `"YYYY-MM-DD"` — the date someone last checked this record was accurate. |

## 3. The Pakistan timezone rule

All date comparisons and displayed dates use `Asia/Karachi` (PKT, GMT+5, no daylight saving) —
never the visitor's or server's local timezone. This is handled entirely inside `lib/batches.ts`;
you don't need to do anything special when entering a `startDate` beyond writing the correct
Pakistan calendar date as `"YYYY-MM-DD"`.

## 4. How to publish a confirmed batch

1. Add a new object to the `batches` array in `content/batches.ts` (or edit an existing one).
2. Set `published: true` only once the date, format, and any duration/schedule are actually
   confirmed — not provisional or likely.
3. Set `status: "Open"`.
4. Set `verifiedAt` to today's date.
5. Run `npm run lint` and `npm run build`, then check the site (see section 7).

A batch only appears publicly once **all** of these are true: `published: true`, `status` is not
`"Closed"`, and `startDate` is today or later in Pakistan time.

## 5. How to mark a batch "Filling Fast" or "Closed"

Edit the `status` field on the existing entry:

- `"Filling Fast"` — a manual call when a batch is genuinely close to full. Never set
  automatically based on how close the start date is.
- `"Closed"` — for a batch that's no longer taking enrolments, whether or not its date has
  passed. A closed batch never appears in any upcoming list, regardless of its date.

Update `verifiedAt` to today's date whenever you change `status`.

## 6. How past-date exclusion works

`lib/batches.ts` computes "today" using Pakistan's calendar date (via `Intl.DateTimeFormat` with
`timeZone: "Asia/Karachi"`), not the visitor's or server's local date. Any batch whose `startDate`
is before that date is excluded from every upcoming list automatically — **even if its `status`
is still `"Open"`**. You never need to manually close a batch just because its date passed,
though setting `status: "Closed"` afterwards keeps the record's own history accurate.

## 7. How to verify the website after editing

1. `npm run lint`
2. `npm run build`
3. Run the dev server (`npm run dev`) and check:
   - The homepage's "Upcoming live online intakes" section shows the new entry (or, if it's the
     only one, that the fallback disappears).
   - `/batches` shows it too.
   - The relevant course page (e.g. `/courses/ielts`) shows it if that course is in
     `courseSlugs`.
   - The date reads correctly (e.g. "12 September 2026") and PKT is mentioned nearby.
   - The "Ask About This Intake" WhatsApp link opens with the programme name and date filled in.

## 8. Never generate a future date from an assumed recurrence

Do not add a new batch by extrapolating from a pattern (e.g. "the last one was 15 days ago, so
the next one must be..."). Every `startDate` must come from a real, confirmed schedule. If no
confirmed date exists yet, leave the array without an upcoming entry for that course — the
website's fallback ("Ask about the next available intake") is the honest state, not a guess.

## 9. Keep `verifiedAt` current

Update `verifiedAt` to today's date whenever you check that a record's information (date, status,
format, duration, schedule) is still accurate — not just when you first create it. A stale
`verifiedAt` is a signal to double-check the entry before trusting it.

## 10. Commands

```bash
npm run lint
npm run build
```

Both should run clean before publishing a change to batch data.

---

## Example record (not production data)

The following is a fully worked example for reference only. **Do not add this object to the
`batches` array in `content/batches.ts`.**

```ts
{
  id: "example-2026-09-ielts",
  courseSlugs: ["ielts"],
  startDate: "2026-09-15",
  status: "Open",
  format: "Live Online Group",
  duration: "8 Weeks",
  schedule: "Mon/Wed/Fri, 7:00–8:30 PM PKT",
  timezone: "Asia/Karachi",
  published: true,
  verifiedAt: "2026-08-24",
}
```
