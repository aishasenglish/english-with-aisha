"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV } from "@/content/nav";
import { whatsappLink } from "@/lib/whatsapp";

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ArrowIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState<number | null>(null);
  const [stuck, setStuck] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setDrawer(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white border-b border-stone transition-shadow ${
          stuck ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 h-20">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image src="/logo.svg" alt="" width={40} height={40} className="h-9 w-auto" priority />
              <span className="flex flex-col leading-none">
                <span className="font-serif font-medium text-lg text-ink tracking-tight">
                  English with Aisha
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.13em] text-muted mt-1">
                  Professional English Training
                </span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 ml-4 h-full" aria-label="Main">
              {NAV.map((item, i) =>
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="h-full flex items-center px-3 font-serif font-medium text-sm text-ink hover:text-coral transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div
                    key={item.label}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => setOpen(i)}
                    onMouseLeave={() => setOpen((o) => (o === i ? null : o))}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        setOpen((o) => (o === i ? null : o));
                      }
                    }}
                  >
                    <button
                      className="h-full flex items-center gap-1.5 px-3 font-serif font-medium text-sm text-ink hover:text-coral transition-colors relative whitespace-nowrap"
                      aria-expanded={open === i}
                      onClick={() => setOpen((o) => (o === i ? null : i))}
                    >
                      {item.label}
                      <ChevronIcon
                        className={`w-3.5 h-3.5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                      />
                      <span
                        className={`absolute left-3 right-3 bottom-0 h-[3px] bg-coral origin-left transition-transform duration-200 ${
                          open === i ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </button>

                    {open === i && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[min(880px,92vw)]">
                        <div className="bg-white border border-stone border-t-[3px] border-t-coral shadow-xl p-8">
                          <div className="grid grid-cols-3 gap-8">
                            {item.columns!.map((col) => (
                              <div key={col.heading}>
                                <h4 className="text-xs uppercase tracking-[0.10em] text-muted font-medium mb-3">
                                  {col.heading}
                                </h4>
                                <ul className="flex flex-col gap-0.5">
                                  {col.links.map((l) => (
                                    <li key={l.label}>
                                      <Link
                                        href={l.href}
                                        className="block -ml-2.5 px-2.5 py-2 rounded-sm hover:bg-amber-tint group"
                                      >
                                        <span className="block text-sm font-medium text-ink group-hover:text-amber-dark">
                                          {l.label}
                                        </span>
                                        {l.note && (
                                          <span className="block text-xs text-muted mt-0.5 group-hover:text-amber-dark/85">
                                            {l.note}
                                          </span>
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                            {item.feature && (
                              <div className="bg-ivory p-5 border-l-[3px] border-coral">
                                <span className="font-serif text-[0.68rem] font-medium uppercase tracking-[0.10em] text-amber-dark">
                                  {item.feature.tag}
                                </span>
                                <h5 className="font-serif text-base font-medium text-ink mt-2 mb-1.5">
                                  {item.feature.title}
                                </h5>
                                <p className="text-sm text-muted mb-3.5 leading-relaxed">
                                  {item.feature.body}
                                </p>
                                {item.feature.style === "button" ? (
                                  <Link
                                    href={item.feature.cta.href}
                                    className="inline-flex items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white font-serif font-medium uppercase tracking-wide text-xs px-4 py-2.5 transition-colors"
                                  >
                                    {item.feature.cta.label}
                                  </Link>
                                ) : (
                                  <Link
                                    href={item.feature.cta.href}
                                    className="inline-flex items-center gap-1.5 text-xs font-serif font-medium uppercase tracking-wide border-b-2 border-coral pb-0.5 hover:text-amber-dark"
                                  >
                                    {item.feature.cta.label}
                                    <ArrowIcon className="w-3.5 h-3.5" />
                                  </Link>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
            </nav>

            <div className="flex items-center gap-3 ml-auto">
              <Link
                href="/#finder"
                className="hidden lg:inline-flex items-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white font-serif font-medium uppercase tracking-wide text-xs px-4 py-2.5 transition-colors"
              >
                Find a course
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center rounded-sm bg-coral hover:bg-amber-dark text-white font-serif font-medium uppercase tracking-wide text-xs px-4 py-2.5 transition-colors"
              >
                Talk to Aisha
              </a>
              <button
                onClick={() => setDrawer(true)}
                aria-label="Open menu"
                aria-expanded={drawer}
                className="lg:hidden p-2.5 border border-line-strong rounded-sm text-ink"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {drawer && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/60"
            onClick={() => setDrawer(false)}
            aria-hidden
          />
          <div className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white overflow-y-auto">
            <div className="flex items-center justify-between h-16 px-4 border-b border-stone">
              <span className="font-serif font-medium text-ink">Menu</span>
              <button
                onClick={() => setDrawer(false)}
                aria-label="Close menu"
                className="p-2 text-ink"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="px-4 py-4">
              {NAV.map((item, i) =>
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setDrawer(false)}
                    className="block py-3 font-serif font-medium text-ink border-b border-stone"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div key={item.label} className="border-b border-stone">
                    <button
                      onClick={() => setDrawerOpen((o) => (o === i ? null : i))}
                      aria-expanded={drawerOpen === i}
                      className="w-full flex items-center justify-between py-3 font-serif font-medium text-ink"
                    >
                      {item.label}
                      <ChevronIcon
                        className={`w-4 h-4 transition-transform ${drawerOpen === i ? "rotate-180" : ""}`}
                      />
                    </button>
                    {drawerOpen === i && (
                      <div className="pb-3 space-y-4">
                        {item.columns!.map((col) => (
                          <div key={col.heading}>
                            <p className="text-xs uppercase tracking-[0.10em] text-muted font-medium mb-1.5">
                              {col.heading}
                            </p>
                            <ul>
                              {col.links.map((l) => (
                                <li key={l.label}>
                                  <Link
                                    href={l.href}
                                    onClick={() => setDrawer(false)}
                                    className="block py-1.5 text-sm text-ink"
                                  >
                                    {l.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
              <div className="pt-5 flex flex-col gap-3">
                <Link
                  href="/#finder"
                  onClick={() => setDrawer(false)}
                  className="flex items-center justify-center rounded-sm border-2 border-ink text-ink font-serif font-medium uppercase tracking-wide text-xs px-4 py-3"
                >
                  Find a course
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-sm bg-coral text-white font-serif font-medium uppercase tracking-wide text-xs px-4 py-3"
                >
                  Talk to Aisha
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
