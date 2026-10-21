import type { Metadata } from "next";

import MetaPixel from "@/components/meta-pixel";
import { JsonLd } from "@/components/json-ld";
import { SOCIAL_LINKS } from "@/lib/site-data";

import "@fontsource/eb-garamond/400.css";
import "@fontsource/eb-garamond/400-italic.css";
import "@fontsource/eb-garamond/500.css";
import "@fontsource/eb-garamond/600.css";
import "@fontsource/eb-garamond/700.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "./globals.css";

const siteUrl = "https://www.futurumhodie.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Despacho PM | Asesor financiero en CDMX para profesionistas",
  description:
    "Asesor financiero en CDMX para profesionistas y dueños de negocio: ahorro para el retiro, protección personal y empresarial, y estrategias en pesos y dólares.",
  keywords: [
    "asesor financiero",
    "estructura financiera",
    "planeación de retiro México",
    "protección patrimonial",
    "agente de seguros CNSF",
    "Despacho PM",
  ],
  authors: [{ name: "Despacho PM" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Despacho PM | Tu ingreso depende de ti. Tu estructura no debería.",
    description:
      "Asesor financiero en CDMX para profesionistas y dueños de negocio: ahorro para el retiro, protección personal y empresarial, y estrategias en pesos y dólares.",
    url: siteUrl,
    siteName: "Despacho PM",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Despacho PM — Tu ingreso depende de ti. Tu estructura no debería.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Despacho PM | Tu ingreso depende de ti. Tu estructura no debería.",
    description:
      "Asesor financiero en CDMX para profesionistas y dueños de negocio: ahorro para el retiro, protección personal y empresarial, y estrategias en pesos y dólares.",
    images: ["/images/og-image.png"],
  },
  other: {
    "facebook-domain-verification": "40v981cjg65tuw4zph3oucb5o5tnug",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": `${siteUrl}/#organization`,
  name: "Despacho PM",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/og-image.png`,
  description:
    "Estructura financiera para profesionistas y dueños de negocio en México: ahorro estructurado para el retiro, protección personal y protección empresarial, con estrategias en pesos y en dólares.",
  telephone: "+52 56 2127 0724",
  inLanguage: "es-MX",
  areaServed: { "@type": "Country", name: "México" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad de México",
    addressRegion: "CDMX",
    postalCode: "06600",
    addressCountry: "MX",
  },
  // Horario de atención (con cita previa): lunes a viernes de 9 a 18 h y
  // sábados de 9 a 14 h.
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  knowsAbout: [
    "Planeación de retiro",
    "Ahorro estructurado",
    "Protección personal",
    "Protección empresarial",
    "Modalidad 40 y Modalidad 10 del IMSS",
    "Ahorro en dólares",
  ],
  founder: { "@id": `${siteUrl}/#pedro-miguel` },
  sameAs: SOCIAL_LINKS.map((link) => link.href),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Despacho PM",
  url: siteUrl,
  inLanguage: "es-MX",
  publisher: { "@id": `${siteUrl}/#organization` },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#pedro-miguel`,
  name: "Pedro Miguel",
  jobTitle: "Asesor financiero y agente de seguros",
  description:
    "Más de 10 años en los sectores ambiental, petrolero y energético. Hoy acompaña a personas y empresas a construir estructura financiera.",
  url: siteUrl,
  image: `${siteUrl}/images/pedro-hero.jpg`,
  worksFor: { "@id": `${siteUrl}/#organization` },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Cédula de agente de seguros M370232",
    credentialCategory: "Autorización de la Comisión Nacional de Seguros y Fianzas (CNSF)",
  },
  sameAs: ["https://www.linkedin.com/in/pedromiguelma"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={personSchema} />
        <MetaPixel />
        {children}

        {/* Meta Pixel Code (noscript fallback) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1528140481542771&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </body>
    </html>
  );
}
