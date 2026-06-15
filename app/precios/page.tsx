import type { Metadata } from "next";
import { PlanesPrecios } from "@/components/home/PlanesPrecios";

export const metadata: Metadata = {
  title: "Precios",
  description: "Planes de suscripción de Academia de Música: Básico, Plus, Premium y Anual.",
};

const faqs = [
  {
    q: "¿Puedo probar antes de pagar?",
    a: "Sí. La primera lección de cada curso es gratuita y no necesitas tarjeta para registrarte.",
  },
  {
    q: "¿Puedo cambiar de plan o cancelar?",
    a: "Cuando quieras, desde tu dashboard. Sin permanencia ni penalizaciones.",
  },
  {
    q: "¿Las clases en vivo están incluidas?",
    a: "Depende del plan: Plus incluye 2 al mes y Premium clases ilimitadas. El plan Básico se centra en lecciones grabadas.",
  },
  {
    q: "¿Obtengo un certificado?",
    a: "Sí, los planes Plus, Premium y Anual incluyen certificados descargables al completar cada curso.",
  },
];

export default function PreciosPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-marca py-14 text-white">
        <div className="contenedor text-center">
          <h1 className="font-display text-4xl font-bold">Planes y precios</h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">
            Elige el plan que mejor se adapte a ti. Empieza gratis y cambia cuando quieras.
          </p>
        </div>
      </div>

      <PlanesPrecios conTitulo={false} />

      <section className="contenedor pb-20">
        <h2 className="mb-8 text-center font-display text-2xl font-bold">Preguntas frecuentes</h2>
        <div className="mx-auto max-w-3xl divide-y divide-gray-100 rounded-2xl border border-gray-100">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                {f.q}
                <span className="text-marca-purpura transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
