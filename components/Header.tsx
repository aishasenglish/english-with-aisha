"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV, headerWhatsappMessage } from "@/content/nav";
import { whatsappLink } from "@/lib/whatsapp";

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const coursesItem = NAV[0];
const plainLinks = NAV.slice(1);
const whatsappHref = whatsappLink(headerWhatsappMessage);

export default function Header() {
  const [open, setOpen] = useState<number | null>(null);
  const [stuck, setStuck] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState<number | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);
  const hoverOpenedRef = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes both the desktop mega menu and the mobile drawer.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(null);
      setDrawer(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close (and reset) the drawer if the viewport grows into a breakpoint that no longer uses it.
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setDrawer(false);
        setDrawerOpen(null);
      }
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Lock background scroll while the drawer is open, restoring whatever inline value was there before.
  useEffect(() => {
    if (!drawer) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [drawer]);

  // Hide the rest of the page from assistive technology and keyboard navigation while the drawer is open.
  useEffect(() => {
    if (!drawer) return;
    const drawerEl = drawerRef.current;
    const madeInert: HTMLElement[] = [];
    Array.from(document.body.children).forEach((child) => {
      const el = child as HTMLElement;
      if (el !== drawerEl && !el.hasAttribute("inert")) {
        el.setAttribute("inert", "");
        madeInert.push(el);
      }
    });
    return () => {
      madeInert.forEach((el) => el.removeAttribute("inert"));
    };
  }, [drawer]);

  // Move focus into the drawer when it opens, preferring the close button.
  useEffect(() => {
    if (!drawer) return;
    closeButtonRef.current?.focus();
  }, [drawer]);

  // Trap Tab focus inside the drawer while it is open.
  useEffect(() => {
    if (!drawer) return;
    const container = drawerRef.current;
    if (!container) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = Array.from(
        container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [drawer]);

  // Restore focus to the menu button once the drawer finishes closing.
  useEffect(() => {
    if (drawer) {
      wasOpenRef.current = true;
      return;
    }
    if (!wasOpenRef.current) return;
    wasOpenRef.current = false;
    const raf = requestAnimationFrame(() => menuButtonRef.current?.focus());
    return () => cancelAnimationFrame(raf);
  }, [drawer]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white border-b border-stone transition-shadow ${
          stuck ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 md:gap-4 lg:gap-6 h-16 xl:h-20">
            <Link href="/" className="flex flex-row items-center gap-3.5 shrink-0">
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={580}
                height={400}
                className="h-[26px] sm:h-[28px] w-auto"
                priority
              />
              <span className="flex flex-col justify-center leading-tight">
                <span className="font-sans font-bold text-sm text-charcoal tracking-wider whitespace-nowrap">
                  AISHA&apos;S ENGLISH
                </span>
                <span className="text-[9px] font-medium text-muted tracking-widest whitespace-nowrap">
                  LIVE ONLINE ENGLISH COACHING
                </span>
              </span>
            </Link>

            {/* Tablets, 768–1279px: simplified inline nav, no mega menu, no hamburger. */}
            <nav className="hidden md:flex xl:hidden items-center gap-1 ml-1 h-full" aria-label="Main">
              <Link
                href="/courses"
                className="h-full flex items-center px-2.5 font-serif font-normal uppercase tracking-wider text-sm text-ink hover:text-coral transition-colors"
              >
                Courses
              </Link>
              <Link
                href="/about"
                className="h-full flex items-center px-2.5 font-serif font-normal uppercase tracking-wider text-sm text-ink hover:text-coral transition-colors"
              >
                About
              </Link>
            </nav>

            {/* Desktop, 1280px+: full primary navigation and Courses mega menu. */}
            <nav className="hidden xl:flex items-center gap-1 ml-4 h-full" aria-label="Main">
              {NAV.map((item, i) =>
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(null)}
                    className="h-full flex items-center px-3 font-serif font-normal uppercase tracking-wider text-sm text-ink hover:text-coral transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div
                    key={item.label}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => {
                      hoverOpenedRef.current = i;
                      setOpen(i);
                    }}
                    onMouseLeave={() => {
                      hoverOpenedRef.current = null;
                      setOpen((o) => (o === i ? null : o));
                    }}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        setOpen((o) => (o === i ? null : o));
                      }
                    }}
                  >
                    <button
                      className="h-full flex items-center gap-1.5 px-3 font-serif font-normal uppercase tracking-wider text-sm text-ink hover:text-coral transition-colors relative whitespace-nowrap"
                      aria-expanded={open === i}
                      aria-controls={`mega-panel-${i}`}
                      onClick={() => {
                        // A real mouse click always fires onMouseEnter a couple of milliseconds
                        // beforehand, which already opened this panel via a ref (not yet-committed
                        // state, so `open` here can still be stale). Without this guard the click's
                        // own toggle would instantly close what hovering just opened. Keyboard/touch
                        // clicks never touch the ref, so they still toggle normally.
                        if (hoverOpenedRef.current === i) {
                          hoverOpenedRef.current = null;
                          return;
                        }
                        setOpen((o) => (o === i ? null : i));
                      }}
                    >
                      {item.label}
                      <ChevronIcon
                        className={`w-4 h-4 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                      />
                      <span
                        className={`absolute left-3 right-3 bottom-0 h-[3px] bg-coral origin-left transition-transform duration-200 ${
                          open === i ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </button>

                    {open === i && (
                      <div
                        id={`mega-panel-${i}`}
                        className="absolute top-full left-0 z-50 pt-2 w-[min(720px,92vw)]"
                      >
                        <div className="bg-white border border-stone border-t-[3px] border-t-coral shadow-xl p-8">
                          <div className="grid grid-cols-3 gap-8">
                            {item.columns!.map((col) => (
                              <div key={col.heading}>
                                <p className="text-[13px] uppercase tracking-[0.10em] text-muted font-medium mb-3">
                                  {col.heading}
                                </p>
                                <ul className="flex flex-col gap-0.5">
                                  {col.links.map((l) => (
                                    <li key={l.label}>
                                      {l.external ? (
                                        <a
                                          href={l.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
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
                                        </a>
                                      ) : (
                                        <Link
                                          href={l.href}
                                          onClick={() => setOpen(null)}
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
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>

                          {item.feature && (
                            <div className="mt-6 pt-5 border-t border-stone flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                              <div>
                                <p className="font-serif text-[0.68rem] font-medium uppercase tracking-[0.10em] text-amber-dark mb-1">
                                  {item.feature.eyebrow}
                                </p>
                                <p className="text-sm text-muted">{item.feature.body}</p>
                              </div>
                              <Link
                                href={item.feature.cta.href}
                                onClick={() => setOpen(null)}
                                className="shrink-0 inline-flex min-h-11 items-center justify-center rounded-sm bg-coral hover:bg-amber-dark text-white font-serif font-medium uppercase tracking-wide text-xs px-4 py-2.5 transition-colors"
                              >
                                {item.feature.cta.label}
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
            </nav>

            <div className="flex items-center gap-3 ml-auto">
              <Link
                href="/#choose-your-path"
                className="hidden xl:inline-flex items-center rounded-sm border-2 border-ink text-ink hover:bg-ink hover:text-white font-serif font-medium uppercase tracking-wide text-xs px-4 py-2.5 transition-colors"
              >
                Find Your Programme
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Aisha"
                className="hidden md:inline-flex items-center rounded-sm bg-coral hover:bg-amber-dark text-white font-serif font-medium uppercase tracking-wide text-xs px-4 py-2.5 min-h-11 transition-colors"
              >
                <span className="xl:hidden">WhatsApp</span>
                <span className="hidden xl:inline">WhatsApp Aisha</span>
              </a>
              <button
                ref={menuButtonRef}
                onClick={() => setDrawer(true)}
                aria-label="Open menu"
                aria-expanded={drawer}
                aria-controls="mobile-navigation"
                className="md:hidden w-12 h-12 flex items-center justify-center border border-line-strong rounded-sm text-ink shrink-0"
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
        <div
          ref={drawerRef}
          id="mobile-navigation"
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="absolute inset-0 bg-ink/60" onClick={() => setDrawer(false)} aria-hidden />
          <div className="absolute top-0 right-0 bottom-0 w-[min(100%,22rem)] bg-white overflow-y-auto overscroll-contain shadow-2xl">
            <div className="flex items-center justify-between h-16 px-4 border-b border-stone">
              <span className="font-serif font-medium text-ink">Menu</span>
              <button
                ref={closeButtonRef}
                onClick={() => setDrawer(false)}
                aria-label="Close menu"
                className="w-11 h-11 flex items-center justify-center text-ink"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="px-4 pt-2 pb-[max(1.25rem,env(safe-area-inset-bottom))]" aria-label="Mobile">
              {coursesItem.columns!.map((col, i) => (
                <div key={col.heading} className="border-b border-stone">
                  <button
                    onClick={() => setDrawerOpen((o) => (o === i ? null : i))}
                    aria-expanded={drawerOpen === i}
                    aria-controls={`mobile-accordion-panel-${i}`}
                    className="w-full flex items-center justify-between min-h-12 font-serif font-medium text-ink text-left"
                  >
                    {col.heading}
                    <ChevronIcon
                      className={`w-4 h-4 shrink-0 transition-transform ${drawerOpen === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {drawerOpen === i && (
                    <div id={`mobile-accordion-panel-${i}`} className="pb-3">
                      <ul>
                        {col.links.map((l) => (
                          <li key={l.label}>
                            {l.external ? (
                              <a
                                href={l.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setDrawer(false)}
                                className="flex items-center min-h-11 text-sm text-ink pl-2"
                              >
                                {l.label}
                              </a>
                            ) : (
                              <Link
                                href={l.href}
                                onClick={() => setDrawer(false)}
                                className="flex items-center min-h-11 text-sm text-ink pl-2"
                              >
                                {l.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              {plainLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={() => setDrawer(false)}
                  className="flex items-center min-h-12 font-serif font-medium text-ink border-b border-stone"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-5 flex flex-col gap-3">
                <Link
                  href="/#choose-your-path"
                  onClick={() => setDrawer(false)}
                  className="flex items-center justify-center min-h-12 rounded-sm border-2 border-ink text-ink font-serif font-medium uppercase tracking-wide text-xs px-4 py-3"
                >
                  Find Your Programme
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setDrawer(false)}
                  className="flex items-center justify-center min-h-12 rounded-sm bg-coral text-white font-serif font-medium uppercase tracking-wide text-xs px-4 py-3"
                >
                  WhatsApp Aisha
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
