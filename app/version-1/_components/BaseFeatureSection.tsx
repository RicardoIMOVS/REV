import { Reveal } from "./Reveal";

export function BaseFeatureSection() {
  return (
    <section
      className="relative flex min-h-180 scroll-mt-28 items-center justify-center overflow-hidden bg-black px-5 text-white md:px-16"
      id="base"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2c3134_0%,#000_58%)] opacity-70" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="mb-8 block text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
            Micrositio Exclusivo
          </span>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="text-5xl font-black uppercase leading-tight md:text-7xl">
            Explora BASE
          </h2>
        </Reveal>
        <Reveal delay={260}>
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-white/70">
            El ecosistema de wellness definitivo. Una inmersion en la
            suplementacion de proxima generacion.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <a
            className="mt-12 inline-flex border border-white/30 px-10 py-5 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            href="https://base.revolutionpharma.com.mx/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ingresar al ecosistema
          </a>
        </Reveal>
      </div>
    </section>
  );
}
