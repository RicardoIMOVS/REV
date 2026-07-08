import { FadeIn } from "./FadeIn";
import { SectionShell, labelClass } from "./layout";

const stats = [
  ["QA", "Control Documental"],
  ["BPM", "Higiene Aplicable"],
  ["Lote", "Trazabilidad"],
  ["MX", "Marco Regulatorio"],
];

export function StatsSection() {
  return (
    <SectionShell className="bg-[#192830] py-28 text-white md:py-36">
      <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map(([value, label], index) => (
          <FadeIn key={label} delay={index * 100}>
            <div className="text-5xl font-bold md:text-6xl">
              {value}
            </div>
            <div className={`${labelClass} mt-3 text-white/60`}>{label}</div>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
