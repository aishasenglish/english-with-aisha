import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import FadeUp from "@/components/FadeUp";
import IncludedList from "@/components/IncludedList";
import BatchTable from "@/components/BatchTable";
import GroupedFAQAccordion, { type FAQGroup } from "@/components/GroupedFAQAccordion";
import CTASection from "@/components/CTASection";
import { courses } from "@/content/courses";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

const course = courses.find((c) => c.slug === "o-a-level-english")!;

// Batch publication status is date-dependent (see lib/batches.ts); revalidate at least
// daily so a page built once doesn't keep showing an intake after its date has passed.
export const revalidate = 3600;

const YEARS_EXPERIENCE = "10+";
const CLASS_SIZE_MAX = 8;

const base = `https://${site.domain}`;
const pageUrl = `${base}/courses/o-a-level-english`;

export const metadata: Metadata = {
  title: "O & A Level English Tuition Online",
  description:
    `Expert online O Level, IGCSE and A Level English coaching. Cambridge & Edexcel, live on Zoom, examiner-style marking. Taught by a ${site.professionalRole} with an ${site.qualification}.`,
  alternates: { canonical: "/courses/o-a-level-english" },
  openGraph: {
    title: `O & A Level English Tuition Online | ${site.brandName}`,
    description:
      "Expert online O Level, IGCSE and A Level English coaching. Cambridge & Edexcel, live on Zoom, examiner-style marking.",
    url: pageUrl,
    images: [
      {
        url: "/images/og-o-a-level.jpg",
        width: 1200,
        height: 630,
        alt: `O & A Level English — ${site.brandName}`,
      },
    ],
  },
};

function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function HeroPhoto() {
  return (
    <div className="max-w-xs sm:max-w-sm mx-auto lg:max-w-none aspect-[4/5] rounded-md overflow-hidden bg-surface-tint shadow-xl relative">
      <Image
        src="/images/aisha-hero.jpg"
        alt="Aisha, specialist online O and A Level English teacher"
        fill
        priority
        sizes="(max-width: 639px) 82vw, (max-width: 1023px) 384px, 42vw"
        className="object-cover object-top"
      />
    </div>
  );
}

