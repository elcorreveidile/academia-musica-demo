import Link from "next/link";

/**
 * Banda con fondo fijo (efecto parallax al hacer scroll).
 * El fondo permanece fijo mientras el contenido se desplaza por encima.
 */
export function BandaInspiracion() {
  return (
    <section
      className="relative bg-marca-oscuro bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/fondos/estudio-piano.jpg')" }}
    >
      <div className="absolute inset-0 bg-marca-oscuro/75" />
      <div className="contenedor relative py-28 text-center text-white">
        <p className="mx-auto max-w-3xl font-display text-2xl font-semibold leading-snug md:text-4xl">
          “La música es el idioma del alma.<br />Nosotros te enseñamos a hablarlo.”
        </p>
        <p className="mx-auto mt-5 max-w-xl text-white/80">
          Únete a más de 2.500 alumnos que ya están aprendiendo a su ritmo, con profesores reales
          y en comunidad.
        </p>
        <div className="mt-8">
          <Link href="/cursos" className="btn-dorado">
            Empieza tu viaje musical
          </Link>
        </div>
      </div>
    </section>
  );
}
