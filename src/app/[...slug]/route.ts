// Respuesta 404 para rutas que no existen. Devuelve un texto corto en Markdown
// a quien lo pide (agentes de IA) y una página sencilla en HTML al resto.
// Los archivos de /public y las páginas reales tienen prioridad sobre esta ruta.
const SITE = "https://www.futurumhodie.com";

const markdown = `# 404: página no encontrada

Esta dirección no existe en Despacho PM.

Para encontrar lo que buscas:

- [Inicio](${SITE})
- [Artículos](${SITE}/articulos)
- [Contacto](${SITE}/contacto)
- [Resumen del sitio para agentes (llms.txt)](${SITE}/llms.txt)
- [Mapa del sitio (sitemap.xml)](${SITE}/sitemap.xml)
`;

const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>404 | Despacho PM</title></head>
<body style="font-family:system-ui,sans-serif;max-width:36rem;margin:15vh auto;padding:0 1.5rem;line-height:1.6">
<h1>404: página no encontrada</h1>
<p>Esta dirección no existe en Despacho PM.</p>
<p><a href="${SITE}">Ir al inicio</a> · <a href="${SITE}/articulos">Artículos</a> · <a href="${SITE}/contacto">Contacto</a></p>
</body></html>`;

export function GET(request: Request) {
  const accept = request.headers.get("accept") ?? "";
  const quiereMarkdown = accept.includes("text/markdown");
  return new Response(quiereMarkdown ? markdown : html, {
    status: 404,
    headers: {
      "Content-Type": quiereMarkdown
        ? "text/markdown; charset=utf-8"
        : "text/html; charset=utf-8",
      Vary: "Accept",
      "Cache-Control": "public, s-maxage=3600",
    },
  });
}
