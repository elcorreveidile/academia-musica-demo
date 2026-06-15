import Link from "next/link";
import { notFound } from "next/navigation";
import { getCursoDetalle } from "@/lib/queries";
import { ReproductorVideo } from "@/components/leccion/ReproductorVideo";
import { MaterialesDescargables } from "@/components/leccion/MaterialesDescargables";
import { MarcarCompletada } from "@/components/leccion/MarcarCompletada";

export default async function LeccionPage({
  params,
}: {
  params: Promise<{ slug: string; numero: string }>;
}) {
  const { slug, numero } = await params;
  const data = await getCursoDetalle(slug);
  if (!data) notFound();

  const num = parseInt(numero, 10);
  const leccion = data.lecciones.find((l) => l.numero === num);
  if (!leccion) notFound();

  const anterior = data.lecciones.find((l) => l.numero === num - 1);
  const siguiente = data.lecciones.find((l) => l.numero === num + 1);

  return (
    <div className="bg-gray-50">
      <div className="contenedor grid gap-8 py-8 lg:grid-cols-[1fr_320px]">
        {/* Reproductor + contenido */}
        <div className="space-y-6">
          <nav className="text-sm text-gray-500">
            <Link href="/cursos" className="hover:text-marca-purpura">Cursos</Link>
            {" / "}
            <Link href={`/cursos/${slug}`} className="hover:text-marca-purpura">{data.curso.nombre}</Link>
            {" / "}
            <span className="text-gray-700">Lección {leccion.numero}</span>
          </nav>

          <ReproductorVideo url={leccion.videoUrl} titulo={leccion.titulo} />

          <div className="rounded-2xl border border-gray-100 bg-white p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm text-marca-purpura">Lección {leccion.numero} · {leccion.duracionMinutos} min</p>
                <h1 className="font-display text-2xl font-bold">{leccion.titulo}</h1>
              </div>
              <MarcarCompletada />
            </div>

            {leccion.objetivos.length > 0 && (
              <div className="mt-5 rounded-xl bg-primary-50 p-4">
                <p className="mb-2 text-sm font-semibold text-marca-purpura">🎯 Objetivos de esta lección</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {leccion.objetivos.map((o) => (
                    <li key={o} className="flex gap-2"><span className="text-marca-purpura">•</span>{o}</li>
                  ))}
                </ul>
              </div>
            )}

            <div
              className="prose prose-sm mt-5 max-w-none text-gray-600"
              dangerouslySetInnerHTML={{ __html: leccion.contenidoHtml }}
            />
          </div>

          <MaterialesDescargables leccion={leccion} />

          {/* Navegación entre lecciones */}
          <div className="flex justify-between gap-3">
            {anterior ? (
              <Link href={`/curso/${slug}/leccion/${anterior.numero}`} className="btn-secundario !py-2 !text-sm">
                ← Lección {anterior.numero}
              </Link>
            ) : <span />}
            {siguiente && (
              <Link href={`/curso/${slug}/leccion/${siguiente.numero}`} className="btn-primario !py-2 !text-sm">
                Lección {siguiente.numero} →
              </Link>
            )}
          </div>
        </div>

        {/* Índice de lecciones */}
        <aside className="h-fit lg:sticky lg:top-24">
          <div className="rounded-2xl border border-gray-100 bg-white p-5">
            <h2 className="mb-4 font-display text-base font-semibold">Contenido del curso</h2>
            <ol className="space-y-1">
              {data.lecciones.map((l) => {
                const activa = l.numero === num;
                return (
                  <li key={l.id}>
                    <Link
                      href={`/curso/${slug}/leccion/${l.numero}`}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                        activa ? "bg-primary-50 font-semibold text-marca-purpura" : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs ${
                        activa ? "bg-marca-purpura text-white" : "bg-gray-100 text-gray-500"
                      }`}>
                        {l.numero}
                      </span>
                      <span className="flex-1 leading-tight">{l.titulo}</span>
                      {l.gratuita && <span className="text-[10px] font-semibold text-marca-exito">FREE</span>}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
}
