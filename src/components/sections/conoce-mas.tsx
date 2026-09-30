import Link from "next/link";

import { getArticuloParaSituacion, type Situacion } from "@/lib/articulos";

export function ConoceMas({
  situacion,
  className = "text-accent-dark",
}: {
  situacion: Situacion | null;
  className?: string;
}) {
  const articulo = getArticuloParaSituacion(situacion);
  if (!articulo) return null;

  return (
    <Link
      href={`/articulos/${articulo.slug}`}
      className={`text-sm font-semibold hover:underline ${className}`}
    >
      Conoce más →
    </Link>
  );
}
