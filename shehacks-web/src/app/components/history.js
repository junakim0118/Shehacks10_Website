"use client";
import Image from "next/image";
import Link from "next/link";

/** knobs */
const CAM_DESIGN = { width: 520, height: 380 }; // aspect ~1.368
const CAM_W_CLAMP = "clamp(260px, 26vw, 520px)";   // ≥sm width range
const PB_CLAMP    = "clamp(220px, 28vw, 420px)";   // bottom padding to avoid cropping
const BOTTOM_CLAMP = "calc(-1 * clamp(70px, 8vw, 140px))"; // dip below content

export default function Olympics() {
  return (
    <section
      id="history"
      className="relative scroll-mt-28 pt-12 md:pt-10"
      style={{ paddingBottom: PB_CLAMP }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="relative inline-block">
          <Image
            src="/images/historyStars.png"
            alt=""
            aria-hidden
            width={60}
            height={60}
            className="pointer-events-none select-none absolute -left-[70px] top-[-8px] w-14 sm:w-16 h-auto"
            priority
          />
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">History of SheHacks+</h2>
        </div>

        <p
          className="mt-[35px] sm:mt-10 md:mt-12 text-base sm:text-lg text-white/95"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.55)" }}
        >
SheHacks+ traces its roots back over 7 years ago, emerging as a pioneering event aimed at tackling gender disparities in the tech industry head-on. Inspired by the growing recognition of underrepresentation and gender discrimination, the hackathon started as a grassroots initiative, driven by individuals deeply passionate about fostering diversity and inclusivity in technology.        </p>

         <Image
                    src="/images/historyShape.png"
                    alt=""
                    aria-hidden
                    width={487*0.8}
                    height={48*0.8}
                    className="mt-6"
                    priority
                  />
      </div>

    </section>
  );
}
