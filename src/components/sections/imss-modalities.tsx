import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { IMSS_MODALITIES, WHATSAPP_URL_MODALIDADES } from "@/lib/site-data";

export function ImssModalities() {
  return (
    <section
      id="modalidades"
      className="bg-surface-alt/60"
    >
      <div className="mx-auto max-w-6xl px-(--spacing-gutter) py-(--spacing-section)">
        <Reveal>
          <Badge>Retiro IMSS</Badge>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-2xl font-heading text-3xl text-primary sm:text-4xl">
            Modalidad 40 y Modalidad 10: dos formas de mejorar tu relación con el IMSS.
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
            No son productos de seguros, sino trámites del propio IMSS — pero
            pocas personas saben que existen o si les conviene. Te ayudo a
            evaluar tu caso y a gestionar la inscripción.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {IMSS_MODALITIES.map((modality, index) => (
            <Reveal key={modality.title} delay={0.18 + index * 0.06}>
              <Card className="h-full">
                <CardTitle>{modality.title}</CardTitle>
                <p className="mt-1 text-sm text-muted">{modality.subtitle}</p>
                <CardDescription className="mt-4">
                  {modality.description}
                </CardDescription>
                <ul className="mt-5 space-y-2.5">
                  {modality.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Check
                        className="mt-1 size-4 shrink-0 text-accent-dark"
                        aria-hidden
                      />
                      <span className="text-[15px] leading-snug text-foreground/85">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-8">
            <Button asChild variant="outline">
              <a
                href={WHATSAPP_URL_MODALIDADES}
                target="_blank"
                rel="noopener noreferrer"
              >
                Evaluemos tu caso
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
