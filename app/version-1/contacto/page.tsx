import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "../_components/Footer";
import { Navigation } from "../_components/Navigation";
import { PageVisual } from "../_components/PageVisual";
import { Reveal } from "../_components/Reveal";
import { SectionShell, SwissGrid } from "../_components/layout";
import {
  contactChannels,
  contactIntents,
  contactFormFields,
} from "../_data/contact";

export const metadata: Metadata = {
  title: "Contacto | REVOLUTION PHARMA",
  description:
    "Contacto comercial de Revolution Pharma para distribución, marca privada, ingredientes, BASE y atención general.",
};

export default function ContactoPage() {
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
                Contacto
              </span>
              <h1 className="max-w-5xl text-5xl font-black uppercase leading-none text-black md:text-7xl xl:text-8xl">
                Hablemos según la ruta que necesitas
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#444748]">
                Cuéntanos qué necesitas y canalizaremos tu solicitud hacia el
                equipo adecuado: ventas, atención, distribución, marca privada,
                ingredientes o BASE.
              </p>
            </Reveal>
          </div>

          <Reveal delay={180} className="col-span-12 lg:col-span-5">
            <PageVisual
              caption="Rutas claras para ventas, soporte y solicitudes técnicas"
              label="Contacto"
            />
          </Reveal>
        </SwissGrid>
      </SectionShell>

      <SectionShell
        className="border-y border-[#c4c7c7]/20 bg-white py-24 md:py-32"
        id="contacto"
      >
        <div className="mb-16 max-w-4xl">
          <Reveal>
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
              Rutas de contacto
            </span>
            <h2 className="text-4xl font-bold uppercase leading-tight text-black md:text-6xl">
              Cada intención tiene una puerta de entrada
            </h2>
          </Reveal>
        </div>

        <SwissGrid>
          {contactIntents.map((intent, index) => (
            <Reveal
              key={intent.title}
              className="col-span-12 md:col-span-6 lg:col-span-4"
              delay={index * 90}
            >
              <article className="flex min-h-80 flex-col border border-[#c4c7c7]/35 bg-[#f6fafd] p-7 transition hover:border-black hover:bg-white">
                <span className="mb-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#747878]">
                  Ruta 0{index + 1}
                </span>
                <h3 className="text-2xl font-bold uppercase text-black">
                  {intent.title}
                </h3>
                <p className="mt-5 leading-7 text-[#444748]">{intent.copy}</p>
                <span className="mt-auto pt-8 text-xs font-semibold uppercase tracking-widest text-black">
                  {intent.cta} -&gt;
                </span>
              </article>
            </Reveal>
          ))}
        </SwissGrid>
      </SectionShell>

      <SectionShell className="py-28 md:py-36">
        <SwissGrid className="items-start">
          <Reveal className="col-span-12 lg:col-span-5">
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
              Formulario de contacto
            </span>
            <h2 className="text-4xl font-black uppercase leading-tight text-black md:text-6xl">
              Inicia una conversación con nuestro equipo
            </h2>
            <p className="mt-8 max-w-md leading-7 text-[#444748]">
              Comparte tus datos, el tipo de proyecto y el mensaje principal
              para que podamos orientarte con mayor precisión desde el primer
              contacto.
            </p>
          </Reveal>

          <Reveal delay={160} className="col-span-12 lg:col-span-7">
            <form className="grid gap-4 border border-[#c4c7c7]/35 bg-white p-6 shadow-[0_24px_80px_rgba(23,28,31,0.08)] md:p-8">
              {contactFormFields.map((field) =>
                field === "Mensaje" ? (
                  <textarea
                    key={field}
                    className="min-h-36 border border-[#c4c7c7]/60 bg-white px-5 py-4 text-sm outline-none transition focus:border-black"
                    placeholder={field}
                  />
                ) : (
                  <input
                    key={field}
                    className="min-h-14 border border-[#c4c7c7]/60 bg-white px-5 text-sm outline-none transition focus:border-black"
                    placeholder={field}
                    type={field.includes("Correo") ? "email" : "text"}
                  />
                ),
              )}
              <button
                className="min-h-14 bg-black px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2c3134]"
                type="button"
              >
                Enviar solicitud
              </button>
            </form>
          </Reveal>
        </SwissGrid>
      </SectionShell>

      <SectionShell className="bg-black py-28 text-white md:py-36">
        <SwissGrid>
          <Reveal className="col-span-12 lg:col-span-5">
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              Canales
            </span>
            <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              Canales para seguimiento comercial
            </h2>
          </Reveal>

          <div className="col-span-12 grid gap-4 md:grid-cols-2 lg:col-span-7">
            {contactChannels.map((channel, index) => (
              <Reveal key={channel} delay={index * 90}>
                <div className="min-h-52 border border-white/15 p-6 transition hover:border-white">
                  <span className="mb-8 block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Canal 0{index + 1}
                  </span>
                  <span className="text-xl font-bold uppercase">{channel}</span>
                  <p className="mt-4 leading-7 text-white/60">
                    Nuestro equipo dará seguimiento según la naturaleza de la
                    solicitud y la ruta comercial seleccionada.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </SwissGrid>
      </SectionShell>

      <Footer />
    </main>
  );
}
