import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { ACCOUNTANTS, WHATSAPP_URL_CONTADORES } from "@/lib/site-data";

export function Accountants() {
  return (
    <section id="contadores" className="mx-auto max-w-6xl px-(--spacing-gutter) py-(--spacing-section)">
      <div className="grid gap-12 rounded-3xl border border-border bg-surface p-8 sm:p-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <Reveal>
            <Badge>{ACCOUNTANTS.eyebrow}</Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 font-heading text-3xl text-primary sm:text-4xl">
              {ACCOUNTANTS.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-foreground/80">
              {ACCOUNTANTS.body}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8">
              <Button asChild variant="outline">
                <a
                  href={WHATSAPP_URL_CONTADORES}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ACCOUNTANTS.cta}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {ACCOUNTANTS.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <Check className="mt-1 size-4 shrink-0 text-accent-dark" aria-hidden />
                <span className="text-[15px] leading-snug text-foreground/85">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
