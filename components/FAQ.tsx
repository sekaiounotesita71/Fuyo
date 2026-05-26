import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/data/site";

export function FAQ() {
  return (
    <section className="section-y bg-white">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="FAQ" title="よくあるご質問" />
        <div className="divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-ink">
                <span>{faq.question}</span>
                <span className="text-2xl font-light text-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-8 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
