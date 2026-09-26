"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site-data";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export function Nav() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-(--spacing-gutter) py-4">
        <a href="/#inicio" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="Despacho PM"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
          <span className="font-heading text-xl text-primary">
            Despacho <span className="text-accent-dark">PM</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Agenda tu Línea de la Vida
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full text-primary md:hidden active:scale-[0.97]"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Principal, móvil"
            className="border-t border-border/70 bg-background md:hidden"
            initial={{ opacity: 0, transform: "translateY(-8px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0, transform: "translateY(-8px)" }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
          >
            <div className="flex flex-col gap-1 px-(--spacing-gutter) py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-primary/5 hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2 w-full">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Agenda tu Línea de la Vida
                </a>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
