import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PIXEL_ID = process.env.META_PIXEL_ID ?? "1528140481542771";
// Verifica la versión vigente de la Graph API en developers.facebook.com y actualízala si hace falta
const GRAPH_VERSION = "v23.0";

const ALLOWED_EVENTS = new Set(["PageView", "Contact", "Lead", "Schedule", "ViewContent"]);
const ALLOWED_HOSTS = ["futurumhodie.com", "www.futurumhodie.com"];

export async function POST(req: NextRequest) {
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
