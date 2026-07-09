import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionShell, SwissGrid } from "./layout";

const heroImage =
  "/placeholder.svg";

export function HeroSection() {
  return (
    <SectionShell
      className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-40"
      id="inicio"
    >
      <div className="pointer-events-none absolute inset-x-5 top-28 h-px bg-[#c4c7c7]/45 md:inset-x-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-[linear-gradient(90deg,transparent,#ffffff_42%,transparent)] opacity-55 lg:block" />
      <SwissGrid>
        <div className="col-span-12 flex flex-col justify-end lg:col-span-8">
          <Reveal>
            <span className="mb-6 inline-flex border border-[#c4c7c7]/50 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
              Ecosistema de suplementos alimenticios
            </span>
          </Reveal>
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
                className="bg-black px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-1 hover:bg-[#2c3134]"
                href="#soluciones"
              >
                Encontrar mi ruta
              </a>
              <a
                className="border border-black px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:-translate-y-1 hover:bg-black hover:text-white"
                href="/version-1/contacto"
              >
                Hablar con un especialista
              </a>
            </div>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-[#c4c7c7]/35">
              {["Distribución", "Marca privada", "Ingredientes"].map((item) => (
                <span
                  className="border-r border-[#c4c7c7]/35 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#747878] last:border-r-0"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={220} className="col-span-12 mt-12 lg:col-span-4 lg:mt-0">
          <div className="rev-float rev-image-sweep overflow-hidden border border-[#c4c7c7]/35 bg-white shadow-[0_30px_90px_rgba(23,28,31,0.14)]">
            <Image
              alt="Botella farmacéutica premium en pedestal de piedra con iluminación editorial."
              className="h-auto w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0"
              height={1100}
              sizes="(min-width: 1024px) 33vw, 100vw"
              src={heroImage}
              width={900}
            />
          </div>
        </Reveal>
      </SwissGrid>
    </SectionShell>
  );
}
