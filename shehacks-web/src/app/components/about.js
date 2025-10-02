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
      
    </div>
  );
}
