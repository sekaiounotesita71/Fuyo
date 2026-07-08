import type { Metadata } from "next";
import { DiagnosisCTA } from "@/components/DiagnosisCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { caseThemes, company } from "@/data/site";

export const metadata: Metadata = {
  title: `相談テーマ例 | ${company.nameJa}`,
  description: "食品メーカー、水産会社、食品卸売業、中小企業のAI活用など、合同会社芙蓉に相談できるテーマ例を紹介します。",
  alternates: { canonical: "/case" },
  openGraph: {
    title: "相談テーマ例",
    description: "食品・水産・輸出・業務DXに関する相談テーマ例を紹介します。",
    url: "/case",
    siteName: company.nameJa,
    locale: "ja_JP",
    type: "website"
  }
};

export default function CasePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Theme"
          title="相談テーマ例"
          lead="支援実績として断定するものではなく、このようなご相談に対応できるというテーマ例です。食品・水産・輸出・業務DXの課題整理からご相談ください。"
        />
        <section className="section-y bg-smoke">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Examples"
              title="このようなご相談に対応できます"
              description="実績や成果を誇張せず、現場で起こりやすい課題に対して、資料整理・導線設計・業務改善の観点から支援します。"
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {caseThemes.map((theme, index) => (
                <article key={theme.title} className="border border-line bg-white p-7">
                  <span className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                    Theme {index + 1}
                  </span>
                  <h2 className="mt-5 font-serif text-2xl font-semibold text-ink">{theme.title}</h2>
                  <p className="mt-4 leading-8 text-slate-600">{theme.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <DiagnosisCTA />
      </main>
      <Footer />
    </>
  );
}
