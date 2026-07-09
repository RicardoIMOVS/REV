import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../_components/Footer";
import { Navigation } from "../_components/Navigation";
import { PageVisual } from "../_components/PageVisual";
import { Reveal } from "../_components/Reveal";
import { SectionShell, SwissGrid } from "../_components/layout";
import {
  supportFeatures,
  helpFaqs,
  helpTopics,
} from "../_data/help";

export const metadata: Metadata = {
  title: "Ayuda | REVOLUTION PHARMA",
  description:
    "Centro de ayuda de Revolution Pharma para orientación comercial, soporte, documentación, pedidos y atención por ruta.",
};

export default function AyudaPage() {
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
                Ayuda
              </span>
              <h1 className="max-w-5xl text-5xl font-black uppercase leading-none text-black md:text-7xl xl:text-8xl">
                Soporte para avanzar con claridad
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#444748]">
                Encuentra respuestas rápidas, rutas de atención y orientación
                para canalizar solicitudes comerciales, técnicas o administrativas
                con el equipo adecuado.
              </p>
            </Reveal>
          </div>

          <Reveal delay={180} className="col-span-12 lg:col-span-5">
            <PageVisual
              caption="Soporte comercial, técnico y administrativo por ruta"
              label="Ayuda"
            />
          </Reveal>
        </SwissGrid>
      </SectionShell>

      <SectionShell
        className="border-y border-[#c4c7c7]/20 bg-white py-24 md:py-32"
        id="ayuda"
      >
        <div className="mb-16 max-w-4xl">
          <Reveal>
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
              Módulos de soporte
            </span>
            <h2 className="text-4xl font-bold uppercase leading-tight text-black md:text-6xl">
              Rutas de soporte para cada necesidad
            </h2>
          </Reveal>
        </div>

        <SwissGrid>
          {helpTopics.map((topic, index) => (
            <Reveal
              key={topic.title}
              className="col-span-12 md:col-span-6"
              delay={index * 100}
            >
              <article className="flex min-h-80 flex-col border border-[#c4c7c7]/35 bg-[#f6fafd] p-7 transition hover:border-black hover:bg-white">
                <div className="mb-10 flex items-center justify-between gap-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#747878]">
                    Módulo 0{index + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#747878]">
                    {topic.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold uppercase text-black">
                  {topic.title}
                </h3>
                <p className="mt-5 leading-7 text-[#444748]">{topic.copy}</p>
              </article>
            </Reveal>
          ))}
        </SwissGrid>
      </SectionShell>

      <SectionShell className="py-28 md:py-36">
        <SwissGrid className="items-start">
          <Reveal className="col-span-12 lg:col-span-5">
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
              Preguntas frecuentes
            </span>
            <h2 className="text-4xl font-black uppercase leading-tight text-black md:text-6xl">
              Respuestas para resolver dudas comunes
            </h2>
          </Reveal>

          <div className="col-span-12 lg:col-span-7">
            {helpFaqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 100}>
                <details className="group border-t border-[#c4c7c7]/40 py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <span className="text-xl font-bold uppercase text-black">
                      {faq.question}
                    </span>
                    <span className="text-2xl transition-transform group-open:rotate-180">
                      v
                    </span>
                  </summary>
                  <p className="mt-4 max-w-xl leading-7 text-[#444748]">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </SwissGrid>
      </SectionShell>

      <SectionShell className="bg-black py-28 text-white md:py-36">
        <SwissGrid className="items-start">
          <Reveal className="col-span-12 lg:col-span-5">
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              Soporte especializado
            </span>
            <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              Temas que podemos atender por proyecto
            </h2>
          </Reveal>

          <div className="col-span-12 grid gap-4 md:grid-cols-2 lg:col-span-7">
            {supportFeatures.map((feature, index) => (
              <Reveal key={feature} delay={index * 80}>
                <div className="border-t border-white/15 py-6">
                  <span className="text-xl font-bold uppercase leading-tight">
                    {feature}
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
            ¿Necesitas hablar con alguien?
          </span>
          <h2 className="text-4xl font-black uppercase leading-tight text-black md:text-6xl">
            Contacto es la ruta más directa
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#444748]">
            Si tu solicitud requiere revisión específica, comparte tu caso en
            Contacto para que podamos dirigirlo a ventas, distribución, marca
            privada, ingredientes, BĀSE o atención general.
          </p>
          <Link
            className="mt-10 inline-flex bg-black px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2c3134]"
            href="/version-1/contacto"
          >
            Ir a contacto
          </Link>
        </Reveal>
      </SectionShell>

      <Footer />
    </main>
  );
}
