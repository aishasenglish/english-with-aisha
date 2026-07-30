"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/content/testimonials";

const FEATURED_NAMES = ["Sara Ahmed", "Usman Tariq", "Zara Siddiqui", "Ali Raza"];

const BACKDROP: Record<string, string> = {
  "IELTS Preparation": "/images/aisha-teal.jpg",
  "PTE Academic": "/images/aisha-professional.jpg",
  "Spoken English & Fluency": "/images/aisha-warm.jpg",
  "TOEFL iBT": "/images/aisha-thoughtful.jpg",
};

const stories = testimonials.filter((t) => FEATURED_NAMES.includes(t.name));

export default function StoryFeature() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  if (!story) return null;

  return (
    <section className="bg-ink">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-[280px] lg:min-h-[440px] bg-white/5">
          <Image
            src={BACKDROP[story.course] ?? "/images/aisha-teal.jpg"}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
        <div className="px-6 py-14 sm:px-12 sm:py-16 flex flex-col justify-center">
          <span className="font-serif text-5xl font-extrabold text-coral leading-none mb-3">
            &ldquo;
          </span>
          <p className="font-serif text-xl sm:text-2xl font-semibold text-white leading-snug tracking-tight mb-7 max-w-xl">
            {story.quote}
          </p>
          <div className="flex items-center gap-3.5 pt-5 border-t border-white/15">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 shrink-0">
              <Image
                src={`/images/testimonials/${story.image}`}
                alt=""
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="font-serif font-bold text-white text-sm">{story.name}</p>
              <p className="text-coral text-xs mt-0.5">
                {story.result} · {story.course}
              </p>
            </div>
          </div>
          <div className="flex gap-2.5 mt-7">
            {stories.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setActive(i)}
                aria-label={`Show ${s.name}'s story`}
                aria-current={active === i}
                className={`h-1 w-9 transition-colors ${active === i ? "bg-coral" : "bg-white/25"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
