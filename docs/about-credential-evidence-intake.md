# About-page credential evidence intake

An internal maintenance template — not a public page, and not legal or professional advice. Use
this to collect and review evidence for any credential proposed for public use (About page,
homepage preview, or any programme authority strip) **before** it is added to
`content/about.ts`'s `publicCredentials` array or published anywhere else.

**No proposed credential moves into `content/about.ts` until every relevant field below is
complete and Aisha has approved the exact public wording.** Existing use of a claim elsewhere in
this repository is never itself evidence — see `docs/about-credentials-verification.md`.

Copy the template below into a new dated entry each time a credential is proposed. Keep completed
entries in this file (or a dated appendix) as a permanent record of what was reviewed and when.

## Template

### Claim details

- Proposed public label:
- Credential category: `academic-qualification` / `professional-role` / `additional-training`
  (per `content/about.ts`'s `PublicCredentialCategory`)
- Exact title on source document:
- Issuer:
- Recipient name:
- Date issued/completed:
- Expiry date/status:
- Credential/verification ID:
- Public verification URL:
- Scope/subject:
- Current relevance:
- Programme(s) where relevant (e.g. an IELTS-specific credential is IELTS-only — it must never be
  presented as evidence for PTE, TOEFL, Spoken English, English Writing or school-English):

### Evidence and approval

- Source file/path or external record:
- Evidence reviewed by:
- Date reviewed:
- Exact public wording approved by Aisha:
- Approved page locations:
- Issuer-logo permission confirmed: yes / no / not applicable
- Certificate-image publication approved: yes / no
- Redacted derivative prepared: yes / no / not required
- Accessibility alt/caption approved:
- Recheck date:

### Safety review

- Personal address removed:
- Date of birth removed:
- National identity/passport number removed:
- Signature removed or approved:
- Student/employee number removed:
- QR/barcode checked for embedded personal data:
- Credential ID publication appropriate:
- Third-party personal data removed:
- Document metadata stripped where appropriate:
- Copyright/issuer terms checked:

**Do not store secret or highly sensitive evidence in `public/` merely to complete this template.**
The original source document stays outside the public web directory and outside version control
unless a separate, explicit project policy says otherwise. A redacted derivative is created only
when publication is genuinely useful and every safety-review field above is satisfied.

## Certificate/document privacy and security checklist

If Aisha supplies a degree or certificate image for a proposed `additional-training` credential:

1. Keep the original outside `public/` and outside version control.
2. Inspect it for personal identifiers and third-party data (see the safety review above).
3. Create a reviewed, redacted derivative only when publication is genuinely useful and
   authorised.
4. Strip unnecessary file metadata (EXIF, author, embedded comments) before any derivative is
   even considered for `public/`.
5. Never expose a high-resolution original that could enable identity misuse.
6. Never publish a signature, home address, date of birth, national ID, roll number, QR code or
   private verification token.
7. Never invent, redraw or recreate an issuer seal/logo.
8. Record exactly what was redacted and why, in this file.
9. Prefer a text-only credential card (label + issuer + context, per `content/about.ts`'s
   `PublicCredential` type) whenever document publication would add more risk than trust — this
   is the default, safe presentation, and is sufficient for every credential on this site today.

If a public issuer verification URL exists, link to it only after confirming:

- it is HTTPS (`isSafeCredentialVerificationUrl()` in `content/about.ts` mechanically rejects
  anything else, but that check alone is not a substitute for this review);
- it does not reveal unnecessary personal data;
- it is stable and genuinely intended for public verification;
- the displayed title matches the approved public wording exactly;
- the link does not require a visitor to submit private information to use it.

## How a reviewed, approved credential gets published

Once every field above is complete and Aisha has approved the exact public wording:

1. Add one complete record to `content/about.ts`'s `publicCredentials` array with
   `category: "additional-training"`, the approved `label`, a learner-relevant `context`,
   `issuedBy`, and a non-empty `programmeScope` array naming exactly which programme(s) it may be
   described alongside.
2. `isPublishableCredential()` will only accept the record once `label`, `context`, `issuedBy`
   and a non-empty `programmeScope` are all present — an incomplete record silently fails closed
   and never renders as an empty or "pending" card.
3. `components/about/AboutCredentials.tsx` and the homepage `components/AboutAisha.tsx` preview
   both read the same `publicCredentials` array, so the new credential appears consistently in
   both places automatically — no separate homepage-specific copy to keep in sync.
4. If the credential is programme-specific (e.g. IELTS-only), do **not** add it to any shared,
   general-purpose credential source (`content/site.ts`'s `credentials`/`credentialsList`) — only
   the relevant programme's own authority-strip component may reference it, scoped exactly as
   `programmeScope` records.
5. Update `docs/about-credentials-verification.md` with the new claim's final status, exact public
   wording, source/evidence reference, approved page locations and date reviewed.

## Currently proposed credentials (none complete)

| Proposed label | Category | Status | Notes |
|---|---|---|---|
| IDP-Certified IELTS Trainer | additional-training | Incomplete — no issuer, exact title, evidence file or owner-approved wording on record | See `docs/about-credentials-verification.md`'s open questions. Removed from `components/ielts/IELTSAuthorityStrip.tsx` during About Step 2 pending this intake. |
| Corporate Trainer | additional-training (or a differently-labelled category once scope is confirmed) | Incomplete — no scope, client type, dates or evidence on record | See `docs/about-credentials-verification.md`'s open questions. Not currently referenced by any component. |

Neither row above is a `publicCredentials` entry — they are proposals awaiting the evidence and
approval this template requires.
