"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Conclusion({ font }) {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const data = [
    {
      title: "Impact personnel",
      bulletPoints: [
        {
          name: "Passion",
          text: "Ce stage m'a fait aimer encore plus le développement web d'une part car j'ai réaliser un tas de choses intéressantes et d'une autre car j'ai découvert beaucoup comme le développement créatif qui m'était inconnu jusqu'alors.",
        },
        {
          name: "Acharnement",
          text: "Ce stage m'a permis de prouver à moi même qu'il ne faut jamais abandonner lorsque nous voulons faire ou apprendre quelque chose même si c'est compliqué au début.",
        },
        {
          name: "Autonomie",
          text: "Je suis devenu beaucoup plus discipliné et assidu avec mon travail car j'ai du être autonome et apprendre et résoudre des problèmes par moi même.",
        },
      ],
    },
    {
      title: "Impact professionel",
      bulletPoints: [
        {
          name: "Consolidation",
          text: "Durant mon stage j'ai pu consolider les compétences apprises lors de ma première année.",
        },
        {
          name: "Apprentissage",
          text: "En plus de la consolidation, j'ai pu apprendre de nouvelles technologies et libraries ce qui m'a permis de créer un produit final dont je peux être fier.",
        },
        {
          name: "Gestion du temps",
          text: "En lien avec l'autonomie j'ai pu apprendre à gérer mon temps et à ne pas dépasser de date limite.",
        },
        {
          name: "Besoin client",
          text: "Le stage m'a permis de travailler en collaboration avec des clients ce qui m'a forcer à être à l'écoute du client et de bien comprendre les besoins et envies.",
        },
      ],
    },
    {
      title: "Impact sur mon projet professionel",
      bulletPoints: [
        {
          name: "Envies",
          text: "Je dirais que ce stage à beaucoup influencé mes envies futurs. Il m'a fait découvrir le monde du développement créatif.",
        },
        {
          name: "Créativité ou technique ?",
          text: "Bien que j'ai pu apprécier le développement créatif, je pense néanmoins qu'un post plus technique me conviendrait plus. J'ai toujours été plus technique que créatif.",
        },
      ],
    },
  ];

  useGSAP(() => {
    const containers = document.querySelectorAll(".squares-container");

    containers.forEach((container) => {
      gsap.fromTo(
        container.querySelectorAll(".square-card"),
        {
          rotate: 45,
          scale: 0,
          opacity: 0,
        },
        {
          rotate: 0,
          scale: 1,
          opacity: 1,
          ease: "power4.inOut",
          stagger: 0.1,
          duration: 1,
          scrollTrigger: {
            trigger: container,
            start: "top bottom-=100",
            end: "bottom bottom",
            toggleActions: "play none none none",
          },
        }
      );
    });
  });

  return (
    <section className="" id="conclusion">
      <h2 className={font.className}>Bilan</h2>

      {data.map((el, index) => (
        <div className="py-16" key={index}>
          <h3 className="text-2xl md:text-7xl lg:text-8xl font-semibold">
            {el.title}
          </h3>
          <div className="squares-container w-full grid grid-cols-2 md:grid-cols-3 gap-5 pt-6">
            {el.bulletPoints.map((bullet, index) => (
              <div
                className="lg:aspect-square bg-tomato rounded-lg shadow-sm border border-black border-opacity-5 p-5 flex flex-col justify-center items-center square-card"
                key={index}
              >
                <h4 className="font-semibold md:text-2xl lg:text-4xl xl:text-5xl text-center">
                  {bullet.name}
                </h4>

                <p className="text-center pt-2 text-sm md:text-lg lg:text-xl xl:text-3xl">
                  {bullet.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
