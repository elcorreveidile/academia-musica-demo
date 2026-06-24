import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://academia-musica-demo.vercel.app"),
  title: {
    default: "Academia de Música — Aprende música desde cero",
    template: "%s · Academia de Música",
  },
  description:
    "Plataforma educativa híbrida: clases en vivo + lecciones grabadas + comunidad. Aprende guitarra, piano, voz, bajo, batería y más a tu ritmo.",
  keywords: ["clases de música", "aprender guitarra", "piano online", "clases en vivo", "comunidad musical"],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/logo-simbolo.png", type: "image/png", sizes: "512x512" },
    ],
  },
  openGraph: {
    title: "Academia de Música — Aprende música desde cero",
    description: "Clases en vivo + lecciones grabadas + comunidad. Tu viaje musical empieza aquí.",
    type: "website",
    locale: "es_ES",
    images: ["/images/social/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
