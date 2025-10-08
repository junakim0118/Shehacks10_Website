import Image from "next/image";
import Link from "next/link";
import About from "../app/components/about";

import Faq from "./components/faq";

import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Winners from "./components/winners";
import Olympics from "./components/olympics";

export default function Home() {
  return (
    <div className="font-sans relative min-h-screen w-full text-white">
      <Image
        src="/images/background_main.png"
        alt="SheHacks background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-10"
      />

      <Navbar />

      <main className="px-8 sm:px-20 pb-20">
        <Landing />

        <section id="about" className="scroll-mt-28 py-24">
          <About />
        </section>

        <Winners /> {/* has id="winners" inside */}
        <Olympics /> {/* has id="olympics" inside */}

        
      </main>

      {/* Footer socials */}
      <footer className="px-8 sm:px-20 pb-10">
        <div className="max-w-4xl mx-auto text-center text-sm tracking-wide">
          <ul className="flex items-center justify-center gap-6">
            <li>
              <a
                href="https://ca.linkedin.com/company/uwowits"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-90"
              >
                linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/wits.uwo?utm_source=ig_web_button_share_sheet&igsh=MWE1ZGtzNHBjZjRueg=="
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-90"
              >
                instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/wits.uwo/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-90"
              >
                facebook
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
