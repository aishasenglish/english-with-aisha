"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { aboutSlides } from "@/content/aboutPage";

function ArrowIcon({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg className={`h-5 w-5 ${direction === "next" ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
    </svg>
  );
}

export default function AboutGallery() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = aboutSlides.length;
  const slide = aboutSlides[current];
  const show = (index: number) => setCurrent((index + total) % total);

  return (
    <section className="border-y border-line bg-surface-tint px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24" aria-labelledby="about-gallery-heading">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
            Behind the lessons<span className="h-px w-10 bg-teal" aria-hidden="true" />
          </p>
          <h2 id="about-gallery-heading" className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[-0.035em] text-ink">
            A closer look at my teaching journey.
          </h2>
          <p className="mx-auto mt-5 max-w-[65ch] text-base leading-relaxed text-ink-soft sm:text-lg">
            Professional milestones, learning moments and a few glimpses of the person behind the lessons.
          </p>
        </div>

        <div
          className="mx-auto mt-10 max-w-5xl outline-none"
          role="region"
          aria-roledescription="carousel"
          aria-label="Aisha's teaching journey photos"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") show(current - 1);
            if (event.key === "ArrowRight") show(current + 1);
          }}
          onTouchStart={(event) => {
            touchStartX.current = event.changedTouches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const distance = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
            if (Math.abs(distance) > 48) show(current + (distance < 0 ? 1 : -1));
            touchStartX.current = null;
          }}
        >
          <div className="relative h-[clamp(25rem,65vw,42rem)] overflow-hidden rounded-2xl border border-line bg-white">
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              preload={current === 0}
              sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1199px) calc(100vw - 6rem), 1024px"
              className="object-contain p-2 sm:p-4"
            />
            <button type="button" onClick={() => show(current - 1)} aria-label="Show previous photo" className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/95 text-ink shadow-sm transition-colors hover:border-sea-edge hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal sm:left-5">
              <ArrowIcon direction="previous" />
            </button>
            <button type="button" onClick={() => show(current + 1)} aria-label="Show next photo" className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white/95 text-ink shadow-sm transition-colors hover:border-sea-edge hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal sm:right-5">
              <ArrowIcon direction="next" />
            </button>
          </div>

          <div className="mt-5 flex flex-col items-center gap-3">
            <p className="text-sm font-medium text-ink-soft" aria-live="polite" aria-atomic="true">{current + 1} / {total}</p>
            <div className="flex max-w-full flex-wrap justify-center" aria-label="Choose a photo">
              {aboutSlides.map((item, index) => (
                <button key={item.src} type="button" onClick={() => show(index)} aria-label={`Show photo ${index + 1} of ${total}`} aria-current={index === current ? "true" : undefined} className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal">
                  <span className={`block rounded-full transition-[width,background-color] ${index === current ? "h-2.5 w-6 bg-teal" : "h-2.5 w-2.5 bg-line-strong hover:bg-sea-edge"}`} aria-hidden="true" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
