const caracteristicas = [
  {
    icono: "🎬",
    titulo: "Lecciones grabadas",
    texto: "Vídeos estructurados disponibles 24/7. Aprende a tu ritmo, repite cuantas veces quieras.",
  },
  {
    icono: "📹",
    titulo: "Clases en vivo",
    texto: "Grupos reducidos (máx. 8) con profesor real. Resuelve dudas y recibe feedback en directo.",
  },
  {
    icono: "🤝",
    titulo: "Comunidad",
    texto: "Foro, recitales mensuales y jam sessions. Aprende acompañado de otros músicos.",
  },
  {
    icono: "📈",
    titulo: "Sigue tu progreso",
    texto: "Marca lecciones completadas, gana insignias y desbloquea certificados.",
  },
  {
    icono: "🏆",
    titulo: "Certificados",
    texto: "Acredita lo aprendido al completar cada curso. Logros reales, no solo vídeos.",
  },
];

export function CaracteristicasSection() {
  return (
    <section className="contenedor py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold">Por qué elegirnos</h2>
        <p className="mt-3 text-gray-500">
          Lo mejor de aprender online y de una academia presencial, en un solo lugar.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
        {caracteristicas.map((c) => (
          <div key={c.titulo} className="tarjeta p-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-3xl">
              {c.icono}
            </div>
            <h3 className="mb-2 font-display text-base font-semibold">{c.titulo}</h3>
            <p className="text-sm text-gray-500">{c.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
