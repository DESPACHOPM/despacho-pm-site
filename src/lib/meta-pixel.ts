// Utilidades del píxel de Meta + envío espejo a la API de conversiones
export const PIXEL_ID = "1528140481542771";

type MetaEventName = "PageView" | "Contact" | "Lead" | "Schedule" | "ViewContent";

type FbqFn = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: FbqFn;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

/** Instala el código base del píxel una sola vez (equivalente al snippet oficial). */
export function ensurePixel() {
  if (typeof window === "undefined" || window.fbq) return;

  const n = function (...args: unknown[]) {
    if (n.callMethod) n.callMethod(...args);
    else n.queue.push(args);
  } as FbqFn;
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  window.fbq = n;
  if (!window._fbq) window._fbq = n;

  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(s);

  n("init", PIXEL_ID);
}

function getCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : undefined;
}

const CLICK_ID_MAX_AGE = 90 * 24 * 60 * 60; // 90 días, igual que el píxel

function cookieDomainAttr(): string {
  // Mismo dominio raíz que usa el píxel, para que ambos compartan la cookie
  return window.location.hostname.endsWith("futurumhodie.com") ? "; domain=.futurumhodie.com" : "";
}

function setCookie(name: string, value: string) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie =
    `${name}=${encodeURIComponent(value)}; max-age=${CLICK_ID_MAX_AGE}; path=/` +
    `${cookieDomainAttr()}; SameSite=Lax${secure}`;
}

/** Guarda fbclid como _fbc y crea _fbp si falta, aunque el píxel esté bloqueado. */
export function persistClickIds() {
  if (typeof window === "undefined") return;

  const fbclid = new URLSearchParams(window.location.search).get("fbclid");
  if (fbclid) {
    const current = getCookie("_fbc");
    // Solo reescribir si es un clic nuevo (distinto fbclid)
    if (!current || !current.endsWith(`.${fbclid}`)) {
      setCookie("_fbc", `fb.1.${Date.now()}.${fbclid}`);
    }
  }

  if (!getCookie("_fbp")) {
    setCookie("_fbp", `fb.1.${Date.now()}.${Math.floor(Math.random() * 1e10)}`);
  }
}

function getFbc(): string | undefined {
  const cookie = getCookie("_fbc");
  if (cookie) return cookie;
  const fbclid = new URLSearchParams(window.location.search).get("fbclid");
  return fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined;
}

function newEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/** Envía el evento por el píxel (navegador) y por CAPI (servidor) con el mismo event_id. */
export function trackMeta(eventName: MetaEventName, customData?: { content_name?: string }) {
  if (typeof window === "undefined") return;
  persistClickIds();
  ensurePixel();

  const eventId = newEventId();
  window.fbq?.("track", eventName, customData ?? {}, { eventID: eventId });

  const body = JSON.stringify({
    eventName,
    eventId,
    eventSourceUrl: window.location.href,
    customData,
    fbp: getCookie("_fbp"),
    fbc: getFbc(),
  });

  // sendBeacon sobrevive aunque el usuario salga de la página (ej. clic a WhatsApp)
  const sent =
    typeof navigator !== "undefined" &&
    typeof navigator.sendBeacon === "function" &&
    navigator.sendBeacon("/api/meta-capi", new Blob([body], { type: "application/json" }));

  if (!sent) {
    fetch("/api/meta-capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  }
}
