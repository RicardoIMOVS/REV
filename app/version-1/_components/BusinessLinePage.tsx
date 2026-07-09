import Link from "next/link";
import { businessLinePages } from "../_data/business-line-pages";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";
import { PageVisual } from "./PageVisual";
import { Reveal } from "./Reveal";
import { SectionShell, SwissGrid } from "./layout";

type BusinessLineId = keyof typeof businessLinePages;

type BusinessLinePageProps = {
  lineId: BusinessLineId;
};

export function BusinessLinePage({ lineId }: BusinessLinePageProps) {
  const page = businessLinePages[lineId];
  const ctaIsExternal = page.cta.href.startsWith("http");

  return (
    <main className="font-evolve-sans min-h-screen bg-[#f6fafd] text-[#171c1f] selection:bg-black selection:text-white">
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
                {page.eyebrow}
              </span>
              <h1 className="max-w-5xl text-5xl font-black uppercase leading-none text-black md:text-7xl xl:text-8xl">
                {page.title}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-[#444748]">
                {page.intro}
              </p>
              <a
                className="mt-10 inline-flex bg-black px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2c3134]"
                href={page.cta.href}
                rel={ctaIsExternal ? "noopener noreferrer" : undefined}
                target={ctaIsExternal ? "_blank" : undefined}
              >
                {page.cta.label}
              </a>
            </Reveal>
          </div>

          <Reveal delay={180} className="col-span-12 lg:col-span-5">
            <PageVisual
              caption="Imagen de referencia para presentar esta solución comercial"
              label={page.eyebrow}
            />
          </Reveal>
        </SwissGrid>
      </SectionShell>

      <SectionShell className="border-y border-[#c4c7c7]/20 bg-white py-24 md:py-32">
        <SwissGrid>
          <Reveal className="col-span-12 md:col-span-4">
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
              Ideal para
            </span>
            <h2 className="text-4xl font-bold uppercase leading-tight text-black">
              Perfiles comerciales
            </h2>
          </Reveal>
          <div className="col-span-12 grid gap-4 md:col-span-8 md:grid-cols-2 xl:grid-cols-3">
            {page.audience.map((item, index) => (
              <Reveal key={item} delay={index * 80}>
                <div className="flex min-h-28 flex-col justify-between border border-[#c4c7c7]/35 bg-[#f6fafd] p-6 transition hover:border-black hover:bg-white">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#747878]">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </SwissGrid>
      </SectionShell>

      <SectionShell className="py-28 md:py-36">
        <div className="mb-16 max-w-4xl">
          <Reveal>
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
              Beneficios
            </span>
            <h2 className="text-4xl font-bold uppercase leading-tight text-black md:text-6xl">
              {page.benefitsHeading}
            </h2>
          </Reveal>
        </div>

        <SwissGrid>
          {page.benefits.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              className="col-span-12 md:col-span-4"
              delay={index * 120}
            >
              <article className="flex min-h-80 flex-col border border-[#c4c7c7]/35 bg-white p-7 transition hover:border-black">
                <span className="mb-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#747878]">
                  Beneficio 0{index + 1}
                </span>
                <h3 className="text-3xl font-bold uppercase text-black">
                  {benefit.title}
                </h3>
                <p className="mt-5 leading-7 text-[#444748]">
                  {benefit.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </SwissGrid>
      </SectionShell>

      <SectionShell className="bg-black py-28 text-white md:py-36">
        <SwissGrid className="items-start">
          <Reveal className="col-span-12 lg:col-span-5">
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
              {page.catalogEyebrow}
            </span>
            <h2 className="text-4xl font-black uppercase leading-tight md:text-6xl">
              {page.catalogHeading}
            </h2>
          </Reveal>

          <div className="col-span-12 grid gap-4 lg:col-span-7">
            {page.catalog.map((item, index) => (
              <Reveal key={item.category} delay={index * 120}>
                <article className="grid gap-5 border border-white/15 p-5 transition hover:border-white sm:grid-cols-[7rem_1fr] sm:items-center">
                  <img
                    alt={item.category}
                    className="aspect-square w-full border border-white/10 object-cover sm:w-28"
                    src="/placeholder.svg"
                  />
                  <div>
                    <span className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                      Categoría {index + 1}
                    </span>
                    <h3 className="text-2xl font-bold uppercase">
                      {item.category}
                    </h3>
                    <p className="mt-4 leading-7 text-white/60">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </SwissGrid>
      </SectionShell>

      <SectionShell className="py-28 md:py-36" id="contacto">
        <SwissGrid className="items-center">
          <Reveal className="col-span-12 lg:col-span-5">
            <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#444748]">
              Proceso
            </span>
            <h2 className="text-4xl font-black uppercase leading-tight text-black md:text-6xl">
              {page.processHeading}
            </h2>
          </Reveal>

          <div className="col-span-12 lg:col-span-7">
            {page.process.map((step, index) => (
              <Reveal key={step} delay={index * 100}>
                <div className="grid grid-cols-[5rem_1fr] border-t border-[#c4c7c7]/40 py-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#747878]">
                    0{index + 1}
                  </span>
                  <span className="text-2xl font-bold uppercase text-black">
                    {step}
                  </span>
                </div>
              </Reveal>
            ))}
            <Reveal delay={420}>
              <a
                className="mt-10 inline-flex bg-black px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2c3134]"
                href={page.cta.href}
                rel={ctaIsExternal ? "noopener noreferrer" : undefined}
                target={ctaIsExternal ? "_blank" : undefined}
              >
                {page.cta.label}
              </a>
            </Reveal>
          </div>
        </SwissGrid>
      </SectionShell>

      <Footer />
    </main>
  );
}
