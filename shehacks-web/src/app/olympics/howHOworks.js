import Image from "next/image";
 export default function HOInfo() {
    return (
        <section
        id = "howHOworks"
        className="relative scroll-mt-28 pt-24 md:pt-10"
        style = {{paddingBottom: "clamp(220px, 28vw, 140px)"}}>
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-left">
                {/*This section has the title */}
                <div className= "relative inline-block">
                    <h2 className="[text-shadow:1px_1px_2px_rgba(0,0,0,1)] text-2xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic leading-relaxed">
                        How Does Hacker <br/> Olympics Work?
                    </h2>
                    <div className="absolute top-[15%] left-[105%] w-[4vw] h-[4vw] ">
                        <Image
                        alt=""
                        aria-hidden
                        src= "/images/topstars.png"
                        fill 
                        priority
                        />
                    </div>
                </div>
                {/*This has the paragraph and tv image */}
                <div className="flex flex-col md:flex-row md:items-start max-w-4xl mx-auto gap-6">
                    <p className="max-w-xl leading-relaxed ">
                        <br/>
                        <br/>
                    Hackers in this stream will work in teams of 4 to complete a project (“mini hack”) instead of competing in the regular stream. The project will be built upon skills taught in workshops that run during SheHacks+, and are specifically designed for beginners in the Hacker Olympics stream.
                    Bridge the skills gap that drives the lack of diversity in the tech industry
                    <br/><br/>Women and non-binary individuals face more barriers to exploring tech interests and getting the education and experience to enter the tech industry. Hacker Olympics is their first step in bridging the gap.
                    <br/>⧆⧆ {">>>>>>>"}
                    </p>
                    <div className="relative w-[70vw] max-w-[400px] sm:w-[48vw] md:w-[360px] lg:w-[400px] mx-auto sm:mt-[-10px] lg:mt-[-50px]">
                        <Image
                          src="/images/tv.png"
                          alt=""
                          aria-hidden
                          width={1000}
                          height={1000}
                          priority
                          className="w-full h-auto"
                        />
                        <div className="absolute top-[-10%] right-[5%] w-[14px] sm:w-[20px] md:w-[26px]">
                            <Image
                              src="/images/topstars.png"
                              alt=""
                              aria-hidden
                              width={20}
                              height={20}
                              priority
                              className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>            
    )
 }