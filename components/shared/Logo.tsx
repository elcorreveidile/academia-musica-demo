import Link from "next/link";

/** Logo de marca: pentagrama minimalista + nota + wordmark. */
export function Logo({ blanco = false }: { blanco?: boolean }) {
  const color = blanco ? "#ffffff" : "#8B5CF6";
  const texto = blanco ? "text-white" : "text-marca-oscuro";
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Academia de Música — inicio">
      <svg width="38" height="38" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {/* pentagrama */}
        {[14, 19, 24, 29, 34].map((y) => (
          <line key={y} x1="6" y1={y} x2="34" y2={y} stroke={color} strokeWidth="1.5" opacity="0.5" />
        ))}
        {/* nota corchea */}
        <circle cx="18" cy="32" r="5.5" fill={color} />
        <rect x="22.5" y="12" width="2.6" height="21" rx="1.3" fill={color} />
        <path d="M25 12c6 1.5 8 5 6.5 10 1-5-2.5-7.5-6.5-8.5z" fill={color} />
      </svg>
      <span className={`font-display text-lg font-bold leading-none ${texto}`}>
        Academia<span className="text-marca-purpura">{blanco ? "" : " "}</span>
        <span className="block text-[11px] font-medium tracking-widest text-marca-dorado">
          DE MÚSICA
        </span>
      </span>
    </Link>
  );
}
