import { FadeIn } from "./FadeIn";
import { Grid, SectionShell, labelClass } from "./layout";

const faqs = [
  {
    question: "Cual es el volumen minimo de produccion?",
    answer:
      "Nuestros lotes minimos (MOQ) varian segun la formulacion, pero generalmente comenzamos en 2,500 unidades para asegurar eficiencia industrial.",
  },
  {
    question: "Ofrecen servicios de formulacion desde cero?",
    answer:
      "Si, colaboramos en la definicion tecnica, documental y visual del proyecto, de acuerdo con los ingredientes y alcances permitidos.",
  },
  {
    question: "Tienen certificaciones internacionales?",
    answer:
      "La documentacion y certificaciones disponibles se revisan por proyecto, proveedor, proceso y mercado objetivo.",
  },
];

export function ContactFaqSection() {
  return (
    <SectionShell className="border-t border-[#192830]/5 bg-[#f5f3f3] py-32 md:py-40" id="contacto">
      <Grid>
        <FadeIn className="col-span-12 lg:col-span-5">
          <h2 className="mb-12 text-4xl font-semibold text-[#192830] md:text-5xl">
            Consultas Tecnicas
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <details
                className="group cursor-pointer border-b border-[#192830]/10 pb-6"
                key={faq.question}
              >
                <summary className="flex list-none items-center justify-between gap-6 font-bold text-[#192830]">
                  <span>{faq.question}</span>
                  <span className="transition group-open:rotate-180">v</span>
                </summary>
                <p className="mt-4 leading-7 text-[#43474a]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="col-span-12 lg:col-span-6 lg:col-start-7">
          <div className="border border-[#192830]/5 bg-white p-8 shadow-sm md:p-12">
            <h3 className="mb-8 text-3xl font-semibold text-[#192830]">
              Iniciar un Proyecto
            </h3>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Nombre Completo" placeholder="Juan Perez" />
                <Field label="Compania" placeholder="Empresa S.A." />
              </div>
              <Field
                label="Email Corporativo"
                placeholder="j.perez@empresa.com"
                type="email"
              />
              <label className="block">
                <span className={`${labelClass} mb-2 block text-[10px] text-[#192830]/60`}>
                  Detalles del Proyecto
                </span>
                <textarea
                  className="min-h-27.5 w-full border-0 border-b border-[#192830]/20 bg-transparent py-3 outline-none transition focus:border-[#192830] focus:ring-0"
                  placeholder="Cuentenos su vision..."
                />
              </label>
              <button
                className={`${labelClass} mt-6 w-full bg-[#192830] py-5 text-white transition hover:bg-[#2f3e46]`}
                type="submit"
              >
                Enviar Consulta
              </button>
            </form>
          </div>
        </FadeIn>
      </Grid>
    </SectionShell>
  );
}

type FieldProps = {
  label: string;
  placeholder: string;
  type?: string;
};

function Field({ label, placeholder, type = "text" }: FieldProps) {
  return (
    <label className="block">
      <span className={`${labelClass} mb-2 block text-[10px] text-[#192830]/60`}>
        {label}
      </span>
      <input
        className="w-full border-0 border-b border-[#192830]/20 bg-transparent py-3 outline-none transition focus:border-[#192830] focus:ring-0"
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}
