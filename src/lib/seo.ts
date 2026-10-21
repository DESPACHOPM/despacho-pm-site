// Datos para compartir una página en redes (WhatsApp, LinkedIn, Facebook).
// Cada página debe definir los suyos: si no, hereda el título y la
// descripción de la página principal.
const SITE_URL = "https://www.futurumhodie.com";

export function pageSocial(opts: {
  title: string;
  description: string;
  path: string;
}) {
  const { title, description, path } = opts;
  return {
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      siteName: "Despacho PM",
      locale: "es_MX",
      type: "website" as const,
      images: [
        { url: "/images/og-image.png", width: 1200, height: 630, alt: title },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: ["/images/og-image.png"],
    },
  };
}
