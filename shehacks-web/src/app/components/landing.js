import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
    >

      {/* Main content */}
      <div className="-mt-[6vw] mx-auto max-w-5xl px-6 text-center text-white">
        <Image
          src="/images/bigLogo.png"
          alt="SheHacks X Logo"
          width={800}
          height={800}
          priority
          className="mx-auto mb-4"
        />

        <h1 className="text-lg sm:text-3xl opacity-90 font-bold">
          10th Iteration of Canada's Largest All-Female and Non-Binary 36 Hr Hackathon
        </h1>
        <h3 className="mt-1 text-base sm:text-2xl opacity-80">
          January 9-11, 2026 ✦ Western University ✦ In-person
        </h3>

        <div className="mt-8 flex justify-center">
        <div className="group" aria-label="applyButton!">
          <Link href="https://tally.so/r/Xxljq4" target="_blank" rel="noopener noreferrer">
            <Image
            src="/images/applyButton.png"
            alt="Apply Now!"
            width={414}
            height={153}
            priority
            sizes="(min-width:1024px) 300px, (min-width:768px) 260px, (min-width:640px) 240px, 200px"
            className="
                h-auto
                w-[200px] sm:w-[240px] md:w-[260px] lg:w-[300px]
                transition-transform duration-200
                group-hover:scale-[1.01] group-active:scale-[0.985]
                hover:brightness-110
                drop-shadow-[0_6px_14px_rgba(255,255,255,0.25)]
            "
            />
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}
