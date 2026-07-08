import { FadeIn } from "./FadeIn";
import { SectionShell } from "./layout";

const testimonials = [
  {
    quote:
      "Revolution Pharma aporto estructura tecnica, direccion visual y claridad documental a nuestro proceso de desarrollo.",
    name: "Julianne V.",
    role: "Directora de Innovacion, BioWell Co.",
  },
  {
    quote:
      "Su enfoque de trazabilidad y orden operativo nos ayudo a preparar el proyecto para nuevas conversaciones comerciales.",
    name: "Marc Roth",
    role: "CEO, Zenith Nutrition",
  },
];

export function TestimonialsSection() {
  return (
    <SectionShell className="bg-[#fbf9f9] py-32 md:py-40">
      <FadeIn className="mb-20 text-center md:mb-24">
        <h2 className="text-4xl font-semibold text-[#192830] md:text-5xl">
          Voces de la Industria
        </h2>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <FadeIn key={testimonial.name} delay={index * 180}>
            <article className="border-l border-[#192830]/10 p-10 md:p-12">
              <span className="mb-8 block font-(--font-v2-display) text-6xl text-[#192830]/20">
                &quot;
              </span>
              <p className="mb-10 text-2xl font-semibold italic leading-relaxed text-[#192830]">
                {testimonial.quote}
              </p>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.12em] text-[#192830]">
                  {testimonial.name}
                </div>
                <div className="mt-2 text-sm text-[#43474a]">
                  {testimonial.role}
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  );
}
