import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/site-data";

export function Faq() {
  return (
    <section id="preguntas" className="bg-surface-alt/60">
      <div className="mx-auto max-w-3xl px-(--spacing-gutter) py-(--spacing-section)">
        <div className="text-center">
          <Reveal>
            <Badge>Preguntas frecuentes</Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 font-heading text-3xl text-primary sm:text-4xl">
              Antes de escribirme, quizá esto ya te lo responde.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 divide-y divide-border border-t border-border">
          {FAQS.map((faq, index) => (
            <Reveal key={faq.question} delay={0.1 + index * 0.05}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg text-primary marker:content-none">
                  {faq.question}
                  <ChevronDown
                    className="size-5 shrink-0 text-accent-dark transition-transform duration-200 ease-out group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground/80">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
