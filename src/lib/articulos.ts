import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { marked } from "marked";

import {
  WHATSAPP_URL,
  WHATSAPP_URL_DEDUCE,
  WHATSAPP_URL_MARGEN,
  WHATSAPP_URL_LIQUIDEZ,
  WHATSAPP_URL_BLINDAJE,
  WHATSAPP_URL_PATRIMONIO,
  WHATSAPP_URL_RETIRO,
} from "@/lib/site-data";

// Publicar un artículo nuevo = crear un archivo .md en este directorio con
// el frontmatter descrito en el README de la sección (titulo, descripcion, slug,
// fecha, situacion, central, piso). No se necesita tocar ningún otro archivo.
const ARTICULOS_DIR = path.join(process.cwd(), "src/content/articulos");

export type Situacion =
  | "GENERAL"
  | "DEDUCE"
  | "MARGEN"
  | "LIQUIDEZ"
  | "BLINDAJE"
  | "PATRIMONIO"
  | "RETIRO";

export type ArticuloSummary = {
  slug: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  situacion: Situacion;
  central: boolean;
  piso: number | null;
};

export type Articulo = ArticuloSummary & {
  contentHtml: string;
};

const SITUACION_WHATSAPP_URL: Record<Situacion, string> = {
  GENERAL: WHATSAPP_URL,
  DEDUCE: WHATSAPP_URL_DEDUCE,
  MARGEN: WHATSAPP_URL_MARGEN,
  LIQUIDEZ: WHATSAPP_URL_LIQUIDEZ,
  BLINDAJE: WHATSAPP_URL_BLINDAJE,
  PATRIMONIO: WHATSAPP_URL_PATRIMONIO,
  RETIRO: WHATSAPP_URL_RETIRO,
};

// Piso 1=DEDUCE, Piso 2=MARGEN, Piso 3=LIQUIDEZ, Piso 4=BLINDAJE, Piso 5=PATRIMONIO
export const PISO_SITUACION: Record<number, Situacion> = {
  1: "DEDUCE",
  2: "MARGEN",
  3: "LIQUIDEZ",
  4: "BLINDAJE",
  5: "PATRIMONIO",
};

function readSlugs(): string[] {
  if (!fs.existsSync(ARTICULOS_DIR)) return [];
  return fs
    .readdirSync(ARTICULOS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function readArticuloRaw(slug: string) {
  const filePath = path.join(ARTICULOS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf8");
  return matter(raw);
}

// El frontmatter YAML convierte automáticamente una fecha sin comillas
// (ej. fecha: 2026-09-30) en un objeto Date; la normalizamos de vuelta a
// "AAAA-MM-DD" usando los componentes UTC (así fue interpretada por YAML).
function normalizeFecha(value: unknown): string {
  if (value instanceof Date) {
    const year = value.getUTCFullYear();
    const month = String(value.getUTCMonth() + 1).padStart(2, "0");
    const day = String(value.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  return String(value ?? "");
}

function toSummary(slug: string, data: Record<string, unknown>): ArticuloSummary {
  const piso = data.piso ? Number(data.piso) : null;

  return {
    slug: typeof data.slug === "string" && data.slug ? data.slug : slug,
    titulo: String(data.titulo ?? ""),
    descripcion: String(data.descripcion ?? ""),
    fecha: normalizeFecha(data.fecha),
    situacion: (data.situacion as Situacion) ?? "GENERAL",
    central: String(data.central ?? "no").toLowerCase() === "si",
    piso: Number.isFinite(piso) ? piso : null,
  };
}

export function getAllArticulos(): ArticuloSummary[] {
  const articulos = readSlugs().map((slug) => {
    const { data } = readArticuloRaw(slug);
    return toSummary(slug, data);
  });

  return articulos.sort((a, b) => {
    if (a.central !== b.central) return a.central ? -1 : 1;
    return b.fecha.localeCompare(a.fecha);
  });
}

export function getArticuloBySlug(slug: string): Articulo | null {
  if (!readSlugs().includes(slug)) return null;

  const { data, content } = readArticuloRaw(slug);
  const contentHtml = marked.parse(content, { async: false }) as string;

  return { ...toSummary(slug, data), contentHtml };
}

export function getCentralArticulo(): ArticuloSummary | null {
  return getAllArticulos().find((articulo) => articulo.central) ?? null;
}

export function getWhatsappUrlForSituacion(situacion: Situacion): string {
  return SITUACION_WHATSAPP_URL[situacion] ?? WHATSAPP_URL;
}

export function getArticuloParaSituacion(
  situacion: Situacion | null,
): ArticuloSummary | null {
  if (!situacion) return null;
  return (
    getAllArticulos().find(
      (articulo) => !articulo.central && articulo.situacion === situacion,
    ) ?? null
  );
}

export type PisoFloor = {
  piso: number;
  situacion: Situacion;
  articulo: ArticuloSummary | null;
};

export function getPisoFloors(): PisoFloor[] {
  const articulos = getAllArticulos();

  return [1, 2, 3, 4, 5].map((piso) => {
    const situacion = PISO_SITUACION[piso];
    const articulo =
      articulos.find(
        (a) => !a.central && (a.piso === piso || a.situacion === situacion),
      ) ?? null;

    return { piso, situacion, articulo };
  });
}
