"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

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
    <section className="px-0">
      <h2 className={`${font.className} p-5 md:p-10`}>Objectifs et attentes</h2>

      <div className="w-full relative z-10 flex translate-y-[35%] tile-container">
        <div className="w-1/4 h-screen rounded-xl bg-tomato tile-1"></div>

        <div className="w-1/4 h-screen rounded-xl bg-tomato tile-2"></div>

        <div className="w-1/4 h-screen rounded-xl bg-tomato tile-3"></div>

        <div className="w-1/4 h-screen rounded-xl bg-tomato tile-4"></div>
      </div>

      <div className="bg-tomato @apply p-5 md:p-10 relative z-20">
        <div className="h-screen bg-tomato grid place-content-center gap-10">
          <h3 className="text-5xl md:text-7xl font-bold">Framework</h3>

          <p className="text-3xl md:text-5xl max-w-xl">
            Pour ça j&apos;ai commencé par apprendre Nextjs. Un framework React.
          </p>
        </div>

        <div className="h-screen bg-tomato grid place-content-center gap-10">
          <h3 className="text-5xl md:text-7xl font-bold">
            Librairies d&apos;animations
          </h3>

          <p className="text-3xl md:text-5xl max-w-xl">
            J&apos;ai commencé par apprendre framer-motion. Puis une librairie
            encore plus connu. GSAP
          </p>
        </div>

        <div className="h-screen bg-tomato grid place-content-center last-goal gap-10">
          <h3 className="text-5xl md:text-7xl font-bold">
            Site, site, site...{" "}
          </h3>

          <p className="text-3xl md:text-5xl max-w-xl">
            J&apos;ai ensuite réalisé quelques projets pour solidifier mes
            compétences et être sur d&apos;avoir bien assimilé ce que j&apos;ai
            appris.
          </p>
        </div>
      </div>

      <div className="w-full relative z-10 translate-y-[-45%] flex tile-container">
        <div className="w-1/4 h-screen rounded-xl bg-tomato tile-5"></div>

        <div className="w-1/4 h-screen rounded-xl bg-tomato tile-6"></div>

        <div className="w-1/4 h-screen rounded-xl bg-tomato tile-7"></div>

        <div className="w-1/4 h-screen rounded-xl bg-tomato tile-8"></div>
      </div>
    </section>
  );
}
