import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="section-y bg-smoke">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Services"
          title="成長に必要な実務を、横断的に整える"
          description="海外展開、DX、インバウンド、WEB制作を別々の施策で終わらせず、問い合わせ・商談・受発注・運用までつながる形に設計します。"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group border border-line bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-ink">{service.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
                  </div>
                  <span className="grid size-12 shrink-0 place-items-center border border-line bg-smoke text-navy transition group-hover:border-gold group-hover:text-gold">
                    <Icon size={22} aria-hidden />
                  </span>
                </div>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="size-1.5 bg-gold" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
