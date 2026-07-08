import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { CardLink } from "@/components/CardLink";
import { Contact } from "@/components/Contact";
import { DiagnosisCTA } from "@/components/DiagnosisCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import { columnPosts, pricing, problems, processSteps, services, strengths } from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-ink pt-16 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('./images/hero-food-export.png')" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,27,22,0.96),rgba(14,27,22,0.78)_48%,rgba(14,27,22,0.38))]" />
          <div className="container-shell relative z-10 grid min-h-[92svh] items-center gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
                FUYOU LLC / Food Business AI & DX
              </p>
              <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.18] md:text-6xl">
                食品業界の“面倒”を、AIとDXで減らす。
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/78 md:text-xl md:leading-10">
                LINE注文、見積作成、営業管理、海外対応まで。現場を理解した実践型の業務改善支援。
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link className="btn-primary" href="/diagnosis">
                  食品輸出・DX 初回診断を申し込む
                  <ArrowRight size={17} aria-hidden />
                </Link>
                <a className="btn-outline-dark" href="#services">
                  サービス内容を見る
                </a>
              </div>
            </div>

            <div className="hidden border border-white/14 bg-white/[0.06] p-7 shadow-soft backdrop-blur-md lg:block">
              <p className="font-serif text-2xl font-semibold">現場で使える改善から始める</p>
              <div className="mt-8 grid gap-4">
                {["LINE注文整理", "見積作成効率化", "海外バイヤー対応"].map((item) => (
                  <div key={item} className="flex items-center gap-3 border border-white/12 bg-white/[0.04] p-4">
                    <CheckCircle2 size={18} className="text-gold" aria-hidden />
                    <span className="text-sm font-semibold text-white/86">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="problems" className="section-y bg-white">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionHeading
              eyebrow="Problems"
              title="日々の業務に、こんな負担はありませんか。"
              description="食品業界の現場では、注文、見積、相場判断、海外対応が人に依存しやすく、忙しいほど改善が後回しになります。"
            />
            <div className="grid gap-3">
              {problems.map((problem) => (
                <div key={problem} className="flex gap-4 border border-line bg-smoke/60 p-4">
                  <span className="mt-2 size-2 shrink-0 bg-gold" aria-hidden />
                  <p className="font-medium leading-7 text-slate-700">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-y bg-smoke">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Services"
              title="食品業界の現場に合わせて、必要なところから整えます。"
              description="大きなシステムを前提にせず、確認漏れ、転記作業、属人化、海外対応の負担を小さく減らす支援です。"
              align="center"
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="border border-line bg-white p-7 shadow-sm">
                    <span className="grid size-12 place-items-center border border-line bg-white text-green">
                      <Icon size={22} aria-hidden />
                    </span>
                    <h3 className="mt-7 font-serif text-2xl font-semibold text-ink">{service.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
                    <Link href={service.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green">
                      詳しく見る
                      <ArrowRight size={16} aria-hidden />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="strengths" className="section-y bg-ink text-white">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Strengths"
              title="一般的なIT会社ではなく、食品の現場を分かる支援者として。"
              description="食品・水産・輸出実務の現場感をもとに、経営者にも現場担当者にも分かりやすい形でAIとDXを導入します。"
              tone="dark"
            />
            <div className="hairline mt-12" />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {strengths.map((strength, index) => {
                const Icon = strength.icon;
                return (
                  <article key={strength.title} className="border border-white/12 bg-white/[0.035] p-5">
                    <div className="flex items-center justify-between text-white/42">
                      <Icon size={22} aria-hidden />
                      <span className="font-serif text-sm">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-8 font-serif text-xl font-semibold text-white">{strength.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/66">{strength.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="section-y bg-white">
          <div className="container-shell">
            <SectionHeading eyebrow="Process" title="無料相談から、小さく試して定着まで。" align="center" />
            <ol className="mt-14 grid gap-4 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <li key={step.title} className="border border-line bg-white p-6 shadow-sm">
                  <span className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                    STEP {index + 1}
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="pricing" className="section-y bg-smoke">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Pricing"
              title="料金イメージ"
              description="内容により変動します。まずはお気軽にご相談ください。"
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {pricing.map((plan) => (
                <article key={plan.name} className="border border-line bg-white p-6">
                  <h3 className="text-base font-bold text-ink">{plan.name}</h3>
                  <p className="mt-5 font-serif text-3xl font-semibold text-green">{plan.price}</p>
                  <p className="mt-5 text-sm leading-7 text-slate-600">{plan.detail}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-500">※表示価格は目安です。支援範囲や期間に応じて個別にお見積りします。</p>
          </div>
        </section>

        <section className="section-y bg-white">
          <div className="container-shell">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Column"
                title="食品輸出DXコラム"
                description="海外展開、輸出準備、業務DX、AI活用、WEB導線に関する基礎的な整理を発信します。"
              />
              <Link href="/column" className="inline-flex text-sm font-bold text-green">
                コラムを見る
              </Link>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {columnPosts.slice(0, 3).map((post) => (
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

        <section className="bg-smoke py-16">
          <div className="container-shell flex flex-col justify-between gap-8 border border-line bg-white p-8 md:flex-row md:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Note</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-ink">代表の考え方をnoteでも発信します。</h2>
              <p className="mt-4 leading-8 text-slate-600">
                食品業界の海外展開、現場DX、AI活用について、公式サイトでは伝えきれない実務目線の話をまとめていきます。
              </p>
            </div>
            <Link href="/note" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-green">
              note発信を見る
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </section>

        <DiagnosisCTA />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
