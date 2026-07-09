import { businessLines } from "../_data/business-lines";
import { Reveal } from "./Reveal";
import { SectionShell, SwissGrid } from "./layout";

export function ServicesSection() {
  return (
    <SectionShell className="py-32 md:py-40" id="colecciones">
      <div className="mb-16 max-w-4xl md:mb-20">
        <Reveal>
          <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
            Líneas de negocio
          </span>
          <h2 className="text-4xl font-bold uppercase leading-tight text-black md:text-6xl">
            Un ecosistema para informar, convertir y vender
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#444748]">
            Cada línea responde a un tipo de usuario y a una conversión
            específica: cuenta comercial, asesoría, cotización o compra.
          </p>
        </Reveal>
      </div>
      <SwissGrid>
        {businessLines.map((service, index) => (
          <Reveal
            key={service.label}
            className="group col-span-12 md:col-span-6"
            delay={index * 160}
          >
            <article
              className="rev-card-motion flex min-h-112 scroll-mt-32 flex-col border border-[#c4c7c7]/35 bg-white p-7 group-hover:border-black"
              id={service.id}
            >
              <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-black">
                {service.label}
              </span>
              <h3 className="mb-6 text-3xl font-bold uppercase text-black">
                {service.detailTitle}
              </h3>
              <p className="mb-8 max-w-sm leading-7 text-[#444748]">
                {service.summary}
              </p>
              <ul className="mb-10 space-y-3 text-sm leading-6 text-[#444748]">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 bg-black transition-transform group-hover:scale-125"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                className="mt-auto inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-transform group-hover:translate-x-2"
                href={service.cta.href}
                rel={
                  service.cta.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                target={service.cta.href.startsWith("http") ? "_blank" : undefined}
              >
                {service.cta.label} <span aria-hidden="true">-&gt;</span>
              </a>
            </article>
          </Reveal>
        ))}
      </SwissGrid>
    </SectionShell>
  );
}
