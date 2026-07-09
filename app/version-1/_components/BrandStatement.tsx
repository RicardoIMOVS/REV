import { Reveal } from "./Reveal";
import { SectionShell } from "./layout";

export function BrandStatement() {
  return (
    <SectionShell
      className="border-y border-[#c4c7c7]/20 bg-white py-32 md:py-40"
      id="manifiesto"
    >
      <div className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-4xl text-5xl font-black uppercase leading-tight text-black md:text-7xl">
            No somos una página de productos. Somos un ecosistema para crecer.
          </h2>
        </Reveal>
        <Reveal delay={260}>
          <div className="mx-auto mt-12 h-24 w-px bg-black" />
        </Reveal>
      </div>
    </SectionShell>
  );
}
