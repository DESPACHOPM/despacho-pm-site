import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Situations } from "@/components/sections/situations";
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
        <Accompaniment />
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
