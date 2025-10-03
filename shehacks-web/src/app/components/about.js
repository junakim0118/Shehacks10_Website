import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Our Mission */}
      <div className="relative w-full max-w-[1200px] px-4">
        {/* Chrome frame */}
        <div
          className="relative w-full max-w-[1200px] px-4"
          style={{
            top: "0%", // push down from the top
            left: "35%", // center horizontally
            transform: "translateX(-50%)", // correct centering
          }}
        >
          <Image
            src="/images/mission-statement-frame.png"
            alt="Our Mission section"
            width={965}
            height={809}
            className="object-contain select-none pointer-events-none"
            priority
          />
          <h2
            className="absolute text-white text-2xl sm:text-3xl font-bold"
            style={{
              top: "2%", // push down from the top
              left: "34%", // center horizontally
              transform: "translateX(-50%)", // correct centering
            }}
          >
            Our Mission
          </h2>
          <p
            className="absolute text-white text-sm sm:text-lg font-medium max-w-[500px] text-left"
            style={{
              top: "18%", // push down from the top
              left: "27%", // center horizontally
            }}
          >
            Our vision is to enhance inclusivity by inviting participants from
            diverse faculties and programs, transcending the typical hackathon
            experience. We aim to create a supportive community, fostering
            meaningful connections in tech. SheHacks+ is dedicated to empowering
            women and non-binary individuals to grow as innovators, fostering
            leadership and creativity in a traditionally underrepresented
            industry. We provide support through building, innovating, and
            connecting with experts beyond the classroom.
          </p>
        </div>

        <Image
          src="/images/stars.png"
          alt="Star decoration"
          width={100}
          height={100}
          className="absolute right-60 top-[20%] select-none pointer-events-none"
        />
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
      
              {/* Last Year section - FULL WIDTH */}
              <div className="relative w-[60vw] h-[80vh]">
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
        <div className="w-full max-w-screen-xl px-4 flex justify-center">
          <Image
            src="/images/sponsors.png"
            alt="Sponsors"
            width={2000}
            height={1800}
            className="w-[60vw] h-[50vw] object-contain select-none pointer-events-none"
            sizes="100vw"
            priority
          />
        </div>
      </section>
    </div>
  );
}
