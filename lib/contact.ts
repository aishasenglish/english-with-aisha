import { site } from "@/content/site";

/**
 * Builds a safely encoded `mailto:` URL — never manually concatenate an unescaped multiline
 * subject/body string, since raw newlines, `&` and `?` characters would otherwise corrupt the
 * URL or truncate the message. `to` defaults to the canonical public email in content/site.ts;
 * pass it explicitly only if a genuinely different confirmed address is ever needed.
 */
export function emailLink(subject: string, body: string, to: string = site.email): string {
  // `to` is left unencoded (it's always a plain, internally-controlled address with no special
  // characters) — only the subject/body, which can contain reserved URI characters and newlines,
  // need encoding.
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
