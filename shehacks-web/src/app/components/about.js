import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Our Mission */}
     <section className="w-full flex justify-center mb-12">
  
  <div className="relative w-full max-w-[1200px] px-4" >
    {/* Chrome frame */}
    <Image
      src="/images/missioin-statement-chrome.png"
      alt="Our Mission section"
      width={3000}
      height={3000}
      className="w-full h-auto object-contain select-none pointer-events-none"
      priority
    />
    <h2
            className="absolute text-white text-2xl sm:text-3xl font-bold"
            style={{
              top: "15%",    // push down from the top
              left: "30%",  // center horizontally
              transform: "translateX(-50%)", // correct centering
            }}
          >
            Our Mission
          </h2>
    <p
            className="absolute text-white text-sm sm:text-lg font-medium max-w-[600px] text-center"
            style={{
              top: "35%",    // push down from the top
              left: "40%",  // center horizontally
              transform: "translateX(-50%)", // correct centering
            }}
          >
            Empowering women through technology
          </p>

    <Image
      src="/images/star.png"
      alt="Star decoration"
      width={70}
      height={70}
      className="absolute right-70 top-[20%] select-none pointer-events-none"
    />

    
    <Image
      src="/images/star.png"
      alt="Star decoration"
      width={40}
      height={40}
      className="absolute right-65 top-[29%] select-none pointer-events-none"
    />
  </div>
</section>

{/* Nintendo section */}
<section className="w-full flex justify-center">
  <div className="mx-auto w-[min(90vw,720px)]"> 
    {/* ↑ never wider than 720px; still responsive on small screens */}
    <Image
      src="/images/shehacks-nintendo.png"
      alt="SheHacks Nintendo section"
      width={720}          // layout width we want
      height={835}         // keep aspect ratio roughly correct
      className="block w-full h-auto object-contain select-none pointer-events-none"
      sizes="(min-width: 800px) 720px, 90vw"
      priority
    />
  </div>
</section>
    </div>
  );
}
