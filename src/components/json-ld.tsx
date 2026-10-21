// Inserta datos estructurados (JSON-LD) que leen Google y los buscadores de IA.
// "<" se escapa para que el contenido nunca pueda cerrar la etiqueta <script>.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
