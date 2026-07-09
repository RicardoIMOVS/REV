import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../_components/Footer";
import { Navigation } from "../_components/Navigation";
import { PageVisual } from "../_components/PageVisual";
import { Reveal } from "../_components/Reveal";
import { SectionShell, SwissGrid } from "../_components/layout";
import {
  companyPillars,
  responsibilityItems,
  trustStats,
} from "../_data/company";

export const metadata: Metadata = {
  title: "Nosotros | REVOLUTION PHARMA",
  description:
    "Perfil institucional de Revolution Pharma: historia, calidad, infraestructura, logística y responsabilidad en suplementos alimenticios.",
};

export default function NosotrosPage() {
  return (
    <main className="rev-brand-dark font-evolve-sans min-h-screen bg-[#2F3E46] text-[#FAFAFA] selection:bg-[#FAFAFA] selection:text-[#0E0E0E]">
      <Navigation />

      <SectionShell className="pt-32 pb-20 md:pt-44 md:pb-28" id="inicio">
        <SwissGrid className="items-center">
          <div className="col-span-12 lg:col-span-7">
            <Link
              className="mb-8 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-[#444748] transition hover:text-black"
              href="/version-1"
            >
              &lt;- Volver a inicio
            </Link>
            <Reveal>
              <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
                Nosotros
              </span>
              <h1 className="max-w-5xl text-5xl font-black uppercase leading-none text-black md:text-7xl xl:text-8xl">
                Un aliado estratégico para crecer en suplementos
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#444748]">
                Revolution Pharma integra distribución, marca privada,
                ingredientes y una marca propia para acompañar proyectos de
                suplementación alimenticia desde la idea hasta su salida
                comercial.
              </p>
            </Reveal>
          </div>

          <Reveal delay={180} className="col-span-12 lg:col-span-5">
            <PageVisual
              caption="Equipo, operación y documentación para proyectos de suplementos"
              label="Nosotros"
            />
          </Reveal>
        </SwissGrid>
      </SectionShell>

      <SectionShell className="border-y border-[#c4c7c7]/20 bg-white py-20">
        <div className="grid gap-6 md:grid-cols-4">
          {trustStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80}>
              <div className="border-t border-[#c4c7c7]/40 pt-6">
                <span className="block text-3xl font-black uppercase text-black">
                  {stat.value}
                </span>
                <span className="mt-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[#747878]">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="py-28 md:py-36">
        <div className="mb-16 max-w-4xl">
          <Reveal>
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
              Confianza institucional
            </span>
            <h2 className="text-4xl font-bold uppercase leading-tight text-black md:text-6xl">
              La estructura que respalda cada proyecto
            </h2>
          </Reveal>
        </div>

        <SwissGrid>
          {companyPillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              className="col-span-12 md:col-span-6 lg:col-span-4"
              delay={index * 90}
            >
              <article className="flex min-h-80 flex-col border border-[#c4c7c7]/35 bg-white p-7 transition hover:border-black">
                <span className="mb-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#747878]">
                  Pilar 0{index + 1}
                </span>
                <h3 className="text-2xl font-bold uppercase text-black">
                  {pillar.title}
                </h3>
                <p className="mt-5 leading-7 text-[#444748]">{pillar.copy}</p>
              </article>
            </Reveal>
          ))}
        </SwissGrid>
      </SectionShell>

      <SectionShell className="bg-black py-28 text-white md:py-36">
        <SwissGrid className="items-start">
          <Reveal className="col-span-12 lg:col-span-5">
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              Responsabilidad
            </span>
            <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              Crecimiento con comunicación responsable
            </h2>
          </Reveal>

          <div className="col-span-12 lg:col-span-7">
            {responsibilityItems.map((item, index) => (
              <Reveal key={item} delay={index * 100}>
                <div className="grid grid-cols-[5rem_1fr] border-t border-white/15 py-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                    0{index + 1}
                  </span>
                  <span className="text-xl font-bold uppercase leading-tight">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </SwissGrid>
      </SectionShell>

      <SectionShell className="py-28 md:py-36" id="contacto">
        <Reveal className="max-w-4xl">
          <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
            Siguiente paso
          </span>
          <h2 className="text-4xl font-black uppercase leading-tight text-black md:text-6xl">
            Conectar experiencia con acción comercial
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#444748]">
            Explora nuestras soluciones para identificar si tu proyecto necesita
            distribución, desarrollo de marca privada, suministro de ingredientes
            o una referencia de marca propia como BĀSE.
          </p>
          <Link
            className="mt-10 inline-flex bg-black px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2c3134]"
            href="/version-1#soluciones"
          >
            Ver soluciones
          </Link>
        </Reveal>
      </SectionShell>

      <Footer />
    </main>
  );
}
