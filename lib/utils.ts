import type { Nivel } from "./types";

/** Formatea un precio en euros. */
export function formatEuro(valor: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(valor);
}

/** Etiqueta legible para un nivel. */
export function nivelLabel(nivel: Nivel): string {
  const map: Record<Nivel, string> = {
    iniciacion: "Iniciación",
    intermedio: "Intermedio",
    avanzado: "Avanzado",
  };
  return map[nivel] ?? nivel;
}

/** Clases de color (Tailwind) según el nivel. */
export function nivelColor(nivel: Nivel): string {
  const map: Record<Nivel, string> = {
    iniciacion: "bg-marca-exito/10 text-marca-exito",
    intermedio: "bg-marca-purpura/10 text-marca-purpura",
    avanzado: "bg-marca-dorado/20 text-amber-700",
  };
  return map[nivel] ?? "bg-gray-100 text-gray-700";
}

/** Formatea una fecha ISO (yyyy-mm-dd) a texto en español. */
export function formatFecha(iso: string): string {
  const fecha = new Date(iso + "T00:00:00");
  return new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(fecha);
}

/** Une clases condicionales. */
export function cn(...clases: (string | false | null | undefined)[]): string {
  return clases.filter(Boolean).join(" ");
}
