import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCursoDetalle } from "@/lib/queries";
import { cursos } from "@/lib/demo-data";
import { formatEuro, nivelLabel, nivelColor, formatFecha } from "@/lib/utils";

export function generateStaticParams() {
  return cursos.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getCursoDetalle(slug);
  if (!data) return { title: "Curso no encontrado" };
  return { title: data.curso.nombre, description: data.curso.descripcion };
}

export default async function CursoDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getCursoDetalle(slug);
  if (!data) notFound();

  const { curso, instrumento, profesor, lecciones, clases } = data;

  return (
    <div className="bg-white">
      {/* Cabecera */}
      <div className="bg-gradient-marca text-white">
        <div className="contenedor grid gap-8 py-12 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className={`chip ${nivelColor(curso.nivel)} bg-white/95`}>{nivelLabel(curso.nivel)}</span>
              <span className="chip bg-white/15 text-white">{instrumento?.icono} {instrumento?.nombre}</span>
            </div>
            <h1 className="font-display text-3xl font-bold md:text-4xl">{curso.nombre}</h1>
            <p className="mt-4 max-w-xl text-white/90">{curso.descripcion}</p>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/80">
              <span>📚 {curso.numeroLecciones} lecciones</span>
              <span>⏱️ {curso.duracionSemanas} semanas</span>
              <span>📹 Clases en vivo incluidas</span>
              {profesor && <span>👩‍🏫 con {profesor.nombre}</span>}
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
            <Image src={curso.imagen} alt={curso.nombre} fill sizes="(max-width:768px) 100vw, 40vw" className="object-cover" />
          </div>
        </div>
      </div>

      <div className="contenedor grid gap-10 py-12 lg:grid-cols-[1fr_340px]">
        {/* Contenido principal */}
        <div className="space-y-10">
          {/* Temario */}
          <section>
            <h2 className="mb-5 font-display text-2xl font-bold">Temario del curso</h2>
            <div className="overflow-hidden rounded-2xl border border-gray-100">
              {lecciones.map((l, idx) => (
                <div
                  key={l.id}
                  className={`flex items-center gap-4 p-4 ${idx !== lecciones.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-sm font-semibold text-marca-purpura">
                    {l.numero}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-marca-oscuro">{l.titulo}</p>
                    <p className="text-sm text-gray-500">{l.descripcion}</p>
                  </div>
                  <span className="text-xs text-gray-400">{l.duracionMinutos} min</span>
                  {l.gratuita ? (
                    <Link href={`/curso/${curso.slug}/leccion/${l.numero}`} className="chip bg-marca-exito/10 text-marca-exito">
                      Gratis →
                    </Link>
                  ) : (
                    <span className="text-gray-300" aria-label="Requiere suscripción">🔒</span>
                  )}
                </div>
              ))}
              {lecciones.length === 0 && (
                <p className="p-6 text-sm text-gray-500">Temario en preparación.</p>
              )}
            </div>
          </section>

          {/* Requisitos y materiales */}
          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-gray-50 p-6">
              <h3 className="mb-3 font-display text-lg font-semibold">Requisitos</h3>
              <p className="text-sm text-gray-600">{curso.requisitos}</p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-6">
              <h3 className="mb-3 font-display text-lg font-semibold">Qué incluye</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {curso.materialesIncluidos.map((m) => (
                  <li key={m} className="flex gap-2"><span className="text-marca-exito">✓</span>{m}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Profesor */}
          {profesor && (
            <section className="rounded-2xl border border-gray-100 p-6">
              <h3 className="mb-4 font-display text-lg font-semibold">Tu profesor/a</h3>
              <div className="flex gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                  <Image src={profesor.foto} alt={profesor.nombre} fill sizes="80px" className="object-cover" />
                </div>
                <div>
                  <p className="font-semibold">{profesor.nombre}</p>
                  <p className="text-sm text-marca-purpura">{profesor.especializaciones}</p>
                  <p className="mt-1 text-sm text-gray-500">{profesor.bio}</p>
                  <p className="mt-2 text-xs text-gray-400">{profesor.anosExperiencia} años de experiencia · {profesor.certificaciones}</p>
                </div>
              </div>
            </section>
          )}

          {/* Próximas clases en vivo */}
          {clases.length > 0 && (
            <section>
              <h2 className="mb-5 font-display text-2xl font-bold">Próximas clases en vivo</h2>
              <div className="space-y-3">
                {clases.map((c) => (
                  <div key={c.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-100 p-4">
                    <div>
                      <p className="font-medium">{c.titulo}</p>
                      <p className="text-sm text-gray-500">{formatFecha(c.fecha)} · {c.horaInicio}h · {c.plataforma}</p>
                    </div>
                    <span className="text-sm text-gray-500">{c.inscritos}/{c.aforoMaximo} plazas</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Tarjeta de inscripción */}
        <aside className="h-fit lg:sticky lg:top-24">
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-end gap-1">
              <span className="font-display text-3xl font-bold text-marca-purpura">{formatEuro(curso.precioMensual)}</span>
              <span className="mb-1 text-sm text-gray-400">/mes</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              o {formatEuro(curso.precioAnual)}/año (ahorra ~20%)
            </p>

            <Link href="/auth/signin" className="btn-primario mt-5 w-full">
              Suscribirme
            </Link>
            <Link
              href={lecciones[0] ? `/curso/${curso.slug}/leccion/${lecciones[0].numero}` : "#"}
              className="btn-secundario mt-3 w-full"
            >
              Probar 1ª lección gratis
            </Link>

            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li className="flex gap-2"><span className="text-marca-exito">✓</span> Acceso a todas las lecciones</li>
              <li className="flex gap-2"><span className="text-marca-exito">✓</span> Clases en vivo semanales</li>
              <li className="flex gap-2"><span className="text-marca-exito">✓</span> Materiales descargables</li>
              <li className="flex gap-2"><span className="text-marca-exito">✓</span> Certificado al completar</li>
              <li className="flex gap-2"><span className="text-marca-exito">✓</span> Cancela cuando quieras</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
