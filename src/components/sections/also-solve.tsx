import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ALSO_SOLVE } from "@/lib/site-data";

export function AlsoSolve() {
  return (
    <section className="mx-auto max-w-6xl px-(--spacing-gutter) py-(--spacing-section)">
      <div className="max-w-2xl">
        <Reveal>
          <Badge>También lo resolvemos contigo</Badge>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 font-heading text-3xl leading-snug text-primary sm:text-4xl">
            Tu vida no es un solo tema.
            <br />
            Tu asesoría tampoco.
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {ALSO_SOLVE.map((item, index) => (
          <Reveal key={item.eyebrow} delay={0.14 + index * 0.06}>
            <div
              className={`flex h-full flex-col gap-3 rounded-2xl p-8 ${
                item.dashed
                  ? "border-[1.5px] border-dashed border-accent/50"
                  : "border border-border bg-surface"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                  {item.eyebrow}
                </span>
                {item.badge && (
                  <span
                    className={
                      item.dashed
                        ? "shrink-0 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent-dark"
                        : "shrink-0 rounded-full border border-accent-dark/40 px-2.5 py-1 text-xs font-semibold text-accent-dark"
                    }
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              <p className="font-heading text-2xl leading-snug text-primary">
                {item.heading.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>

              <p className="text-[15px] leading-relaxed text-foreground/80">
                {item.body}
              </p>

              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 font-semibold text-primary hover:text-accent-dark"
              >
                {item.cta}
              </a>

              {item.footnote && (
                <p className="mt-auto pt-3 text-xs leading-snug text-muted">
                  {item.footnote}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
