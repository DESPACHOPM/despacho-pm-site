import Link from "next/link";

import { getCentralArticulo, getPisoFloors } from "@/lib/articulos";

const PISO_LABELS: Record<number, string> = {
  1: "Piso 1 · DEDUCE",
  2: "Piso 2 · MARGEN",
  3: "Piso 3 · LIQUIDEZ",
  4: "Piso 4 · BLINDAJE",
  5: "Piso 5 · PATRIMONIO",
};

export function ArticuloPisosList() {
  const floors = getPisoFloors();

  return (
    <div className="mt-14 rounded-2xl border border-border bg-surface-alt/60 p-8 sm:p-10">
      <p className="font-heading text-xl text-primary">
        Los 5 pisos del Ascensor Patrimonial
      </p>
      <ul className="mt-5 flex flex-col gap-3">
        {floors.map(({ piso, articulo }) => (
          <li
            key={piso}
            className="flex items-center justify-between gap-4 border-b border-border/60 pb-3 last:border-b-0 last:pb-0"
          >
            <span className="text-[15px] text-foreground/85">
              {PISO_LABELS[piso]}
            </span>
            {articulo ? (
              <Link
                href={`/articulos/${articulo.slug}`}
                className="font-semibold text-primary hover:text-accent-dark"
              >
                Leer →
              </Link>
            ) : (
              <span className="text-sm text-muted">Próximamente</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ArticuloAscensorLink() {
  const central = getCentralArticulo();
  if (!central) return null;

  return (
    <Link
      href={`/articulos/${central.slug}`}
      className="inline-block text-sm font-semibold text-accent-dark hover:underline"
    >
      Parte del Ascensor Patrimonial — ver los 5 pisos →
    </Link>
  );
}
