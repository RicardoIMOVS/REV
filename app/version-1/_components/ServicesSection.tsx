import { Reveal } from "./Reveal";
import { SectionShell, SwissGrid } from "./layout";

const services = [
  {
    label: "01 / I+D",
    title: "Formulacion Customizada",
    copy: "Desarrollo de formulas y especificaciones con base tecnica, revision documental e ingredientes compatibles con el marco aplicable.",
  },
  {
    label: "02 / Branding",
    title: "Direccion de Arte Pharma",
    copy: "Elevamos la percepcion de tu producto a traves de un diseno visual que comunica autoridad y lujo contemporaneo.",
  },
];

export function ServicesSection() {
  return (
    <SectionShell className="py-32 md:py-40" id="colecciones">
      <h2 className="mb-16 text-4xl font-bold uppercase text-black">
        Nuestros servicios cientificos
      </h2>
      <SwissGrid>
        {services.map((service, index) => (
          <Reveal
            key={service.label}
            className="group col-span-12 cursor-pointer md:col-span-6"
            delay={index * 160}
          >
            <div className="border-b border-[#c4c7c7]/40 pb-12 transition-colors group-hover:border-black">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-black">
                {service.label}
              </span>
              <h3 className="mb-6 text-3xl font-bold uppercase text-black">
                {service.title}
              </h3>
              <p className="mb-8 max-w-sm leading-7 text-[#444748]">
                {service.copy}
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-transform group-hover:translate-x-2">
                Saber mas <span aria-hidden="true">-&gt;</span>
              </span>
            </div>
          </Reveal>
        ))}
      </SwissGrid>
    </SectionShell>
  );
}
