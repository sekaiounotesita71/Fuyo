import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { DiagnosisCTA } from "@/components/DiagnosisCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { company, noteTopics } from "@/data/site";

export const metadata: Metadata = {
  title: `代表note・発信まとめ | ${company.nameJa}`,
  description: "合同会社芙蓉代表の考え方、食品業界の海外展開、現場DX、AI活用、中小企業の業務改善に関する発信導線です。",
  alternates: { canonical: "/note" },
  openGraph: {
    title: "代表note・発信まとめ",
    description: "公式サイトでは伝えきれない考え方や実務目線の話をnoteでも発信していきます。",
    url: "/note",
    siteName: company.nameJa,
    locale: "ja_JP",
    type: "website"
  }
};

export default function NotePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Note"
          title="現場で感じたこと、支援の考え方をnoteで発信します。"
          lead="合同会社芙蓉では、食品業界の海外展開、現場DX、AI活用、中小企業の業務改善について、公式サイトだけでは伝えきれない考え方や実務目線の話をnoteでも発信していきます。"
          ctaLabel="支援内容を詳しく見る"
          ctaHref="/services/export"
        />
        <section className="section-y bg-white">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Topics"
              title="noteで発信予定のテーマ"
              description="公式サイトはサービス内容を整理する場、noteは代表の考え方や現場感を伝える場として活用していきます。"
            />
            <div className="grid gap-3">
              {noteTopics.map((topic) => (
                <div key={topic} className="flex gap-4 border border-line bg-smoke/60 p-4">
                  <span className="mt-2 size-2 shrink-0 bg-gold" aria-hidden />
                  <p className="font-medium leading-7 text-slate-700">{topic}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-smoke py-16">
          <div className="container-shell flex flex-col justify-between gap-8 border border-line bg-white p-8 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">External</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-ink">noteでも発信予定です</h2>
              <p className="mt-4 leading-8 text-slate-600">note URLは後から差し替えできるように定数化しています。</p>
            </div>
            <a href={company.noteUrl} className="inline-flex items-center gap-2 text-sm font-bold text-green">
              note発信を見る
              <ArrowRight size={16} aria-hidden />
            </a>
          </div>
        </section>
        <DiagnosisCTA />
      </main>
      <Footer />
    </>
  );
}
