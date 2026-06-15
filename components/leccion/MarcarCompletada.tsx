"use client";

import { useState } from "react";

/** Botón cliente para marcar una lección como completada (estado local en la demo). */
export function MarcarCompletada() {
  const [completada, setCompletada] = useState(false);

  return (
    <button
      onClick={() => setCompletada((v) => !v)}
      className={completada ? "btn-dorado" : "btn-primario"}
    >
      {completada ? "✓ Lección completada" : "Marcar como completada"}
    </button>
  );
}
