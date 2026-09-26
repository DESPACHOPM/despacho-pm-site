import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Situations } from "@/components/sections/situations";
import { PhotoBreak } from "@/components/sections/photo-break";
import { Accompaniment } from "@/components/sections/accompaniment";
import { FitFilter } from "@/components/sections/fit-filter";
import { Story } from "@/components/sections/story";
import { AlsoSolve } from "@/components/sections/also-solve";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Situations />
        <PhotoBreak
          src="/images/situacion-hogar.jpg"
          alt="Pareja revisando su situación financiera en casa"
        />
        <Accompaniment />
        <PhotoBreak
          src="/images/acompanamiento-conversacion.jpg"
          alt="Conversación de asesoría financiera"
        />
        <FitFilter />
        <Story />
        <AlsoSolve />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
