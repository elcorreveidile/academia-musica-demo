/**
 * Plantillas y envío de emails con Resend.
 *
 * Las funciones generan el HTML de cada email transaccional descrito en el plan
 * maestro. El envío real solo ocurre si `RESEND_API_KEY` está definido; en caso
 * contrario se registra en consola (útil en la demo).
 */

import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const from = process.env.EMAIL_FROM ?? "Academia de Música <onboarding@resend.dev>";
const resend = apiKey ? new Resend(apiKey) : null;

const COLOR_PRIMARIO = "#8B5CF6";

function layout(titulo: string, cuerpoHtml: string): string {
  return `
  <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;">
    <div style="background:linear-gradient(135deg,${COLOR_PRIMARIO},#6d28d9);padding:32px;text-align:center;">
      <h1 style="color:#fff;font-family:Poppins,Arial,sans-serif;margin:0;font-size:22px;">🎵 Academia de Música</h1>
    </div>
    <div style="padding:32px;color:#1F2937;line-height:1.6;">
      <h2 style="font-family:Poppins,Arial,sans-serif;color:#1F2937;">${titulo}</h2>
      ${cuerpoHtml}
    </div>
    <div style="padding:24px;text-align:center;color:#9CA3AF;font-size:12px;">
      © ${new Date().getFullYear()} Academia de Música · Aprende música desde cero
    </div>
  </div>`;
}

async function enviar(to: string, subject: string, html: string) {
  if (!resend) {
    console.log(`[email:demo] Para: ${to} · Asunto: ${subject}`);
    return { simulado: true };
  }
  return resend.emails.send({ from, to, subject, html });
}

export function emailBienvenida(nombre: string, curso: string, link: string, numLecciones: number, fechaClase: string) {
  const html = layout("¡Bienvenido a tu viaje musical!", `
    <p>Hola <strong>${nombre}</strong>,</p>
    <p>¡Felicidades por dar el primer paso! Tu primer curso <strong>"${curso}"</strong> ya está listo.</p>
    <p><a href="${link}" style="display:inline-block;background:${COLOR_PRIMARIO};color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;">Ir a mi curso →</a></p>
    <p>Tienes acceso a <strong>${numLecciones} lecciones grabadas</strong> y tu próxima clase en vivo es el <strong>${fechaClase}</strong>.</p>
  `);
  return { subject: "¡Bienvenido a Academia de Música!", html };
}

export function emailRecordatorioClase(nombre: string, instrumento: string, hora: string, profesor: string, zoomLink: string, companeros: number) {
  const html = layout(`Tu clase de ${instrumento} es mañana`, `
    <p>¡Hola <strong>${nombre}</strong>!</p>
    <p>Mañana a las <strong>${hora}</strong> tienes clase en vivo con <strong>${profesor}</strong>.</p>
    <p>🎵 <a href="${zoomLink}">Únete a la clase</a><br/>⏰ Duración: 60 minutos<br/>👥 Compañeros: ${companeros} alumnos más</p>
    <p>Prepárate, ¡será increíble!</p>
  `);
  return { subject: `Tu clase de ${instrumento} es mañana a las ${hora}`, html };
}

export function emailLeccionCompletada(nombre: string, leccion: string, curso: string, profesor: string, feedback: string, siguiente: string) {
  const html = layout("¡Lección completada!", `
    <p>¡Excelente <strong>${nombre}</strong>!</p>
    <p>Completaste la lección <strong>"${leccion}"</strong> de ${curso}.</p>
    <blockquote style="border-left:4px solid ${COLOR_PRIMARIO};padding-left:16px;color:#4B5563;">💬 ${profesor}: "${feedback}"</blockquote>
    <p>👉 Siguiente lección: <strong>${siguiente}</strong></p>
  `);
  return { subject: "¡Lección completada! Feedback de tu profesor", html };
}

export function emailEvaluacionCalificada(nombre: string, evaluacion: string, profesor: string, puntuacion: number, feedback: string) {
  const html = layout(`Tu evaluación fue calificada: ${puntuacion}/10`, `
    <p>Hola <strong>${nombre}</strong>,</p>
    <p>${profesor} calificó tu evaluación <strong>"${evaluacion}"</strong>.</p>
    <p>📊 Tu puntaje: <strong>${puntuacion}/10</strong><br/>💬 Comentarios: ${feedback}</p>
    <p>Continúa esforzándote, ¡vas muy bien!</p>
  `);
  return { subject: `Tu evaluación fue calificada: ${puntuacion}/10`, html };
}

export async function sendBienvenida(to: string, nombre: string, curso: string, link: string, numLecciones: number, fechaClase: string) {
  const { subject, html } = emailBienvenida(nombre, curso, link, numLecciones, fechaClase);
  return enviar(to, subject, html);
}

export async function sendRecordatorioClase(to: string, nombre: string, instrumento: string, hora: string, profesor: string, zoomLink: string, companeros: number) {
  const { subject, html } = emailRecordatorioClase(nombre, instrumento, hora, profesor, zoomLink, companeros);
  return enviar(to, subject, html);
}
