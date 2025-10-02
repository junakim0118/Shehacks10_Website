import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
    >

      {/* Main content */}
      <div className="mx-auto max-w-4xl px-6 text-center text-white">
        <Image
          src="/images/bigLogo.png"
          alt="SheHacks X Logo"
          width={700}
          height={700}
          priority
          className="mx-auto mb-4"
        />

        <p className="text-lg sm:text-xl opacity-90 font-bold">
        10th Iteration of Canada's Largest All-Female and Non-Binary 36 Hr Hackathon
        </p>
        <p className="mt-1 text-sm sm:text-base opacity-80">
        January 10-12, 2026 ✦ Western University ✦ In-person
        </p>

        <div className="mt-8 flex justify-center">
        <Link href="/apply" className="group" aria-label="Apply as a Hacker">
            <Image
            src="/images/applyhacker.png"
            alt="Apply as a Hacker"
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

        <div className="mt-8">
          <a
            href="#olympics"
            className="underline underline-offset-4 opacity-80 hover:opacity-100"
          >
            Hacker Olympics →
          </a>
        </div>
      </div>
    </section>
  );
}
