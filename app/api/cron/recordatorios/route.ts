import { NextResponse } from "next/server";
import { listClasesEnVivo } from "@/lib/queries";

/**
 * Cron de recordatorios de clase en vivo (email 24h antes).
 *
 * Configúralo en Vercel Cron (p.ej. cada hora). Busca clases que ocurren mañana
 * y envía el recordatorio a los inscritos. En la demo solo devuelve el conteo.
 */
export async function GET(request: Request) {
  // Protección básica del endpoint de cron
  const authHeader = request.headers.get("authorization");
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const manana = new Date();
  manana.setDate(manana.getDate() + 1);
  const fechaManana = manana.toISOString().slice(0, 10);

  const clases = await listClasesEnVivo();
  const clasesManana = clases.filter((c) => c.fecha === fechaManana && c.estado === "programada");

  // En producción: por cada clase, recuperar inscritos y enviar sendRecordatorioClase().
  return NextResponse.json({
    procesadas: clasesManana.length,
    fecha: fechaManana,
    mensaje: `${clasesManana.length} clase(s) con recordatorio para mañana.`,
  });
}
