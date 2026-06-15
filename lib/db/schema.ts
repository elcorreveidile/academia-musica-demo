import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  numeric,
  boolean,
  timestamp,
  date,
  time,
  primaryKey,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

/* -------------------------------------------------------------------------- */
/*  USUARIOS                                                                   */
/* -------------------------------------------------------------------------- */

export const usuarios = pgTable("usuarios", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  nombre: varchar("nombre", { length: 255 }).notNull(),
  rol: varchar("rol", { length: 50 }).default("alumno"), // "alumno" | "profesor" | "admin"
  foto: varchar("foto", { length: 500 }),
  bio: text("bio"),

  // Datos de alumno
  instrumentoPrincipal: varchar("instrumento_principal", { length: 255 }),
  nivelActual: varchar("nivel_actual", { length: 50 }), // "iniciacion" | "intermedio" | "avanzado" | "ninguno"
  edad: integer("edad"),

  createdAt: timestamp("created_at").defaultNow(),
});

/* -------------------------------------------------------------------------- */
/*  INSTRUMENTOS                                                               */
/* -------------------------------------------------------------------------- */

export const instrumentos = pgTable("instrumentos", {
  id: serial("id").primaryKey(),
  nombre: varchar("nombre", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  descripcion: text("descripcion"),
  icono: varchar("icono", { length: 500 }),
  dificultadInicial: varchar("dificultad_inicial", { length: 50 }), // "fácil" | "media" | "difícil"
  edadRecomendadaMinima: integer("edad_recomendada_minima"),
  createdAt: timestamp("created_at").defaultNow(),
});

/* -------------------------------------------------------------------------- */
/*  CURSOS                                                                     */
/* -------------------------------------------------------------------------- */

export const cursos = pgTable("cursos", {
  id: serial("id").primaryKey(),
  nombre: varchar("nombre", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  instrumentoId: integer("instrumento_id").references(() => instrumentos.id),
  nivel: varchar("nivel", { length: 50 }).notNull(), // "iniciacion" | "intermedio" | "avanzado"
  descripcion: text("descripcion"),
  duracionSemanas: integer("duracion_semanas"), // 4, 8, 12
  precioMensual: numeric("precio_mensual", { precision: 10, scale: 2 }),
  precioTrimestral: numeric("precio_trimestral", { precision: 10, scale: 2 }),
  precioAnual: numeric("precio_anual", { precision: 10, scale: 2 }),
  requisitos: text("requisitos"),
  materialesIncluidos: text("materiales_incluidos"),
  numeroLecciones: integer("numero_lecciones"),
  imagen: varchar("imagen", { length: 500 }),
  profesorId: integer("profesor_id").references(() => usuarios.id),
  activo: boolean("activo").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

/* -------------------------------------------------------------------------- */
/*  LECCIONES                                                                  */
/* -------------------------------------------------------------------------- */

export const lecciones = pgTable("lecciones", {
  id: serial("id").primaryKey(),
  cursoId: integer("curso_id")
    .references(() => cursos.id)
    .notNull(),
  numero: integer("numero").notNull(),
  titulo: varchar("titulo", { length: 255 }).notNull(),
  descripcion: text("descripcion"),
  duracionMinutos: integer("duracion_minutos"),

  // Video
  videoUrl: varchar("video_url", { length: 500 }),
  transcripcion: text("transcripcion"),

  // Materiales
  pdfUrl: varchar("pdf_url", { length: 500 }),
  audioReferenciaUrl: varchar("audio_referencia_url", { length: 500 }),

  // Contenido
  contenidoHtml: text("contenido_html"),
  objetivos: text("objetivos"),

  // Orden y estado
  orden: integer("orden").default(0),
  publicada: boolean("publicada").default(true),
  gratuita: boolean("gratuita").default(false), // primera lección gratis

  createdAt: timestamp("created_at").defaultNow(),
});

/* -------------------------------------------------------------------------- */
/*  CLASES EN VIVO                                                             */
/* -------------------------------------------------------------------------- */

export const clasesEnVivo = pgTable("clases_en_vivo", {
  id: serial("id").primaryKey(),
  cursoId: integer("curso_id")
    .references(() => cursos.id)
    .notNull(),
  profesorId: integer("profesor_id")
    .references(() => usuarios.id)
    .notNull(),
  titulo: varchar("titulo", { length: 255 }).notNull(),
  descripcion: text("descripcion"),

  fecha: date("fecha").notNull(),
  horaInicio: time("hora_inicio").notNull(),
  duracionMinutos: integer("duracion_minutos").default(60),

  // Tecnología
  plataforma: varchar("plataforma", { length: 50 }), // "zoom" | "google-meet" | "jitsi"
  enlace: varchar("enlace", { length: 500 }),
  passwordZoom: varchar("password_zoom", { length: 100 }),

  // Capacidad
  aforoMaximo: integer("aforo_maximo").default(8),

  // Grabación
  grabacionUrl: varchar("grabacion_url", { length: 500 }),
  disponibleParaAlumnos: boolean("disponible_para_alumnos").default(false),

  estado: varchar("estado", { length: 50 }).default("programada"), // "programada" | "en-curso" | "completada" | "cancelada"
  createdAt: timestamp("created_at").defaultNow(),
});

/* -------------------------------------------------------------------------- */
/*  INSCRIPCIONES A CLASE                                                      */
/* -------------------------------------------------------------------------- */

export const inscripcionesClase = pgTable("inscripciones_clase", {
  id: serial("id").primaryKey(),
  claseId: integer("clase_id")
    .references(() => clasesEnVivo.id)
    .notNull(),
  usuarioId: integer("usuario_id")
    .references(() => usuarios.id)
    .notNull(),
  asistio: boolean("asistio"),
  timestampAsistencia: timestamp("timestamp_asistencia"),
  notaProfesor: text("nota_profesor"),
  calificacion: numeric("calificacion", { precision: 3, scale: 1 }),
  createdAt: timestamp("created_at").defaultNow(),
});

/* -------------------------------------------------------------------------- */
/*  PROGRESO DEL ALUMNO                                                        */
/* -------------------------------------------------------------------------- */

export const progresoAlumno = pgTable("progreso_alumno", {
  id: serial("id").primaryKey(),
  usuarioId: integer("usuario_id")
    .references(() => usuarios.id)
    .notNull(),
  cursoId: integer("curso_id")
    .references(() => cursos.id)
    .notNull(),
  leccionId: integer("leccion_id").references(() => lecciones.id),

  completada: boolean("completada").default(false),
  fechaCompletada: timestamp("fecha_completada"),
  tiempoVistoMinutos: integer("tiempo_visto_minutos"),
  porcentajeCompletado: integer("porcentaje_completado").default(0),

  createdAt: timestamp("created_at").defaultNow(),
});

/* -------------------------------------------------------------------------- */
/*  SUSCRIPCIONES                                                              */
/* -------------------------------------------------------------------------- */

export const suscripciones = pgTable("suscripciones", {
  id: serial("id").primaryKey(),
  usuarioId: integer("usuario_id")
    .references(() => usuarios.id)
    .notNull(),
  cursoId: integer("curso_id").references(() => cursos.id),

  plan: varchar("plan", { length: 50 }).notNull(), // "basico" | "plus" | "premium" | "anual"
  tipo: varchar("tipo", { length: 50 }).notNull(), // "mensual" | "trimestral" | "anual"
  precio: numeric("precio", { precision: 10, scale: 2 }).notNull(),

  fechaInicio: date("fecha_inicio").notNull(),
  fechaExpiracion: date("fecha_expiracion").notNull(),

  stripeSubscriptionId: varchar("stripe_subscription_id", { length: 255 }),
  estado: varchar("estado", { length: 50 }).default("activa"), // "activa" | "pausada" | "cancelada"

  createdAt: timestamp("created_at").defaultNow(),
});

/* -------------------------------------------------------------------------- */
/*  EVALUACIONES                                                               */
/* -------------------------------------------------------------------------- */

export const evaluaciones = pgTable("evaluaciones", {
  id: serial("id").primaryKey(),
  cursoId: integer("curso_id")
    .references(() => cursos.id)
    .notNull(),
  titulo: varchar("titulo", { length: 255 }).notNull(),
  descripcion: text("descripcion"),
  tipo: varchar("tipo", { length: 50 }), // "test" | "ejercicio" | "recital"
  contenidoJson: text("contenido_json"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const respuestasEvaluacion = pgTable("respuestas_evaluacion", {
  id: serial("id").primaryKey(),
  evaluacionId: integer("evaluacion_id")
    .references(() => evaluaciones.id)
    .notNull(),
  usuarioId: integer("usuario_id")
    .references(() => usuarios.id)
    .notNull(),
  respuestaJson: text("respuesta_json"),
  calificacion: numeric("calificacion", { precision: 5, scale: 2 }),
  feedbackProfesor: text("feedback_profesor"),
  createdAt: timestamp("created_at").defaultNow(),
});

/* -------------------------------------------------------------------------- */
/*  PROFESORES                                                                 */
/* -------------------------------------------------------------------------- */

export const profesores = pgTable("profesores", {
  id: serial("id").primaryKey(),
  usuarioId: integer("usuario_id")
    .references(() => usuarios.id)
    .notNull()
    .unique(),
  bio: text("bio"),
  foto: varchar("foto", { length: 500 }),
  especializaciones: varchar("especializaciones", { length: 500 }),
  anosExperiencia: integer("anos_experiencia"),
  certificaciones: text("certificaciones"),
  tasaHorariaSesionPrivada: numeric("tasa_horaria_sesion_privada", {
    precision: 10,
    scale: 2,
  }),
  disponible: boolean("disponible").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

/* -------------------------------------------------------------------------- */
/*  COMUNIDAD: FORO + INSIGNIAS                                                */
/* -------------------------------------------------------------------------- */

export const forumPosts = pgTable("forum_posts", {
  id: serial("id").primaryKey(),
  usuarioId: integer("usuario_id")
    .references(() => usuarios.id)
    .notNull(),
  titulo: varchar("titulo", { length: 255 }).notNull(),
  contenido: text("contenido").notNull(),
  categoria: varchar("categoria", { length: 100 }), // "teoria" | "practica" | "instrumentos" | "general"
  votos: integer("votos").default(0),
  respuestas: integer("respuestas").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insignias = pgTable("insignias", {
  id: serial("id").primaryKey(),
  nombre: varchar("nombre", { length: 255 }).notNull(),
  descripcion: text("descripcion"),
  icono: varchar("icono", { length: 500 }),
  criterio: varchar("criterio", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insigniasUsuario = pgTable("insignias_usuario", {
  id: serial("id").primaryKey(),
  usuarioId: integer("usuario_id")
    .references(() => usuarios.id)
    .notNull(),
  insigniaId: integer("insignia_id")
    .references(() => insignias.id)
    .notNull(),
  fechaGanada: timestamp("fecha_ganada").defaultNow(),
});

/* -------------------------------------------------------------------------- */
/*  AUTH.JS (NextAuth) — tablas estándar para Drizzle adapter                  */
/* -------------------------------------------------------------------------- */

export const accounts = pgTable(
  "accounts",
  {
    userId: integer("user_id")
      .notNull()
      .references(() => usuarios.id, { onDelete: "cascade" }),
    type: varchar("type", { length: 255 }).notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("provider_account_id", { length: 255 }).notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: text("id_token"),
    session_state: varchar("session_state", { length: 255 }),
  },
  (account) => [
    primaryKey({ columns: [account.provider, account.providerAccountId] }),
  ],
);

export const sessions = pgTable("sessions", {
  sessionToken: varchar("session_token", { length: 255 }).primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => usuarios.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verification_tokens",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => [primaryKey({ columns: [vt.identifier, vt.token] })],
);

/* -------------------------------------------------------------------------- */
/*  RELACIONES                                                                 */
/* -------------------------------------------------------------------------- */

export const instrumentosRelations = relations(instrumentos, ({ many }) => ({
  cursos: many(cursos),
}));

export const cursosRelations = relations(cursos, ({ one, many }) => ({
  instrumento: one(instrumentos, {
    fields: [cursos.instrumentoId],
    references: [instrumentos.id],
  }),
  profesor: one(usuarios, {
    fields: [cursos.profesorId],
    references: [usuarios.id],
  }),
  lecciones: many(lecciones),
  clasesEnVivo: many(clasesEnVivo),
}));

export const leccionesRelations = relations(lecciones, ({ one }) => ({
  curso: one(cursos, {
    fields: [lecciones.cursoId],
    references: [cursos.id],
  }),
}));

export const clasesEnVivoRelations = relations(clasesEnVivo, ({ one, many }) => ({
  curso: one(cursos, {
    fields: [clasesEnVivo.cursoId],
    references: [cursos.id],
  }),
  profesor: one(usuarios, {
    fields: [clasesEnVivo.profesorId],
    references: [usuarios.id],
  }),
  inscripciones: many(inscripcionesClase),
}));
