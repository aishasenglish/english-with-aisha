import Link from "next/link";
import { site } from "@/content/site";
import { nextBatch } from "@/content/batches";

export default function UtilityBar() {
  const batch = nextBatch();

  return (
    <div className="bg-sea-wash text-sea-deep text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-5 min-w-0">
          <span className="hidden sm:inline font-medium whitespace-nowrap">
            {site.timezone}
          </span>
          {batch && (
            <>
              <span className="hidden sm:block w-px h-4 bg-sea-edge" aria-hidden />
              <Link href="/batches" className="hover:text-ink transition-colors truncate">
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
          <Link href="/free-diagnostic-test" className="hover:text-ink transition-colors">
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
