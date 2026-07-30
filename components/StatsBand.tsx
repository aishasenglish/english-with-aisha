import { courses } from "@/content/courses";
import { site } from "@/content/site";

const stats = [
  { num: String(courses.length), label: "Specialist courses across exam prep & skills" },
  { num: String(site.batchCadenceDays), label: "Days between new batch start dates" },
  { num: "100%", label: "Classes live on Zoom, fully recorded" },
  { num: "1:1", label: "Personal feedback available on every course" },
];

export default function StatsBand() {
  return (
    <section className="bg-surface-tint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface-tint px-6 py-10">
              <p className="font-serif font-extrabold text-coral text-4xl sm:text-5xl leading-none">
                {s.num}
              </p>
              <p className="text-ink-soft text-sm mt-3 leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
