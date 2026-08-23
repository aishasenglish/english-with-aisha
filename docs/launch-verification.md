# Launch verification

Items an implementation agent cannot resolve alone — they need Aisha's (or the site owner's)
direct confirmation, legal review, or a real account/URL before the site should carry paid
traffic, run ads, or start a mailing list. This is an implementation inventory, not legal advice.

## High priority — before paid advertising or mailing-list collection

### Privacy policy and terms of service

The site collects personal enquiry data (name, email, WhatsApp number, and — depending on the
form — the learner's programme, current level/score, country/time zone, and free-text context)
through Formspree-backed forms (`components/ContactForm.tsx`, `components/DiagnosticForm.tsx` —
see `lib/forms.ts`). There is currently **no `/privacy` or `/terms` page**, and none has been
added by this step: generating legal policy text from assumptions is out of scope for an
implementation agent and could create a false sense of compliance.

**Action needed:** Aisha (or a lawyer/legal reviewer she engages) should approve real privacy and
terms content — covering at minimum what's collected, why, how long it's kept, and that Formspree
is the third-party processor — before:
- running paid advertising that sends traffic to a form,
- collecting for a mailing list or newsletter (none exists yet — see `content/leadCapture.ts`'s
  note that Step 11 deliberately did not add one),
- adding any analytics or tracking script (see `.env.example` — `NEXT_PUBLIC_GA_ID`,
  `NEXT_PUBLIC_CLARITY_ID`, `NEXT_PUBLIC_META_PIXEL_ID` are all currently unset placeholders for
  future services, not yet wired up).

Once approved pages exist at `/privacy` and `/terms`, link them from `components/Footer.tsx` and
add both routes to `app/sitemap.ts`.

### Known third-party data processor

- **Formspree** (`formspreeEndpoint` in `content/site.ts`, validated by `lib/forms.ts`) — receives
  whatever a visitor submits through the contact or recommendation-request form. No endpoint is
  currently configured (see `.env.example`), so no data is actually being sent anywhere yet.

## Contact details — verify before relying on them publicly

- **Email**: `content/site.ts`'s `email` field is set to `aishasenglish@gmail.com`, per Aisha's
  explicit confirmation during Step 12. Every rendered `mailto:` link and visible email address
  is built from this one value.
- **WhatsApp number**: `content/site.ts`'s `whatsapp.display` / `whatsapp.intl`
  (`0311-2233671` / `923112233671`) were already in place before Step 12 and were treated as an
  existing, owner-supplied contact rather than altered — reconfirm this is still the correct
  number to publish before launch.
- **City / time zone**: `Lahore, Pakistan` / `PKT (GMT+5)` — likewise pre-existing and left
  unchanged.
- **Credentials**: `MPhil in English Literature`, `IDP-Certified IELTS Trainer`,
  `Corporate Trainer` — pre-existing, left unchanged. Confirm these remain accurate.

## Social accounts

`content/site.ts`'s `socials` block is currently all empty strings (no icons render in the footer
— see `lib/social.ts`, which also rejects anything that isn't a real `https://` URL on the
expected platform domain). Add a real profile URL per platform only once Aisha confirms the
handle; never fill these with placeholder or invented links.

## Flagged during Step 12, not fixed (out of this step's scope)

- **`components/PricingCard.tsx`** labels every course's price "One-time fee" (shown on the
  IELTS, PTE, TOEFL, Writing and Spoken English pricing cards). `content/faqs.ts` was corrected
  in Step 12 to stop asserting a single universal billing model in the FAQ, but this same claim
  is still live in a more prominent place — directly next to the price on five course pages.
  `content/courses.ts`'s `Course` type has no field recording billing model per programme, so
  this can't be verified from the codebase alone. Confirm with Aisha whether every course is
  genuinely billed as a one-time fee before leaving this label as-is, or change it to something
  that doesn't assert a billing model that hasn't been confirmed.

## Lower priority — noted, not blocking

- **Spelling consistency**: newer content (Steps 4–12) consistently uses British spelling
  (`programme`, `enrol`/`enrolment`). A few older, out-of-scope files still use American spelling
  in code identifiers and copy (e.g. `lib/whatsapp.ts`'s `courseEnrollLink` function name,
  `components/PricingCard.tsx`'s "Enroll via WhatsApp" button, `app/batches/page.tsx`'s
  `enrollSteps`/"How to enroll", `README.md`'s "enrollment"). Left untouched by Step 12 — renaming
  a shared function identifier and its call sites is a larger refactor than the "small correction"
  scope this step allows.
- **O & A Level page**: `app/courses/o-a-level-english/page.tsx` still describes the founder as
  "MA English Literature" (metadata, JSON-LD `jobTitle`, visible copy) and an unverified "10+
  years" of experience — flagged already in Step 7, still outstanding.
- **`app/courses/ielts/page.tsx`** metadata description also still says "MA English Literature" —
  also flagged in Step 7.
