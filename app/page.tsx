import { HeroSection } from "@/components/home/HeroSection";
import { CaracteristicasSection } from "@/components/home/CaracteristicasSection";
import { CursosDestacados } from "@/components/home/CursosDestacados";
import { BandaInspiracion } from "@/components/home/BandaInspiracion";
import { ProfesoresDestacados } from "@/components/home/ProfesoresDestacados";
import { TestimoniosAlumnos } from "@/components/home/TestimoniosAlumnos";
import { PlanesPrecios } from "@/components/home/PlanesPrecios";
import { CtaFinal } from "@/components/home/CtaFinal";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CaracteristicasSection />
      <CursosDestacados />
      <BandaInspiracion />
      <ProfesoresDestacados />
      <TestimoniosAlumnos />
      <PlanesPrecios />
      <CtaFinal />
    </>
  );
}
