import Link from "next/link";
import Image from "next/image";

/**
 * Logo de marca.
 * - Variante por defecto (clara): logo horizontal real con wordmark.
 * - Variante `blanco` (fondos oscuros): símbolo SVG + wordmark en blanco.
 */
export function Logo({ blanco = false }: { blanco?: boolean }) {
  if (blanco) {
    return (
      <Link href="/" className="flex items-center gap-2.5" aria-label="Academia de Música — inicio">
        <svg width="34" height="34" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          {[14, 19, 24, 29, 34].map((y) => (
            <line key={y} x1="6" y1={y} x2="34" y2={y} stroke="#ffffff" strokeWidth="1.5" opacity="0.5" />
          ))}
          <circle cx="18" cy="32" r="5.5" fill="#ffffff" />
          <rect x="22.5" y="12" width="2.6" height="21" rx="1.3" fill="#ffffff" />
          <path d="M25 12c6 1.5 8 5 6.5 10 1-5-2.5-7.5-6.5-8.5z" fill="#ffffff" />
        </svg>
        <span className="font-display text-lg font-bold leading-none text-white">
          Academia
          <span className="block text-[11px] font-medium tracking-widest text-marca-dorado">
            DE MÚSICA
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" className="flex items-center" aria-label="Academia de Música — inicio">
      <Image
        src="/brand/logo-horizontal.png"
        alt="Academia de Música"
        width={600}
        height={147}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
