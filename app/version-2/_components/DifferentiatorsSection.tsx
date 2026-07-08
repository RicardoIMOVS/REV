import { FadeIn } from "./FadeIn";
import { SectionShell, labelClass } from "./layout";

const differentiators = [
  {
    icon: "Bio",
    title: "Ciencia Aplicada",
    copy: "Desarrollo de propuestas tecnicas con revision documental, seleccion responsable de insumos y criterios de inocuidad.",
  },
  {
    icon: "ISO",
    title: "Socio Estrategico",
    copy: "Acompanamos el roadmap de marca con criterios de cumplimiento, trazabilidad y comunicacion responsable.",
  },
  {
    icon: "40%",
    title: "Agilidad Industrial",
    copy: "Planeacion de procesos, proveedores y entregables para mejorar la coordinacion operativa del proyecto.",
  },
];

export function DifferentiatorsSection() {
  return (
    <SectionShell className="bg-[#f5f3f3] py-32 md:py-40" id="id">
      <FadeIn className="mb-20">
        <span className={`${labelClass} mb-4 block text-[#192830]`}>
          Diferenciadores
        </span>
        <h2 className="text-4xl font-semibold text-[#192830] md:text-5xl">
          Excelencia Engineered
        </h2>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-3">
        {differentiators.map((item, index) => (
          <FadeIn key={item.title} delay={index * 120}>
            <article className="group border border-[#192830]/5 bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition duration-500 hover:-translate-y-2">
              <div className="mb-10 flex h-14 w-14 items-center justify-center border border-[#192830]/15 text-sm font-bold text-[#192830] transition duration-500 group-hover:scale-110 group-hover:bg-[#192830] group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="mb-6 text-3xl font-semibold text-[#192830]">
                {item.title}
              </h3>
              <p className="leading-7 text-[#43474a]">{item.copy}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
