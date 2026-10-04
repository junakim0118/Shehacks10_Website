"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
const LOCK_IN_PLACE = false;

{/* Flyaway Pages */}
const PAGES = [
  { src: "/images/flyaway1.png", top: -10,  left: 30, h: 60, rest: -20, x: 130,  y: -10, spin: 25 },
  { src: "/images/flyaway2.png", top: 20, left: 20, h: 60, rest: 15, x: -130, y: -5,  spin: -30 },
  { src: "/images/flyaway3.png", top: -10, left: -30, h: 60, rest: 15, x: 130,  y: 5,   spin: 35 },
  { src: "/images/flyaway4.png", top: -18, left: 3, h: 60, rest: 80, x: -130, y: 5,   spin: -25 },
  { src: "/images/flyaway5.png", top: 20, left: -20, h: 60, rest: -50, x: 130,  y: 10,  spin: 30 },
  { src: "/images/flyaway1-2.png", top: 50, left: -20, h: 60, rest: -20, x: -130, y: 10, spin: -30 },
  { src: "/images/flyaway4-2.png", top: 40, left: 20, h: 60, rest: 20,  x: 130,  y: 15, spin: 30 },
];

{/* 
    - True = pages have already flown away
    - False = pile is showing
*/}
export default function FlyAways() {
  const [revealed, setRevealed] = useState(false);
  const reduceMotion = useReducedMotion();

  //skip animation for reduced motion users
  if (reduceMotion && !LOCK_IN_PLACE) return null;

  {/* Overlay covers blueprint: animate on click or hover */}
  return (
    <div
      aria-hidden="true"
      onMouseEnter={LOCK_IN_PLACE ? undefined : () => setRevealed(true)}
      onClick={LOCK_IN_PLACE ? undefined : () => setRevealed(true)}
      className={`absolute inset-0 z-40 hidden md:block ${
        LOCK_IN_PLACE ? "pointer-events-none" : revealed ? "pointer-events-none" : ""
  }`}
>
      {/* Loop over pages + animate image per entry */}
      {PAGES.map((page, i) => (
        <div
          key={page.src}
          className="absolute left-0 w-full"
          style={{ 
            top: `${page.top}%`, 
            height: `${page.h}%`,
            left:  `${page.left}%`,
            zIndex: PAGES.length - i }}
        >
          {/* Animation wrapper */}
          <motion.div
            initial={false}
            animate={
              revealed
              //flown-away pose
                ? { x: `${page.x}%`, y: `${page.y}%`, rotate: page.rest + page.spin, opacity: 0 }
              //resting pose  
                : { rotate: page.rest }
            }
            transition={{ duration: 0.8, ease: "easeIn", delay: revealed ? i * 0.12 : 0 }}
            className="relative mx-auto h-full w-[94%] will-change-transform"
          >
            <Image
              src={page.src}
              alt="flyaway"
              fill
              sizes="(max-width: 768px) 90vw, 70vw"
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}
