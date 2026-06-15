/** Tipos del dominio — Academia de Música */

export type Nivel = "iniciacion" | "intermedio" | "avanzado";
export type Rol = "alumno" | "profesor" | "admin";

export interface Instrumento {
  id: number;
  nombre: string;
  slug: string;
  descripcion: string;
  icono: string; // emoji
  dificultadInicial: "fácil" | "media" | "difícil";
  edadRecomendadaMinima: number;
}

export interface Profesor {
  id: number;
  nombre: string;
  email: string;
  foto: string;
  bio: string;
  especializaciones: string;
  anosExperiencia: number;
  certificaciones: string;
  disponible: boolean;
}

export interface Leccion {
  id: number;
  cursoId: number;
  numero: number;
  titulo: string;
  descripcion: string;
  duracionMinutos: number;
  videoUrl: string;
  pdfUrl?: string;
  audioReferenciaUrl?: string;
  contenidoHtml: string;
  objetivos: string[];
  publicada: boolean;
  gratuita: boolean;
}

export interface Curso {
  id: number;
  nombre: string;
  slug: string;
  instrumentoId: number;
  nivel: Nivel;
  descripcion: string;
  duracionSemanas: number;
  precioMensual: number;
  precioTrimestral: number;
  precioAnual: number;
  requisitos: string;
  materialesIncluidos: string[];
  numeroLecciones: number;
  imagen: string;
  profesorId: number;
  activo: boolean;
}

export interface ClaseEnVivo {
  id: number;
  cursoId: number;
  profesorId: number;
  titulo: string;
  descripcion: string;
  fecha: string; // ISO date
  horaInicio: string; // HH:mm
  duracionMinutos: number;
  plataforma: "zoom" | "google-meet" | "jitsi";
  aforoMaximo: number;
  inscritos: number;
  estado: "programada" | "en-curso" | "completada" | "cancelada";
  grabacionDisponible: boolean;
}

export interface ForumPost {
  id: number;
  autor: string;
  autorFoto: string;
  titulo: string;
  contenido: string;
  categoria: "teoria" | "practica" | "instrumentos" | "general";
  votos: number;
  respuestas: number;
  fecha: string;
}

export interface PlanPrecio {
  id: string;
  nombre: string;
  precio: number;
  periodo: string;
  destacado: boolean;
  ahorro?: string;
  caracteristicas: string[];
  cta: string;
}

export interface Testimonio {
  id: number;
  nombre: string;
  foto: string;
  instrumento: string;
  texto: string;
  estrellas: number;
}

export interface Insignia {
  id: number;
  nombre: string;
  descripcion: string;
  icono: string;
  criterio: string;
  ganada: boolean;
}
