import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Our Mission */}
      <div className="relative w-full max-w-[1200px] px-4">
        {/* Chrome frame */}
        <div
          className="relative w-full max-w-[1500px] px-0"
          style={{
            top: "0%", // push down from the top
            left: "40%", // center horizontally
            transform: "translateX(-50%)", // correct centering
          }}
        >
          <h2
            className="absolute text-white text-xs sm:text-lg md:text-2xl lg:text-3xl font-bold text-left px-4 sm:px-2 md:px-8 lg:px-20  top-[0%] sm:top-[0%] md:top-[1%] lg:top-[1.5%]  ml-[22vw] sm:ml-[20vw] md:ml-[18vw] lg:ml-[16vw] left-padding:1vw"
          >
            Our Mission
          </h2>
          <div className="relative flex justify-center w-fit h-fit">
             <Image
            src="/images/mission-statement-frame.png"
            alt="Our Mission section"
            width={1061}
            height={890}
            className="w-[90vw] sm:w-[80vw] md:w-[70vw] h-auto object-contain select-none pointer-events-none"
            priority
          />
          <p
            className="absolute text-white text-[clamp(0.3rem,1.1vw,1.20rem)] font-large max-w-[50vw] max-h-[70%] text-left px-4 sm:px-4 md:px-8 lg:px-20 top-[15%] sm:top-[15%] md:top-[17%] lg:top-[19%] ml-[22vw] sm:ml-[20vw] md:ml-[18vw] lg:ml-[16vw]"
          >
            Our vision is to enhance inclusivity by inviting participants from
            diverse faculties and programs, transcending the typical hackathon
            experience. We aim to create a supportive community, fostering
            meaningful connections in tech. <br></br><br></br>SheHacks+ is dedicated to empowering
            women and non-binary individuals to grow as innovators, fostering
            leadership and creativity in a traditionally underrepresented
            industry. We provide support through building, innovating, and
            connecting with experts beyond the classroom.
          </p>
          </div>          
        </div>

        {/* Stars: responsive size + percentage positioning so it stays inside the frame */}
        <div className="absolute z-20 top-[8%] right-[3%] sm:top-[6%] sm:right-[2%] md:top-[5%] md:right-[1%]">
          <div className="relative w-8 sm:w-12 md:w-16 lg:w-20 aspect-square">
            <Image
              src="/images/stars.png"
              alt="Star decoration"
              fill
              className="object-contain select-none pointer-events-none"
              priority
            />
          </div>
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
          <div className="w-full max-w-screen-xl flex items-center justify-center mt-12 mx-auto">
          <Image
            src="/images/sponsors.png"
            alt="Sponsors"
            width={2000}
            height={1800}
            className="block mx-auto w-[60vw] max-w-[1200px] h-auto object-contain select-none pointer-events-none"
            sizes="(max-width:640px) 90vw, (max-width:1024px) 70vw, 60vw"
            priority
          />
        </div>
        <div>
          <h3 className="mt-8 text-base sm:text-xl md:text-3xl lg:text-4xl font-semibold opacity-80 text-center">
              Coming soon...
          </h3>
        </div>
      </section>
    </div>
  );
}
