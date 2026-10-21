import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { ArticuloCta } from "@/components/sections/articulo-cta";
import {
  ArticuloAscensorLink,
  ArticuloPisosList,
} from "@/components/sections/articulo-pisos";
import { JsonLd } from "@/components/json-ld";
import { getAllArticulos, getArticuloBySlug } from "@/lib/articulos";

const siteUrl = "https://www.futurumhodie.com";

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

  const title = articulo.seoTitulo ?? `${articulo.titulo} | Despacho PM`;
  const description = articulo.seoDescripcion ?? articulo.descripcion;

  return {
    title,
    description,
    alternates: {
      canonical: `/articulos/${articulo.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/articulos/${articulo.slug}`,
      siteName: "Despacho PM",
      locale: "es_MX",
      type: "article",
      publishedTime: articulo.fecha,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: articulo.titulo,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.png"],
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

  // Otros artículos para enlazar al final (el central primero, luego los más
  // recientes). Ayuda a Google y a quien lee a seguir por el sitio.
  const relacionados = getAllArticulos()
    .filter((otro) => otro.slug !== articulo.slug)
    .slice(0, 3);

  // Títulos con forma "Idea: ¿pregunta?": la pregunta va completa en su propia línea.
  const tituloPartes = articulo.titulo.match(/^(.+:)\s+(¿[^?]+\?)$/);

  // Datos estructurados: le dicen a Google y a la IA que esta página es un
  // artículo, quién lo escribió y cuándo se publicó. El autor y el editor
  // apuntan a las fichas de Pedro y del despacho definidas en el layout.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articulo.titulo,
    description: articulo.seoDescripcion ?? articulo.descripcion,
    // Con zona horaria de la Ciudad de México (UTC-6) para que Google valide la fecha.
    datePublished: `${articulo.fecha}T00:00:00-06:00`,
    dateModified: `${articulo.fecha}T00:00:00-06:00`,
    inLanguage: "es-MX",
    url: `${siteUrl}/articulos/${articulo.slug}`,
    mainEntityOfPage: `${siteUrl}/articulos/${articulo.slug}`,
    image: `${siteUrl}/images/og-image.png`,
    author: {
      "@type": "Person",
      "@id": `${siteUrl}/#pedro-miguel`,
      name: "Pedro Miguel",
    },
    publisher: {
      "@type": "FinancialService",
      "@id": `${siteUrl}/#organization`,
      name: "Despacho PM",
    },
  };

  // Ruta de navegación (Inicio > Artículos > este artículo) para Google y la IA.
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Artículos",
        item: `${siteUrl}/articulos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: articulo.titulo,
        item: `${siteUrl}/articulos/${articulo.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-(--spacing-gutter) py-(--spacing-section)">
          {!articulo.central && articulo.piso && <ArticuloAscensorLink />}

          <p className="mt-4 text-sm text-muted">{formatFecha(articulo.fecha)}</p>
          <h1 className={`mt-2 font-heading leading-snug text-balance text-primary ${tituloPartes ? "text-[clamp(1.05rem,5.8vw,2.25rem)]" : "text-3xl sm:text-4xl"}`}>
            {tituloPartes ? (
                <>
                  {tituloPartes[1]}
                  <span className="mt-2 block whitespace-nowrap">
                    {tituloPartes[2]}
                  </span>
                </>
            ) : (
              articulo.titulo.replace(/\s+(\S+)$/, "\u00A0$1")
            )}
        </h1>

          <p className="mt-4 text-sm text-muted">
            Por{" "}
            <Link
              href="/#historia"
              rel="author"
              className="font-semibold text-primary hover:text-accent-dark"
            >
              Pedro Miguel
            </Link>
            {" "}· Asesor financiero · Cédula M370232
          </p>

          {articulo.resumen && articulo.resumen.length > 0 && (
            <aside
              aria-label="En resumen"
              className="mt-8 rounded-lg border border-border bg-surface-alt/60 px-5 py-5 sm:px-6"
            >
              <p className="font-heading text-lg text-primary">En resumen</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[16px] leading-relaxed text-foreground/85">
                {articulo.resumen.map((linea) => (
                  // Las dos últimas palabras van unidas para que ninguna quede sola.
                  <li key={linea}>{linea.replace(/\s+(\S+)$/, "\u00A0$1")}</li>
                ))}
              </ul>
            </aside>
          )}

          <div
            className="prose-articulo mt-8 text-[17px] leading-relaxed text-foreground/85"
            dangerouslySetInnerHTML={{ __html: articulo.contentHtml }}
          />

          {articulo.central && <ArticuloPisosList />}

          {relacionados.length > 0 && (
            <nav aria-label="Sigue leyendo" className="mt-14">
              <p className="font-heading text-xl text-primary">Sigue leyendo</p>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {relacionados.map((otro) => (
                  <li key={otro.slug}>
                    <Link
                      href={`/articulos/${otro.slug}`}
                      className="block py-4 transition-colors hover:text-accent-dark"
                    >
                      <span className="block font-heading text-lg leading-snug text-primary">
                        {otro.titulo}
                      </span>
                      <span className="mt-1 block text-[15px] leading-relaxed text-foreground/75">
                        {otro.descripcion}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <ArticuloCta situacion={articulo.situacion} />
        </article>
      </main>
      <Footer />
    </>
  );
}
