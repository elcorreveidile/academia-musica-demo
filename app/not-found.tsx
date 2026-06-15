import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="text-7xl">🎼</div>
      <h1 className="mt-6 font-display text-4xl font-bold">Página no encontrada</h1>
      <p className="mt-3 max-w-md text-gray-500">
        Parece que esta nota no está en el pentagrama. Vuelve al inicio o explora nuestros cursos.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn-primario">Ir al inicio</Link>
        <Link href="/cursos" className="btn-secundario">Ver cursos</Link>
      </div>
    </div>
  );
}
