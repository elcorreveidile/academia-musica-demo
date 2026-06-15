import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: "La misión de Academia de Música: hacer que aprender música sea accesible, humano y en comunidad.",
};

const valores = [
  { icono: "🎯", titulo: "Aprendizaje real", texto: "Combinamos vídeos a tu ritmo con clases en vivo y feedback humano. No es contenido masivo, es enseñanza de verdad." },
  { icono: "🤝", titulo: "Comunidad primero", texto: "Creemos que la música se disfruta en grupo. Recitales, jam sessions y un foro activo te acompañan." },
  { icono: "♿", titulo: "Accesible para todos", texto: "Desde niños hasta adultos que retoman la música. Cualquier edad, cualquier nivel, cualquier instrumento." },
  { icono: "📈", titulo: "Progreso medible", texto: "Seguimiento de lecciones, insignias y certificados. Ver cómo avanzas es lo que mantiene la motivación." },
];

const diferenciales = [
  "Clases en vivo con interacción real (no solo vídeos)",
  "Comunidad donde los alumnos aprenden juntos",
  "Feedback personalizado del profesor",
  "Seguimiento estructurado con certificados reales",
  "Recitales virtuales para practicar ante audiencia",
];

export default function SobreNosotrosPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-marca py-16 text-white">
        <div className="contenedor max-w-3xl">
          <h1 className="font-display text-4xl font-bold">Hacemos que aprender música sea humano</h1>
          <p className="mt-4 text-lg text-white/90">
            Academia de Música nace de una idea sencilla: aprender un instrumento no debería ser
            ni caro ni solitario. Unimos lo mejor del aprendizaje online —flexibilidad y precio—
            con lo mejor de una academia presencial —profesores reales y comunidad—.
          </p>
        </div>
      </div>

      <section className="contenedor py-16">
        <h2 className="mb-10 text-center font-display text-3xl font-bold">Nuestros valores</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {valores.map((v) => (
            <div key={v.titulo} className="tarjeta flex gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-2xl">
                {v.icono}
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{v.titulo}</h3>
                <p className="mt-1 text-sm text-gray-600">{v.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="contenedor max-w-3xl">
          <h2 className="mb-6 font-display text-3xl font-bold">Qué nos hace diferentes</h2>
          <ul className="space-y-3">
            {diferenciales.map((d) => (
              <li key={d} className="flex items-start gap-3 text-gray-700">
                <span className="mt-0.5 text-marca-exito">✓</span> {d}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link href="/cursos" className="btn-primario">Empieza tu viaje musical</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
