import type { Metadata } from "next";
import { listClasesEnVivo } from "@/lib/queries";
import { cursos, getProfesor } from "@/lib/demo-data";
import { ClaseCard } from "@/components/clase-en-vivo/ClaseCard";

export const metadata: Metadata = {
  title: "Clases en vivo",
  description: "Calendario de clases en vivo con profesores reales. Grupos reducidos de máximo 8 alumnos.",
};

export default async function ClasesEnVivoPage() {
  const clases = await listClasesEnVivo();
  const cursoPorId = (id: number) => cursos.find((c) => c.id === id);

  const proximas = clases.filter((c) => c.estado !== "completada");
  const pasadas = clases.filter((c) => c.estado === "completada");

  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-marca py-14 text-white">
        <div className="contenedor">
          <h1 className="font-display text-4xl font-bold">Clases en vivo</h1>
          <p className="mt-3 max-w-2xl text-white/90">
            Sesiones semanales con profesor real y grupos reducidos (máximo 8 alumnos).
            Resuelve dudas, recibe feedback y practica acompañado. Recibirás un recordatorio
            por email 24h antes.
          </p>
        </div>
      </div>

      <div className="contenedor py-12">
        <h2 className="mb-6 font-display text-2xl font-bold">Próximas sesiones</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proximas.map((clase) => (
            <ClaseCard
              key={clase.id}
              clase={clase}
              cursoNombre={cursoPorId(clase.cursoId)?.nombre}
              profesorNombre={getProfesor(clase.profesorId)?.nombre}
            />
          ))}
        </div>

        {pasadas.length > 0 && (
          <>
            <h2 className="mb-6 mt-14 font-display text-2xl font-bold">Grabaciones disponibles</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pasadas.map((clase) => (
                <ClaseCard
                  key={clase.id}
                  clase={clase}
                  cursoNombre={cursoPorId(clase.cursoId)?.nombre}
                  profesorNombre={getProfesor(clase.profesorId)?.nombre}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
