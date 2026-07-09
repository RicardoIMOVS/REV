import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionShell, SwissGrid } from "./layout";

const journey = [
  {
    phase: "Motor 01",
    title: "Informar",
    copy: "El sitio construye confianza mediante Nosotros, Calidad, Recursos y contenido educativo que orienta la decisión del usuario.",
    image:
      "/placeholder.svg",
    imageFirst: false,
  },
  {
    phase: "Motor 02",
    title: "Convertir",
    copy: "Cada línea de negocio dirige a una acción clara: solicitar cuenta comercial, agendar asesoría, pedir cotización o explorar BASE.",
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
            Informar, convertir, contactar
          </h2>
        </Reveal>
        <span className="hidden text-xs font-semibold uppercase tracking-widest text-white/50 md:block">
          Arquitectura funcional versión 1
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
                    alt={`${item.title} dentro del ecosistema digital de Revolution Pharma.`}
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
