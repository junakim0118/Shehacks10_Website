import Image from "next/image";

export default function About() {
  return (
    <div className="w-full">
      {/* Mission Statement section */}
        <section className="w-full flex justify-start mb-2 md:mb-4">
        <div className="relative right-80 w-[min(90vw,700px)] md:w-[min(75vw,850px)]">
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
            className="absolute -right-12 sm:-right-14 md:-right-16 top-[5%] w-12 h-12 sm:w-16 sm:h-16 md:w-[70px] md:h-[70px] select-none pointer-events-none"
          />
          <Image
            src="/images/star.png"
            alt="Star decoration"
            width={40}
            height={40}
            className="absolute -right-8 sm:-right-10 md:-right-[4.5rem] top-[15%] w-8 h-8 sm:w-10 sm:h-10 md:w-[40px] md:h-[40px] select-none pointer-events-none"
          />
        </div>
      </section>
      {/* Nintendo + Last Year */}
      <section className="w-full flex flex-col items-center -mt-10 md:-mt-14">

        {/* Nintendo section */}
        <div className="w-full sm:w-[80vw] md:w-[85vw] lg:w-[800px] xl:w-[800px] px-4 sm:px-6 md:px-8">
          <Image
            src="/images/shehacks-nintendo.png"
            alt="SheHacks Nintendo section"
            width={700}
            height={600}
            className="block w-full h-auto object-contain select-none pointer-events-none"
            sizes="(min-width: 1280px) 1000px, (min-width: 1024px) 900px, (min-width: 768px) 85vw, 90vw"
            priority
          />
        </div>

        {/* Last Year section - FULL WIDTH */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
        <Image
            src="/images/last-year-we-had.png"
            alt="Last Year We Had"
            fill
            className="object-cover select-none pointer-events-none"
            priority
        />
        </div>
    </section>
    {/* Sponsors section */}
<section className="w-full flex justify-center mt-8 md:mt-12 lg:mt-16">
  <div className="w-full max-w-screen-xl px-4">
    <Image
      src="/images/sponsors.png"
      alt="Sponsors"
      width={2000}
      height={1800}
      className="w-full h-auto object-contain select-none pointer-events-none"
      sizes="100vw"
      priority
    />
  </div>
</section>
</div>
  );
}