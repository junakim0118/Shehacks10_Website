import Image from "next/image";

export default function Connect() {
  return (
    <div className="flex flex-col items-center w-full">
    {/* CD with one star above + one star to the left */}
    <div className="w-screen flex justify-end mt-16 mb-10">
      <div className="relative w-[40vw] max-w-[450px] min-w-[120px]">
        {/* LEFT STAR — bigger */}
        <div className="
          absolute left-0 -translate-x-full top-1/2 -translate-y-1/2
          w-14 sm:w-16 md:w-20 aspect-square
        ">
          <Image
            src="/images/star2.png"
            alt="star left"
            fill
            className="object-contain"
          />
        </div>

        {/* CD IMAGE */}
        <Image
          src="/images/cd-wits.png"
          alt="wits cd"
          width={500}
          height={500}
          className="object-contain h-auto w-full"
          priority
        />
      </div>
    </div>
      {/* Sponsors section */}
      <section className="relative w-full max-w-[1200px] mx-auto">
        {/* Centered text block */}
        <div className="flex flex-col items-center justify-center text-center py-8 px-4">
          <h1 className="text-white text-lg sm:text-xl md:text-4xl lg:text-5xl font-bold">
            Connect With Us
          </h1>
          <p className="mt-2 text-white text-xs sm:text-sm md:text-base lg:text-lg">
            wits.uwo@gmail.com
          </p>

          {/* Three extra-small images under the text */}
          <div className="mt-6 flex items-center justify-center gap-1 sm:gap-2">
            <a
              href="https://www.linkedin.com/company/uwowits/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="relative w-4 sm:w-5 md:w-6 aspect-square"
            >
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                fill
                className="object-contain select-none pointer-events-none"
              />
            </a>

            <a
              href="https://www.instagram.com/wits.uwo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="relative w-4 sm:w-5 md:w-6 aspect-square"
            >
              <Image
                src="/images/instagram.png"
                alt="Instagram"
                fill
                className="object-contain select-none pointer-events-none"
              />
            </a>

            <a
              href="https://www.facebook.com/wits.uwo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="relative w-4 sm:w-5 md:w-6 aspect-square"
            >
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                fill
                className="object-contain select-none pointer-events-none"
              />
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
