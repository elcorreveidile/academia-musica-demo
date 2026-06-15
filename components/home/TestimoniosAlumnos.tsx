import Image from "next/image";
import { listTestimonios } from "@/lib/queries";

export async function TestimoniosAlumnos() {
  const testimonios = await listTestimonios();

  return (
    <section className="bg-gray-50 py-20">
      <div className="contenedor">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold">Lo que dicen nuestros alumnos</h2>
          <p className="mt-3 text-gray-500">Historias reales de gente que empezó desde cero.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonios.map((t) => (
            <figure key={t.id} className="tarjeta flex flex-col p-6">
              <div className="mb-3 text-marca-dorado" aria-label={`${t.estrellas} de 5 estrellas`}>
                {"★".repeat(t.estrellas)}
              </div>
              <blockquote className="flex-1 text-sm text-gray-600">“{t.texto}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image src={t.foto} alt={t.nombre} fill sizes="44px" className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.nombre}</div>
                  <div className="text-xs text-gray-400">Alumno/a de {t.instrumento}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
