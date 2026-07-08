import Link from "next/link";
import { company, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink pb-10 text-white">
      <div className="container-shell border-t border-white/12 pt-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-2xl font-semibold">{company.nameJa}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/48">{company.nameEn}</p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/58">
              事業内容：食品業界向けAI・DX導入支援、海外進出支援、業務改善支援
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/62" aria-label="フッターナビゲーション">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-xs text-white/38">
          © {new Date().getFullYear()} {company.nameEn}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
