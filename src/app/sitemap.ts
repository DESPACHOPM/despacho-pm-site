import type { MetadataRoute } from "next";

import { getAllArticulos } from "@/lib/articulos";

const siteUrl = "https://www.futurumhodie.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Fechas fijas (no "ahora"): Google confía más en el sitemap cuando lastmod
  // solo cambia si la página realmente cambió. Actualiza esta fecha al
  // modificar el contenido de las páginas principales.
  const lastModified = new Date("2026-10-20T00:00:00");
  const articulos = getAllArticulos();

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
      lastModified,
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
