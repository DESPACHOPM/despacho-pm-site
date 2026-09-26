import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

export function Story() {
  return (
    <section id="historia" className="bg-surface-alt/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-(--spacing-gutter) py-(--spacing-section) lg:flex-row lg:gap-18">
        <div className="lg:w-[380px] lg:shrink-0">
          <Reveal>
            <Badge>Mi historia</Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 font-heading text-3xl leading-snug text-primary sm:text-4xl">
              Puedes tener buenos ingresos y aún así estar en riesgo
              financiero.
            </h2>
          </Reveal>
        </div>

        <div className="flex-1 space-y-5 text-lg leading-relaxed text-foreground/85">
          <Reveal delay={0.16}>
            <p>
              Más de diez años en los sectores ambiental, petrolero y
              energético.
              <br />
              Proyectos grandes. Operaciones complejas. Presión constante.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <p>
              Ahí entendí algo que no aparece en ningún plan:
              <br />
              <span className="font-semibold text-primary">
                los problemas más costosos son los que no estás preparado
                para enfrentar.
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <p>
              Empresas sólidas se detienen.
              <br />
              Personas con buenos ingresos pierden estabilidad.
              <br />
              No por falta de capacidad. Por falta de estructura.
            </p>
          </Reveal>

          <Reveal delay={0.34}>
            <p className="font-semibold text-primary">
              Hoy no empiezo hablando de seguros.
              <br />
              Empiezo construyendo estructura financiera.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
