import Image from "next/image";
import Link from "next/link";

export default function Landing() {
    return (
        <section
            id="landing"
            className="relative min-h-[50vh] flex items-start justify-start overflow-visible py-10"
        >
            <div className="relative w-full px-10">
                {/* Unified Mobile and Tablet layout (everything that is below lg) */}
                <div className="flex flex-col items-center justify-center space-y-4 lg:hidden">
                    {/*Hacker olympics logo*/}
                    <Image
                        src="/images/hacker-olympics.png"
                        alt="Hacker-Olympics X Logo"
                        width={1000}
                        height={1000}
                        priority
                        className="object-contain w-[120%] sm:w-[90%] md:w-[80%] h-auto -mb-6 max-w-[500px]"
                    />

                    <p className="text-white leading-relaxed italic text-center px-4 -mt-5 max-w-[600px]">
                        New to tech or hackathons in general? SheHacks offers Hacker Olympics for beginners who are new and open to learning more about tech through beginner workshops and hacker challenges. Win prizes and other opportunities with Hacker Olympics. Compete against other beginners or individuals who are at a skill level closer to yours!
                    </p>

                    {/* Star and Phone centered together */}
                    <div className="flex items-center justify-center gap-0 w-full px-6 mx-auto">
                        <Image
                            src="/images/stars.png"
                            alt="Stars"
                            width={75}
                            height={75}
                            priority
                            unoptimized
                            className="object-contain w-[clamp(60px,3vw,120px)] h-auto"
                        />

                        <Image
                            src="/images/phone.gif"
                            alt="Retro flip phone animation"
                            width={500}
                            height={500}
                            priority
                            unoptimized
                            className="object-contain w-[100%] max-w-[280px] h-auto"
                        />
                    </div>

                    {/* Apply button - using the applyhacker.png as I couldn't find applynow.png*/}
                    <div className="group" aria-label="ApplyButton!">
                          <Link href="https://tally.so/r/rj5keX" target="_blank" rel="noopener noreferrer">
                                <Image
                                src="/images/applyButton.png"
                                alt="Apply!"
                                width={414}
                                height={153}
                                priority
                                sizes="(min-width:1024px) 300px, (min-width:768px) 260px, (min-width:640px) 240px, 200px"
                                className="
                                    h-auto
                                    w-[200px] sm:w-[240px] md:w-[260px] lg:w-[300px]
                                    transition-transform duration-200
                                    group-hover:scale-[1.01] group-active:scale-[0.985]
                                    hover:brightness-110
                                    drop-shadow-[0_6px_14px_rgba(255,255,255,0.25)]
                                "
                                />
                            </Link>
                            </div>
                </div>

                {/* Desktop layout - full spacing (≥1024px) */}
                <div className="hidden lg:grid w-full min-h-[700px] lg:px-0 grid-cols-[1fr_480px] items-start gap-x-6">

                    {/* Left side: logo + paragraph + button stacked */}
                    <div className="flex flex-col justify-start items-start pl-[6vw]">
                        {/* Wrap logo + paragraph in their own stack */}
                        <div className="relative w-fit">
                            <Image
                                src="/images/hacker-olympics.png"
                                alt="Hacker-Olympics X Logo"
                                width={2400}
                                height={2400}
                                priority
                                className="object-contain w-[70vw] max-w-[1300px] h-auto ml-[-8vw]"
                            />

                            <div className="absolute right-[13%] bottom-[10%] w-fit">
                                <Image
                                    src="/images/stars.png"
                                    alt="Stars"
                                    width={90}
                                    height={90}
                                    priority
                                    unoptimized
                                    className="object-contain w-[80px] h-auto"
                                />

                                {/* Phone – positioned relative to the star */}
                                <div className="relative">
                                    <Image
                                        src="/images/phone.gif"
                                        alt="Retro flip phone animation"
                                        width={1000}
                                        height={1000}
                                        priority
                                        unoptimized
                                        className="absolute top-[100%] right-[-500%] object-contain w-[50vw] max-w-[550px] h-auto transform -translate-y-[30%]"
                                    />
                                </div>
                            </div>

                            <p className="text-white leading-relaxed italic max-w-[65%] mt-[-30%]">
                                New to tech or hackathons in general? SheHacks offers Hacker Olympics for beginners who are new and open to learning more about tech through beginner workshops, hacker challenges. Win prizes and other opportunities with Hacker Olympics. Compete against other beginners or individuals who are at a skill level closer to yours!
                            </p>
                        </div>

                        {/* Apply button - same as above: using applyhacker.png for now */}
                         <div className="mt-8 flex justify-center">
                        <div className="group" aria-label="Apply Button!">
                              <Link href="https://tally.so/r/Xxljq4" target="_blank" rel="noopener noreferrer">
                                    <Image
                                    src="/images/applyButton.png"
                                    alt="Apply Button!"
                                    width={414}
                                    height={153}
                                    priority
                                    sizes="(min-width:1024px) 300px, (min-width:768px) 260px, (min-width:640px) 240px, 200px"
                                    className="
                                        h-auto
                                        w-[200px] sm:w-[240px] md:w-[260px] lg:w-[300px]
                                        transition-transform duration-200
                                        group-hover:scale-[1.01] group-active:scale-[0.985]
                                        hover:brightness-110
                                        drop-shadow-[0_6px_14px_rgba(255,255,255,0.25)]
                                    "
                                    />
                                </Link>
                                    </div>
                                </div>
                    </div>

                </div>

            </div>
        </section>
    );
}