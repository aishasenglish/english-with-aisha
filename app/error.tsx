"use client";

import { useEffect } from "react";
import Button from "@/components/Button";
import { whatsappLink } from "@/lib/whatsapp";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-white text-ink py-24 sm:py-32 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="font-serif text-3xl sm:text-4xl font-medium mb-3">
          Something went wrong on this page.
        </h1>
        <p className="text-ink-soft text-base sm:text-lg mb-10">
          It&apos;s not you — try again, or message me directly and I&apos;ll sort it out.
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3">
          <Button onClick={reset} variant="coral" size="lg" className="w-full sm:w-auto">
            Try again
          </Button>
          <Button href={whatsappLink()} external variant="outline" size="lg" className="w-full sm:w-auto">
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
