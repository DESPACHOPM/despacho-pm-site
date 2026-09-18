import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Story } from "@/components/sections/story";
import { Pillars } from "@/components/sections/pillars";
import { Accountants } from "@/components/sections/accountants";
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
        <Story />
        <Pillars />
        <Accountants />
        <FitFilter />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
