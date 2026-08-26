# IELTS offer verification

Internal record of what the current IELTS entry in `content/courses.ts` claims as included, and
whether each claim is confirmed for the current offer. This is a maintenance document — none of
the states below are rendered on the public page, and nothing here should be read as legal advice
or as an answer on Aisha's behalf.

**Last reviewed:** IELTS Step 3.

## Claims to examine

`content/courses.ts`'s `ielts` entry currently lists these five items in `includes` (still
rendered by `components/IncludedList.tsx`, temporarily retained on `/courses/ielts` pending a
later step's verified rewrite):

| Claim | State | Notes |
|---|---|---|
| `Live Zoom classes (recorded)` | **Needs owner confirmation** | Asserts both that every lesson is live on Zoom *and* that every lesson is recorded, with no stated access window. Inherited from generic course-template data, not confirmed specifically for IELTS. |
| `Weekly practice tests` | **Needs owner confirmation** | Asserts a fixed weekly frequency for every intake. No record of this being confirmed as a standing policy rather than a general description. |
| `Full-length mock exams` | **Needs owner confirmation** | Asserts full-length mocks are included but states no quantity. Step 2's curriculum content deliberately avoided repeating this without a number attached. |
| `Personal feedback on writing & speaking` | **Needs owner confirmation** | Step 3's coaching-process and feedback-by-skill sections describe *how* feedback works in principle, but do not claim a specific frequency, turnaround time or delivery method — those remain unconfirmed. |
| `1-on-1 consultation option` | **Needs owner confirmation** | Ambiguous whether this is available to every group learner, only on request, or at extra cost. |

None of these are marked "removed from public page" — `IncludedList` still renders all five
verbatim, since Step 3's scope is the coaching-process section and this verification record, not
the inclusions rewrite (that belongs to a later step per the prompt's required page order). This
document exists so that rewrite starts from a clear list of what still needs a real answer rather
than re-treating the inherited copy as already confirmed.

## Open questions for Aisha

1. Are all IELTS lessons live on Zoom?
2. Is every lesson recorded, and for how long can students access recordings?
3. Are practice tests weekly in every intake?
4. How many full-length mocks are included, if any?
5. How often is Writing marked?
6. How is Speaking feedback delivered (live in class, recorded and reviewed, written notes, etc.)?
7. Is a one-to-one consultation included in every group programme, available on request, or a
   separate paid option?
8. What is the normal feedback turnaround time?

Until these are answered, the IELTS page's coaching-process section (Step 3) deliberately
describes the *teaching cycle* — how a lesson, practice task and feedback connect — without
stating a frequency, quantity or turnaround time for any of it. The inclusions list itself is
addressed in a later step once these answers exist.
