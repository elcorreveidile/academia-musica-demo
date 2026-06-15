/**
 * Configuración de Auth.js (NextAuth v5) con Magic Link por email (Resend).
 *
 * Para activarlo en producción define en el entorno:
 *   - AUTH_SECRET
 *   - RESEND_API_KEY y EMAIL_FROM
 *   - DATABASE_URL (para persistir sesiones con el adaptador Drizzle)
 *
 * En la demo, si faltan estas variables, la autenticación queda inactiva pero
 * el resto del sitio funciona con normalidad.
 */

import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Resend({
      apiKey: process.env.RESEND_API_KEY,
      from: process.env.EMAIL_FROM ?? "Academia de Música <onboarding@resend.dev>",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify",
  },
  session: { strategy: "jwt" },
});
