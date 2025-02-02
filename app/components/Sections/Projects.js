"use client";

import { motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

export default function Projects({ font }) {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const videoRefs = useRef([]);

  const projects = [
    {
      name: "Hizia",
      text: "Site pour une agence de marketing gen Z",
      path: "https://www.hizia.xyz/en",
      video: "hizia",
    },
    {
      name: "Maison Cosyli",
      text: "Site pour un appartement pour de la location à courte durée",
      path: "https://maisoncosyli.fr/",
      video: "cosyli",
    },
    {
      name: "GMA AUTO",
      text: "Site pour un garage automobile",
      path: "https://www.gmaauto.fr/",
      video: "GMA",
    },
    {
      name: "Génération Snack",
      text: "Site pour un Food Truck Lyonnais",
      path: "https://www.generationsnack.fr/",
      video: "GS-Snack",
    },
    {
      name: "Conciergerie Kera",
      text: "Site pour une coniergerie pour de la location à courte durée",
      path: "https://conciergerie-kera.vercel.app/",
      video: "Kera",
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

  const MotionLink = motion.create(Link);

  return (
    <section className="" id="projects">
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
              [<span className="">0</span>
              <span className="flex flex-col slider">
                {projects.map((_, index) => (
                  <span
                    className="inline-flex justify-center items-center text-green"
                    key={index}
                  >
                    {index + 1}
                  </span>
                ))}
              </span>
              ]
            </h3>
          </div>

          <div className="flex flex-col gap-44 project-container">
            {projects.map((project, index) => (
              <div
                className="flex flex-col gap-5 items-start project-div-el"
                key={index}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={`/video/projects/${project.video}.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full rounded shadow-sm border border-black border-opacity-5 mb-5"
                >
                  Vidéo non supporté
                </video>
                <h3 className="uppercase font-bold text-4xl md:text-5xl lg:text-6xl xl:text-8xl relative text-[#1F1F1F]">
                  {project.name}
                </h3>

                <p className="md:text-lg lg:text-2xl opacity-75">
                  {project.text}
                </p>

                <MotionLink
                  href={project.path}
                  initial="initial"
                  whileHover="hover"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-10 uppercase font-medium text-white relative flex justify-center items-center overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-[#1F1F1F] rounded origin-center background"
                    variants={{
                      initial: {
                        scale: 1,
                      },
                      hover: {
                        scale: 0.95,
                      },
                    }}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      duration: 0.65,
                    }}
                  ></motion.span>
                  <span className="inline-flex overflow-hidden">
                    {"Visiter".split("").map((char, index) => (
                      <div
                        className="relative flex overflow-hidden"
                        key={index}
                      >
                        <motion.span
                          key={index}
                          className="inline-flex will-change-transform"
                          variants={{
                            initial: {
                              y: 0,
                            },
                            hover: {
                              y: "-100%",
                            },
                          }}
                          transition={{
                            ease: [0.76, 0, 0.24, 1],
                            duration: 0.65,
                            delay: index * 0.025,
                          }}
                        >
                          {char}
                        </motion.span>
                      </div>
                    ))}
                  </span>
                  <span className="absolute inset-0 inline-flex justify-center items-center overflow-hidden">
                    {"Visiter".split("").map((char, index) => (
                      <div
                        className="relative flex overflow-hidden"
                        key={index}
                      >
                        <motion.span
                          className="will-change-transform inline-block"
                          key={index}
                          variants={{
                            initial: {
                              y: "100%",
                            },
                            hover: {
                              y: 0,
                            },
                          }}
                          transition={{
                            ease: [0.76, 0, 0.24, 1],
                            duration: 0.65,
                            delay: index * 0.025,
                          }}
                        >
                          {char}
                        </motion.span>
                      </div>
                    ))}
                  </span>
                </MotionLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
