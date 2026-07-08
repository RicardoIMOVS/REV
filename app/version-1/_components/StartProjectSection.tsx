import { Reveal } from "./Reveal";
import { SectionShell, SwissGrid } from "./layout";

export function StartProjectSection() {
  return (
    <SectionShell className="bg-[#eaeef2] py-32 text-black md:py-40" id="contacto">
      <SwissGrid className="items-center">
        <Reveal className="col-span-12 md:col-span-8">
          <h2 className="mb-8 text-5xl font-black uppercase leading-tight md:text-7xl">
            Comienza tu legado
          </h2>
          <p className="mb-12 max-w-xl text-lg leading-8 text-black/75">
            Estamos seleccionando nuevos partners para el Q4. Solicita una
            consultoria tecnica con nuestro equipo de desarrollo de producto.
          </p>
          <div className="flex flex-col gap-5 sm:flex-row">
            <button className="bg-black px-10 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2c3134]">
              Agendar consultoria
            </button>
            <a
              className="border border-black px-10 py-5 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-black hover:text-white"
              href="#inicio"
            >
              Descargar dossier
            </a>
          </div>
        </Reveal>
      </SwissGrid>
    </SectionShell>
  );
}
