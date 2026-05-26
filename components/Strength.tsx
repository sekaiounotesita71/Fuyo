import { SectionHeading } from "@/components/SectionHeading";
import { strengths } from "@/data/site";

export function Strength() {
  return (
    <section id="strength" className="section-y bg-ink text-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Strength"
          title="食品業界に特化した、実務型の支援"
          description="現場で使われる言葉、社内の制約、営業と受発注のつながりまで踏まえ、実行できる形に落とし込みます。"
          tone="dark"
        />
        <div className="hairline mt-12" />
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return (
              <div key={strength.title} className="border border-white/12 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between gap-4 text-white/44">
                  <Icon size={22} aria-hidden />
                  <span className="font-serif text-sm">0{index + 1}</span>
                </div>
                <p className="mt-8 min-h-14 text-sm font-semibold leading-7 text-white/86">
                  {strength.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
