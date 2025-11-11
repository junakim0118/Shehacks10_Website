"use client";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import Image from "next/image";

// Frame positions/sizes - slightly smaller screenshot area so images fit inside frame
const SCREEN = { top: "20%", left: "10%", width: "78%", height: "50%" };
const CAPTION = { top: "68%", left: "50%", width: "40%", height: "20%" };
const HEADER = { top: "9%", left: "34%", width: "48%", height: "7%" };

// Design size for the caption content
const DESIGN = { WIDTH: 520, HEIGHT: 160 };
const HEADER_DESIGN = { WIDTH: 500, HEIGHT: 60 };

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

// Winners data (title, description, optional screenshot)
const WINNERS = [
  {
    title: "StarCheck — First Place (HO Overall)",
    description:
    "An interactive web platform that merges productivity with creativity by allowing users to create checklists and track progress in a gamified space explorer theme. ",    
    image: "/images/howinner1.png",
  },
  {
    title: "dire — Second Place (HO Overall)",
    description:
    "dire is a versatile to-do list, calendar, and habit-tracking platform designed to keep you aligned with your goals. built on the principles of urgency, consistency, and gratification, it helps you stay on course.",
    image: "/images/howinner2.png",
  },
  {
    title: "Space Cruise+ — Third Place (HO Overall)",
    description:
    "You can add new tasks, delete pre existing tasks listed as a guide. You can mark tasks as completed and categorize different stages of the space exploration by creating three separate to do lists.",
    image: "/images/howinner3.png",
  },
];

export default function PastWinners() {
  // carousel state
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);

  const { boxRef, innerRef } = useProportionalScale(DESIGN.WIDTH, DESIGN.HEIGHT, 0.985);
  const { boxRef: headerBoxRef, innerRef: headerInnerRef } = useProportionalScale(
    HEADER_DESIGN.WIDTH,
    HEADER_DESIGN.HEIGHT,
    0.98
  );

  // advance with fade
  const advance = (step = 1) => {
    setVisible(false);
    window.setTimeout(() => {
      setIndex((i) => (i + step + WINNERS.length) % WINNERS.length);
      window.setTimeout(() => setVisible(true), 40);
    }, 180);
  };

  // manual navigation, reset timer
  const goTo = (toIndex) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setVisible(false);
    window.setTimeout(() => {
      setIndex((toIndex + WINNERS.length) % WINNERS.length);
      window.setTimeout(() => setVisible(true), 40);
      timerRef.current = window.setInterval(() => advance(1), 5000);
    }, 180);
  };

  // start auto-advance
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => advance(1), 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = WINNERS[index];

  return (
    <section id="past-winners" className="scroll-mt-28 py-4 md:py-8">
      <div className="px-4 flex justify-center">
        <div className="relative w-[min(1200px,96vw)]" style={{ aspectRatio: "1140 / 1064" }}>
          {/* Header */}
          <div
            ref={headerBoxRef}
            className="absolute z-20 overflow-hidden"
            style={{
              top: HEADER.top,
              left: HEADER.left,
              width: HEADER.width,
              height: HEADER.height,
            }}
          >
            <div
              ref={headerInnerRef}
              className="flex items-center justify-center origin-top-left"
              style={{ width: HEADER_DESIGN.WIDTH, height: HEADER_DESIGN.HEIGHT }}
            >
              <h2
                className="text-center text-white whitespace-nowrap"
                style={{
                  fontFamily: "'Segoe UI', system-ui, sans-serif",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "24px", // reduced
                  lineHeight: "100%",
                }}
              >
                Past Hacker Olympics Winners
              </h2>
            </div>
          </div>

          {/* Optional per-winner screenshot inside the screen rectangle */}
          {current.image && (
            <div
              className="absolute z-0 overflow-hidden transition-opacity duration-300"
              style={{
                top: SCREEN.top,
                left: SCREEN.left,
                width: SCREEN.width,
                height: SCREEN.height,
              }}
            >
              {/* center + scale the screenshot so it always fits inside the frame */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-[65%] h-[65%]"> {/* smaller inner size */}
                  <Image
                    src={current.image}
                    alt={`Screenshot for ${current.title}`}
                    fill
                    className="object-contain"
                    sizes="(min-width:1200px) 840px, 70vw"
                    priority
                  />
                </div>
              </div>
            </div>
          )}

          {/* Hard-drawn frame */}
          <div className="absolute inset-0 z-10 pointer-events-none select-none">
            <Image
              src="/images/ho-pastwinners.png"
              alt="Past Hacker Olympics Winners frame"
              fill
              className="object-contain"
              sizes="(min-width:1200px) 1200px, 96vw"
              priority
            />
          </div>

          {/* Arrow controls (manual) */}
          <div className="absolute z-30 top-[60%] right-[20vw]  transform -translate-y-1/2 flex flex-col gap-2">

            <button
              aria-label="Next winner"
              onClick={() => goTo(index + 1)}
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
            style={{
              top: CAPTION.top,
              left: CAPTION.left,
              width: CAPTION.width,
              height: CAPTION.height,
            }}
          >
            <div
              ref={innerRef}
              className={`text-white/95 leading-tight [text-wrap:balance] [hyphens:auto] origin-top-left transition-opacity duration-150 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
              style={{ fontSize: 14 }} // overall smaller base font
            >
              <p className="italic font-semibold" style={{ fontSize: 20, lineHeight: 1.15 }}>
                {current.title}
              </p>
              <p className="mt-2 opacity-90" style={{ fontSize: 15, lineHeight: 1.3 }}>
                {current.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}