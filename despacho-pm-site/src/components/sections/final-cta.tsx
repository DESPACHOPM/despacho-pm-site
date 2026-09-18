import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { MEETING_NOTE, WHATSAPP_URL } from "@/lib/site-data";

export function FinalCta() {
  return (
    <section className="mx-auto max-w-5xl px-(--spacing-gutter) py-(--spacing-section) text-center">
      <Reveal>
        <h2 className="font-heading text-3xl text-primary sm:text-4xl md:text-5xl">
          La tranquilidad financiera no es casualidad.
          <br className="hidden sm:block" /> Es resultado de decisiones bien
          tomadas.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
          Si entiendes eso, podemos conversar. {MEETING_NOTE} Treinta
          minutos, sin costo, para ver si tiene sentido trabajar juntos.
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
