import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ACCOMPANIMENT } from "@/lib/site-data";

export function Accompaniment() {
  return (
    <section id="acompanamiento" className="mx-auto max-w-6xl px-(--spacing-gutter) py-(--spacing-section)">
      <div className="max-w-2xl">
        <Reveal>
          <Badge>Cómo te acompaño</Badge>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 font-heading text-3xl leading-snug text-primary sm:text-4xl">
            No te vendo una póliza.
            <br />
            Te acompaño en cada decisión.
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {ACCOMPANIMENT.map((step, index) => (
          <Reveal key={step.number} delay={0.14 + index * 0.06}>
            <div
              className={`flex h-full flex-col gap-2.5 border-t-2 pt-5 ${
                index === 0 ? "border-primary" : "border-border"
              }`}
            >
              <span className="font-heading text-2xl text-accent-dark">
                {step.number}
              </span>
              <p className="font-heading text-lg text-primary">{step.title}</p>
              <p className="text-[15px] leading-relaxed text-foreground/80">
                {step.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
