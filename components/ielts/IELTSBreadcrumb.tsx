import Link from "next/link";
import { ieltsPage } from "@/content/ielts";

export default function IELTSBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="bg-white px-4 pt-5 sm:px-6 sm:pt-7 lg:px-8">
      <ol className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-faint">
        {ieltsPage.breadcrumb.map((crumb, index) => {
          const isLast = index === ieltsPage.breadcrumb.length - 1;
          return (
            <li key={crumb.label} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLast || !("href" in crumb) ? (
                <span aria-current="page" className="font-medium text-ink">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="inline-flex min-h-11 items-center hover:text-teal hover:underline focus-visible:outline-teal">{crumb.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
