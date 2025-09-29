"use client";
import Image from "next/image";

const SCREEN = {
  top: "24%",
  left: "17%",
  width: "70%",
  height: "40%",
};

const CAPTION = {
  top: "69%",
  left: "53%",
  width: "34%",
};

export default function Winners() {
  const title = "SqWITS Game — Third Place (Overall)";
  const description =
    "A quirky narrative-style study app that makes progress feel fun. " +
    "Built with React and Python, it nudges you with timely challenges and playful feedback.";

  return (
    <section id="winners" className="scroll-mt-28 py-24">
      <h2 className="sr-only">Past SheHacks+ Winners</h2>

      <div className="px-4 flex justify-center">
        <div
          className="relative w-[min(1200px,96vw)]"
          style={{ aspectRatio: "830 / 768" }}
        >
          <div
            className="absolute z-0 overflow-hidden"
            style={{
              top: SCREEN.top,
              left: SCREEN.left,
              width: SCREEN.width,
              height: SCREEN.height,
            }}
          >
            <Image
              src="/images/template-pastwinners1.png"
              alt="Demo project screenshot"
              fill
              className="object-contain"
              sizes="(min-width:1200px) 840px, 70vw"
              priority
            />
          </div>

          <div
            className="
              absolute inset-0 z-10 pointer-events-none select-none
              transform -translate-x-[10px] md:-translate-x-[14px] lg:-translate-x-[18px]
            "
          >
            <Image
              src="/images/pastwinners.png"
              alt="Past SheHacks+ Winners frame"
              fill
              className="object-contain"
              sizes="(min-width:1200px) 1200px, 96vw"
              priority
            />
          </div>

          <div
            className="absolute z-20 text-white/95"
            style={{
              top: CAPTION.top,
              left: CAPTION.left,
              width: CAPTION.width,
            }}
          >
            <p className="italic font-semibold text-sm sm:text-base">{title}</p>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed opacity-90">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
