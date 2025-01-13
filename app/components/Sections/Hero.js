"use client";

import { motion } from "motion/react";

export default function Hero({ font }) {
  return (
    <section className="h-screen flex flex-col justify-between overflow-hidden">
      <motion.div
        initial="initial"
        whileInView="view"
        viewport={{ once: true }}
        className="flex flex-col w-fit pt-24"
      >
        <p className="uppercase text-xl lg:text-5xl">
          {"Septembre 2024".split("").map((char, index) => (
            <span className="inline-flex overflow-hidden" key={index}>
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.025 * index,
                  ease: [0.76, 0, 0.24, 1],
                  type: "spring",
                  damping: 30,
                  stiffness: 200,
                }}
                className="inline-block will-change-transform"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            </span>
          ))}
        </p>
        <div className="flex items-end gap-2">
          <svg
            width="337"
            height="214"
            viewBox="0 0 337 214"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-32 w-56"
          >
            <motion.path
              variants={{
                initial: {
                  pathLength: 0,
                },
                view: {
                  pathLength: 1,
                },
              }}
              transition={{
                delay: 0.2,
                duration: 1,
                ease: [0.6, 0.05, 0.3, 1],
              }}
              d="M7 7C7 79.1553 79.2786 142.888 150.556 100.883C204.276 69.2242 160.35 9.03794 118.031 42.9551C70.4294 81.1068 57.7804 137.371 112.548 167.549C172.268 200.456 262.492 207 330 207"
              stroke="#FAC05E"
              strokeWidth="13"
              strokeLinecap="round"
            />
          </svg>
          <p className="uppercase text-xl lg:text-5xl">
            {"Janvier 2025".split("").map((char, index) => (
              <span className="inline-flex overflow-hidden" key={index}>
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.7 + 0.025 * index,
                    ease: [0.76, 0, 0.24, 1],
                    type: "spring",
                    damping: 30,
                    stiffness: 200,
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </span>
            ))}
          </p>
        </div>
      </motion.div>

      <div className="w-full flex justify-end">
        <p className="text-base lg:text-3xl max-w-lg">
          {"Bilan de mon stage de première année en tant que développeur web de septembre 2024 à janvier 2025"
            .split(" ")
            .map((word, index) => (
              <span className="overflow-hidden inline-flex" key={index}>
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    type: "spring",
                    damping: 30,
                    stiffness: 200,
                    delay: 0.7 + 0.025 * index,
                  }}
                  className="mr-1.5 will-change-transform"
                >
                  {word}
                </motion.span>
              </span>
            ))}
        </p>
      </div>

      <motion.div initial="initial" animate="animate" className="w-full">
        <motion.h1
          variants={{
            initial: {
              y: "100%",
            },
            animate: {
              y: 0,
            },
          }}
          transition={{
            ease: [0.76, 0, 0.24, 1],
            type: "spring",
            damping: 30,
            stiffness: 200,
            delay: 1,
          }}
          className={`${font.className} text-[250px] leading-[1em] text-yellow whitespace-nowrap relative flex`}
        >
          <span className="carousel inline-block">
            BILAN DE STAGE EVANS<span className="px-12">-</span>
          </span>
          <span className="carousel inline-block">
            BILAN DE STAGE EVANS<span className="px-12">-</span>
          </span>
        </motion.h1>
      </motion.div>
    </section>
  );
}
