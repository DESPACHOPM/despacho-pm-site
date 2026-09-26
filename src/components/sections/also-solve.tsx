import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { ALSO_SOLVE } from "@/lib/site-data";

export function AlsoSolve() {
  return (
    <section>
      <div className="bg-surface-alt/60 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-(--spacing-gutter) text-center">
          <Reveal>
            <Badge>También lo resolvemos contigo</Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 font-heading text-4xl leading-snug text-primary sm:text-5xl">
              Tu vida no es un solo tema.
              <br />
              Tu asesoría tampoco.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-(--spacing-gutter) py-(--spacing-section)">
        <div className="grid gap-8 sm:grid-cols-2">
          {ALSO_SOLVE.map((item, index) => (
            <Reveal key={item.eyebrow} delay={0.14 + index * 0.06}>
              <div
                className={`flex h-full flex-col overflow-hidden rounded-2xl ${
                  item.dashed
                    ? "border-[1.5px] border-dashed border-accent/50"
                    : "border border-border bg-surface"
                }`}
              >
                {item.image && (
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={item.image}
                      alt={item.eyebrow}
                      fill
                      sizes="(min-width: 640px) 420px, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col gap-4 p-9 sm:p-10">
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

                  {item.list && (
                    <ul className="flex flex-col gap-2.5">
                      {item.list.map((line, lineIndex) => (
                        <li
                          key={line}
                          className={`flex items-start gap-2.5 text-[15px] leading-relaxed ${
                            lineIndex === 0
                              ? "font-semibold text-primary"
                              : "text-foreground/80"
                          }`}
                        >
                          <span
                            aria-hidden
                            className={`mt-2 size-1.5 shrink-0 rounded-full ${
                              lineIndex === 0 ? "bg-accent-dark" : "bg-muted"
                            }`}
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  )}

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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
