"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

export default function FloatingImage({ src, className, rotate, index }) {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.to(`.floating-image-${index}`, {
      y: "-60%",
      scrollTrigger: {
        trigger: `.floating-container-${index}`,
        scrub: 0,
        start: "top bottom",
        end: "bottom top",
      },
    });
  });
  return (
    <div
      className={`absolute rounded-lg floating-container-${index} ${className}`}
    >
      <div
        className={`bg-white p-5 px-10  ${
          rotate < 0 ? `-rotate-${rotate * -1}` : `rotate-${rotate}`
        } floating-image-${index}`}
      >
        <Image
          src={src}
          alt="alt"
          width={10000}
          height={0}
          className={`h-36 w-24  md:h-52 md:w-32 object-cover rounded-lg ${
            rotate < 0 ? `-rotate-${rotate * -1}` : `rotate-${rotate}`
          }`}
        />
      </div>
    </div>
  );
}
