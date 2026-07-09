import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../_components/Footer";
import { Navigation } from "../_components/Navigation";
import { PageVisual } from "../_components/PageVisual";
import { Reveal } from "../_components/Reveal";
import { SectionShell, SwissGrid } from "../_components/layout";
import {
  featuredResources,
  resourceFaqs,
  resourceTopics,
} from "../_data/resources";

export const metadata: Metadata = {
  title: "Recursos | REVOLUTION PHARMA",
  description:
    "Recursos, guías y contenidos educativos sobre suplementos alimenticios, marca privada, ingredientes y distribución B2B.",
};

export default function RecursosPage() {
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
                Recursos
              </span>
              <h1 className="max-w-5xl text-5xl font-black uppercase leading-none text-black md:text-7xl xl:text-8xl">
                Centro de conocimiento para tomar mejores decisiones
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#444748]">
                Consulta guías, artículos y respuestas clave para entender la
                industria de suplementos alimenticios, evaluar rutas comerciales
                y elegir la solución que mejor se ajusta a tu proyecto.
              </p>
            </Reveal>
          </div>

          <Reveal delay={180} className="col-span-12 lg:col-span-5">
            <PageVisual
              caption="Biblioteca de guías, casos y respuestas para decidir mejor"
              label="Recursos"
            />
          </Reveal>
        </SwissGrid>
      </SectionShell>

      <SectionShell
        className="border-y border-[#c4c7c7]/20 bg-white py-24 md:py-32"
        id="consultas"
      >
        <div className="mb-16 max-w-4xl">
          <Reveal>
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
              Contenido destacado
            </span>
            <h2 className="text-4xl font-bold uppercase leading-tight text-black md:text-6xl">
              Recursos para orientar tu decisión comercial
            </h2>
          </Reveal>
        </div>

        <SwissGrid>
          {featuredResources.map((resource, index) => (
            <Reveal
              key={resource.title}
              className="col-span-12 md:col-span-4"
              delay={index * 120}
            >
              <article className="flex min-h-128 flex-col overflow-hidden border border-[#c4c7c7]/35 bg-[#f6fafd] transition hover:border-black hover:bg-white">
                <img
                  alt={resource.title}
                  className="aspect-[16/9] w-full object-cover"
                  src="/placeholder.svg"
                />
                <div className="flex flex-1 flex-col p-7">
                  <span className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
                    {resource.category}
                  </span>
                  <h3 className="text-2xl font-bold uppercase leading-tight text-black">
                    {resource.title}
                  </h3>
                  <p className="mt-6 leading-7 text-[#444748]">
                    {resource.copy}
                  </p>
                  <span className="mt-auto pt-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#747878]">
                    {resource.status}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </SwissGrid>
      </SectionShell>

      <SectionShell className="py-28 md:py-36">
        <SwissGrid className="items-start">
          <Reveal className="col-span-12 lg:col-span-5">
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
              Temas SEO
            </span>
            <h2 className="text-4xl font-black uppercase leading-tight text-black md:text-6xl">
              Categorías para explorar el ecosistema de suplementos
            </h2>
          </Reveal>

          <div className="col-span-12 grid gap-4 md:grid-cols-2 lg:col-span-7">
            {resourceTopics.map((topic, index) => (
              <Reveal key={topic} delay={index * 80}>
                <div className="border-t border-[#c4c7c7]/40 py-6">
                  <span className="text-xl font-bold uppercase text-black">
                    {topic}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </SwissGrid>
      </SectionShell>

      <SectionShell className="bg-black py-28 text-white md:py-36">
        <SwissGrid>
          <Reveal className="col-span-12 lg:col-span-5">
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              Preguntas frecuentes
            </span>
            <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              Preguntas para avanzar con claridad
            </h2>
          </Reveal>

          <div className="col-span-12 lg:col-span-7">
            {resourceFaqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 100}>
                <details className="group border-t border-white/15 py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <span className="text-xl font-bold uppercase">
                      {faq.question}
                    </span>
                    <span className="text-2xl transition-transform group-open:rotate-180">
                      v
                    </span>
                  </summary>
                  <p className="mt-4 max-w-xl leading-7 text-white/60">
                    {faq.answer}
                  </p>
                </details>
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
            Cada recurso conecta con una solución
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#444748]">
            Encuentra contenidos pensados para comparar Distribución, Marca
            Blanca, Ingredientes y BĀSE según la etapa, el canal y el objetivo
            comercial de tu proyecto.
          </p>
          <Link
            className="mt-10 inline-flex bg-black px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2c3134]"
            href="/version-1"
          >
            Volver al segmentador
          </Link>
        </Reveal>
      </SectionShell>

      <Footer />
    </main>
  );
}
