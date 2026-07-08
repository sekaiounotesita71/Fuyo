import { ArrowRight } from "lucide-react";
import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({ eyebrow, title, lead, ctaLabel = "無料相談する", ctaHref = "/#contact" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink pt-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(169,133,67,0.18),transparent_32%),linear-gradient(90deg,rgba(14,27,22,0.96),rgba(14,27,22,0.78))]" />
      <div className="container-shell relative z-10 py-24 md:py-32">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl font-serif text-4xl font-semibold leading-[1.18] md:text-6xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-base leading-8 text-white/76 md:text-lg md:leading-9">{lead}</p>
        <Link href={ctaHref} className="btn-primary mt-10">
          {ctaLabel}
          <ArrowRight size={17} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
