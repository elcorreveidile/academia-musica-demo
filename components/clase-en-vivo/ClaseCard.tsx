"use client";

import { useState } from "react";
import type { ClaseEnVivo } from "@/lib/types";
import { formatFecha } from "@/lib/utils";

const plataformaLabel: Record<string, string> = {
  zoom: "Zoom",
  "google-meet": "Google Meet",
  jitsi: "Jitsi",
};

export function ClaseCard({
  clase,
  cursoNombre,
  profesorNombre,
}: {
  clase: ClaseEnVivo;
  cursoNombre?: string;
  profesorNombre?: string;
}) {
  const [inscrito, setInscrito] = useState(false);
  const completa = clase.inscritos >= clase.aforoMaximo;
  const plazasLibres = clase.aforoMaximo - clase.inscritos;

  return (
    <div className="tarjeta flex flex-col p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="chip bg-primary-50 text-marca-purpura">
          {plataformaLabel[clase.plataforma] ?? clase.plataforma}
        </span>
        {clase.estado === "completada" ? (
          <span className="chip bg-gray-100 text-gray-500">Finalizada</span>
        ) : (
          <span className="chip bg-marca-exito/10 text-marca-exito">Programada</span>
        )}
      </div>

      <h3 className="font-display text-lg font-semibold leading-snug">{clase.titulo}</h3>
      <p className="mt-1 text-sm text-gray-500">{clase.descripcion}</p>

      <dl className="mt-4 space-y-1.5 text-sm text-gray-600">
        <div className="flex items-center gap-2">📅 <span className="capitalize">{formatFecha(clase.fecha)}</span></div>
        <div className="flex items-center gap-2">🕐 {clase.horaInicio}h · {clase.duracionMinutos} min</div>
        {cursoNombre && <div className="flex items-center gap-2">🎵 {cursoNombre}</div>}
        {profesorNombre && <div className="flex items-center gap-2">👩‍🏫 {profesorNombre}</div>}
      </dl>

      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
        {clase.estado === "completada" ? (
          clase.grabacionDisponible ? (
            <a href="#" className="btn-secundario w-full !py-2 !text-sm">▶️ Ver grabación</a>
          ) : (
            <span className="text-sm text-gray-400">Grabación no disponible</span>
          )
        ) : (
          <>
            <span className="text-sm text-gray-500">
              {completa ? "Aforo completo" : `${plazasLibres} plazas libres`}
            </span>
            <button
              disabled={completa && !inscrito}
              onClick={() => setInscrito((v) => !v)}
              className={
                inscrito
                  ? "btn-dorado !py-2 !text-sm"
                  : completa
                    ? "cursor-not-allowed rounded-full bg-gray-100 px-5 py-2 text-sm font-semibold text-gray-400"
                    : "btn-primario !py-2 !text-sm"
              }
            >
              {inscrito ? "✓ Inscrito" : completa ? "Completo" : "Inscribirme"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
