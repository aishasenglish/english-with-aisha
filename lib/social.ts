/**
 * Validates social profile URLs before Footer.tsx renders an icon for them, and builds the
 * human-readable accessible name for each. Fails closed — an empty, malformed, non-https or
 * off-platform URL simply never renders, rather than linking somewhere unverified.
 */

const PLATFORM_HOSTS: Record<string, string[]> = {
  youtube: ["youtube.com", "www.youtube.com", "youtu.be"],
  instagram: ["instagram.com", "www.instagram.com"],
  tiktok: ["tiktok.com", "www.tiktok.com"],
  facebook: ["facebook.com", "www.facebook.com", "fb.com"],
  linkedin: ["linkedin.com", "www.linkedin.com"],
};

const PLATFORM_LABELS: Record<string, string> = {
  youtube: "YouTube",
  instagram: "Instagram",
  tiktok: "TikTok",
  facebook: "Facebook",
  linkedin: "LinkedIn",
};

export function isValidSocialUrl(platform: string, value: string): boolean {
  if (!value) return false;

  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return false;
  }

  if (url.protocol !== "https:") return false;
  const allowedHosts = PLATFORM_HOSTS[platform];
  return allowedHosts ? allowedHosts.includes(url.hostname.toLowerCase()) : false;
}

/** e.g. "Aisha on Instagram" — never just the bare platform key. */
export function socialAccessibleName(platform: string): string {
  return `Aisha on ${PLATFORM_LABELS[platform] ?? platform}`;
}
