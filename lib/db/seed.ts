/**
 * Script de seed para la base de datos (Neon PostgreSQL).
 *
 * Uso: `npm run db:seed` (requiere DATABASE_URL y haber ejecutado db:push).
 * Toma los datos de ejemplo de `lib/demo-data.ts` y los inserta en las tablas
 * Drizzle reales. Es idempotente a nivel básico (limpia antes de insertar).
 */

import { db, hasDatabase } from "./client";
import {
  usuarios,
  instrumentos as tInstrumentos,
  cursos as tCursos,
  lecciones as tLecciones,
  clasesEnVivo as tClases,
} from "./schema";
import {
  instrumentos,
  profesores,
  cursos,
  lecciones,
  clasesEnVivo,
} from "../demo-data";

async function main() {
  if (!hasDatabase || !db) {
    console.error("❌ DATABASE_URL no está definido. Configura Neon antes de hacer seed.");
    process.exit(1);
  }

  console.log("🌱 Sembrando datos de ejemplo…");

  // Profesores (como usuarios con rol "profesor")
  for (const p of profesores) {
    await db
      .insert(usuarios)
      .values({
        id: p.id,
        email: p.email,
        nombre: p.nombre,
        rol: "profesor",
        foto: p.foto,
        bio: p.bio,
      })
      .onConflictDoNothing();
  }

  for (const i of instrumentos) {
    await db
      .insert(tInstrumentos)
      .values({
        id: i.id,
        nombre: i.nombre,
        slug: i.slug,
        descripcion: i.descripcion,
        icono: i.icono,
        dificultadInicial: i.dificultadInicial,
        edadRecomendadaMinima: i.edadRecomendadaMinima,
      })
      .onConflictDoNothing();
  }

  for (const c of cursos) {
    await db
      .insert(tCursos)
      .values({
        id: c.id,
        nombre: c.nombre,
        slug: c.slug,
        instrumentoId: c.instrumentoId,
        nivel: c.nivel,
        descripcion: c.descripcion,
        duracionSemanas: c.duracionSemanas,
        precioMensual: String(c.precioMensual),
        precioTrimestral: String(c.precioTrimestral),
        precioAnual: String(c.precioAnual),
        requisitos: c.requisitos,
        materialesIncluidos: c.materialesIncluidos.join("\n"),
        numeroLecciones: c.numeroLecciones,
        imagen: c.imagen,
        profesorId: c.profesorId,
        activo: c.activo,
      })
      .onConflictDoNothing();
  }

  for (const l of lecciones) {
    await db
      .insert(tLecciones)
      .values({
        id: l.id,
        cursoId: l.cursoId,
        numero: l.numero,
        titulo: l.titulo,
        descripcion: l.descripcion,
        duracionMinutos: l.duracionMinutos,
        videoUrl: l.videoUrl,
        pdfUrl: l.pdfUrl,
        audioReferenciaUrl: l.audioReferenciaUrl,
        contenidoHtml: l.contenidoHtml,
        objetivos: l.objetivos.join("\n"),
        orden: l.numero,
        publicada: l.publicada,
        gratuita: l.gratuita,
      })
      .onConflictDoNothing();
  }

  for (const cl of clasesEnVivo) {
    await db
      .insert(tClases)
      .values({
        id: cl.id,
        cursoId: cl.cursoId,
        profesorId: cl.profesorId,
        titulo: cl.titulo,
        descripcion: cl.descripcion,
        fecha: cl.fecha,
        horaInicio: cl.horaInicio,
        duracionMinutos: cl.duracionMinutos,
        plataforma: cl.plataforma,
        aforoMaximo: cl.aforoMaximo,
        estado: cl.estado,
        disponibleParaAlumnos: cl.grabacionDisponible,
      })
      .onConflictDoNothing();
  }

  console.log("✅ Seed completado.");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
