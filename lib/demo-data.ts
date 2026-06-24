import type {
  Instrumento,
  Profesor,
  Curso,
  Leccion,
  ClaseEnVivo,
  ForumPost,
  PlanPrecio,
  Testimonio,
  Insignia,
} from "./types";

/* -------------------------------------------------------------------------- */
/*  INSTRUMENTOS                                                               */
/* -------------------------------------------------------------------------- */

export const instrumentos: Instrumento[] = [
  {
    id: 1,
    nombre: "Guitarra",
    slug: "guitarra",
    descripcion: "El instrumento más popular del mundo. Versátil, portátil y perfecto para acompañar cualquier estilo.",
    icono: "🎸",
    dificultadInicial: "media",
    edadRecomendadaMinima: 8,
  },
  {
    id: 2,
    nombre: "Piano",
    slug: "piano",
    descripcion: "La base de la música. Ideal para entender la teoría musical y desarrollar ambas manos.",
    icono: "🎹",
    dificultadInicial: "media",
    edadRecomendadaMinima: 6,
  },
  {
    id: 3,
    nombre: "Bajo",
    slug: "bajo",
    descripcion: "El corazón rítmico de toda banda. Aprende a marcar el groove y sostener la canción.",
    icono: "🎸",
    dificultadInicial: "fácil",
    edadRecomendadaMinima: 10,
  },
  {
    id: 4,
    nombre: "Batería",
    slug: "bateria",
    descripcion: "Energía pura. Desarrolla coordinación, ritmo y la base de cualquier grupo.",
    icono: "🥁",
    dificultadInicial: "media",
    edadRecomendadaMinima: 8,
  },
  {
    id: 5,
    nombre: "Voz",
    slug: "voz",
    descripcion: "Tu instrumento siempre contigo. Técnica vocal, respiración y afinación desde cero.",
    icono: "🎤",
    dificultadInicial: "fácil",
    edadRecomendadaMinima: 7,
  },
  {
    id: 6,
    nombre: "Ukelele",
    slug: "ukelele",
    descripcion: "Pequeño, alegre y muy fácil de empezar. Tocarás tus primeras canciones en una semana.",
    icono: "🪕",
    dificultadInicial: "fácil",
    edadRecomendadaMinima: 6,
  },
  {
    id: 7,
    nombre: "Violín",
    slug: "violin",
    descripcion: "Elegante y expresivo. Un reto precioso que abre las puertas de la música clásica y el folk.",
    icono: "🎻",
    dificultadInicial: "difícil",
    edadRecomendadaMinima: 7,
  },
];

/* -------------------------------------------------------------------------- */
/*  PROFESORES                                                                 */
/* -------------------------------------------------------------------------- */

export const profesores: Profesor[] = [
  {
    id: 101,
    nombre: "Lucas Fernández",
    email: "lucas@academia-musica.com",
    foto: "/images/profesores/guitarra.jpg",
    bio: "Guitarrista profesional con 12 años de experiencia tocando en bandas de rock y pop. Profesor apasionado que cree que cualquiera puede aprender a tocar.",
    especializaciones: "Guitarra acústica, eléctrica, rock, pop",
    anosExperiencia: 12,
    certificaciones: "Grado Superior de Música (Conservatorio de Madrid)",
    disponible: true,
  },
  {
    id: 102,
    nombre: "Marcos Ribera",
    email: "marcos@academia-musica.com",
    foto: "/images/profesores/piano.jpg",
    bio: "Pianista y compositor. Estudió en el Berklee College of Music. Especialista en enseñar teoría musical de forma sencilla y divertida.",
    especializaciones: "Piano clásico, jazz, teoría musical",
    anosExperiencia: 15,
    certificaciones: "Berklee College of Music — Performance",
    disponible: true,
  },
  {
    id: 103,
    nombre: "Sara Molina",
    email: "sara@academia-musica.com",
    foto: "/images/profesores/voz.jpg",
    bio: "Cantante y vocal coach. Ha trabajado con artistas emergentes y se especializa en técnica vocal saludable y desarrollo de la confianza.",
    especializaciones: "Voz, técnica vocal, canto moderno",
    anosExperiencia: 10,
    certificaciones: "Speech Level Singing — Certified Instructor",
    disponible: true,
  },
  {
    id: 104,
    nombre: "David Cano",
    email: "david@academia-musica.com",
    foto: "/images/profesores/bateria.jpg",
    bio: "Baterista de sesión y bajista. Más de 500 conciertos a sus espaldas. Hace que el ritmo sea fácil y adictivo.",
    especializaciones: "Batería, bajo, ritmo, groove",
    anosExperiencia: 14,
    certificaciones: "Drumeo Certified — Grado Profesional",
    disponible: true,
  },
];

