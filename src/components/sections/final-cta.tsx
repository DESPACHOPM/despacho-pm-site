import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { MEETING_NOTE, WHATSAPP_URL } from "@/lib/site-data";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-5xl px-(--spacing-gutter) py-(--spacing-section) text-center">
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

      <Reveal delay={0.06}>
        <h2 className="mt-10 font-heading text-3xl text-primary sm:text-4xl md:text-5xl">
          La tranquilidad financiera no es casualidad.
          <br className="hidden sm:block" /> Es resultado de decisiones bien
          tomadas.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
          Si entiendes eso, podemos conversar.
          <br />
          {MEETING_NOTE}
          <br />
          Treinta minutos, sin costo, y si tiene sentido trabajar juntos,
          damos los siguientes pasos.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-9 flex justify-center">
          <Button asChild size="lg">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Agenda tu diagnóstico gratuito
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
