import Image from "next/image";

export default function Problem({ font }) {
  return (
    <section className="flex flex-col gap-24">
      <h2 className={font.className}>Problème</h2>

      <div className="flex flex-col gap-5 lg:flex-row pt-8 md:pt-24 sticky top-0">
        <p className="text-3xl md:text-5xl xl:text-6xl lg:w-1/2">
          Connaissances de base dans la programmation web et connaissances quasi
          inexistante dans le design web.
        </p>

        <Image
          src={"/coding-image.jpg"}
          alt="alt"
          width={1000}
          height={0}
          className="lg:w-1/2 rounded-lg max-h-44 md:max-h-fit object-cover"
        />
      </div>

      <div className="flex flex-col-reverse gap-5 lg:flex-row pt-8 md:pt-24 sticky top-0 bg-beige">
        <Image
          src={"/website-image.jpg"}
          alt="alt"
          width={1000}
          height={0}
          className="lg:w-1/2 rounded-lg object-cover"
        />

        <p className="text-3xl md:text-5xl xl:text-6xl lg:w-1/2">
          Presque aucune expérience dans la conception de site web.
        </p>
      </div>
    </section>
  );
}
