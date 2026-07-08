import { FadeIn } from "./FadeIn";
import { Grid, SectionShell, labelClass } from "./layout";

export function PhilosophySection() {
  return (
    <SectionShell className="bg-[#fbf9f9] py-32 md:py-40" id="filosofia">
      <Grid className="items-center">
        <div className="col-span-12 hidden md:col-span-2 md:block">
          <div className="h-px w-full bg-[#192830]/10" />
        </div>
        <FadeIn className="col-span-12 text-center md:col-span-8">
          <h2 className={`${labelClass} mb-12 text-[#192830]/40`}>
            Nuestra Esencia
          </h2>
          <p className="text-4xl font-semibold leading-tight text-[#192830] md:text-5xl">
            La manufactura no es solo ejecucion; es la traduccion fisica de la{" "}
            <span className="font-normal italic">vision cientifica</span> en
            bienestar tangible.
          </p>
        </FadeIn>
        <div className="col-span-12 hidden md:col-span-2 md:block">
          <div className="h-px w-full bg-[#192830]/10" />
        </div>
      </Grid>
    </SectionShell>
  );
}
