import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";

export function PhotoBreak({ src, alt }: { src: string; alt: string }) {
  return (
    <section className="mx-auto max-w-6xl px-(--spacing-gutter) py-10">
      <Reveal>
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl sm:aspect-[3/1]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
