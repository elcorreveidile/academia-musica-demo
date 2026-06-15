import type { Metadata } from "next";
import Image from "next/image";
import { listProfesores } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Profesores",
  description: "Conoce a los profesores de Academia de Música: músicos profesionales apasionados por enseñar.",
};

export default async function ProfesoresPage() {
  const profesores = await listProfesores();

  return (
    <div className="bg-white">
      <div className="bg-gradient-marca py-14 text-white">
        <div className="contenedor">
          <h1 className="font-display text-4xl font-bold">Nuestros profesores</h1>
          <p className="mt-3 max-w-2xl text-white/90">
            Músicos profesionales en activo que disfrutan enseñando. Cada uno con su instrumento,
            su estilo y muchas ganas de acompañarte.
          </p>
        </div>
      </div>

      <div className="contenedor grid gap-8 py-12 md:grid-cols-2">
        {profesores.map((p) => (
          <article key={p.id} className="tarjeta flex flex-col gap-5 p-6 sm:flex-row">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl">
              <Image src={p.foto} alt={p.nombre} fill sizes="112px" className="object-cover" />
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold">{p.nombre}</h2>
              <p className="text-sm font-medium text-marca-purpura">{p.especializaciones}</p>
              <p className="mt-2 text-sm text-gray-600">{p.bio}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="chip bg-primary-50 text-marca-purpura">{p.anosExperiencia} años de experiencia</span>
                <span className="chip bg-gray-100 text-gray-600">{p.certificaciones}</span>
                {p.disponible && <span className="chip bg-marca-exito/10 text-marca-exito">Disponible</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
