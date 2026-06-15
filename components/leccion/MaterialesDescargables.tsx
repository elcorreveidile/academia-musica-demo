import type { Leccion } from "@/lib/types";

export function MaterialesDescargables({ leccion }: { leccion: Leccion }) {
  const materiales = [
    leccion.pdfUrl && { icono: "📄", label: "Partitura / ejercicios (PDF)", url: leccion.pdfUrl },
    leccion.audioReferenciaUrl && { icono: "🎧", label: "Audio de referencia (MP3)", url: leccion.audioReferenciaUrl },
  ].filter(Boolean) as { icono: string; label: string; url: string }[];

  if (materiales.length === 0) return null;

  return (
    <div className="rounded-2xl border border-gray-100 p-5">
      <h3 className="mb-3 font-display text-base font-semibold">Materiales de la lección</h3>
      <ul className="space-y-2">
        {materiales.map((m) => (
          <li key={m.label}>
            <a
              href={m.url}
              className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-primary-50 hover:text-marca-purpura"
            >
              <span className="text-xl">{m.icono}</span>
              {m.label}
              <span className="ml-auto text-gray-400">↓</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
