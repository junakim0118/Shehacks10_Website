"use client";
import { useRef, useLayoutEffect } from "react";
import Image from "next/image";

// Frame positions/sizes (your existing numbers)
const SCREEN = { top: "24%", left: "17%", width: "70%", height: "40%" };
const CAPTION = { top: "69%", left: "53%", width: "34%", height: "18%" };

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

export default function Winners() {
  const title = "SqWITS Game — Third Place (Overall)";
  const description =
    "A quirky, interactive app designed to keep you on track by punishing you in themed ways whenever you go on your phone, incentivizing you to study more than your friends, and providing predictive capabilities on your performance."

  // Hook gives you refs for the outer box and inner content
  const { boxRef, innerRef } = useProportionalScale(DESIGN.WIDTH, DESIGN.HEIGHT, 0.985);

  return (
    <section id="winners" className="scroll-mt-28 py-24">
      <h2 className="sr-only">Past SheHacks+ Winners</h2>

      <div className="px-4 flex justify-center">
        <div className="relative w-[min(1200px,96vw)]" style={{ aspectRatio: "830 / 768" }}>
          {/* Screen inside frame */}
          <div
            className="absolute z-0 overflow-hidden"
            style={{ top: SCREEN.top, left: SCREEN.left, width: SCREEN.width, height: SCREEN.height }}
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

          {/* Caption: OUTER box defines the rectangle; INNER is fixed design size and scales to fit */}
          <div
            ref={boxRef}
            className="absolute z-20 overflow-hidden"
            style={{ top: CAPTION.top, left: CAPTION.left, width: CAPTION.width, height: CAPTION.height }}
          >
            <div
              ref={innerRef}
              className="text-white/95 leading-tight [text-wrap:balance] [hyphens:auto] origin-top-left"
              // The font sizes here assume the design size. They will scale with the whole block.
              style={{ fontSize: 18 }} // base design font; everything scales from here
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
