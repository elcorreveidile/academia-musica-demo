"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { esEmailValido } from "@/lib/validators";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!esEmailValido(email)) {
      setError("Introduce un email válido.");
      return;
    }
    setError("");
    // En producción: await signIn("resend", { email, callbackUrl: "/dashboard" })
    // En la demo simulamos el envío del magic link.
    setEnviado(true);
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>

        {enviado ? (
          <div className="text-center">
            <div className="mb-3 text-5xl">📧</div>
            <h1 className="font-display text-2xl font-bold">Revisa tu correo</h1>
            <p className="mt-3 text-sm text-gray-600">
              Te hemos enviado un enlace mágico a <strong>{email}</strong>. Haz clic en él para
              entrar — sin contraseñas.
            </p>
            <p className="mt-4 text-xs text-gray-400">
              (Demo: en producción esto envía un Magic Link real con Resend.)
            </p>
            <button onClick={() => setEnviado(false)} className="btn-secundario mt-6 w-full">
              Usar otro email
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-center font-display text-2xl font-bold">Entra o crea tu cuenta</h1>
            <p className="mt-2 text-center text-sm text-gray-500">
              Te enviaremos un enlace mágico. Sin contraseñas que recordar.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-marca-purpura focus:outline-none focus:ring-1 focus:ring-marca-purpura"
                />
                {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
              </div>

              <button type="submit" className="btn-primario w-full">
                Enviar enlace mágico
              </button>
            </form>

            <p className="mt-6 text-center text-xs text-gray-400">
              Al continuar aceptas nuestros términos y política de privacidad.
            </p>
          </>
        )}

        <div className="mt-6 border-t border-gray-100 pt-6 text-center text-sm">
          <Link href="/cursos" className="text-marca-purpura hover:underline">
            ← Volver al catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}
