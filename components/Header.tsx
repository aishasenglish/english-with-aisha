"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DESKTOP_NAV, IELTS_RECOMMENDATION_HREF, OTHER_PROGRAMMES } from "@/content/nav";
import { site } from "@/content/site";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5.5 7.5 4.5 4.5 4.5-4.5" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      {open ? (
        <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
      ) : (
        <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

function Brand() {
  return (
    <Link href="/" className="flex min-h-11 shrink-0 items-center gap-3" aria-label={`${site.brandName} home`}>
      <Image src="/images/logo-mark.png" alt="" width={58} height={40} className="h-7 w-auto sm:h-8" />
      <span className="leading-none">
        <span className="block whitespace-nowrap text-[0.82rem] font-semibold tracking-[0.12em] text-ink sm:text-sm">
          {site.brandName}
        </span>
        <span className="mt-1 block whitespace-nowrap text-[0.57rem] font-medium tracking-[0.16em] text-ink-faint">
          ONLINE ENGLISH COACHING
        </span>
      </span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [desktopProgrammesOpen, setDesktopProgrammesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProgrammesOpen, setMobileProgrammesOpen] = useState(false);
  const programmesRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const mobileWasOpenRef = useRef(false);

  const isCurrent = (href: string) =>
    href === "/courses" ? pathname === "/courses" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!programmesRef.current?.contains(event.target as Node)) setDesktopProgrammesOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setDesktopProgrammesOpen(false);
      setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMobileOpen(false);
        setMobileProgrammesOpen(false);
      }
    };
    desktop.addEventListener("change", handleChange);
    return () => desktop.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => firstMobileLinkRef.current?.focus());
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      mobileWasOpenRef.current = true;
      return;
    }
    if (!mobileWasOpenRef.current) return;
    mobileWasOpenRef.current = false;
    const frame = requestAnimationFrame(() => menuButtonRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileProgrammesOpen(false);
  };

  const navLinkClass = (active: boolean) =>
    `inline-flex min-h-11 items-center rounded-lg px-3 text-[0.92rem] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal ${
      active ? "text-teal" : "text-ink hover:text-teal"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[70px] border-b bg-white/[0.86] backdrop-blur-[12px] transition-[border-color,box-shadow] xl:h-[92px] ${
        scrolled ? "border-line shadow-[0_8px_30px_rgba(26,26,26,0.07)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center px-4 sm:px-6 lg:px-8">
        <Brand />

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex" aria-label="Primary navigation">
          <Link href="/courses/ielts" className={navLinkClass(pathname === "/courses/ielts")}>
            IELTS Coaching
          </Link>

          <div
            ref={programmesRef}
            className="relative flex items-center"
            onMouseEnter={() => setDesktopProgrammesOpen(true)}
            onMouseLeave={() => setDesktopProgrammesOpen(false)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) setDesktopProgrammesOpen(false);
            }}
          >
            <Link href="/courses" className={`${navLinkClass((pathname.startsWith("/courses/") && pathname !== "/courses/ielts") || pathname === "/courses")} pr-1`}>
              Other Programmes
            </Link>
            <button
              type="button"
              aria-label="Toggle Other Programmes menu"
              aria-expanded={desktopProgrammesOpen}
              aria-controls="desktop-programmes-menu"
              onClick={() => setDesktopProgrammesOpen((open) => !open)}
              className="flex h-11 w-9 items-center justify-center rounded-lg text-ink transition-colors hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              <ChevronIcon open={desktopProgrammesOpen} />
            </button>

            {desktopProgrammesOpen && (
              <div id="desktop-programmes-menu" className="absolute left-0 top-full w-[19.5rem] pt-3">
                <div className="rounded-2xl border border-line bg-white p-2 shadow-[0_18px_45px_rgba(26,26,26,0.12)]">
                  <ul>
                    {OTHER_PROGRAMMES.map((item, index) => (
                      <li key={item.label} className={index === 1 ? "mt-1 border-t border-line pt-1" : ""}>
                        {item.external ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center rounded-xl px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:bg-sea-wash hover:text-sea-deep focus-visible:outline-2 focus-visible:outline-teal">
                            {item.label}
                          </a>
                        ) : (
                          <Link href={item.href} onClick={() => setDesktopProgrammesOpen(false)} className={`flex min-h-11 items-center rounded-xl px-3.5 py-2 text-sm font-medium transition-colors hover:bg-sea-wash hover:text-sea-deep focus-visible:outline-2 focus-visible:outline-teal ${isCurrent(item.href) ? "bg-sea-wash text-sea-deep" : "text-ink"}`}>
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {DESKTOP_NAV.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass(pathname === item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={IELTS_RECOMMENDATION_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 hidden min-h-11 shrink-0 items-center justify-center rounded-[10px] bg-teal px-5 text-sm font-semibold text-white transition-colors hover:bg-sea-deep active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal xl:inline-flex"
        >
          Get My Free Recommendation
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-lg border border-line-strong text-ink transition-colors hover:border-sea-edge hover:text-teal active:bg-sea-wash focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal xl:hidden"
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="fixed inset-x-0 top-[70px] z-40 h-[calc(100dvh-70px)] xl:hidden">
          <button type="button" aria-label="Close navigation" onClick={closeMobile} className="absolute inset-0 h-full w-full bg-ink/35" />
          <div role="dialog" aria-modal="true" aria-label="Site navigation" className="absolute right-0 top-0 h-full w-[min(100%,28rem)] overflow-y-auto overscroll-contain border-l border-line bg-white px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3 shadow-2xl sm:px-6">
            <nav aria-label="Mobile navigation">
              <ul className="divide-y divide-line">
                <li>
                  <Link ref={firstMobileLinkRef} href="/courses/ielts" onClick={closeMobile} className="flex min-h-14 items-center text-base font-semibold text-ink hover:text-teal">
                    IELTS Coaching
                  </Link>
                </li>
                <li className="py-1">
                  <div className="flex items-center">
                    <Link href="/courses" onClick={closeMobile} className="flex min-h-14 flex-1 items-center text-base font-semibold text-ink hover:text-teal">
                      Other Programmes
                    </Link>
                    <button type="button" aria-label="Toggle Other Programmes" aria-expanded={mobileProgrammesOpen} aria-controls="mobile-programmes-menu" onClick={() => setMobileProgrammesOpen((open) => !open)} className="flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:text-teal focus-visible:outline-2 focus-visible:outline-teal">
                      <ChevronIcon open={mobileProgrammesOpen} />
                    </button>
                  </div>
                  {mobileProgrammesOpen && (
                    <ul id="mobile-programmes-menu" className="mb-2 rounded-xl bg-surface-tint p-2">
                      {OTHER_PROGRAMMES.map((item) => (
                        <li key={item.label}>
                          {item.external ? (
                            <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={closeMobile} className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-ink hover:bg-sea-wash hover:text-sea-deep">
                              {item.label}
                            </a>
                          ) : (
                            <Link href={item.href} onClick={closeMobile} className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-ink hover:bg-sea-wash hover:text-sea-deep">
                              {item.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li><Link href="/about" onClick={closeMobile} className="flex min-h-14 items-center text-base font-semibold text-ink hover:text-teal">About Aisha</Link></li>
                <li><Link href="/faq" onClick={closeMobile} className="flex min-h-14 items-center text-base font-semibold text-ink hover:text-teal">FAQs</Link></li>
                <li><Link href="/contact" onClick={closeMobile} className="flex min-h-14 items-center text-base font-semibold text-ink hover:text-teal">Contact</Link></li>
              </ul>
              <a href={IELTS_RECOMMENDATION_HREF} target="_blank" rel="noopener noreferrer" onClick={closeMobile} className="mt-5 flex min-h-12 w-full items-center justify-center rounded-[10px] bg-teal px-5 text-center text-sm font-semibold text-white transition-colors hover:bg-sea-deep active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal">
                Get My Free Recommendation
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
