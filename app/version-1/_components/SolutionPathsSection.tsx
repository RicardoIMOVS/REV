import { businessLines } from "../_data/business-lines";
import { Reveal } from "./Reveal";
import { SectionShell, SwissGrid } from "./layout";

export function SolutionPathsSection() {
  return (
    <SectionShell
      className="border-y border-[#c4c7c7]/20 bg-white py-28 md:py-36"
      id="soluciones"
    >
      <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
        <Reveal className="max-w-3xl">
          <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
            Encuentra la mejor forma de crecer
          </span>
          <h2 className="text-4xl font-black uppercase leading-tight text-black md:text-6xl">
            Elige cómo quieres participar en la industria
          </h2>
        </Reveal>
        <Reveal delay={180} className="max-w-sm">
          <p className="text-base leading-7 text-[#444748]">
            Cada ruta lleva a una solución clara y termina en una acción
            comercial: asesoría, cotización, cuenta o compra.
          </p>
        </Reveal>
      </div>

      <SwissGrid>
        {businessLines.map((path, index) => (
          <Reveal
            key={path.eyebrow}
            className="group col-span-12 md:col-span-6 xl:col-span-3"
            delay={index * 120}
          >
            <a
              className="flex min-h-120 flex-col border border-[#c4c7c7]/35 bg-[#f6fafd] p-7 text-black transition hover:-translate-y-1 hover:border-black hover:bg-white"
              href={
                path.id === "distribucion" ||
                path.id === "marca-blanca" ||
                path.id === "ingredientes" ||
                path.id === "base"
                  ? path.pageHref
                  : path.homeHref
              }
            >
              <span
                aria-hidden="true"
                className={`mb-8 block h-1.5 w-16 ${path.accent}`}
              />
              <span className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
                {path.eyebrow}
              </span>
              <h3 className="text-2xl font-bold uppercase leading-tight text-black">
                {path.pathTitle}
              </h3>
              <p className="mt-6 leading-7 text-[#444748]">{path.summary}</p>
              <div className="mt-auto pt-10">
                <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#747878]">
                  {path.meta}
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-transform group-hover:translate-x-2">
                  {path.cta.label} <span aria-hidden="true">-&gt;</span>
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </SwissGrid>
    </SectionShell>
  );
}
