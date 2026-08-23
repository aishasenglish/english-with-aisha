import Button from "./Button";
import { whatsappLink } from "@/lib/whatsapp";
import { leadCapture } from "@/content/leadCapture";

const { homepage } = leadCapture;

// Requires no client-side JavaScript — plain links to /free-diagnostic-test and a wa.me
// deep link. On mobile this stacks in DOM order (heading/body → steps → actions); from
// lg up, explicit grid placement below moves the steps to their own column on the right
// while the explanation and actions stay together on the left.
export default function LeadCaptureSection() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20 px-4" aria-labelledby="lead-capture-heading">
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-10">
        <div className="lg:col-start-1 lg:row-start-1">
          <p className="font-serif text-xs font-medium uppercase tracking-[0.10em] text-ink-faint flex items-center gap-3 mb-3">
            {homepage.eyebrow}
            <span className="h-0.5 w-9 bg-coral" aria-hidden="true" />
          </p>
          <h2
            id="lead-capture-heading"
            className="font-serif text-[1.75rem] sm:text-3xl md:text-4xl font-medium text-ink mb-4"
          >
            {homepage.heading}
          </h2>
          <p className="text-ink-soft text-base sm:text-lg leading-relaxed">{homepage.body}</p>
        </div>

        <ol className="lg:col-start-2 lg:row-start-1 lg:row-span-2 space-y-5">
          {homepage.steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span
                className="shrink-0 w-9 h-9 rounded-full border border-teal/30 bg-white flex items-center justify-center font-serif text-sm font-medium text-teal"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-serif text-base font-medium text-ink mb-1">{step.title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="lg:col-start-1 lg:row-start-2">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <Button href={homepage.primaryHref} variant="coral" size="lg" className="w-full sm:w-auto">
              {homepage.primaryCta}
            </Button>
            <Button
              href={whatsappLink(homepage.whatsappMessage)}
              variant="outline"
              size="lg"
              external
              className="border-ink text-ink hover:bg-ink hover:text-white w-full sm:w-auto"
            >
              {homepage.secondaryCta}
            </Button>
          </div>
          <p className="text-ink-faint text-sm leading-relaxed">{homepage.reassurance}</p>
        </div>
      </div>
    </section>
  );
}
