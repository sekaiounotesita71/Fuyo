import { company, navItems } from "@/data/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/82 text-white backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-6">
        <a href="#" className="group flex items-center gap-3" aria-label={`${company.nameJa} トップへ`}>
          <span className="grid size-9 place-items-center border border-white/20 bg-white/5 font-serif text-lg">
            芙
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold">{company.nameJa}</span>
            <span className="block text-[11px] uppercase tracking-[0.22em] text-white/55">
              {company.nameEn}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-white/74 lg:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 sm:inline-flex"
        >
          無料相談
        </a>
      </div>
    </header>
  );
}
