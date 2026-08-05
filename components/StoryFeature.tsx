"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/content/testimonials";

const FEATURED_NAMES = ["Sara Ahmed", "Usman Tariq", "Zara Siddiqui", "Ali Raza"];

const stories = testimonials.filter((t) => FEATURED_NAMES.includes(t.name));

export default function StoryFeature() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  if (!story) return null;

  return (
    <section className="bg-surface-tint">
      <div className="max-w-3xl mx-auto">
        <div className="px-6 py-14 sm:px-12 sm:py-16 flex flex-col justify-center items-center text-center">
          <span className="font-serif text-5xl font-medium text-sea-edge leading-none mb-3">
            &ldquo;
          </span>
          <p className="font-serif text-xl sm:text-2xl font-medium text-ink leading-snug tracking-tight mb-7 max-w-xl">
            {story.quote}
          </p>
          <div className="flex items-center gap-3.5 pt-5 border-t border-line">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-line shrink-0">
              <Image
                src={`/images/testimonials/${story.image}`}
                alt=""
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="font-serif font-medium text-ink text-sm">{story.name}</p>
              <p className="text-sea-deep text-xs mt-0.5">
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
                className={`h-1 w-9 transition-colors ${active === i ? "bg-coral" : "bg-line-strong"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
