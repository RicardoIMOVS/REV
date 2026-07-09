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
    copy: "Distribución, marca blanca e ingredientes se presentan como caminos de contacto, asesoría o cotización sin funciones transaccionales.",
  },
  {
    label: "03 / Comprar",
    title: "BASE visual",
    copy: "La marca propia muestra la capacidad de llevar un producto del concepto al consumidor, sin activar carrito ni checkout en esta versión.",
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
