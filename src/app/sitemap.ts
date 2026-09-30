import type { MetadataRoute } from "next";

import { getAllArticulos } from "@/lib/articulos";

const siteUrl = "https://www.futurumhodie.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
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
