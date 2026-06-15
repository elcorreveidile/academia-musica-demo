"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";
import type { Instrumento } from "@/lib/types";
import { cn } from "@/lib/utils";

const niveles = [
  { value: "", label: "Todos los niveles" },
  { value: "iniciacion", label: "Iniciación" },
  { value: "intermedio", label: "Intermedio" },
  { value: "avanzado", label: "Avanzado" },
];

export function FiltrosCursos({ instrumentos }: { instrumentos: Instrumento[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const instrActual = params.get("instrumento") ?? "";
  const nivelActual = params.get("nivel") ?? "";

  const actualizar = useCallback(
    (clave: string, valor: string) => {
      const next = new URLSearchParams(params.toString());
      if (valor) next.set(clave, valor);
      else next.delete(clave);
      router.push(`${pathname}?${next.toString()}`);
    },
    [params, pathname, router],
  );

  return (
    <div className="space-y-6">
      {/* Buscador */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">Buscar</label>
        <input
          type="search"
          defaultValue={params.get("q") ?? ""}
          placeholder="Ej: guitarra, piano…"
          onChange={(e) => actualizar("q", e.target.value)}
          className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:border-marca-purpura focus:outline-none focus:ring-1 focus:ring-marca-purpura"
        />
      </div>

      {/* Instrumentos */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-700">Instrumento</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => actualizar("instrumento", "")}
            className={cn(
              "chip border",
              !instrActual
                ? "border-marca-purpura bg-primary-50 text-marca-purpura"
                : "border-gray-200 text-gray-600 hover:border-marca-purpura",
            )}
          >
            Todos
          </button>
          {instrumentos.map((i) => (
            <button
              key={i.id}
              onClick={() => actualizar("instrumento", i.slug)}
              className={cn(
                "chip border",
                instrActual === i.slug
                  ? "border-marca-purpura bg-primary-50 text-marca-purpura"
                  : "border-gray-200 text-gray-600 hover:border-marca-purpura",
              )}
            >
              {i.icono} {i.nombre}
            </button>
          ))}
        </div>
      </div>

      {/* Niveles */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-700">Nivel</h3>
        <div className="flex flex-col gap-2">
          {niveles.map((n) => (
            <label key={n.value} className="flex cursor-pointer items-center gap-2 text-sm text-gray-600">
              <input
                type="radio"
                name="nivel"
                checked={nivelActual === n.value}
                onChange={() => actualizar("nivel", n.value)}
                className="accent-marca-purpura"
              />
              {n.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
