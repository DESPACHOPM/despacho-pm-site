import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/site-data";

export function Testimonials() {
  return (
    <section id="testimonios" className="mx-auto max-w-6xl px-(--spacing-gutter) py-(--spacing-section)">
      <div className="text-center">
        <Reveal>
          <Badge>Clientes</Badge>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-6 max-w-2xl font-heading text-3xl text-primary sm:text-4xl">
            Lo que dicen las personas con las que he trabajado.
          </h2>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {TESTIMONIALS.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={0.14 + index * 0.06}>
            <Card className="flex h-full flex-col justify-between">
              <p className="text-[15px] leading-relaxed text-foreground/85">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="font-heading text-base text-primary">
                  {testimonial.name}
                </p>
                {testimonial.role && (
                  <p className="text-xs text-muted">{testimonial.role}</p>
                )}
              </footer>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
