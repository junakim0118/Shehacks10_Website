"use client";
import { useState } from "react";
import Image from "next/image";

const DEFAULT_ITEMS = [
  { q: "Can I compete in both Hacker Olympics and regular stream?", a: "Unfortunately, you will have to choose between the option of Hacker Olympics and Regular Stream. We want to ensure that you have enough time for your hack and that you complete your hack to the best of your ability." },
  { q: "If I am a beginner, can I compete in the regular stream?", a: "Yes, you’re allowed to choose one of the two streams that you believe suits you and your skillset." },
  { q: "What challenges will I compete in?", a: "The challenges will be announced a week ahead of the hackathon. You will receive an email when it opens up so you don't miss anything." },
  { q: "Can I switch into a different stream the day of SheHacks+?", a:"Unfortunately, you will have to remain in the stream you chose during applications. If you miss the deadline, there will be a waitlist you can sign up for."}
];

const PHONE_DESIGN = { width: 500, height: 500 };

export default function HOFaq({ items = DEFAULT_ITEMS }) {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="relative scroll-mt-5 -mt-60 py-16 sm:py-20 w-full">
    
      {/* Unified Mobile and Tablet layout (everything that is below lg) */}
      <div className="flex flex-col items-center justify-center space-y-4 lg:hidden">
          
        {/* Left column: Stars + Phone */}
        <div className=" flex flex-col">
      
          {/* Big star cluster */}
          <div className="">
            <Image
              src="/images/stars.png"
              alt="stars"
              width={69}
              height={72}
              priority
              className="w-[10vw] max-w-[80px] h-auto"
            />
          </div>

          {/* Desktop phone */}
          <div className="inline-block ml-[5vw]">
            <Image
              src="/images/closedphone.gif"
              alt="closed flip phone"
              width={460}
              height={501}
              priority
              className="w-[10vw] max-w-[460px] h-auto scale-x-[-1]"
            />
          </div>

          {/* Single star */}
          <div className="ml-[14vw]">
            <Image
              src="/images/star.png"
              alt="star"
              width={69}
              height={72}
              priority
              className="w-[4vw] max-w-[80px] h-auto"
            />
          </div>
        </div>

        {/* Center column: FAQ */}
        <div className="flex-1 mt-[2vw]">
          <div className="max-w-3xl mx-auto px-4">
            <h2
              className="text-center font-semibold text-white"
              style={{ fontSize: "clamp(24px, 3vw, 34px)" }}
            >
              FAQ
            </h2>

            <div className="mt-6 w-full">
              <ul className="divide-y divide-white/15">
                {items.map((item, i) => {
                  const isOpen = open === i;
                  return (
                    <li key={i} className="py-3 sm:py-4 w-full">
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

                        <span
                          className="relative inline-flex h-5 w-5 items-center justify-center"
                          aria-hidden="true"
                        >
                          <span className="absolute h-[2px] w-3.5 bg-white transition-opacity duration-200" />
                          <span
                            className={`absolute h-3.5 w-[2px] bg-white transition-transform duration-200 ${
                              isOpen ? "scale-y-0" : "scale-y-100"
                            }`}
                          />
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
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
        </div>
        
        {/* Right column: Empty spacer */}
        <div className="flex-1"></div>
      </div>

      {/* DESKTOP layout */}
      <div className="hidden lg:flex flex-col w-full min-h-[700px] px-8 gap-x-8">
        
        {/* Left column: Stars + Phone */}
        <div className=" flex flex-col">
          
          {/* Big star cluster */}
          <div className="">
            <Image
              src="/images/stars.png"
              alt="stars"
              width={69}
              height={72}
              priority
              className="w-[10vw] max-w-[80px] h-auto"
            />
          </div>

          {/* Desktop phone */}
          <div className="inline-block ml-[5vw]">
            <Image
              src="/images/closedphone.gif"
              alt="closed flip phone"
              width={460}
              height={501}
              priority
              className="w-[10vw] max-w-[460px] h-auto scale-x-[-1]"
            />
          </div>

          {/* Single star */}
          <div className="ml-[14vw]">
            <Image
              src="/images/star.png"
              alt="star"
              width={69}
              height={72}
              priority
              className="w-[4vw] max-w-[80px] h-auto"
            />
          </div>

        </div>

        {/* Center column: FAQ */}
        <div className="flex-1">
          <div className="max-w-3xl mx-auto px-4">
            <h2
              className="text-center font-semibold text-white"
              style={{ fontSize: "clamp(24px, 3vw, 34px)" }}
            >
              FAQ
            </h2>

            <div className="mt-6 w-full">
              <ul className="divide-y divide-white/15">
                {items.map((item, i) => {
                  const isOpen = open === i;
                  return (
                    <li key={i} className="py-3 sm:py-4 w-full">
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

                        <span
                          className="relative inline-flex h-5 w-5 items-center justify-center"
                          aria-hidden="true"
                        >
                          <span className="absolute h-[2px] w-3.5 bg-white transition-opacity duration-200" />
                          <span
                            className={`absolute h-3.5 w-[2px] bg-white transition-transform duration-200 ${
                              isOpen ? "scale-y-0" : "scale-y-100"
                            }`}
                          />
                        </span>
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
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
        </div>
      </div>

      {/* Right column: Empty spacer */}
      <div className="flex-1"></div>
    </section>
  );
}
