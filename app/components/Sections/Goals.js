"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { motion } from "motion/react";

export default function Goals({ font }) {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".tile-1",
      {
        y: "40%",
      },
      {
        y: "-30%",
        ease: [0.76, 0, 0.24, 1],
        scrollTrigger: {
          trigger: ".tile-container",
          start: "top+=300 bottom-=200",
          end: "top+=200 bottom-=200",
          scrub: 4,
        },
      }
    );

    gsap.fromTo(
      ".tile-2",
      {
        y: "40%",
      },
      {
        y: "-10%",
        ease: [0.76, 0, 0.24, 1],
        scrollTrigger: {
          trigger: ".tile-container",
          start: "top+=300 bottom-=200",
          end: "top+=200 bottom-=200",
          scrub: 4,
        },
      }
    );

    gsap.fromTo(
      ".tile-3",
      {
        y: "40%",
      },
      {
        y: "10%",
        ease: [0.76, 0, 0.24, 1],
        scrollTrigger: {
          trigger: ".tile-container",
          start: "top+=300 bottom-=200",
          end: "top+=200 bottom-=200",
          scrub: 4,
        },
      }
    );

    gsap.fromTo(
      ".tile-4",
      {
        y: "40%",
      },
      {
        y: "30%",
        ease: [0.76, 0, 0.24, 1],
        scrollTrigger: {
          trigger: ".tile-container",
          start: "top+=300 bottom-=200",
          end: "top+=200 bottom-=200",
          scrub: 4,
        },
      }
    );

    const tl = gsap.timeline();

    tl.to(".goals-1", {
      opacity: 1,
      stagger: 0.055,
      scrollTrigger: {
        trigger: ".goal-container-1",
        start: "top center",
        end: "bottom center",
        scrub: 0,
      },
    })
      .to(".goals-2", {
        opacity: 1,
        stagger: 0.055,
        scrollTrigger: {
          trigger: ".goal-container-2",
          start: "top center",
          end: "bottom center",
          scrub: 0,
        },
      })
      .to(".goals-3", {
        opacity: 1,
        stagger: 0.055,
        scrollTrigger: {
          trigger: ".goal-container-3",
          start: "top center",
          end: "bottom center",
          scrub: 0,
        },
      });

    gsap.fromTo(
      ".tile-5",
      {
        y: "40%",
      },
      {
        y: "-30%",
        ease: [0.76, 0, 0.24, 1],
        scrollTrigger: {
          trigger: ".last-goal",
          start: "bottom+=50 top",
          end: "bottom top",
          scrub: 4,
        },
      }
    );

    gsap.fromTo(
      ".tile-6",
      {
        y: "40%",
      },
      {
        y: "-10%",
        ease: [0.76, 0, 0.24, 1],
        scrollTrigger: {
          trigger: ".last-goal",
          start: "bottom+=50 top",
          end: "bottom top",
          scrub: 4,
        },
      }
    );

    gsap.fromTo(
      ".tile-7",
      {
        y: "40%",
      },
      {
        y: "10%",
        ease: [0.76, 0, 0.24, 1],
        scrollTrigger: {
          trigger: ".last-goal",
          start: "bottom+=50 top",
          end: "bottom top",
          scrub: 4,
        },
      }
    );

    gsap.fromTo(
      ".tile-8",
      {
        y: "40%",
      },
      {
        y: "30%",
        ease: [0.76, 0, 0.24, 1],
        scrollTrigger: {
          trigger: ".last-goal",
          start: "bottom+=50 top",
          end: "bottom top",
          scrub: 4,
        },
      }
    );
  });

  return (
    <motion.section
      whileInView={() => ScrollTrigger.refresh()}
      className="px-0"
      id="goals"
    >
      <h2 className={`${font.className} p-5 md:p-10`}>Objectifs et attentes</h2>

      <div className="w-full relative z-10 flex translate-y-[35%] tile-container">
        <div className="w-1/4 h-screen rounded-e-xl bg-tomato tile-1"></div>

        <div className="w-1/4 h-screen rounded-e-xl bg-tomato tile-2"></div>

        <div className="w-1/4 h-screen rounded-e-xl bg-tomato tile-3"></div>

        <div className="w-1/4 h-screen rounded-e-xl bg-tomato tile-4"></div>
      </div>

      <div className="bg-tomato @apply p-5 md:p-10 relative z-20 flex flex-col gap-96">
        <div className="h-screen bg-tomato grid place-content-center gap-10">
          <h3 className="text-5xl md:text-8xl lg:text-9xl font-bold">
            Framework
          </h3>

          <div className="h-screen goal-container-1">
            <p className="text-3xl md:text-7xl text-center max-w-4xl flex flex-wrap sticky top-[40%]">
              {"Pour ça j'ai commencé par apprendre Nextjs. Un framework React."
                .split(" ")
                .map((word, index) => (
                  <span
                    className="mr-1.5 md:mr-3.5 goals-1 opacity-0"
                    key={index}
                  >
                    {word}
                  </span>
                ))}
            </p>
          </div>
        </div>

        <div className="h-screen bg-tomato grid place-content-center gap-10">
          <h3 className="text-5xl md:text-8xl lg:text-9xl font-bold max-w-4xl">
            Librairies d&apos;animations
          </h3>

          <div className="h-screen goal-container-2">
            <p className="text-3xl md:text-7xl text-center max-w-4xl flex flex-wrap sticky top-[40%]">
              {"J'ai commencé par apprendre framer-motion. Puis une librairie encore plus connu. GSAP"
                .split(" ")
                .map((word, index) => (
                  <span
                    className="mr-1.5 md:mr-3.5 goals-2 opacity-0"
                    key={index}
                  >
                    {word}
                  </span>
                ))}
            </p>
          </div>
        </div>

        <div className="h-screen bg-tomato grid place-content-center gap-10">
          <h3 className="text-5xl md:text-8xl lg:text-9xl font-bold">
            Site, site, site...
          </h3>

          <div className="h-screen goal-container-3 last-goal">
            <p className="text-3xl md:text-7xl text-center max-w-4xl flex flex-wrap sticky top-[40%]">
              {"J'ai ensuite réalisé quelques projets pour solidifier mes compétences et être sur d'avoir bien assimilé ce que j'ai appris."
                .split(" ")
                .map((word, index) => (
                  <span
                    className="mr-1.5 md:mr-3.5 goals-3 opacity-0"
                    key={index}
                  >
                    {word}
                  </span>
                ))}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full relative z-10 translate-y-[-45%] flex tile-container">
        <div className="w-1/4 h-screen rounded-s-xl bg-tomato tile-5"></div>

        <div className="w-1/4 h-screen rounded-s-xl bg-tomato tile-6"></div>

        <div className="w-1/4 h-screen rounded-s-xl bg-tomato tile-7"></div>

        <div className="w-1/4 h-screen rounded-s-xl bg-tomato tile-8"></div>
      </div>
    </motion.section>
  );
}
