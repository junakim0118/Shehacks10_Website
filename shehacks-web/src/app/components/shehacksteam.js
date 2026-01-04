"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";

/* ---------------------- Responsive scaling ---------------------- */
function useResponsiveScale() {
  const [s, setS] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;
      // Designed for ~1200px base — scale down but not below 0.18x
      const scale = Math.max(0.18, Math.min(1, vw / 1200));
      setS(scale);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return s;
}

/* ---------------------- Frame helpers ---------------------- */
const FRAME_SRC = {
  cochair: "/images/team/cochairshehacksframe.png",
  director: "/images/team/directorshehacksframe.png",
};
function pickFrameSrc(role = "") {
  const r = role.toLowerCase();
  if (r.includes("co-chair") || r.includes("cochair")) return FRAME_SRC.cochair;
  return FRAME_SRC.director;
}

const HEADSHOT_SCALE = 0.34;
function FrameCard({ person, scale = 1 }) {
  const frameSrc = pickFrameSrc(person.role);
  const dims = { w: 520, h: 430 };
  return (
    <div
      className="relative select-none"
      style={{
        width: dims.w,
        height: dims.h,
        transform: `scale(${scale})`,
        transformOrigin: "center",
        transition: "transform 0.5s ease",
      }}
    >
      <Image src={frameSrc} alt={person.name} width={dims.w} height={dims.h} />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <div
          className="relative rounded-md overflow-hidden mb-3"
          style={{ width: `${HEADSHOT_SCALE * 100}%`, aspectRatio: "1/1" }}
        >
          <Image src={person.photo} alt={person.name} fill className="object-cover" />
        </div>
        <p className="text-base sm:text-lg font-semibold tracking-tight text-white/95">
          {person.name}
        </p>
      </div>
    </div>
  );
}

/* ---------------------- Carousel ---------------------- */
export default function SheHacksTeam() {
  const [isPaused, setIsPaused] = useState(false);
  const s = useResponsiveScale(); // ✅ scale whole carousel

  const people = useMemo(
    () => [
      { name: "Vaanya Puri", role: "SheHacks+ Co-Chair", photo: "/images/team/vaanya.jpeg",linkedin:'https://www.linkedin.com/in/vaanyap/' },
      { name: "Freda Zhao", role: "SheHacks+ Co-Chair", photo: "/images/team/freda.jpeg", linkedin:'https://www.linkedin.com/in/freda-z-984442210/' },
      { name: "Emily Yu", role: "SheHacks+ Director", photo: "/images/team/emily.jpeg", linkedin:'https://www.linkedin.com/in/emily-nz-yu/' },
      { name: "Lillian Wei", role: "SheHacks+ Director", photo: "/images/team/lillian.jpeg", linkedin:'https://www.linkedin.com/in/lillianhwei/' },
      { name: "Ella Sajor", role: "SheHacks+ Director", photo: "/images/team/ella.jpeg", linkedin:'https://www.linkedin.com/in/ella-sajor/' },
      { name: "Raisa Kayastha", role: "SheHacks+ Director", photo: "/images/team/raisa.jpeg", linkedin: 'https://www.linkedin.com/in/raisa-kayastha77/' },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const count = people.length;
  const idx = (i) => (i + count) % count;

  const goLeft = () => setIndex((i) => idx(i + 1));
  const goRight = () => setIndex((i) => idx(i - 1));

  useEffect(() => {
  if (isPaused) return; // don't rotate if paused
  const interval = setInterval(() => {
    goLeft();
  }, 2800);
  return () => clearInterval(interval);
}, [isPaused]);

  /* ✅ ORIGINAL VALUES: preserved exactly */
  const OFFSET_X = 380;
  const OFFSET_Y = 150;
  const SCALE_CENTER = 1;
  const SCALE_SIDE = 0.55;
  const DURATION = 500;

  return (
    <section className="py-12">
      <div className="relative flex justify-center items-center">
        {/* ✅ SCALE THE WHOLE CAROUSEL (this is the key fix) */}
        <div
          className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          style={{
            width: "1000px",
            height: "550px",
            overflow: "visible",
            transform: `scale(${s})`,
            transformOrigin: "center top",
            transition: "transform 0.35s ease",
          }}
        >
          {/* LEFT */}
          <div
            className="absolute top-1/2 left-1/2 transition-transform ease-[cubic-bezier(.22,.61,.36,1)] hover:scale-110"
            style={{
              transform: `translate(calc(-50% - ${OFFSET_X}px), calc(-50% + ${OFFSET_Y}px)) scale(${SCALE_SIDE})`,
              transitionDuration: `${DURATION}ms`,
            }}
          >
            <div className="float">
              <a href={people[idx(index - 1)].linkedin} target="_blank" rel="noopener noreferrer">
                <FrameCard person={people[idx(index - 1)]} />
              </a>
            </div>
          </div>

          {/* CENTER */}
          <div
            className="absolute top-1/2 left-1/2 transition-transform ease-[cubic-bezier(.22,.61,.36,1)] hover:scale-110"
            style={{
              transform: `translate(-50%, -50%) scale(${SCALE_CENTER})`,
              transitionDuration: `${DURATION}ms`,
            }}
          >
            <div className="float">
              <a href={people[idx(index)].linkedin} target="_blank" rel="noopener noreferrer">
                <FrameCard person={people[idx(index)]} />
              </a>            
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="absolute top-1/2 left-1/2 transition-transform ease-[cubic-bezier(.22,.61,.36,1)] hover:scale-110"
            style={{
              transform: `translate(calc(-50% + ${OFFSET_X}px), calc(-50% + ${OFFSET_Y}px)) scale(${SCALE_SIDE})`,
              transitionDuration: `${DURATION}ms`,
            }}
          >
            <div className="float">
              <a href={people[idx(index + 1)].linkedin} target="_blank" rel="noopener noreferrer">
                <FrameCard person={people[idx(index + 1)]} />
              </a>
            </div>
          </div>

        </div>
      </div>
      {/* --- Float animation --- */}
      <style jsx>{`
        .float {
          display: inline-block; /* preserve layout */
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .float:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
