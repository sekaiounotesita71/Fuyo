import { CTASection } from "@/components/CTASection";
import { diagnosisCta } from "@/data/site";

export function DiagnosisCTA() {
  return (
    <CTASection
      title={diagnosisCta.title}
      description={diagnosisCta.description}
      label={diagnosisCta.label}
      href={diagnosisCta.href}
    />
  );
}
