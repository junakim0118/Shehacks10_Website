  import Image from "next/image";

export default function History() {
  return (
  <div className="w-full">

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