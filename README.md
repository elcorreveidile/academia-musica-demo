# 🎵 Academia de Música — Demo

Plataforma educativa híbrida de clases musicales: **clases en vivo + lecciones grabadas + comunidad**. Demo construida siguiendo el Plan Maestro.

> **Claim:** «Aprende música desde cero. Clases en vivo + lecciones grabadas.»

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (paleta de marca: púrpura `#8B5CF6` + dorado `#FCD34D`)
- **Drizzle ORM** + **Neon** (PostgreSQL)
- **Auth.js (NextAuth v5)** con Magic Link vía **Resend**
- **Stripe** para suscripciones
- Deploy en **Vercel**

## Cómo funciona la demo

El sitio está pensado para **funcionar sin base de datos**: si `DATABASE_URL` no
está definido, toda la capa de datos (`lib/queries.ts`) lee de los datos de
ejemplo en `lib/demo-data.ts`. Así la demo renderiza al instante en Vercel.

Cuando configures Neon, los datos pasan a leerse de PostgreSQL (ver
`lib/db/`), y puedes sembrar con `npm run db:seed`.

## Desarrollo

```bash
npm install
cp .env.example .env   # rellena las variables que necesites
npm run dev            # http://localhost:3000
```

### Scripts

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run db:push` | Sincroniza el schema Drizzle con la BD |
| `npm run db:seed` | Inserta los datos de ejemplo en la BD |
| `npm run db:studio` | Drizzle Studio |

## Estructura

```
app/                  Páginas (App Router) y API routes
  page.tsx            Home / landing
  cursos/             Catálogo + detalle de curso
  curso/[slug]/...    Reproductor de lecciones
  clases-en-vivo/     Calendario de clases en vivo
  comunidad/          Foro + recitales + leaderboard
  profesores/         Directorio de profesores
  precios/            Planes de suscripción + FAQ
  dashboard/          Panel del alumno (progreso, insignias)
  auth/               Sign in (Magic Link) + verify
  api/                Endpoints REST + auth + cron de recordatorios
components/           UI por dominio (home, cursos, leccion, clase-en-vivo, shared)
lib/                  Datos, queries, auth, email, stripe, utils, schema Drizzle
public/               Assets de marca (favicon, iconos SVG, OG image)
```

## Funcionalidades incluidas (MVP)

- ✅ Home/landing con hero, características, cursos destacados, profesores, testimonios, planes y CTA
- ✅ Catálogo de cursos con filtros por instrumento, nivel y búsqueda
- ✅ Detalle de curso con temario, requisitos, materiales, profesor y precios
- ✅ Reproductor de lecciones (vídeo + objetivos + materiales + navegación + marcar completada)
- ✅ Calendario de clases en vivo con inscripción y grabaciones
- ✅ Comunidad: foro, recitales, jam sessions y leaderboard
- ✅ Dashboard del alumno: progreso, insignias, próxima clase, feedback
- ✅ Autenticación Magic Link (UI + scaffolding NextAuth/Resend)
- ✅ Plantillas de email (bienvenida, recordatorio, lección, evaluación) en `lib/email.ts`
- ✅ Schema Drizzle completo + seed
- ✅ Identidad de marca: logo, favicon, iconos SVG de instrumentos y características, OG image

## Nota sobre las imágenes

El Plan Maestro (sección 10) describe un set completo de imágenes a generar con
DALL·E / Midjourney. En esta demo:

- Los **assets vectoriales** (logo, favicon, iconos de instrumentos y de
  características, imagen OG) se han creado como **SVG reales** en la paleta de
  marca, dentro de `public/icons/` y `public/images/social/`.
- Las **fotos** (hero, thumbnails de cursos, retratos de profesores) usan
  imágenes de Unsplash / pravatar como placeholders de alta calidad.
- Los prompts de generación del plan se conservan para producir el set raster
  definitivo cuando se disponga de una herramienta de generación de imágenes.

## Variables de entorno

Ver `.env.example`. Ninguna es obligatoria para que la demo arranque; añádelas
para activar base de datos real, login por email y pagos.
