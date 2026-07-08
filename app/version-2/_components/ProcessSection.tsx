import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { Grid, SectionShell, labelClass } from "./layout";

const processImage =
  "/placeholder.svg";

const steps = [
  {
    title: "I+D de Vanguardia",
    copy: "Revision tecnica de ingredientes, compatibilidades y criterios documentales para el desarrollo del producto.",
  },
  {
    title: "Formulacion Prototipo",
    copy: "Pruebas de compatibilidad, estabilidad y experiencia sensorial conforme al alcance definido por proyecto.",
  },
  {
    title: "Produccion Farmaceutica",
    copy: "Manufactura con controles de higiene, trazabilidad y calidad documentada conforme al proceso aplicable.",
  },
  {
    title: "Logistica Global",
    copy: "Coordinacion logistica segun requisitos de conservacion, mercado objetivo y documentacion disponible.",
  },
];

export function ProcessSection() {
  return (
    <SectionShell className="py-32 md:py-40" id="procesos">
      <Grid className="mb-20 md:mb-24">
        <FadeIn className="col-span-12 lg:col-span-6">
          <span className={`${labelClass} mb-4 block text-[#192830]`}>
            Metodologia
          </span>
          <h2 className="mb-8 text-4xl font-semibold text-[#192830] md:text-5xl">
            De la Idea al Lanzamiento
          </h2>
          <p className="text-xl leading-8 text-[#43474a]">
            Un flujo de trabajo para ordenar la idea, el prototipo, la
            documentacion y la produccion conforme al alcance regulatorio del
            proyecto.
          </p>
        </FadeIn>
      </Grid>

      <Grid>
        <FadeIn className="order-2 col-span-12 lg:order-1 lg:col-span-5">
          <div className="space-y-10">
            {steps.map((step, index) => (
              <div className="group flex gap-8" key={step.title}>
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#192830] font-bold text-[#192830] transition group-hover:bg-[#192830] group-hover:text-white">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 ? (
                    <div className="my-4 h-20 w-px bg-[#192830]/20" />
                  ) : null}
                </div>
                <div>
                  <h3 className="mb-2 text-2xl font-semibold text-[#192830]">
                    {step.title}
                  </h3>
                  <p className="leading-7 text-[#43474a]">{step.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="order-1 col-span-12 mb-14 lg:order-2 lg:col-span-6 lg:col-start-7 lg:mb-0">
          <div className="sticky top-32">
            <div className="relative aspect-4/3 overflow-hidden bg-[#efedee]">
              <Image
                alt="Proceso de laboratorio para manufactura biotecnologica."
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                src={processImage}
              />
            </div>
          </div>
        </FadeIn>
      </Grid>
    </SectionShell>
  );
}
