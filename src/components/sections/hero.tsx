import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { CREDENTIALS, WHATSAPP_URL } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-(--spacing-gutter) pb-20 pt-16 md:pb-28 md:pt-24 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:grid-rows-[auto_auto_auto_auto_auto] lg:gap-x-16 lg:gap-y-6">
        <Reveal className="order-1 lg:[grid-column:1] lg:[grid-row:1]">
          <p className="text-center font-heading text-lg italic text-accent-dark lg:text-left">
            &ldquo;Tu ingreso depende de ti. Tu estructura no debería.&rdquo;
          </p>
        </Reveal>

        <Reveal delay={0.08} className="order-2 lg:[grid-column:1] lg:[grid-row:2]">
          <h1 className="text-center font-heading text-4xl leading-[1.15] text-primary sm:text-5xl md:text-6xl lg:text-left">
            Trabajo con profesionistas y dueños de negocio que quieren
            certeza financiera, no solo coberturas.
          </h1>
        </Reveal>

        <Reveal delay={0.16} className="order-3 lg:[grid-column:1] lg:[grid-row:3]">
          <p className="mx-auto max-w-xl text-center text-lg leading-relaxed text-foreground/80 lg:mx-0 lg:text-left">
            Antes de pensar en crecer, hay que saber qué estás protegiendo.
            Acompaño a personas y empresas en México a tomar decisiones
            financieras con base en estructura, no en corazonadas.
          </p>
        </Reveal>

        <Reveal delay={0.24} className="order-4 lg:[grid-column:1] lg:[grid-row:4]">
          <div className="flex flex-col items-center gap-3 lg:items-start">
            <Button asChild size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agenda tu Línea de la Vida sin costo
              </a>
            </Button>
            <span className="text-sm text-muted">
              30 a 40 minutos por WhatsApp o videollamada
            </span>
          </div>
        </Reveal>

        <Reveal
          delay={0.2}
          className="relative order-5 mx-auto aspect-[4/5] w-full max-w-sm self-stretch overflow-hidden rounded-3xl lg:order-none lg:mx-0 lg:aspect-auto lg:max-w-none lg:[grid-column:2] lg:[grid-row:1/-1] lg:self-stretch"
        >
          <Image
            src="/images/pedro-hero.jpg"
            alt="Pedro Miguel, Despacho PM"
            fill
            sizes="(min-width: 1024px) 420px, (min-width: 640px) 384px, 90vw"
            className="object-cover"
            style={{ objectPosition: "50% 25%" }}
            priority
          />
        </Reveal>

        <Reveal delay={0.32} className="order-6 lg:[grid-column:1] lg:[grid-row:5]">
          <dl className="grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
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
    </section>
  );
}
