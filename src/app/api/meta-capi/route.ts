import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PIXEL_ID = process.env.META_PIXEL_ID ?? "1528140481542771";
// Verifica la versión vigente de la Graph API en developers.facebook.com y actualízala si hace falta
const GRAPH_VERSION = "v23.0";

const ALLOWED_EVENTS = new Set(["PageView", "Contact", "Lead", "Schedule", "ViewContent"]);
const ALLOWED_HOSTS = ["futurumhodie.com", "www.futurumhodie.com"];

// Límite de envíos por visitante: máximo 30 eventos por minuto. Es un freno
// básico (cada instancia del servidor lleva su propia cuenta); para un freno
// global se puede añadir una regla de Rate Limiting en Vercel Firewall.
const RATE_LIMIT_MAX = 30;
const RATE_LIMIT_WINDOW_MS = 60_000;
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.resetAt <= now) hits.delete(k);
  }
  const entry = hits.get(key);
  if (!entry || entry.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

// Solo aceptar solicitudes que vengan del propio sitio (los navegadores
// siempre envían Origin en un POST). Un script externo puede falsificarlo,
// pero esto descarta el abuso casual y otros sitios web.
function originAllowed(req: NextRequest): boolean {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  try {
    return ALLOWED_HOSTS.includes(new URL(origin).hostname);
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  if (!originAllowed(req)) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  const clientKey =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "desconocido";
  if (isRateLimited(clientKey)) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  const token = process.env.META_CAPI_TOKEN;
  if (!token) {
    console.error("[meta-capi] Falta META_CAPI_TOKEN");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const {
    eventName,
    eventId,
    eventSourceUrl,
    customData,
    fbp,
    fbc,
  } = (body ?? {}) as {
    eventName?: string;
    eventId?: string;
    eventSourceUrl?: string;
    customData?: { content_name?: string };
    fbp?: string;
    fbc?: string;
  };

  if (
    !eventName ||
    !ALLOWED_EVENTS.has(eventName) ||
    typeof eventId !== "string" ||
    eventId.length > 100
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Solo aceptar eventos de nuestro propio dominio
  let url: URL;
  try {
    url = new URL(eventSourceUrl ?? "");
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  if (!ALLOWED_HOSTS.includes(url.hostname)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    undefined;
  const ua = req.headers.get("user-agent") || undefined;

  const user_data: Record<string, string> = {};
  if (ip) user_data.client_ip_address = ip;
  if (ua) user_data.client_user_agent = ua;
  if (typeof fbp === "string" && fbp.length < 200) user_data.fbp = fbp;
  if (typeof fbc === "string" && fbc.length < 500) user_data.fbc = fbc;

  const custom_data: Record<string, string> = {};
  if (typeof customData?.content_name === "string") {
    custom_data.content_name = customData.content_name.slice(0, 100);
  }

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: url.toString(),
        action_source: "website",
        user_data,
        ...(Object.keys(custom_data).length ? { custom_data } : {}),
      },
    ],
    access_token: token,
  };

  // Solo para pruebas desde "Probar eventos"; borrar la variable en Vercel al terminar
  if (process.env.META_TEST_EVENT_CODE) {
    payload.test_event_code = process.env.META_TEST_EVENT_CODE;
  }

  try {
    const res = await fetch(`https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL_ID}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error("[meta-capi] Error de Meta:", res.status, await res.text());
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } catch (err) {
    console.error("[meta-capi] Fallo de red:", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
