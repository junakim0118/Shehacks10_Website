import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Our Mission */}
      <div className="relative flex flex-row w-screen h-fit">
        <div className="relative w-full max-w-[1200px] mr-auto px-4">
          {/* Chrome frame */}
          <div
            className="relative w-full max-w-[1500px] mr-auto px-0"
            style={{
              top: "0%", // push down from the top
            }}
          >
            <div className="relative flex justify-center w-fit h-fit">
              <Image
                src="/images/mission-statement-frame.png"
                alt="Our Mission section"
                width={1061}
                height={890}
                className="w-[90vw] sm:w-[80vw] md:w-[70vw] h-auto object-contain select-none pointer-events-none"
                priority
              />
              <div className="absolute top-[1.5%] left-[35%] sm:top-[1.5%] sm:left-[32%] md:top-[1.5%] md:left-[32%] lg:top-[1.5%] lg:left-[32%] max-w-[60%]">
                  <h2 className="text-white text-[2vw] sm:text-lg md:text-2xl lg:text-[2em] font-bold">
                    Our Mission
                  </h2>
                  <p className="text-white text-[clamp(0.1rem,1.1vw,1.2rem)] mt-[4vw] sm:mt-[4.5vw] md:mt-[5vw] lg:mt-[7vw]">
                    Our vision is to enhance inclusivity by inviting participants from
                    diverse faculties and programs, transcending the typical hackathon
                    experience. We aim to create a supportive community, fostering
                    meaningful connections in tech. <br/><br/>
                    SheHacks+ is dedicated to empowering women and non-binary individuals
                    to grow as innovators, fostering leadership and creativity in a
                    traditionally underrepresented industry. We provide support through
                    building, innovating, and connecting with experts beyond the classroom.
                  </p>
              </div>
            </div>
          </div>       
        </div>

        {/* Stars: responsive size + percentage positioning so it stays inside the frame */}
        <div className="relative ml-auto top-[8%] sm:top-[6%] md:top-[5%]">
          <div className="relative w-10 sm:w-20 md:w-26 lg:w-30 aspect-square">
            <Image
              src="/images/stars.png"
              alt="Star decoration"
              fill
              className="object-contain select-none pointer-events-none"
              priority
            />
          </div>
        </div>


        {/* CD player*/}
        <div className="relative w-40 sm:w-50 md:w-68 lg:w-90 xl:w-130 aspect-square ml-auto self-end">
            <Image
              src="/images/cdplayer.png"
              alt=""
              aria-hidden
              fill
              className="object-contain"
              priority
            />
        </div>
      </div>
      

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

        {/* Last Year section - centered and responsive using aspect ratio */}
        <div className="w-full flex justify-center mt-6">
          <div className="relative w-[80vw] max-w-[1000px] aspect-[4/3]">
            <Image
              src="/images/last-year-we-had.png"
              alt="Last Year We Had"
              fill
              className="object-cover select-none pointer-events-none"
              priority
            />
          </div>
        </div>
      </section>

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
                alt=""
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
                alt=""
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
                alt=""
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
                alt=""
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
