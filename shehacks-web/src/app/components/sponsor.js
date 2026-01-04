import Image from "next/image";

const floatingStyles = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
  }
  .float-animation {
    animation: float 3s ease-in-out infinite;
  }
`;

export default function Sponsor() {
  // list of sponsor logos and their positions (percent values)
  const logos = [
    
    { src: '/images/sponsors/cibc.png', alt: 'cibc', left: '29%', top: '41%', size: '9vw' },
    { src: '/images/sponsors/td.png', alt: 'td', left: '65%', top: '18%', size: '12vw' },
    { src: '/images/sponsors/otpp.png', alt: 'otpp', left: '78%', top: '49%', size: '10vw' },
    { src: '/images/sponsors/ey.png', alt: 'ey', left: '58%', top: '65.5%', size: '7vw' },
    { src: '/images/sponsors/cse.jpg', alt: 'cse', left: '37.5%', top: '60%', size: '7.5vw' },
    { src: '/images/sponsors/rewritingthecode.png', alt: 'rtc', left: '74%', top: '64%', size: '9.5vw' },
  ];
  return (
    <div className="flex flex-col items-center w-full">
      <style>{floatingStyles}</style>
      {/* Sponsors section */}
      <section className="w-full flex flex-col justify-center mt-8 md:mt-12 lg:mt-16">
        <div>
          <h2 className="text-sm text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-center ">
            This Year's Sponsors !!
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

            {/* Company logos placed on top of the sponsor image */}
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="absolute float-animation"
                style={{ left: logo.left, top: logo.top, width: logo.size, boxShadow: '0 8px 5px rgba(0, 0, 0, 0.2)' }}
              >
                <div className="relative aspect-square">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          
        </div>
      </section>
    </div>
  );
}
