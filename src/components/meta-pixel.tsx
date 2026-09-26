"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackMeta } from "@/lib/meta-pixel";

export default function MetaPixel() {
  const pathname = usePathname();

  // PageView en cada carga y en cada cambio de ruta
  useEffect(() => {
    trackMeta("PageView");
  }, [pathname]);

  // Contact automático en clics a WhatsApp / teléfono,
  // o en cualquier elemento con data-meta-event="Contact" | "Schedule" | "Lead"
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement | null)?.closest?.("a, button") as HTMLElement | null;
      if (!el) return;

      const explicit = el.getAttribute("data-meta-event");
      const href = el.getAttribute("href") ?? "";
      const isContactLink = /wa\.me|whatsapp\.com|^tel:/i.test(href);

      const eventName = (explicit || (isContactLink ? "Contact" : null)) as
        | "Contact"
        | "Schedule"
        | "Lead"
        | null;
      if (!eventName) return;

      const label =
        el.getAttribute("data-meta-label") || el.textContent?.trim().slice(0, 80) || undefined;
      trackMeta(eventName, label ? { content_name: label } : undefined);
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
