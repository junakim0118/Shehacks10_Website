import Image from "next/image";

export default function Sponsor() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Sponsors section */}
      <section className="w-full flex flex-col justify-center mt-8 md:mt-12 lg:mt-16">
        <div>
          <h2 className="text-sm text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-center ">
            This Year's Sponsors
          </h2>
        </div>
        <div className="relative w-full flex justify-center mt-12">
          <div className="relative w-[60vw] max-w-[1200px]">
            {/* Sponsor Image */}
            <Image
              src="/images/sponsors.png"
              alt="Sponsors"
              width={2000}
              height={1800}
              className="w-full h-auto object-contain select-none pointer-events-none"
              priority
            />

            {/* Radio Image */}
            <div className="absolute -bottom-[6vw] -right-[2%] w-[15vw] sm:w-35 sm:-bottom-[29%] md:w-45 md:-bottom-[32%] lg:w-[25vw] lg:-bottom-[15vw] xl:w-80 xl:-bottom-[15vw] 2xl:w-[23vw] 2xl:-bottom-[15vw] aspect-square">
              <Image
                src="/images/radio.png"
                alt="radio"
                aria-hidden
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Heart Image */}
            <div className="absolute -bottom-[3vw] -left-[2%] w-[8vw] sm:w-[8vw] sm:-bottom-[3%] md:w-[8vw] md:-bottom-[3%] lg:w-[8vw] lg:-bottom-[3vw] xl:w-[8vw] xl:-bottom-[3vw] 2xl:w-[8vw] 2xl:-bottom-[3vw] aspect-square">
              <Image
                src="/images/heart.png"
                alt="heart"
                aria-hidden
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Star Image */}
            <div className="absolute -bottom-[10vw] left-[8%] w-[8vw] sm:w-[8vw] sm:-bottom-[10vw] md:w-[8vw] md:-bottom-[10vw] lg:w-[8vw] lg:-bottom-[10vw] xl:w-[8vw] xl:-bottom-[10vw] 2xl:w-[8vw] 2xl:-bottom-[10vw] aspect-square">
              <Image
                src="/images/star2.png"
                alt="star"
                aria-hidden
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Babystar Image */}
            <div className="absolute -bottom-[2vw] left-[20%] w-[2vw] sm:w-[2vw] sm:-bottom-[2vw] md:w-[2vw] md:-bottom-[2vw] lg:w-[2vw] lg:-bottom-[2vw] xl:w-[2vw] xl:-bottom-[2vw] 2xl:w-[2vw] 2xl:-bottom-[2vw] aspect-square">
              <Image
                src="/images/babystar.png"
                alt="baby star"
                aria-hidden
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="mt-8 -ml-20 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold opacity-80 text-center">
              Coming soon...
          </h3>
        </div>
      </section>
    </div>
  );
}
