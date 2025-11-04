import Image from "next/image";

export default function Connect() {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* Sponsors section */}
      <section className="relative w-full max-w-[1200px] mx-auto -mt-4 md:-mt-6 lg:-mt-8">
        {/* Centered text block */}
        <div className="flex flex-col items-center justify-center text-center py-100 px-4 -translate-y-100">
          <h1 className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-bold">
            Connect With Us
          </h1>
          <p className="mt-2 text-white text-xs sm:text-sm md:text-base lg:text-lg">
            hello@shehacks.ca
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
              href="https://www.facebook.com/your-page"
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

        {/* Overlay Panels Section */}
        <div className="relative w-full h-96 flex items-center justify-center">
          {/* Left Panel - positioned behind and slightly left of center */}
          <div className="absolute -translate-x-125 -translate-y-50 z-10 animate-none hover:scale-110 transition-all duration-500" style={{animationDuration: '6s'}}>
            <img 
              src="/images/leftpanel.png" 
              alt="Left Panel" 
              className="object-contain"
            />
          </div>
          
          {/* Main Panel - centered, highest z-index */}
          <div className="relative z-30 -translate-y-100 animate-bounce hover:scale-110 transition-all duration-1000" style={{animationDuration: '6.5s'}}>
            <img 
              src="/images/mainpanel.png" 
              alt="Main Panel" 
              className="object-contain"
            />
          </div>
          
          {/* Right Panel - positioned behind and slightly right of center */}
          <div className="absolute translate-x-125 -translate-y-50 z-20 animate-none hover:scale-110 transition-all duration-500" style={{animationDuration: '12s'}}>
            <img 
              src="/images/rightpanel.png" 
              alt="Right Panel" 
              className="object-contain"
            />
          </div>
        </div>

      </section>
    </div>
  );
}
