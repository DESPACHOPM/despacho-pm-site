import type { Metadata } from "next";
import Link from "next/link";

import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { getAllArticulos } from "@/lib/articulos";

export const metadata: Metadata = {
  title: "Artículos | Despacho PM",
  description:
    "Ideas y marcos para tomar decisiones financieras con estructura: ahorro, protección personal y protección empresarial.",
  alternates: {
    canonical: "/articulos",
  },
};

function formatFecha(fecha: string) {
  const date = new Date(`${fecha}T00:00:00`);
  if (Number.isNaN(date.getTime())) return fecha;
  return date.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Articulos() {
  const articulos = getAllArticulos();
  const central = articulos.find((articulo) => articulo.central);
  const resto = articulos.filter((articulo) => !articulo.central);

  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-(--spacing-gutter) py-(--spacing-section)">
          <div className="max-w-2xl">
            <Reveal>
              <Badge>Artículos</Badge>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 font-heading text-3xl leading-snug text-primary sm:text-4xl">
                Ideas y marcos para decidir con estructura.
              </h1>
            </Reveal>
          </div>

          <div className="mt-12 flex flex-col gap-6">
            {central && (
              <Reveal>
                <Link
                  href={`/articulos/${central.slug}`}
                  className="block rounded-2xl border-2 border-accent/50 bg-surface-alt/60 p-8 transition-colors duration-150 ease-out hover:border-accent sm:p-10"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-accent-dark">
                    Artículo central
                  </span>
                  <p className="mt-3 font-heading text-2xl leading-snug text-primary sm:text-3xl">
                    {central.titulo}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    {formatFecha(central.fecha)}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">
                    {central.descripcion}
                  </p>
                </Link>
              </Reveal>
            )}

            {resto.map((articulo, index) => (
              <Reveal key={articulo.slug} delay={0.06 * (index + 1)}>
                <Link
                  href={`/articulos/${articulo.slug}`}
                  className="block rounded-2xl border border-border bg-surface p-8 transition-colors duration-150 ease-out hover:border-accent/60"
                >
                  <p className="font-heading text-xl text-primary">
                    {articulo.titulo}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {formatFecha(articulo.fecha)}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">
                    {articulo.descripcion}
                  </p>
                </Link>
              </Reveal>
            ))}

            {!central && resto.length === 0 && (
              <p className="text-[15px] text-muted">
                Todavía no hay artículos publicados.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
