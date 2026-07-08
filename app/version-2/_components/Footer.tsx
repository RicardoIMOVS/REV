import { labelClass } from "./layout";

const companyLinks = [
  { href: "#filosofia", label: "Filosofia" },
  { href: "#id", label: "I+D" },
  { href: "#procesos", label: "Procesos" },
  { href: "#base", label: "BASE" },
];

const supportLinks = [
  { href: "#contacto", label: "Contacto" },
  { href: "#id", label: "Certificaciones" },
  { href: "#inicio", label: "Privacidad" },
  { href: "#inicio", label: "Terminos" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#192830]/10 bg-[#fbf9f9]">
      <div className="mx-auto grid max-w-360 grid-cols-12 gap-8 px-6 py-16 md:px-20">
        <div className="col-span-12 lg:col-span-4">
          <div className="brand-logo mb-6 text-4xl text-[#192830]">
            <span className="brand-logo-name">Revolution Pharma</span>
          </div>
          <p className="mb-8 max-w-xs leading-7 text-[#43474a]">
            Desarrollo y manufactura para proyectos de suplementacion
            alimenticia con enfoque tecnico, documental y regulatorio.
          </p>
          <p className="mb-8 max-w-xs text-[11px] uppercase leading-5 tracking-widest text-[#73787b]">
            Este sitio no atribuye propiedades terapeuticas, preventivas o
            curativas. Los productos finales deberan identificarse conforme a su
            categoria regulatoria aplicable.
          </p>
          <div className="flex gap-4">
            {["Share", "Mail"].map((item) => (
              <a
                className="flex h-10 w-10 items-center justify-center border border-[#192830]/10 text-xs font-semibold uppercase text-[#192830] transition hover:bg-[#192830] hover:text-white"
                href="#inicio"
                key={item}
              >
                {item.slice(0, 1)}
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Empresa" links={companyLinks} />
        <FooterColumn title="Soporte" links={supportLinks} />

        <div className="col-span-12 mt-8 lg:col-span-4 lg:mt-0">
          <h4 className={`${labelClass} mb-6 text-[#192830]`}>Newsletter</h4>
          <p className="mb-6 text-sm text-[#43474a]">
            Reciba insights sobre desarrollo, documentacion y mercado.
          </p>
          <form className="flex border-b border-[#192830]/20">
            <input
              className="w-full border-none bg-transparent px-0 py-3 outline-none focus:ring-0"
              placeholder="Email corporativo"
              type="email"
            />
            <button className={`${labelClass} pl-4 text-[#192830]`}>
              Suscribir
            </button>
          </form>
        </div>

        <div className="col-span-12 mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#192830]/5 pt-8 text-sm text-[#43474a] md:flex-row">
          <span>
            © 2024 Revolution Pharma. Excelencia en Manufactura Biotecnologica.
          </span>
          <div className="flex gap-8 text-[10px] font-semibold uppercase tracking-[0.12em]">
            <a href="#inicio">LinkedIn</a>
            <a href="#inicio">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: Array<{
    href: string;
    label: string;
  }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="col-span-6 lg:col-span-2">
      <h4 className={`${labelClass} mb-6 text-[#192830]`}>{title}</h4>
      <ul className="space-y-4 text-[#43474a]">
        {links.map((link) => (
          <li key={link.label}>
            <a className="transition hover:text-[#192830]" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
