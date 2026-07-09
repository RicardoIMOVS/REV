import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { Grid, SectionShell, labelClass } from "./layout";

const baseImage =
  "/placeholder.svg";

export function BaseCaseStudy() {
  return (
    <SectionShell className="overflow-hidden bg-[#0e0e0e] py-32 text-white md:py-40" id="base">
      <Grid className="items-center">
        <FadeIn className="col-span-12 lg:col-span-6">
          <span className={`${labelClass} mb-6 block text-[#bca18b]`}>
            Estudio de Caso
          </span>
          <h2 className="mb-8 text-4xl font-semibold leading-tight md:text-5xl">
            BĀSE: Reinvencion del Minimalismo
          </h2>
          <p className="mb-12 text-xl leading-8 text-white/70">
            Como Revolution Pharma materializo una marca de suplementos premium
            desde cero, integrando minerales nobles y un packaging galardonado.
          </p>
          <a
            className="group inline-flex items-center gap-4"
            href="https://base.revolutionpharma.com.mx/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className={`${labelClass} border-b border-white pb-2 transition-all group-hover:pr-4`}>
              Entrar al universo BĀSE
            </span>
            <span className="transition-transform group-hover:translate-x-2">
              -&gt;
            </span>
          </a>
        </FadeIn>

        <FadeIn className="relative col-span-12 mt-16 lg:col-span-6 lg:mt-0">
          <div className="group relative z-10 aspect-4/5 cursor-pointer overflow-hidden">
            <Image
              alt="Estudio de caso BĀSE con producto premium minimalista."
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={baseImage}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/30 backdrop-blur-sm">
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Play
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full border border-white/5" />
        </FadeIn>
      </Grid>
    </SectionShell>
  );
}
