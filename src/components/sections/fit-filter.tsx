import { Reveal } from "@/components/motion/reveal";
import { Check, X } from "lucide-react";

const FOR_YOU = [
  "Buscas claridad financiera, no otra póliza que archivar",
  "Piensas en estrategia a largo plazo",
  "Quieres decisiones bien estructuradas, aunque tomen su tiempo",
];

const NOT_FOR_YOU = [
  "Solo quieres cotizar y comparar precios",
  "Buscas la póliza más barata, sin importar qué cubre",
  "No tienes tiempo para una conversación honesta de 30 minutos",
];

export function FitFilter() {
  return (
    <section className="bg-primary text-surface">
      <div className="mx-auto max-w-5xl px-(--spacing-gutter) py-(--spacing-section)">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-3xl sm:text-4xl">
            No trabajo con todo el mundo. Y está bien así.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-surface/80">
            Si buscas cotizar o comparar precios, probablemente no soy la
            mejor opción para ti — y prefiero decírtelo ahora que después.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Reveal delay={0.14}>
            <div className="h-full rounded-2xl border border-surface/15 bg-surface/5 p-7">
              <p className="font-heading text-lg text-accent">
                Trabajo con quienes:
              </p>
              <ul className="mt-4 space-y-3">
                {FOR_YOU.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-surface/90">
                    <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border border-surface/10 bg-surface/[0.03] p-7">
              <p className="font-heading text-lg text-surface/70">
                Probablemente no soy para ti si:
              </p>
              <ul className="mt-4 space-y-3">
                {NOT_FOR_YOU.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-surface/75">
                    <X className="mt-1 size-4 shrink-0 text-surface/50" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
