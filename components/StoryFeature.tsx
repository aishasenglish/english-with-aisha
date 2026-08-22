"use client";

import { useState } from "react";
import { testimonials } from "@/content/testimonials";

// Feature the four most recently added verified testimonials.
const stories = testimonials.slice(0, 4);

export default function StoryFeature() {
  const [active, setActive] = useState(0);
  const story = stories[active];

  if (!story) return null;

  return (
    <section className="bg-surface-tint">
      <div className="max-w-3xl mx-auto">
        <div className="px-4 py-12 sm:px-12 sm:py-16 flex flex-col justify-center items-center text-center">
          <span className="font-serif text-5xl font-medium text-sea-edge leading-none mb-3">
            &ldquo;
          </span>
          <p className="font-serif text-lg sm:text-2xl font-medium text-ink leading-snug tracking-tight mb-7 max-w-xl">
            {story.quote}
          </p>
          <div className="flex items-center gap-3.5 pt-5 border-t border-line">
            <div className="w-12 h-12 rounded-full bg-sea-wash text-sea-deep shrink-0 flex items-center justify-center font-medium" aria-hidden="true">
              {story.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}
            </div>
            <div>
              <p className="font-serif font-medium text-ink text-sm">{story.name}</p>
              <p className="text-sea-deep text-xs mt-0.5">
                {story.result} · {story.course}
              </p>
            </div>
          </div>
          <div className="flex mt-5" role="group" aria-label="Choose a success story">
            {stories.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setActive(i)}
                aria-label={`Show ${s.name}'s story`}
                aria-current={active === i}
                className="w-11 h-11 flex items-center justify-center"
              >
                <span className={`block h-1 w-8 transition-colors ${active === i ? "bg-coral" : "bg-line-strong"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
