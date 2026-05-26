import { company, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink pb-10 text-white">
      <div className="container-shell border-t border-white/12 pt-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-2xl font-semibold">{company.nameJa}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/48">{company.nameEn}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/62" aria-label="フッターナビゲーション">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
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
