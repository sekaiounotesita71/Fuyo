import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="section-y bg-white">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="About"
          title="現場を知るから、実行まで支援できる"
        />
        <div className="border-l border-line pl-6 md:pl-10">
          <p className="text-lg leading-9 text-slate-700">
            食品業界、とくに水産・輸出・海外営業の現場で培った知見を活かし、単なるアドバイスではなく、営業資料作成、業務整理、AI活用、WEB導線設計まで実務ベースで支援します。
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["現場理解", "海外営業", "実務実装"].map((item) => (
              <div key={item} className="border border-line bg-smoke/60 p-5">
                <p className="font-serif text-xl font-semibold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
