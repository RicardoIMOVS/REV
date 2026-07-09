import { Reveal } from "./Reveal";
import { SectionShell, SwissGrid } from "./layout";

const faqs = [
  {
    question: "¿Cuál es el volumen mínimo de pedido (MOQ)?",
    answer:
      "Operamos con un modelo escalable. Para lanzamientos estratégicos, el MOQ comienza en 1,000 unidades, permitiendo a las marcas crecer orgánicamente.",
  },
  {
    question: "¿Ofrecen certificaciones internacionales?",
    answer:
      "La documentación, certificaciones y requisitos técnicos se revisan por proyecto, mercado objetivo y alcance operativo aplicable.",
  },
  {
    question: "¿Tiempos de entrega para nuevas fórmulas?",
    answer:
      "El ciclo completo, desde la aprobación de la formulación hasta el producto terminado, oscila entre 8 y 12 semanas dependiendo de la complejidad técnica.",
  },
];

export function TestimonialsFaqSection() {
  return (
    <SectionShell className="py-32 md:py-40" id="consultas">
      <SwissGrid>
        <Reveal className="col-span-12 md:col-span-4">
          <h2 className="mb-8 text-4xl font-bold uppercase text-black">
            Voz de partner
          </h2>
          <div className="mb-8 h-1 w-12 bg-black" />
          <blockquote className="mb-6 text-lg italic leading-8 text-[#444748]">
            Revolution Pharma aporta estructura, trazabilidad y criterio técnico
            al desarrollo de proyectos de suplementación alimenticia.
          </blockquote>
          <cite className="text-xs font-semibold uppercase not-italic tracking-widest text-black">
            - Marc V., CEO de Aethel Biotech
          </cite>
        </Reveal>

        <div className="col-span-12 mt-20 md:col-span-7 md:col-start-6 md:mt-0">
          <h2 className="mb-12 text-4xl font-bold uppercase text-black">
            Consultas técnicas
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 120}>
                <details className="group border-b border-[#c4c7c7]/40 pb-6">
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
        </div>
      </SwissGrid>
    </SectionShell>
  );
}
