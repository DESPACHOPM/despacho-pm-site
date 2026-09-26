import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Situations } from "@/components/sections/situations";
import { Accompaniment } from "@/components/sections/accompaniment";
import { Story } from "@/components/sections/story";
import { AlsoSolve } from "@/components/sections/also-solve";
import { FitFilter } from "@/components/sections/fit-filter";
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
        <Accompaniment />
        <Story />
        <AlsoSolve />
        <FitFilter />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
