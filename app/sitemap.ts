import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const PUBLIC_ROUTES = [
  "/",
  "/courses/ielts",
  "/courses",
  "/courses/o-a-level-english",
  "/courses/pte",
  "/courses/toefl",
  "/courses/spoken-english",
  "/courses/english-writing",
  "/about",
  "/faq",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;

  return PUBLIC_ROUTES.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority:
      route === "/" ? 1 : route === "/courses/ielts" ? 0.9 : route.startsWith("/courses") ? 0.8 : 0.7,
  }));
}
