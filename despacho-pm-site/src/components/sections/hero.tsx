import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { CREDENTIALS, MEETING_NOTE, WHATSAPP_URL } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-16 px-(--spacing-gutter) pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <p className="mb-6 font-heading text-lg italic text-accent-dark">
              &ldquo;Tu ingreso depende de ti. Tu estructura no debería.&rdquo;
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-heading text-4xl leading-[1.1] text-primary sm:text-5xl md:text-6xl">
              Trabajo con profesionistas y dueños de negocio que quieren
              certeza financiera, no solo coberturas.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80">
              Antes de pensar en crecer, hay que saber qué estás protegiendo.
              Acompaño a personas y empresas en México a tomar decisiones
              financieras con base en estructura, no en corazonadas.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Agenda tu diagnóstico gratuito
                </a>
              </Button>
              <p className="text-sm text-muted">
                {MEETING_NOTE} 30-40 min, sin costo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <dl className="mt-14 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {CREDENTIALS.map((item) => (
                <div key={item.label}>
                  <dt className="font-heading text-2xl text-primary">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-sm leading-snug text-muted">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative hidden lg:block">
          <AscentGraphic />
        </Reveal>
      </div>
    </section>
  );
}

function AscentGraphic() {
  const bars = [34, 52, 44, 68, 86];
  return (
    <div
      aria-hidden="true"
      className="relative flex h-full min-h-[380px] items-end justify-center rounded-3xl border border-border bg-surface p-10"
    >
      <div className="flex h-full w-full items-end justify-center gap-4">
        {bars.map((height, index) => (
          <div
            key={index}
            className="w-full rounded-t-lg"
            style={{
              height: `${height}%`,
              background:
                index === bars.length - 1
                  ? "var(--color-accent)"
                  : "var(--color-primary)",
              opacity: 0.15 + index * 0.18,
            }}
          />
        ))}
      </div>
      <div className="absolute right-8 top-8 size-3 rounded-full bg-accent" />
    </div>
  );
}
