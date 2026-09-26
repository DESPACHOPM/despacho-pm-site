import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site-data";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-4xl px-(--spacing-gutter) py-(--spacing-section) text-center">
      <Reveal>
        <div className="relative mx-auto aspect-[16/9] w-full max-w-2xl overflow-hidden rounded-3xl sm:aspect-[21/9]">
          <Image
            src="/images/cta-familia.jpg"
            alt="Familia disfrutando de tiempo juntos en casa"
            fill
            sizes="(min-width: 640px) 896px, 100vw"
            className="object-cover"
            style={{ objectPosition: "50% 35%" }}
          />
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <h2 className="mx-auto mt-10 max-w-3xl font-heading text-3xl leading-snug text-primary sm:text-4xl md:text-5xl">
          La tranquilidad financiera no es casualidad.
          <br className="hidden sm:block" /> Es resultado de decisiones bien
          tomadas.
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
          Si entiendes eso, podemos conversar.
        </p>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="mt-9 flex justify-center">
          <Button asChild size="lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Agenda tu Línea de la Vida sin costo
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
