import Image from "next/image";

export default function About() {
  return (
    <div className="w-full">
      {/* Mission Statement section */}
      <section className="w-full flex justify-start py-8 sm:py-12 md:py-16">
        <div className="relative right-4 sm:right-8 md:right-12 lg:right-16 w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] max-w-[850px]">
          <Image
            src="/images/missioin-statement-chrome.png"
            alt="Our Mission section"
            width={1064}
            height={809}
            className="w-full h-auto object-contain select-none pointer-events-none"
            priority
          />
          <Image
            src="/images/star.png"
            alt="Star decoration"
            width={70}
            height={70}
            className="absolute -right-8 sm:-right-12 md:-right-16 top-[5%] w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 select-none pointer-events-none"
          />
          <Image
            src="/images/star.png"
            alt="Star decoration"
            width={40}
            height={40}
            className="absolute -right-4 sm:-right-8 md:-right-12 top-[15%] w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 select-none pointer-events-none"
          />
        </div>
      </section>

      {/* Nintendo section */}
      <section className="w-full flex justify-center py-8 sm:py-12 md:py-16">
        <div className="w-[90vw] sm:w-[80vw] md:w-[75vw] lg:w-[65vw] max-w-[700px] px-4">
          <Image
            src="/images/shehacks-nintendo.png"
            alt="SheHacks Nintendo section"
            width={500}
            height={600}
            className="w-full h-auto object-contain select-none pointer-events-none"
            priority
          />
        </div>
      </section>

      {/* Last Year section */}
      <section className="w-full flex justify-center py-8 sm:py-12 md:py-16">
        <div className="w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] max-w-[1100px] px-4">
          <Image
            src="/images/last-year-we-had.png"
            alt="Last Year We Had"
            width={2000}
            height={800}
            className="w-full h-auto object-contain select-none pointer-events-none"
            priority
          />
        </div>
      </section>

      {/* Sponsors section */}
      <section className="w-full flex justify-center py-8 sm:py-12 md:py-16">
        <div className="w-[85vw] sm:w-[75vw] md:w-[65vw] lg:w-[55vw] max-w-[800px] px-4">
          <Image
            src="/images/sponsors.png"
            alt="Sponsors"
            width={2000}
            height={1800}
            className="w-full h-auto object-contain select-none pointer-events-none"
            priority
          />
        </div>
      </section>
    </div>
  );
}