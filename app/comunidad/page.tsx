import type { Metadata } from "next";
import Image from "next/image";
import { listForumPosts } from "@/lib/queries";
import { formatFecha } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Comunidad",
  description: "Foro, recitales virtuales mensuales, jam sessions y leaderboard de la academia.",
};

const categoriaColor: Record<string, string> = {
  teoria: "bg-marca-purpura/10 text-marca-purpura",
  practica: "bg-marca-exito/10 text-marca-exito",
  instrumentos: "bg-marca-dorado/20 text-amber-700",
  general: "bg-gray-100 text-gray-600",
};

const leaderboard = [
  { pos: 1, nombre: "Marta S.", puntos: 1240, insignias: 8, foto: "https://i.pravatar.cc/80?img=20" },
  { pos: 2, nombre: "Carlos M.", puntos: 1180, insignias: 7, foto: "https://i.pravatar.cc/80?img=11" },
  { pos: 3, nombre: "Ana R.", puntos: 1075, insignias: 6, foto: "https://i.pravatar.cc/80?img=45" },
  { pos: 4, nombre: "Javier L.", puntos: 980, insignias: 6, foto: "https://i.pravatar.cc/80?img=33" },
  { pos: 5, nombre: "Elena G.", puntos: 920, insignias: 5, foto: "https://i.pravatar.cc/80?img=27" },
];

export default async function ComunidadPage() {
  const posts = await listForumPosts();

  return (
    <div className="bg-gray-50">
      <div className="bg-gradient-marca py-14 text-white">
        <div className="contenedor">
          <h1 className="font-display text-4xl font-bold">Comunidad</h1>
          <p className="mt-3 max-w-2xl text-white/90">
            Aprender música es mejor acompañado. Comparte dudas en el foro, toca en los recitales
            mensuales y compite sanamente en el leaderboard.
          </p>
        </div>
      </div>

      <div className="contenedor grid gap-8 py-12 lg:grid-cols-[1fr_320px]">
        {/* Foro */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold">Foro de la comunidad</h2>
            <button className="btn-primario !py-2 !text-sm">Nueva pregunta</button>
          </div>

          <div className="space-y-4">
            {posts.map((p) => (
              <article key={p.id} className="tarjeta flex gap-4 p-5">
                <div className="flex flex-col items-center text-center text-gray-500">
                  <span className="text-marca-purpura">▲</span>
                  <span className="font-semibold">{p.votos}</span>
                  <span className="text-xs">votos</span>
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <span className={`chip ${categoriaColor[p.categoria]}`}>{p.categoria}</span>
                    <span className="text-xs text-gray-400">{formatFecha(p.fecha)}</span>
                  </div>
                  <h3 className="font-display text-base font-semibold">{p.titulo}</h3>
                  <p className="mt-1 text-sm text-gray-500">{p.contenido}</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                    <Image src={p.autorFoto} alt={p.autor} width={20} height={20} className="rounded-full" />
                    {p.autor} · 💬 {p.respuestas} respuestas
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar: recitales + leaderboard */}
        <aside className="space-y-6">
          {/* Próximo recital */}
          <div className="rounded-2xl bg-marca-oscuro p-6 text-white">
            <span className="chip bg-white/15 text-marca-dorado">🎤 Próximo recital</span>
            <h3 className="mt-3 font-display text-lg font-semibold">Recital virtual de junio</h3>
            <p className="mt-2 text-sm text-white/80">
              Toca en directo ante la comunidad. Todos los niveles bienvenidos.
            </p>
            <p className="mt-3 text-sm">📅 28 de junio · 19:00h</p>
            <button className="btn-dorado mt-4 w-full !py-2 !text-sm">Apuntarme a tocar</button>
          </div>

          {/* Jam sessions */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6">
            <h3 className="font-display text-lg font-semibold">🎸 Jam sessions</h3>
            <p className="mt-2 text-sm text-gray-500">
              Sesiones abiertas para tocar juntos, estilo «guitar hero». Cada viernes a las 20h.
            </p>
            <button className="btn-secundario mt-4 w-full !py-2 !text-sm">Ver próxima jam</button>
          </div>

          {/* Leaderboard */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6">
            <h3 className="mb-4 font-display text-lg font-semibold">🏆 Leaderboard</h3>
            <ol className="space-y-3">
              {leaderboard.map((u) => (
                <li key={u.pos} className="flex items-center gap-3">
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                    u.pos <= 3 ? "bg-marca-dorado text-marca-oscuro" : "bg-gray-100 text-gray-500"
                  }`}>
                    {u.pos}
                  </span>
                  <Image src={u.foto} alt={u.nombre} width={28} height={28} className="rounded-full" />
                  <span className="flex-1 text-sm font-medium">{u.nombre}</span>
                  <span className="text-xs text-gray-400">{u.puntos} pts</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
}
