import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { SITUATIONS, WHATSAPP_URL } from "@/lib/site-data";

export function Situations() {
  return (
    <section id="situaciones" className="bg-primary text-surface">
      <div className="mx-auto max-w-6xl px-(--spacing-gutter) py-(--spacing-section)">
        <div className="max-w-2xl">
          <Reveal>
            <Badge variant="inverse">Tu situación</Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 font-heading text-3xl leading-snug sm:text-4xl">
              ¿Te reconoces en alguna de estas?
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-4 text-lg leading-relaxed text-surface/80">
              Escríbeme la palabra de tu situación. Empezamos por ahí.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SITUATIONS.map((situation, index) => (
            <Reveal key={situation.cta} delay={0.18 + index * 0.05}>
              <a
                href={situation.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col gap-4 rounded-2xl bg-surface/8 p-7 transition-colors duration-150 ease-out hover:bg-surface/12"
              >
                <p className="font-heading text-xl leading-snug text-surface">
                  {situation.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <span className="mt-auto font-semibold text-accent">
                  Escríbeme {situation.cta} →
                </span>
              </a>
            </Reveal>
          ))}

          <Reveal delay={0.18 + SITUATIONS.length * 0.05}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col gap-4 rounded-2xl border border-surface/20 p-7 transition-colors duration-150 ease-out hover:bg-surface/8"
            >
              <p className="font-heading text-xl leading-snug text-surface">
                ¿No estás seguro de cuál es la tuya?
              </p>
              <p className="text-[15px] leading-relaxed text-surface/80">
                Para eso existe la Línea de la Vida.
              </p>
              <span className="mt-auto font-semibold text-accent">
                Agenda tu diagnóstico →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