/* -------------------------------------------------------------------------- */
/*  CURSOS                                                                     */
/* -------------------------------------------------------------------------- */

export const cursos: Curso[] = [
  {
    id: 1,
    nombre: "Guitarra desde Cero",
    slug: "guitarra-iniciacion",
    instrumentoId: 1,
    nivel: "iniciacion",
    descripcion:
      "Empieza tu viaje con la guitarra. Aprende acordes básicos, técnica de mano derecha e izquierda, y toca tus primeras canciones completas en 8 semanas.",
    duracionSemanas: 8,
    precioMensual: 19.99,
    precioTrimestral: 53.99,
    precioAnual: 191.9,
    requisitos: "Ninguno. Solo necesitas una guitarra (acústica o eléctrica) y ganas de aprender.",
    materialesIncluidos: [
      "12 lecciones en vídeo HD",
      "Partituras y diagramas de acordes en PDF",
      "Backing tracks para practicar",
      "Acceso a clases en vivo semanales",
    ],
    numeroLecciones: 12,
    imagen: "/images/cursos/guitarra-iniciacion.jpg",
    profesorId: 101,
    activo: true,
  },
  {
    id: 2,
    nombre: "Guitarra Intermedia: Escalas e Improvisación",
    slug: "guitarra-intermedio",
    instrumentoId: 1,
    nivel: "intermedio",
    descripcion:
      "Lleva tu guitarra al siguiente nivel. Escalas pentatónicas, improvisación, técnica de solos y exploración de distintos estilos musicales.",
    duracionSemanas: 12,
    precioMensual: 24.99,
    precioTrimestral: 67.49,
    precioAnual: 239.9,
    requisitos: "Saber tocar acordes abiertos básicos y cambiar entre ellos con fluidez.",
    materialesIncluidos: [
      "18 lecciones en vídeo HD",
      "Tablaturas de solos famosos",
      "Backing tracks por estilo",
      "Clases en vivo y feedback personalizado",
    ],
    numeroLecciones: 18,
    imagen: "/images/cursos/guitarra-intermedio.jpg",
    profesorId: 101,
    activo: true,
  },
  {
    id: 3,
    nombre: "Piano para Principiantes",
    slug: "piano-iniciacion",
    instrumentoId: 2,
    nivel: "iniciacion",
    descripcion:
      "Descubre el piano paso a paso. Postura, lectura del teclado, primeras melodías y acompañamiento con ambas manos.",
    duracionSemanas: 8,
    precioMensual: 24.99,
    precioTrimestral: 67.49,
    precioAnual: 239.9,
    requisitos: "Ninguno. Sirve un piano acústico o un teclado de 61 teclas o más.",
    materialesIncluidos: [
      "14 lecciones en vídeo HD",
      "Partituras progresivas en PDF",
      "Ejercicios de digitación",
      "Clases en vivo semanales",
    ],
    numeroLecciones: 14,
    imagen: "/images/cursos/piano-iniciacion.jpg",
    profesorId: 102,
    activo: true,
  },
  {
    id: 4,
    nombre: "Canto: Encuentra tu Voz",
    slug: "voz-iniciacion",
    instrumentoId: 5,
    nivel: "iniciacion",
    descripcion:
      "Aprende a cantar con técnica saludable. Respiración, afinación, proyección y confianza para cantar tus canciones favoritas.",
    duracionSemanas: 6,
    precioMensual: 19.99,
    precioTrimestral: 53.99,
    precioAnual: 191.9,
    requisitos: "Ninguno. Solo tu voz y un espacio donde practicar.",
    materialesIncluidos: [
      "10 lecciones en vídeo HD",
      "Ejercicios de calentamiento en audio",
      "Guías de respiración en PDF",
      "Clases en vivo y grabación de progreso",
    ],
    numeroLecciones: 10,
    imagen: "/images/cursos/voz-iniciacion.jpg",
    profesorId: 103,
    activo: true,
  },
  {
    id: 5,
    nombre: "Bajo: Groove desde el Primer Día",
    slug: "bajo-iniciacion",
    instrumentoId: 3,
    nivel: "iniciacion",
    descripcion:
      "El bajo es el instrumento perfecto para empezar. Aprende ritmo, técnica de dedos y a tocar junto a una banda real.",
    duracionSemanas: 8,
    precioMensual: 19.99,
    precioTrimestral: 53.99,
    precioAnual: 191.9,
    requisitos: "Ninguno. Un bajo de 4 cuerdas y un amplificador (opcional).",
    materialesIncluidos: [
      "12 lecciones en vídeo HD",
      "Líneas de bajo en tablatura",
      "Backing tracks sin bajo",
      "Clases en vivo semanales",
    ],
    numeroLecciones: 12,
    imagen: "/images/cursos/bajo-iniciacion.jpg",
    profesorId: 104,
    activo: true,
  },
  {
    id: 6,
    nombre: "Batería: Ritmo y Coordinación",
    slug: "bateria-iniciacion",
    instrumentoId: 4,
    nivel: "iniciacion",
    descripcion:
      "Domina los rudimentos, los patrones básicos y la coordinación de las cuatro extremidades. Toca tus primeros ritmos de rock y pop.",
    duracionSemanas: 8,
    precioMensual: 24.99,
    precioTrimestral: 67.49,
    precioAnual: 239.9,
    requisitos: "Ninguno. Sirve una batería acústica, electrónica o un pad de práctica.",
    materialesIncluidos: [
      "12 lecciones en vídeo HD",
      "Hojas de rudimentos en PDF",
      "Pistas de práctica con metrónomo",
      "Clases en vivo semanales",
    ],
    numeroLecciones: 12,
    imagen: "/images/cursos/bateria-iniciacion.jpg",
    profesorId: 104,
    activo: true,
  },
];

