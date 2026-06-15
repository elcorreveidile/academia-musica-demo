/** Validadores ligeros para formularios y endpoints. */

export function esEmailValido(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function esNivelValido(nivel: string): boolean {
  return ["iniciacion", "intermedio", "avanzado"].includes(nivel);
}

export function sanitizarBusqueda(q: string | null | undefined): string {
  return (q ?? "").trim().slice(0, 100);
}
