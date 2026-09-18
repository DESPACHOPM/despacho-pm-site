import type { Metadata } from "next";

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
  title: "Despacho PM | Estructura financiera, no solo seguros",
  description:
    "Acompaño a profesionistas, emprendedores y dueños de negocio en México a construir estructura financiera real: ahorro, protección personal y protección empresarial. Agenda tu diagnóstico gratuito.",
  keywords: [
    "asesor financiero",
    "estructura financiera",
    "planeación de retiro México",
    "protección patrimonial",
    "agente de seguros CNSF",
    "Despacho PM",
  ],
  authors: [{ name: "Despacho PM" }],
  openGraph: {
    title: "Despacho PM | Estructura financiera, no solo seguros",
    description:
      "Ahorro estructurado, protección personal y protección empresarial para profesionistas y dueños de negocio en México.",
    url: siteUrl,
    siteName: "Despacho PM",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Despacho PM — Estructura financiera, no solo seguros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Despacho PM | Estructura financiera, no solo seguros",
    description:
      "Ahorro estructurado, protección personal y protección empresarial para profesionistas y dueños de negocio en México.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
