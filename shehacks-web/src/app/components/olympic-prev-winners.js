"use client";
import { useRef, useLayoutEffect } from "react";
import Image from "next/image";

// Frame positions/sizes - adjusted for the "dire" project layout
const SCREEN = { top: "19%", left: "11%", width: "74%", height: "52%" };
const CAPTION = { top: "68%", left: "50%", width: "52%", height: "22%" };
const HEADER = { top: "8%", left: "34%", width: "50%", height: "8%" };

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

export default function PastWinners() {
  const title = "dire: Second Place HO Overall";
  const description =
    "dire is a versatile to-do list, calendar, and habit-tracking platform designed to keep you aligned with your goals. built on the principles of urgency, consistency, and gratification, it helps you stay on course:";

  // Hook gives you refs for the outer box and inner content
  const { boxRef, innerRef } = useProportionalScale(DESIGN.WIDTH, DESIGN.HEIGHT, 0.985);
  const { boxRef: headerBoxRef, innerRef: headerInnerRef } = useProportionalScale(HEADER_DESIGN.WIDTH, HEADER_DESIGN.HEIGHT, 0.98);

  return (
    <section id="past-winners" className="scroll-mt-28 py-16 md:py-24">
      <div className="px-4 flex justify-center">
        <div className="relative w-[min(1200px,96vw)]" style={{ aspectRatio: "1140 / 1064" }}>
          {/* Main header - positioned in the top rectangle */}
          <div 
            ref={headerBoxRef}
            className="absolute z-20 overflow-hidden"
            style={{ 
              top: HEADER.top, 
              left: HEADER.left, 
              width: HEADER.width, 
              height: HEADER.height 
            }}
          >
            <div
              ref={headerInnerRef}
              className="flex items-center justify-center origin-top-left"
              style={{ width: HEADER_DESIGN.WIDTH, height: HEADER_DESIGN.HEIGHT }}
            >
              <h2 className="text-center text-white whitespace-nowrap" style={{ 
                fontFamily: "'Segoe UI', system-ui, sans-serif",
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: '26px',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}>
                Past Hacker Olympics Winners
              </h2>
            </div>
          </div>

          {/* Screen inside frame - Add your screenshot here */}
          {/* To add a screenshot: place your image in /public/images/ and update the src below */}
          {/* Example: src="/images/your-screenshot-name.png" */}

          {/* Hard-drawn frame */}
          <div className="absolute inset-0 z-10 pointer-events-none select-none">
            <Image
              src="/images/past-hacker-olympic-winners.png"
              alt="Past Hacker Olympics Winners frame"
              fill
              className="object-contain"
              sizes="(min-width:1200px) 1200px, 96vw"
              priority
            />
          </div>

          {/* Caption: OUTER box defines the rectangle; INNER is fixed design size and scales to fit */}
          <div
            ref={boxRef}
            className="absolute z-20 overflow-hidden"
            style={{ 
              top: CAPTION.top, 
              left: CAPTION.left, 
              width: CAPTION.width, 
              height: CAPTION.height 
            }}
          >
            <div
              ref={innerRef}
              className="text-white/95 leading-tight [text-wrap:balance] [hyphens:auto] origin-top-left"
              style={{ fontSize: 16 }}
            >
              <p className="italic font-semibold" style={{ fontSize: 19, lineHeight: 1.2 }}>
                {title}
              </p>
              <p className="mt-2 opacity-90" style={{ fontSize: 14.5, lineHeight: 1.35 }}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}