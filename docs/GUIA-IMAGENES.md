# 🎨 Guía de marca e imágenes — Academia de Música

Documento de referencia para generar el set de imágenes definitivo (extraído de
la Sección 10 del Plan Maestro). Las herramientas recomendadas para generar el
material raster son **DALL·E 3**, **Midjourney** o **Stable Diffusion**.

> **Estado actual de la demo:** los assets *vectoriales* (logo, favicon, iconos
> de instrumentos y de características, imagen OG) ya existen como **SVG reales**
> en `public/icons/` y `public/images/social/`. Las *fotos* (hero, thumbnails de
> cursos, retratos de profesores) usan placeholders de Unsplash/pravatar. Este
> documento contiene los prompts para producir el set raster final.

---

## A. Identidad visual

### Paleta de colores

| Uso | Color |
|-----|-------|
| Principal (púrpura musical) | `#8B5CF6` |
| Secundario (dorado cálido) | `#FCD34D` |
| Oscuro (gris) | `#1F2937` |
| Acento (verde progreso) | `#10B981` |
| Neutro claro | `#F3F4F6` |
| Blanco | `#FFFFFF` |

### Tipografía

- **Títulos:** Poppins (Bold, Semi-bold)
- **Cuerpo:** Inter (Regular, Medium)

---

## B. Favicon y logo

### Favicon (1024×1024 → múltiples tamaños)

```
Favicon design: Minimalist musical staff with one eighth note.
Purple color (#8B5CF6). Clean, modern, recognizable at small sizes.
Style: flat design, bold stroke. No text.
```

Archivos: `favicon.ico` (16/32), `favicon-192.png`, `favicon-512.png`, `apple-touch-icon.png` (180×180).
*(En la demo: `public/favicon.svg`.)*

### Logo principal (1200×400, ratio 3:1)

```
Logo design for music academy:
Left side: minimalist musical staff with flowing notes in purple (#8B5CF6).
Right side: "Academia de Música" in Poppins Bold, dark gray (#1F2937).
Clean, modern, professional. Style: flat design, elegant proportions.
```

### Logo símbolo (solo icono, 400×400)

```
Just the pentagrama + notes, without text.
Purple on transparent background.
Can be used as app icon, social media avatar, watermark.
```

---

## C. Imágenes hero y landing

### Hero background (1920×600)

```
Hero background image for music academy landing page:
- Vibrant, inspiring atmosphere
- Musical elements: blurred musical notes, pentagrama, instruments silhouettes
- Gradient: from purple (#8B5CF6) to darker purple, with touches of gold (#FCD34D)
- A diverse group of musicians (guitarist, pianist, vocalist) playing together
- Modern, energetic, inclusive feeling
- Style: illustration or photography
- Text overlay area: left side (keep clear for: "Learn Music. Live Together. Grow.")
- Resolution: 1920x600px
```

### "Why Choose Us" (1400×600)

```
Illustration showing the benefits of online music learning:
- Student with headphones listening to video lesson
- Laptop screen showing a live class with teacher
- Community icons: people learning together
- Progress chart with notes going up
- Soft gradient background: purple to white
- Modern, flat design style. Warm, welcoming atmosphere.
- Resolution: 1400x600px
```

### Patrón de fondo de cursos (repetible)

```
Subtle background pattern for courses section:
- Faint musical notes scattered
- Light gold (#FCD34D) dots
- Barely visible pentagrama lines
- Very subtle, doesn't distract from content
- Color: light gray (#F3F4F6) as base. Opacity: very low (5-10%).
```

---

## D. Iconos por instrumento (200×200 cada uno)

**Estilo común:** flat design, formas redondeadas, colores de marca, icono coloreado + borde, limpio y moderno.
*(En la demo ya creados como SVG en `public/icons/instrumentos/`.)*

1. **Guitarra** — `Acoustic guitar in purple (#8B5CF6), flat design, front view, simple shapes, recognizable at small sizes. Round it with rounded rectangle border.`
2. **Piano** — `Piano keyboard, flat design, top-down view, purple (#8B5CF6), white and black keys, simple geometric shapes.`
3. **Voz / Canto** — `Microphone with musical notes, flat design, purple (#8B5CF6), dynamic, representing singing.`
4. **Bajo** — `Bass guitar, flat design, simplified shape, purple (#8B5CF6), distinctive bass body shape.`
5. **Batería** — `Drum kit from top view, flat design, purple (#8B5CF6), simplified cymbal and drum shapes.`
6. **Ukelele** — `Ukulele, flat design, front view, purple (#8B5CF6), small, cute, recognizable shape.`
7. **Violín** — `Violin with bow, flat design, side view, purple (#8B5CF6), elegant curved shapes.`

Archivos: `public/icons/instrumentos/{guitarra,piano,voz,bajo,bateria,ukelele,violin}.svg`

---

## E. Iconos de características (150×150 cada uno)

*(En la demo ya creados como SVG en `public/icons/features/`.)*

1. **Video Lessons** — `Video play button + books. Purple background, gold play button. On-demand learning.`
2. **Live Classes** — `People on video call (multiple faces). Purple, gold highlights. Synchronous learning, community.`
3. **Community** — `Multiple people in circle holding hands. Purple, gold accents. Connection, shared learning.`
4. **Progress Tracking** — `Chart going up with checkmarks. Green (#10B981) accents on purple. Measurable progress.`
5. **Certificates** — `Ribbon/badge with star. Gold (#FCD34D) and purple. Achievement, credentials.`

