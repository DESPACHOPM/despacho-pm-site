import type { Metadata } from "next";
import Script from "next/script";

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

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1528140481542771');
            fbq('track', 'PageView');
          `}
        </Script>
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
