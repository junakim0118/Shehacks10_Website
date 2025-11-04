import Image from "next/image";
import Link from "next/link";

import HOFaq from "../components/ho-faq";


import Connect from "@/app/components/connect";

import Navbar from "../components/navbar";
import Landing from "@/app/olympics/landing";

export default function Olympics_Home() {
  return (
      <div className="font-sans min-h-screen text-white bg-[url('/images/background_main.png')] bg-cover bg-center">
        <Navbar/>

        <main>
          <Landing/>
     {/* FAQ Section (Hacker Olympics) */}
        <section id="faq" className="scroll-mt-28 py-24">
          <HOFaq />
           </section>
        </main>


        <footer className="px-8 sm:px-20 pb-10">
          <section id="connect" className="scroll-mt-28 py-24">
            <Connect/>
          </section>
        </footer>
      </div>

  );
}