/* -------------------------------------------------------------------------- */
/*  LECCIONES (curso 1 — Guitarra desde Cero, ejemplo completo)               */
/* -------------------------------------------------------------------------- */

export const lecciones: Leccion[] = [
  {
    id: 1,
    cursoId: 1,
    numero: 1,
    titulo: "Conoce tu guitarra y cómo sostenerla",
    descripcion: "Las partes de la guitarra, la postura correcta y cómo colocar las manos.",
    duracionMinutos: 14,
    videoUrl: "https://www.youtube.com/embed/BBz-Jyr23M4",
    pdfUrl: "/pdfs/leccion-1-partes-guitarra.pdf",
    audioReferenciaUrl: "/audios/afinacion-estandar.mp3",
    contenidoHtml:
      "<p>En esta primera lección nos familiarizamos con el instrumento. Aprenderás a identificar el <strong>clavijero, el mástil, los trastes y la caja</strong>, además de la postura correcta para tocar sentado.</p><p>Dedica unos minutos a sentirte cómodo con la guitarra antes de pasar a la siguiente lección.</p>",
    objetivos: [
      "Identificar las partes de la guitarra",
      "Adoptar una postura cómoda y saludable",
      "Colocar correctamente ambas manos",
    ],
    publicada: true,
    gratuita: true,
  },
  {
    id: 2,
    cursoId: 1,
    numero: 2,
    titulo: "Afinación: deja tu guitarra perfecta",
    descripcion: "Cómo afinar de oído y con afinador. El sonido de cada cuerda al aire.",
    duracionMinutos: 11,
    videoUrl: "https://www.youtube.com/embed/eRDcUbV_BWo",
    pdfUrl: "/pdfs/leccion-2-afinacion.pdf",
    audioReferenciaUrl: "/audios/afinacion-estandar.mp3",
    contenidoHtml:
      "<p>Una guitarra desafinada desanima a cualquiera. Aprende la afinación estándar <strong>(E-A-D-G-B-E)</strong> y a usar un afinador físico o de móvil.</p>",
    objetivos: ["Conocer la afinación estándar", "Usar un afinador", "Reconocer el sonido de cada cuerda"],
    publicada: true,
    gratuita: false,
  },
  {
    id: 3,
    cursoId: 1,
    numero: 3,
    titulo: "Tus primeros acordes: Em y Asus2",
    descripcion: "Dos acordes muy fáciles para empezar a sonar bien desde ya.",
    duracionMinutos: 16,
    videoUrl: "https://www.youtube.com/embed/w0lOTtNYwHc",
    pdfUrl: "/pdfs/leccion-3-primeros-acordes.pdf",
    contenidoHtml:
      "<p>Empezamos con dos acordes muy cómodos: <strong>Mi menor (Em)</strong> y <strong>La sus2 (Asus2)</strong>. Con solo estos dos ya puedes acompañar varias canciones.</p>",
    objetivos: ["Tocar el acorde Em", "Tocar el acorde Asus2", "Cambiar entre ambos lentamente"],
    publicada: true,
    gratuita: false,
  },
  {
    id: 4,
    cursoId: 1,
    numero: 4,
    titulo: "El ritmo de rasgueo básico",
    descripcion: "Tu primer patrón de rasgueo: abajo-abajo-arriba.",
    duracionMinutos: 18,
    videoUrl: "https://www.youtube.com/embed/3jWRrafhO7M",
    pdfUrl: "/pdfs/leccion-4-rasgueo.pdf",
    audioReferenciaUrl: "/audios/backing-track-rasgueo.mp3",
    contenidoHtml:
      "<p>El rasgueo da vida a la guitarra. Practicaremos el patrón más útil para empezar y a mantener un tempo constante con el metrónomo.</p>",
    objetivos: ["Ejecutar el patrón de rasgueo básico", "Mantener un tempo constante", "Combinar rasgueo con cambios de acorde"],
    publicada: true,
    gratuita: false,
  },
  {
    id: 5,
    cursoId: 1,
    numero: 5,
    titulo: "Tu primera canción completa",
    descripcion: "Juntamos todo lo aprendido en una canción real de dos acordes.",
    duracionMinutos: 22,
    videoUrl: "https://www.youtube.com/embed/BBz-Jyr23M4",
    pdfUrl: "/pdfs/leccion-5-primera-cancion.pdf",
    audioReferenciaUrl: "/audios/backing-track-cancion.mp3",
    contenidoHtml:
      "<p>¡El momento que esperabas! Tocaremos una canción completa combinando los acordes y el rasgueo. La satisfacción de tu primera canción no tiene precio.</p>",
    objetivos: ["Tocar una canción de principio a fin", "Cambiar de acorde a tiempo", "Disfrutar tocando"],
    publicada: true,
    gratuita: false,
  },
];

