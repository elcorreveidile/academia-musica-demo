import { NextResponse } from "next/server";
import { listCursos } from "@/lib/queries";
import { sanitizarBusqueda, esNivelValido } from "@/lib/validators";
import type { Nivel } from "@/lib/types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const instrumento = searchParams.get("instrumento") ?? undefined;
  const nivelParam = searchParams.get("nivel");
  const nivel = nivelParam && esNivelValido(nivelParam) ? (nivelParam as Nivel) : undefined;
  const q = sanitizarBusqueda(searchParams.get("q"));

  const cursos = await listCursos({ instrumentoSlug: instrumento, nivel, busqueda: q || undefined });
  return NextResponse.json({ cursos, total: cursos.length });
}
