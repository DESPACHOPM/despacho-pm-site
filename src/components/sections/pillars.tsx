import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PILLARS } from "@/lib/site-data";

export function Pillars() {
  return (
    <section id="pilares" className="mx-auto max-w-6xl px-(--spacing-gutter) py-(--spacing-section)">
      <Reveal>
        <Badge>Cómo trabajamos</Badge>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="mt-6 max-w-2xl font-heading text-3xl text-primary sm:text-4xl">
          Tres pilares. Un solo criterio: claridad antes que velocidad.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((pillar, index) => (
          <Reveal key={pillar.title} delay={0.1 + index * 0.06}>
            <Card className="h-full overflow-hidden p-0">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <span className="font-heading text-3xl text-accent-dark">
                  0{index + 1}
                </span>
                <CardTitle className="mt-4">{pillar.title}</CardTitle>
                <CardDescription className="mt-3">
                  {pillar.description}
                </CardDescription>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.34}>
        <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/10 p-6 sm:p-8">
          <p className="text-base leading-relaxed text-primary-dark sm:text-lg">
            <strong className="font-heading text-lg sm:text-xl">
              ¿Tienes presencia o familia en Estados Unidos?
            </strong>{" "}
            También diseño estrategias de ahorro en dólares junto con aliados
            certificados allá — para que no tengas que resolverlo por tu
            cuenta desde México.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
