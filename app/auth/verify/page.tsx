import Link from "next/link";
import { Logo } from "@/components/shared/Logo";

export default function VerifyPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>
        <div className="mb-3 text-5xl">✉️</div>
        <h1 className="font-display text-2xl font-bold">Comprueba tu email</h1>
        <p className="mt-3 text-sm text-gray-600">
          Te hemos enviado un enlace de acceso. Ábrelo desde el mismo dispositivo para entrar
          en tu cuenta.
        </p>
        <Link href="/" className="btn-secundario mt-6 w-full">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
