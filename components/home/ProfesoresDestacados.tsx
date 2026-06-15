import Image from "next/image";
import Link from "next/link";
import { listProfesores } from "@/lib/queries";

export async function ProfesoresDestacados() {
  const profesores = await listProfesores();

  return (
    <section className="contenedor py-20">
      <div className="mb-12 text-center">
        <h2 className="font-display text-3xl font-bold">Profesores que inspiran</h2>
        <p className="mt-3 text-gray-500">
          Músicos profesionales que disfrutan enseñando tanto como tocando.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {profesores.map((p) => (
          <div key={p.id} className="tarjeta p-6 text-center">
            <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full ring-4 ring-primary-50">
              <Image src={p.foto} alt={p.nombre} fill sizes="96px" className="object-cover" />
            </div>
            <h3 className="font-display text-base font-semibold">{p.nombre}</h3>
            <p className="text-sm text-marca-purpura">{p.especializaciones}</p>
            <p className="mt-2 line-clamp-3 text-xs text-gray-500">{p.bio}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/profesores" className="btn-secundario">
          Conoce a todo el equipo
        </Link>
      </div>
    </section>
  );
}
