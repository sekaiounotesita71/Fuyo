import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-ink pt-16 text-white">
      <Image
        src="/images/hero-food-export.png"
        alt="食品輸出とグローバルビジネスを想起させる上質なデスクシーン"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-62"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,17,28,0.94)_0%,rgba(11,17,28,0.74)_42%,rgba(11,17,28,0.22)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />

      <div className="container-shell relative z-10 flex min-h-[calc(92svh-64px)] items-center py-20">
        <div className="max-w-3xl">
          <p className="reveal text-xs font-bold uppercase tracking-[0.28em] text-white/62">
            Fuyo LLC / Global Food Business & DX
          </p>
          <h1 className="reveal reveal-delay-1 mt-6 font-serif text-4xl font-semibold leading-[1.18] md:text-6xl lg:text-7xl">
            食品業界の海外展開と業務DXを支援する
          </h1>
          <p className="reveal reveal-delay-2 mt-7 max-w-2xl text-base leading-8 text-white/76 md:text-xl md:leading-10">
            合同会社芙蓉は、海外営業、AI・DX導入、インバウンド対応まで、現場理解を強みに中小企業の成長を支援します。
          </p>
          <div className="reveal reveal-delay-2 mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white px-6 py-4 text-sm font-bold text-ink transition hover:bg-slate-100"
            >
              無料相談する
              <ArrowRight size={17} aria-hidden />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white/22 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              サービスを見る
              <ArrowDown size={17} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
