import Image from "next/image";
import Link from "next/link";
import HOFaq from "../components/ho-faq";

export default function Olympics_Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[url('/images/background_main.png')] bg-cover bg-center overflow-y-auto">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        {/* FAQ Section (Hacker Olympics) */}
        <section id="faq" className="scroll-mt-28 py-24">
          <HOFaq />
        </section>
      </main>
    </div>
  );
}