function SyllabusTable({
  title,
  rows,
}: {
  title: string;
  rows: { name: string; code: React.ReactNode }[];
}) {
  return (
    <div>
      <h3 className="font-serif text-xl font-medium text-ink mb-4">{title}</h3>
      <div className="overflow-x-auto rounded-md border border-stone">
        <table className="w-full text-sm table-fixed">
          <thead className="bg-sea text-white">
            <tr>
              <th className="w-2/3 text-left px-3 sm:px-5 py-3 font-medium">Syllabus</th>
              <th className="w-1/3 text-left px-3 sm:px-5 py-3 font-medium">Code</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.name}
                className={`border-t border-stone ${i % 2 === 0 ? "bg-white" : "bg-ivory"}`}
              >
                <td className="px-3 sm:px-5 py-3 text-charcoal break-words">{row.name}</td>
                <td className="px-3 sm:px-5 py-3 font-mono text-charcoal break-words">{row.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const cambridgeSyllabuses = [
  { name: "O Level English Language", code: "1123" },
  { name: "IGCSE First Language English", code: "0500 / 0990" },
  { name: "IGCSE English as a Second Language", code: "0510 / 0511 / 0991" },
  { name: "IGCSE Literature in English", code: "0475 / 0992" },
  { name: "AS & A Level English Language", code: "9093" },
  { name: "AS & A Level Literature in English", code: "9695" },
  { name: "AS Level English General Paper", code: "8021" },
];

const edexcelSyllabuses: { name: string; code: React.ReactNode }[] = [
  { name: "International GCSE English Language A", code: "4EA1" },
  { name: "International GCSE English Language B", code: "4EB1" },
  { name: "International GCSE English Literature", code: "4ET1" },
];

const hookCards = [
  {
    title: "“Good” is not a mark",
    body: "School feedback tells a student whether their writing is pleasant to read. A mark scheme tells them whether it scores. Those are two different questions, and only one of them appears on the certificate.",
  },
  {
    title: "The clock, not the vocabulary",
    body: "Directed Writing, comprehension, unseen analysis — these papers are lost on pacing far more often than on language. Students who know exactly how many minutes each question is worth stop running out of time.",
  },
  {
    title: "Command words are instructions",
    body: "Analyse. Evaluate. Compare. Comment on the writer's use of… Each one carries a specific marking consequence. Most students read them as decoration and answer the question they wish had been asked.",
  },
];

const tracks = [
  {
    title: "O Level & IGCSE English",
    ageRange: "Years 9–11 · Typically ages 14–16",
    intro:
      "The year English stops being a subject you are simply good at and becomes a subject you have to be strategic about.",
    bullets: [
      "Directed Writing — building a response that hits register, audience and purpose from the first line",
      "Composition — narrative and descriptive writing that earns marks for craft, not just length",
      "Comprehension and summary — the technique for extracting exactly what the question rewards, and nothing else",
      "Reading passages — inference, tone, and writing about a writer's choices without simply retelling the story",
      "Literature set texts — quotation banks, character and theme mapping, and essay structures that survive exam pressure",
      "Grammar and accuracy — repaired properly, at the sentence level, not by handing back a page of red pen",
    ],
    expect:
      "a student who walks into the paper knowing what each question is worth, how long to spend on it, and what the examiner is scanning for.",
  },
  {
    title: "AS & A Level English",
    ageRange: "Years 12–13 · Typically ages 16–18",
    intro:
      "The step up from O Level is steeper in English than in almost any other subject. The paper stops testing what a student knows and starts testing how they think.",
    bullets: [
      "Unseen text analysis — a repeatable method for facing a passage you have never read and having something intelligent to say within four minutes",
      "Language analysis (9093) — discourse, register, and framework-based commentary that reads like a linguist, not a reviewer",
      "Literature essays (9695) — building a genuine argument, sustaining it, and using critical vocabulary with precision",
      "Comparative and directed response — handling two texts without collapsing into “in text one… in text two…”",
      "General Paper (8021) — structured argument, evidence, and balance under a tight clock",
      "University-level writing habits — the ones that keep paying off long after the exam",
    ],
    expect:
      "a student who can take an unfamiliar text apart under exam conditions and defend a genuine argument about it.",
  },
];

const passageSegments: { text: string; noteId?: number }[] = [
  { text: "The writer " },
  { text: "uses a lot of imagery", noteId: 1 },
  { text: " in this passage " },
  { text: "to make the reader feel sad", noteId: 2 },
  { text: ". He describes the abandoned house in great detail, " },
  { text: "which is very effective", noteId: 3 },
  { text: ". " },
  { text: "This shows that", noteId: 4 },
  { text: " the writer wants us to understand that the family has left. " },
  { text: "Overall, the passage is very descriptive", noteId: 5 },
  { text: " and the imagery is powerful." },
];

const examinerNotes = [
  {
    id: 1,
    phrase: "“uses a lot of imagery”",
    note: "Which imagery? Name it, quote it. An unquoted claim earns nothing at any band.",
  },
  {
    id: 2,
    phrase: "“to make the reader feel sad”",
    note: "Effect asserted, not analysed. Why does this choice produce that response?",
  },
  {
    id: 3,
    phrase: "“which is very effective”",
    note: "The single most expensive phrase in the paper. It fills space and adds no mark.",
  },
  {
    id: 4,
    phrase: "“This shows that…”",
    note: "Restating the content of the passage. The question asked about the writer's method, not the plot.",
  },
  {
    id: 5,
    phrase: "“Overall, the passage is very descriptive”",
    note: "A conclusion that repeats the opening. Nothing has been developed between them.",
  },
];

const methodSteps = [
  {
    number: "01",
    title: "We start with the mark scheme, not the textbook",
    body: "In the first week, your child reads the actual assessment criteria for their paper — most have never seen it. Everything after that has a reason attached to it.",
  },
  {
    number: "02",
    title: "We mark live, in front of the class",
    body: "Real scripts, annotated in real time. Students stop guessing what \"better\" means because they watch marks being awarded and withheld.",
  },
  {
    number: "03",
    title: "We build a bank, not a blank page",
    body: "Model paragraphs, sentence frames, quotation banks, analytical vocabulary. Exam confidence comes from having prepared material to draw on, not from hoping for inspiration at 9 a.m.",
  },
  {
    number: "04",
    title: "We rehearse under exam conditions",
    body: "Timed sections weekly. Two full mock papers per session, marked to board standard and returned with a band, a grade and a specific list of what to fix.",
  },
  {
    number: "05",
    title: "Parents see exactly what we see",
    body: "A written progress report each cycle: current working grade, what has improved, what has not, and what we are doing about it. No vague reassurance.",
  },
];

const parentItems = [
  {
    title: "An honest working grade, not encouragement",
    body: "After the first assessment you will be told the grade your child is currently working at — including when that is uncomfortable to hear. A tutor who tells you everything is going well for six months is not doing you a service.",
  },
  {
    title: "Evidence you can read yourself",
    body: "Progress reports include your child's actual marked work with the examiner's reasoning attached. You do not have to take anyone's word for the improvement; you can see the scripts.",
  },
  {
    title: "A structured, safe classroom",
    body: "Classes run on Zoom at fixed times with a fixed register. There are no one-to-one calls with group students outside scheduled sessions, and parents are welcome to sit in on any class.",
  },
  {
    title: "Fee clarity, in your currency",
    body: "No enrolment fee, no materials fee, no surprises mid-term. Everything is quoted upfront in PKR or USD, with international payment options confirmed before you commit.",
  },
];

const faqGroups: FAQGroup[] = [
  {
    label: "For parents",
    faqs: [
      {
        id: "oal-parent-why-already-good-marks",
        question: "My child already gets good marks in school English. Why would they need this?",
        answer:
          "School marks and board marks are set against different standards. Teachers assess against the class; examiners assess against a national mark scheme. The most common conversation I have is with a parent whose child had never scored below an A in school and came out of the board exam with a B. If your child is already scoring well, this course is about protecting that — and converting it into the top band.",
      },
      {
        id: "oal-parent-how-will-i-know",
        question: "How will I know it is working?",
        answer:
          "You receive a written progress report each cycle containing your child's current working grade, their marked scripts, and a specific list of what is improving and what is not. If the grade is not moving, you will hear that from me before you have to ask.",
      },
      {
        id: "oal-parent-classes-safe",
        question: "Are the classes safe?",
        answer:
          "Yes. Classes run on Zoom at fixed scheduled times, attendance is registered, and sessions are recorded. There are no unscheduled one-to-one calls with group students. Parents are welcome to attend any class.",
      },
      {
        id: "oal-parent-outside-pakistan",
        question: "We are not in Pakistan. Does that work?",
        answer:
          "It works well — a significant share of students join from outside Pakistan. Batch times are set to suit the Gulf, the UK and East Africa, and every class is recorded, so a difficult time zone never means a missed lesson. Fees can be paid internationally in USD.",
      },
      {
        id: "oal-parent-cost-and-pay-abroad",
        question: "What does it cost, and how do we pay from abroad?",
        answer:
          "Group and one-to-one rates are listed above. International payment options are confirmed before you commit, quoted in your currency. There is no enrolment fee and no separate charge for materials.",
      },
      {
        id: "oal-parent-try-before-committing",
        question: "Can we try before committing?",
        answer:
          "Yes. Start with the free assessment — your child completes a short written task, I mark it properly, and you receive an honest read on where they currently stand and whether I can genuinely help. There is no obligation attached to it.",
      },
      {
        id: "oal-parent-retaking",
        question: "My child is retaking. Is it too late?",
        answer:
          "Retakers are often the fastest to improve, because the problem is usually specific rather than general. Send me the previous script or statement of results and I will tell you honestly what is recoverable in the time available.",
      },
      {
        id: "oal-parent-guarantee-a-star",
        question: "Can you guarantee an A*?",
        answer:
          "No — and I would be cautious of anyone who does. What I can guarantee is that your child will understand precisely what the examiner is rewarding, will have written and had marked more practice papers than their school will set, and will walk in knowing exactly what they are doing. The grade follows from that; it cannot be promised in advance of it.",
      },
    ],
  },
  {
    label: "For students",
    faqs: [
      {
        id: "oal-student-papers-covered",
        question: "Which papers do you cover?",
        answer:
          "Cambridge O Level English Language (1123), IGCSE First Language and Second Language English, IGCSE and A Level Literature in English, AS & A Level English Language (9093), and the General Paper (8021). Edexcel International GCSE and International A Level English are also covered.",
      },
      {
        id: "oal-student-edexcel-and-cambridge",
        question: "Do you teach Edexcel as well as Cambridge?",
        answer:
          "Yes. Both boards, with the differences in mark scheme taught explicitly — because they matter, and mixing them up costs marks.",
      },
      {
        id: "oal-student-class-size",
        question: "How big are the classes?",
        answer: `A maximum of ${CLASS_SIZE_MAX}. That limit exists so every student's written work is actually read and annotated each week, which is the part that changes grades.`,
      },
      {
        id: "oal-student-missed-class",
        question: "What if I miss a class?",
        answer:
          "Every class is recorded and available to rewatch. If you miss written work, send it in late — it still gets marked.",
      },
      {
        id: "oal-student-homework-amount",
        question: "How much homework is there?",
        answer:
          "One substantial piece of written work per week, plus timed practice as the exam approaches. It is not enormous, but it is not optional either — the marking of your own writing is where the improvement happens.",
      },
      {
        id: "oal-student-set-texts",
        question: "Do you help with specific set texts?",
        answer:
          "Yes. Tell me the texts on your syllabus and teaching is built around them, including quotation banks and essay plans specific to those texts.",
      },
      {
        id: "oal-student-general-paper",
        question: "Do you cover the General Paper (8021)?",
        answer: "Yes — argument structure, use of evidence, balance, and timing.",
      },
      {
        id: "oal-student-when-to-start",
        question: "When should I start?",
        answer:
          "Ideally at the beginning of the academic year, so there is time to rebuild technique before mocks. Realistically, three months before the paper is enough to make a meaningful difference if the work is done. Under six weeks, message me and I will tell you honestly whether it is worth your money.",
      },
    ],
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "O & A Level English",
  description:
    "Specialist online coaching for Cambridge and Edexcel O Level, IGCSE, AS and A Level English.",
  provider: {
    "@type": "EducationalOrganization",
    name: site.brandName,
    url: base,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "P4H",
    instructor: {
      "@type": "Person",
      name: site.founder,
      jobTitle: site.professionalRole,
    },
  },
  inLanguage: "en",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((group) =>
    group.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }))
  ),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
    { "@type": "ListItem", position: 2, name: "Courses", item: `${base}/courses` },
    { "@type": "ListItem", position: 3, name: "O & A Level English", item: pageUrl },
  ],
};

