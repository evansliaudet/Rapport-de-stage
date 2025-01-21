"use client";

import { motion } from "motion/react";

export default function Projects({ font }) {
  return (
    <section className="">
      <motion.h2
        initial="initial"
        whileInView="view"
        className={font.className}
      >
        {"Mes Projets".split(" ").map((word, index) => (
          <span key={index} className="inline-block overflow-hidden">
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                view: {
                  y: 0,
                },
              }}
              transition={{
                ease: "easeInOut",
                type: "spring",
                damping: 50,
                stiffness: 200,
              }}
              className="mr-2 lg:mr-12 inline-block"
            >
              {word} <br />
            </motion.span>
          </span>
        ))}
      </motion.h2>
    </section>
  );
}
