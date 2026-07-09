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
            Ecosistema de suplementos alimenticios
          </span>
          <Reveal>
            <h1 className="text-5xl font-black uppercase leading-none text-black md:text-7xl xl:text-8xl">
              Todo para hacer crecer una marca de suplementos
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#444748]">
              Desde ingredientes de calidad y desarrollo de marca blanca, hasta
              distribución especializada y una marca propia que demuestra cómo
              llevar un producto del concepto al consumidor.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                className="bg-black px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2c3134]"
                href="#soluciones"
              >
                Encontrar mi ruta
              </a>
              <a
                className="border border-black px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-black hover:text-white"
                href="/version-1/contacto"
              >
                Hablar con un especialista
              </a>
            </div>
          </Reveal>
        </div>

        <div className="col-span-12 mt-12 overflow-hidden lg:col-span-4 lg:mt-0">
          <Image
            alt="Botella farmacéutica premium en pedestal de piedra con iluminación editorial."
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
