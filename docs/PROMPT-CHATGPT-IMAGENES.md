# 🤖 Prompt para ChatGPT — generación de imágenes de marca

Prompt de encuadre para generar el set de imágenes corporativas **una a una** con
ChatGPT, siguiendo [`GUIA-IMAGENES.md`](GUIA-IMAGENES.md).

## Cómo usarlo

1. Abre ChatGPT (con generación de imágenes activa).
2. **Adjunta** `docs/GUIA-IMAGENES.md` y **pega** el prompt de abajo en el mismo mensaje.
3. Te devolverá una lista ordenada de imágenes → responde **"OK"**.
4. Ve escribiendo **"siguiente"** (o pidiendo cambios) y te las entregará una por una.

> **Avisos prácticos**
> - Para **logo y favicon**, recuérdale *"fondo transparente, PNG"* (los modelos a veces meten fondo blanco).
> - El **texto dentro de imágenes** (p. ej. el wordmark) puede salir con erratas; si pasa, pídele la versión sin texto y añade el nombre con la fuente real (Poppins) después.

---

## Prompt (copiar y pegar)

```
Vas a actuar como mi director de arte y generador de imágenes para un proyecto
de IDENTIDAD CORPORATIVA de una web: una plataforma educativa llamada
"Academia de Música" (clases de música en vivo + lecciones grabadas + comunidad).

Te adjunto un documento llamado "GUIA-IMAGENES.md". Es la fuente de verdad:
contiene la paleta, la tipografía, las reglas de marca y los prompts concretos
de cada imagen que hay que generar (favicon, logo, hero, iconos de instrumentos,
iconos de características, fotos de profesores, thumbnails de cursos, imágenes de
secciones, social media, cabeceras de email y placeholders).

== REGLAS GLOBALES (aplican a TODAS las imágenes) ==
- Paleta EXCLUSIVA: púrpura #8B5CF6 (principal), dorado #FCD34D (secundario),
  gris oscuro #1F2937, verde #10B981 (acento), gris claro #F3F4F6, blanco.
  No uses ningún otro color salvo que el prompt de esa imagen lo pida.
- Tipografía si hay texto: Poppins (títulos), Inter (cuerpo). Ninguna otra.
- Estilo: moderno, limpio, plano o semi-plano, inspirador pero profesional,
  inclusivo (personas diversas y sonrientes). Notas musicales y pentagramas
  sutiles como elementos recurrentes. No saturar: deja aire para texto overlay.
- Respeta SIEMPRE el tamaño/ratio y el fondo (transparente cuando se indique)
  que pida cada elemento en el documento.

== FORMA DE TRABAJAR (MUY IMPORTANTE) ==
1. NO generes varias imágenes en una sola, ni un collage, ni una "hoja de
   contactos". UNA imagen independiente por cada turno.
2. Primero, antes de generar nada, hazme una LISTA NUMERADA de todas las
   imágenes del documento en el orden en que las vas a crear, con su tamaño y
   formato. Espera mi OK.
3. Después generaremos UNA imagen por mensaje. En cada turno:
   a) Dime qué número/elemento vas a crear y con qué especificaciones
      (descripción, tamaño en px, ratio, fondo, si lleva o no texto).
   b) Genera SOLO esa imagen.
   c) Termina preguntándome: "¿La apruebas o la ajusto? Escribe 'siguiente'
      para continuar, o dime los cambios."
4. No avances a la siguiente imagen hasta que yo escriba "siguiente" (o pida
   cambios). Si pido cambios, regenera SOLO esa imagen.
5. Si un elemento tiene varias variantes (p.ej. 7 iconos de instrumentos o 6
   thumbnails de cursos), trátalos como imágenes separadas, una por turno.
6. Mantén coherencia visual entre todas: mismo estilo, mismo grosor de línea,
   misma "familia" de ilustración. Si en una imagen estableces un estilo,
   reutilízalo en las demás del mismo grupo.

Cuando estés listo, responde solo con la LISTA NUMERADA del punto 2 y espera mi
confirmación. No generes ninguna imagen todavía.
```
