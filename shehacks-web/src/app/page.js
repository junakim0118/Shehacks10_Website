import Image from "next/image";
import Link from "next/link";
import About from "../app/components/about";

import Faq from "./components/faq";

import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Winners from "./components/winners";
import Olympics from "./components/olympics";
import Connect from "./components/connect";

export default function Home() {
  return (
    <div className="font-sans min-h-screen text-white bg-[url('/images/background_main.png')] bg-cover bg-center">
      <Navbar />

      <main className="px-8 sm:px-20 pb-20">
        <Landing />

        <section id="about" className="scroll-mt-28 py-24">
          <About />
        </section>

        <Winners /> {/* has id="winners" inside */}
        <Olympics /> {/* has id="olympics" inside */}

        <section id="faq" className="scroll-mt-28 py-24">
          <Faq />
        </section>

      </main>
<footer className="px-8 sm:px-20 pb-10">
        <section id="connect" className="scroll-mt-28 py-24">
          <Connect />
        </section>
        </footer>
      
    </div>
  );
}
