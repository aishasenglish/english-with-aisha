import { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;

  const routes = [
    "/",
    "/about",
    "/courses",
    "/courses/ielts",
    "/courses/pte",
    "/courses/toefl",
    "/courses/english-writing",
    "/courses/spoken-english",
    "/how-it-works",
    "/batches",
    "/free-diagnostic-test",
    "/success-stories",
    "/contact",
    "/faq",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/courses/") ? 0.8 : 0.7,
  }));
}
