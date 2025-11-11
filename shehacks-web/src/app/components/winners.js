"use client";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import Image from "next/image";

// Frame positions/sizes (your existing numbers)
// smaller screenshot area
const SCREEN = { top: "26%", left: "25%", width: "55%", height: "36%" };
// adjust caption position if needed after changing SCREEN
const CAPTION = { top: "68%", left: "58%", width: "32%", height: "18%" };

// <<< Set your design-size for the caption content here >>>
const DESIGN = { WIDTH: 420, HEIGHT: 130 }; // tweak to match how much text you want to fit

function useProportionalScale(designW, designH, buffer = 0.98) {
  const boxRef = useRef(null);
  const innerRef = useRef(null);

  useLayoutEffect(() => {
    const box = boxRef.current;
    const inner = innerRef.current;
    if (!box || !inner) return;

    // Keep inner at design size; we will scale it to fit the box
    inner.style.width = `${designW}px`;
    inner.style.height = `${designH}px`;
    inner.style.transformOrigin = "top left";

    const fit = () => {
      const bw = box.clientWidth || 1;
      const bh = box.clientHeight || 1;
      const scaleX = bw / designW;
      const scaleY = bh / designH;
      const s = Math.min(scaleX, scaleY) * buffer; // uniform scale, with a tiny margin
      inner.style.transform = `scale(${s})`;
    };

    const ro = new ResizeObserver(fit);
    ro.observe(box);
    window.addEventListener("resize", fit);
    fit(); // run now

    // run once more after fonts load
    const raf = requestAnimationFrame(fit);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
      cancelAnimationFrame(raf);
    };
  }, [designW, designH, buffer]);

  return { boxRef, innerRef };
}

// Three winners data (title, description, optional image)
const WINNERS = [
  {
    title: "SqWITS Game — Third Place @ SheHacks+ 9",
    description:
      "A quirky, interactive app designed to keep you on track by punishing you in themed ways whenever you go on your phone, incentivizing you to study more than your friends, and providing predictive capabilities on your performance.",
    image: "/images/template-pastwinners1.png",
  },
  {
    title: "Space In Accessibility — First Place @ SheHacks+ 9",
    description:
    "Spaceinaccessibility is a project designed to break barriers in space exploration by enabling real time translation of American Sign Language (ASL) referred to here as Astronaut Sign Language for deaf astronauts.",    
    image: "/images/A-sign winner.png",
  },
  {
    title: "PantryPixie — Second Place @ SheHacks+ 9",
    description:
    "Canadian households throw away $1,300 of food annually. The nation’s food waste could feed every Canadian for five months. This is the problem PantryPixie aims to solve.",    
    image: "/images/pixie-winner.png",
  },
];

export default function Winners() {
  // index + auto-advance
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null); // plain JavaScript (no TypeScript types)
  const [visible, setVisible] = useState(true); // for simple fade

  // Hook gives you refs for the outer box and inner content
  const { boxRef, innerRef } = useProportionalScale(DESIGN.WIDTH, DESIGN.HEIGHT, 0.985);

  // advance function
  const next = (step = 1) => {
    setVisible(false);
    // small delay to let fade-out run before swapping content
    window.setTimeout(() => {
      setIndex((i) => (i + step + WINNERS.length) % WINNERS.length);
      // fade back in
      window.setTimeout(() => setVisible(true), 30);
    }, 160); // matches CSS transition below (150ms) + small buffer
  };

  // auto-advance every 5s
  useEffect(() => {
    // clear any existing
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = window.setInterval(() => next(1), 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount

  // manual navigation (resets timer)
  const goTo = (toIndex) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setVisible(false);
    window.setTimeout(() => {
      setIndex((toIndex + WINNERS.length) % WINNERS.length);
      window.setTimeout(() => setVisible(true), 30);
      // restart auto-advance
      timerRef.current = window.setInterval(() => next(1), 5000);
    }, 160);
  };

  const title = WINNERS[index].title;
  const description = WINNERS[index].description;
  const screenshot = WINNERS[index].image;

  return (
    <section id="winners" className="scroll-mt-28 py-24">
      <h2 className="sr-only">Past SheHacks+ Winners</h2>

      <div className="px-4 flex justify-center">
        <div className="relative w-[min(1200px,96vw)]" style={{ aspectRatio: "830 / 768" }}>
          {/* Screen inside frame - swap image per winner */}
          <div
            className="absolute z-0 overflow-hidden transition-opacity duration-300"
            style={{ top: SCREEN.top, left: SCREEN.left, width: SCREEN.width, height: SCREEN.height }}
          >
            <Image
              src={screenshot}
              alt={`Demo project screenshot: ${title}`}
              fill
              className="object-contain"
              sizes="(min-width:1200px) 840px, 70vw"
              priority
            />
          </div>

          {/* Hard-drawn frame */}
          <div className="absolute inset-0 z-10 pointer-events-none select-none -translate-x-[10px] md:-translate-x-[14px] lg:-translate-x-[18px]">
            <Image
              src="/images/pastwinners.png"
              alt="Past SheHacks+ Winners frame"
              fill
              className="object-contain"
              sizes="(min-width:1200px) 1200px, 96vw"
              priority
            />
          </div>

          {/* Arrow buttons (manual control) */}
          <div className="absolute z-30 top-[60%] -translate-y-1/2 right-35 flex flex-col gap-2">
            
            <button
              aria-label="Next winner"
              onClick={() => {
                goTo(index + 1);
              }}
              className="w-12 h-12 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          {/* Caption: OUTER box defines the rectangle; INNER is fixed design size and scales to fit */}
          <div
            ref={boxRef}
            className="absolute z-20 overflow-hidden"
            style={{ top: CAPTION.top, left: CAPTION.left, width: CAPTION.width, height: CAPTION.height }}
          >
            <div
              ref={innerRef}
              // keep same scaling approach; toggle opacity for simple fade
              className={`text-white/95 leading-tight [text-wrap:balance] [hyphens:auto] origin-top-left transition-opacity duration-150 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
              // The font sizes here assume the design size. They will scale with the whole block.
              style={{ fontSize: 18 }}
            >
              <p className="italic font-semibold" style={{ fontSize: 20, lineHeight: 1.1 }}>
                {title}
              </p>
              <p className="mt-2 opacity-90" style={{ fontSize: 15, lineHeight: 1.25 }}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
