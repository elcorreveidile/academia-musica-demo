import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      {/* Imagen de fondo grande */}
      <Image
        src="/images/fondos/hero-home.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Overlay de marca (más opaco a la izquierda para legibilidad del texto) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-marca-purpura/95 via-marca-purpura/80 to-marca-oscuro/40" />
      <div className="pointer-events-none absolute inset-0 -z-10 fondo-pentagrama opacity-20" aria-hidden="true" />

      <div className="contenedor relative grid items-center py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="chip mb-5 bg-white/15 text-marca-dorado">
            🎵 Clases en vivo + lecciones grabadas
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight drop-shadow md:text-6xl">
            Aprende música<br />desde cero
          </h1>
          <p className="mt-5 max-w-md text-lg text-white/90">
            Toca tu primera canción esta semana. Vídeos a tu ritmo, profesores reales en directo
            y una comunidad que te acompaña en cada nota.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/cursos" className="btn-dorado">
              Empezar gratis →
            </Link>
            <Link href="/clases-en-vivo" className="btn-secundario !border-white !bg-white/10 !text-white hover:!bg-white/20">
              Ver clases en vivo
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm text-white/80">
            <div><span className="font-display text-2xl font-bold text-white">7</span><br />instrumentos</div>
            <div><span className="font-display text-2xl font-bold text-white">+2.500</span><br />alumnos</div>
            <div><span className="font-display text-2xl font-bold text-white">4,9★</span><br />valoración</div>
          </div>
        </div>
      </div>
    </section>
  );
}
