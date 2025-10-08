import Image from "next/image";
import Link from "next/link";
import About from "../app/components/about";
import History from "../app/components/history";
import BroughtToYouBy from "../app/components/brought-to-you-by";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[url('/images/background_main.png')] bg-cover bg-center overflow-y-auto">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-centre">
        <Image
          src="/images/bigLogo.png"
          alt="Shehacks X Logo"
          width={700}
          height={700}
          priority
        />
       <section id="about" className="w-full mt-8">
          <About />
        </section>
       
       <section id="history" className="w-full mt-8">
          <History />
        </section>

        <section id="broughttoyouby" className="w-full mt-2">
          <BroughtToYouBy />
        </section>

        <Link href="/olympics">Hacker Olympics {"-->"}</Link>
        <div className="w-full mt-12">
      </div>
    
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
