import { ArrowRight } from "lucide-react";
import Link from "next/link";

type CardLinkProps = {
  title: string;
  description: string;
  href: string;
  label?: string;
  meta?: string;
};

export function CardLink({ title, description, href, label = "詳しく見る", meta }: CardLinkProps) {
  return (
    <article className="border border-line bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      {meta ? <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{meta}</p> : null}
      <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug text-ink">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
      <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green">
        {label}
        <ArrowRight size={16} aria-hidden />
      </Link>
    </article>
  );
}
