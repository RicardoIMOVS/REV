import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionShell, SwissGrid } from "./layout";

const heroImage =
  "/placeholder.svg";

export function HeroSection() {
  return (
    <SectionShell className="pt-32 pb-24 md:pt-48 md:pb-40" id="inicio">
      <SwissGrid>
        <div className="col-span-12 flex flex-col justify-end lg:col-span-8">
          <span className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
            Excelencia Editorial en Pharma
          </span>
          <Reveal>
            <h1 className="text-5xl font-black uppercase leading-none text-black md:text-7xl xl:text-8xl">
              La ciencia de lo extraordinario
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#444748]">
              De la molecula al mercado. Partner estrategico en manufactura de
              suplementos premium con rigor cientifico y estetica superior.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 mt-12 overflow-hidden lg:col-span-4 lg:mt-0">
          <Image
            alt="Botella farmaceutica premium en pedestal de piedra con iluminacion editorial."
            className="h-auto w-full object-cover grayscale transition duration-700 hover:grayscale-0"
            height={1100}
            priority
            sizes="(min-width: 1024px) 33vw, 100vw"
            src={heroImage}
            width={900}
          />
        </div>
      </SwissGrid>
    </SectionShell>
  );
}
