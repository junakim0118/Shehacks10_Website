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
      id="olympics"
      className="relative scroll-mt-28 pt-12 md:pt-10"
      style={{ paddingBottom: PB_CLAMP }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="relative inline-block">
          <Image
            src="/images/topstars.png"
            alt=""
            aria-hidden
            width={60}
            height={60}
            className="pointer-events-none select-none absolute -left-[70px] top-[-8px] w-14 sm:w-16 h-auto"
            priority
          />
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Hacker Olympics</h2>
        </div>

        <p
          className="mt-[35px] sm:mt-10 md:mt-12 text-base sm:text-lg text-white/95"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.55)" }}
        >
          Hacker Olympics is an alternative competition stream designed for beginner hackers with little to no coding experience. Though we encourage everyone (even beginners) to try and develop a hack, we understand that it’s daunting to jump into a hackathon right away! Hacker Olympics is an alternative competition that beginner hackers can apply for. It is meant to develop coding skills and tech knowledge through the duration of SheHacks+.
        </p>

        <div className="mt-6 flex justify-center">
          <div className="relative inline-block">
            {/* <Link href="/olympics" aria-label="Learn more about Hacker Olympics" className="block">
              <Image src="/images/learnmorebutton.png" alt="Learn More" width={242} height={62} />
            </Link> */}
            <Image
              src="/images/bottomstars.png"
              alt=""
              aria-hidden
              width={120}
              height={120}
              className="
                pointer-events-none select-none absolute
                -right-8 top-16 sm:top-20
                w-[clamp(40px,6vw,120px)]  /* scales with screen size */
                h-auto
              "
              priority
            />
          </div>
        </div>
      </div>

      {/* MOBILE: camera centered, not absolute (no cropping) */}
      <div className="sm:hidden mt-10 flex justify-center">
        <Image
          src="/images/camera.png"
          alt="Digital camera"
          width={CAM_DESIGN.width}
          height={CAM_DESIGN.height}
          priority
          className="pointer-events-none select-none w-[min(88vw,420px)] h-auto"
        />
      </div>

      {/* DESKTOP/TABLET: camera absolute; auto-center at <= 880px */}
      <Image
        src="/images/camera.png"
        alt="Digital camera"
        width={CAM_DESIGN.width}
        height={CAM_DESIGN.height}
        priority
        className="
          hidden sm:block pointer-events-none select-none absolute z-0 h-auto
          max-[880px]:left-1/2 max-[880px]:-translate-x-1/2 max-[880px]:right-auto
        "
        style={{
          // default desktop anchoring to the right (ignored when <=880px by the classes above)
          right: `max(16px, calc((100vw - 1440px) / 2 + 24px))`,
          bottom: BOTTOM_CLAMP,
          width: CAM_W_CLAMP, // responsive width; height follows
        }}
      />
    </section>
  );
}
