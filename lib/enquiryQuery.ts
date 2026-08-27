import { ieltsFormVariant } from "@/content/ieltsEnquiry";
import { pteFormVariant } from "@/content/pteEnquiry";
import { toeflFormVariant } from "@/content/toeflEnquiry";

/**
 * Resolves `app/free-diagnostic-test/page.tsx`'s `?programme=...&source=...` query values against
 * a fixed allowlist rather than trusting arbitrary query text — an untrusted query string must
 * never flow into form values or markup directly (see IELTS Step 9's Part D). Add a new entry
 * here (never inline in the page) before any component may treat a new query value as trusted.
 */

export type EnquirySource = "homepage" | "courses-hub" | "ielts-page" | "pte-page" | "toefl-page" | "general";

const ALLOWED_SOURCES: readonly EnquirySource[] = [
  "homepage",
  "courses-hub",
  "ielts-page",
  "pte-page",
  "toefl-page",
  "general",
];

/** Resolves a raw `source` query value to a known, non-sensitive label — never the raw string. */
export function resolveEnquirySource(raw: string | string[] | undefined): EnquirySource {
  const value = Array.isArray(raw) ? raw[0] : raw;
  return (ALLOWED_SOURCES as readonly string[]).includes(value ?? "") ? (value as EnquirySource) : "general";
}

export type EnquiryVariant = "general" | "ielts" | "pte" | "toefl";

/** One allowlisted `programme` query key mapped to its real public programme name and variant.
 *  Only the exact key "toefl" maps to the TOEFL variant — "toefl-essentials"/"toefl-itp" (or any
 *  other unrecognised value) fall through to the general form, never selecting this variant. */
const PROGRAMME_QUERY_MAP: Record<string, { programmeName: string; variant: EnquiryVariant }> = {
  ielts: { programmeName: ieltsFormVariant.programmeName, variant: "ielts" },
  pte: { programmeName: pteFormVariant.programmeName, variant: "pte" },
  toefl: { programmeName: toeflFormVariant.programmeName, variant: "toefl" },
};

/**
 * Resolves a raw `programme` query value to a real, allowlisted programme name and form variant.
 * An unrecognised or missing value falls back to the general form (the visitor picks a
 * programme themselves) rather than guessing or passing the raw text through.
 */
export function resolveProgrammeQuery(
  raw: string | string[] | undefined
): { initialProgramme?: string; variant: EnquiryVariant } {
  const value = Array.isArray(raw) ? raw[0] : raw;
  const match = value ? PROGRAMME_QUERY_MAP[value] : undefined;
  if (!match) return { variant: "general" };
  return { initialProgramme: match.programmeName, variant: match.variant };
}
