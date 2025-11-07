import Image from "next/image";
import Link from "next/link";

import HOFaq from "./ho-faq";
import HOInfo from "./howHOworks";


import Connect from "@/app/components/connect";

import Navbar from "../components/navbar";
import Landing from "@/app/olympics/landing";

export default function Olympics_Home() {
  return (
      <div className="font-sans min-h-screen text-white bg-[url('/images/HO_background.png')] bg-cover bg-center">
        <Navbar/>

        <main>
          <Landing/>
          {/* How Hacker Olympics Works Section */}
          <div className="scroll-mt-28 py-24">
        <HOInfo/></div>
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