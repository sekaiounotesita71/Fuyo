import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { DiagnosisCTA } from "@/components/DiagnosisCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { company, diagnosisCta, serviceDetails, type ServiceSlug } from "@/data/site";

type ServiceDetailPageProps = {
  slug: ServiceSlug;
};

export function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const service = serviceDetails[slug];
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: company.siteUrl },
      { "@type": "ListItem", position: 2, name: service.title, item: `${company.siteUrl}${service.href}` }
    ]
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <Header />
      <main>
        <PageHero
          eyebrow="Service"
          title={service.heading}
          lead={service.lead}
          ctaLabel={diagnosisCta.label}
          ctaHref={diagnosisCta.href}
        />

        <section className="section-y bg-white">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="Issues" title="こんな課題はありませんか？" />
            <div className="grid gap-3">
              {service.challenges.map((item) => (
                <div key={item} className="flex gap-4 border border-line bg-smoke/60 p-4">
                  <span className="mt-2 size-2 shrink-0 bg-gold" aria-hidden />
                  <p className="font-medium leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y bg-smoke">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Support"
              title="支援できること"
              description="単なるアドバイスで終わらせず、資料、業務整理、WEB導線、運用まで実務ベースで支援します。"
            />
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {service.supports.map((item) => (
                <div key={item} className="flex items-start gap-3 border border-line bg-white p-5">
                  <CheckCircle2 size={19} className="mt-1 shrink-0 text-green" aria-hidden />
                  <p className="font-semibold leading-7 text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {"deliverables" in service ? (
          <section className="section-y bg-white">
            <div className="container-shell">
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                <SectionHeading
                  eyebrow="Deliverables"
                  title={service.deliverables.title}
                  description={service.deliverables.description}
                />
                <div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {service.deliverables.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 border border-line bg-smoke/60 p-5">
                        <CheckCircle2 size={18} className="mt-1 shrink-0 text-green" aria-hidden />
                        <p className="font-semibold leading-7 text-ink">{item}</p>
                      </div>
                    ))}
                  </div>
                  <Link href="/diagnosis" className="btn-primary mt-8">
                    {service.deliverables.ctaLabel}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {"philosophy" in service ? (
          <section className="bg-white py-16">
            <div className="container-shell border-l-2 border-gold pl-6 md:pl-10">
              <h2 className="font-serif text-3xl font-semibold text-ink">{service.philosophyTitle}</h2>
              <p className="mt-5 max-w-4xl leading-8 text-slate-700">{service.philosophy}</p>
            </div>
          </section>
        ) : null}

        <section className="section-y bg-white">
          <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading eyebrow="Flow" title="支援の流れ" />
              <ol className="mt-10 grid gap-4 md:grid-cols-2">
                {service.flow.map((item, index) => (
                  <li key={item} className="border border-line bg-white p-5 shadow-sm">
                    <span className="font-serif text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                      STEP {index + 1}
                    </span>
                    <p className="mt-4 font-semibold text-ink">{item}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="border border-line bg-smoke p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Pricing</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-ink">料金目安</h2>
              <ul className="mt-8 grid gap-4">
                {service.prices.map((item) => (
                  <li key={item} className="border-b border-line pb-4 text-sm font-semibold leading-7 text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-6 text-slate-500">支援範囲や期間に応じて個別にお見積りします。</p>
            </div>
          </div>
        </section>

        <DiagnosisCTA />
      </main>
      <Footer />
    </>
  );
}
