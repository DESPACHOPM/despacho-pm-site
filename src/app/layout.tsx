import type { Metadata } from "next";

import MetaPixel from "@/components/meta-pixel";

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
  title: "Despacho PM | Tu ingreso depende de ti. Tu estructura no debería.",
  description:
    "Puedes tener buenos ingresos y aun así estar en riesgo financiero. Estructura financiera.",
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
    title: "Despacho PM | Tu ingreso depende de ti. Tu estructura no debería.",
    description:
      "Puedes tener buenos ingresos y aun así estar en riesgo financiero. Estructura financiera.",
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
      "Puedes tener buenos ingresos y aun así estar en riesgo financiero. Estructura financiera.",
    images: ["/images/og-image.png"],
  },
  other: {
    "facebook-domain-verification": "40v981cjg65tuw4zph3oucb5o5tnug",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
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