export default function OALevelEnglishPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-white text-ink py-12 sm:py-16 lg:py-20 px-4 border-b border-line">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block bg-sea-wash text-sea-deep text-sm font-medium px-4 py-1 rounded-sm mb-4">
              New · Cambridge & Edexcel
            </span>
            <h1 className="font-serif text-[2rem] sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.08] tracking-[-0.02em]">
              {course.tagline}
            </h1>
            <p className="text-ink-soft text-base sm:text-lg mb-6 leading-relaxed">
              Specialist online coaching for Cambridge and Edexcel English, from O Level and
              IGCSE through to AS and A2. {YEARS_EXPERIENCE} years in a real classroom,
              distilled into small live batches for students in Pakistan and across the world.
            </p>
            <p className="text-ink-faint text-base mb-3 font-medium">Who this is for:</p>
            <ul className="text-ink-soft text-base space-y-2 mb-8 inline-block text-left">
              {course.whoFor.map((w, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckIcon className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  {w}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button href="/free-diagnostic-test" variant="coral" size="lg" className="w-full sm:w-auto">
                Book a Free Assessment
              </Button>
              <Button
                href={whatsappLink(
                  "Hi Aisha! I'd like to ask about O/A Level English coaching. Could you share the batch dates, fees, and how the assessment works?"
                )}
                variant="outline"
                size="lg"
                external
                className="border-ink text-ink hover:bg-ink hover:text-white w-full sm:w-auto"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
          <div>
            <HeroPhoto />
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="bg-white border-b border-stone">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <p className="text-center text-sm sm:text-base font-medium text-charcoal">
            {site.qualification} · {site.professionalRole} · Cambridge (CAIE) & Edexcel
          </p>
        </div>
      </section>

      {/* The hook */}
      <section className="py-20 px-4 bg-ivory">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink mb-6">
              Fluency is not the same as a grade.
            </h2>
            <p className="text-charcoal leading-relaxed mb-4">
              Most students who miss an A* in English are not weak at English. They read well.
              They speak well. They hand in essays their teachers describe as{" "}
              <em>good</em>. Then the paper comes back with a B, and nobody can quite explain
              what went wrong.
            </p>
            <p className="text-charcoal leading-relaxed mb-4">
              The explanation is almost always the same. Cambridge and Edexcel do not award
              marks for good English. They award marks for evidence — a particular structure, a
              particular kind of analysis, a particular way of answering the question that is
              set out in a mark scheme most students have never read.
            </p>
            <p className="text-charcoal leading-relaxed">
              That gap between <em>speaking English well</em> and <em>scoring like it</em> is the
              entire job of this course.
            </p>
          </div>
        </FadeUp>
        <p className="sm:hidden text-xs text-ink-faint max-w-5xl mx-auto mt-8 mb-3">Swipe through the three key differences</p>
        <div className="mobile-card-rail max-w-5xl mx-auto flex overflow-x-auto overscroll-x-contain snap-x snap-mandatory gap-4 pb-3 sm:grid sm:grid-cols-3 sm:gap-6 sm:mt-14">
          {hookCards.map((card, i) => (
            <FadeUp key={card.title} delay={i * 80} className="w-[82vw] max-w-[300px] shrink-0 snap-start sm:w-auto sm:max-w-none">
              <div className="bg-white rounded-md p-5 sm:p-6 border border-stone h-full">
                <h3 className="font-serif text-lg font-medium text-ink mb-2">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Boards & syllabuses */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink mb-4 text-center">
              Every English paper, both boards.
            </h2>
            <p className="text-muted text-center max-w-2xl mx-auto mb-12">
              Tell me the syllabus code on your child&apos;s timetable and I will tell you
              precisely what the examiner wants from it.
            </p>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeUp>
              <SyllabusTable title="Cambridge (CAIE)" rows={cambridgeSyllabuses} />
            </FadeUp>
            <FadeUp delay={100}>
              <SyllabusTable title="Edexcel (Pearson)" rows={edexcelSyllabuses} />
            </FadeUp>
          </div>
          <p className="text-center text-muted mt-10 max-w-2xl mx-auto">
            Not sure which specification your child is on? Send me a photo of their syllabus page
            or timetable on WhatsApp and I will confirm it for you.
          </p>
        </div>
      </section>

      {/* Two tracks */}
      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink text-center mb-12">
              Two tracks. Pick the one your child is sitting.
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-8">
            {tracks.map((track, i) => (
              <FadeUp key={track.title} delay={i * 100}>
                <div className="bg-white rounded-md border border-stone p-8 h-full flex flex-col">
                  <p className="text-teal text-sm font-medium uppercase tracking-wide mb-1">
                    {track.ageRange}
                  </p>
                  <h3 className="font-serif text-2xl font-medium text-ink mb-4">{track.title}</h3>
                  <p className="text-muted leading-relaxed mb-6">{track.intro}</p>
                  <p className="font-medium text-ink mb-3">We work on:</p>
                  <ul className="space-y-2 mb-6">
                    {track.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-charcoal">
                        <CheckIcon className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted leading-relaxed mt-auto pt-4 border-t border-stone">
                    <span className="font-medium text-ink">You should expect: </span>
                    {track.expect}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Signature: Marked like an examiner */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink mb-6">
                This is what a lesson actually looks like.
              </h2>
              <p className="text-charcoal leading-relaxed">
                Students are told their writing is &quot;good&quot; for years, then meet an
                examiner who disagrees. So in every class, we mark live — the same passage, the
                same criteria, the same red pen the examiner will use. Here is a real example of
                the kind of paragraph that feels strong and scores average.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-3 bg-card border border-stone rounded-md p-6 sm:p-8">
                <p className="font-mono text-sm sm:text-base leading-relaxed text-charcoal">
                  {passageSegments.map((seg, i) =>
                    seg.noteId ? (
                      <span
                        key={i}
                        id={`highlight-${seg.noteId}`}
                        aria-describedby={`note-${seg.noteId}`}
                        className="bg-gold/25 rounded px-0.5"
                      >
                        {seg.text}
                        <sup className="ml-0.5 text-teal font-sans font-medium not-italic">
                          {seg.noteId}
                        </sup>
                      </span>
                    ) : (
                      <span key={i}>{seg.text}</span>
                    )
                  )}
                </p>
              </div>

              <div className="lg:col-span-2">
                <ol className="space-y-4">
                  {examinerNotes.map((n) => (
                    <li key={n.id} id={`note-${n.id}`} className="flex gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-teal text-white text-xs font-medium flex items-center justify-center mt-0.5">
                        {n.id}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-ink">{n.phrase}</p>
                        <p className="text-sm text-muted leading-relaxed">{n.note}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="max-w-2xl mx-auto text-center mt-12">
              <p className="text-charcoal leading-relaxed mb-4">
                Nothing in that paragraph is <em>wrong</em>. The spelling is clean, the grammar is
                sound, and most students would be told it was fine. It sits at a low-to-mid band
                because it describes the passage instead of analysing it — and no amount of
                additional fluency will move it.
              </p>
              <p className="text-charcoal leading-relaxed">
                Rebuilding that single paragraph correctly is often worth more than a term of
                general English practice. That is the work we do, every week, on your child&apos;s
                own writing.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* The method */}
      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink mb-10 text-center">
              How the course works
            </h2>
          </FadeUp>
          <div className="space-y-6">
            {methodSteps.map((step, i) => (
              <FadeUp key={step.title} delay={i * 70}>
                <div className="flex gap-5 bg-white rounded-md p-6 border border-stone">
                  <span className="font-serif text-2xl font-medium text-teal/40 shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-ink mb-1">{step.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* What's included + pricing */}
      <IncludedList course={course} />

      <section className="py-16 px-4 bg-ivory">
        <div className="max-w-md mx-auto">
          <div className="bg-white border border-line rounded-md p-5 sm:p-8">
            <div className="mb-6">
              <p className="text-ink-faint text-sm uppercase tracking-wider mb-1">Group batch</p>
              <p className="font-serif text-2xl font-medium text-ink">Ask for the current fee</p>
              <p className="text-ink-faint text-sm mt-1">Pakistan and international payment options available.</p>
            </div>
            <div className="mb-8 pt-6 border-t border-line">
              <p className="text-ink-faint text-sm uppercase tracking-wider mb-1">One-to-one</p>
              <p className="font-serif text-2xl font-medium text-ink">Ask for the current fee</p>
              <p className="text-ink-faint text-sm mt-1">Pricing depends on level, syllabus and schedule.</p>
            </div>
            <a
              href={whatsappLink(
                "Hi Aisha! I'd like to enrol my child in O/A Level English. Could you share the fee details and next batch date?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-12 flex items-center justify-center gap-2 bg-coral hover:bg-amber-dark text-white px-4 sm:px-6 py-3.5 rounded-sm font-medium text-base transition-colors mb-4"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enrol via WhatsApp
            </a>
            <p className="text-ink-faint text-xs text-center">
              Fees, payment methods and international transfer details are shared personally on
              WhatsApp. Sibling and full-year rates available.
            </p>
          </div>
        </div>
      </section>

      {/* For parents */}
      <section className="py-20 px-4 bg-teal text-white">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6 text-center">
              A note for parents.
            </h2>
            <p className="text-white/85 leading-relaxed mb-3">
              You are being asked to pay for something you cannot directly observe — a class your
              child attends without you, in a subject where &quot;improvement&quot; is famously
              hard to measure. That is a reasonable thing to be cautious about.
            </p>
            <p className="text-white/85 leading-relaxed mb-10">So here is exactly what you get.</p>
          </FadeUp>
          <p className="sm:hidden text-xs text-white/70 mb-3">Swipe to see what parents receive</p>
          <div className="mobile-card-rail flex overflow-x-auto overscroll-x-contain snap-x snap-mandatory gap-4 pb-3 sm:grid sm:grid-cols-2 sm:gap-6 mb-10">
            {parentItems.map((item, i) => (
              <FadeUp key={item.title} delay={i * 80} className="w-[82vw] max-w-[300px] shrink-0 snap-start sm:w-auto sm:max-w-none">
                <div className="bg-white/10 rounded-md p-5 sm:p-6 h-full">
                  <h3 className="font-serif text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp>
            <p className="text-white/85 leading-relaxed text-center mb-8 max-w-xl mx-auto">
              If you would like to talk it through before booking anything, message me directly.
              I would rather have a ten-minute conversation about whether this is right for your
              child than take an enrolment that does not fit.
            </p>
            <div className="flex justify-center">
              <Button
                href={whatsappLink(
                  "Hi Aisha! I'm a parent enquiring about O/A Level English for my child. Could we discuss whether it's the right fit?"
                )}
                variant="coral"
                size="lg"
                external
                className="w-full sm:w-auto"
              >
                Message Aisha directly
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* International students */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink mb-6">
              Studying outside Pakistan?
            </h2>
            <p className="text-muted leading-relaxed mb-10">
              Cambridge and Edexcel English are sat in more than a hundred countries, and the mark
              scheme does not change at the border. Batches are scheduled so students across the
              Gulf, the UK and East Africa can attend live — and every class is recorded, so a
              time difference never becomes a missed lesson.
            </p>
          </FadeUp>
        </div>
        <FadeUp>
          <div className="max-w-2xl mx-auto rounded-md border border-stone bg-surface-tint p-5 sm:p-6 text-center">
            <h3 className="font-serif text-xl font-medium text-ink mb-2">Timings that work across time zones</h3>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-5">
              Current batch times change by intake. Message your country or time zone and Aisha will confirm the live options in your local time.
            </p>
            <Button
              href={whatsappLink("Hi Aisha! I am enquiring from outside Pakistan. Could you share the current O/A Level batch times in my local time zone?")}
              variant="outline"
              external
              className="w-full sm:w-auto"
            >
              Check my local time
            </Button>
          </div>
        </FadeUp>
      </section>

      {/* Meet Aisha */}
      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <FadeUp>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="rounded-md overflow-hidden shadow-xl bg-white">
                <Image
                  src="/images/aisha-thoughtful.jpg"
                  alt="Aisha teaching an O and A Level English class"
                  width={480}
                  height={640}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                />
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink mb-6">
              The person who will be teaching your child.
            </h2>
            <p className="text-charcoal leading-relaxed mb-4">
              I hold an {site.qualification} and I am a {site.professionalRole.toLowerCase()} in
              Lahore. For {YEARS_EXPERIENCE} years I have taught English across every level a
              student can be at — from teenagers who could not construct a paragraph to A Level
              candidates arguing about Shakespeare with more conviction than some of my
              colleagues.
            </p>
            <p className="text-charcoal leading-relaxed mb-4">
              O and A Level English became a specialism because it is the subject where the gap
              between <em>ability</em> and <em>result</em> is widest. I kept meeting bright,
              articulate students who were genuinely surprised by their grade — and every time,
              the problem was not their English. It was that nobody had ever shown them what the
              mark scheme actually rewards.
            </p>
            <p className="text-charcoal leading-relaxed">
              I now teach that online, in small batches, to students in Pakistan and overseas.
              Same syllabus, same criteria, same standard — with the one thing a crowded school
              classroom cannot offer: someone who reads every piece of work your child writes and
              tells them precisely why it scored what it did.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Upcoming batches */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-8">
            Upcoming O & A Level batches
          </h2>
          <BatchTable courseSlug="o-a-level-english" />
          <p className="text-muted text-sm mt-6 text-center">
            Batches are kept small deliberately — {CLASS_SIZE_MAX} students, so every script gets
            marked properly. Places for a given exam session close once teaching is underway.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-ivory">
        <div className="max-w-2xl mx-auto">
          <FadeUp>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink mb-8">
              Common questions
            </h2>
            <GroupedFAQAccordion groups={faqGroups} />
          </FadeUp>
        </div>
      </section>

      <CTASection
        title="Find out where your child actually stands."
        subtitle="Start with a free assessment — a short written task, properly marked, and an honest read on the grade they are currently working at. Or message me directly and we will talk it through first."
        whatsappMessage="Hi Aisha! I'd like to book a free assessment for O/A Level English."
      />
    </>
  );
}
