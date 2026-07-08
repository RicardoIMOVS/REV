import { SectionShell } from "./layout";

const companyLinks = [
  { href: "#manifiesto", label: "Manifiesto" },
  { href: "#ciencia", label: "Certificaciones" },
  { href: "#contacto", label: "Contacto" },
  { href: "#inicio", label: "Privacidad" },
];

const exploreLinks = [
  { href: "#proceso", label: "Laboratorio" },
  { href: "#proceso", label: "Logistica" },
  { href: "#colecciones", label: "I+D+i" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#c4c7c7]/20 bg-white py-20">
      <SectionShell>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <span className="brand-logo mb-8 text-4xl text-black">
              <span className="brand-logo-name">Revolution Pharma</span>
            </span>
            <p className="max-w-xs text-xs font-semibold uppercase leading-6 tracking-widest text-[#444748]">
              Desarrollo y manufactura para proyectos de suplementacion
              alimenticia con enfoque documental y tecnico.
            </p>
            <p className="mt-6 max-w-xs text-[11px] uppercase leading-5 tracking-widest text-[#747878]">
              Este sitio no atribuye propiedades terapeuticas, preventivas o
              curativas. Los productos finales deberan identificarse conforme a
              su categoria regulatoria aplicable.
            </p>
          </div>

          <FooterColumn
            className="col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-7"
            title="Compania"
            links={companyLinks}
          />
          <FooterColumn
            className="col-span-6 md:col-span-3 lg:col-span-2"
            title="Explorar"
            links={exploreLinks}
          />

          <div className="col-span-12 mt-16 flex flex-col gap-6 border-t border-[#c4c7c7]/25 pt-10 md:flex-row md:items-center md:justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#444748]">
              © 2024 Revolution Pharma. Excelencia en suplementacion cientifica.
            </span>
            <div className="flex gap-8">
              {["LinkedIn", "Instagram"].map((item) => (
                <a
                  key={item}
                  className="text-xs font-semibold uppercase tracking-widest text-[#444748] transition hover:text-black"
                  href="#inicio"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: Array<{
    href: string;
    label: string;
  }>;
  className: string;
};

function FooterColumn({ title, links, className }: FooterColumnProps) {
  return (
    <div className={className}>
      <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-black">
        {title}
      </h3>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <a
              className="text-xs font-semibold uppercase tracking-widest text-[#444748] transition hover:text-black"
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
