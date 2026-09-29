import type { MetadataRoute } from "next";

const siteUrl = "https://www.futurumhodie.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

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
  ];
}
