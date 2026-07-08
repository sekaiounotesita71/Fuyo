import type { Metadata } from "next";
import { CardLink } from "@/components/CardLink";
import { DiagnosisCTA } from "@/components/DiagnosisCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { columnPosts, company } from "@/data/site";

export const metadata: Metadata = {
  title: `食品輸出DXコラム | ${company.nameJa}`,
  description: "食品・水産業界の海外展開、輸出準備、業務DX、AI活用、WEB導線に関する実務コラムを発信します。",
  alternates: { canonical: "/column" },
  openGraph: {
    title: "食品輸出DXコラム",
    description: "食品・水産業界の海外展開、輸出準備、業務DX、AI活用、WEB導線に関する実務コラムを発信します。",
    url: "/column",
    siteName: company.nameJa,
    locale: "ja_JP",
    type: "website"
  }
};

export default function ColumnPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Column"
          title="食品輸出DXコラム"
          lead="食品・水産業界の海外展開、輸出準備、業務DX、AI活用、WEB導線に関する実務コラムを発信します。"
          ctaLabel="無料相談する"
        />
        <section className="section-y bg-smoke">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Articles"
              title="実務に役立つ整理と考え方"
              description="最初は基礎的なテーマから、海外展開や現場DXを検討する際の判断材料をまとめます。"
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {columnPosts.map((post) => (
                <CardLink
                  key={post.slug}
                  title={post.title}
                  description={post.excerpt}
                  href={`/column/${post.slug}`}
                  label="続きを読む"
                  meta={post.category}
                />
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
