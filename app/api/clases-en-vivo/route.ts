import { NextResponse } from "next/server";
import { listClasesEnVivo } from "@/lib/queries";

export async function GET() {
  const clases = await listClasesEnVivo();
  return NextResponse.json({ clases, total: clases.length });
}
