import localFont from "next/font/local";
import Hero from "./components/Sections/Hero";
import Contexte from "./components/Sections/Contexte";
import Problem from "./components/Sections/Problem";
import Goals from "./components/Sections/Goals";

const Frick = localFont({ src: "./fonts/Frick0.3-Regular.otf" });

export default function Home() {
  return (
    <main className="">
      <Hero font={Frick} />
      <Contexte font={Frick} />
      <Problem font={Frick} />
      <Goals font={Frick} />
      <section className="h-screen"></section>
    </main>
  );
}
