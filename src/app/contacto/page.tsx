import type { Metadata } from "next";
import { Calendar, MapPin, ShieldCheck } from "lucide-react";

import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { JsonLd } from "@/components/json-ld";
import { pageSocial } from "@/lib/seo";
import { WHATSAPP_URL } from "@/lib/site-data";

const siteUrl = "https://www.futurumhodie.com";
const title = "Contacto | Despacho PM";
const description =
  "Agenda tu diagnóstico con Despacho PM por WhatsApp. Atención en línea y presencial en la Ciudad de México, de lunes a sábado, solo con cita previa.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contacto" },
  ...pageSocial({ title, description, path: "/contacto" }),
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${siteUrl}/contacto`,
  name: "Contacto | Despacho PM",
  inLanguage: "es-MX",
  about: { "@id": `${siteUrl}/#organization` },
};

export default function ContactoPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <Nav />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-(--spacing-gutter) py-(--spacing-section)">
          <p className="font-heading text-lg italic text-accent-dark">
            Hablemos
          </p>
          <h1 className="mt-3 font-heading text-4xl text-primary sm:text-5xl">
            Contacto
          </h1>

          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-foreground/85">
            <p>
              Soy Pedro Miguel, asesor financiero con cédula M370232 ante la
              CNSF. Atiendo a profesionistas y dueños de negocio que buscan
              claridad financiera, estrategia a largo plazo y decisiones bien
              estructuradas.
            </p>
            <p>
              La forma más directa de comunicarte conmigo es por WhatsApp. Ahí
              agendamos tu diagnóstico inicial, que dura de 30 a 45 minutos y no
              tiene costo.
            </p>
          </div>

          <ul className="mt-10 space-y-6 text-[16px] leading-relaxed text-foreground/85">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-accent-dark" aria-hidden />
              <div>
                <p className="font-semibold text-primary">Dirección</p>
                <p>
                  Paseo de la Reforma, Col. Juárez, Ciudad de México, C.P. 06600
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Calendar className="mt-1 size-5 shrink-0 text-accent-dark" aria-hidden />
              <div>
                <p className="font-semibold text-primary">Horario</p>
                <p>Lunes a viernes de 9:00 a 18:00 h</p>
                <p>Sábados de 9:00 a 14:00 h</p>
                <p className="text-muted">
                  Solo con cita previa. Atención presencial y en línea.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <ShieldCheck className="mt-1 size-5 shrink-0 text-accent-dark" aria-hidden />
              <div>
                <p className="font-semibold text-primary">Registro</p>
                <p>Cédula M370232 ante la Comisión Nacional de Seguros y Fianzas (CNSF)</p>
              </div>
            </li>
          </ul>

          <div className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-surface transition-colors hover:bg-accent-dark"
            >
              Agenda por WhatsApp · 56 2127 0724
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
