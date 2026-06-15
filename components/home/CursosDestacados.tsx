import Link from "next/link";
import { getCursosDestacados, getInstrumento, getProfesor } from "@/lib/queries";
import { CursoCard } from "@/components/cursos/CursoCard";

export async function CursosDestacados() {
  const cursos = await getCursosDestacados(3);

  return (
    <section className="fondo-pentagrama bg-gray-50 py-20">
      <div className="contenedor">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold">Cursos destacados</h2>
            <p className="mt-2 text-gray-500">Empieza por uno de nuestros cursos más populares.</p>
          </div>
          <Link href="/cursos" className="btn-secundario !py-2 !text-sm">
            Ver todos los cursos
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cursos.map((curso) => (
            <CursoCard
              key={curso.id}
              curso={curso}
              instrumento={getInstrumento(curso.instrumentoId)}
              profesorNombre={getProfesor(curso.profesorId)?.nombre}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
