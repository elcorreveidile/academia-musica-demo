import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

/**
 * Cliente de base de datos (Neon PostgreSQL vía postgres-js).
 *
 * En la demo el `DATABASE_URL` puede no estar definido: en ese caso `db` es
 * `null` y la capa de queries (lib/queries.ts) usa los datos de ejemplo de
 * `lib/demo-data.ts`. Cuando configures Neon en producción, las queries
 * pasarán a leer de la base de datos real automáticamente.
 */

const connectionString = process.env.DATABASE_URL;

export const hasDatabase = Boolean(connectionString);

export const db = connectionString
  ? drizzle(postgres(connectionString, { prepare: false }), { schema })
  : null;

export { schema };
