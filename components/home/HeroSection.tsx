import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-marca text-white">
      <div className="absolute inset-0 fondo-pentagrama opacity-40" aria-hidden="true" />
      {/* notas decorativas */}
      <div className="pointer-events-none absolute right-10 top-10 select-none text-6xl opacity-20" aria-hidden="true">♪</div>
      <div className="pointer-events-none absolute bottom-10 right-1/3 select-none text-8xl opacity-10" aria-hidden="true">♫</div>

      <div className="contenedor relative grid items-center gap-10 py-20 md:grid-cols-2 md:py-28">
        <div>
          <span className="chip mb-5 bg-white/15 text-marca-dorado">
            🎵 Clases en vivo + lecciones grabadas
          </span>
          <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">
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
          <div className="mt-8 flex items-center gap-6 text-sm text-white/80">
            <div><span className="font-display text-2xl font-bold text-white">7</span><br />instrumentos</div>
            <div><span className="font-display text-2xl font-bold text-white">+2.500</span><br />alumnos</div>
            <div><span className="font-display text-2xl font-bold text-white">4,9★</span><br />valoración</div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icono: "🎸", txt: "Guitarra" },
              { icono: "🎹", txt: "Piano" },
              { icono: "🎤", txt: "Voz" },
              { icono: "🥁", txt: "Batería" },
            ].map((x, i) => (
              <div
                key={x.txt}
                className={`rounded-2xl bg-white/10 p-6 backdrop-blur ${i % 2 ? "translate-y-6" : ""}`}
              >
                <div className="text-4xl">{x.icono}</div>
                <div className="mt-3 font-semibold">{x.txt}</div>
                <div className="text-sm text-white/70">Desde iniciación</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
