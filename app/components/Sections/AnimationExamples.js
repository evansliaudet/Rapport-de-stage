"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";

export default function AnimationExamples() {
  const [width, setWidth] = useState(null);
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const videoContainer = document.querySelector(".video-container");

    setWidth(videoContainer.clientWidth);

    const handleResize = () => {
      setWidth(videoContainer.clientWidth);
    };

    window.addEventListener("resize", handleResize);
  }, [setWidth]);

  const x = useTransform(scrollYProgress, [0, 1], [0, width * -12]);
  return (
    <section className="">
      <h3 className="text-3xl md:text-6xl lg:text-8xl">
        Quelques examples d&apos;animations que j&apos;ai pu réaliser
      </h3>

      <div className="h-[1200vh]" ref={containerRef}>
        <div className="sticky top-0 flex overflow-hidden">
          <motion.div
            className="flex justify-center items-center sticky flex-shrink-0 top-0 py-12"
            style={{ x }}
          >
            {[...Array(13)].map((_, index) => (
              <div
                className="h-screen w-screen flex-0 justify-center items-center px-5 flex video-container"
                key={index}
              >
                <video
                  src={`/video/anim-${index + 1}.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className=" rounded border border-black border-opacity-5 shadow-sm"
                >
                  Vidéo non supporté
                </video>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
