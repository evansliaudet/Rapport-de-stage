"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer({ font }) {
  const navigation = [
    {
      name: "Accueil",
      path: "#hero",
    },
    {
      name: "Contexte",
      path: "#context",
    },
    {
      name: "Problème",
      path: "#problem",
    },
    {
      name: "Objectifs et Attentes",
      path: "#goals",
    },
    {
      name: "Projets",
      path: "#projects",
    },
    {
      name: "Bilan",
      path: "#conclusion",
    },
  ];

  const MotionLink = motion.create(Link);

  return (
    <footer className="h-screen p-5 md:p-10 flex flex-col justify-between">
      <div className="w-full flex justify-end">
        <h2
          className={`text-end ${font.className} text-6xl md:text-8xl lg:text-9xl`}
        >
          Bilan stage de 1ère année
        </h2>
      </div>

      <nav className="max-w-lg flex flex-col gap-2">
        <p className="text-2xl lg:text-3xl">Navigation</p>
        <hr />
        {navigation.map((nav, index) => (
          <MotionLink
            href={nav.path}
            initial="initial"
            whileHover="hover"
            className="flex justify-between items-center bg-black/60 rounded-lg p-2 px-5 text-white"
            key={index}
          >
            <p className="">{nav.name}</p>
            <p className="overflow-hidden">
              <motion.span
                variants={{
                  initial: {
                    x: 0,
                  },
                  hover: {
                    x: "100%",
                  },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="relative inline-block"
              >
                <span className="">[0{index + 1}]</span>
                <span className="">
                  <ArrowRight className="size-6 absolute inset-0 -translate-x-full" />
                </span>
              </motion.span>
            </p>
          </MotionLink>
        ))}
      </nav>

      <div className="">
        <h2 className={`${font.className} text-6xl md:text-8xl lg:text-9xl`}>
          2025
        </h2>
      </div>
    </footer>
  );
}
