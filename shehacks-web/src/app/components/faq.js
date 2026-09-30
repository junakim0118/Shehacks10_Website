"use client";
import { useState } from "react";

const DEFAULT_ITEMS = [
  { q: "What challenges will I compete in?", a: "TBD — venue and address to be provided." },
  { q: "If I'm a beginner, can I sompete in the regular stream?", a: "" },
  { q: "Do I need to come with a team?", a: "" },
  { q: "Can I compete in both Hacker Olympics and regular stream?", a: "" },
];

// These bounds hide the empty margins in the original PNG exports.
const ART = {
  paper: {
    file: "white_stickynote.png",
    bounds: [31.4, 50, 34.6, 35.4],
  },
  label: {
    file: "red_square.png",
    bounds: [33.8, 47.8, 14, 5.3],
  },
  footprints: {
    file: "Feather.png",
    bounds: [35.5, 29.5, 26.5, 46.5],
  },
  hearts: {
    file: "hearts_card.png",
    bounds: [33.5, 23.8, 34.6, 47.8],
  },
  spades: {
    file: "spades_card.png",
    bounds: [33.5, 23.8, 34.6, 47.8],
  },
  diamonds: {
    file: "dimond_card.png",
    bounds: [33.5, 23.8, 34.6, 47.8],
  },
};

function Artwork({ name, className = "" }) {
  const { file, bounds } = ART[name];
  const [x, y, width, height] = bounds;

  return (
    <div
      aria-hidden="true"
      className={`absolute bg-no-repeat pointer-events-none select-none ${className}`}
      style={{
        backgroundImage: `url("/images/faq/${file}")`,
        backgroundSize: `${10000 / width}% ${10000 / height}%`,
        backgroundPosition: `${(x / (100 - width)) * 100}% ${
          (y / (100 - height)) * 100
        }%`,
      }}
    />
  );
}

export default function Faq({ items = DEFAULT_ITEMS }) {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative isolate scroll-mt-28 -mx-8 overflow-hidden pt-[clamp(260px,65vw,650px)] px-6 pb-[115px] sm:-mx-20 sm:px-[9%] sm:pb-[170px]"
    >
      <div className="relative w-full max-w-[1000px] mx-auto [container-type:inline-size]">
        <Artwork
          name="footprints"
          className="top-[-65cqw] left-[10%] w-[82%] h-auto aspect-[26.5/46.5] transform-none z-0 opacity-60 [clip-path:inset(0_0_calc(100%_-_65cqw)_0)]"
        />

        <div className="relative isolate w-full min-h-[660px] pt-[82px] px-[6%] pb-[145px] text-[#35332f] sm:min-h-[850px] sm:pt-[120px] sm:pb-[230px]">
          <Artwork name="paper" className="z-0 inset-0" />

          <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none" aria-hidden="true">
            <Artwork
              name="footprints"
              className="top-[-65cqw] left-[10%] w-[82%] h-auto aspect-[26.5/46.5] transform-none z-0 opacity-60"
            />
          </div>

          <div className="absolute top-[-34px] left-[5%] grid place-items-center w-[58%] h-[88px] [transform:rotate(0.5deg)] z-[2] sm:top-[-56px] sm:left-[5.5%] sm:w-[44%] sm:h-[145px]">
            <Artwork name="label" className="inset-0" />
            <h2 id="faq-heading" className="relative m-0 text-[#fff7e9] [font-family:Xilla,sans-serif] text-[clamp(48px,7vw,76px)] font-bold leading-none">
              FAQ
            </h2>
          </div>

          <ul className="relative z-[2] m-0 p-0 list-none">
            {items.map((item, i) => {
              const isOpen = open === i;

              return (
                <li key={item.q} className="border-b border-[rgb(68_62_53/50%)]">
                  <button
                    type="button"
                    id={`faq-question-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="flex items-center justify-between gap-3 w-full min-h-[56px] py-3 px-[5px] border-0 border-none bg-transparent text-inherit text-left [font-family:Inconsolata,monospace] text-[16px] font-normal leading-[1.4] cursor-pointer hover:bg-[rgb(104_68_50/5%)] focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-[#852d23] focus-visible:outline-offset-4 sm:gap-5 sm:min-h-[60px] sm:py-[14px] sm:px-6 sm:text-[clamp(16px,1.8vw,21px)]"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>

                    <span className="shrink-0 text-[28px] font-normal leading-none" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${i}`}
                    aria-labelledby={`faq-question-${i}`}
                    hidden={!isOpen}
                    className="pt-0 px-[5px] pb-4 sm:px-6 sm:pb-5"
                  >
                    <p className="m-0 [font-family:Inconsolata,monospace] text-[clamp(16px,1.6vw,19px)] leading-[1.6]">{item.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="absolute z-[2] right-[-50px] bottom-[-80px] w-[260px] h-[370px] pointer-events-none [transform:scale(0.62)] origin-bottom-right sm:right-[-105px] sm:bottom-[-125px] sm:transform-none sm:origin-center" aria-hidden="true">
            <Artwork name="diamonds" className="w-[195px] h-[270px] top-[95px] left-0 [transform:rotate(-32deg)]" />
            <Artwork name="hearts" className="w-[195px] h-[270px] top-0 left-[65px] [transform:rotate(-26deg)]" />
            <Artwork name="spades" className="w-[195px] h-[270px] top-[85px] left-[70px] [transform:rotate(-13deg)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
