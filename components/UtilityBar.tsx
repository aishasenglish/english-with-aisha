import Link from "next/link";
import { site } from "@/content/site";
import { nextBatch } from "@/content/batches";

export default function UtilityBar() {
  const batch = nextBatch();

  return (
    <div className="bg-sea-wash text-sea-deep text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-10 flex items-center justify-center min-[430px]:justify-between gap-3">
        <div className="hidden min-[430px]:flex items-center gap-3 sm:gap-5 min-w-0">
          <span className="hidden sm:inline font-medium whitespace-nowrap">
            {site.timezone}
          </span>
          {batch && (
            <>
              <span className="hidden sm:block w-px h-4 bg-sea-edge" aria-hidden />
              <Link href="/batches" className="hidden min-[430px]:block hover:text-ink transition-colors truncate py-2">
                Next batch:{" "}
                {new Date(batch.startDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                })}
              </Link>
            </>
          )}
        </div>
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <Link href="/free-diagnostic-test" className="inline-flex min-h-10 items-center hover:text-ink transition-colors whitespace-nowrap">
            Free diagnostic test
          </Link>
          <span className="hidden sm:block w-px h-4 bg-sea-edge" aria-hidden />
          <a href={`tel:+${site.whatsapp.intl}`} className="hidden sm:inline hover:text-ink transition-colors">
            {site.whatsapp.display}
          </a>
        </div>
      </div>
    </div>
  );
}
