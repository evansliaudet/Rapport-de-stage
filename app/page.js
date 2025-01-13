import localFont from "next/font/local";
import Hero from "./components/Sections/Hero";

const Frick = localFont({ src: "./fonts/Frick0.3-Regular.otf" });

export default function Home() {
  return (
    <main className="">
      <Hero font={Frick} />
    </main>
  );
}
