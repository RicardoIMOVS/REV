import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { Grid, SectionShell, labelClass } from "./layout";

const heroImage =
  "/placeholder.svg";

export function HeroSection() {
  return (
    <SectionShell
      className="relative flex min-h-[90vh] items-center overflow-hidden pb-16 pt-32 md:pt-40"
      id="inicio"
    >
      <Grid className="items-center">
        <FadeIn className="z-10 col-span-12 lg:col-span-7">
          <span className={`${labelClass} mb-6 block text-[#192830]`}>
            Manufactura de Elite
          </span>
          <h1 className="mb-8 text-5xl font-extrabold leading-none text-[#192830] md:text-7xl xl:text-[84px]">
            El Futuro de los Suplementos se Crea Aqui
          </h1>
          <p className="mb-12 max-w-xl text-xl leading-8 text-[#43474a]">
            Elevamos los estandares de la industria biotecnologica. Somos el
            socio estrategico de las marcas mas exigentes del mundo en la
            creacion de proyectos de suplementacion alimenticia con soporte
            tecnico y documental.
          </p>
          <div className="flex flex-wrap gap-5">
            <a
              className={`${labelClass} bg-[#192830] px-10 py-5 text-white transition hover:-translate-y-1 hover:bg-[#2f3e46]`}
              href="#contacto"
            >
              Iniciar Proyecto
            </a>
            <a
              className={`${labelClass} border border-[#192830]/30 px-10 py-5 text-[#192830] transition hover:bg-[#192830] hover:text-white`}
              href="#procesos"
            >
              Descubrir Proceso
            </a>
          </div>
        </FadeIn>

        <FadeIn className="relative col-span-12 mt-12 lg:col-span-5 lg:mt-0">
          <div className="relative aspect-4/5 w-full overflow-hidden bg-[#f5f3f3]">
            <Image
              alt="Producto farmaceutico premium con estetica biotecnologica."
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              src={heroImage}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#192830]/20 to-transparent" />
          </div>
          <div className="absolute -bottom-10 -left-10 hidden border border-[#192830]/5 bg-white/75 p-8 shadow-sm backdrop-blur-md md:block">
            <div className="text-5xl font-bold text-[#192830]">
              QA
            </div>
            <div className={`${labelClass} text-[#43474a]`}>Control Documental</div>
          </div>
        </FadeIn>
      </Grid>
    </SectionShell>
  );
}
