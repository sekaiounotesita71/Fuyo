type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light"
}: SectionHeadingProps) {
  const centered = align === "center";
  const titleClass = tone === "dark" ? "text-white" : "text-ink";
  const descriptionClass = tone === "dark" ? "text-white/68" : "text-slate-600";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
      <h2 className={`mt-4 font-serif text-3xl font-semibold leading-tight md:text-5xl ${titleClass}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 md:text-lg ${descriptionClass}`}>{description}</p>
      ) : null}
    </div>
  );
}
