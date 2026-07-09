import { Reveal } from "./Reveal";
import { SectionShell, SwissGrid } from "./layout";

const pillars = [
  {
    label: "01 / Informar",
    title: "Confianza institucional",
    copy: "Contenido claro para explicar quién es Revolution Pharma, cómo trabaja y qué rutas ofrece dentro de la industria de suplementos.",
  },
  {
    label: "02 / Convertir",
    title: "Rutas comerciales",
    copy: "Distribución, marca blanca e ingredientes se presentan como caminos claros para iniciar una conversación comercial, una asesoría o una cotización.",
  },
  {
    label: "03 / Comprar",
    title: "BĀSE como marca propia",
    copy: "La marca propia muestra la capacidad de llevar un producto del concepto al consumidor con una experiencia enfocada en nutrición esencial.",
  },
];

export function WhyRevolutionSection() {
  return (
    <SectionShell className="py-32 md:py-40" id="ciencia">
      <SwissGrid>
        {pillars.map((pillar, index) => (
          <Reveal
            key={pillar.label}
            className="group col-span-12 lg:col-span-4"
            delay={index * 160}
          >
            <article className="rev-card-motion min-h-88 border-t border-[#c4c7c7]/40 bg-transparent pt-8 group-hover:border-black">
              <span className="text-xs font-semibold uppercase tracking-widest text-black">
                {pillar.label}
              </span>
              <h3 className="mt-6 text-3xl font-bold text-black md:text-4xl">
                {pillar.title}
              </h3>
              <p className="mt-4 leading-7 text-[#444748]">{pillar.copy}</p>
            </article>
          </Reveal>
        ))}
      </SwissGrid>
    </SectionShell>
  );
}
