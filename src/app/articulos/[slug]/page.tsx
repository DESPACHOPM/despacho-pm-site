import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { ArticuloCta } from "@/components/sections/articulo-cta";
import {
  ArticuloAscensorLink,
  ArticuloPisosList,
} from "@/components/sections/articulo-pisos";
import { getAllArticulos, getArticuloBySlug } from "@/lib/articulos";

export function generateStaticParams() {
  return getAllArticulos().map((articulo) => ({ slug: articulo.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const articulo = getArticuloBySlug(slug);
  if (!articulo) return {};

  return {
    title: `${articulo.titulo} | Despacho PM`,
    description: articulo.descripcion,
    alternates: {
      canonical: `/articulos/${articulo.slug}`,
    },
  };
}

function formatFecha(fecha: string) {
  const date = new Date(`${fecha}T00:00:00`);
  if (Number.isNaN(date.getTime())) return fecha;
  return date.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticuloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articulo = getArticuloBySlug(slug);
  if (!articulo) notFound();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-(--spacing-gutter) py-(--spacing-section)">
          {!articulo.central && articulo.piso && <ArticuloAscensorLink />}

          <p className="mt-4 text-sm text-muted">{formatFecha(articulo.fecha)}</p>
          <h1 className="mt-2 font-heading text-3xl leading-snug text-primary sm:text-4xl">
            {articulo.titulo}
          </h1>

          <div
            className="prose-articulo mt-8 text-[17px] leading-relaxed text-foreground/85"
            dangerouslySetInnerHTML={{ __html: articulo.contentHtml }}
          />

          {articulo.central && <ArticuloPisosList />}

          <ArticuloCta situacion={articulo.situacion} />
        </article>
      </main>
      <Footer />
    </>
  );
}
