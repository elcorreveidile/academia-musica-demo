import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { cursos, clasesEnVivo, insignias, getProfesor, getInstrumento } from "@/lib/demo-data";
import { formatFecha } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mi dashboard",
  description: "Tu panel personal: progreso, próximas clases e insignias.",
};

// Demo: alumno con dos cursos en progreso
const misCursos = [
  { curso: cursos[0], progreso: 42, leccionActual: 5 },
  { curso: cursos[2], progreso: 18, leccionActual: 3 },
];

export default function DashboardPage() {
  const proximaClase = clasesEnVivo.find((c) => c.estado !== "completada");
  const insigniasGanadas = insignias.filter((i) => i.ganada);

  return (
    <div className="bg-gray-50">
      <div className="bg-marca-oscuro py-10 text-white">
        <div className="contenedor flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-white/60">¡Hola de nuevo! 👋</p>
            <h1 className="font-display text-3xl font-bold">Tu panel</h1>
          </div>
          <Link href="/cursos" className="btn-dorado !py-2 !text-sm">Explorar más cursos</Link>
        </div>
      </div>

      <div className="contenedor grid gap-8 py-10 lg:grid-cols-[1fr_320px]">
        {/* Columna principal */}
        <div className="space-y-8">
          {/* Resumen */}
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Cursos activos", valor: misCursos.length, icono: "🎵" },
              { label: "Lecciones completadas", valor: 11, icono: "✅" },
              { label: "Racha actual", valor: "7 días", icono: "🔥" },
            ].map((s) => (
              <div key={s.label} className="tarjeta p-5">
                <div className="text-2xl">{s.icono}</div>
                <div className="mt-2 font-display text-2xl font-bold">{s.valor}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Mis cursos */}
          <section>
            <h2 className="mb-4 font-display text-xl font-bold">Continúa donde lo dejaste</h2>
            <div className="space-y-4">
              {misCursos.map(({ curso, progreso, leccionActual }) => {
                const instrumento = getInstrumento(curso.instrumentoId);
                return (
                  <div key={curso.id} className="tarjeta flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                    <div className="relative h-20 w-full overflow-hidden rounded-xl sm:w-28">
                      <Image src={curso.imagen} alt={curso.nombre} fill sizes="112px" className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display font-semibold">{instrumento?.icono} {curso.nombre}</h3>
                        <span className="text-sm text-gray-500">{progreso}%</span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full rounded-full bg-marca-exito" style={{ width: `${progreso}%` }} />
                      </div>
                      <div className="mt-3">
                        <Link href={`/curso/${curso.slug}/leccion/${leccionActual}`} className="btn-primario !py-1.5 !text-sm">
                          Continuar lección {leccionActual} →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Insignias */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-xl font-bold">Mis insignias</h2>
              <span className="text-sm text-gray-500">{insigniasGanadas.length}/{insignias.length} conseguidas</span>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
              {insignias.map((i) => (
                <div
                  key={i.id}
                  title={i.descripcion}
                  className={`flex flex-col items-center rounded-2xl border p-4 text-center ${
                    i.ganada ? "border-marca-dorado bg-marca-dorado/10" : "border-gray-100 bg-white opacity-50"
                  }`}
                >
                  <span className="text-3xl">{i.icono}</span>
                  <span className="mt-2 text-xs font-medium leading-tight">{i.nombre}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {proximaClase && (
            <div className="rounded-2xl bg-gradient-marca p-6 text-white">
              <span className="chip bg-white/15 text-marca-dorado">📹 Próxima clase en vivo</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{proximaClase.titulo}</h3>
              <p className="mt-2 text-sm capitalize text-white/85">{formatFecha(proximaClase.fecha)} · {proximaClase.horaInicio}h</p>
              <p className="text-sm text-white/85">con {getProfesor(proximaClase.profesorId)?.nombre}</p>
              <button className="btn-dorado mt-4 w-full !py-2 !text-sm">Unirme a la clase</button>
            </div>
          )}

          <div className="rounded-2xl border border-gray-100 bg-white p-6">
            <h3 className="mb-3 font-display text-base font-semibold">Tareas pendientes</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><span className="text-marca-purpura">○</span> Completar lección 5 de Guitarra</li>
              <li className="flex items-start gap-2"><span className="text-marca-purpura">○</span> Evaluación: acordes básicos</li>
              <li className="flex items-start gap-2"><span className="text-marca-purpura">○</span> Grabar ejercicio para feedback</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6">
            <h3 className="mb-2 font-display text-base font-semibold">💬 Feedback reciente</h3>
            <blockquote className="border-l-4 border-marca-purpura pl-3 text-sm text-gray-600">
              «¡Gran mejora en los cambios de acorde! Trabaja la mano derecha y lo bordas.» — Lucas F.
            </blockquote>
          </div>
        </aside>
      </div>
    </div>
  );
}
