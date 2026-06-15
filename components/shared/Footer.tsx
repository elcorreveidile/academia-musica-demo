import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-marca-oscuro text-gray-300">
      <div className="contenedor grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="mb-4">
            <Logo blanco />
          </div>
          <p className="text-sm text-gray-400">
            Aprende música desde cero. Clases en vivo + lecciones grabadas + comunidad.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Aprende</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/cursos" className="hover:text-marca-dorado">Catálogo de cursos</Link></li>
            <li><Link href="/clases-en-vivo" className="hover:text-marca-dorado">Clases en vivo</Link></li>
            <li><Link href="/profesores" className="hover:text-marca-dorado">Profesores</Link></li>
            <li><Link href="/precios" className="hover:text-marca-dorado">Precios</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Comunidad</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/comunidad" className="hover:text-marca-dorado">Foro</Link></li>
            <li><Link href="/comunidad" className="hover:text-marca-dorado">Recitales virtuales</Link></li>
            <li><Link href="/comunidad" className="hover:text-marca-dorado">Jam sessions</Link></li>
            <li><Link href="/sobre-nosotros" className="hover:text-marca-dorado">Sobre nosotros</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Empieza hoy</h4>
          <p className="mb-3 text-sm text-gray-400">Tu primera lección es gratis. Sin tarjeta.</p>
          <Link href="/cursos" className="btn-dorado !py-2 !text-sm">
            Empezar gratis
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Academia de Música · Demo construida con Next.js, Tailwind, Drizzle y Neon
      </div>
    </footer>
  );
}
