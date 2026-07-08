import Link from "next/link";

type VersionPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  accentClassName: string;
  surfaceClassName: string;
  points: string[];
};

export function VersionPage({
  eyebrow,
  title,
  description,
  accentClassName,
  surfaceClassName,
  points,
}: VersionPageProps) {
  return (
    <main className={`min-h-screen px-6 py-10 text-white ${surfaceClassName}`}>
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <Link
          href="/"
          className="w-fit rounded-md border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 hover:text-white"
        >
          Volver
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p
              className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentClassName}`}
            >
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              {description}
            </p>
          </div>

          <div className="rounded-lg border border-white/12 bg-white/8 p-6 shadow-2xl shadow-black/20 backdrop-blur">
            <h2 className="text-xl font-semibold">Base de trabajo</h2>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/75">
              {points.map((point) => (
                <li key={point} className="border-l border-white/20 pl-4">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
