import { site } from "@/content/site";

/**
 * Whether `value` looks like a real, usable Formspree endpoint. Fails closed —
 * anything empty, malformed, or merely plausible is treated as "not configured"
 * rather than risking a form that silently fails on submit. See docs/updating-batches.md
 * for an unrelated but similarly-spirited "don't guess, don't invent" rule.
 */
export function isValidFormspreeEndpoint(value: string): boolean {
  if (!value || value.toUpperCase().includes("PLACEHOLDER")) return false;

  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return false;
  }

  if (url.protocol !== "https:") return false;
  if (url.hostname !== "formspree.io") return false;
  if (!/^\/f\/[^/]+\/?$/.test(url.pathname)) return false;

  return true;
}

/** Whether the site's forms currently have a working Formspree endpoint. */
export function formsAreConfigured(): boolean {
  return isValidFormspreeEndpoint(site.formspreeEndpoint);
}

/** The validated Formspree endpoint, or "" if unconfigured — never trust an unvalidated value. */
export function getFormEndpoint(): string {
  return formsAreConfigured() ? site.formspreeEndpoint : "";
}