Archivos: `public/icons/features/{video-lessons,live-classes,community,progress,certificates}.svg`

---

## F. Fotos de profesores (400×400, cuadrado)

```
Professional headshot style images of music teachers:
- Diverse group (different ages, genders, ethnicities)
- Each teacher with their main instrument
- Warm, approachable expressions
- Soft background (neutral, blurred)
- Professional but friendly vibe, consistent lighting, clean modern style
```

Ejemplo (Guitarra): `Professional headshot: Music teacher, 40s, male, holding acoustic guitar, warm smile, brown hair, light background, studio photography style, friendly and approachable expression. High quality.`

Archivos: `public/images/profesores/profesor-{guitarra,piano,voz,bajo,bateria,violin}.jpg`

---

## G. Imágenes de cursos / thumbnails (600×400, 4:3)

```
Course thumbnail images for music academy:
- Each represents a different instrument/course
- Vibrant, inspiring, modern aesthetic, instrument prominent
- Musical elements (notes, staff, rhythm patterns)
- Gradient backgrounds using brand colors (purple to gold)
- Text overlay area reserved (top/bottom). Consistent style across all.
```

Ejemplos:
- **Guitarra Iniciación** — `Colorful acoustic guitar with musical notes flowing around it. Purple to gold gradient background. Modern, energetic, welcoming.`
- **Piano Iniciación** — `Piano keyboard with light beams and musical notes. Peaceful but engaging atmosphere. Purple and white color scheme.`

Archivos: `public/images/cursos/{guitarra-iniciacion,guitarra-intermedio,piano-iniciacion,voz-iniciacion,bajo-iniciacion,bateria-iniciacion}.jpg`

---

## H. Imágenes de secciones (800×600)

1. **Getting Started** — `Beginner with a guitar, excited expression, comfortable home setup with laptop. Warm, encouraging. Purple and gold accents.`
2. **Live Classes** — `Students on a video call with teacher, smiling, engaged. Teacher in center showing something on screen. Modern, connected, friendly.`
3. **Community** — `Musicians playing together, performing, sharing. Diverse group, different instruments. Celebration of collective music-making. Purple and gold.`
4. **Progress & Achievements** — `Student celebrating with badge/certificate. Growth visualization: notes going up. Achievement, pride, progress. Green accents (#10B981).`

Archivos: `public/images/secciones/{getting-started,live-classes,community,progress}.jpg`

---

## I. Placeholders y avatares

- **Avatar:** iniciales en círculo con color de la paleta (púrpura/dorado/verde/gris), texto blanco Poppins Bold. Tamaños 100/50/40 px.
- **No-image (400×300):** fondo gris suave (`#E5E7EB`), nota musical centrada en gris claro, simple.

Archivos: `public/images/placeholders/`

---

## J. Social media

1. **OG image (1200×630)** — `"Learn Music. Live Together. Grow." Diverse students, instruments, academy branding, CTA. Purple and gold.` → *(en la demo: `public/images/social/og-image.svg`)*
2. **Instagram (1080×1080)** — `Course title, instrument image, instructor name, "Starts [DATE]"/"Enroll Now". Brand colors and fonts.`
3. **Testimonial (1000×1000)** — `Student with instrument, smiling, achievement badge overlay. "From zero to hero in [X weeks]". Inspirational.`

Archivos: `public/images/social/`

---

## K. Email — header (600×200)

```
Email header image:
Academia de Música logo on left, musical elements subtly in background,
purple to white gradient. Simple, professional, branded.
```

Archivos: `public/images/email/header-{bienvenida,recordatorio,certificado}.jpg`

---

## L. Favicon set — checklist

```
✓ favicon.ico (16/32/64)   ✓ favicon-16x16.png   ✓ favicon-32x32.png
✓ favicon-64x64.png        ✓ favicon-192x192.png ✓ favicon-512x512.png
✓ apple-touch-icon.png (180×180)  ✓ mstile-150x150.png  ✓ site.webmanifest
```

---

## M. Reglas de marca al generar

1. **Colores permitidos:** solo los de la paleta (A).
2. **Tipografía en imágenes:** Poppins (títulos), Inter (cuerpo). Ninguna otra.
3. **Estilo:** moderno, limpio, accesible, inspirador pero profesional, inclusivo, plano/semi-plano.
4. **Elementos recurrentes:** notas musicales sutiles, pentagramas finos de fondo, instrumentos destacados, personas diversas y sonrientes.
5. **Espacios en blanco:** deja área libre para texto overlay; no saturar.

## N. Optimización antes de commitear

- Compresión: TinyPNG / ImageOptim
- SVG: SVGO
- Batch: ImageMagick
- Validar con Lighthouse (imágenes optimizadas, responsive correcto)

---

## Estructura de carpetas objetivo

```
public/
├── favicon.svg / favicon-*.png / apple-touch-icon.png / site.webmanifest
├── icons/
│   ├── instrumentos/  (guitarra, piano, voz, bajo, bateria, ukelele, violin .svg)
│   └── features/      (video-lessons, live-classes, community, progress, certificates .svg)
└── images/
    ├── hero/          (landing-hero, why-choose-us, background-pattern)
    ├── profesores/    (profesor-* .jpg)
    ├── cursos/        (*-iniciacion / *-intermedio .jpg)
    ├── secciones/     (getting-started, live-classes, community, progress)
    ├── social/        (og-image, instagram-*, testimonial-template)
    ├── email/         (header-* .jpg)
    └── placeholders/  (no-image, avatar-default)
```
