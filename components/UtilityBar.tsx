"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

export default function UtilityBar() {
  const pathname = usePathname();
  const isIeltsProgramme = pathname === "/courses/ielts";

  return (
    <div
      className={`${isIeltsProgramme ? "hidden md:block " : ""}bg-sea-wash text-sea-deep text-[13px] sm:text-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-11 flex items-center justify-center md:justify-between gap-3">
        {/* Phones below 768px: a single centred link, nothing else. */}
        <Link
          href="/#choose-your-path"
          className="md:hidden inline-flex min-h-11 items-center text-center hover:text-ink transition-colors"
        >
          Get a free course recommendation
        </Link>

        {/* Tablets and desktops from 768px upward. */}
        <div className="hidden md:flex items-center gap-3 lg:gap-5 min-w-0">
          <span className="font-medium whitespace-nowrap">{site.timezone}</span>
          <span className="w-px h-4 bg-sea-edge" aria-hidden />
          <Link
            href="/batches"
            className="inline-flex min-h-11 items-center hover:text-ink transition-colors whitespace-nowrap"
          >
            Ask about the next batch
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-3 lg:gap-5 shrink-0">
          <a
            href={`tel:+${site.whatsapp.intl}`}
            className="inline-flex min-h-11 items-center hover:text-ink transition-colors whitespace-nowrap"
          >
            {site.whatsapp.display}
          </a>
          <span className="w-px h-4 bg-sea-edge" aria-hidden />
          <Link
            href="/#choose-your-path"
            className="inline-flex min-h-11 items-center hover:text-ink transition-colors whitespace-nowrap"
          >
            Free course recommendation
          </Link>
        </div>
      </div>
    </div>
  );
}
