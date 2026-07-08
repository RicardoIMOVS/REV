import { Reveal } from "./Reveal";
import { SectionShell, SwissGrid } from "./layout";

const pillars = [
  {
    label: "01 / Precision",
    title: "Ingenieria Documentada",
    copy: "Desarrollo de propuestas tecnicas con criterios de inocuidad, trazabilidad de insumos y documentacion de soporte para cada proyecto.",
  },
  {
    label: "02 / Estetica",
    title: "Diseno Industrial",
    copy: "Entendemos que el packaging es la primera interfaz del usuario. Creamos objetos de deseo, no solo envases.",
  },
  {
    label: "03 / Escala",
    title: "Logistica Global",
    copy: "Planeacion operativa para proyectos que requieren orden documental, coordinacion de proveedores y rutas de distribucion escalables.",
  },
];

export function WhyRevolutionSection() {
  return (
    <SectionShell className="py-32 md:py-40" id="ciencia">
      <SwissGrid>
        {pillars.map((pillar, index) => (
          <Reveal
            key={pillar.label}
            className="col-span-12 border-t border-[#c4c7c7]/40 pt-8 lg:col-span-4"
            delay={index * 160}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-black">
              {pillar.label}
            </span>
            <h3 className="mt-6 text-3xl font-bold text-black md:text-4xl">
              {pillar.title}
            </h3>
            <p className="mt-4 leading-7 text-[#444748]">{pillar.copy}</p>
          </Reveal>
        ))}
      </SwissGrid>
    </SectionShell>
  );
}
