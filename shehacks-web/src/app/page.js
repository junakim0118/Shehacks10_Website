import Image from "next/image";
import Link from "next/link";
import About from "../app/components/about";

import Faq from "./components/faq";

import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Winners from "./components/winners";
import Olympics from "./components/olympics";
import Connect from "./components/connect";
import SheHacksTeam from "./components/shehacksteam"; 
import History from "./components/history";
import Wits from "./components/wits";
import Sponsor from "./components/sponsor";
import TickerTape from "./components/tickertape";

export default function Home() {
  return (
    <div className="font-sans min-h-screen text-white bg-[url('/images/background_main.png')] bg-cover bg-center">
      <Navbar />

      <main className="px-8 sm:px-20 pb-20">
        <Landing />
        <div className="scroll-mt-28 py-24">
          <Winners /> {/* has id="winners" inside */}
        </div>
                <div className="scroll-mt-28 py-24">
          <History /> {/* has id="history" inside */}
        </div>
      <section id="about" className="scroll-mt-28 py-24">
        <TickerTape />
      </section>
{/* 
        <section id="about" className="scroll-mt-28 py-24">
          <About />
        </section> */}
        
        <section id="sponsor" className="scroll-mt-28 py-24">
          <Sponsor/>
        </section>
        <section id="olympics" className="scroll-mt-28 py-24">
          <Olympics /> {/* has id="olympics" inside */}
        </section>
        
        <section id="wits" className="scroll-mt-28 py-24">
          <Wits /> {/* has id="wits" inside */}
        </section>
        <section id="faq" className="scroll-mt-28 pt-15">
          <Faq />
        </section>               
        <section id="team" className="scroll-mt-28 py-24">
          <SheHacksTeam />
        </section>
      </main>
        


      
    </div>
  );
}
