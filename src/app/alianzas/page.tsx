import type { Metadata } from "next";

import { Nav } from "@/components/sections/nav";
import { Accountants } from "@/components/sections/accountants";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Alianzas | Despacho PM",
  description:
    "Contadores, fiscalistas, abogados, agentes inmobiliarios y notarios: seamos aliados. Sumamos estructura financiera a la relación de confianza que ya tienes con tus clientes.",
};

export default function Alianzas() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Accountants />
      </main>
      <Footer />
    </>
  );
}
