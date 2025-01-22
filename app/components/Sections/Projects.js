"use client";

import { motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";

export default function Projects({ font }) {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const projects = [
    {
      name: "Hizia",
      text: "Site pour une agence de marketing gen Z",
      path: "https://www.hizia.xyz/en",
    },
    {
      name: "Maison Cosyli",
      text: "Site pour une agence de marketing gen Z",
      path: "https://maisoncosyli.fr/",
    },
    {
      name: "GMA AUTO",
      text: "Site pour une agence de marketing gen Z",
      path: "https://www.gmaauto.fr/",
    },
    {
      name: "Génération Snack",
      text: "Site pour une agence de marketing gen Z",
      path: "https://www.generationsnack.fr/",
    },
    {
      name: "Conciergerie Kera",
      text: "Site pour une agence de marketing gen Z",
      path: "https://conciergerie-kera.vercel.app/",
    },
  ];

  useGSAP(() => {
    const projects = gsap.utils.toArray(".project-div-el");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-container",
        start: "top center",
        end: "bottom 80%",
        scrub: true,
      },
    });

    projects.forEach((project, index) => {
      tl.to(".slider", {
        y: `${-1 * index}em`,
      });
    });
  });

  return (
    <section className="">
      <motion.h2
        initial="initial"
        whileInView="view"
        viewport={{ once: true }}
        className={font.className}
      >
        {"Mes Projets".split(" ").map((word, index) => (
          <span key={index} className="flex overflow-hidden">
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
                delay: index * 0.1,
              }}
              className="mr-2 lg:mr-12 inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>

      <div className="project-wrapper">
        <div className="py-12 flex gap-24 flex-col md:flex-row justify-between items-start">
          <div className="flex justify-center items-center md:w-1/3 sticky top-44">
            <h3 className="uppercase font-bold text-4xl md:text-8xl lg:text-9xl xl:text-[15rem] overflow-hidden md:inline-flex h-[1em] text-[#1F1F1F] camera hidden">
              <span className="">0</span>
              <span className="flex flex-col slider">
                {projects.map((_, index) => (
                  <span className="inline-block" key={index}>
                    {index + 1}
                  </span>
                ))}
              </span>
            </h3>
          </div>

          <div className="flex flex-col gap-44 project-container">
            {projects.map((project, index) => (
              <div
                className="flex flex-col gap-5 items-start project-div-el"
                key={index}
              >
                <video
                  src={`/video/anim-1.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full rounded shadow-sm border border-black border-opacity-5 mb-5"
                >
                  Vidéo non supporté
                </video>
                <h3 className="uppercase font-bold text-4xl md:text-5xl lg:text-6xl xl:text-8xl relative overflow-hidden inline-block h-[1em] text-[#1F1F1F]">
                  {project.name}
                </h3>

                <p className="md:text-lg lg:text-2xl opacity-75">
                  {project.text}
                </p>

                <Link
                  href={project.path}
                  className="py-3 px-10 uppercase font-medium rounded-full text-white bg-[#1F1F1F]"
                >
                  Visiter
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
