"use client";
import Image from "next/image";

const nav = [
  { label: "ABOUT", href: "#about" },
  { label: "SPONSOR", href: "#sponsor" },
  { label: "OLYMPICS", href: "#olympics" },
  { label: "COMMUNITY", href: "#community" },
  { label: "FAQ", href: "#faq" },
];

// NAVLINE 
const NAVLINE = {
  top: 55,       
  leftOffset: 140, 
  width: 1100,    
  height: 70,      
  brightness: 0.95,
  contrast: 1.05,
};

// TEXT 
const TEXTBOX = {
  top: 34,        
  leftOffset: 140,
  width: 650,      
  height: 53,     
  padL: 72,     
  padR: 56,       
  fontSize: 13,    
  letterSpacing: "0.14em",
  yNudge: -1,     
};

export default function Navbar() {
    return (
        <header className="relative w-full text-white">
          <nav className="mx-auto max-w-screen-xl px-4 pb-8 flex items-start justify-between">
            <div className="flex items-start gap-3 shrink-0 ml-0">
              <a
                id="mlh-trust-badge"
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-[96px] min-w-[60px] -mt-1"  
                aria-label="Major League Hacking 2026 Hackathon Season"
              >
                <img
                  src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
                  alt="Major League Hacking 2026 Hackathon Season"
                  className="w-full h-auto"
                />
              </a>    
          <Image src="/images/SHnavlogo.png" alt="sh+" width={98} height={74}
            className="select-none pointer-events-none mt-[27px]" />
        </div>
        <div className="shrink-0 w-[90px]" />
      </nav>

      <div
        className="absolute z-10 pointer-events-none select-none"
        style={{
          top: NAVLINE.top,
          left: "50%",
          transform: `translateX(calc(-50% + ${NAVLINE.leftOffset}px))`,
          width: NAVLINE.width,
          height: NAVLINE.height,
        }}
      >
        <Image
          src="/images/navline.png"
          alt="Navigation bar"
          fill
          sizes={`${NAVLINE.width}px`}
          className="absolute inset-0 w-full h-full object-contain"
          style={{ filter: `brightness(${NAVLINE.brightness}) contrast(${NAVLINE.contrast})` }}
          priority
        />
      </div>

      <div
        className="absolute z-20"
        style={{
          top: TEXTBOX.top,
          left: "50%",
          transform: `translateX(calc(-50% + ${TEXTBOX.leftOffset}px))`,
          width: TEXTBOX.width,
          height: TEXTBOX.height,
        }}
      >
        <ul
          className="flex h-full w-full items-center justify-between uppercase font-semibold leading-none"
          style={{
            paddingLeft: TEXTBOX.padL,
            paddingRight: TEXTBOX.padR,
            fontSize: `${TEXTBOX.fontSize}px`,
            letterSpacing: TEXTBOX.letterSpacing,
            transform: `translateY(${TEXTBOX.yNudge}px)`,
          }}
        >
          {nav.map((i) => (
            <li key={i.href}>
              <a href={i.href} className="px-1.5 py-1 hover:opacity-90">{i.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
