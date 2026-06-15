/** Reproductor de vídeo embebido (YouTube/Vimeo). */
export function ReproductorVideo({ url, titulo }: { url: string; titulo: string }) {
  const esEmbed = url.includes("/embed/") || url.includes("player.vimeo");

  if (!esEmbed) {
    // Fallback elegante cuando no hay un embed válido (demo)
    return (
      <div className="flex aspect-video w-full flex-col items-center justify-center rounded-2xl bg-marca-oscuro text-white">
        <span className="text-5xl">▶️</span>
        <p className="mt-3 font-semibold">{titulo}</p>
        <p className="text-sm text-white/60">Vídeo de demostración</p>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
      <iframe
        src={url}
        title={titulo}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    </div>
  );
}
