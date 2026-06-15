import type { Metadata } from "next";
import { Suspense } from "react";
import { listCursos, listInstrumentos, getInstrumento, getProfesor } from "@/lib/queries";
import { CursoCard } from "@/components/cursos/CursoCard";
import { FiltrosCursos } from "@/components/cursos/FiltrosCursos";
import type { Nivel } from "@/lib/types";

export const metadata: Metadata = {
  title: "Catálogo de cursos",
  description: "Explora todos nuestros cursos de música por instrumento y nivel.",
};

export default async function CursosPage({
  searchParams,
}: {
  searchParams: Promise<{ instrumento?: string; nivel?: string; q?: string }>;
}) {
  const sp = await searchParams;
  const [cursos, instrumentos] = await Promise.all([
    listCursos({
      instrumentoSlug: sp.instrumento,
      nivel: sp.nivel as Nivel | undefined,
      busqueda: sp.q,
    }),
    listInstrumentos(),
  ]);

  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-marca py-14 text-white">
        <div className="contenedor">
          <h1 className="font-display text-4xl font-bold">Catálogo de cursos</h1>
          <p className="mt-3 max-w-2xl text-white/90">
            Elige tu instrumento y nivel. Todos los cursos incluyen lecciones grabadas,
            materiales descargables y acceso a clases en vivo.
          </p>
        </div>
      </div>

      <div className="contenedor grid gap-8 py-12 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-6 lg:sticky lg:top-24">
          <Suspense fallback={<div className="text-sm text-gray-400">Cargando filtros…</div>}>
            <FiltrosCursos instrumentos={instrumentos} />
          </Suspense>
        </aside>

        <div>
          <p className="mb-6 text-sm text-gray-500">
            {cursos.length} {cursos.length === 1 ? "curso encontrado" : "cursos encontrados"}
          </p>

          {cursos.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-12 text-center">
              <p className="text-4xl">🔍</p>
              <p className="mt-3 font-semibold">No encontramos cursos con esos filtros</p>
              <p className="text-sm text-gray-500">Prueba a quitar algún filtro o buscar otra cosa.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {cursos.map((curso) => (
                <CursoCard
                  key={curso.id}
                  curso={curso}
                  instrumento={getInstrumento(curso.instrumentoId)}
                  profesorNombre={getProfesor(curso.profesorId)?.nombre}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
