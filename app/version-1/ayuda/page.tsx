import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../_components/Footer";
import { Navigation } from "../_components/Navigation";
import { Reveal } from "../_components/Reveal";
import { SectionShell, SwissGrid } from "../_components/layout";
import {
  futureSupportFeatures,
  helpFaqs,
  helpTopics,
} from "../_data/help";

export const metadata: Metadata = {
  title: "Ayuda | REVOLUTION PHARMA",
  description:
    "Propuesta visual de ayuda, preguntas frecuentes y soporte para Revolution Pharma.",
};

export default function AyudaPage() {
  return (
    <main className="font-evolve-sans min-h-screen bg-[#f6fafd] text-[#171c1f] selection:bg-black selection:text-white">
      <Navigation />

      <SectionShell className="pt-32 pb-24 md:pt-44 md:pb-32" id="inicio">
        <SwissGrid className="items-end">
          <div className="col-span-12 lg:col-span-8">
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
                Soporte visual para orientar al usuario
              </h1>
            </Reveal>
          </div>

          <Reveal delay={180} className="col-span-12 lg:col-span-4">
            <p className="text-lg leading-8 text-[#444748]">
              Esta sección muestra cómo podría organizarse la atención al
              cliente sin activar login, portal, seguimiento de pedidos ni
              facturación funcional.
            </p>
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
              Lo visible ahora y lo previsto para después
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
                <span className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#747878]">
                  {topic.status}
                </span>
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
              Aclarar el alcance de esta versión
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
              Portal futuro
            </span>
            <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              Funciones previstas sin construirlas todavía
            </h2>
          </Reveal>

          <div className="col-span-12 grid gap-4 md:grid-cols-2 lg:col-span-7">
            {futureSupportFeatures.map((feature, index) => (
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
            Contacto sigue siendo la acción principal
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#444748]">
            Mientras el portal no existe, la experiencia debe dirigir al usuario
            hacia una conversación clara con el equipo correcto.
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
