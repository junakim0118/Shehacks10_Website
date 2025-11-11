import Image from "next/image";

export default function Connect() {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* Sponsors section */}
      <section className="relative w-full max-w-[1200px] mx-auto mt-8 md:mt-12 lg:mt-16">
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
