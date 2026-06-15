import Link from "next/link";
import { listPlanes } from "@/lib/queries";
import { formatEuro } from "@/lib/utils";

export async function PlanesPrecios({ conTitulo = true }: { conTitulo?: boolean }) {
  const planes = await listPlanes();

  return (
    <section className="contenedor py-20">
      {conTitulo && (
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold">Planes para cada músico</h2>
          <p className="mt-3 text-gray-500">
            Empieza gratis con tu primera lección. Cambia o cancela cuando quieras.
          </p>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-4">
        {planes.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex flex-col rounded-2xl border p-6 ${
              plan.destacado
                ? "border-marca-purpura bg-white shadow-lg ring-2 ring-marca-purpura"
                : "border-gray-100 bg-white shadow-sm"
            }`}
          >
            {plan.destacado && (
              <span className="chip absolute -top-3 left-1/2 -translate-x-1/2 bg-marca-purpura text-white">
                Más popular
              </span>
            )}
            <h3 className="font-display text-lg font-semibold">{plan.nombre}</h3>
            <div className="mt-3 flex items-end gap-1">
              <span className="font-display text-3xl font-bold">{formatEuro(plan.precio)}</span>
              <span className="mb-1 text-sm text-gray-400">{plan.periodo}</span>
            </div>
            {plan.ahorro && (
              <span className="mt-1 text-sm font-semibold text-marca-exito">{plan.ahorro}</span>
            )}

            <ul className="my-6 flex-1 space-y-3 text-sm">
              {plan.caracteristicas.map((c) => (
                <li key={c} className="flex gap-2 text-gray-600">
                  <span className="text-marca-exito">✓</span>
                  {c}
                </li>
              ))}
            </ul>

            <Link
              href="/auth/signin"
              className={plan.destacado ? "btn-primario w-full" : "btn-secundario w-full"}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
