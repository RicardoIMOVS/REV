import { commercialCtas } from "../_data/ctas";
import { businessLines } from "../_data/business-lines";
import { footerColumns } from "../_data/navigation";
import { SectionShell } from "./layout";

const commercialLinks = [
  {
    href: commercialCtas.privateLabel.href,
    label: "Crear mi marca",
    eyebrow: businessLines[1].eyebrow,
  },
  {
    href: commercialCtas.distribution.href,
    label: "Convertirme en distribuidor",
    eyebrow: "B2B",
  },
  {
    href: commercialCtas.base.href,
    label: "Entrar a BASE",
    eyebrow: "B2C",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#c4c7c7]/20 bg-white">
      <section className="bg-black px-5 py-20 text-white md:px-16 md:py-24">
        <div className="mx-auto max-w-360">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-5">
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
                Revolution Pharma
              </span>
              <h2 className="max-w-3xl text-4xl font-black uppercase leading-tight md:text-6xl">
                ¿Listo para impulsar tu próximo proyecto?
              </h2>
            </div>

            <div className="col-span-12 grid gap-4 md:grid-cols-3 lg:col-span-7">
              {commercialLinks.map((link) => (
                <a
                  key={link.label}
                  className="group flex min-h-44 flex-col justify-between border border-white/20 p-6 transition hover:border-white hover:bg-white hover:text-black"
                  href={link.href}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55 transition group-hover:text-black/55">
                    {link.eyebrow}
                  </span>
                  <span className="text-xl font-bold uppercase leading-tight">
                    {link.label}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest transition-transform group-hover:translate-x-2">
                    Entrar -&gt;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="grid grid-cols-12 gap-6 py-20">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <span className="brand-logo mb-8 text-4xl text-black">
              <span className="brand-logo-name">Revolution Pharma</span>
            </span>
            <p className="max-w-xs text-xs font-semibold uppercase leading-6 tracking-widest text-[#444748]">
              Impulsamos negocios en la industria de los suplementos
              alimenticios.
            </p>
            <p className="mt-6 max-w-xs text-[11px] uppercase leading-5 tracking-widest text-[#747878]">
              Este sitio no atribuye propiedades terapéuticas, preventivas o
              curativas. Los productos finales deberán identificarse conforme a
              su categoría regulatoria aplicable.
            </p>
          </div>

          <div className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 lg:col-span-8">
            {footerColumns.map((column) => (
              <FooterColumn
                key={column.title}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>

          <div className="col-span-12 mt-12 border-y border-[#c4c7c7]/25 py-10">
            <div className="grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-center">
              <div>
                <h3 className="text-2xl font-bold uppercase text-black">
                  Suscríbete al boletín
                </h3>
                <p className="mt-3 max-w-md leading-7 text-[#444748]">
                  Recibe contenidos sobre suplementos, desarrollo de marca,
                  ingredientes y oportunidades comerciales.
                </p>
              </div>
              <form className="flex flex-col gap-4 sm:flex-row">
                <input
                  aria-label="Correo electrónico"
                  className="min-h-14 flex-1 border border-[#c4c7c7]/60 bg-white px-5 text-sm outline-none transition focus:border-black"
                  placeholder="correo electrónico"
                  type="email"
                />
                <button
                  className="min-h-14 bg-black px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#2c3134]"
                  type="button"
                >
                  Suscribirme
                </button>
              </form>
            </div>
          </div>

          <div className="col-span-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#444748]">
              (c) Revolution Pharma 2026. Todos los derechos reservados.
            </span>
          </div>
        </div>
      </SectionShell>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: Array<{
    href?: string;
    label: string;
  }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-black">
        {title}
      </h3>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            {link.href ? (
              <a
                className="text-xs font-semibold uppercase tracking-widest text-[#444748] transition hover:text-black"
                href={link.href}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                target={link.href.startsWith("http") ? "_blank" : undefined}
              >
                {link.label}
              </a>
            ) : (
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9a9f9f]">
                {link.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
