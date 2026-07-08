import { ArrowRight } from "lucide-react";
import Link from "next/link";

type CTASectionProps = {
  title: string;
  description?: string;
  label?: string;
  href?: string;
};

export function CTASection({
  title,
  description = "まずは現状の課題整理から対応可能です。お気軽にご相談ください。",
  label = "無料相談する",
  href = "/#contact"
}: CTASectionProps) {
  return (
    <section className="bg-ink py-16 text-white">
      <div className="container-shell flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">Contact</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
          <p className="mt-5 leading-8 text-white/68">{description}</p>
        </div>
        <Link href={href} className="btn-primary shrink-0">
          {label}
          <ArrowRight size={17} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
