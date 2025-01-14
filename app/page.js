import localFont from "next/font/local";
import Hero from "./components/Sections/Hero";
import Contexte from "./components/Sections/Contexte";

const Frick = localFont({ src: "./fonts/Frick0.3-Regular.otf" });

export default function Home() {
  return (
    <main className="">
      <Hero font={Frick} />
      <Contexte font={Frick} />
    </main>
  );
}
