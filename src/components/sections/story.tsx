import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

export function Story() {
  return (
    <section id="historia" className="bg-surface-alt/60">
      <div className="mx-auto max-w-3xl px-(--spacing-gutter) py-(--spacing-section)">
        <Reveal>
          <Badge>Mi historia</Badge>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 font-heading text-3xl text-primary sm:text-4xl">
            Puedes tener buenos ingresos y aún así estar en riesgo financiero.
          </h2>
        </Reveal>

        <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/85">
          <Reveal delay={0.14}>
            <p>
              Durante años trabajé en entornos donde todo parecía estar bajo
              control.
              <br />
              Proyectos grandes. Operaciones complejas. Decisiones
              estratégicas todos los días.
            </p>
          </Reveal>

          <Reveal delay={0.19}>
            <p>
              Más de diez años en sectores como el ambiental, el petrolero y
              el energético, coordinando equipos, procesos y soluciones para
              empresas que operan bajo presión constante.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p>
              Y aun así, entendí algo que no aparece en ningún plan de
              negocio:
            </p>
          </Reveal>

          <Reveal delay={0.29}>
            <p>
              Los problemas más costosos no son los que ves.
              <br />
              Son los que no estás preparado para enfrentar.
            </p>
          </Reveal>

          <Reveal delay={0.34}>
            <p>
              Empresas sólidas se detienen.
              <br />
              Personas con buenos ingresos pierden estabilidad.
            </p>
          </Reveal>

          <Reveal delay={0.39}>
            <p>
              No por falta de capacidad, sino por falta de estructura.
              <br />
              Ese fue mi punto de quiebre.
            </p>
          </Reveal>

          <Reveal delay={0.44}>
            <p className="font-heading text-2xl text-primary">
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
