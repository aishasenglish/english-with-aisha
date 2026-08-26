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

## 9. IELTS-specific publication rules (Step 7)

`/courses/ielts` no longer uses the shared `<BatchTable>` fallback —
`components/ielts/IELTSAvailability.tsx` reads `getPublishedUpcomingBatches("ielts")` directly and
applies stricter rules on top of the general ones above:

- **`duration` and `schedule` are required, not optional, for an IELTS record to display.** A
  record missing either is filtered out by `isCompleteIeltsIntake()` and never rendered — not
  shown with a "TBA" or "To be confirmed" placeholder. If you don't yet know the schedule, leave
  the record unpublished (or `duration`/`schedule` empty); the page will correctly show its
  no-intake enquiry state instead of an incomplete card.
- **`Filling Fast` requires `statusVerifiedAt`.** Set this to today's date whenever you manually
  confirm that remaining capacity genuinely justifies the scarcity wording — never infer it from
  how close the start date is. If `statusVerifiedAt` is missing, `IELTSAvailability` silently
  displays the record as the neutral `Open` instead of an unverified scarcity claim. Re-verify and
  update `statusVerifiedAt` periodically — there's no automatic expiry, so it's on you (or
  whoever maintains this data) to keep it current and downgrade the status manually once
  capacity is no longer tight.
- **No future date may be inferred from previous dates.** Do not add a new IELTS batch by
  extrapolating from the spacing between the closed historical records already in this file —
  every `startDate` must come from a real, confirmed schedule (this restates rule 8 above, which
  applies to every course, not just IELTS).
- **One-to-one availability is not modelled by this file.** `content/batches.ts`'s `Batch` type
  and `IELTSAvailability` only ever represent scheduled group intakes. Do not add a batch record
  to imply one-to-one IELTS coaching is available — that would need a separate, explicitly
  owner-confirmed data source (format availability, scheduling method, fee, capacity) that
  doesn't exist yet. See `docs/ielts-offer-verification.md`.
- **No published intake means the enquiry state renders, and that state does not link to
  `/batches`.** A link to another page showing the same "nothing scheduled" information would
  send the candidate in a conversion loop. `IELTSAvailability` only links to `/batches` when more
  than 3 complete, published, non-past IELTS records genuinely exist, so a visitor is never sent
  to a page with no additional relevant IELTS information.
- **Sending an enquiry is never described as a reservation.** Both the no-intake and scheduled
  states are careful not to imply "join the next batch," "reserve my seat," or a waitlist — none
  of those exist as real, consent-managed systems on this site.
- **Same-day starts:** this codebase does not automatically treat a batch starting today as still
  open. `isPubliclyVisible()` in `lib/batches.ts` only excludes a batch once its `startDate` is
  strictly *before* today in Pakistan time, so a same-day batch would still show unless you
  manually set `status: "Closed"` or `published: false` once same-day enrolment is no longer
  accepted. There is no automated same-day cutoff — treat this as a manual daily check on the
  morning of a start date, not a rule the code enforces for you.
- **Expired records are not duplicated with a guessed follow-up date.** Once a batch's date
  passes, leave it in the array (unpublished, closed, for history — as the three existing
  examples already are) rather than replacing it with a new record with an invented date.

## 10. Keep `verifiedAt` current

Update `verifiedAt` to today's date whenever you check that a record's information (date, status,
format, duration, schedule) is still accurate — not just when you first create it. A stale
`verifiedAt` is a signal to double-check the entry before trusting it.

## 11. Commands

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

To mark a genuinely verified "Filling Fast" IELTS record, also set `statusVerifiedAt` (see rule 9
above and the field comment in `content/batches.ts`) — e.g. `status: "Filling Fast"` alongside
`statusVerifiedAt: "2026-08-24"`. Without `statusVerifiedAt`, `IELTSAvailability` displays the
record as `Open` regardless of what `status` says.
