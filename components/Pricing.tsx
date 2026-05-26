import { SectionHeading } from "@/components/SectionHeading";
import { pricing } from "@/data/site";

export function Pricing() {
  return (
    <section id="pricing" className="section-y bg-smoke">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Pricing"
          title="料金目安"
          description="課題の範囲、制作内容、伴走期間により個別見積もりとなります。まずは必要な支援範囲の整理から対応します。"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {pricing.map((plan) => (
            <article key={plan.name} className="border border-line bg-white p-6">
              <h3 className="text-base font-bold text-ink">{plan.name}</h3>
              <p className="mt-5 font-serif text-3xl font-semibold text-navy">{plan.price}</p>
              <p className="mt-5 text-sm leading-7 text-slate-600">{plan.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">内容により個別見積もり。</p>
      </div>
    </section>
  );
}
