import { Button } from "@/components/ui/button";
import { getWhatsappUrlForSituacion, type Situacion } from "@/lib/articulos";

const LABELS: Record<Situacion, string> = {
  GENERAL: "Agenda tu diagnóstico",
  DEDUCE: "Escríbeme DEDUCE",
  MARGEN: "Escríbeme MARGEN",
  LIQUIDEZ: "Escríbeme LIQUIDEZ",
  BLINDAJE: "Escríbeme BLINDAJE",
  PATRIMONIO: "Escríbeme PATRIMONIO",
  RETIRO: "Revisa tu retiro",
};

const GENERAL_HEADING_LINE1 = "¿No sabes en qué piso estás?";
const GENERAL_HEADING_LINE2 =
  "Agenda tu diagnóstico: una herramienta única que te permite ver todo tu panorama actual en una sola página.";

export function ArticuloCta({ situacion }: { situacion: Situacion }) {
  const href = getWhatsappUrlForSituacion(situacion);
  const label = LABELS[situacion] ?? LABELS.GENERAL;

  return (
    <div className="mt-14 rounded-2xl border border-border bg-surface-alt/60 p-6 text-center sm:p-10">
      {situacion === "GENERAL" && (
        <div className="mx-auto flex max-w-xl flex-col gap-4 text-[15px] leading-relaxed text-foreground/80">
          <p>{GENERAL_HEADING_LINE1}</p>
          <p>{GENERAL_HEADING_LINE2}</p>
        </div>
      )}

      <div className={situacion === "GENERAL" ? "mt-8 flex justify-center" : "flex justify-center"}>
        <Button asChild size="lg">
          <a href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        </Button>
      </div>

      <p className="mt-7 text-sm text-muted">
        ¿Quieres más contenido como este?
        <br />
        <a
          href="https://www.linkedin.com/company/despacho-pm"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:text-accent-dark"
        >
          Síguenos en LinkedIn
        </a>
      </p>
    </div>
  );
}
