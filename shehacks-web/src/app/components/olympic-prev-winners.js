"use client";
import { useState } from "react";
import Image from "next/image";

export default function PastWinners() {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* Past Hacker Olympics Winners section */}
      <section className="relative w-full max-w-[1200px] mx-auto mt-8 md:mt-12 lg:mt-16">
        {/* Centered text block */}
        <div className="flex flex-col items-center justify-center text-center py-8 px-4">
          <h1 className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-bold mb-8">
            Past Hacker Olympics Winners
          </h1>

          {/* Full-width image */}
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/images/past-hacker-olympic-winners.png"
              alt="Past Hacker Olympics Winners"
              fill
              className="object-contain select-none pointer-events-none"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}