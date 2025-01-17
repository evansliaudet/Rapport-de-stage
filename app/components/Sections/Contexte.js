"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import FloatingImage from "../FloatingImage";

export default function Contexte({ font }) {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const scrollValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="overflow-hidden">
      <h2 className={`${font.className} pb-12`}>Contexte</h2>
      <div
        ref={containerRef}
        className="relative flex flex-col justify-between h-[85vh] md:h-[150vh]"
      >
        <p className="text-4xl md:text-5xl font-medium relative z-10 pb-5 lg:pl-24">
          A qui ?
        </p>

        <p className="w-full text-center relative z-10 md:text-2xl">
          Un Food Truck
        </p>

        <FloatingImage
          src={"/food-truck-génération-snack.jpg"}
          className="right-10"
          index={0}
          rotate={12}
        />

        <FloatingImage
          src={"/food-truck-image.jpg"}
          className="left-10 top-1/4 hidden lg:block"
          index={1}
          rotate={12}
        />

        <FloatingImage
          src={"/internet-image.jpg"}
          className="top-2/3 left-1/2 -translate-y-1/2 -translate-x-1/2 hidden md:block"
          index={2}
          rotate={12}
        />

        <FloatingImage
          src={"/code-image-1.jpg"}
          className="left-10 bottom-0 hidden lg:block"
          index={3}
          rotate={6}
        />

        <FloatingImage
          src={"/code-image-2.jpg"}
          className="right-10 bottom-0"
          index={4}
          rotate={12}
        />

        <p className="relative w-full text-end z-10 md:text-2xl">
          Faible présence en ligne
        </p>

        <p className="relative w-full text-end z-10 md:text-4xl font-medium xl:pr-24">
          Objectif ?
        </p>

        <p className="relative w-full text-center max-w-lg z-10 md:text-2xl">
          Créer un site web pour renforcer sa présence en ligne et attirer des
          clients pour de l&apos;évenementiel
        </p>

        <svg
          width="1022"
          height="1989"
          viewBox="0 0 1022 1989"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full absolute inset-0"
        >
          <motion.path
            d="M162.981 6.78015C162.981 204.402 265.963 401.984 489.024 401.984C735.125 401.984 966.562 325.59 966.562 601.416C966.562 753.436 1015.96 906.65 1015.96 1052.61C1015.96 1184.18 1011.31 1235.74 900.695 1302.9C613.825 1477.07 311.182 1287.17 311.182 1716.04C311.182 1769.34 292.174 1834.08 258.489 1876.68C185.965 1968.4 76.2635 1961.65 -25.8386 1982.07"
            stroke="#FAC05E"
            strokeWidth="12"
            strokeLinecap="round"
            style={{ pathLength: scrollValue }}
          />
        </svg>
      </div>
    </section>
  );
}
