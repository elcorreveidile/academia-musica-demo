"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const enlaces = [
  { href: "/cursos", label: "Cursos" },
  { href: "/clases-en-vivo", label: "Clases en vivo" },
  { href: "/profesores", label: "Profesores" },
  { href: "/comunidad", label: "Comunidad" },
  { href: "/precios", label: "Precios" },
];

export function Navbar() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="contenedor flex h-16 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-7 md:flex">
          {enlaces.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="text-sm font-medium text-gray-600 transition hover:text-marca-purpura"
            >
              {e.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/auth/signin" className="text-sm font-semibold text-marca-purpura">
            Entrar
          </Link>
          <Link href="/cursos" className="btn-primario !py-2 !text-sm">
            Empezar gratis
          </Link>
        </div>

        <button
          onClick={() => setAbierto((v) => !v)}
          className="rounded-lg p-2 text-gray-600 md:hidden"
          aria-label="Abrir menú"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {abierto ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {abierto && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="contenedor flex flex-col gap-1 py-3">
            {enlaces.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                onClick={() => setAbierto(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-primary-50"
              >
                {e.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 px-3">
              <Link href="/auth/signin" className="btn-secundario flex-1 !py-2 !text-sm">
                Entrar
              </Link>
              <Link href="/cursos" className="btn-primario flex-1 !py-2 !text-sm">
                Empezar
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
