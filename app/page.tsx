import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-12 text-white">
      <section className="mx-auto flex max-w-5xl flex-col gap-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Proyecto REV
          </p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">
            Selecciona una version
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Esta portada sirve para comparar las dos paginas del proyecto sin
            mezclar sus archivos.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/version-1"
            className="rounded-lg border border-white/10 bg-white p-6 text-zinc-950 transition hover:-translate-y-1 hover:bg-cyan-50"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Version 1
            </span>
            <h2 className="mt-3 text-2xl font-semibold">Primera propuesta</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Ruta separada para construir y revisar la primera pagina.
            </p>
          </Link>

          <Link
            href="/version-2"
            className="rounded-lg border border-white/10 bg-zinc-900 p-6 text-white transition hover:-translate-y-1 hover:border-emerald-300/60"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Version 2
            </span>
            <h2 className="mt-3 text-2xl font-semibold">Segunda propuesta</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Ruta separada para probar una variante visual o de contenido.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
