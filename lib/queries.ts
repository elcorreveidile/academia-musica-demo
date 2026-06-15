/**
 * Capa de acceso a datos.
 *
 * Por defecto la demo lee de `lib/demo-data.ts` (datos en memoria), de modo que
 * el sitio funciona en Vercel sin necesidad de una base de datos. Cuando
 * configures `DATABASE_URL` (Neon), estas funciones son el único punto donde
 * habría que enchufar las consultas Drizzle reales (ver `lib/db/client.ts`).
 */

import {
  cursos as cursosDemo,
  instrumentos as instrumentosDemo,
  profesores as profesoresDemo,
  clasesEnVivo as clasesDemo,
  forumPosts as forumDemo,
  testimonios as testimoniosDemo,
  planes as planesDemo,
  insignias as insigniasDemo,
  getCursoBySlug,
  getLeccionesByCurso,
  getInstrumento,
  getProfesor,
  getClasesByCurso,
} from "./demo-data";
import type { Nivel } from "./types";

export async function listCursos(filtros?: {
  instrumentoSlug?: string;
  nivel?: Nivel;
  busqueda?: string;
}) {
  let resultado = cursosDemo.filter((c) => c.activo);

  if (filtros?.instrumentoSlug) {
    const instr = instrumentosDemo.find((i) => i.slug === filtros.instrumentoSlug);
    if (instr) resultado = resultado.filter((c) => c.instrumentoId === instr.id);
  }
  if (filtros?.nivel) {
    resultado = resultado.filter((c) => c.nivel === filtros.nivel);
  }
  if (filtros?.busqueda) {
    const q = filtros.busqueda.toLowerCase();
    resultado = resultado.filter(
      (c) =>
        c.nombre.toLowerCase().includes(q) ||
        c.descripcion.toLowerCase().includes(q),
    );
  }
  return resultado;
}

export async function getCursoDetalle(slug: string) {
  const curso = getCursoBySlug(slug);
  if (!curso) return null;
  return {
    curso,
    instrumento: getInstrumento(curso.instrumentoId),
    profesor: getProfesor(curso.profesorId),
    lecciones: getLeccionesByCurso(curso.id),
    clases: getClasesByCurso(curso.id),
  };
}

export async function getCursosDestacados(limite = 3) {
  return cursosDemo.filter((c) => c.activo).slice(0, limite);
}

export async function listInstrumentos() {
  return instrumentosDemo;
}

export async function listProfesores() {
  return profesoresDemo;
}

export async function listClasesEnVivo() {
  return [...clasesDemo].sort((a, b) => a.fecha.localeCompare(b.fecha));
}

export async function listForumPosts() {
  return [...forumDemo].sort((a, b) => b.fecha.localeCompare(a.fecha));
}

export async function listTestimonios() {
  return testimoniosDemo;
}

export async function listPlanes() {
  return planesDemo;
}

export async function listInsignias() {
  return insigniasDemo;
}

export { getInstrumento, getProfesor };