/* -------------------------------------------------------------------------- */
/*  CLASES EN VIVO                                                             */
/* -------------------------------------------------------------------------- */

export const clasesEnVivo: ClaseEnVivo[] = [
  {
    id: 1,
    cursoId: 1,
    profesorId: 101,
    titulo: "Taller en vivo: dudas de acordes y cambios",
    descripcion: "Resolvemos en directo tus dudas sobre los primeros acordes y los cambios entre ellos.",
    fecha: "2026-06-16",
    horaInicio: "19:00",
    duracionMinutos: 60,
    plataforma: "zoom",
    aforoMaximo: 8,
    inscritos: 6,
    estado: "programada",
    grabacionDisponible: false,
  },
  {
    id: 2,
    cursoId: 3,
    profesorId: 102,
    titulo: "Piano en vivo: coordinación de manos",
    descripcion: "Sesión práctica para coordinar mano izquierda y derecha sin agobios.",
    fecha: "2026-06-17",
    horaInicio: "20:00",
    duracionMinutos: 60,
    plataforma: "google-meet",
    aforoMaximo: 8,
    inscritos: 8,
    estado: "programada",
    grabacionDisponible: false,
  },
  {
    id: 3,
    cursoId: 4,
    profesorId: 103,
    titulo: "Canto en vivo: calentamiento y afinación",
    descripcion: "Calentamos juntos y trabajamos la afinación en tiempo real.",
    fecha: "2026-06-18",
    horaInicio: "18:30",
    duracionMinutos: 60,
    plataforma: "zoom",
    aforoMaximo: 8,
    inscritos: 4,
    estado: "programada",
    grabacionDisponible: false,
  },
  {
    id: 4,
    cursoId: 6,
    profesorId: 104,
    titulo: "Batería en vivo: tu primer ritmo de rock",
    descripcion: "Montamos paso a paso el ritmo de rock más usado de la historia.",
    fecha: "2026-06-19",
    horaInicio: "19:30",
    duracionMinutos: 60,
    plataforma: "jitsi",
    aforoMaximo: 8,
    inscritos: 5,
    estado: "programada",
    grabacionDisponible: false,
  },
  {
    id: 5,
    cursoId: 1,
    profesorId: 101,
    titulo: "Repaso grabado: postura y primeras notas",
    descripcion: "Grabación de la sesión de la semana pasada, disponible para repasar.",
    fecha: "2026-06-09",
    horaInicio: "19:00",
    duracionMinutos: 60,
    plataforma: "zoom",
    aforoMaximo: 8,
    inscritos: 8,
    estado: "completada",
    grabacionDisponible: true,
  },
];

