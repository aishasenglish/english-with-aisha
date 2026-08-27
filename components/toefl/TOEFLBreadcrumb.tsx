import Link from "next/link";
import { toeflPage } from "@/content/toefl";

// Server component. Visible breadcrumb matching the BreadcrumbList JSON-LD emitted once in
// app/courses/toefl/page.tsx -- both read from the same content/toefl.ts `breadcrumb` array so
// the visible path and the structured data can never disagree. Placed above the hero rather than
// inside it, so it doesn't compete with the H1 for attention. Mirrors
// components/pte/PTEBreadcrumb.tsx / components/ielts/IELTSBreadcrumb.tsx.
export default function TOEFLBreadcrumb() {
  const { breadcrumb } = toeflPage;

  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-line px-4 py-2.5">
      <ol className="max-w-3xl mx-auto flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-ink-faint">
        {breadcrumb.map((crumb, i) => {
          const isLast = i === breadcrumb.length - 1;
          return (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {i > 0 && (
                <span aria-hidden="true" className="text-ink-faint">
                  /
                </span>
              )}
              {isLast || !("href" in crumb) ? (
                <span aria-current="page" className="text-ink font-medium">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className="hover:text-ink hover:underline underline-offset-2">
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
