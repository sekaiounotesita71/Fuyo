import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  company,
  diagnosisFaqs,
  diagnosisFlow,
  diagnosisItems,
  diagnosisOutcomes,
  diagnosisPricing,
  diagnosisTargets
} from "@/data/site";

const title = "食品輸出・DX 初回診断";
const description =
  "食品・水産・卸売・加工業向けに、海外展開、業務DX、AI活用、WEB導線の現状を整理し、まず取り組むべき課題を明確にする初回診断です。";

export const metadata: Metadata = {
  title: `${title} | ${company.nameJa}`,
  description,
  alternates: { canonical: "/diagnosis" },
  openGraph: {
    title,
    description,
    url: "/diagnosis",
    siteName: company.nameJa,
    locale: "ja_JP",
    type: "website"
  }
};

export default function DiagnosisPage() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: company.siteUrl },
      { "@type": "ListItem", position: 2, name: title, item: `${company.siteUrl}/diagnosis` }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <Header />
      <main>
        <PageHero
          eyebrow="Diagnosis"
          title={title}
          lead="食品・水産・卸売・加工業の海外展開、業務DX、AI活用、WEB導線について、現状の課題と優先順位を整理する初回診断です。何から始めればよいかわからない段階でも、自社の状況に合わせて進め方を一緒に確認します。"
          ctaLabel="初回診断を申し込む"
          ctaHref="#contact"
        />

        <section className="section-y bg-white">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Recommended"
              title="このような企業におすすめです"
              description="海外展開と社内業務の整理を、別々ではなく実務の流れとして確認します。"
            />
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {diagnosisTargets.map((target) => (
                <div key={target} className="flex gap-4 border border-line bg-smoke/60 p-5">
                  <span className="mt-2 size-2 shrink-0 bg-gold" aria-hidden />
                  <p className="font-medium leading-7 text-slate-700">{target}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-smoke">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Checklist"
              title="初回診断で確認すること"
              description="現状を広く確認し、最初に取り組むべき課題と優先順位を整理します。"
              align="center"
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {diagnosisItems.map((item, index) => (
                <article key={item.title} className="border border-line bg-white p-6 shadow-sm">
                  <span className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-5 font-serif text-2xl font-semibold text-ink">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-white">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Outcome"
              title="診断後に整理できること"
              description="初回診断では、すぐに大きな施策を決めるのではなく、自社の現状に合わせて次の一歩を明確にします。"
            />
            <div className="grid gap-3">
              {diagnosisOutcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3 border border-line bg-white p-5 shadow-sm">
                  <CheckCircle2 size={19} className="mt-1 shrink-0 text-green" aria-hidden />
                  <p className="font-semibold leading-7 text-ink">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-smoke">
          <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border border-line bg-white p-7 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Price</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold text-ink">料金</h2>
              <p className="mt-7 font-serif text-4xl font-semibold text-green">初回診断：無料</p>
              <p className="mt-5 leading-8 text-slate-600">
                初回診断は30分程度を想定しています。具体的な資料作成、業務設計、レポート作成、継続支援が必要な場合は、内容に応じて別途ご提案します。
              </p>
            </div>
            <div className="border border-line bg-white p-7 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-ink">有料メニューの目安</h3>
              <ul className="mt-8 grid gap-4">
                {diagnosisPricing.map((price) => (
                  <li key={price} className="border-b border-line pb-4 text-sm font-semibold leading-7 text-slate-700">
                    {price}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-y bg-white">
          <div className="container-shell">
            <SectionHeading eyebrow="Flow" title="ご相談の流れ" align="center" />
            <ol className="mt-14 grid gap-4 md:grid-cols-5">
              {diagnosisFlow.map((step, index) => (
                <li key={step} className="border border-line bg-white p-5 shadow-sm">
                  <span className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                    STEP {index + 1}
                  </span>
                  <p className="mt-5 font-semibold leading-7 text-ink">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-y bg-smoke">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="FAQ" title="よくある質問" />
            <div className="divide-y divide-line border-y border-line bg-white px-6">
              {diagnosisFaqs.map((faq) => (
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

        <Contact />
      </main>
      <Footer />
    </>
  );
}
