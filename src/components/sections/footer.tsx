import Image from "next/image";

import { NAV_LINKS, SOCIAL_LINKS, WHATSAPP_URL } from "@/lib/site-data";
import { Separator } from "@/components/ui/separator";

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
              Estructura financiera para profesionistas y dueños de negocio
              en México.
              <br />
              Agente autorizado ante la CNSF, cédula M370232.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-surface/60">
              Navegación
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-surface/80 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-surface/60">
              Contacto
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-surface/80 hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
              {SOCIAL_LINKS.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-surface/80 hover:text-accent"
                    aria-label={social.platform}
                  >
                    {social.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-surface/10" />

        <div className="flex flex-col gap-3 text-xs text-surface/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Despacho PM. Todos los derechos
            reservados.{" "}
            <a
              href="/aviso-de-privacidad"
              className="underline underline-offset-2 hover:text-surface/80"
            >
              Aviso de Privacidad
            </a>
          </p>
          <p>
            Built with Claude Web Builder by{" "}
            <a
              href="https://tododeia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-surface/80"
            >
              Tododeia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