/* -------------------------------------------------------------------------- */
/*  COMUNIDAD: FORO                                                            */
/* -------------------------------------------------------------------------- */

export const forumPosts: ForumPost[] = [
  {
    id: 1,
    autor: "Carlos M.",
    autorFoto: "https://i.pravatar.cc/100?img=11",
    titulo: "¿Cómo evito que me duelan los dedos al empezar?",
    contenido: "Llevo una semana con la guitarra y me duelen las yemas. ¿Es normal? ¿Algún consejo?",
    categoria: "practica",
    votos: 24,
    respuestas: 8,
    fecha: "2026-06-13",
  },
  {
    id: 2,
    autor: "Ana R.",
    autorFoto: "https://i.pravatar.cc/100?img=45",
    titulo: "Recomendación de teclado para empezar piano",
    contenido: "Quiero empezar el curso de piano pero no sé qué teclado comprar. Presupuesto ~200€.",
    categoria: "instrumentos",
    votos: 18,
    respuestas: 12,
    fecha: "2026-06-12",
  },
  {
    id: 3,
    autor: "Javier L.",
    autorFoto: "https://i.pravatar.cc/100?img=33",
    titulo: "No entiendo bien los compases, ¿me lo explican fácil?",
    contenido: "He visto la lección de teoría pero los compases de 4/4 y 3/4 me lían. ¿Alguna analogía sencilla?",
    categoria: "teoria",
    votos: 31,
    respuestas: 15,
    fecha: "2026-06-11",
  },
  {
    id: 4,
    autor: "Marta S.",
    autorFoto: "https://i.pravatar.cc/100?img=20",
    titulo: "¡Toqué mi primera canción completa! 🎉",
    contenido: "Solo quería compartir que después de 3 semanas conseguí tocar una canción entera. ¡Gracias a todos!",
    categoria: "general",
    votos: 57,
    respuestas: 22,
    fecha: "2026-06-10",
  },
];

/* -------------------------------------------------------------------------- */
/*  PLANES DE SUSCRIPCIÓN                                                      */
/* -------------------------------------------------------------------------- */

