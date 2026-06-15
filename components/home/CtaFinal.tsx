import Link from "next/link";

export function CtaFinal() {
  return (
    <section className="bg-marca-oscuro py-20 text-white">
      <div className="contenedor text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Tu primera canción te está esperando 🎶
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Empieza hoy con tu primera lección gratis. Sin tarjeta, sin compromiso.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/cursos" className="btn-dorado">
            Explorar cursos
          </Link>
          <Link href="/auth/signin" className="btn-secundario !border-white !bg-transparent !text-white hover:!bg-white/10">
            Crear cuenta gratis
          </Link>
        </div>
      </div>
    </section>
  );
}
