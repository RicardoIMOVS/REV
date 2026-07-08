import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionShell, SwissGrid } from "./layout";

const journey = [
  {
    phase: "Fase Alpha",
    title: "Conceptualizacion Molecular",
    copy: "Analizamos ingredientes permitidos, compatibilidades tecnicas y objetivos de formulacion sin atribuir propiedades terapeuticas al producto final.",
    image:
      "/placeholder.svg",
    imageFirst: false,
  },
  {
    phase: "Fase Gamma",
    title: "Manufactura de Alta Frecuencia",
    copy: "Estructuramos procesos con controles de calidad, criterios de higiene y trazabilidad conforme al alcance documental de cada proyecto.",
    image:
      "/placeholder.svg",
    imageFirst: true,
  },
];

export function ManufacturingJourney() {
  return (
    <SectionShell
      className="overflow-hidden bg-black py-32 text-white md:py-40"
      id="proceso"
    >
      <div className="mb-20 flex flex-col gap-6 md:mb-24 md:flex-row md:items-baseline">
        <Reveal>
          <h2 className="text-5xl font-black uppercase leading-tight md:text-7xl">
            El viaje de la innovacion
          </h2>
        </Reveal>
        <span className="hidden text-xs font-semibold uppercase tracking-widest text-white/50 md:block">
          Documentacion tecnica / BPM aplicables
        </span>
      </div>

      <div className="space-y-28 md:space-y-32">
        {journey.map((item) => (
          <Reveal key={item.phase}>
            <SwissGrid className="items-center">
              <div
                className={`col-span-12 md:col-span-6 ${item.imageFirst ? "" : "md:order-2"
                  }`}
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    alt={`${item.title} en laboratorio farmaceutico premium.`}
                    className="object-cover grayscale brightness-90 transition duration-700 hover:grayscale-0"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    src={item.image}
                  />
                </div>
              </div>
              <div
                className={`col-span-12 md:col-span-6 ${item.imageFirst ? "md:pl-12" : "md:order-1"
                  }`}
              >
                <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-white/45">
                  {item.phase}
                </span>
                <h3 className="mb-6 text-3xl font-bold md:text-4xl">
                  {item.title}
                </h3>
                <p className="max-w-md leading-7 text-white/55">{item.copy}</p>
              </div>
            </SwissGrid>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
