import type { MetadataRoute } from "next";

import { getAllArticulos } from "@/lib/articulos";

const siteUrl = "https://www.futurumhodie.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Fechas fijas (no "ahora"): Google confía más en el sitemap cuando lastmod
  // solo cambia si la página realmente cambió. Actualiza esta fecha al
  // modificar el contenido de las páginas principales.
  const lastModified = new Date("2026-10-20T00:00:00");
  const articulos = getAllArticulos();

  // La lista de /articulos cambia cada vez que se publica un artículo nuevo,
  // así que su fecha es la del artículo más reciente (nunca anterior a la base).
  const fechaMasReciente = articulos.map((a) => a.fecha).sort().at(-1);
  const articulosLastModified = fechaMasReciente
    ? new Date(
        Math.max(
          lastModified.getTime(),
          new Date(`${fechaMasReciente}T00:00:00`).getTime(),
        ),
      )
    : lastModified;

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/alianzas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/aviso-de-privacidad`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteUrl}/articulos`,
      lastModified: articulosLastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...articulos.map((articulo) => ({
      url: `${siteUrl}/articulos/${articulo.slug}`,
      lastModified: new Date(`${articulo.fecha}T00:00:00`),
      changeFrequency: "monthly" as const,
      priority: articulo.central ? 0.8 : 0.6,
    })),
  ];
}
