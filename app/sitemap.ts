import { MetadataRoute } from "next";
import { site } from "@/content/site";
import { courses } from "@/content/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;

  // Every entry in content/courses.ts is a real, published programme — there is no draft or
  // unpublished-course concept in this codebase, so each one gets a route here generated from
  // canonical data rather than a second, separately-maintained list that can drift out of sync.
  const courseRoutes = courses.map((course) => `/courses/${course.slug}`);

  // The O/A Level subdomain migration is still deferred — this lists its current internal route
  // (already included via courseRoutes) until that separate project is explicitly authorised.
  const routes = [
    "/",
    "/about",
    "/courses",
    ...courseRoutes,
    "/how-it-works",
    "/batches",
    "/free-diagnostic-test",
    "/success-stories",
    "/contact",
    "/faq",
  ];

  // No `lastModified` — there is no stored, verified per-page update date, and stamping every
  // route with the current build/request time would falsely tell crawlers everything just
  // changed. `changeFrequency`/`priority` are kept as the one deliberate, consistently-applied
  // hint this project already uses (homepage highest, course pages next, everything else equal).
  return routes.map((route) => ({
    url: `${base}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/courses/") ? 0.8 : 0.7,
  }));
}
