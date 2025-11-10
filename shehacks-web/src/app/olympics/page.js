import Image from "next/image";
import Link from "next/link";

import HOFaq from "./ho-faq";
import HOInfo from "./howHOworks";


import Connect from "@/app/components/connect";

import Navbar from "./navbar";
import Landing from "@/app/olympics/landing";
import PastWinners from "./ho-winners";

export default function Olympics_Home() {
  return (
      <div className="font-sans min-h-screen text-white bg-[url('/images/HO_background.png')] bg-cover bg-center">
        <Navbar/>

        <main>
          <Landing/>
          {/* How Hacker Olympics Works Section */}
          <div className="scroll-mt-28 pt-24">
        <HOInfo/>
        <div className="relative w-32 sm:w-48 md:w-56 lg:w-72 xl:w-96 aspect-square">
          <Image
            src="/images/cd 2.png"
            alt=""
            aria-hidden
            fill
            className="object-contain"
            priority
          />
        </div>
        
        </div>
          {/* Past Hacker Olympics Winners Section */}
          <div>
        <PastWinners/></div>
     {/* FAQ Section (Hacker Olympics) */}
          <HOFaq />
        
        </main>


        <footer className="px-8 sm:px-20 pb-10">
          <section id="connect" className="scroll-mt-28 py-24">
            <Connect/>
          </section>
        </footer>
      </div>

  );
}