export const planes: PlanPrecio[] = [
  {
    id: "basico",
    nombre: "Básico",
    precio: 19.99,
    periodo: "/mes",
    destacado: false,
    caracteristicas: [
      "1 curso completo a tu elección",
      "Todas las lecciones grabadas",
      "Materiales descargables (PDF, audio)",
      "Acceso a la comunidad y foro",
      "Seguimiento de progreso",
    ],
    cta: "Empezar con Básico",
  },
  {
    id: "plus",
    nombre: "Plus",
    precio: 34.99,
    periodo: "/mes",
    destacado: true,
    caracteristicas: [
      "2 cursos simultáneos",
      "Todas las lecciones grabadas",
      "2 clases en vivo al mes",
      "Feedback personalizado del profesor",
      "Materiales descargables",
      "Insignias y certificados",
    ],
    cta: "Elegir Plus",
  },
  {
    id: "premium",
    nombre: "Premium",
    precio: 49.99,
    periodo: "/mes",
    destacado: false,
    caracteristicas: [
      "Todos los cursos sin límite",
      "Clases en vivo ilimitadas",
      "Feedback prioritario del profesor",
      "Acceso a recitales y jam sessions",
      "Certificados al completar cursos",
      "Soporte prioritario",
    ],
    cta: "Hazte Premium",
  },
  {
    id: "anual",
    nombre: "Anual",
    precio: 499,
    periodo: "/año",
    destacado: false,
    ahorro: "Ahorra un 40%",
    caracteristicas: [
      "Todo lo del plan Premium",
      "Pago único anual con descuento",
      "Precio bloqueado de por vida",
      "2 sesiones privadas de regalo",
    ],
    cta: "Suscripción Anual",
  },
];

/* -------------------------------------------------------------------------- */
/*  TESTIMONIOS                                                                */
/* -------------------------------------------------------------------------- */

export const testimonios: Testimonio[] = [
  {
    id: 1,
    nombre: "Elena Gómez",
    foto: "https://i.pravatar.cc/100?img=27",
    instrumento: "Guitarra",
    texto: "Nunca pensé que podría tocar la guitarra a los 45. Las clases en vivo marcan la diferencia: sentir que un profesor te corrige en directo es impagable.",
    estrellas: 5,
  },
  {
    id: 2,
    nombre: "Tomás Vidal",
    foto: "https://i.pravatar.cc/100?img=13",
    instrumento: "Piano",
    texto: "El curso de piano está increíblemente bien estructurado. En dos meses ya toco canciones que reconoce mi familia. La comunidad es súper motivadora.",
    estrellas: 5,
  },
  {
    id: 3,
    nombre: "Lucía Prieto",
    foto: "https://i.pravatar.cc/100?img=49",
    instrumento: "Canto",
    texto: "Tenía mucha vergüenza de cantar. Sara me ayudó a ganar confianza paso a paso. Ahora canto en el recital mensual de la academia.",
    estrellas: 5,
  },
];

/* -------------------------------------------------------------------------- */
/*  INSIGNIAS                                                                  */
/* -------------------------------------------------------------------------- */

export const insignias: Insignia[] = [
  { id: 1, nombre: "Primer acorde", descripcion: "Completaste tu primera lección práctica", icono: "🎵", criterio: "primera_leccion", ganada: true },
  { id: 2, nombre: "Constancia", descripcion: "7 días seguidos practicando", icono: "🔥", criterio: "racha_7_dias", ganada: true },
  { id: 3, nombre: "En directo", descripcion: "Asististe a tu primera clase en vivo", icono: "🎥", criterio: "primera_clase_vivo", ganada: true },
  { id: 4, nombre: "Mitad del camino", descripcion: "Completaste el 50% de un curso", icono: "⭐", criterio: "curso_50", ganada: false },
  { id: 5, nombre: "Graduado", descripcion: "Completaste un curso entero", icono: "🎓", criterio: "completar_curso", ganada: false },
  { id: 6, nombre: "Estrella del recital", descripcion: "Tocaste en un recital virtual", icono: "🌟", criterio: "recital", ganada: false },
];

/* -------------------------------------------------------------------------- */
/*  HELPERS                                                                    */
/* -------------------------------------------------------------------------- */

export function getInstrumento(id: number) {
  return instrumentos.find((i) => i.id === id);
}

export function getProfesor(id: number) {
  return profesores.find((p) => p.id === id);
}

export function getCursoBySlug(slug: string) {
  return cursos.find((c) => c.slug === slug);
}

export function getLeccionesByCurso(cursoId: number) {
  return lecciones.filter((l) => l.cursoId === cursoId).sort((a, b) => a.numero - b.numero);
}

export function getClasesByCurso(cursoId: number) {
  return clasesEnVivo.filter((c) => c.cursoId === cursoId);
}
