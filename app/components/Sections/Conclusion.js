export default function Conclusion({ font }) {
  const data = [
    {
      title: "Impact personnel",
      bulletPoints: [
        {
          name: "Contactes",
          text: "J'ai pu développer des contactes.",
        },
        {
          name: "Développement des compétences",
          text: "J'ai pu développer des contactes.",
        },
        {
          name: "Disciplines",
          text: "J'ai pu développer des contactes.",
        },
      ],
    },
    {
      title: "Impact professionel",
      bulletPoints: [
        {
          name: "Consolidation",
          text: "J'ai pu développer des contactes.",
        },
        {
          name: "Apprentissage",
          text: "J'ai pu développer des contactes.",
        },
        {
          name: "Autonomie",
          text: "J'ai pu développer des contactes.",
        },
        {
          name: "Gestion du temps",
          text: "J'ai pu développer des contactes.",
        },
        {
          name: "Besoin client",
          text: "J'ai pu développer des contactes.",
        },
      ],
    },
    {
      title: "Impact sur mon projet professionel",
      bulletPoints: [
        {
          name: "Contactes",
          text: "J'ai pu développer des contactes.",
        },
        {
          name: "Développement des compétences",
          text: "J'ai pu développer des contactes.",
        },
        {
          name: "Disciplines",
          text: "J'ai pu développer des contactes.",
        },
      ],
    },
  ];

  return (
    <section className="">
      <h2 className={font.className}>Bilan</h2>

      {data.map((el, index) => (
        <div className="py-16" key={index}>
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-semibold">
            {el.title}
          </h3>
          <div className="w-full grid grid-cols-3 gap-5 pt-6">
            {el.bulletPoints.map((bullet, index) => (
              <div
                className="aspect-square bg-tomato rounded-lg shadow-sm border border-black border-opacity-5 p-5 flex flex-col justify-center items-center"
                key={index}
              >
                <h4 className="font-semibold text-xl md:text-3xl lg:text-5xl text-center">
                  {bullet.name}
                </h4>

                <p className="text-center pt-2 md:text-xl lg:text-2xl">
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
