"use client";
import { useState } from "react";
import Image from "next/image";

const DEFAULT_ITEMS = [
  { q: "Can I compete in both Hacker Olympics and regular stream?", a: "[answer]" },
  { q: "If I am a beginner, can I compete in the regular stream?", a: "[answer]" },
  { q: "What challenges will I compete in?", a: "[answer]" },
];

const PHONE_DESIGN = { width: 500, height: 500 };

export default function HOFaq({ items = DEFAULT_ITEMS }) {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="relative scroll-mt-28 py-16 sm:py-20 w-full">
      {/* MOBILE/TABLET: Phone + stars shrink and move above FAQ */}
      <div className="sm:hidden mb-8 flex flex-col items-center justify-center relative w-full">

        {/* Phone Image */}
        <Image
          src="/images/closedphone.gif"
          alt="closed flip phone"
          width={PHONE_DESIGN.width}
          height={PHONE_DESIGN.height}
          priority
          className="pointer-events-none select-none w-[min(70vw,420px)] h-auto scale-x-[-1]"
        />

        {/* Stars positioned relative to phone like desktop */}
        {/* Stars cluster */}
        <div className="relative top-12 left-12">
          <Image
            src="/images/stars.png"
            alt="stars"
            width={70}
            height={70}
            priority
            className="w-[min(14vw,60px)] h-auto scale-x-[-1]"
          />
        </div>

        {/* Single star */}
        <div className="relative bottom-12 right-10">
          <Image
            src="/images/star.png"
            alt="star"
            width={70}
            height={70}
            priority
            className="w-[min(12vw,55px)] h-auto"
          />
        </div>

      </div>

      {/* TABLET: reserve space to prevent overlap */}
      <div className="hidden sm:block max-[900px]:h-[280px]" />

      {/* FAQ Text */}
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-center font-semibold text-white"
          style={{ fontSize: "clamp(24px, 3vw, 34px)" }}>
          FAQ
        </h2>

        <div className="mx-auto mt-6 sm:mt-8 w-full max-w-3xl px-4">
          <ul className="divide-y divide-white/15">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={i} className="py-3 sm:py-4">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group w-full flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                  >
                    <span
                      className="text-white font-semibold tracking-tight"
                      style={{ fontSize: "clamp(14px, 1.6vw, 18px)" }}
                    >
                      {item.q}
                    </span>

                    <span className="relative inline-flex h-5 w-5 items-center justify-center" aria-hidden="true">
                      <span className="absolute h-[2px] w-3.5 bg-white transition-opacity duration-200" />
                      <span
                        className={`absolute h-3.5 w-[2px] bg-white transition-transform duration-200 ${isOpen ? "scale-y-0" : "scale-y-100"
                          }`}
                      />
                    </span>
                  </button>

                  {/* answer */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="pt-3 text-white/95 font-normal leading-relaxed"
                        style={{ fontSize: "clamp(13px, 1.4vw, 16px)" }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* DESKTOP DECOR IMAGES */}
      {/* Outer wrapper so we can scale smoothly */}
      <div className="flex relative w-full flex justify-center lg:absolute lg:inset-0 lg:items-center pointer-events-none">

        {/* Stars (big cluster) */}
        <div
          className="
            absolute
            /* base (<640px) */
            -left-[380px] -top-[210px]

            /* sm: 640px–767px = Surface Phone / small tablets */
            sm:-left-[100px] sm:-top-[520px]

            /* md: ≥768px */
            md:-left-[100px] md:-top-[520px]

            /* lg: ≥1024px */
            lg:-left-[150px] lg:-top-[150px]

            /* xl: ≥1280px */
            xl:-left-[280px] xl:-top-[210px]
          "
        >
          <Image
            src="/images/stars.png"
            alt="stars"
            width={69}
            height={72}
            priority
            className="scale-x-[-1]"
          />
        </div>

        {/* Star (single) */}
        <div
          className="
            absolute
            /* base (<640px) */
            -left-[130px] top-[60px]

            /* sm: 640px–767px */
            sm:left-[100px] sm:-top-[290px]

            /* md: ≥768px */
            md:left-[100px] md:-top-[290px]

            /* lg: ≥1024px */
            lg:left-[70px] lg:top-[60px]

            /* xl: ≥1280px */
            xl:-left-[40px] xl:top-[20px]
          "
        >
          <Image
            src="/images/star.png"
            alt="star"
            width={69}
            height={72}
            priority
          />
        </div>

        {/* DESKTOP PHONE */}
        <div
          className="
            hidden sm:block pointer-events-none absolute

            /* Default desktop position (>=1280px) */
            -left-[330px] -top-[280px]

            /* Medium desktop screens ~1200px */
            max-[1280px]:-left-[190px] max-[1280px]:-top-[260px] max-[1280px]:w-[26vw]

            /* Small desktop / large tablet (~1024px) */
            max-[1100px]:-left-[200px] max-[1100px]:-top-[230px] max-[1100px]:w-[30vw]

            {/* Surface Pro / ~912px screens */}
            max-[1000px]:-left-[150px] max-[1000px]:-top-[600px] max-[1000px]:w-[33vw]

            /* Tablet fallback (≤900px): center above FAQ */
            max-[900px]:-left-[150px] max-[900px]:-top-[600px]
          "
          style={{ width: "clamp(170px, 24vw, 500px)" }}
        >
          <Image
            src="/images/closedphone.gif"
            alt="closed flip phone"
            width={500}
            height={500}
            priority
            className="min-w-[360px] h-auto scale-x-[-1]"
          />
        </div>
      </div>
    </section>
  );
}
