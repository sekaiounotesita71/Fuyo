import { SectionHeading } from "@/components/SectionHeading";
import { flow } from "@/data/site";

export function Flow() {
  return (
    <section className="section-y bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Flow"
          title="相談から実装、改善まで"
          align="center"
        />
        <ol className="mt-14 grid gap-4 md:grid-cols-5">
          {flow.map((item, index) => (
            <li key={item} className="relative border border-line bg-white p-6 shadow-sm">
              <span className="font-serif text-4xl font-semibold text-slate-200">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-8 font-semibold text-ink">{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
