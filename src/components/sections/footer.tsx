import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, ShieldCheck } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/site-data";
import { Separator } from "@/components/ui/separator";

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" {...props}>
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" {...props}>
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  );
}

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 512" fill="currentColor" {...props}>
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  );
}

function IconWhatsApp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" {...props}>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

const SOCIAL_ICON_LINKS = [
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/company/despacho-pm",
    Icon: IconLinkedIn,
  },
  {
    platform: "Instagram",
    href: "https://www.instagram.com/futurumhodie/",
    Icon: IconInstagram,
  },
  {
    platform: "Facebook",
    href: "https://www.facebook.com/Futurum.Hodie",
    Icon: IconFacebook,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-surface">
      <div className="mx-auto max-w-6xl px-(--spacing-gutter) py-14">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Despacho PM"
                width={48}
                height={48}
                className="rounded-full"
              />
              <p className="font-heading text-2xl">
                Despacho <span className="text-accent">PM</span>
              </p>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-surface/70">
              Estructura financiera para profesionistas y dueños de negocio.
            </p>

            <div className="mt-5 inline-flex items-start gap-3 rounded-lg border border-surface/15 px-4 py-3">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent" />
              <p className="text-xs leading-relaxed text-surface/70">
                Agente autorizado ante la CNSF
                <br />
                Cédula M370232 · Verifica mi registro
              </p>
            </div>
          </div>

          <div id="contacto">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-surface/60">
              Contacto
            </p>

            <div className="mt-4 flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-surface/50" />
              <p className="text-sm text-surface/80">
                Paseo de la Reforma, Col. Juárez, Ciudad de México
              </p>
            </div>

            <div className="mt-4 flex items-start gap-3">
              <Calendar className="mt-0.5 size-4 shrink-0 text-surface/50" />
              <div className="text-sm text-surface/80">
                <p>Lunes a sábado, solo con cita previa</p>
                <p className="text-surface/60">
                  Atención presencial y en línea
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-surface/30 px-5 py-2.5 text-sm font-semibold text-surface transition-colors hover:border-accent hover:text-accent"
            >
              <IconWhatsApp className="size-4" />
              WhatsApp · 56 2127 0724
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-surface/60">
              Sígueme
            </p>
            <div className="mt-4 flex items-center gap-3">
              {SOCIAL_ICON_LINKS.map(({ platform, href, Icon }) => (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-surface/20 text-surface/80 transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-surface/10" />

        <div className="flex flex-col gap-3 text-xs text-surface/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Despacho PM. Todos los derechos
            reservados.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <a href="/aviso-de-privacidad" className="hover:text-accent">
              Aviso de privacidad
            </a>
            <Link href="/articulos" className="hover:text-accent">
              Artículos
            </Link>
            <a href="/alianzas" className="hover:text-accent">
              ¿Eres contador, abogado o notario? Seamos aliados
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
