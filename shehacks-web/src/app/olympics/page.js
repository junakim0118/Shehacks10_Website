import Image from "next/image";
import Link from "next/link";
import PrevHacker from "../components/olympic-prev-winners"; 
export default function Olympics_Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[url('/images/background_main.png')] bg-cover bg-center overflow-y-auto">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/images/bigLogo.png"
          alt="Next.js logo"
          width={400}
          height={400}
          priority
        />
        <Link href="/">Shehacks Main {"-->"}</Link>
        <PrevHacker/>
        
      </main>
    </div>
  );
}