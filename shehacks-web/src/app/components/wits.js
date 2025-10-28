"use client";
import Image from "next/image";
import Link from "next/link";

/** knobs */
const CAM_DESIGN = { width: 1080, height: 1350 }; // aspect ~1.368
const CAM_W_CLAMP = "clamp(260px, 40vw, 1080px)";   // ≥sm width range
const PB_CLAMP    = "clamp(220px, 30vw, 1350px)";   // bottom padding to avoid cropping
const BOTTOM_CLAMP = "calc(-1 * clamp(70px, 8vw, 140px))"; // dip below content

export default function Wits() {
  return (
    <section
      id="wits"
      className="relative scroll-mt-28 pt-12 md:pt-10"
      style={{ paddingBottom: PB_CLAMP }}
    >
        <div className="relative flex flex-col md:flex-row justify-center w-fit h-fit">
            
                        {/* DESKTOP/TABLET: camera absolute; auto-center at <= 880px */}
                <Image
                    src="/images/witsLogo.png"
                    alt="wits section"
                    width={402}
                    height={221}
                    className="w-[50vw] ml-[5vw] sm:w-[50vw] md:w-[60vw] lg:w-[100vw] h-auto object-contain select-none pointer-events-none"
                    priority
                  />
                     
                  <p
                    className="mt-[30px] ml-[10vw] mr-[7vw] sm:mt-10 md:mt-12 text-base sm:text-lg text-white/95"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.55)" }}
                  >
                    <strong className="block font-bold">Building a future for women+ in tech</strong>
                    <br></br>
                    WITS+ is a club at Western University that provides its community with initiatives and resources to inspire. We aim to empower women, women-identifying, and non-binary individuals in tech and equip them with the necessary skills to succeed in the industry.
                  </p>
                 
                        </div>
                  
                        {/* MOBILE: camera centered, not absolute (no cropping) */}
                        <div className="sm:hidden mt-5 flex justify-center">
                          <Image
                            src="/images/closedphone.gif"
                            alt="phone gif"
                            width={CAM_DESIGN.width}
                            height={CAM_DESIGN.height}
                            priority
                            className="pointer-events-none select-none w-[min(88vw,420px)] h-auto"
                          />
                        </div>
                  
                        {/* DESKTOP/TABLET: camera absolute; auto-center at <= 880px */}
                        <Image
                          src="/images/closedphone.gif"
                          alt="phone gif"
                          width={CAM_DESIGN.width}
                          height={CAM_DESIGN.height}
                          priority
                          className="
                            hidden sm:block pointer-events-none select-none absolute z-0 h-auto
                            max-[880px]:left-1/2 max-[880px]:-translate-x-1/2 max-[880px]:right-auto
                          "
                          style={{
                            // default desktop anchoring to the right (ignored when <=880px by the classes above)
                            right: `max(16px, calc((100vw - 1440px) / 2 + 24px))`,
                            bottom: BOTTOM_CLAMP,
                            width: CAM_W_CLAMP, // responsive width; height follows
                          }}
                        />
                      </section>
                    );
                  }
                  