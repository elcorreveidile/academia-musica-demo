import Link from "next/link";
import Image from "next/image";
import type { Curso, Instrumento } from "@/lib/types";
import { formatEuro, nivelLabel, nivelColor } from "@/lib/utils";

export function CursoCard({
  curso,
  instrumento,
  profesorNombre,
}: {
  curso: Curso;
  instrumento?: Instrumento;
  profesorNombre?: string;
}) {
  return (
    <Link href={`/cursos/${curso.slug}`} className="tarjeta group flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-primary-50">
        <Image
          src={curso.imagen}
          alt={curso.nombre}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <span className={`chip absolute left-3 top-3 ${nivelColor(curso.nivel)} bg-white/95`}>
          {nivelLabel(curso.nivel)}
        </span>
        {instrumento && (
          <span className="absolute right-3 top-3 text-2xl" aria-hidden="true">
            {instrumento.icono}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-1 font-display text-lg font-semibold leading-snug text-marca-oscuro group-hover:text-marca-purpura">
          {curso.nombre}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-500">{curso.descripcion}</p>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 text-sm">
          <div className="text-gray-500">
            {curso.numeroLecciones} lecciones · {curso.duracionSemanas} sem.
            {profesorNombre && <div className="text-xs text-gray-400">con {profesorNombre}</div>}
          </div>
          <div className="text-right">
            <span className="font-display text-lg font-bold text-marca-purpura">
              {formatEuro(curso.precioMensual)}
            </span>
            <span className="block text-xs text-gray-400">/mes</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
